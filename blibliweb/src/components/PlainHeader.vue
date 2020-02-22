<template>
  <header class="header">
    <nav class="no-padding">
      <div class="row col-12 no-padding no-margin pt-2 pb-2 bg-bl">
        <div class="col-12 no-padding mt-mb-auto">
          <div class="ml-2 mr-2">
            <div v-on:click="back" class="left-arrow">
              <font-awesome-icon icon="chevron-left" />
            </div>
            <div v-on:click="dropdown" class="burger-button">
              <font-awesome-icon class="toggle-dropdown"
              :class="{rotate: isRotate}" icon="ellipsis-v" />
            </div>
            <div class="dropdown-content"
            :class="{visible: isVisible}">
              <router-link to="/" class="alink row alink-bottom">
                <font-awesome-icon icon="home" class="nav-icon"/>
                <p class="icon-text"> Beranda</p>
              </router-link>
              <router-link to="/category" class="alink row alink-bottom">
                <font-awesome-icon icon="layer-group" class="nav-icon"/>
                <p class="icon-text">Kategori</p>
              </router-link>
              <router-link to="/cart" class="alink row alink-bottom">
                <font-awesome-icon icon="shopping-cart" class="nav-icon"/>
                <p class="icon-text">Keranjang</p>
              </router-link>
              <router-link to="/account" class="alink row"
              style="border-radius: 0px 0px 10px 10px;">
                <font-awesome-icon icon="user-circle" class="nav-icon"/>
                <p class="icon-text">Akun</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script type="text/javascript">

export default {
  data() {
    return {
      isRotate: false,
      isVisible: false,
    };
  },
  methods: {
    back() {
      window.history.back();
    },
    dropdown() {
      this.isRotate = !this.isRotate;
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../style/font/font.scss";

$break-small: 720px;
$break-large: 730px;

.burger-button{
  display: inline-block;
  width: 30px;
  float: right;
}

.left-arrow{
  display: inline-block;
  width: 20px;
}

.nav-icon{
  color: #50c8ff;
}

.alink-bottom{
  border-bottom: 1px solid rgb(191, 191, 191);
}

.alink{
  color: #afafaf!important;
  margin: 0px;
  padding: 12px;
  font-size: 22px;
}

.alink:active{
  background-color: #dff5ff;
}

.icon-text{
  padding: 0px;
  margin: 0px;
  font-size: 16px;
  margin-left: 5px;
}

.dropdown-content{
  position: absolute;
  right: 0;
  top: 37px;
  background-color: white;
  width: 150px;
  color: black;
  height: fit-content;
  z-index: 100;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 0px 0px 20px -9px rgba(0, 0, 0, 0.75);
  visibility: hidden;
}

.toggle-dropdown{
  float: right;
  margin-top: 4px;
  transition: all 0.5s;
  margin-right: 10px;
}

header {
  z-index: 1000;
}

.rotate{
  transform: rotate(90deg);
}

nav {
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;

  @media screen and (max-width: $break-small) {
  }

  // @media screen and (min-width: $break-large) {
  //   float: right;
  // }
}

a {
  color: white !important;
  text-decoration: none !important;
}

.bg-bl {
  background-color: #0095da;
  height: 50px;
}

.blilogo {
  width: 100px;
  height: auto;
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

.mt-mb-auto {
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
