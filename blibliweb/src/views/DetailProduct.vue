<template>
  <div class="bg-gray">
    <HeaderWithCart/>
    <div class="">
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
      <div class="bg-white mt-3 pb-2">
        <div>
          <p class="metode-text pl-3 pt-3">Metode Pengiriman</p>
            <div class="row no-margin no-padding col-12">
              <label class="container no-padding mr-4 mt-1">
                <input type="radio" checked="checked" name="radio">
                <span class="checkmark"></span>
              </label>
              <div class="col-10 no-padding">
                <p class="radio-text">Ambil langsung
                  <img src="@/assets/logo/bliblimart2.png"
                  class="blimart-icon" alt="">
                </p>
                <span class="stock">Stock Ada
                  <font-awesome-icon
                  class="f-icon"
                  icon="check-circle"/>
                </span>
                <p class="radio-text-desc">Ambil barang langsung di bliblimart</p>
              </div>
            </div>
            <div class="row no-margin no-padding col-12">
              <label class="container no-padding mr-4">
                <input type="radio" name="radio">
                <span class="checkmark"></span>
              </label>
              <div class="col-10 no-padding">
                <p class="radio-text">Pengiriman Langsung</p>
                <span class="stock">Stock Ada
                  <font-awesome-icon
                  class="f-icon"
                  icon="check-circle"/>
                </span>
                <p class="radio-text-desc">Barang akan dikirim langsung ke tempat anda</p>
              </div>
            </div>
        </div>
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
    </div>
    <div class="bottom-nav">
      <div class="row no-margin no-padding">
        <div class="buy-btn">
          BELI SEKARANG
        </div>
        <div class="icon center">
          <img src="@/assets/logo/blibli_wht_logoonly.png" alt="" class="blibli-icon">
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
  name: 'Account',
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
  },
};
</script>

<style lang="scss" scoped>

.blibli-icon{
  width: 40px;
  margin: 10px;
}

.buy-btn{
  width: 80%;
  height: 100%;
  display: inline-block;
  height: 60px;
  text-align: center;
  padding-top: 17px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  background-color: #ff7f0f;
}

.buy-btn:hover {
  background: #e86c00 radial-gradient(circle, transparent 1%, #e86c00 1%)
    center/15000%;
  color: white;
}

.buy-btn:active {
  background-color: #ff973b;
  background-size: 100%;
  transition: background 1s;
}

.icon{
  display: inline-block;
  background-color: #0095DA;
  width: 20%;
  cursor: pointer;
  height: 60px;
  transition: all 0.2s;
}

.icon:hover {
  background: rgb(0, 154, 220) radial-gradient(circle, transparent 1%, rgb(0, 106, 152) 1%)
    center/15000%;
  color: white;
}

.icon:active {
  background-color: rgb(0, 127, 181);
  background-size: 100%;
  transition: background 0s;
}

.bottom-nav{
  height: 60px;
  background-color: #F99401;
  position: fixed;
  bottom: 0;
  display: block;
  width: 100%;
}

.desc-product{
  font-size: 14px;
  text-align: justify;
}

.title-product2{
  font-size: 14px;
}

.desc-box{
  margin-top: 12px;
  color: #BFE4F6;
  font-weight: 600;
}

.color-white{
  color: white;
}

.active{
  cursor: pointer;
  color: white;
  border-bottom: 5px #FC9B2D solid;
}

.blimart-icon{
  display: inline-block;
  width: 85px;
}

.header-desc{
  height: 50px;
  background-color: #0095DA;
}

.no-padding{
  padding: 0px;
}

.no-margin{
  margin: 0px;
}

.f-icon:hover{
  color: #0088FF;
}

.metode-text{
  font-size: 14px;
  font-weight: 600;
}

.radio-text-desc{
  font-size: 13px;
  color: #808080;
}

.stock{
  position: absolute;
  right: 0;
  font-size: 14px;
  color: #2FA656;
  margin-top: 3px;
  font-weight: 600;
}

.wishlist-text{
  cursor: pointer;
  text-align: center;
  margin-top: 10px;
  color: rgb(198, 198, 198);
  font-weight: 600;
}

.bg-gray{
  background-color: rgb(236, 236, 236);
}

.title-product{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.brand-product{
  font-size: 12px;
}

p{
  margin-bottom: 5px;
}

.brand{
  color: #0088FF;
}

hr{
  margin: 0px;
}

.product-img{
  width: 173px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  display: block;
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

.radio-text{
  font-size: 13px;
  font-weight: 600;
  display: inline-block;
}

.center{
  text-align: center;
}

/* The container */
.container {
  width: 5px;
  display: inline;
  position: relative;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 15px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-left: 15px;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: #eee;
  border-radius: 50%;
  border: 1.5px #2196F3 solid;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: rgb(255, 255, 255);
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  // background-color: #2196F3;
  border: 1.5px #2196F3 solid;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 4px;
  left: 3.7px;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background: #2196F3;
}

</style>
