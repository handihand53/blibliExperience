<template>
  <div>
    <BarterHeader/>
    <div class="p-3">
      <p class="ringkasan-title"><font-awesome-icon class="mr-2" icon="exchange-alt"/>
      Ringkasan Barter</p>
      <label class="mt-2">Alamat anda</label>
      <div class="card">
        <div class="row no-margin p-2 pl-3 col-12">
          <div class="col-2 p-1">
            <font-awesome-icon class="map-icon-loc color-gray" icon="map-marker-alt"/>
          </div>
          <div class="col-10 no-padding">
            <p class="address-user">Jawa Barat, Kota Tasikmalaya, Mangkubumi, Linggajaya</p>
          </div>
        </div>
      </div>
      <div class="card mt-3 p-3">
        <p>Produk yang ingin di barter</p>
        <div class="row no-margin pt-3 border-bottom pb-2">
          <div class="col-4 no-margin no-padding">
            <img src="@/assets/etc/aqua.png" alt="" class="img-product">
          </div>
          <div class="col-8 no-margin no-padding">
            <p class="title-product">Botol Minum Aqua Mineral 300ML</p>
            <p class="brand-product">Brand: <span class="brand">Aqua</span></p>
            <p class="desc-product">Deskripsi: Lorem ipsum dolor, sit amet
              consectetur adipisicing elit.</p>
            <p class="price">Rp13.500.000</p>
          </div>
        </div>
        <p class="mt-2">Barter dengan</p>
        <div class="row no-margin pt-3 border-bottom pb-2">
          <div class="col-4 no-margin no-padding">
            <img src="@/assets/etc/aqua.png" alt="" class="img-product">
          </div>
          <div class="col-8 no-margin no-padding">
            <p class="title-product">Botol Minum Aqua Mineral 300ML</p>
            <p class="brand-product">Brand: <span class="brand">Aqua</span></p>
            <p class="desc-product">Deskripsi: Lorem ipsum dolor, sit amet
              consectetur adipisicing elit.</p>
            <p class="price color-green">Rp11.500.000</p>
          </div>
        </div>
        <div class="d-flex justify-content-between pt-2 border-bottom pb-2">
          <p>Uang</p>
          <p class="color-green">Rp2.000.000</p>
        </div>
        <div class="d-flex justify-content-between pt-2">
          <p>Total</p>
          <p class="color-green">Rp0</p>
        </div>
      </div>
      <div class="card mt-3">
        <div class="row no-margin p-2 pl-3 col-12">
          <div class="col-2 p-1">
            <font-awesome-icon class="map-icon-loc color-gray" icon="truck"/>
          </div>
          <div class="col-10 no-padding">
            <p class="address-user">Pastikan barang sesuai dengan deskripsi yang diberikan untuk
              mempercepat proses transaksi</p>
          </div>
        </div>
      </div>
      <button class="text-uppercase barter-btn mt-3">Barter</button>
    </div>
  </div>
</template>

<script>
import BarterHeader from '@/components/BarterHeader.vue';

export default {
  components: {
    BarterHeader,
  },
};
</script>

<style scoped>
p{
  margin: 0;
}

.barter-btn{
    width: 100%;
    background: #FD8218;
    padding-top: 10px;
    padding-bottom: 10px;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: 500;
    transition: all 1s;
    font-size: 18px;
}

.barter-btn:hover {
  background: #e86c00 radial-gradient(circle, transparent 1%, #e86c00 1%)
    center/15000%;
  color: white;
}

.barter-btn:active {
  background-color: #ff973b;
  background-size: 100%;
  transition: background 0s;
}

.price{
  margin-top: 12px;
  color: #595858;
  text-align: right;
}

.color-green{
  color: rgb(255, 132, 0);
}

.title-product{
  padding-right: 10px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0px;
}

.desc-product{
  font-size: 12px;
  color: #AEAEAE;
}

.brand-product{
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0px;
}

.brand{
    color: #0088FF;
}

.img-product{
  width: 103px;
}

.address-user{
  font-size: 13px;
}

.color-gray{
  color: #595858;
}

.map-icon-loc{
  font-size: 30px;
}

.no-padding{
  padding: 0;
}

.no-margin{
  margin: 0;
}

.ringkasan-title{
  color: #6a6a6a;
}
</style>
