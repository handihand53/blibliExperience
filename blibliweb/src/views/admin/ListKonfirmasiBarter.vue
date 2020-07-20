<template>
  <div class="bg-gray">
    <PlainHeaderMarket/>
    <div class="bg-white border-bottom box-shadow">
      <div class="p-2">
        <small style="color: #AEAEAE; font-weight: 600;">Konfirmasi Barter</small>
      </div>
      <div class="d-flex justify-content-around mt-2 pb-2">
        <div class="col-4">
          <b-button pill variant="outline-primary" size="sm"
          block @click="changeStatus(0)"
          :class="{buttonActive : this.isActive[0]}">Menunggu</b-button>
        </div>
        <div class="col-4">
          <b-button pill variant="outline-primary" size="sm"
          block @click="changeStatus(1)"
          :class="{buttonActive : this.isActive[1]}">Selesai</b-button>
        </div>
        <div class="col-4">
          <b-button pill variant="outline-primary" size="sm"
          block @click="changeStatus(2)"
          :class="{buttonActive : this.isActive[2]}">Ditolak</b-button>
        </div>
      </div>
    </div>
    <div class="mt-3">
      <div class="custom-card p-3 row shadow-sm m-2">
        <div class="col-4 m-0 p-0">
          <img src="@/assets/etc/aqua.png" alt="" class="img-product">
        </div>
        <div class="col-8 m-0 p-0">
          <p class="text-detail">No. Barter: 12034757560</p>
          <p class="title-product">Botol Minum Aqua Mineral 300ML</p>
          <p class="desc-product">Deskripsi: Lorem ipsum dolor, sit amet
            consectetur adipisicing elit.</p>
          <p class="status-product">Menunggu</p>
          <router-link to="/admin/konfirmasi-barter/detail">
            <button class="buy-btn">Lihat Detail</button>
          </router-link>
        </div>
      </div>
    </div>
    <!-- <div>
      <component :is="currentComponent"></component>
    </div> -->
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
      isActive: [
        true,
        false,
        false,
      ],
    };
  },
  async created() {
    await this.checkUser();
  },
  methods: {
    checkUser() {
      // melakukan check apakah user masih login atau tidak
      // jika user masih login, maka akan dilempar ke halaman utama
      const dataId = Cookie.get('dataIdAdmin');
      const dataToken = Cookie.get('dataTokenAdmin');
      axios.get(`http://localhost:${this.port}/experience/api/users?id=${dataId}`,
        {
          headers:
            {
              Authorization: `Bearer ${dataToken}`,
            },
        })
        .then((response) => {
          if (response.data === null) {
            this.$router.push('/admin/login');
          }
        })
        .catch(() => {
          this.isLogin = false;
          this.$router.push('/admin/login');
        });
    },
    changeStatus(idx) {
      this.isActive.splice(idx, 1, true);
      for (let i = 0; i < this.isActive.length; i += 1) {
        if (i !== idx) this.isActive.splice(i, 1, false);
      }
    },
  },
};
</script>

<style scoped>
.desc-product{
  font-size: 11px;
  color: #AEAEAE;
  margin-top: 2px;
  margin-bottom: 0px;
}

.text-detail{
  font-weight: 600;
  font-size: 13px;
  margin: 0px;
  color: rgb(0, 149, 255);
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

.buttonActive{
  background-color: rgb(0, 123, 255);
  color: white!important;
}

.bg-gray{
  background-color: #f1f1f1;
}

.img-product {
  max-width: 90px;
  max-height: 120px;
  display: block;
}

.custom-card{
  margin-top: 10px!important;
  border: 0.5px solid rgba(208, 208, 208, 0.245);
  background-color: white;
  border-radius: 10px;
}
</style>
