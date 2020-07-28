<template>
  <div class='top-50'>
    <div class='header bg-blue'>
      <img src='..\..\..\src\assets\logo\blibli_wht.png' alt='blibli Logo' class='ml-2 blilogo' />
    </div>
    <div class='bg'>
      <div>
        <h5 class='p-4 text-center'>Admin</h5>
        <div class='p-2 d-flex align-content-start flex-wrap no-gutters'>
          <router-link to="/admin/list-barang"
          class="width card text-center border-0 shadow-sm ml-auto mr-auto p-1">
            <div>
              <img src="@/assets/icon/audit.png" alt="" class="img-icon ml-auto mr-auto m-2">
              <p class="label">Lihat Seluruh Produk</p>
            </div>
          </router-link>
          <router-link to="/admin/tambah-barang"
          class="width card text-center border-0 shadow-sm ml-auto mr-auto p-1">
            <img src="@/assets/icon/product_bl.png" alt="" class="img-icon ml-auto mr-auto m-2">
            <p class="label">Tambah barang</p>
          </router-link>
        </div>
        <div class='p-2 d-flex align-content-start flex-wrap no-gutters'>
          <router-link to="/admin/konfirmasi-barter"
          class="width card text-center border-0 shadow-sm ml-auto mr-auto p-1">
            <div>
              <img src="@/assets/icon/exchange.png" alt="" class="img-icon ml-auto mr-auto m-2">
              <p class="label">Konfirmasi Barter</p>
            </div>
          </router-link>
          <router-link to="/merchant/login"
          class="width card text-center border-0 shadow-sm ml-auto mr-auto p-1">
            <img src="@/assets/icon/logout.png" alt="" class="img-icon ml-auto mr-auto m-2">
            <p class="label">Keluar</p>
          </router-link>
        </div>
      </div>
    </div>
    <Footer/>
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
import Footer from '@/components/Footer.vue';
import axios from 'axios';
import Cookie from 'vue-cookie';

export default {
  components: {
    Footer,
  },
  data() {
    return {
      isLoggedIn: false,
      isLoading: false,
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
      const dataId = Cookie.get('dataIdAdmin');
      const dataToken = Cookie.get('dataTokenAdmin');
      await axios.get(`http://localhost:${this.port}/experience/api/users?id=${dataId}`,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .catch(() => {
          this.$router.replace('/admin/login');
        });
    },
  },
};
</script>

<style scoped>
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
