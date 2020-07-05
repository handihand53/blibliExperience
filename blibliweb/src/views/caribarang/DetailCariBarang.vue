<template>
  <div class="bg-gray margin-bot">
    <HeaderWithCart/>
    <div class="mt-2 bg-white p-2 pl-3 pr-3">
      <div class="d-flex justify-content-between">
        <p class="detail-title-product">{{ProductDetail.productName}}</p>
        <p class="tag mt-1 align-self-center" v-if="ProductDetail.status === 'Baru'"
        >{{ProductDetail.status}}</p>
        <p class="tag-bekas mt-1 align-self-center" v-else>{{ProductDetail.status}}</p>
      </div>
      <div>
        <p class="brand-detail-product">
          Brand:
          <span class="blue-brand">{{ProductDetail.brand}}</span>
        </p>
      </div>
      <div class="p-3 d-flex justify-content-center">
         <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="0"
            indicators
            background="transparent"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <!-- Text slides with image -->
            <b-carousel-slide
              :img-src=ProductDetail.imgUrl[0]
            ></b-carousel-slide>
             <b-carousel-slide
              :img-src=ProductDetail.imgUrl[0]
            ></b-carousel-slide>
             <b-carousel-slide
              :img-src=ProductDetail.imgUrl[0]
            ></b-carousel-slide>
          </b-carousel>
      </div>
      <div class="row m-0 p-0 mt-4">
        <img :src="ProductDetail.imgUrl[0]"
        @click="moveSlider(0)"
        alt="" class="img-preview">
        <img :src="ProductDetail.imgUrl[0]"
        @click="moveSlider(1)"
        alt="" class="img-preview">
        <img :src="ProductDetail.imgUrl[0]"
        @click="moveSlider(2)"
        alt="" class="img-preview">
      </div>
       <div class="pb-2">
        <table class="table border-0 table-striped no-margin">
          <tr>
            <td class="sub-text border-top-none">Harga awal</td>
            <td colspan="2" class="price-detail-text border-top-none">
              Rp{{formatPrice(ProductDetail.productPrice)}}</td>
          </tr>
          <tr>
            <td class="sub-text">Bid</td>
            <td colspan="2" class="price-detail-text">Rp{{formatPrice(ProductDetail.bid)}}</td>
          </tr>
          <tr>
            <td class="sub-text">Penawaran Terendah</td>
            <td class="price-detail-text">Rp{{formatPrice(ProductDetail.currentBid)}}</td>
          </tr>
        </table>
        <p class="count-people justify-content-center d-flex border-top-none pl-2">
         {{ProductDetail.historyBid.length}} Orang sudah
            melakukan penawaran</p>
      </div>
    </div>
    <div class="mt-3 bg-white p-3">
      <p class="profile-text mb-1">Profile Pemilik Barang</p>
      <p class="name-text mb-1">Nama : <span class="detail-name">Handi Hermawan</span></p>
      <p class="address-text mb-1">Alamat : <span class="detail-address">Jl.
        Juadi No.29, Kotabaru, Kec. Gondokusuman, Kota Yogyakarta,
        Daerah Istimewa Yogyakarta 55224</span></p>
    </div>
    <div class="mt-3 bg-white p-3">
      <p class="riwayat-text">Riwayat Penawaran</p>
      <p class="riwayat-list" title="Handi Hermawan"
      v-for='history in this.ProductDetail.historyBid'
      v-bind:key='history.id'>{{history.name}} menawarkan harga
        <span class="bid-price">Rp{{formatPrice(history.bidding)}}</span></p>
      <p class="lainnya-text">Riwayat hanya menampilkan 3 penawar teratas</p>
    </div>
    <div class="about-detail-product">
      <div class="p-3">
        <div class="box-shadow mb-2">
          <div class="head-tentang">
            <p class="text-detail-product">Tentang Produk</p>
          </div>
          <div class="p-1 pb-3">
            <div class="list-detail-tentang">
              <p class="text-detail-product">
                Status Barang :
                <span class="tag" v-if="ProductDetail.status === 'Baru'">
                  {{ProductDetail.status}}</span>
                <span class="tag-bekas" v-else>{{ProductDetail.status}}</span>
              </p>
            </div>
            <div class="list-detail-tentang">
              <p class="text-detail-product">Lama Pemakaian : {{ProductDetail.lamaPemakaian}}</p>
            </div>
            <div class="list-detail-tentang">
              <p class="text-detail-product">
                Deskripsi barang : {{ProductDetail.description}}
              </p>
              <h5 class="fs-14 bt-top">Detail Barang</h5>
              <table class="table table-striped border-0 m-0 p-0">
                <tr class="content-table">
                  <td>Kelengkapan paket</td>
                  <td>{{ProductDetail.packetSet}}</td>
                </tr>
                <tr class="content-table">
                  <td>Dimensi</td>
                  <td>{{ProductDetail.volume}}</td>
                </tr>
                <tr class="content-table">
                  <td>Berat</td>
                  <td>{{ProductDetail.weight}}</td>
                </tr>
                <tr class="content-table">
                  <td>Kode barcode</td>
                  <td>{{this.ProductDetail.barcode}}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-b-modal.modal1 @click="setAmount" class="bottom-tawar box-shadow">
      <div class="text-uppercase">Tawarkan Harga</div>
    </div>

    <b-modal id="modal1"
    v-model="show"
    title="Tawarkan harga"
    centered
    hide-footer>
      <b-input-group class="mt-3">
        <b-form-input
        type="number"
        v-model="this.amount"
        disabled>
        </b-form-input>
        <b-input-group-append>
          <b-button variant="primary"
          class="btn btn-add"
          @click="addBid">+</b-button>
          <b-button variant="dark"
          @click="minBid"> - </b-button>
        </b-input-group-append>
      </b-input-group>
      <p class="text-left mt-2 fs-12">
        Minmal Bid tertinggi <span class="blue-text">
          Rp.{{this.formatPrice(this.ProductDetail.currentBid - this.ProductDetail.bid)}}
        </span>
      </p>
      <button class="rounded orange-button"
      @click="tawarkan">Tawarkan</button>
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
    store.dispatch('_detailCariBarang/getItem');
    this.scrollToTop();
  },
  data() {
    return {
      history: null,
      boxTwo: '',
      amount: 0,
      show: false,
      slide: 0,
      dismissSecs: 3,
      dismissCountDown: 0,
    };
  },
  computed: {
    ...mapGetters([
      '_detailCariBarang/dataProduct',
    ]),
    ProductDetail() {
      const store = this.$store;
      if (store.getters['_detailCariBarang/dataProduct'].data !== undefined) {
        return store.getters['_detailCariBarang/dataProduct'].data.find((product) => product.id === this.$route.params.id);
      }
      return true;
    },
  },
  methods: {
    ...mapActions([
      '_detailCariBarang/getItem',
    ]),
    formatPrice(value) {
      const val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    setAmount() {
      this.amount = this.ProductDetail.currentBid - this.ProductDetail.bid;
    },
    addBid() {
      if (this.amount + this.ProductDetail.bid < this.ProductDetail.currentBid) {
        this.amount += this.ProductDetail.bid;
      }
    },
    minBid() {
      if (this.amount - this.ProductDetail.bid > 0) {
        this.amount -= this.ProductDetail.bid;
      }
    },
    moveSlider(idx) {
      this.slide = idx;
    },
    tawarkan() {
      window.localStorage.setItem('price', this.amount);
      this.$router.push('/lelang/ajukan');
    },
  },
};
</script>

