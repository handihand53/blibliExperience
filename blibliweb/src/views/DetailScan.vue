<template>
  <div class="bg-gray">
    <HeaderWithCart/>
    <div class="head-title bg-white">
      <p>Detail Produk Scan</p>
    </div>
    <div class="p-3 bg-white mt-3">
      <p class="title-product">Botol Minum Aqua Mineral 300ML</p>
      <p class="brand-product">Brand: <span class="brand">Aqua</span></p>
      <img src="@/assets/etc/aqua.png" alt="" class="product-img">
      <p class="price-text">Harga <span class="price">Rp3.000</span></p>
      <hr>
      <p class="wishlist-text">
        <font-awesome-icon
        class="f-icon"
        icon="heart"/>
          Wishlist</p>
    </div>
    <div class="p-3">
      <div class="bg-white mt-1">
        <div class="header-desc col-12 row no-margin no-padding">
          <div @click="description"
          class="col-6 no-margin no-padding center"
          :class="{active: descActive}">
            <p class="desc-box" :class="{'color-white': descActive}">Deskripsi</p>
          </div>
          <div @click="detail"
          class="col-6 no-margin no-padding center"
          :class="{active: detailActive}">
            <p class="desc-box" :class="{'color-white': detailActive}">Detail Barang</p>
          </div>
        </div>
        <div class="desc p-2">
          <p class="title-product2">Aqua Air Mineral [300 mL/pcs]</p>
          <p class="desc-product">
          Aqua Air Mineral [300 mL/pcs] adalah air mineral dalam kemasan yang segar.
          Dibuat dari sumber mata air pilihan yang diproduksi menggunakan teknologi
          modern untuk mempertahankan rasa alami dan kesegarannya. Dikemas secara higienis
          untuk menjaga kualitasnya, nikmati segala kebaikan alam dalam setiap tetesnya.
          </p>
        </div>
      </div>
    </div>
    <div class="bottom-navigation p-2 row no-margin">
      <div class="col-8 no-padding-left">
        <select name="" id="" class="form-control">
          <option selected hidden>Metode Pengiriman</option>
          <option value="">Bliblimart</option>
          <option value="">Antar ke rumah</option>
        </select>
      </div>
      <div class="col-4 right no-padding">
        <button class="btn-checkout">Tambah</button>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import HeaderWithCart from '@/components/HeaderWithCart.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Profile',
  components: {
    HeaderWithCart,
    Footer,
  },
  data() {
    return {
      descActive: true,
      detailActive: false,
    };
  },
  methods: {
    description() {
      this.descActive = true;
      this.detailActive = false;
    },
    detail() {
      this.descActive = false;
      this.detailActive = true;
    },
    confirmLocation() {
      this.currentLocation = this.$refs.location.value;
      console.log(this.$refs.location.value);
    },
  },
};
</script>

<style scoped>
.brand{
  color: #0088FF;
}

.bottom-navigation{
  position: fixed;
  bottom: 0;
  height: 60px;
  background-color: white;
  width: 100%;
  box-shadow: 0px 0px 13px -7px rgba(0, 0, 0, 0.75);
}

.desc-product{
  font-size: 14px;
  text-align: justify;
}

.desc-box{
  margin-top: 12px;
  color: #BFE4F6;
  font-weight: 600;
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

.color-white{
  color: white;
}

.title-product2{
  font-size: 14px;
}

.center{
  text-align: center;
}

.no-padding{
  padding: 0px;
}

.no-margin{
  margin: 0px;
}

.header-desc{
  height: 50px;
  background-color: #0095DA;
}

.f-icon:hover{
  color: #0088FF;
}

.wishlist-text{
  cursor: pointer;
  text-align: center;
  margin-top: 10px;
  color: rgb(198, 198, 198);
  font-weight: 600;
}

.no-padding-left{
  padding-left: 0px;
}

hr{
  margin: 0px;
}

.price-text{
  font-size: 12px;
  margin-top: 20px;
}

.price{
  font-size: 25px;
  color: #FF7600;
  font-weight: 600;
  margin-left: 20px;
}

.product-img{
  width: 173px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.bg-gray{
  background-color: #f1f1f1;
}

.title-product{
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.active{
  cursor: pointer;
  color: white;
  border-bottom: 5px #FC9B2D solid;
}

.brand-product{
  font-size: 12px;
}

p{
  margin-bottom: 5px;
}

.head-title{
  padding: 10px;
}
</style>
