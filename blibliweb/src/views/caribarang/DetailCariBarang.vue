<template>
  <div class="bg-gray margin-bot">
    <HeaderWithCart/>
    <div class="mt-2 bg-white p-2 pl-3 pr-3">
      <div class="d-flex justify-content-between">
        <p class="detail-title-product">{{product.productBiddingName}}</p>
        <p class="tag mt-1 align-self-center"
        v-if="product.productBiddingCondition === 'NEW'"
        >Baru</p>
        <p class="tag-bekas mt-1 align-self-center" v-else>Lama</p>
      </div>
      <div>
        <p class="brand-detail-product">
          Brand:
          <span class="blue-brand">{{product.productBiddingBrand}}</span>
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
          >
            <!-- Text slides with image -->
            <b-carousel-slide
            v-for="(image, idx) in product.productBiddingImagePaths"
            :key="image+idx"
              :img-src="getImage(image)"
            ></b-carousel-slide>
          </b-carousel>
      </div>
      <div class="row m-0 p-0 mt-4">
        <img
          v-for="(image, idx) in product.productBiddingImagePaths"
          :key="image+idx"
          :src="getImage(image)"
        @click="moveSlider(idx)"
        alt="" class="img-preview">
      </div>
       <div class="pb-2">
        <table class="table border-0 table-striped no-margin">
          <tr>
            <td class="sub-text border-top-none">Harga awal</td>
            <td colspan="2" class="price-detail-text border-top-none">
              Rp{{formatPrice(product.startPrice)}}</td>
          </tr>
          <tr>
            <td class="sub-text">Bid</td>
            <td colspan="2" class="price-detail-text">Rp{{formatPrice(product.nextBid)}}</td>
          </tr>
          <tr>
            <td class="sub-text">Penawaran Terendah</td>
            <td class="price-detail-text">Rp{{formatPrice(product.currentPrice)}}</td>
          </tr>
        </table>
        <p class="count-people justify-content-center d-flex border-top-none pl-2">
         {{product.biddingForms.length}} Orang sudah
            melakukan penawaran</p>
      </div>
    </div>
    <div class="mt-3 bg-white p-3">
      <p class="profile-text mb-1">Profile Pemilik Barang</p>
      <p class="name-text mb-1">Nama : <span class="detail-name">
        {{product.userData.userName}}</span></p>
      <!-- <p class="address-text mb-1">Alamat :
        <span class="detail-address">{{product.userData.userAddressForms.detail}}</span></p> -->
    </div>
    <!-- <div class="mt-3 bg-white p-3">
      <p class="riwayat-text">Riwayat Penawaran</p>
      <p class="riwayat-list" title="Handi Hermawan"
      v-for='history in this.ProductDetail.historyBid'
      v-bind:key='history.id'>{{history.name}} menawarkan harga
        <span class="bid-price">Rp{{formatPrice(history.bidding)}}</span></p>
      <p class="lainnya-text">Riwayat hanya menampilkan 3 penawar teratas</p>
    </div> -->
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
                <span class="tag" v-if="product.productBiddingCondition === 'NEW'">
                  Baru</span>
                <span class="tag-bekas" v-else>Lama</span>
              </p>
            </div>
            <div class="list-detail-tentang">
              <p class="text-detail-product">Berakhir tanggal :
                {{getMonthYear(product.closeBidDate)}},
                 {{getTime(product.closeBidDate)}}</p>
            </div>
            <div class="list-detail-tentang">
              <p class="text-detail-product">
                Deskripsi barang : {{product.productBiddingDescription}}
              </p>
              <h5 class="fs-14 bt-top">Detail Barang</h5>
              <table class="table table-striped border-0 m-0 p-0">
                <tr class="content-table">
                  <td>Kelengkapan paket</td>
                  <td>{{product.productBiddingPackage}}</td>
                </tr>
                <tr class="content-table">
                  <td>Dimensi</td>
                  <td>{{product.productBiddingVolume}}</td>
                </tr>
                <tr class="content-table">
                  <td>Berat</td>
                  <td>{{product.productBiddingWeight}}</td>
                </tr>
                <tr class="content-table">
                  <td>Kategori</td>
                  <td>{{product.productCategory}}</td>
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
          Rp.{{this.formatPrice(product.currentPrice - product.nextBid)}}
        </span>
      </p>
      <div class="fixed-alert text-center pl-3 pr-3">
      <b-alert
        :show="dismissCountDown"
        dismissible
        variant="danger"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
      >
        {{alertMsg}}
      </b-alert>
    </div>
      <button class="rounded orange-button"
      @click="tawarkan">Tawarkan</button>
    </b-modal>
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
  async created() {
    await this.getBiddingDetail();
  },
  data() {
    return {
      history: null,
      boxTwo: '',
      match: false,
      alertMsg: '',
      amount: 0,
      show: false,
      slide: 0,
      dismissSecs: 3,
      dismissCountDown: 0,
      product: {
        biddingForms: {
          length: 0,
        },
        userData: {
          userName: '',
        },
      },
      monthNames: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
      ],
    };
  },
  methods: {
    async getBiddingDetail() {
      // melakukan check apakah user masih login atau tidak
      // jika user masih login, maka akan dilempar ke halaman utama
      const dataToken = Cookie.get('dataToken');
      await axios.get(`http://localhost:${this.port}/experience/api/products/bidding?productBiddingId=${this.$route.params.id}`,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .then((res) => {
          this.product = res.data.data;
        })
        .catch(() => {
          this.$router.replace('/');
        });
    },
    formatPrice(value) {
      const val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    getImage(imagePath) {
      const path = imagePath.split('/');
      return `/assets/resources/uploads/biddingProductPhoto/${path[path.length - 1]}`;
    },
    async getListPengajuan() {
      const dataId = Cookie.get('dataId');
      const dataToken = Cookie.get('dataToken');
      await axios.get(`http://localhost:${this.port}/experience/api/products/bidding/user?userId=${dataId}`,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .then((ress) => {
          ress.data.data.forEach((res) => {
            if (res.productBiddingId === this.$route.params.id) {
              this.match = true;
            }
          });
          if (this.match) {
            this.alertMsg = 'Produk ini milik anda!';
            this.dismissCountDown = this.dismissSecs;
          } else {
            window.localStorage.setItem('price', this.amount);
            this.$router.push(`/lelang/ajukan/${this.$route.params.id}`);
          }
        })
        .catch(() => {
          // this.$router.push('/login');
          window.localStorage.setItem('price', this.amount);
          this.$router.push(`/lelang/ajukan/${this.$route.params.id}`);
        });
    },
    setAmount() {
      this.amount = this.product.currentPrice - this.product.nextBid;
    },
    addBid() {
      if (this.amount + this.product.nextBid < this.product.currentPrice) {
        this.amount += this.product.nextBid;
      }
    },
    minBid() {
      if (this.amount - this.product.nextBid > 0) {
        this.amount -= this.product.nextBid;
      }
    },
    moveSlider(idx) {
      this.slide = idx;
    },
    tawarkan() {
      this.getListPengajuan();
    },
    getMonthYear(date) {
      const theDate = new Date(date);
      return `${theDate.getDate()} ${this.monthNames[theDate.getMonth()]} ${theDate.getFullYear()}`;
    },
    getTime(date) {
      const theDate = new Date(date).toLocaleTimeString();
      return `${theDate}`;
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
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

.fixed-alert{
  z-index: 100;
  position: fixed;
  bottom: 15px;
  margin: 5% auto; /* Will not center vertically and won't work in IE6/7. */
  left: 0;
  right: 0;
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
