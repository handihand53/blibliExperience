<template>
  <div>
    <div class='card mt-2 ml-2 mr-2 pt-1 pb-1'>
      <div class='overflow-x'>
        <span class='category mr-2 ml-2'
        :class="{'un-active':true, active: !true}"
        @click="getProductByCategoryName('')">Semua</span>
        <span class='category mr-2'
        :class="{'un-active':category.categoryName, active: !category.categoryName}"
        v-for='category in category' v-bind:key='category'
        @click='getProductByCategoryName(category)' :ref='category'
        >{{category}}</span>
      </div>
    </div>
    <div class="p-2" v-for='category in this.category' v-bind:key='category'
    :ref='category'>
      <p class="label-tag">{{category}}</p>
      <div class="overflow-x m-0 p-0">
        <router-link :to='"/detail-product/"+product.productDataForm.productId'
        class='cst-card col-6'
        v-for='product in allProduct'
        v-bind:key='product.productId'>
          <div class='align-items-start'>
            <div class="cont d-flex align-items-center">
              <img :src='getImage(product.productDataForm.productImagePaths[0])'
              :alt='product.productName'
              class='img-product ml-auto mr-auto'/>
            </div>
            <div class="mt-auto">
              <p class='title-product'>{{product.productDataForm.productName}}</p>
              <p class="start-from">Harga mulai dari</p>
              <p class='product-price' :title='product.productPrice'>
                Rp.{{formatPrice(product.productPrice)}}
              </p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex';
import axios from 'axios';

export default {
  data() {
    return {
      category: '',
      categoryNames: null,
      allProduct: null,
    };
  },
  created() {
    this.getAllData();
    this.getAllCategory();
  },
  computed: {
  },
  methods: {
    formatPrice(value) {
      const val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    // getProductByCategoryName(category) {
    //   this.catParam = category;
    // },
    getAllCategory() {
      axios.get(`http://localhost:${this.port}/experience/api/products/enums/category`)
        .then((response) => {
          this.category = response.data.data.categories;
        });
    },
    getAllData() {
      const count = 0;
      axios.get(`http://localhost:${this.port}/experience/api/products/available?skipCount=${count}`)
        .then((response) => {
          this.allProduct = response.data.data;
          console.log(this.allProduct);
        });
    },
    getImage(imagePath) {
      const path = imagePath.split('/');
      return `/assets/resources/uploads/productPhoto/${path[path.length - 1]}`;
    },
  },
};
</script>

<style lang='scss' scoped>
@import '../style/font/font.scss';

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

.label-tag{
  font-size: 13px;
}

.un-active:hover {
  background: #e86c00 radial-gradient(circle, transparent 1%, #e86c00 1%)
    center/15000%;
  color: white;
}

.overflow-content {
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
}

.overflow-x{
  overflow-x: auto;
  white-space: nowrap;
}

.start-from{
  font-size: 12px;
}

a:hover{
  text-decoration: none;
}

.overflow-x::-webkit-scrollbar {
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
  display: inline-block;
}

.cont{
  min-height: 120px;
}

.cst-card:nth-child(even) {
  margin-left: 5px;
  margin-right: 5px;
}

.img-product {
  max-width: 120px;
  max-height: 120px;
  display: block;
}

p {
  margin: 0px;
}

.active {
  background-image: linear-gradient(to bottom right, #e86c00, #ff985c);
  color: white;
}

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
