<template>
  <div>
    <HeaderWithCart/>
    <div class="p-2">Pilihan kategori {{this.$route.params.name}}</div>
    <div class='content col-12 row no-margin pl-2 pr-2'>
      <div class='cst-card col-6'
      v-for='product in allProduct'
      v-bind:key='product.productDataForm.productId'>
        <router-link :to='"/detail-product/"+product.productDataForm.productId'>
          <div class='align-items-start'>
            <div class="cont d-flex align-items-center">
              <img :src='getImage(product.productDataForm.productImagePaths[0])'
              :alt='product.productName'
              class='img-product ml-auto mr-auto'/>
            </div>
            <div class="mt-auto">
              <p class='title-product'>{{product.productDataForm.productName}}</p>
              <p class="penawaran-text">Penawaran mulai dari</p>
              <p class='product-price' title=product.productPrice>
                Rp.{{formatPrice(product.productPrice)}}
              </p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="mt-3">
      <b-pagination v-model="currentPage" pills
      align="center" :total-rows="rows"></b-pagination>
    </div>
    <div class="sort-part"
    :class="{showSort: sortPage}">
      <div class="row p-0 m-0 d-flex align-items-center mt-1
      shadow p-2">
        <font-awesome-icon
        class="m-2"
        @click="sortPage = false"
        icon="times"/>
        <p class="font-weight-bold ml-auto mr-auto">Urut berdasarkan</p>
      </div>
      <div class="p-4">
        <p>Harga termurah</p>
        <hr>
        <p>Harga termahal</p>
        <hr>
      </div>
    </div>
    <div class="filter-part"
    :class="{showFilter: filterPage}">
      <div class="row p-0 m-0 d-flex align-items-center mt-1
      shadow p-2">
        <font-awesome-icon
        class="m-2"
        @click="filterPage = false"
        icon="times"/>
        <p class="font-weight-bold ml-auto mr-auto">Filter</p>
      </div>
      <div class="d-flex flex-column">
        <div class="p-4 mb-auto ">
          <p>Harga</p>
          <b-row class="my-2 justify-content-center d-flex">
            <b-col cols="5" class="m-0 p-0">
              <b-form-input id="input-small" size="sm"
              placeholder="Minimum"></b-form-input>
            </b-col>
            <b-col cols="1" class="m-0 p-0
            justify-content-center d-flex">
              -
            </b-col>
            <b-col cols="5" class="m-0 p-0">
              <b-form-input id="input-maks" size="sm"
              placeholder="Maksimum"></b-form-input>
            </b-col>
          </b-row>
        </div>
        <div class="p-2 btn-bawah">
          <b-button block variant="primary">Terapkan</b-button>
        </div>
      </div>
    </div>
    <div class="fixed-alert text-center pl-3 pr-3">
      <b-alert
        :show="dismissCountDown"
        dismissible
        variant="success"
        @dismissed="dismissCountDown=0"
      >
        {{alertMsg}}
      </b-alert>
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
      allProduct: [],
      catParam: '',
      sortPage: false,
      filterPage: false,
      rows: 200, // 20 rows in 1 page
      currentPage: 1,
      dismissSecs: 2,
      dismissCountDown: 0,
      alertMsg: '',
      startingIndex: 0,
      sama: false,
    };
  },
  created() {
    this.getAllData();
  },
  methods: {
    getAllData() {
      axios.get(`http://localhost:${this.port}/experience/api/products/category?productCategory=${this.$route.params.name}&skipCount=${this.startingIndex}`)
        .then((response) => {
          this.allProduct = response.data.data;
          this.rows = this.allProduct[0].countProducts;
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
  },
  watch: {
    currentPage(newValue) {
      this.startingIndex = 20 * (newValue - 1);
      this.getAllData();
    },
  },
};
</script>

<style lang='scss' scoped>
@import '../style/font/font.scss';
.penawaran-text{
  font-size: 11px;
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

.text-btn{
  font-size: 12px;
  width: 100%;
  margin-top: 5px;
}

.btn-bawah{
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;
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

.cat-sticky{
  position: sticky;
  top: 10px;
  z-index: 500;
}

.sort-part{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: white;
  top: 0;
  left: 0;
  z-index: 100000;
  display: none;
}

.filter-part{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: white;
  top: 0;
  left: 0;
  z-index: 100000;
  display: none;
}

.un-active:active {
  background-color: #ff973b;
  background-size: 100%;
  transition: background 0s;
}

.title-product {
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #7c7c7c;
  margin-top: 5px;
}

.showSort{
  display: block!important;
}

.showFilter{
  display: block!important;
}

.product-price {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #ff7600;
}

.cst-card {
  box-shadow: 0px 0px 13px -9px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  padding: 0px;
  margin-top: 7px;
  max-width: 49.1%;
  border: 1px solid rgba(0, 0, 0, 0.061);
  padding: 7px;
  transition: all 1s;
}

.cst-card:hover{
  box-shadow: 0px 5px 25px -9px rgba(0, 0, 0, 0.75);
}

.cont{
  min-height: 120px;
}

.cst-card:nth-child(even) {
  margin-left: 5px;
}

.img-product {
  max-width: 120px;
  max-height: 120px;
  display: block;
}

.fixed-alert{
  z-index: 100;
  position: fixed;
  bottom: 5px;
  margin: 5% auto; /* Will not center vertically and won't work in IE6/7. */
  left: 0;
  right: 0;
  z-index: 100000
}

p {
  margin: 0px;
}

.fix-filter-sort{
  position: fixed;
  bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  z-index: 1000;
}

.sort-fix{
  box-shadow: 0px 5px 13px -7px rgba(0, 0, 0, 1);
  background-color: white;
  border-radius: 27px;
  color: gray;
  padding: 10px;
}

// .active {
//   background-image: linear-gradient(to bottom right, #e86c00, #ff985c);
//   color: white;
// }

.content {
  flex-direction: row;
}

.no-padding {
  padding: 0px !important;
}

.no-margin {
  margin: 0px !important;
}
</style>
