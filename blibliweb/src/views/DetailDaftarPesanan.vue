<template>
   <div class="bg-gray">
    <HeaderWithCart/>
    <div>
      <div class="px-3 pt-2 bg-white pb-3">
        <small class="cl-gray">Detail Pemesanan</small>
        <p class="text-detail pt-2">Tanggal pemesanan:
          {{getMonthYear(product.orderCreatedAt)}}</p>
        <p class="text-detail">No. Pesanan: {{product.orderTransactionId}}</p>
        <p class="text-detail">Nama merchant: {{shopName}}</p>
        <p class="text-detail">Total yang harus dibayar:
          <span class="orange">Rp{{formatPrice(price)}}</span></p>
        <p class="text-detail">Status pembayaran:
          <span class="text-bold">{{getStatus(product.orderStatus)}}</span></p>
      </div>
      <div class="px-3 mt-3">
        <span class="text-detail">Produk yang dipesan</span>
        <div class="bg-white p-3">
          <p class="status-produk m-0">List Produk anda</p>
          <div v-for="(product, idx) in product.cartForms"
            :key="product.stockForm.productDataForm.productId+idx">
            <hr class="m-0 my-1">
            <div class="row">
              <div class="col-4 m-0 p-0">
                <img :src="getImage(product.stockForm.productDataForm.productImagePaths[0])"
                alt="" class="img-product m-auto">
              </div>
              <div class="col-8 m-0 p-0">
                <p class="title-product">{{product.stockForm.productDataForm.productName}}</p>
                <p class="price-product">Rp.{{formatPrice(product.stockForm.productPrice)}}</p>
                <p class="stock-product">Jumlah: {{product.amount}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-3 mt-3">
        <span class="text-detail">Rincian pembayaran</span>
        <div class="bg-white p-3">
          <p class="m-0 pembayaran">
            <span class="text-detail left-side">Total Pembayaran:</span>
            <span class="text-detail right-side orange">Rp{{formatPrice(price)}}</span>
          </p>
          <p class="m-0 pembayaran">
            <span class="text-detail left-side">Total Belanja:</span>
            <span class="text-detail right-side orange">Rp{{formatPrice(price)}}</span>
          </p>
          <p class="m-0 pembayaran">
            <span class="text-detail left-side">Biaya Pengiriman:</span>
            <span class="text-detail right-side">gratis</span>
          </p>
          <hr>
          <p class="m-0 pembayaran">
            <span class="text-detail">Metode Pengiriman: </span>
            <span class="text-detail blue font-weight-bold">{{getType(product.deliveryType)}}</span>
          </p>
          <p class="m-0 pembayaran"
          v-if="product.deliveryType !== 'SELF_SERVICE'">
            <span class="text-detail">Alamat pengiriman: </span>
            <span class="text-detail">
              {{address}}</span>
          </p>
        </div>
        <router-link :to='"/pay/"+product.orderId'
        v-if="product.orderStatus === 'WAITING_FOR_PAYMENT'">
          <b-button variant="primary" block>
          Bayar Sekarang</b-button>
        </router-link>
        <b-button variant="primary" block
        v-if="product.orderStatus === 'DELIVERED_TO_CONSUMER'"
        class="mt-2" @click="terima">
        Telah diterima</b-button>
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
      product: [],
      price: 0,
      monthNames: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
      ],
      shopName: '',
      address: '',
    };
  },
  async created() {
    await this.checkUser();
    this.getDetailPesanan();
  },
  methods: {
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
    getDetailPesanan() {
      this.price = 0;
      // melakukan check apakah user masih login atau tidak
      // jika user masih login, maka akan dilempar ke halaman utama
      const dataToken = Cookie.get('dataToken');
      axios.get(`http://localhost:${this.port}/experience/api/order?orderId=${this.$route.params.id}`,
        {
          headers:
            {
              Authorization: `Bearer ${dataToken}`,
            },
        })
        .then((response) => {
          this.product = response.data.data;
          this.product.cartForms.forEach((element) => {
            this.price += element.amount * element.stockForm.productPrice;
          });
          this.shopName = this.product.cartForms[0].stockForm.shopForm.shopName;
          this.address = this.product.userDataForm.userAddressForms[0].detail;
        })
        .catch(() => {
          this.$router.replace('/');
        });
    },
    formatPrice(value) {
      const val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    getImage(imagePath) {
      const path = imagePath.split('/');
      return `/assets/resources/uploads/productPhoto/${path[path.length - 1]}`;
    },
    getType(str) {
      if (str === 'SELF_SERVICE') {
        return 'Ambil di Bliblimart';
      }
      return 'Delivery';
    },
    getStatus(str) {
      if (str === 'WAITING_FOR_PAYMENT') {
        return 'Menunggu Pembayaran';
      }
      if (str === 'PAID') {
        return 'Sudah di bayar';
      }
      if (str === 'DELIVERED_TO_CONSUMER') {
        return 'Sedang dikirim';
      }
      if (str === 'FINISHED') {
        return 'Selesai';
      }
      return '';
    },
    terima() {
      const dataToken = Cookie.get('dataToken');
      axios.put(`http://localhost:${this.port}/experience/api/exc/order/toFinished?orderId=${this.product.orderId}`,
        {
          headers:
            {
              Authorization: `Bearer ${dataToken}`,
            },
        })
        .then((data) => {
          console.log(data);
          this.getDetailPesanan();
        })
        .catch((err) => {
          console.log(err);
          // this.$router.replace('/');
        });
    },
    getMonthYear(date) {
      const theDate = new Date(date);
      return `${theDate.getDate()} ${this.monthNames[theDate.getMonth()]} ${theDate.getFullYear()}`;
    },
  },
};
</script>

<style scoped>
.cl-gray{
  color: rgb(138, 138, 138);
}

.success{
  color: rgb(0, 106, 255);
}

.title-product{
  font-size: 14px;
  margin: 0px;
}

.pembayaran{
  line-height: 20px;
}

.bg-gray{
  background-color: #f1f1f1;
}

.stock-product{
  font-size: 13px;
  margin: 0px;
}

.left-side{
  display: inline-block;
  width: 50%;
}

.right-side{
  display: inline-block;
  width: 50%;
  text-align: right;
}

.blue{
  color: rgb(0, 115, 255);
}

.price-product{
  font-size: 13px;
  font-weight: 600!important;
  margin: 0px;
  color: rgb(236, 154, 0);
}


.img-product {
  padding: 5px;
  max-width: 80px;
  max-height: 120px;
  display: block;
}

.status-produk{
  color: rgb(82, 125, 251);
  font-weight: 600;
}

.text-detail{
  font-weight: 400;
  font-size: 13px;
  margin: 0px;
}

.orange{
  color: rgb(228, 148, 0);
  font-weight: 600!important;
}

.text-bold{
  font-weight: 600;
}
</style>
