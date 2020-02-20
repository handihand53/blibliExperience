<template>
  <div class="bottom-nav">
    <div class="col-12 row no-margin no-padding nav-style" id="nav">
      <router-link to="/" class="col-navigation">
        <font-awesome-icon icon="home" class="nav-icon" />
        <p class="icon-text">Beranda</p>
      </router-link>
      <router-link to="/category" class="col-navigation">
        <div>
          <font-awesome-icon icon="layer-group" class="nav-icon" />
          <p class="icon-text">Kategori</p>
        </div>
      </router-link>
      <router-link to="/ww" class="col-navigation">
        <div>
          <font-awesome-icon icon="qrcode" class="nav-icon" />
          <p class="icon-text">Pindai</p>
        </div>
      </router-link>
      <router-link to="/cart" class="col-navigation">
        <div>
          <font-awesome-icon icon="shopping-cart" class="nav-icon" />
          <p class="icon-text">Keranjang</p>
        </div>
      </router-link>
      <router-link to="/account" class="col-navigation">
        <div>
          <font-awesome-icon icon="user-circle" class="nav-icon" />
          <p class="icon-text">Akun</p>
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
  flex: 0 0 20%;
  max-width: 20%;
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
