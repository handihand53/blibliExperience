<template>
  <div>
    <CariBarangHeader/>
    <div class="p-3">
      <p class="ringkasan-title"><font-awesome-icon class="mr-2" icon="exchange-alt"/>
      Ringkasan Pengajuan</p>
      <div class="card mt-3 p-2 pl-3 pr-3">
        <p>Produk yang sedang anda cari</p>
        <div class="row no-margin pt-3 border-bottom pb-2">
          <div class="col-4 no-margin no-padding">
            <img src="@/assets/etc/aqua.png" alt="" class="img-product">
          </div>
          <div class="col-8 no-margin no-padding">
            <p class="title-product">Botol Minum Aqua Mineral 300ML</p>
            <p class="brand-product">Brand: <span class="brand">Aqua</span></p>
            <p class="desc-product">Deskripsi: Lorem ipsum dolor, sit amet
              consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="d-flex justify-content-between pt-2 pb-2">
          <p>Harga Penawaran</p>
          <p class="color-green">Rp2.000.000</p>
        </div>
      </div>
      <div class="card mt-3 p-2 pl-3 pr-3">
        <p class="desk-barang mb-2">Deskripsi Barang</p>
        <p class="desk-long-barang">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur deleniti at vitae illo exercitationem eius
            laboriosam alias veniam dolorem aliquid aut magni nobis
            assumenda, ab aliquam quae, in, officiis numquam.</p>
      </div>
      <div class="card mt-3">
        <div class="row no-margin p-2 pl-3 col-12">
          <div class="col-2 p-1">
            <font-awesome-icon class="map-icon-loc color-gray" icon="truck"/>
          </div>
          <div class="col-10 no-padding">
            <ul>
                <li class="address-user">
                    Pastikan barang sesuai dengan deskripsi yang diberikan untuk
              mempercepat proses transaksi
                </li>
                <li class="address-user">
                    Ketika pembeli menerima penawaran anda,
                    maka anda harus mengirimkan barang ke blibli
                    untuk diproses lebih lanjut
                </li>
            </ul>
          </div>
        </div>
      </div>
      <button class="text-uppercase barter-btn mt-3">Ajukan</button>
    </div>
  </div>
</template>

<script>
import CariBarangHeader from '@/components/CariBarangHeader.vue';

export default {
  components: {
    CariBarangHeader,
  },
};
</script>

<style scoped>
p{
  margin: 0;
}

.desk-barang{
    font-size: 14px;
    font-weight: 600;
}

.desk-long-barang{
    font-size: 12px;
    text-align: justify;
}

ul{
    padding: 0;
    padding-left: 5px;
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
  font-size: 12px;
}

.color-gray{
  color: #595858;
}

.map-icon-loc{
  font-size: 20px;
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
