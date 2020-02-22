<template>
<div>
  <router-view/>
</div>
<!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
</div>-->
</template>

<script>

export default {
  name: 'App',
  components: {
  },
};
</script>

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

a {
  color: white !important;
  text-decoration: none !important;
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
