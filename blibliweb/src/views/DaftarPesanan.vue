<template>
  <div class="bg-gray">
    <HeaderWithCart/>
    <div class="bg-white box-shadow">
      <div class="p-2 border-bottom">
        <p style="color: #AEAEAE; font-weight: 400;">Pesanan</p>
      </div>
      <div class="d-flex justify-content-between mt-2 pb-2">
        <div class="overflow-x">
          <span class="mx-2">
            <b-button pill variant="outline-primary"
            class="px-3" @click="changeStatus(0, 'WAITING_FOR_PAYMENT')" size="sm" id="changeStat0"
            :class="{buttonActive : this.isActive[0]}">Menunggu pembayaran</b-button>
          </span>
          <span class="mx-2">
            <b-button pill variant="outline-primary"
            class="px-3" @click="changeStatus(1, 'PAID')" size="sm" id="changeStat1"
            :class="{buttonActive : this.isActive[1]}">Dibayar</b-button>
          </span>
          <span class="mx-2">
            <b-button pill variant="outline-primary"
            class="px-3" @click="changeStatus(2, 'DELIVERED_TO_CONSUMER')"
            size="sm" id="changeStat2"
            :class="{buttonActive : this.isActive[2]}">Sedang dikirim</b-button>
          </span>
          <span class="mx-2">
            <b-button pill variant="outline-primary"
            class="px-3" @click="changeStatus(3, 'FINISHED')"
            size="sm" id="changeStat3"
            :class="{buttonActive : this.isActive[3]}">Diterima</b-button>
          </span>
        </div>
      </div>
    </div>
    <div class="text-align-center content-margin" v-if="show">
      <img src="/assets/etc/people.png" alt=""
      class="img-empty">
      <h4 class="mt-1">Belum ada transaksi lagi nih!</h4>
      <small>Mau beli apa lagi ya ?<br>
        Coba cari produk yang mau kamu beli.</small>
      <br>
      <router-link to="/" class="mt-3 mb-5">Disini</router-link>
    </div>
    <div class="bg-gray"
    v-for="(product, idx) in product" :key="product.orderId">
      <div class="p-2">
        <div class="card shadow-sm border-0 rounded-0">
          <div class="p-2 bg-gray-card">
            <p class="m-0 text-title-card">Tanggal pemesanan :
              {{getMonthYear(product.orderCreatedAt)}}</p>
          </div>
          <div class="p-2">
            <p class="text-title-card m-0">Kode Pemesanan
              <span class="cl-blue">{{ product.orderTransactionId }}</span></p>
            <p class="text-card m-0">Total Harga
              <span class="price">Rp{{ formatPrice(total[idx])}}</span></p>
            <p class="text-card m-0">Metode
              <span class="cl-blue">{{ getStatus(product.deliveryType) }}</span></p>
            <div class="d-flex align-items-end row pt-2 no-gutters">
              <div class="col-7 row no-gutters">
                <img :src="getImage(picture)"
                v-for="(picture, i) in picture[idx]"
                :key="picture+i"
                alt="" class="img-preview border">
              </div>
              <div class="col-5 column ml-auto no-gutters">
                <router-link :to="'/daftar-pesanan/detail/'+product.orderId">
                  <b-button class="pl-5 pr-5" variant="outline-primary">Lihat</b-button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import HeaderWithCart from '@/components/HeaderWithCart.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
import Cookie from 'vue-cookie';

export default {
  components: {
    HeaderWithCart,
    Footer,
  },
  data() {
    return {
      isActive: [
        true,
        false,
        false,
        false,
      ],
      product: [],
      total: [],
      picture: [],
      currentState: 'WAITING_FOR_PAYMENT',
      monthNames: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
      ],
      show: false,
    };
  },
  async created() {
    await this.checkUser();
    this.getPesanan();
  },
  methods: {
    changeStatus(idx, stat) {
      this.currentState = stat;
      this.getPesanan();
      this.isActive.splice(idx, 1, true);
      for (let i = 0; i < this.isActive.length; i += 1) {
        if (i !== idx) this.isActive.splice(i, 1, false);
      }
    },
    checkUser() {
      // melakukan check apakah user masih login atau tidak
      // jika user masih login, maka akan dilempar ke halaman utama
      const dataId = Cookie.get('dataId');
      const dataToken = Cookie.get('dataToken');
      axios.get(`http://localhost:${this.port}/experience/api/users?id=${dataId}`,
        {
          headers:
            {
              Authorization: `Bearer ${dataToken}`,
            },
        })
        .then((response) => {
          if (response.data === null) {
            this.$router.push('/');
          }
          this.isLoading = false;
          this.nama = response.data.data.userName;
          this.createdAt = response.data.data.userCreatedAt;
        })
        .catch(() => {
          this.isLogin = false;
        });
    },
    async getPesanan() {
      // melakukan check apakah user masih login atau tidak
      // jika user masih login, maka akan dilempar ke halaman utama
      const dataId = Cookie.get('dataId');
      const dataToken = Cookie.get('dataToken');
      await axios.get(`http://localhost:${this.port}/experience/api/order/user?userId=${dataId}`,
        {
          headers:
            {
              Authorization: `Bearer ${dataToken}`,
            },
        })
        .then((response) => {
          this.product = [];
          this.picture = [];
          this.total = [];
          response.data.data.forEach((x) => {
            if (x.orderStatus === this.currentState) {
              this.product.push(x);
            }
          });
          let idx = 0;
          this.product.forEach((s) => {
            const imageProduct = [];
            let p = 0;
            s.cartForms.forEach((d) => {
              if (idx <= 2) {
                imageProduct.push(d.stockForm.productDataForm.productImagePaths[0]);
              }
              idx += 1;
              p += d.amount * d.stockForm.productPrice;
            });
            this.total.push(p);
            this.picture.push(imageProduct);
            idx = 0;
          });
        })
        .catch(() => {
          this.show = true;
        });
      this.show = this.product.length === 0;
    },
    formatPrice(value) {
      const val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    getStatus(str) {
      if (str === 'SELF_SERVICE') {
        return 'Ambil langsung';
      }
      return 'Dikirim ke rumah';
    },
    getImage(imagePath) {
      const path = imagePath.split('/');
      return `/assets/resources/uploads/productPhoto/${path[path.length - 1]}`;
    },
    getMonthYear(date) {
      const theDate = new Date(date);
      return `${theDate.getDate()} ${this.monthNames[theDate.getMonth()]} ${theDate.getFullYear()}`;
    },
  },
};
</script>

