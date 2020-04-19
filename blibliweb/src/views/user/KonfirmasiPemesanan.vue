<template>
  <div>
    <ConfirmHeader/>
    <div class="pl-3 pt-2">
      <p class="address-label"><font-awesome-icon icon="map-marker-alt" /> Alamat Pengiriman</p>
    </div>
    <div class="pl-3 pr-3">
      <div class="cst-card pl-3 pr-3 pt-2">
        <p class="name-text">Handi Hermawan</p>
        <p class="address-text">Alamat :
          <span class="color-gray">Jl. Juadi No.29, Kotabaru, Kec.
          Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55224</span>
        </p>
        <p class="name-text">0821203585645</p>
      </div>
      <div class="cst-card mt-3 pt-2">
        <p class="shop-name pl-3 pb-3 pt-1">Nama Toko</p>
        <div class="col-12 row no-margin no-padding">
          <div class="pl-3 col-4 no-padding">
            <img src="@/assets/etc/aqua.png" alt="aqua"
            class="img-product ml-auto mr-auto" >
          </div>
          <div class="col-8 no-padding pr-3">
            <p class="product-name">Botol minum aqua mineral 300 ML</p>
            <p class="total-product">Jumlah: 1</p>
            <p class="price-product">Total Harga <span class="price">Rp3.000</span></p>
          </div>
        </div>
      </div>
      <div class="cst-card mt-3 pt-2">
        <p class="border-bottom pl-3 pb-3 pt-1">Nama Toko</p>
        <div class="col-12 row no-margin no-padding">
          <div class="pl-3 col-4 no-padding">
            <img src="@/assets/etc/aqua.png" alt="aqua"
            class="img-product ml-auto mr-auto" >
          </div>
          <div class="col-8 no-padding pr-3">
            <p class="product-name">Botol minum aqua mineral 300 ML</p>
            <p class="total-product">Jumlah: 1</p>
            <p class="price-product">Total Harga <span class="price">Rp3.000</span></p>
          </div>
        </div>
      </div>
      <p class="rincian-label">
        <font-awesome-icon icon="receipt" class="mr-2"/>Rincian Pembayaran</p>
      <div class="cst-card mt-1 mb-cst">
        <div class="col-12 row no-margin no-padding">
          <p class="detail pt-2 pl-3 pb-1 col-6">Total Belanja</p>
          <p class="detail-price-total pt-2 pl-3 pb-1 col-6">Rp365.000.000</p>
        </div>
        <div class="col-12 row no-margin no-padding border-bottom">
          <p class="detail pt-2 pl-3 pb-1 col-6">Biaya Pengiriman</p>
          <p class="detail-price-total pt-2 pl-3 pb-1 col-6">Rp13.000</p>
        </div>
        <div class="col-12 row no-margin no-padding">
          <p class="detail pt-2 pl-3 pb-1 col-6">Total Pembayaran</p>
          <p class="detail-price-total pt-2 pl-3 pb-1 col-6">Rp365.013.000</p>
        </div>
      </div>
    </div>
    <div class="bottom-navigation col-12 no-padding">
      <div class="row no-margin no-padding">
        <div class="col-7 no-padding pl-3">
          <p class="no-margin jumlah-total-text">Jumlah Total</p>
          <p class="price">Rp3.000</p>
        </div>
        <div class="col-5 no-padding right">
          <button class="btn-checkout">Lanjut</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ConfirmHeader from '@/components/ConfirmHeader.vue';

export default {
  components: {
    ConfirmHeader,
  },
};
</script>

<style scoped>
.bottom-navigation{
  position: fixed;
  bottom: 0;
  background-color: white;
  box-shadow: 0px 0px 13px -9px rgba(0, 0, 0, 1);
}

.mb-cst{
  margin-bottom: 75px;
}

.jumlah-total-text{
  font-size: 14px;
  color: #5D5D5D;
}

.address-label{
  color: #737373;
  font-size: 14px;
}

.btn-checkout{
  margin: 7px;
  margin-right: 17px;
  width: 117px;
  height: 40px;
  font-size: 14px;
  color: white;
  background-color: #FD8218;
  border: none;
  border-radius: 7px;
  display: block;
  float: right;
  transition: all 0.7s;
}

.btn-checkout:hover {
  background: #e86c00 radial-gradient(circle, transparent 1%, #e86c00 1%)
    center/15000%;
  color: white;
}

.btn-checkout:active {
  background-color: #ff973b;
  background-size: 100%;
  transition: background 0s;
}

.right{
  text-align: right;
}

.detail{
  font-size: 13px;
}

.no-padding{
  padding: 0px;
}

.detail-price-total{
  font-size: 13px;
  text-align: right;
}

.no-margin{
  margin: 0px;
}

.price{
  color: #FF7600;
  font-size: 20px;
}

.price-product{
  text-align: right;
  margin-top: 20px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #7c7c7c;
}

.rincian-label{
  margin-top: 15px;
  margin-left: 15px;
  color: #737373;
}

.total-product{
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #7c7c7c;
}

.img-product{
  width: 90px;
  margin-top: 15px;
  margin-bottom: 15px;
}

.product-name{
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #7c7c7c;
  margin-top: 5px;
}

.border-bottom{
  border-bottom: 1px solid rgba(138, 138, 138, 0.333);
}

.cst-card {
  box-shadow: 0px 0px 13px -9px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  padding: 0px;
  margin-top: 7px;
  border: 1px solid rgba(0, 0, 0, 0.061);
}

.name-text{
  font-size: 14px;
  font-weight: 600;
}

.color-gray{
  color: #737373;
  font-size: 500;
}

.address-text{
  font-size: 14px;
  font-weight: 600;
  text-align: justify;
}

p{
  margin-bottom: 5px;
}
</style>
