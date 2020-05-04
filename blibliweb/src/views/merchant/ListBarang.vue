<template>
  <div class="bg-gray">
    <PlainHeaderMarket/>
    <div class="bg-white p-2">
      <small class="text-gray">List Barang</small>
    </div>
    <div class="p-2">
      <div class="row card no-gutters border-0 shadow-sm p-3"
      style="flex-direction: row!important;">
        <div class="col-4">
          <img src="@/assets/etc/aqua.png" alt="" class="img-product">
        </div>
        <div class="col-8 column">
          <p class="title-product">Botol Minum Aqua Mineral 300ML</p>
          <p class="brand-product">Brand: <span class="brand">Aqua</span></p>
          <p class="deskripsi">Deskripsi: Xiaomi Redmi 6A mempuyai dimensi
            tinggi 147,5mm, lebar 71,5...</p>
          <button class="btn btn-outline-primary pl-5 pr-5 float-right">Lihat</button>
        </div>
      </div>
    </div>
    <BottomNavMerchant/>
    <Footer/>
  </div>
</template>

<script>
import PlainHeaderMarket from '@/components/PlainHeaderMarket.vue';
import Footer from '@/components/Footer.vue';
import BottomNavMerchant from '@/components/BottomNavMerchant.vue';

export default {
  components: {
    PlainHeaderMarket,
    BottomNavMerchant,
    Footer,
  },
};
</script>

<style>
.text-gray{
  color: rgb(121, 121, 121);
}

.title-product{
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0px;
}


.status-tag{
  color: white;
  padding: 3px 10px;
  font-size: 10px;
  border-radius: 15px;
}

.success{
  background-color: #37C26A;
}

.fail{
  background-color: #FF5050;
}

.no-padding{
  padding: 0px;
}

.deskripsi{
  color: #808080;
  font-size: 12px;
  text-align: justify;
}

.brand-product{
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0px;
}

.no-margin{
  margin: 0px;
}

.custom-card{
  margin-top: 10px!important;
  border-radius: 7px;
  border: 0.5px solid rgba(208, 208, 208, 0.245);
}

.bg-gray{
  background-color: #F6F6F6;
}

.img-product{
  width: 100px;
}
</style>
