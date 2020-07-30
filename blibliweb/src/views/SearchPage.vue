<template>
  <div>
    <SearchHeader/>
    <div class="px-2 py-1">
      <label for="" class="search-suggest m-0 p-0">Cari barang</label>
      <vue-bootstrap-typeahead
        v-model="searchKey"
        :data="productData"
        class="mt-1"
        placeholder="Aqua air mineral"
      />
      <hr class="my-3" v-if="searchKey !== '' && masterData.data.length !== 0">
      <div v-if="searchKey !== '' && masterData.data.length !== 0">
        <p class="label-search mb-2">Pencarian Terpopuler</p>
        <p v-for="(product, idx) in productData" :key="product+idx"
        class="search-result"> {{product}}</p>
      </div>
      <hr class="my-3" v-if="searchKey !== '' && masterData.data.length !== 0">
      <div v-if="searchKey !== '' && masterData.data.length !== 0">
        <p class="label-search">Hasil Terpopuler</p>
      </div>
      <div>
        <div class='content col-12 row m-0 p-0'
        v-if="searchKey !== '' && masterData.data.length !== 0">
          <div class='cst-card col-6'
          v-for='product in masterData.data'
          :key='product.productDataForm.productId'>
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
      </div>
      <div class="centered" v-if="searchKey === '' || masterData.data.length === 0">
        <img src="/assets/etc/search.png" alt=""
        class="img-search">
        <p class="search-suggest" v-if="searchKey === ''">Cari dengan memasukan nama produk</p>
        <p class="search-suggest" v-if="searchKey !== '' && masterData.data.length === 0">
          Produk yang kamu cari tidak ditemukan</p>
      </div>
    </div>
  </div>
</template>

<script>
import SearchHeader from '@/components/SearchHeader.vue';
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead';
import axios from 'axios';

export default {
  components: {
    SearchHeader,
    VueBootstrapTypeahead,
  },
  data() {
    return {
      searchKey: '',
      productData: [
      ],
      masterData: '',
    };
  },
  methods: {
    async searchMasterData() {
      this.masterData = [];
      if (this.searchKey !== '') {
        await axios.get(`http://localhost:${this.port}/experience/api/products/search/inStock?searchKey=${this.searchKey}`)
          .then((response) => {
            this.masterData = response.data;
            this.productData = [];
            response.data.data.forEach((element) => {
              this.productData.push(element.productDataForm.productName);
            });
          });
      }
    },
    getImage(imagePath) {
      const path = imagePath.split('/');
      return `/assets/resources/uploads/productPhoto/${path[path.length - 1]}`;
    },
    formatPrice(value) {
      const val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
  },
  watch: {
    searchKey() {
      this.masterData = [];
      this.searchMasterData();
    },
  },
};
</script>

<style lang="scss" scoped>
.search-icon {
  font-size: 14px;
}

.img-search{
  margin-top: 40px;
  width: 80%;
  opacity: 0.7;
}

.label-search{
  color: rgba(0,0,0,.6);
  font-weight: 700;
  font-size: 13px;
}

.centered{
  text-align: center;
}

.search-suggest{
  color: rgba(0,0,0,.6);
  font-weight: 500;
  font-size: 14px;
}

.search-result{
  transition: background-color .4s;
  color: rgba(0,0,0,.6);
  font-weight: 500;
  font-size: 13px;
}

.img-product {
  max-width: 120px;
  max-height: 120px;
  display: block;
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

p {
  margin: 0px;
}

.cst-card:hover{
  box-shadow: 0px 5px 25px -9px rgba(0, 0, 0, 0.75);
}

.cst-card:nth-child(even) {
  margin-left: 5px;
}

.cont{
  min-height: 120px;
}

.title-product {
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #7c7c7c;
  margin-top: 5px;
}

.penawaran-text{
  font-size: 11px;
}

.product-price {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #ff7600;
}
</style>
