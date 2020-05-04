<template>
  <div class="bg-gray">
    <PlainHeaderMarket/>
    <div class="bg-white p-2">
      <small class="text-gray">Detail Pemesanan</small>
    </div>
    <div class="p-2">
      <div class="card rounded-0 border shadow-sm">
        <div class="p-2 bg-gray-card">
          <p class="m-0 text-title-card">Tanggal pemesanan : 04 Febuari 2019</p>
        </div>
        <div class="">
          <div class="p-2">
            <p class="text-title-card m-0">Kode Pemesanan
            <span class="cl-blue">KKSDD-9852223</span></p>
            <p class="text-card m-0">Total Harga <span class="price">Rp3.000</span></p>
            <p class="text-card m-0">Nama Pemesan <span class="cl-blue">nicholas76</span></p>
          </div>
          <div class="d-flex align-items-start p-2 no-gutters">
            <div class="col-3 no-gutters">
              <img src="@/assets/etc/susu-kental.png" alt="" class="img-detail border">
            </div>
            <div class="col-9 pl-2 column no-gutters ">
              <p class="m-0 text-card">Botol Minum Aqua Mineral 300Ml dijamin paling murah</p>
              <p class="m-0 text-card">Brand: <span class="cl-blue">Aqua</span></p>
              <p class="price m-0 text-card fs-15">Rp1.000</p>
            </div>
          </div>
          <hr>
           <div class="d-flex align-items-start p-2 no-gutters">
            <div class="col-3 no-gutters">
              <img src="@/assets/etc/aqua.png" alt="" class="img-detail border">
            </div>
            <div class="col-9 pl-2 column no-gutters ">
              <p class="m-0 text-card">Botol Minum Aqua Mineral 300Ml dijamin paling murah</p>
              <p class="m-0 text-card">Brand: <span class="cl-blue">Aqua</span></p>
              <p class="price m-0 text-card fs-15">Rp1.000</p>
            </div>
          </div>
          <hr>
          <div class="d-flex align-items-start p-2 no-gutters">
            <div class="col-3 no-gutters">
              <img src="@/assets/etc/product.png" alt="" class="img-detail border">
            </div>
            <div class="col-9 pl-2 column no-gutters ">
              <p class="m-0 text-card">Botol Minum Aqua Mineral 300Ml dijamin paling murah</p>
              <p class="m-0 text-card">Brand: <span class="cl-blue">Aqua</span></p>
              <p class="price m-0 text-card fs-15">Rp1.000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-navigation p-2 row no-gutters">
      <div class="col-6">
        <p class="text-total">Total Belanja(1)</p>
        <p class="text-price">Rp3.000</p>
      </div>
      <div class="col-6 right p-0">
        <button class="btn-checkout">Proses</button>
      </div>
    </div>
  </div>
</template>

<script>
import PlainHeaderMarket from '@/components/PlainHeaderMarket.vue';

export default {
  components: {
    PlainHeaderMarket,
  },
};
</script>

<style>
.bottom-navigation{
  position: fixed;
  bottom: 0;
  height: 60px;
  background-color: white;
  width: 100%;
  box-shadow: 0px 0px 13px -7px rgba(0, 0, 0, 0.75);
}

.bg-gray{
  background-color: #F6F6F6;
}

.cl-blue{
  color: #3594FF;
}

.fs-15{
  font-size: 18px !important;
  font-weight: 600;
}

.price{
  color: #FF7600;
}

.text-total{
  font-size: 12px;
  padding: 0px;
  margin: 0px;
}

hr{
  margin: 0px!important;
}

.text-price{
  font-size: 18px;
  padding: 0px;
  margin: 0px;
  color: #ff7600;
  font-weight: 600;
}

.text-title-card{
  font-size: 13px;
}

.btn-checkout{
  width: 117px;
  height: 40px;
  font-size: 14px;
  color: white;
  background-color: #FD8218;
  border: none;
  border-radius: 7px;
  display: block;
  margin-top: 3px;
  float: right;
  transition: all 0.7s;
}

.btn-checkout:hover {
  background: #e86c00 radial-gradient(circle, transparent 1%, #e86c00 1%)
    center/15000%;
  color: white;
}

.img-detail{
  width: 80px;
}

.text-card{
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bg-gray-card{
  background-color: #E3E3E3;
}

.btn-checkout:active {
  background-color: #ff973b;
  background-size: 100%;
  transition: background 0s;
}

.bg-gray{
  background-color: #F6F6F6;
  height: 100vh;
}

.text-gray{
  color: rgb(121, 121, 121);
}
</style>
