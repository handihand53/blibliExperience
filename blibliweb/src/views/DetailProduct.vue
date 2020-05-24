<template>
  <div class="bg-gray">
    <HeaderWithCart/>
    <div class="">
      <div class="p-3 bg-white mt-3">
        <p class="title-product">{{ ProductDetails.productName }}</p>
        <p class="brand-product">Brand:
          <span class="brand">{{ ProductDetails.brand }}</span></p>
        <img :src="ProductDetails.imgUrl[0]" alt="" class="product-img">
        <p class="price-text">Harga <span class="price">
          Rp{{ formatPrice(ProductDetails.productPrice) }}</span></p>
        <hr>
        <p class="wishlist-text">
          <font-awesome-icon
          class="f-icon"
          icon="heart"/>
           Wishlist</p>
      </div>
      <div class="bg-white mt-3 p-3">
        <p class="pilih-lokasi">Pilih Lokasi
          <span v-b-modal.modal-sm class="lokasi float-right">Pilih</span></p>
        <p class="selected-location">{{ currentLocation }}</p>
      </div>
      <div class="bg-white mt-3 pb-2">
        <div class="p-3">
          <div class="row no-margin no-padding col-12">
            <b-form-group label="Metode Pengiriman">
              <b-form-radio v-model="selected"
              :disabled="ProductDetails.bliblimartStock === 0"
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
                        <span v-if="this.ProductDetails.bliblimartStock
                        > 0" class="stock ml-auto display-content">Stock Ada
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
              :disabled="ProductDetails.deliveryStock === 0" value="B">
                <div class="no-padding">
                  <div class="d-flex justify-content-between row p-0 m-0">
                   <table class="table m-0 p-0">
                     <tr class="stock-item">
                       <td>
                        <p class="radio-text">Pengiriman Langsung</p>
                      </td>
                      <td class="text-right">
                        <span v-if="this.ProductDetails.deliveryStock
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
            :class="{active: descActive}">
              <p class="desc-box" :class="{'color-white': descActive}">Deskripsi</p>
            </div>
            <div @click="detail"
            class="col-6 no-margin no-padding center"
            :class="{active: detailActive}">
              <p class="desc-box" :class="{'color-white': detailActive}">Detail Barang</p>
            </div>
          </div>
          <div class="desc pt-2 pl-3 pr-3 pb-2">
            <p class="title-product2"
            >{{this.ProductDetails.productName}}</p>
            <p class="desc-product"
            :class="{'display-block': descActive, 'display-none': !descActive}">
            {{this.ProductDetails.description}}
            </p>
            <h5 :class="{'display-block': detailActive, 'display-none': !detailActive}"
            >Detail Barang</h5>
            <table class="table table-striped border-0 m-0 p-0"
            :class="{'display-none': !detailActive}">
              <tr class="content-table">
                <td>Kelengkapan paket</td>
                <td>{{this.ProductDetails.packetSet}}</td>
              </tr>
              <tr class="content-table">
                <td>Dimensi</td>
                <td>{{this.ProductDetails.volume}}</td>
              </tr>
              <tr class="content-table">
                <td>Berat</td>
                <td>{{this.ProductDetails.weight}}</td>
              </tr>
              <tr class="content-table">
                <td>Kode barcode</td>
                <td>{{this.ProductDetails.barcode}}</td>
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
        <div class="buy-btn">
          BELI SEKARANG
        </div>
        <div class="icon center">
          <img src="@/assets/logo/blibli_wht_logoonly.png" alt="" class="blibli-icon">
        </div>
      </div>
    </div>
    <b-modal id="modal-sm" size="sm" title="Pilih Lokasi Bliblimart"  @ok="confirmLocation">
      <div class="mb-2">Pilih :</div>
      <select class="form-control" ref="location">
        <option selected disabled hidden>--Pilih--</option>
        <option value="bliblimartA">Bliblimart A</option>
        <option value="bliblimartB">Bliblimart B</option>
        <option value="bliblimartC">Bliblimart C</option>
        <option value="bliblimartD">Bliblimart D</option>
      </select>
    </b-modal>
    <Footer/>
  </div>
</template>

<script>
import HeaderWithCart from '@/components/HeaderWithCart.vue';
import Footer from '@/components/Footer.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    HeaderWithCart,
    Footer,
  },
  created() {
    const store = this.$store;
    store.dispatch('items/getItem');
    this.scrollToTop();
  },
  data() {
    return {
      descActive: true,
      detailActive: false,
      selected: '',
    };
  },
  computed: {
    ...mapGetters([
      'items/dataProduct',
    ]),
    ProductDetails() {
      const store = this.$store;
      if (store.getters['items/dataProduct'].data !== undefined) {
        const data = store.getters['items/dataProduct'].data.find((ele) => ele.id === this.$route.params.id);
        return data;
      }
      return true;
    },
  },
  methods: {
    ...mapActions([
      'items/getProducts',
    ]),
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
    formatPrice(value) {
      const val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    scrollToTop() {
      window.scrollTo(0, 0);
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

.display-none{
  display: none;
}

.lokasi{
  font-size: 12px;
  color: #0088FF;
  padding-bottom: 0px;
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

.stock-table2{
  right: -15px;
  position: absolute;
  width: 100%;
}

.selected-location{
  font-size: 12px;
  color: gray;
}

tr > td{
  font-size: 14px;
  border: none!important;
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

</style>
