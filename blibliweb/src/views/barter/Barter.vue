<template>
  <div>
    <HeaderWithCart title="Blibli Barter"/>
    <div class="p-2">
      <!-- <div class="card shadow p-2 mb-1 rounded-0">
        <span class="mt-1"><b>Blibli Barter </b>
        <small class="ml-2 font-weight-normal">tukar barang hp, TV, dan lainnya
          </small></span>
      </div> -->
      <img src="@/assets/icon/barter.jpg" alt="" class="img-fluid">
      <hr class="m-0 p-0 mb-3">
      <img src="@/assets/icon/bliblibarter.png" alt="" class="img-fluid mb-3">
    </div>
    <label class="label-page pl-2">Kategori yang kamu suka</label>
    <div class="card ml-2 mr-2 pt-1 pb-2">
      <div class="overflow-x">
        <span class="category mr-2 ml-2"
        :class="{active: semuaFlag, 'un-active': !semuaFlag}"
        @click="getProductBarter()">Semua</span>
        <span class='category mr-2 un-active'
        v-for='category in category' v-bind:key='category'
        :ref='category' @click="getAllProductByCategory(category)"
        >{{category}}</span>
      </div>
    </div>
    <div v-if="!empty">
      <label class="label-page pl-2 pt-2">Barang ini menunggu buat kamu tukar loh</label>
      <div class="content col-12 row no-margin pl-2 pr-2">
        <router-link :to="'/barter/detail/'+product.productBarterId" class="cst-card col-6"
        v-for="product in barterProduct" v-bind:key='product.productBarterId'>
          <div class="">
            <div class="divimg d-flex align-items-center">
              <img :src="getImage(product.productBarterImagePaths[0])"
              alt="" class="img-product ml-auto mr-auto" />
            </div>
            <span class="tag-label-baru" v-if="product.productBarterCondition === 'NEW'">
              {{product.productBarterCondition}}</span>
            <span class="tag-label-bekas" v-if="product.productBarterCondition === 'SECOND'">
              {{product.productBarterCondition}}</span>
            <p class="title-product">{{ product.productBarterName }}</p>
            <p class="product-price">Prefer {{ product.productBarterPreference }}</p>
          </div>
        </router-link>
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
      skipCount: 0,
      category: [],
      barterProduct: [],
      empty: false,
      rows: 200, // 20 rows in 1 page
      currentPage: 1,
      semuaFlag: true,
      currentState: 'semua',
    };
  },
  async created() {
    await this.getProductBarter();
    await this.getAllCategory();
  },
  methods: {
    async getProductBarter() {
      this.skipCount = 0;
      this.currentState = 'semua';
      this.empty = false;
      this.barterProduct = '';
      const dataToken = Cookie.get('dataToken');
      await axios.get(`http://localhost:${this.port}/experience/api/barter/available?skipCount=${this.skipCount}`,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .then((response) => {
          this.barterProduct = response.data.data;
          this.rows = this.barterProduct[0].count;
        })
        .catch(() => {
          this.empty = true;
        });
    },
    async getAllCategory() {
      await axios.get(`http://localhost:${this.port}/experience/api/products/enums/category`)
        .then((response) => {
          this.category = response.data.data.categories;
        });
    },
    async getAllProductByCategory(cat) {
      this.semuaFlag = false;
      this.kat = cat;
      this.skipCount = 0;
      this.currentState = 'else';
      this.barterProduct = '';
      this.empty = false;
      const dataToken = Cookie.get('dataToken');
      await axios.get(`http://localhost:${this.port}/experience/api/barter/category?productCategory=${cat}&skipCount=${this.skipCount}`,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .then((response) => {
          this.barterProduct = response.data.data;
        })
        .catch(() => {
          this.empty = true;
        });
    },
    getImage(imagePath) {
      const path = imagePath.split('/');
      return `/assets/resources/uploads/barterProductPhoto/${path[path.length - 1]}`;
    },
  },
  watch: {
    currentPage(newValue) {
      this.skipCount = 20 * (newValue - 1);
      if (this.currentState === 'semua') {
        this.getProductBarter();
      } else {
        this.getAllProductByCategory(this.kat);
      }
    },
  },
};
</script>

<style scoped>
.text-align-center{
  text-align: center;
  margin-top: 40px;
}

.img-empty{
  width: 40%;
}

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

.divimg{
  min-width: 120px;
  min-height: 120px;
}

.img-product {
  max-width: 120px;
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
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #7c7c7c;
}

.content-margin{
  margin-top: 120px;
  margin-bottom: 120px;
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
