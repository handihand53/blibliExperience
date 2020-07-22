<template>
  <div class="bg-gray">
    <HeaderWithCart/>
    <div class="head-title bg-white">
      <p>Detail Produk Scan</p>
    </div>
    <div class="p-3 bg-white mt-3">
      <p class="title-product">{{ detailProduct.productForm.productName }}</p>
      <p class="brand-product">Brand:
        <span class="brand">{{ detailProduct.productForm.productBrand }}</span></p>
      <!-- <img src="@/assets/etc/aqua.png" alt="" class="product-img"> -->
      <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="0"
            indicators
            class="product-img"
            background="transparent"
            style="text-shadow: 1px 1px 2px #333;"
          >
            <b-carousel-slide
              img-src="../../assets/etc/vit.png"
            ></b-carousel-slide>
             <b-carousel-slide
              img-src="../../assets/etc/vit.png"
            ></b-carousel-slide>
             <b-carousel-slide
              img-src="../../assets/etc/vit.png"
            ></b-carousel-slide>
          </b-carousel>
        <div class="row m-0 p-0 mt-4">
          <img src="@/assets/etc/vit.png"
          @click="moveSlider(0)"
          alt="" class="img-preview">
          <img src="@/assets/etc/vit.png"
          @click="moveSlider(1)"
          alt="" class="img-preview">
          <img src="@/assets/etc/vit.png"
          @click="moveSlider(2)"
          alt="" class="img-preview">
        </div>
      <p class="price-text">Harga
        <span class="price">Rp{{ formatPrice(detailProduct.productPrice) }}</span></p>
      <hr>
      <p class="wishlist-text">
        <font-awesome-icon
        class="f-icon"
        icon="heart"/>
          Wishlist</p>
    </div>
    <div class="p-3">
      <div class="bg-white mt-1 shadow">
        <div class="header-desc col-12 row no-margin no-padding">
          <div @click="description"
          class="col-6 no-margin no-padding center"
          :class="{'active-pan': descActive}">
            <p class="desc-box" :class="{'color-white': descActive}">Deskripsi</p>
          </div>
          <div @click="detail"
          class="col-6 no-margin no-padding center"
          :class="{'active-pan': detailActive}">
            <p class="desc-box" :class="{'color-white': detailActive}">Detail Barang</p>
          </div>
        </div>
        <div class="desc p-2" v-if="descActive">
          <p class="title-product2">{{ detailProduct.productForm.productName  }}</p>
          <p class="desc-product">
          {{ detailProduct.productForm.productDescription }}
          </p>
        </div>
        <table class="table table-striped border-0 m-0 p-0"
            :class="{'display-none': !detailActive}" v-else>
              <tr class="content-table">
                <td>Kategori</td>
                <td>{{detailProduct.productForm.productCategory}}</td>
              </tr>
              <tr class="content-table">
                <td>Dimensi</td>
                <td>{{detailProduct.productForm.productVolume}}</td>
              </tr>
              <tr class="content-table">
                <td>Berat (gram)</td>
                <td>{{detailProduct.productForm.productWeight}}</td>
              </tr>
              <tr class="content-table">
                <td>Kode barcode</td>
                <td>{{detailProduct.productForm.productBarcode}}</td>
              </tr>
            </table>
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
import axios from 'axios';

export default {
  components: {
    HeaderWithCart,
    Footer,
  },
  data() {
    return {
      slide: 0,
      descActive: true,
      detailActive: false,
      detailProduct: {
        productForm: {
          productName: '',
        },
      },
    };
  },
  async created() {
    await this.getDetailProduct();
  },
  methods: {
    async getDetailProduct() {
      await axios.get(`http://localhost:${this.port}/experience/api/products/barcode?shopId=${this.$route.params.shopId}&productBarcode=${this.$route.params.barcode}`)
        .then((response) => {
          this.detailProduct = response.data.data;
        });
    },
    formatPrice(value) {
      const val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
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
    },
    moveSlider(idx) {
      this.slide = idx;
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

.img-preview{
  width: 60px;
  border: 0.8px gray solid;
  padding: 5px;
  margin-right: 10px;
}

.btn-checkout:hover {
  background: #e86c00 radial-gradient(circle, transparent 1%, #e86c00 1%)
    center/15000%;
  color: white;
}

.content-table{
  font-size: 14px;
}

tr.content-table:nth-child(odd){
  background-color: #eeeeee;
}

.product-img{
  width: 100%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  display: block;
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


.bg-gray{
  background-color: #f1f1f1;
}

.title-product{
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.active-pan{
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
