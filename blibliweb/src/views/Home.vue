<template>
  <div>
    <Header/>
    <main>
      <div class="p-2 bg-blue sticky-">
        <b-form-input v-model="search" placeholder="Cari apa hari ini ?"
        id="searchbar"></b-form-input>
        <div class="card mt-2">
          <router-link to="/scan-qr">
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
      <div class="mt-4 p-2">
        <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            class="shadow-custom"
            background="transparent"
            style="text-shadow: 1px 1px 2px #333;"
          >
            <b-carousel-slide
              img-src="assets\spanduk\belanja.jpg"
            ></b-carousel-slide>
             <b-carousel-slide
              img-src="assets\spanduk\SAMSUNG.jpg"
            ></b-carousel-slide>
             <b-carousel-slide
              img-src="assets/spanduk/DIRUMAHAJA.png"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="assets/spanduk/sensi.jpg"
            ></b-carousel-slide>
          </b-carousel>
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
        <img src="@/assets/spanduk/blibligratisongkir.jpg"
        class="img-fluid w-100 d-block mt-4 mb-2" alt="">
        <MainMenu />
      </div>
      <BottomNavigation />
    </main>
    <Footer />
    <div class="overlay-x-y" :class="{hide:isHide}">
      <button @click="hide" class="btn-x">X</button>
      <img src="@/assets/spanduk/blibligratisongkir.jpg"
      class="d-flex align-items-center img-display" alt=""
      >
    </div>
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
      slide: 0,
      dismissSecs: 3,
      dismissCountDown: 0,
      isHide: false,
    };
  },
  methods: {
    hide() {
      this.isHide = true;
    },
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

.overlay-x-y{
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  top: 0;
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
  width: 35px!important;
}

.center {
  text-align: center;
}

.img-display{
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 200px;
}

.hide{
  display: none;
}

.btn-x{
  border: none;
  background-color: transparent;
  color: white;
  font-weight: bold;
  margin-top: 170px;
  right: 10px;
  position: absolute;
}

.text-card {
  margin-top: 3px;
  text-align: center;
  font-size: 12px;
  color: #808080;
}

.shadow-custom{
  box-shadow: -3px 4px 11px rgba(46, 19, 39, 0.3);
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
  top: -1px;
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
