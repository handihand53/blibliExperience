<template>
  <div>
    <p class="label-tag font-weight-bold p-2">Produk Pilihan</p>
    <div class="p-2" v-for='(category, idx) in this.category' v-bind:key='category'
    :ref='category'>
      <div class="d-flex justify-content-between">
        <p class="label-tag">{{category}}</p>
        <router-link :to="'/c/'+category">
          <p class="label-tag">Lihat Semua</p>
        </router-link>
      </div>
      <div class="overflow-x m-0 p-0">
        <router-link :to='"/detail-product/"+product.productDataForm.productId'
        class='cst-card col-6'
        v-for='product in product[idx]'
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
import axios from 'axios';

export default {
  data() {
    return {
      category: '',
      categoryNames: null,
      allProduct: null,
      product: [],
      startingIndex: 0,
    };
  },
  async created() {
    await this.getAllDataByCategory();
    await this.getAllCategory();
  },
  methods: {
    formatPrice(value) {
      const val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    async getAllDataByCategory() {
      await axios.get(`http://localhost:${this.port}/experience/api/products/category?productCategory=DAILY&skipCount=${this.startingIndex}`)
        .then((response) => {
          this.product[0] = response.data.data;
        });

      await axios.get(`http://localhost:${this.port}/experience/api/products/category?productCategory=ELECTRONIC&skipCount=${this.startingIndex}`)
        .then((response) => {
          this.product[1] = response.data.data;
        });

      await axios.get(`http://localhost:${this.port}/experience/api/products/category?productCategory=TOYS&skipCount=${this.startingIndex}`)
        .then((response) => {
          this.product[2] = response.data.data;
        });

      await axios.get(`http://localhost:${this.port}/experience/api/products/category?productCategory=SPORT&skipCount=${this.startingIndex}`)
        .then((response) => {
          this.product[3] = response.data.data;
        });
    },
    async getAllCategory() {
      await axios.get(`http://localhost:${this.port}/experience/api/products/enums/category`)
        .then((response) => {
          this.category = response.data.data.categories;
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