<style lang='scss' scoped>
@import '../style/font/font.scss';
.penawaran-text{
  font-size: 11px;
}

.desc-product{
  font-size: 11px;
  color: #AEAEAE;
  margin-top: 2px;
}

.buttonActive{
  background-color: rgb(0, 123, 255);
  color: white!important;
}

.img-empty{
  width: 40%;
}

.brand-product{
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0px;
}

.bg-gray-card{
  background-color: #E3E3E3;
}

.bg-gray{
  background-color: #F6F6F6;
}

.cl-blue{
  color: #3594FF;
}

.bg-gray-card{
  background-color: #E3E3E3;
}

.text-align-center{
  text-align: center;
  margin-top: 40px;
}

.price{
  color: #FF7600;
}

.status-product{
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 12px;
  margin: 0px;
  color: rgb(80, 140, 223);
}

.title-product{
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0px;
}

.text-title-card{
  font-size: 14px;
}

.img-preview{
  width: 50px;
  margin-left: 5px;
  margin-right: 5px;
}

.cl-blue{
  color: #3594FF;
}

.buy-btn{
    width: 100%;
    background-color: rgb(0, 128, 255);
    padding-top: 6px;
    padding-bottom: 6px;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: 500;
    transition: all 1s;
    font-size: 13px;
}

.buy-btn:hover {
  background: rgb(0, 128, 255) radial-gradient(circle, transparent 1%, rgb(0, 105, 209) 1%)
    center/15000%;
  color: white;
}

.buy-btn:active {
  background-color: rgb(0, 112, 224);
  background-size: 100%;
  transition: background 0s;
}

.custom-card{
  margin-top: 10px!important;
  border: 0.5px solid rgba(208, 208, 208, 0.245);
  background-color: white;
  border-radius: 10px;
}

.bg-gray{
  background-color: #f1f1f1;
}

.category {
  font-size: 13px;
  border-radius: 20px;
  padding: 4px 7px;
  font-weight: 600;
  color: #7c7c7c;
  background-color: #e0e0e0;
  cursor: pointer;
}

.un-active {
  transition: all 0.3s;
}

.un-active:hover {
  background: #e86c00 radial-gradient(circle, transparent 1%, #e86c00 1%)
    center/15000%;
  color: white;
}

.text-btn{
  font-size: 12px;
  width: 100%;
  margin-top: 5px;
}

.btn-bawah{
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;
}

.overflow-x{
  overflow-x: auto;
  white-space: nowrap;
}


.overflow-x::-webkit-scrollbar {
  display: none;
}

a:hover{
  text-decoration: none;
}


.cat-sticky{
  position: sticky;
  top: 10px;
  z-index: 500;
}

.sort-part{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: white;
  top: 0;
  left: 0;
  z-index: 100000;
  display: none;
}

.filter-part{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: white;
  top: 0;
  left: 0;
  z-index: 100000;
  display: none;
}

.un-active:active {
  background-color: #ff973b;
  background-size: 100%;
  transition: background 0s;
}

.title-product {
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #7c7c7c;
  margin-top: 5px;
}

.showSort{
  display: block!important;
}

.showFilter{
  display: block!important;
}

.product-price {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #ff7600;
}

.cst-card {
  box-shadow: 0px 0px 13px -9px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  padding: 0px;
  margin-top: 7px;
  max-width: 49.1%;
  border: 1px solid rgba(0, 0, 0, 0.061);
  padding: 7px;
  transition: all 1s;
}

.content-margin{
  margin-top: 120px;
  margin-bottom: 120px;
}

.cst-card:hover{
  box-shadow: 0px 5px 25px -9px rgba(0, 0, 0, 0.75);
}

.cont{
  min-height: 120px;
}

.cst-card:nth-child(even) {
  margin-left: 5px;
}

.img-product {
  max-width: 90px;
  max-height: 120px;
  display: block;
}

.fixed-alert{
  z-index: 100;
  position: fixed;
  bottom: 5px;
  margin: 5% auto; /* Will not center vertically and won't work in IE6/7. */
  left: 0;
  right: 0;
  z-index: 100000
}

p {
  margin: 0px;
}

.fix-filter-sort{
  position: fixed;
  bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  z-index: 1000;
}

.sort-fix{
  box-shadow: 0px 5px 13px -7px rgba(0, 0, 0, 1);
  background-color: white;
  border-radius: 27px;
  color: gray;
  padding: 10px;
}

.overflow-x{
  overflow-x: scroll;
}

// .active {
//   background-image: linear-gradient(to bottom right, #e86c00, #ff985c);
//   color: white;
// }

.content {
  flex-direction: row;
}

.no-padding {
  padding: 0px !important;
}

.no-margin {
  margin: 0px !important;
}
</style>
