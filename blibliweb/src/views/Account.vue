<template>
  <div class="">
    <PlainHeader />
    <div class="bg-gray" v-if="nama !== ''">
      <div class="col-12 row no-margin p-3 bg-white">
        <div class="">
          <img src="@/assets/logo/signature.png" class="logo mr-3" alt="">
        </div>
        <div class=" align-self-end">
          <h6 style="font-weight: 700">Informasi Akun anda</h6>
          <p class="text-name">{{ nama }}</p>
          <p class="tag-member">Member</p>
          <label class="text-date">Sejak {{ getMonthYear }}</label>
        </div>
      </div>
      <div class="mt-3 bg-white">
        <div class="p-3">
          <router-link to="/profile" class="alink">
            <div class="list-menu">
              Profile
              <font-awesome-icon icon="chevron-right" class="right-arrow"/>
            </div>
          </router-link>
          <router-link to="/daftar-pesanan" class="alink">
            <div class="list-menu">
              Daftar Pesanan
              <font-awesome-icon icon="chevron-right" class="right-arrow"/>
            </div>
          </router-link>
          <router-link to="/daftar-penawaran" class="alink">
            <div class="list-menu">
              Daftar Penawaran
              <font-awesome-icon icon="chevron-right" class="right-arrow"/>
            </div>
          </router-link>
          <router-link to="/daftar-pengajuan" class="alink">
            <div class="list-menu">
              Daftar Pengajuan
              <font-awesome-icon icon="chevron-right" class="right-arrow"/>
            </div>
          </router-link>
          <router-link to="/wishlist" class="alink">
            <div class="list-menu">
              Wishlist
              <font-awesome-icon icon="chevron-right" class="right-arrow"/>
            </div>
          </router-link>
          <router-link to="/barter" class="alink">
            <div class="list-menu">
              Barter di Blibli
              <font-awesome-icon icon="chevron-right" class="right-arrow"/>
            </div>
          </router-link>
          <router-link to="/lelang" class="alink">
            <div class="list-menu">
              Lelang
              <font-awesome-icon icon="chevron-right" class="right-arrow"/>
            </div>
          </router-link>
          <router-link to="/post-product" class="alink">
            <div class="list-menu">
              Posting Produk
              <font-awesome-icon icon="chevron-right" class="right-arrow"/>
            </div>
          </router-link>
          <router-link to="/hubungi-kami" class="alink">
            <div class="list-menu">
              Hubungi Kami
              <font-awesome-icon icon="chevron-right" class="right-arrow"/>
            </div>
          </router-link>
        </div>
      </div>
      <div>
        <button class="logout-button">Keluar</button>
      </div>
    </div>
    <div class="bg-gray" v-else-if="isLogin === false">
      <div class="bg-white">
        <div class="p-3">
          <router-link to="/login" class="alink">
            <div class="list-menu">
              Login / Register
              <font-awesome-icon icon="chevron-right" class="right-arrow"/>
            </div>
          </router-link>
          <router-link to="/hubungi-kami" class="alink">
            <div class="list-menu">
              Hubungi Kami
              <font-awesome-icon icon="chevron-right" class="right-arrow"/>
            </div>
          </router-link>
          <router-link to="/" class="alink">
            <div class="list-menu">
              Menu utama
              <font-awesome-icon icon="chevron-right" class="right-arrow"/>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <BottomNavigation />
    <Footer />
  </div>
</template>

<script>
import BottomNavigation from '@/components/BottomNavigation.vue';
import PlainHeader from '@/components/PlainHeader.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
import Cookie from 'vue-cookie';

export default {
  name: 'Account',
  components: {
    PlainHeader,
    BottomNavigation,
    Footer,
  },
  data() {
    return {
      nama: '',
      createdAt: '',
      monthNames: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
      ],
      isLogin: '',
    };
  },
  async created() {
    await this.checkUser();
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
  },
  computed: {
    getMonthYear() {
      const theDate = new Date(this.createdAt);
      return `${this.monthNames[theDate.getMonth()]} ${theDate.getFullYear()}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/font/font.scss";

.logout-button{
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #C5C5C5;
  color: white;
  font-weight: 600;
}

.list-menu{
  font-weight: 400;
  margin-bottom: 13px;
}

.alink{
  color: black;
  text-decoration: none;
}

.alink:hover{
  color: rgb(28, 122, 255);
}

.text-name{
  font-size: 15px;
}

.right-arrow{
  font-size: 12px;
  position: relative;
  float: right;
  margin-top: 4px;
}

.tag-member{
  font-weight: 600;
}

.text-date{
  padding: 0px;
  margin: 0px;
}

.logo{
  width: 105px;
  height: auto;
}

.text-date{
  font-size: 11px;
  color: #808080;
}

p{
  margin: 0px;
}

.bg-gray{
  background-color: rgb(226, 226, 226);
}

.no-margin{
  margin: 0px!important;
}

.no-padding{
  padding: 0px!important;
}

</style>
