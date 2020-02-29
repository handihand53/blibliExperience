<template>
  <div class="">
    <PlainHeader />
    <div class="bg-gray">
      <div class="col-12 row no-margin p-3 bg-white">
        <div class="">
          <img src="@/assets/logo/signature.png" class="logo mr-3" alt="">
        </div>
        <div class="">
          <p class="text-name">Handi Hermawan</p>
          <p class="tag-member">Member</p>
          <label class="text-date">Sejak Nov 2010</label>
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
          <router-link to="/jual" class="alink">
            <div class="list-menu">
              Jual di Blibli
              <font-awesome-icon icon="chevron-right" class="right-arrow"/>
            </div>
          </router-link>
          <router-link to="/cari-barang" class="alink">
            <div class="list-menu">
              Cari Barang
              <font-awesome-icon icon="chevron-right" class="right-arrow"/>
            </div>
          </router-link>
          <router-link to="/post-product" class="alink">
            <div class="list-menu">
              Posting Produk
              <font-awesome-icon icon="chevron-right" class="right-arrow"/>
            </div>
          </router-link>
          <router-link to="/panduan" class="alink">
            <div class="list-menu">
              Panduan Blibli
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
    <BottomNavigation />
    <Footer />
  </div>
</template>

<script>
import BottomNavigation from '@/components/BottomNavigation.vue';
import PlainHeader from '@/components/PlainHeader.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Account',
  components: {
    PlainHeader,
    BottomNavigation,
    Footer,
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
  margin-bottom: 15px;
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
