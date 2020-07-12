<template>
  <div class="bg-gray">
    <HeaderWithCart/>
    <div class="bg-white box-shadow">
      <div class="p-2 border-bottom">
        <p style="color: #AEAEAE; font-weight: 400;">Pesanan</p>
      </div>
      <div class="d-flex justify-content-between mt-2 pb-2">
        <div class="col-4">
          <b-button pill block variant="outline-primary"
          class="p-1" @click="changeStatus(0)" size="sm" id="changeStat0"
          :class="{buttonActive : this.isActive[0]}">Proses</b-button>
        </div>
        <div class="col-4">
          <b-button pill block variant="outline-primary"
          class="p-1" @click="changeStatus(1)" size="sm" id="changeStat1"
          :class="{buttonActive : this.isActive[1]}">Selesai</b-button>
        </div>
        <div class="col-4">
          <b-button pill block variant="outline-primary"
          class="p-1" @click="changeStatus(2)" size="sm" id="changeStat2"
          :class="{buttonActive : this.isActive[2]}">Batal</b-button>
        </div>
      </div>
    </div>
    <div class="mt-3">
      <div class="custom-card box-shadow p-3 row shadow-sm m-2">
        <div class="col-4 no-margin no-padding">
          <img src="@/assets/etc/aqua.png" alt="" class="img-product">
        </div>
        <div class="col-8 no-margin  no-padding">
          <p class="title-product">Botol Minum Aqua Mineral 300ML</p>
          <p class="desc-product">Deskripsi: Lorem ipsum dolor, sit amet
            consectetur adipisicing elit.</p>
          <p class="status-product">Diproses</p>
          <router-link to="/daftar-pesanan/detail">
            <button class="buy-btn">Lihat Detail</button>
          </router-link>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import HeaderWithCart from '@/components/HeaderWithCart.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    HeaderWithCart,
    Footer,
  },
  data() {
    return {
      isActive: [
        true,
        false,
        false,
      ],
    };
  },
  methods: {
    changeStatus(idx) {
      this.isActive.splice(idx, 1, true);
      for (let i = 0; i < this.isActive.length; i += 1) {
        if (i !== idx) this.isActive.splice(i, 1, false);
      }
    },
  },
};
</script>

<style lang='scss' scoped>
@import '../style/font/font.scss';
.penawaran-text{
  font-size: 11px;
}

.desc-product{
  font-size: 11px;
  color: #AEAEAE;
  margin-top: 2px;
}

.buttonActive{
  background-color: rgb(0, 123, 255);
  color: white!important;
}

.brand-product{
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0px;
}

.status-product{
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 12px;
  margin: 0px;
  color: rgb(80, 140, 223);
}

.title-product{
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0px;
}

.buy-btn{
    width: 100%;
    background-color: rgb(0, 128, 255);
    padding-top: 6px;
    padding-bottom: 6px;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: 500;
    transition: all 1s;
    font-size: 13px;
}

.buy-btn:hover {
  background: rgb(0, 128, 255) radial-gradient(circle, transparent 1%, rgb(0, 105, 209) 1%)
    center/15000%;
  color: white;
}

.buy-btn:active {
  background-color: rgb(0, 112, 224);
  background-size: 100%;
  transition: background 0s;
}

.custom-card{
  margin-top: 10px!important;
  border: 0.5px solid rgba(208, 208, 208, 0.245);
  background-color: white;
  border-radius: 10px;
}

.bg-gray{
  background-color: #f1f1f1;
}

.category {
  font-size: 13px;
  border-radius: 20px;
  padding: 4px 7px;
  font-weight: 600;
  color: #7c7c7c;
  background-color: #e0e0e0;
  cursor: pointer;
}

.un-active {
  transition: all 0.3s;
}

.un-active:hover {
  background: #e86c00 radial-gradient(circle, transparent 1%, #e86c00 1%)
    center/15000%;
  color: white;
}

.text-btn{
  font-size: 12px;
  width: 100%;
  margin-top: 5px;
}

.btn-bawah{
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;
}

.overflow-x{
  overflow-x: auto;
  white-space: nowrap;
}

a:hover{
  text-decoration: none;
}

.overflow-x::-webkit-scrollbar {
  display: none;
}

.cat-sticky{
  position: sticky;
  top: 10px;
  z-index: 500;
}

.sort-part{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: white;
  top: 0;
  left: 0;
  z-index: 100000;
  display: none;
}

.filter-part{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: white;
  top: 0;
  left: 0;
  z-index: 100000;
  display: none;
}

.un-active:active {
  background-color: #ff973b;
  background-size: 100%;
  transition: background 0s;
}

.title-product {
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #7c7c7c;
  margin-top: 5px;
}

.showSort{
  display: block!important;
}

.showFilter{
  display: block!important;
}

.product-price {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #ff7600;
}

.cst-card {
  box-shadow: 0px 0px 13px -9px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  padding: 0px;
  margin-top: 7px;
  max-width: 49.1%;
  border: 1px solid rgba(0, 0, 0, 0.061);
  padding: 7px;
  transition: all 1s;
}

.cst-card:hover{
  box-shadow: 0px 5px 25px -9px rgba(0, 0, 0, 0.75);
}

.cont{
  min-height: 120px;
}

.cst-card:nth-child(even) {
  margin-left: 5px;
}

.img-product {
  max-width: 90px;
  max-height: 120px;
  display: block;
}

.fixed-alert{
  z-index: 100;
  position: fixed;
  bottom: 5px;
  margin: 5% auto; /* Will not center vertically and won't work in IE6/7. */
  left: 0;
  right: 0;
  z-index: 100000
}

p {
  margin: 0px;
}

.fix-filter-sort{
  position: fixed;
  bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  z-index: 1000;
}

.sort-fix{
  box-shadow: 0px 5px 13px -7px rgba(0, 0, 0, 1);
  background-color: white;
  border-radius: 27px;
  color: gray;
  padding: 10px;
}

// .active {
//   background-image: linear-gradient(to bottom right, #e86c00, #ff985c);
//   color: white;
// }

.content {
  flex-direction: row;
}

.no-padding {
  padding: 0px !important;
}

.no-margin {
  margin: 0px !important;
}
</style>
