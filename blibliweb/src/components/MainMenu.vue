<template>
  <div>
    <div class='card mt-2 ml-2 mr-2 pt-1 pb-1'>
      <div class='overflow-x'>
        <span class='category mr-2 ml-2'
        :class="{'un-active':true, active: !true}"
        @click="getProductByCategoryName('')">Semua</span>
        <span class='category mr-2'
        :class="{'un-active':category.categoryName, active: !category.categoryName}"
        v-for='category in categoryList.data' v-bind:key='category.categoryId'
        @click='getProductByCategoryName(category.categoryName)' :ref='category.categoryName'
        >{{category.categoryName}}</span>
      </div>
    </div>
    <div class='content col-12 row no-margin pl-2 pr-2'>
      <router-link to='/detail-product' class='cst-card col-6'
      v-for='product in this.products'
      v-bind:key='product.id'>
        <div class=''>
          <img :src='product.imgUrl[0]' :alt='product.productName'
          class='img-product ml-auto mr-auto' />
          <p class='title-product'>{{product.productName}}</p>
          <p class='product-price' title=product.productPrice>
            Rp.{{formatPrice(product.productPrice)}}
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import axios from 'axios';

export default {
  data() {
    return {
      catParam: '',
      products: [
        {
          id: 'kkjs-1231',
          barcode: '9878654679854',
          productName: 'Aqua 330ML',
          productPrice: 2500,
          imgUrl: [
            './assets/etc/aqu.png',
          ],
          category: 'Minuman',
          createdAt: 12322020564654,
          status: 'Baru',
          tag: 'Blimart',
        },
      ],
    };
  },
  created() {
    this.getProducts();
    this.getCategory();
  },
  computed: {
    ...mapGetters([
      'productList',
      'categoryList',
    ]),
    ProductDetails() {
      if (this.catParam === '') {
        return this.productList.data;
      }
      return this.productList.data.filter((ele) => ele.category === this.catParam);
    },
    CategoriesDetails() {
      return this.categoryList;
    },
  },
  methods: {
    ...mapActions([
      'getProducts',
      'getCategory',
    ]),
    formatPrice(value) {
      const val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    getProductByCategoryName(category) {
      this.catParam = category;
    },
    scroll() {
      window.
      window.onscroll = () => {
        const bottomOfWindow = document.documentElement.scrollTop
        + window.innerHeight > document.documentElement.offsetHeight - 1;
        if (bottomOfWindow) {
          axios
            .get('http://www.mocky.io/v2/5ec18a432f0000417a4c88c2?mocky-delay=50ms')
            .then((response) => {
              this.products.push(response.data.data[3]);
              this.products.push(response.data.data[3]);
              this.products.push(response.data.data[3]);
              this.products.push(response.data.data[3]);
            });
        }
      };
    },
  },
  mounted() {
    this.scroll();
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

.un-active:hover {
  background: #e86c00 radial-gradient(circle, transparent 1%, #e86c00 1%)
    center/15000%;
  color: white;
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
}

.cst-card:nth-child(even) {
  margin-left: 5px;
}

.img-product {
  width: auto;
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