<style scoped>
.margin-bot{
  margin-bottom: 65px;
}

.text-detail-product{
  font-size: 12px;
  text-align: justify;
}

.btn-add{
  background-color: #0095DA;
  border: 1px #0095DA solid;
}

.bottom-tawar{
  z-index: 100;
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100%;
  text-align: center;
  padding-top: 17px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  background-color: #ff7f0f;
}

.orange-button{
  padding: 10px;
  background-color: #e86c00;
  color: white;
  width: 100%;
  margin-top: 10px;
  font-weight: bold;
  border: none;
}

.bottom-tawar:hover {
  background: #e86c00 radial-gradient(circle, transparent 1%, #e86c00 1%)
    center/15000%;
  color: white;
}

.bottom-tawar:active {
  background-color: #ff973b;
  background-size: 100%;
  transition: background 0s;
}

.fs-12{
  font-size: 12px;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.list-detail-tentang{
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}
 .bt-top{
   padding-top: 15px;
   margin-top: 15px;
   border-top: #0095DA 2px solid;
 }

.text-detail-product{
  font-size: 12px;
  text-align: justify;
}

.box-shadow{
  box-shadow: 0px 0px 15px -9px rgba(0, 0, 0, 0.809);
}

.head-tentang{
  background-color: #0095DA;
  padding: 10px;
  color: white;
}

.about-detail-product{
  background-color: #F3F3F3;
}

.lainnya-text{
  cursor: pointer;
  margin-top: 15px;
  font-size: 13px;
  font-weight: 600;
  color: #0077FF;
  text-align: center;
}

.lainnya-text:active{
  font-weight: bold;
}

.riwayat-list{
  margin-top: 5px;
  font-size: 13px;
}

.bid-price{
  color: #FF7600;
}

.riwayat-text{
  font-weight: 600;
}

.name-text{
  font-size: 13px;
  font-weight: 500;
}

.detail-address{
  color: #808080;
}

.address-text{
  font-size: 13px;
  text-align: justify;
}

.detail-name{
  color: #0077FF;
}

.blue-text{
  color: #0077FF;
  font-weight: bold;
}

.profile-text{
  font-weight: 600;
}

tr.content-table:nth-child(odd){
  background-color: #eeeeee;
}

.profile-pemilik{
  background-color: #F3F3F3;
}

.no-margin{
  margin: 0;
}

.count-people{
  font-size: 13px;
  color: #808080;
}

.price-detail-text{
  color: #FF7600;
  font-size: 18px;
}

.img-preview{
  width: 60px;
  border: 0.8px gray solid;
  padding: 5px;
  margin-right: 10px;
}

.sub-text{
  font-size: 13px;
  color: #808080;
}

.border-top-none{
  border-top: none !important;
}

.bg-gray{
  background-color: #F1F0F0;
}

.brand-detail-product{
  clear: both;
  margin-bottom: 0px;
  font-size: 11px;
}

p{
  margin: 0;
}

.bg-white{
  background-color: white;
}

.tag-bekas{
  background-color: #FF7600;
  color: white;
  font-size: 10px;
  padding: 2px 10px;
  border-radius: 10px;
}

.tag{
  background-color: #0095DA;
  color: white;
  font-size: 10px;
  padding: 2px 10px;
  border-radius: 10px;
}

.detail-title-product{
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 0px;
}

.blue-brand{
  color: #0095DA;
}

.detail-image-product{
  max-width: 320px;
  max-height: 370px;
}

.fs-14,
td {
  font-size: 13px;
}
</style>
