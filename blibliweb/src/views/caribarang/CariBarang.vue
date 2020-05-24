<template>
  <div>
    <HeaderWithCart/>
    <div class="p-2">
      <p class="text-center mt-1 mb-1">Cari Barang</p>
      <img src="@/assets/etc/cari_barang.jpg" alt="" class="img-fluid">
    </div>
    <label class="label-page pl-2">Kategori yang kamu suka</label>
    <div class="card ml-2 mr-2 pt-1 pb-2">
      <div class="overflow-x">
        <span class="category mr-2 ml-2 active"
        @click='getProductByCategoryName("")'>Semua</span>
        <span class='category mr-2'
        :class="{'un-active':category.categoryName, active: !category.categoryName}"
        v-for='category in CategoriesDetails.data' v-bind:key='category.categoryId'
        @click='getProductByCategoryName(category.categoryName)' :ref='category.categoryName'
        >{{category.categoryName}}</span>
      </div>
    </div>
    <label class="label-page pl-2 pt-2">Barang ini lagi di cari-cari nih</label>
    <div
    class="content col-12 row no-margin pl-2 pr-2"
    v-for='product in this.ProductDetails' v-bind:key='product.id'>
      <div class="card pl-2 pr-2 pb-3 col-12 mb-3">
        <div class="row no-margin">
          <div class="col-4 pr-2 no-margin no-padding pt-3
          d-flex align-items-center">
            <img :src=product.imgUrl[0] alt="" class="img-product ml-auto mr-auto">
          </div>
          <div class="col-8 no-margin no-padding pt-2">
            <span class="tag-label-baru">{{product.status}}</span>
            <p class="title-product">{{product.productName}}</p>
            <p class="price-product">Rp.{{formatPrice(product.productPrice)}}</p>
            <p class="penawaran">0 Penawaran</p>
            <p class="mt-2 bid"><span class="color-blue">Bid</span> dimulai dari
            <span class="color-blue">Rp.{{formatPrice(product.bid)}}</span></p>
            <router-link :to='"/cari-barang/detail/"+product.id'>
              <button class="buy-btn">Lihat Detail</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
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
  data() {
    return {
      catParam: '',
    };
  },
  created() {
    const store = this.$store;
    store.dispatch('_cariBarang/getProducts');
    store.dispatch('_cariBarang/getCategory');
  },
  computed: {
    ...mapGetters([
      '_cariBarang/productList',
      '_cariBarang/categoryList',
    ]),
    ProductDetails() {
      const store = this.$store;
      if (this.catParam === '') {
        return store.getters['_cariBarang/productList'].data;
      }
      return store.getters['_cariBarang/productList'].data.filter((ele) => ele.category === this.catParam);
    },
    CategoriesDetails() {
      const store = this.$store;
      return store.getters['_cariBarang/categoryList'];
    },
  },
  methods: {
    ...mapActions([
      '_cariBarang/getProducts',
      '_cariBarang/getCategory',
    ]),
    getProductByCategoryName(category) {
      this.catParam = category;
    },
    formatPrice(value) {
      const val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
  },
};
</script>

<style>
.tag-label-baru {
  background-color: #0095DA;
  color: white;
  font-size: 11px;
  padding: 2px 15px;
  border-radius: 10px;
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
