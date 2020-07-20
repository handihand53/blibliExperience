<template>
  <div class="bg-gray">
    <HeaderWithCart/>
    <div class="">
      <div class="p-3 bg-white mt-3">
        <p class="title-product">{{ allProduct.productName }}</p>
        <p class="brand-product">Brand:
          <span class="brand">{{ allProduct.productBrand }}</span></p>
          <!-- <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="0"
            indicators
            class="product-img"
            background="transparent"
            style="text-shadow: 1px 1px 2px #333;"
          >
            <b-carousel-slide
              :img-src=ProductDetails.imgUrl[0]
            ></b-carousel-slide>
             <b-carousel-slide
              :img-src=ProductDetails.imgUrl[0]
            ></b-carousel-slide>
             <b-carousel-slide
              :img-src=ProductDetails.imgUrl[0]
            ></b-carousel-slide>
          </b-carousel> -->
        <!-- <div class="row m-0 p-0 mt-4">
          <img :src="ProductDetails.imgUrl[0]"
          @click="moveSlider(0)"
          alt="" class="img-preview">
          <img :src="ProductDetails.imgUrl[0]"
          @click="moveSlider(1)"
          alt="" class="img-preview">
          <img :src="ProductDetails.imgUrl[0]"
          @click="moveSlider(2)"
          alt="" class="img-preview">
        </div> -->
        <p class="price-text"
        v-if="this.currentIdx !== null">Harga <span class="price">
          Rp{{ formatPrice(allProduct.productStockList[currentIdx].productPrice) }}</span></p>
        <hr>
        <p @click="addToWishList"
          class="wishlist-text">
          <font-awesome-icon
          class="f-icon"
          icon="heart"/>
           Wishlist</p>
      </div>
      <div class="bg-white mt-3 p-3">
        <p class="pilih-lokasi">Pilih Lokasi
          <span ref="lokasi" v-b-modal.modal-sm class="lokasi float-right">Pilih</span></p>
        <p class="selected-location">{{ currentLocation }}</p>
      </div>
      <div class="bg-white mt-3 pb-2" v-if="this.currentIdx !== null">
        <div class="p-3">
          <div class="row no-margin no-padding col-12">
            <b-form-group label="Metode Pengiriman">
              <b-form-radio v-model="selected"
              :disabled="allProduct.productStockList[currentIdx].productStock === 0"
              name="some-radios" value="A">
                <div class="no-padding">
                  <div class="d-flex justify-content-between row p-0 m-0">
                   <table class="table m-0 p-0">
                     <tr class="stock-item">
                       <td>
                        <p class="radio-text">Ambil langsung
                          <img src="@/assets/logo/bliblimart2.png"
                          class="blimart-icon" alt="">
                        </p>
                      </td>
                      <td class="stock-table">
                        <span v-if="allProduct.productStockList[currentIdx].productStock
                        > 0"
                        class="stock ml-auto display-content">Stock Ada
                          <font-awesome-icon
                          class="f-icon"
                          icon="check-circle"/>
                        </span>
                        <span v-else
                        class="stock-red display-content ml-auto">Tidak Ada
                          <font-awesome-icon
                          class="f-icon"
                          icon="times-circle"/>
                        </span>
                      </td>
                     </tr>
                   </table>
                  </div>
                </div>
                <p class="radio-text-desc">Ambil barang langsung di bliblimart</p>
              </b-form-radio>
              <b-form-radio v-model="selected" name="some-radios"
              :disabled="allProduct.productStockList[currentIdx].productStock === 0" value="B">
                <div class="no-padding">
                  <div class="d-flex justify-content-between row p-0 m-0">
                   <table class="table m-0 p-0">
                     <tr class="stock-item">
                       <td>
                        <p class="radio-text">Pengiriman Langsung</p>
                      </td>
                      <td class="text-right">
                        <span v-if="allProduct.productStockList[currentIdx].productStock
                        > 0" class="stock">Stock Ada
                          <font-awesome-icon
                          class="f-icon"
                          icon="check-circle"/>
                        </span>
                        <span v-else class="stock-red">Tidak Ada
                          <font-awesome-icon
                          class="f-icon-red"
                          icon="times-circle"/>
                        </span>
                      </td>
                     </tr>
                   </table>
                  </div>
                </div>
                <p class="radio-text-desc">Barang akan dikirim langsung ke tempat anda</p>
              </b-form-radio>
            </b-form-group>
          </div>
        </div>
      </div>
      <div class="p-3">
        <div class="bg-white mt-1">
          <div class="header-desc col-12 row no-margin no-padding">
            <div @click="description"
            class="col-6 no-margin no-padding center"
            :class="{botActive: descActive}">
              <p class="desc-box" :class="{'color-white': descActive}">Deskripsi</p>
            </div>
            <div @click="detail"
            class="col-6 no-margin no-padding center"
            :class="{botActive: detailActive}">
              <p class="desc-box" :class="{'color-white': detailActive}">Detail Barang</p>
            </div>
          </div>
          <div class="desc pt-2 pl-3 pr-3 pb-2">
            <p class="title-product2"
            >{{allProduct.productName}}</p>
            <p class="desc-product"
            :class="{'display-block': descActive, 'display-none': !descActive}">
            {{ allProduct.productDescription }}
            </p>
            <h5 :class="{'display-block': detailActive, 'display-none': !detailActive}"
            >Detail Barang</h5>
            <table class="table table-striped border-0 m-0 p-0"
            :class="{'display-none': !detailActive}">
              <tr class="content-table">
                <td>Kategori</td>
                <td>{{allProduct.productCategory}}</td>
              </tr>
              <tr class="content-table">
                <td>Dimensi</td>
                <td>{{allProduct.productVolume}}</td>
              </tr>
              <tr class="content-table">
                <td>Berat (gram)</td>
                <td>{{allProduct.productWeight}}</td>
              </tr>
              <tr class="content-table">
                <td>Kode barcode</td>
                <td>{{allProduct.productBarcode}}</td>
              </tr>
            </table>
            <p class="desc-product" :class="{'kelas untuk detail': detailActive}">
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-nav">
      <div class="row no-margin no-padding">
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
        variant="dark"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
      >
        {{alertMsg}}
      </b-alert>
    </div>
    <b-modal id="modal-sm" size="sm" centered
    v-model="show"
    no-close-on-backdrop
    no-close-on-esc
    no-enforce-focus
    hide-header-close
    title="Pilih Lokasi Bliblimart"
    hide-footer>
      <div class="mb-2">Pilih :</div>
      <select class="form-control" ref="location">
        <option selected disabled value=null>--Pilih--</option>
        <option :value='idx'
        v-for='(shop, idx) in allProduct.productStockList'
        v-bind:key='shop.shopForm.shopId'>{{shop.shopForm.shopName}}</option>
      </select>
      <p class="red mt-2"
      :v-if="this.locations">Lokasi tidak boleh kosong</p>
      <b-button variant="primary" class="float-right mt-1"
      @click="confirmLocation">Pilih Lokasi</b-button>
    </b-modal>
    <Footer/>
    <div class="overlay-loading d-flex align-items-center"
    :class="{hide: !isLoading}">
      <b-spinner
      variant="dark"
      class="ml-auto mr-auto spinner"
      ></b-spinner>
    </div>
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
  created() {
    this.getDetailProduct();
    this.scrollToTop();
  },
  data() {
    return {
      locations: false,
      currentIdx: null,
      slide: 0,
      descActive: true,
      detailActive: false,
      selected: '',
      dismissSecs: 2,
      dismissCountDown: 0,
      alertMsg: '',
      isLoading: false,
      allProduct: '',
      show: true,
    };
  },
  methods: {
    getDetailProduct() {
      axios.get(`http://localhost:${this.port}/experience/api/products?id=${this.$route.params.id}`)
        .then((response) => {
          this.allProduct = response.data.data;
        });
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
      if (this.$refs.location.value !== null) {
        this.currentIdx = this.$refs.location.value;
        this.currentLocation = this.allProduct.productStockList[this.currentIdx].shopForm.shopName;
        this.show = false;
        this.locations = false;
      } else {
        this.locations = true;
      }
    },
    formatPrice(value) {
      const val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    // Untuk notifikasi ketika user menekan 'beli sekarang'
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
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
    async buyItem() {
      // logic beli item
      // post axios

      this.isLoading = true;
      await this.checkLoginUser();
      const dataId = Cookie.get('dataId');
      const dataToken = Cookie.get('dataToken');
      const cart = {
        productId: this.allProduct.productStockList[this.currentIdx].productForm.productId,
        stockId: this.allProduct.productStockList[this.currentIdx].stockId,
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
    addToBag() {
      this.alertMsg = 'Produk berhasil ditambahkan';
      this.dismissCountDown = this.dismissSecs;
    },
    addToWishList() {
      this.alertMsg = 'Berhasil masuk wishlist';
      this.dismissCountDown = this.dismissSecs;
    },
    moveSlider(idx) {
      this.slide = idx;
    },
  },
};
</script>

<style lang="scss" scoped>
.pilih-lokasi{
  font-size: 14px;
  font-weight: 600;
}

.display-block{
  display: block;
}

.stock-table{
  position: absolute;
  right: -66px;
}

.spinner{
  width: 50px;
  height: 50px;
}

.display-none{
  display: none;
}

.lokasi{
  font-size: 12px;
  color: #0088FF;
  padding-bottom: 0px;
}

.hide{
  display: none!important;
}

.blibli-icon{
  width: 40px;
  margin: 10px;
}

.form-group{
  padding: 0px!important;
  width: 100%;
}

.stock-red{
  position: absolute;
  right: 0;
  font-size: 14px;
  color: rgb(228, 51, 51);
  margin-top: 3px;
  font-weight: 600;
}

.red{
  color: rgb(228, 51, 51);
  font-size: 13px;
  font-weight: 600;
}

.stock-table2{
  right: -15px;
  position: absolute;
  width: 100%;
}

.selected-location{
  font-size: 12px;
  color: gray;
}

.img-preview{
  width: 60px;
  border: 0.8px gray solid;
  padding: 5px;
  margin-right: 10px;
}

tr > td{
  font-size: 14px;
  border: none!important;
}

.fixed-alert{
  z-index: 100;
  position: fixed;
  bottom: 15px;
  margin: 5% auto; /* Will not center vertically and won't work in IE6/7. */
  left: 0;
  right: 0;
}

.stock-item > td {
  padding: 0px;
}

tr.content-table:nth-child(odd){
  background-color: #eeeeee;
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

.botActive{
  border-bottom: #F99401 4px solid;
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
  width: 100%;
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

.display-content{
  display: contents;
}

.custom-control-label{
  width: 100%;
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

.overlay-loading{
  z-index: 200;
  background-color: #0000006a;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
}

</style>
