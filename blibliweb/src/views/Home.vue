<template>
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
          <div class="col-3">
            <div class="center">
              <img src="@/assets/icon/design.png" class="img-icon" alt />
            </div>
            <div class="text-card">Barter</div>
          </div>
          <div class="col-3">
            <div class="center">
              <img src="@/assets/icon/product.png" class="img-icon" alt />
            </div>
            <div class="text-card">Cari Barang</div>
          </div>
          <div class="col-3">
            <div class="center">
              <img src="@/assets/icon/map.png" class="img-icon" alt />
            </div>
            <div class="text-card">Lokasi Blimart</div>
          </div>
        </div>
      </div>
    </div>
    <MainMenu/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainMenu from '@/components/MainMenu.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Menu',
  components: {
    MainMenu,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import "../style/font/font.scss";

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
</style>
