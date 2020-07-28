<template>
  <div class="bg-gray">
    <PlainHeaderMarket/>
    <div class="bg-white p-2">
      <small class="text-gray">Jual Barang</small>
    </div>
    <div class="p-3">
      <label for="nama-barang">Nama Barang</label>
      <p class="my-0">{{ namaBarang }}</p>
      <label for="Stock">Stok<span class="red">*</span></label>
      <b-form-input type="number" min="0" class="form-control" id="Stock"
      placeholder="Stock"
      v-model="stok" trim @keyup="checkAll"></b-form-input>
      <button @click="edit" class="next-btn mt-4"
      :class="{'disable': !btnState, 'active-btn': btnState}"
      ref='btn' disabled>Edit Stock</button>
    </div>
    <div class="fixed-alert text-center pl-3 pr-3">
      <b-alert
        :show="dismissCountDown"
        dismissible
        variant="success"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
      >
        Stock berhasil update
      </b-alert>
    </div>
    <div class="overlay-loading d-flex align-items-center"
    :class="{hide: !isLoading}">
      <b-spinner
      type="grow"
      variant="primary"
      class="ml-auto mr-auto spinner"
      ></b-spinner>
    </div>
    <Footer/>
  </div>
</template>

<script>
import PlainHeaderMarket from '@/components/PlainHeaderMarket.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
import Cookie from 'vue-cookie';

export default {
  components: {
    PlainHeaderMarket,
    Footer,
  },
  data() {
    return {
      namaBarang: '',
      harga: '',
      stok: '',
      btnState: false,
      masterData: '',
      shopId: '',
      dismissSecs: 2,
      dismissCountDown: 0,
      alertMsg: '',
      product: '',
      isLoading: false,
    };
  },
  async created() {
    await this.checkLoginUser();
    await this.getDetailProduct();
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
        .then((response) => {
          this.shopId = response.data.data.shopId;
        })
        .catch(() => {
          this.$router.push('/merchant/login');
        });
    },
    // Untuk notifikasi ketika berhasil menambah product
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    async getDetailProduct() {
      const dataId = Cookie.get('dataShopIdMerchant');
      await axios.get(`http://localhost:${this.port}/experience/api/products?id=${this.$route.params.id}`)
        .then((response) => {
          response.data.data.productStockList.forEach((data) => {
            if (data.shopForm.shopId === dataId) {
              this.product = data;
            }
          });
          this.namaBarang = this.product.productDataForm.productName;
        })
        .catch(() => {
          this.$router.push('/merchant/login');
        });
    },
    checkAll() {
      if (
        this.stock !== ''
      ) {
        this.btnState = true;
        this.$refs.btn.disabled = false;
      } else {
        this.btnState = false;
        this.$refs.btn.disabled = true;
      }
    },
    async edit() {
      this.isLoading = true;
      const editProduct = {
        addedStock: 0,
        stockId: this.product.stockId,
      };

      const dataToken = Cookie.get('dataTokenMerchant');
      await axios.put(`http://localhost:${this.port}/experience/api/merchant/productStocks`, editProduct,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .then(() => {
          this.dismissCountDown = this.dismissSecs;
          setTimeout(() => this.$router.push('/merchant/list-barang'), 1000); // jika login berhasil maka akan dilempar ke halaman utama
        });
    },
  },
};
</script>

<style scoped>
.red{
  color: red;
}

.bg-gray{
  background-color: #F6F6F6;
}

.text-gray{
  color: rgb(121, 121, 121);
}

label{
  margin-top: 8px;
}

.next-btn{
    border: none;
    background: #898989;
    border-radius: 5px;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    color: white;
    font-weight: 500;
    margin-top: 7px;
    transition: all 1s;
}

.disable{
    cursor: not-allowed;
}

.active-btn{
  background: #FF9100!important;
  color: white;
  cursor: pointer;
  opacity: 1!important;
}

.fixed-alert{
  z-index: 10000;
  position: fixed;
  bottom: 0px;
  margin: 5% auto; /* Will not center vertically and won't work in IE6/7. */
  left: 0;
  right: 0;
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

.hide{
  display: none!important;
}

.spinner{
  width: 50px;
  height: 50px;
}

.center{
  text-align: center;
}
</style>
