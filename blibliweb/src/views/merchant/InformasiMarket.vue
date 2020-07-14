<template>
  <div class="bg-gray">
    <PlainHeaderMarket/>
    <div class="text-center pt-4 pb-2 column">
      <img src="@/assets/logo/signature.png" alt="" class="profile-logo">
      <h5 class="mt-2 mb-0">{{ nama }}</h5>
      <p class="mb-0">Market</p>
      <small>Sejak {{ getMonthYear }}</small>
    </div>
    <div class="pl-3 pr-3">
      <label for="nama">Nama Merchant<span class="red">*</span></label>
      <b-form-input type="text" class="form-control" id="nama"
      placeholder="Nama Merchant"
      v-model="nama" trim
      disabled></b-form-input>
      <div class="row mt-3 no-gutters">
        <div>
          <label for="hp">Nomor Handphone<span class="red">*</span></label>
        </div>
        <div class="ml-auto">
          <span class="cl-blue fs-12">Ubah Nomor</span>
        </div>
      </div>
      <b-form-input type="number" class="form-control" id="hp"
      placeholder="08212312938712"
      v-model="hp" ref="hp" trim
      disabled></b-form-input>
      <small class="hint-text">Contoh : 08212312938712</small><br>
      <label for="alamat">Alamat<span class="red">*</span></label>
      <b-form-textarea
        id="alamat"
        v-model="alamat"
        placeholder="Alamat anda"
        rows="3"
        max-rows="6"
        trim
      ></b-form-textarea>
    </div>
    <div class="p-3">
      <router-link to="./informasi-market/ubah-kata-sandi">
        <b-button class="col-12" variant="outline-primary">Ubah Kata Sandi</b-button>
      </router-link>
      <b-button class="col-12 simpan-btn mt-3" variant="warning">Simpan</b-button>
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
      email: '',
      hp: '',
      alamat: '',
      nama: '',
      monthNames: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
      ],
      createdAt: '',
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
          this.nama = response.data.data.shopName;
          this.createdAt = response.data.data.shopCreatedAt;
          this.alamat = response.data.data.shopAddress.kota;
        })
        .catch(() => {
          this.$router.push('/merchant/login');
        });
    },
  },
  computed: {
    getMonthYear() {
      const theDate = new Date(this.createdAt);
      return `${this.monthNames[theDate.getMonth()]} ${theDate.getFullYear()}`;
    },
  },
};
</script>

<style scoped>
.bg-gray{
  background-color: #F6F6F6;
  height: 100vh;
}

.profile-logo{
  width: 105px;
}

.simpan-btn{
  border-color: rgba(253, 131, 24, 0.449);
  background-color: #FD8218;
  color: white!important;
}

.simpan-btn:active{
  color: white!important;
  border-color: rgba(253, 131, 24, 0.449)!important;
  background-color: rgb(218, 131, 55)!important;
}

.simpan-btn:focus{
  color: white!important;
  border-color: rgba(253, 131, 24, 0.449)!important;
  background-color: rgb(218, 131, 55)!important;
}

.simpan-btn:hover{
  color: white!important;
  border-color: rgba(253, 131, 24, 0.211)!important;
  background-color: rgb(218, 131, 55)!important;
}


.red{
  color: red;
}

label{
  font-size: 14px;
}

.fs-12{
  font-size: 14px;
}

.hint-text{
  font-size: 11px;
  color: #808080;
}

.cl-blue{
  color: #3594FF;
}
</style>
