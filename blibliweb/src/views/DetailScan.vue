<template>
  <div class="bg-gray">
    <HeaderWithCart/>
    <div class="head-title bg-white">
      <p>Detail Produk Scan</p>
    </div>
    <div class="p-3 bg-white mt-3">
      <p class="title-product">{{ detailProduct.productDataForm.productName }}</p>
      <p class="brand-product">Brand:
        <span class="brand">{{ detailProduct.productDataForm.productBrand }}</span></p>
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
              v-for="image in detailProduct.productDataForm.productImagePaths"
              :key="image" :img-src="getImage(image)"
            ></b-carousel-slide>
          </b-carousel>
        <div class="row m-0 p-0 mt-4">
          <img :src="getImage(image)"
            v-for="(image, idx) in detailProduct.productDataForm.productImagePaths"
            :key="image" @click="moveSlider(idx)"
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
          <p class="title-product2">{{ detailProduct.productDataForm.productName  }}</p>
          <p class="desc-product">
          {{ detailProduct.productDataForm.productDescription }}
          </p>
        </div>
        <table class="table table-striped border-0 m-0 p-0"
            :class="{'display-none': !detailActive}" v-else>
              <tr class="content-table">
                <td>Kategori</td>
                <td>{{detailProduct.productDataForm.productCategory}}</td>
              </tr>
              <tr class="content-table">
                <td>Dimensi</td>
                <td>{{detailProduct.productDataForm.productVolume}}</td>
              </tr>
              <tr class="content-table">
                <td>Berat (gram)</td>
                <td>{{detailProduct.productDataForm.productWeight}}</td>
              </tr>
              <tr class="content-table">
                <td>Kode barcode</td>
                <td>{{detailProduct.productDataForm.productBarcode}}</td>
              </tr>
            </table>
      </div>
    </div>
    <div class="bottom-nav">
      <div class="row m-0 p-0">
        <div class="buy-btn" @click="buyItem">
          BELI SEKARANG
        </div>
        <div class="icon center" @click="addToBag">
          <img src="@/assets/logo/blibli_wht_logoonly.png" alt="" class="blibli-icon">
        </div>
      </div>
    </div>
    <div class="fixed-alert text-center pl-3 pr-3">
      <b-alert
        :show="dismissCountDown"
        dismissible
        variant="success"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
      >
        Berhasil ditambahkan ke bag
      </b-alert>
    </div>
    <Footer/>
  </div>
</template>

<script>
import HeaderWithCart from '@/components/HeaderWithCart.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
import Cookie from 'vue-cookie';

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
      dismissSecs: 2,
      dismissCountDown: 0,
      detailProduct: {
        productDataForm: {
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
          console.log(this.detailProduct);
        });
    },
    async checkLoginUser() {
    // melakukan check apakah user masih login atau tidak
    // jika user masih login, maka akan dilempar ke halaman utama
      const dataId = Cookie.get('dataId');
      const dataToken = Cookie.get('dataToken');
      await axios.get(`http://localhost:${this.port}/experience/api/users?id=${dataId}`,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .catch(() => {
          this.$router.push('/login');
        });
    },
    formatPrice(value) {
      const val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    getImage(imagePath) {
      const path = imagePath.split('/');
      return `/assets/resources/uploads/productPhoto/${path[path.length - 1]}`;
    },
    addToBag() {
      this.dismissCountDown = this.dismissSecs;
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
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
    async buyItem() {
      // logic beli item
      // post axios

      this.isLoading = true;
      await this.checkLoginUser();
      const dataId = Cookie.get('dataId');
      const dataToken = Cookie.get('dataToken');
      const cart = {
        productId: this.detailProduct.productDataForm.productId,
        stockId: this.detailProduct.stockId,
        userId: dataId,
      };

      await axios.post(`http://localhost:${this.port}/experience/api/carts`, cart,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .then(() => {
          setTimeout(() => this.$router.push('/cart'), 1000);
        })
        .catch(() => {
          this.$router.push('/login');
        });
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
.brand{
  color: #0088FF;
}

.blibli-icon{
  width: 40px;
  margin: 10px;
}

.icon{
  display: inline-block;
  background-color: #0095DA;
  width: 20%;
  cursor: pointer;
  height: 60px;
  transition: all 0.2s;
}

.fixed-alert{
  z-index: 100;
  position: fixed;
  bottom: 15px;
  margin: 5% auto; /* Will not center vertically and won't work in IE6/7. */
  left: 0;
  right: 0;
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
