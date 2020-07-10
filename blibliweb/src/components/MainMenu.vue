<template>
  <div>
    <div class='card mt-2 ml-2 mr-2 pt-1 pb-1'>
      <div class='overflow-x'>
        <span class='category mr-2 ml-2'
        :class="{'un-active':true, active: !true}"
        @click="getProductByCategoryName('')">Semua</span>
        <span class='category mr-2'
        :class="{'un-active':category.categoryName, active: !category.categoryName}"
        v-for='category in CategoriesDetails.data' v-bind:key='category.categoryId'
        @click='getProductByCategoryName(category.categoryName)' :ref='category.categoryName'
        >{{category.categoryName}}</span>
      </div>
    </div>
    <!-- <div class="p-2" v-for='category in this.categoryNames' v-bind:key='category.categoryId'
    :ref='category.categoryName'>
      <p class="label-tag">{{category.categoryName}}</p>
      <div class="overflow-x m-0 p-0">
        <router-link :to='"/detail-product/"+product.id' class='cst-card col-6'
        v-for='product in this.ProductDetails'
        v-bind:key='product.id'>
          <div class='align-items-start'>
            <div class="cont d-flex align-items-center">
              <img :src='product.imgUrl[0]' :alt='product.productName'
              class='img-product ml-auto mr-auto'/>
            </div>
            <div class="mt-auto">
              <p class='title-product'>{{product.productName}}</p>
              <p class='product-price' title=product.productPrice>
                Rp.{{formatPrice(product.productPrice)}}
              </p>
            </div>
          </div>
        </router-link>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import axios from 'axios';

export default {
  data() {
    return {
      catParam: '',
      categoryNames: null,
      allProduct: null,
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
        {
          id: 'kkjs-128981',
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
    // this.$store.commit('productData/increment'); ==> mutation
    // console.log(this.$store.state.productData.count); ==> state
    // console.log(this.$store.getters['productData/doubleCount']); ==> getters
    // this.$store.dispatch('productData/incrementIfOdd'); ==> action
    const store = this.$store;
    store.dispatch('productData/getProducts');
    store.dispatch('productData/getCategory');
    // this.CategoriesDetails.data.forEach((e) => {
    //   console.log(e.categoryName);
    // });
    // this.categoryNames = await this.CategoriesDetails;
    // console.log(this.categoryNames);
    // this.allProduct = this.ProductDetails;
  },
  computed: {
    ...mapGetters([
      'productData/productList',
      'productData/categoryList',
    ]),
    ProductDetails() {
      console.log('terpanggil');
      const store = this.$store;
      return store.getters['productData/productList'].data;
      // return store.getters['productData/productList']
      // .data.filter((ele) => ele.category === this.catParam);
    },
    CategoriesDetails() {
      console.log('category terpanggil');
      const store = this.$store;
      return store.getters['productData/categoryList'];
    },
  },
  methods: {
    ...mapActions([
      'productData/getProducts',
      'productData/getCategory',
    ]),
    formatPrice(value) {
      const val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    getProductByCategoryName(category) {
      this.catParam = category;
    },
    scroll() {
      window.onscroll = () => {
        const bottomOfWindow = document.documentElement.scrollTop
        + window.innerHeight > document.documentElement.offsetHeight - 1;
        if (bottomOfWindow) {
          axios
            .get('http://www.mocky.io/v2/5ec18a432f0000417a4c88c2?mocky-delay=50ms')
            .then((response) => {
              this.products.push(response.data.data[5]);
              this.products.push(response.data.data[6]);
              this.products.push(response.data.data[7]);
              this.products.push(response.data.data[8]);
            });
        }
      };
    },
    setProduct(cat) {
      console.log(this.allProduct.data.filter((ele) => ele.category === cat));
    },
  },
  async mounted() {
    const data = await axios.get('http://www.mocky.io/v2/5ec98a583000006b00a6ce11?mocky-delay=50ms');
    this.allProduct = data;
    console.log(data);
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
