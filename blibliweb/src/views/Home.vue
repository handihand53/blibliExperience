<template>
  <div>
    <Header/>
    <main>
      <div class="p-2 bg-blue sticky-">
        <b-form-input v-model="search" placeholder="Cari apa hari ini ?"
        id="searchbar"></b-form-input>
        <div class="card mt-2">
        <router-link to="/qr-scanner">
          <div class="row no-margin">
            <div class="p-2 border-right">
              <img src="..\..\src\assets\icon\scan.png" alt="barcode" class="barcodelogo" />
            </div>
              <div  class="col-9 p-2">
                <p class="scan-text">Scan barcode / QR code</p>
                <p class="scan-text">Beli barang lebih mudah dengan 1x scan</p>
              </div>
          </div>
        </router-link>
      </div>
      </div>
      <div class="home">
        <div class="mt-4 ml-2 mr-2">
          <label class="label">Favoritnya kamu nih</label>
          <div class="card no-margin">
            <div class="row no-margin pb-2">
              <div class="col-3">
                <div class="center">
                  <img src="@/assets/icon/cart.png" class="img-icon" alt />
                </div>
                <div class="text-card">Blimart</div>
              </div>
              <router-link to="/barter" class="col-3">
                <div class="center">
                  <img src="@/assets/icon/design.png" class="img-icon" alt />
                </div>
                <div class="text-card">Barter</div>
              </router-link>
              <router-link to="/cari-barang" class="col-3">
                <div class="center">
                  <img src="@/assets/icon/product.png" class="img-icon" alt />
                </div>
                <div class="text-card">Cari Barang</div>
              </router-link>
              <router-link to="/location" class="col-3">
                <div class="center">
                  <img src="@/assets/icon/map.png" class="img-icon" alt />
                </div>
                <div class="text-card">Lokasi Blimart</div>
              </router-link>
            </div>
          </div>
        </div>
        <MainMenu />
      </div>
      <BottomNavigation />
    </main>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import MainMenu from '@/components/MainMenu.vue';
import BottomNavigation from '@/components/BottomNavigation.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Menu',
  components: {
    MainMenu,
    Header,
    BottomNavigation,
    Footer,
  },
  data() {
    return {
      search: '',
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../style/font/font.scss";

$break-small: 720px;
$break-large: 730px;

.label {
  color: #808080;
}

.no-padding {
  padding: 0px !important;
}

.no-margin {
  margin: 0px !important;
}

.mlr-auto {
  margin-left: auto;
}

.img-icon {
  margin-top: 15px;
  width: 35px;
}

.center {
  text-align: center;
}

.text-card {
  margin-top: 3px;
  text-align: center;
  font-size: 12px;
  color: #808080;
}

.bg-bl {
  background-color: #0095da;
}

.blilogo {
  width: 100px;
  height: auto;
}

a{
  text-decoration: none;
}

.bg-blue {
  @media screen and (max-width: $break-small) {
    background-color: #0095da;
  }
  height: 90px;
}

.no-padding {
  padding: 0px !important;
}

.no-margin {
  margin: 0px !important;
}

.fixed {
  position: fixed;
}

.sign-in {
  margin-top: auto;
  margin-bottom: auto;
}

.sticky- {
  position: sticky;
  top: 0;
  z-index: 100;
}

.barcodelogo {
  width: 35px;
}

.scan-text {
  font-size: 11px;
  color: #808080;
  margin-bottom: 0px;
}

.shadow-box {
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.3);
}
</style>
