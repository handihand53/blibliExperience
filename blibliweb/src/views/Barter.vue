<template>
  <div>
    <HeaderWithCart/>
    <div class="p-2">
      <p class="text-center mt-1 mb-1">Blibli Barter</p>
      <img src="@/assets/etc/dummy.jpg" alt="" class="barter-label-img mb-3">
      <img src="@/assets/etc/dummy.jpg" alt="" class="barter-step-label-img">
    </div>
    <label class="label-page pl-2">Kategori yang kamu suka</label>
    <div class="card ml-2 mr-2 pt-1 pb-2">
      <div class="overflow-x">
        <span class="category mr-2 ml-2 active">Semua</span>
        <span class="category mr-2 un-active">Elektronik</span>
        <span class="category mr-2 un-active">Makanan</span>
        <span class="category mr-2 un-active">Minuman</span>
        <span class="category mr-2 un-active">Pakaian</span>
        <span class="category mr-2 un-active">Lain-lain</span>
      </div>
    </div>
    <label class="label-page pl-2 pt-2">Barang ini menunggu buat kamu tukar loh</label>
    <div class="content col-12 row no-margin pl-2 pr-2">
      <router-link to="/detail-barter" class="cst-card col-6">
        <div class="">
          <img src="../../src/assets/etc/aqua.png" alt="aqua" class="img-product ml-auto mr-auto" />
          <span class="tag-label-baru">Baru</span>
          <p class="title-product">Botol Minum Aqua Mineralasdkj lkjashlkjd haskhd askd</p>
          <p class="product-price">Rp.3.000</p>
        </div>
      </router-link>
      <router-link to="/detail-barter" class="cst-card col-6">
        <div class="">
          <img src="../../src/assets/etc/aqua.png" alt="aqua" class="img-product ml-auto mr-auto" />
          <span class="tag-label-baru">Baru</span>
          <p class="title-product">Botol Minum Aqua Mineralasdkj lkjashlkjd haskhd askd</p>
          <p class="product-price">Rp.3.000</p>
        </div>
      </router-link>
      <router-link to="/detail-barter" class="cst-card col-6">
        <div class="">
          <img src="../../src/assets/etc/aqua.png" alt="aqua" class="img-product ml-auto mr-auto" />
          <span class="tag-label-bekas">Bekas</span>
          <p class="title-product">Botol Minum Aqua Mineralasdkj lkjashlkjd haskhd askd</p>
          <p class="product-price">Rp.3.000</p>
        </div>
      </router-link>
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
};
</script>

<style>
.tag-label-baru {
  background-color: #0095DA;
  color: white;
  font-size: 11px;
  padding: 2px 15px;
  border-radius: 10px;
}

.tag-label-bekas {
  background-color: #FF7600;
  color: white;
  font-size: 11px;
  padding: 2px 15px;
  border-radius: 10px;
}

.content {
  flex-direction: row;
}

.no-margin{
  margin: 0;
}

.cst-card {
  box-shadow: 0px 0px 13px -9px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  padding: 0px;
  margin-top: 7px;
  max-width: 49.1%;
  border: 1px solid rgba(0, 0, 0, 0.061);
  padding: 7px;
}

.cst-card:nth-child(even) {
  margin-left: 5px;
}

.img-product {
  width: 120px;
  height: 120px;
  display: block;
}

.label-page{
  font-size: 12px;
  font-weight: 600;
}

.barter-label-img{
  width: 100%;
  height: 100px;
  border-radius: 5px;
  border: rgba(0, 0, 0, 0.125) 1px solid;
}

.barter-step-label-img{
  width: 100%;
  height: 200px;
  border-radius: 5px;
  border: rgba(0, 0, 0, 0.125) 1px solid;
}

p{
  margin-bottom: 0;
}

.title-product {
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #7c7c7c;
}

.product-price {
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #ff7600;
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

.un-active:active {
  background-color: #ff973b;
  background-size: 100%;
  transition: background 0s;
}

.active {
  background-image: linear-gradient(to bottom right, #e86c00, #ff985c);
  color: white;
}

</style>
