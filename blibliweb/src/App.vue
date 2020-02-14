<template>
<body>
  <header class="header">
    <nav class="no-padding">
      <div class="row col-12 no-padding no-margin pt-2 pb-2 bg-bl">
        <div class="col-9 no-padding">
          <img src="..\src\assets\logo\blibli_wht.png" alt="blibli Logo" class="ml-2 blilogo" />
        </div>
        <div class="col-3 no-padding sign-in">
          <div class="right">
            <font-awesome-icon icon="sign-in-alt"/> Masuk
          </div>
        </div>
      </div>
    </nav>
  </header>
  <div class="p-2 bg-blue sticky-">
    <b-form-input v-model="text" placeholder="Cari apa hari ini ?" id="searchbar"></b-form-input>
    <div class="card mt-2">
      <div class="row no-margin">
        <div class="p-2 border-right">
          <img src="..\src\assets\icon\scan.png" alt="barcode" class="barcodelogo" />
        </div>
        <div class="col-9 p-2">
          <p class="scan-text">Scan barcode / QR code</p>
          <p class="scan-text">Beli barang lebih mudah dengan 1x scan</p>
        </div>
      </div>
    </div>
  </div>
  <router-view/>
</body>
<!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
</div>-->
</template>

<style scoped lang="scss">
@import "./style/font/font.scss";

$break-small: 720px;
$break-large: 730px;

header {
  z-index: 1000;
}

nav {
  color: white;
  padding-top: 3px;
  padding-bottom: 3px;

  @media screen and (max-width: $break-small) {
  }

  // @media screen and (min-width: $break-large) {
  //   float: right;
  // }
}

.bg-bl {
  background-color: #0095da;
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
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
