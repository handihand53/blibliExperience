<template>
  <div class="bg-gray">
    <PlainHeaderMarket/>
    <div class="bg-white p-2">
      <small class="text-gray">Detail Pemesanan</small>
    </div>
    <div class="p-2">
      <div class="card rounded-0 border shadow-sm">
        <div class="p-2 bg-gray-card">
          <p class="m-0 text-title-card">Tanggal pemesanan : {{
            getMonthYear(product.orderCreatedAt)
          }}</p>
        </div>
        <div class="">
          <div class="p-2">
            <p class="text-title-card m-0">Kode Pemesanan
            <span class="cl-blue">{{product.orderTransactionId}}</span></p>
            <p class="text-card m-0">Total Harga
              <span class="price">Rp{{formatPrice(price)}}</span>
            </p>
            <p class="text-card m-0">Nama Pemesan
              <span class="cl-blue">{{product.userDataForm.userName}}</span></p>
              <p class="text-card2 m-0">Alamat Pengiriman:
              <span class="">{{product.userDataForm.userAddressForms[0].detail}}</span></p>
          </div>
          <hr>
          <div class="d-flex align-items-start p-2 no-gutters"
          v-for="product in product.cartForms"
          :key="product.stockForm.productDataForm.productId">
            <div class="col-3 no-gutters">
              <img :src="getImage(product.stockForm.productDataForm.productImagePaths[0])"
              alt="" class="img-detail border">
            </div>
            <div class="col-9 pl-2 column no-gutters ">
              <p class="m-0 text-card">{{ product.stockForm.productDataForm.productName }}</p>
              <p class="m-0 text-card">Brand:
                <span class="cl-blue">{{ product.stockForm.productDataForm.productBrand }}</span>
              </p>
              <p class="m-0 text-card">Jumlah:
                {{ product.amount }}
              </p>
              <p class="price m-0 text-card fs-15">
                Rp{{formatPrice(product.stockForm.productPrice)}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-navigation p-2 row no-gutters"
    v-if="product.orderStatus === 'PAID'">
      <div class="col-6">
        <p class="text-total">Total Belanja({{ long }})</p>
        <p class="text-price">Rp{{ formatPrice(price) }}</p>
      </div>
      <div class="col-6 right p-0">
        <button class="btn-checkout"
        @click="proses">Proses</button>
      </div>
    </div>
    <div class="overlay-loading d-flex align-items-center"
    :class="{hide: !isLoading}">
      <b-spinner
      type="grow"
      variant="primary"
      class="ml-auto mr-auto spinner"
      ></b-spinner>
    </div>
  </div>
</template>

<script>
import PlainHeaderMarket from '@/components/PlainHeaderMarket.vue';
import axios from 'axios';
import Cookie from 'vue-cookie';

export default {
  components: {
    PlainHeaderMarket,
  },
  data() {
    return {
      isLoading: false,
      product: {
        userDataForm: {
          userName: '',
        },
      },
      monthNames: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
      ],
      price: 0,
      long: 0,
      status: '',
    };
  },
  async created() {
    await this.checkLoginUser();
    await this.getPesananMasuk();
  },
  methods: {
    async checkLoginUser() {
      this.isLoggedIn = true;
      // melakukan check apakah user masih login atau tidak
      // jika user masih login, maka akan dilempar ke halaman utama
      const dataId = Cookie.get('dataIdMerchant');
      // const dataShopId = Cookie.get('dataShopIdMerchant');
      const dataToken = Cookie.get('dataTokenMerchant');
      await axios.get(`http://localhost:${this.port}/experience/api/shops?userId=${dataId}`,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .catch(() => {
          this.$router.push('/merchant/login');
        });
    },
    async getPesananMasuk() {
      // melakukan check apakah user masih login atau tidak
      // jika user masih login, maka akan dilempar ke halaman utama
      const dataToken = Cookie.get('dataTokenMerchant');
      await axios.get(`http://localhost:${this.port}/experience/api/order?orderId=${this.$route.params.id}`,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .then((res) => {
          this.product = res.data.data;
          console.log(this.product);
          this.long = this.product.cartForms.length;
          this.product.cartForms.forEach((data) => {
            this.price += data.amount * data.stockForm.productPrice;
          });
        })
        .catch(() => {
          this.$router.replace('/merchant/login');
        });
    },
    async proses() {
      this.isLoading = true;
      // add logic checkout here
      const update = {
        deliveryReceipt: 'sk-jdow',
        orderId: this.product.orderId,
      };

      const dataToken = Cookie.get('dataTokenMerchant');
      await axios.put(`http://localhost:${this.port}/experience/api/merchant/order/deliveryReceipt`, update,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .then(() => {
          setTimeout(() => this.$router.push('/merchant/transaksi-berhasil'), 1000);
        })
        .catch(() => {
          this.$router.replace('/merchant/login');
        });
    },
    getMonthYear(date) {
      const theDate = new Date(date);
      return `${theDate.getDate()} ${this.monthNames[theDate.getMonth()]} ${theDate.getFullYear()}`;
    },
    formatPrice(value) {
      const val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    getImage(imagePath) {
      const path = imagePath.split('/');
      return `/assets/resources/uploads/productPhoto/${path[path.length - 1]}`;
    },
  },
};
</script>

<style scoped>
.bottom-navigation{
  position: fixed;
  bottom: 0;
  height: 60px;
  background-color: white;
  width: 100%;
  box-shadow: 0px 0px 13px -7px rgba(0, 0, 0, 0.75);
}

.hide{
  display: none!important;
}

.overlay-loading{
  z-index: 200;
  background-color: #0000006a;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
}

.bg-gray{
  background-color: #F6F6F6;
}

.cl-blue{
  color: #3594FF;
}

.fs-15{
  font-size: 18px !important;
  font-weight: 600;
}

.price{
  color: #FF7600;
}

.text-total{
  font-size: 12px;
  padding: 0px;
  margin: 0px;
}

hr{
  margin: 0px!important;
}

.text-price{
  font-size: 18px;
  padding: 0px;
  margin: 0px;
  color: #ff7600;
  font-weight: 600;
}

.text-title-card{
  font-size: 13px;
}

.btn-checkout{
  width: 117px;
  height: 40px;
  font-size: 14px;
  color: white;
  background-color: #FD8218;
  border: none;
  border-radius: 7px;
  display: block;
  margin-top: 3px;
  float: right;
  transition: all 0.7s;
}

.btn-checkout:hover {
  background: #e86c00 radial-gradient(circle, transparent 1%, #e86c00 1%)
    center/15000%;
  color: white;
}

.img-detail{
  width: 80px;
}

.text-card{
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text-card2{
  font-size: 13px;
}

.bg-gray-card{
  background-color: #E3E3E3;
}

.btn-checkout:active {
  background-color: #ff973b;
  background-size: 100%;
  transition: background 0s;
}

.bg-gray{
  background-color: #F6F6F6;
  height: 100vh;
}

.text-gray{
  color: rgb(121, 121, 121);
}
</style>
