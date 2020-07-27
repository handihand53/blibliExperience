<template>
  <div class="bg-gray">
    <div class="p-2" v-for="(product, idx) in product"
    :key="product.orderId">
      <div class="card shadow-sm border-0 rounded-0">
        <div class="p-2 bg-gray-card">
          <p class="m-0 text-title-card">Tanggal pemesanan : {{
            getMonthYear(product.orderCreatedAt)
          }}
          </p>
        </div>
        <div class="p-2">
          <p class="text-title-card m-0">Kode Pemesanan
            <span class="cl-blue">{{ product.orderTransactionId }}</span></p>
          <p class="text-card m-0">Total Harga
            <span class="price">Rp{{ formatPrice(total[idx])}}</span></p>
          <p class="text-card m-0">Status
            <span class="cl-blue">{{ getStatus(product.orderStatus) }}</span></p>
          <div class="d-flex align-items-end row pt-2 no-gutters">
            <div class="col-7 row no-gutters">
              <img :src="getImage(picture)"
                v-for="(picture, i) in picture[idx]"
                :key="picture+i"
                alt="" class="img-preview border">
            </div>
            <div class="col-5 column ml-auto no-gutters">
              <router-link :to='"./pemberitahuan/detail-pesanan/"+product.orderId'>
                <b-button class="pl-5 pr-5" variant="outline-primary">Lihat</b-button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Cookie from 'vue-cookie';

export default {
  data() {
    return {
      product: [],
      total: [],
      picture: [],
      monthNames: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
      ],
      price: 0,
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
      const dataShopId = Cookie.get('dataShopIdMerchant');
      const dataToken = Cookie.get('dataTokenMerchant');
      await axios.get(`http://localhost:${this.port}/experience/api/merchant/order?shopId=${dataShopId}`,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .then((res) => {
          res.data.data.forEach((data) => {
            if (data.orderStatus === 'PAID') {
              this.product.push(data);
            }
          });

          let idx = 0;
          this.product.forEach((s) => {
            const imageProduct = [];
            let p = 0;
            s.cartForms.forEach((d) => {
              if (idx <= 3) {
                imageProduct.push(d.stockForm.productDataForm.productImagePaths[0]);
              }
              idx += 1;
              p += d.amount * d.stockForm.productPrice;
            });
            this.total.push(p);
            this.picture.push(imageProduct);
          });
        })
        .catch(() => {
          this.$router.replace('/merchant/login');
        });
      console.log(this.product);
    },
    getMonthYear(date) {
      const theDate = new Date(date);
      return `${theDate.getDate()} ${this.monthNames[theDate.getMonth()]} ${theDate.getFullYear()}`;
    },
    formatPrice(value) {
      const val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    getStatus(str) {
      if (str === 'WAITING_FOR_PAYMENT') {
        return 'Menunggu Pembayaran';
      }

      if (str === 'PAID') {
        return 'Dibayar';
      }

      if (str === 'DELIVERED_TO_CONSUMER') {
        return 'Sedang dikirim';
      }

      return 'Selesai';
    },
    getImage(imagePath) {
      const path = imagePath.split('/');
      return `/assets/resources/uploads/productPhoto/${path[path.length - 1]}`;
    },
  },
};
</script>

<style scoped>
.bg-gray{
  background-color: #F6F6F6;
}

.cl-blue{
  color: #3594FF;
}

.bg-gray-card{
  background-color: #E3E3E3;
}

.text-gray{
  color: rgb(121, 121, 121);
}

.bold{
  font-weight: 600;
  font-size: 15px;
}

.text-title-card{
  font-size: 14px;
}

.img-preview{
  width: 50px;
  margin-left: 5px;
  margin-right: 5px;
}

.active{
  color: #0095DA;
  border-bottom: 2px solid #0095DA;
  padding-bottom: 0.25rem;
}

.text-card{
  font-size: 14px;
}

.price{
  color: #FF7600;
}
</style>
