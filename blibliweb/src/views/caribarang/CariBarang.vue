<template>
  <div>
    <HeaderWithCart title="Lelang"/>
    <div>
      <img src="@/assets/spanduk/blibligratisongkir.jpg"
      class="img-fluid w-100 d-block mb-2" alt="">
    </div>
    <div class="p-1">
      <img src="@/assets/icon/bliblicaribarang.png" alt="" class="img-fluid">
    </div>
    <label class="label-page pl-2">Kategori yang kamu suka</label>
    <div class="card ml-2 mr-2 pt-1 pb-2">
      <div class="overflow-x">
        <span class="category mr-2 ml-2"
        :class="{active: semuaFlag, 'un-active': !semuaFlag}"
        @click="getBiddingAvailable()">Semua</span>
        <span class='category mr-2'
        :class="{'un-active':category, active: !category}"
        v-for='category in category' v-bind:key='category'
        :ref='category' @click="getAllProductByCategory(category)"
        >{{category}}</span>
      </div>
    </div>
    <label class="label-page pl-2 pt-2">Barang ini lagi di cari-cari nih</label>
    <div
    class="content col-12 row no-margin pl-2 pr-2"
    v-for='product in product' v-bind:key='product.productBiddingId'>
      <div class="card pl-2 pr-2 pb-3 col-12 mb-3">
        <div class="row no-margin">
          <div class="col-4 pr-2 no-margin no-padding pt-3
          d-flex align-items-center">
            <img :src="getImage(product.productBiddingImagePaths[0])" alt=""
            class="img-product ml-auto mr-auto">
          </div>
          <div class="col-8 no-margin no-padding pt-2">
            <span class="tag-label-baru"
            v-if="product.productBiddingCondition === 'NEW'">
              Baru</span>
            <span class="tag-label-bekas" v-else>
              Lama</span>
            <p class="title-product">{{product.productBiddingName}}</p>
            <p class="price-product">Rp.{{formatPrice(product.startPrice)}}</p>
            <p class="penawaran">Berakhir {{getMonthYear(product.closeBidDate)}},
               {{getTime(product.closeBidDate)}}</p>
            <p class="mt-2 bid"><span class="color-blue">Bid</span> terakhir
            <span class="color-blue">Rp.{{formatPrice(product.currentPrice)}}</span></p>
            <router-link :to='"/lelang/detail/"+product.productBiddingId'>
              <button class="buy-btn">Lihat Detail</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-3" v-if="!empty">
      <b-pagination v-model="currentPage" pills
      align="center" :total-rows="rows"></b-pagination>
    </div>
    <div v-if="empty">
      <div class="text-align-center content-margin">
        <img src="/assets/etc/people.png" alt=""
        class="img-empty">
        <h4 class="mt-1">Belum ada barang lagi nih!</h4>
        <small>Mau tukar apa lagi ya ?<br>
          Coba masukkan produk yang mau kamu tukar.</small>
        <br>
        <router-link to="/post-product" class="mt-3">Disini</router-link>
      </div>
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
      kat: '',
      catParam: '',
      product: '',
      count: 0,
      category: '',
      empty: false,
      monthNames: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
      ],
      rows: 0, // 20 rows in 1 page
      currentPage: 1,
      semuaFlag: true,
      currentState: 'semua',
    };
  },
  async created() {
    await this.getBiddingAvailable();
    await this.getAllCategory();
  },
  methods: {
    async getAllCategory() {
      await axios.get(`http://localhost:${this.port}/experience/api/products/enums/category`)
        .then((response) => {
          this.category = response.data.data.categories;
        });
    },
    async getBiddingAvailable() {
      this.kat = 'semua';
      this.product = [];
      this.empty = false;
      const dataToken = Cookie.get('dataToken');
      await axios.get(`http://localhost:${this.port}/experience/api/products/bidding/available?skipCount=${this.count}`,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .then((res) => {
          this.product = res.data.data;
          this.rows = this.product[0].productBiddingCount;
        })
        .catch(() => {
          this.empty = true;
          // this.$router.replace('/');
        });
    },
    async getAllProductByCategory(cat) {
      this.semuaFlag = false;
      this.kat = cat;
      this.product = [];
      this.empty = false;
      const dataToken = Cookie.get('dataToken');
      await axios.get(`http://localhost:${this.port}/experience/api/products/bidding/category?productCategory=${cat}&skipCount=${this.count}`,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .then((res) => {
          this.product = res.data.data;
          this.rows = this.product[0].productBiddingCount;
        })
        .catch(() => {
          this.empty = true;
          // this.$router.replace('/');
        });
    },
    getImage(imagePath) {
      const path = imagePath.split('/');
      return `/assets/resources/uploads/biddingProductPhoto/${path[path.length - 1]}`;
    },
    formatPrice(value) {
      const val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    getMonthYear(date) {
      const theDate = new Date(date);
      return `${theDate.getDate()} ${this.monthNames[theDate.getMonth()]} ${theDate.getFullYear()}`;
    },
    getTime(date) {
      const theDate = new Date(date).toLocaleTimeString();
      return `${theDate}`;
    },
  },
  watch: {
    currentPage(newValue) {
      this.skipCount = 20 * (newValue - 1);
      if (this.currentState === 'semua') {
        this.getBiddingAvailable();
      } else {
        this.getAllProductByCategory(this.kat);
      }
    },
  },
};
</script>

<style scoped>
.tag-label-baru {
  background-color: #0095DA;
  color: white;
  font-size: 11px;
  padding: 2px 15px;
  border-radius: 10px;
}

.text-align-center{
  text-align: center;
  margin-top: 40px;
}

.img-empty{
  width: 40%;
}

.content-margin{
  margin-top: 120px;
  margin-bottom: 120px;
}

.bid{
  font-size: 14px;
  color: #7c7c7c;
}

.color-blue{
  color: #0095DA;
}

.tag-label-bekas {
  background-color: #FF7600;
  color: white;
  font-size: 11px;
  padding: 2px 15px;
  border-radius: 10px;
}

.price-product{
  color: #e86c00;
  font-size: 18px;
}

.buy-btn{
  width: 100%;
  background-color: rgb(0, 128, 255);
  padding-top: 6px;
  padding-bottom: 6px;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 500;
  transition: all 1s;
  font-size: 13px;
}

.penawaran{
  font-size: 12px;
  color: #7c7c7c;
}

.buy-btn:hover {
  background: rgb(0, 128, 255) radial-gradient(circle, transparent 1%, rgb(0, 105, 209) 1%)
    center/15000%;
  color: white;
}

.buy-btn:active {
  background-color: rgb(0, 112, 224);
  background-size: 100%;
  transition: background 0s;
}

.no-padding{
  padding: 0;
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
  max-width: 100px;
  max-height: 120px;
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
  font-size: 13px;
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
