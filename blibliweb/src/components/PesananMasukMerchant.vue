<template>
  <div class="bg-gray">
    <div class="p-2">
      <div class="card shadow-sm border-0 rounded-0">
        <div class="p-2 bg-gray-card">
          <p class="m-0 text-title-card">Tanggal pemesanan : 04 Febuari 2019</p>
        </div>
        <div class="p-2">
          <p class="text-title-card m-0">Kode Pemesanan
            <span class="cl-blue">KKSDD-9852223</span></p>
          <p class="text-card m-0">Total Harga <span class="price">Rp3.000</span></p>
          <p class="text-card m-0">Nama Pemesan <span class="cl-blue">nicholas76</span></p>
          <div class="d-flex align-items-end row pt-2 no-gutters">
            <div class="col-7 row no-gutters">
              <img src="@/assets/etc/susu-kental.png" alt="" class="img-preview border">
              <img src="@/assets/etc/aqua.png" alt="" class="img-preview border">
              <img src="@/assets/etc/product.png" alt="" class="img-preview border">
            </div>
            <div class="col-5 column ml-auto no-gutters">
              <b-button class="pl-5 pr-5" variant="outline-primary">Lihat</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style>
.bg-gray{
  background-color: #F6F6F6;
}

.cl-blue{
  color: #3594FF;
}

.bg-gray-card{
  background-color: #E3E3E3;
}

.text-gray{
  color: rgb(121, 121, 121);
}

.bold{
  font-weight: 600;
  font-size: 15px;
}

.text-title-card{
  font-size: 14px;
}

.img-preview{
  width: 50px;
  margin-left: 5px;
  margin-right: 5px;
}

.active{
  color: #0095DA;
  border-bottom: 2px solid #0095DA;
  padding-bottom: 0.25rem;
}

.text-card{
  font-size: 14px;
}

.price{
  color: #FF7600;
}
</style>
