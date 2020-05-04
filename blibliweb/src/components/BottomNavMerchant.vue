<template>
  <div class="bottom-nav">
    <div class="col-12 row no-margin no-padding nav-style" id="nav">
      <router-link to="/merchant/list-barang" class="col-navigation">
        <font-awesome-icon icon="list-ul" class="nav-icon" />
        <p class="icon-text">List Barang</p>
      </router-link>
      <router-link to="/merchant/jual-barang" class="col-navigation">
        <div>
          <font-awesome-icon icon="gift" class="nav-icon" />
          <p class="icon-text">Jual Barang</p>
        </div>
      </router-link>
      <router-link to="/merchant/pemberitahuan" class="col-navigation">
        <div>
          <font-awesome-icon icon="bell" class="nav-icon" />
          <p class="icon-text">Pemberitahuan</p>
        </div>
      </router-link>
      <router-link to="/merchant/informasi-market" class="col-navigation">
        <div>
          <font-awesome-icon icon="store-alt" class="nav-icon" />
          <p class="icon-text">Profile</p>
        </div>
      </router-link>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "../style/font/font.scss";

.bottom-nav {
  height: 50px;
  width: 100%;
  background-color: white;
  position: fixed;
  box-shadow: 0px 0px 13px -9px rgba(0, 0, 0, 0.75);
  bottom: 0;
}

.icon-text {
  font-size: 9px;
}

.col-navigation {
  flex: 0 0 25%;
  max-width: 25%;
}

.nav-style {
  height: 100%;
  text-align: center;
}

a:hover {
  text-decoration: none;
}

.no-padding {
  padding: 0px !important;
}

.no-margin {
  margin: 0px !important;
}

.nav-icon {
  font-size: 25px;
  margin-top: 8px;
}

#nav {
  a {
    font-weight: bold;
    color: #808080;

    &.router-link-exact-active {
      color: #0095DA !important;
    }
  }
}
</style>
