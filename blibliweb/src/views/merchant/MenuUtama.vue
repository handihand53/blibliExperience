<template>
  <div class='top-50'>
    <div class='header bg-blue'>
      <img src='..\..\..\src\assets\logo\blibli_wht.png' alt='blibli Logo' class='ml-2 blilogo' />
    </div>
    <div class='bg'>
      <div>
        <h5 class='p-4 text-center'>{{ userName }}</h5>
        <div class='p-2 d-flex align-content-start flex-wrap no-gutters'>
          <router-link to="/merchant/list-barang"
          class="width card text-center border-0 shadow-sm ml-auto mr-auto p-1">
            <div>
              <img src="@/assets/icon/audit.png" alt="" class="img-icon ml-auto mr-auto m-2">
              <p class="label">Lihat Seluruh Produk</p>
            </div>
          </router-link>
          <router-link to="/merchant/jual-barang"
          class="width card text-center border-0 shadow-sm ml-auto mr-auto p-1">
            <img src="@/assets/icon/product_bl.png" alt="" class="img-icon ml-auto mr-auto m-2">
            <p class="label">Jual barang</p>
          </router-link>
          <router-link to="/merchant/pemberitahuan"
          class="width card text-center border-0 shadow-sm ml-auto mr-auto p-1">
            <img src="@/assets/icon/bell.png" alt="" class="img-icon ml-auto mr-auto m-2">
            <p class="label">Pemberitahuan pesanan</p>
          </router-link>
        </div>
        <div
        class="p-3 d-flex align-items-stretch no-gutters">
          <router-link to="/merchant/informasi-market"
          class="width pl-2 pr-2 card border-0 rounded shadow-sm ml-auto mr-auto">
            <div class='text-center'>
              <img src="@/assets/icon/ui.png" alt="" class="img-icon ml-auto mr-auto m-2">
              <p class="label">Informasi market</p>
            </div>
          </router-link>
          <router-link to="/merchant"
          class="width pl-2 pr-2 card border-0 rounded shadow-sm ml-auto mr-auto">
            <div class='text-center'>
              <img src="@/assets/icon/logout.png" alt="" class="img-icon ml-auto mr-auto m-2">
              <p class="label">Keluar</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import axios from 'axios';
import Cookie from 'vue-cookie';

export default {
  components: {
    Footer,
  },
  data() {
    return {
      userName: '',
    };
  },
  async created() {
    await this.checkLoginUser();
  },
  methods: {
    async checkLoginUser() {
      this.isLoggedIn = true;
      // melakukan check apakah user masih login atau tidak
      // jika user masih login, maka akan dilempar ke halaman utama
      const dataId = Cookie.get('dataIdMerchant');
      const dataToken = Cookie.get('dataTokenMerchant');
      await axios.get(`http://localhost:${this.port}/experience/api/shops?id=${dataId}`,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .then((response) => {
          this.userName = response.data.data.userName;
        })
        .catch(() => {
          this.$router.push('/merchant/login');
        });
    },
  },
};
</script>

<style scoped>
.bg-blue {
  background-color: #0095da;
}

.blilogo {
  width: 100px;
  height: auto;
}

.header {
  top: 0;
  position: fixed;
  box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  padding: 7px;
  z-index: 1000;
}

a{
  color: black;
  text-decoration: none;
  font-weight: bold;
}

.top-50 {
  top: 49px;
  position: relative;
}

.width{
  width: 30%;
}

.label{
  font-size: 12px;
  font-weight: 400;
}

.bg {
  height: 400px;
  /* background-size: cover; */
  background-image: url('../../assets/etc/bg-main-y.jpg');
  background-position: center;
}

.img-icon{
  width: 55px;
}
</style>
