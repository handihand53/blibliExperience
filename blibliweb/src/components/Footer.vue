<template>
  <footer class="footer">
    <div class="center">
      <p class="cs">
        <font-awesome-icon icon="headset" class="hs-icon" /> Butuh bantuan ?
        <router-link to="/hubungi-kami">Hubungi kami</router-link>
      </p>
      <div class="footer-detail p-2">
        Copyright &copy; 2011- 2020 Blibli.com toko online dengan
        sensasi belanja online store ala mall
        <p>All Rights Reserved</p>
        <p><router-link to="/">Syarat & Ketentuan </router-link>|
        <router-link to="/">Kebijakan Privasi</router-link> </p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../style/font/font.scss";

.footer {
  border-top: 4px solid #0eb3ff;
  margin-top: 15px;
  margin-bottom: 50px;
}

.footer-detail {
  padding-top: 30px;
  padding-bottom: 30px;
  font-size: 12px;
  color: #808080;
  background-color: #F1F1F1;
}

.center {
  text-align: center;
}

.hs-icon {
  font-size: 15px;
}

.cs {
  margin-top: 10px;
  margin-bottom: 15px;
  font-size: 11px;
  padding: 5px;
  color: #808080;
}
</style>
