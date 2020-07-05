<template>
  <header class="header">
    <nav class="no-padding">
      <div class="row col-12 no-padding no-margin pt-2 pb-2 bg-bl shadow-box">
        <div class="col-12 no-padding mt-mb-auto">
          <div class="ml-2 mr-2">
            <div v-on:click="back" class="left-arrow">
              <font-awesome-icon icon="chevron-left" />
            </div>
            <div class="float-right sub-title-text">
              Konfirmasi Lelang
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    back() {
      window.history.back();
    },
  },
};
</script>

<style scoped lang="scss">
@import "../style/font/font.scss";

$break-small: 720px;
$break-large: 730px;

.left-arrow{
  display: inline-block;
  width: 20px;
  color: #00A2FF;
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

.sub-title-text{
  color: black;
  font-size: 600;
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
  background-color: white;
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
