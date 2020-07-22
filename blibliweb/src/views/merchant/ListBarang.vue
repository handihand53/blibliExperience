<template>
  <div class="bg-gray">
    <PlainHeaderMarket/>
    <div class="bg-white p-2">
      <small class="text-gray">List Barang</small>
    </div>
    <div class="p-2 sticky shadow-sm">
      <b-input-group>
        <b-form-input
        placeholder="Cari"
        ></b-form-input>
        <b-input-group-append>
          <b-button size="sm" variant="primary">
            <font-awesome-icon
            @click="search"
            icon="search"/>
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
    <div class="p-2">
      <div class="row border card no-gutters shadow-sm p-3 mt-1"
      style="flex-direction: row!important;"
      v-for="product in productLists" v-bind:key="product.stockId">
        <div class="col-4">
          <img src="@/assets/etc/aqua.png" alt="" class="img-product">
        </div>
        <div class="col-8 column">
          <p class="title-product">{{ product.productForm.productName }}</p>
          <p class="brand-product">Brand:
            <span class="brand">{{  product.productForm.productBrand  }}</span></p>
          <p class="brand-product">Harga:
          <span class="price">Rp.{{ formatPrice(product.productPrice) }}</span></p>
          <p class="brand-product">Stok:
          <span class="stok">{{ product.productStock }}</span></p>
          <p class="deskripsi">Deskripsi:
            {{ getDescription(product.productForm.productDescription) }}</p>
          <router-link :to='"/merchant/list-barang/detail/"+product.productForm.productId'>
            <button class="btn btn-outline-primary pl-5 pr-5 float-right">Lihat</button>
          </router-link>
        </div>
      </div>
    </div>
    <BottomNavMerchant/>
    <Footer/>
  </div>
</template>

<script>
import PlainHeaderMarket from '@/components/PlainHeaderMarket.vue';
import Footer from '@/components/Footer.vue';
import BottomNavMerchant from '@/components/BottomNavMerchant.vue';
import axios from 'axios';
import Cookie from 'vue-cookie';

export default {
  components: {
    PlainHeaderMarket,
    BottomNavMerchant,
    Footer,
  },
  data() {
    return {
      productLists: [],
    };
  },
  async created() {
    await this.checkLoginUser();
    await this.getShopProduct();
  },
  methods: {
    async checkLoginUser() {
      this.isLoggedIn = true;
      // melakukan check apakah user masih login atau tidak
      // jika user masih login, maka akan dilempar ke halaman utama
      const dataId = Cookie.get('dataIdMerchant');
      // const dataShopId = Cookie.get('dataShopIdMerchant');
      const dataToken = Cookie.get('dataTokenMerchant');
      await axios.get(`http://localhost:${this.port}/experience/api/shops?userId=${dataId}`,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .catch(() => {
          this.$router.push('/merchant/login');
        });
    },
    async getShopProduct() {
      const dataShopId = Cookie.get('dataShopIdMerchant');
      const dataToken = Cookie.get('dataTokenMerchant');
      await axios.get(`http://localhost:${this.port}/experience/api/merchant/productStocks?shopId=${dataShopId}`,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .then((response) => {
          this.productLists = response.data.data;
        })
        .catch(() => {
          this.$router.push('/merchant/login');
        });
    },
    formatPrice(value) {
      const val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    getDescription(str) {
      if (str.length > 136) {
        return `${str.substr(0, 136)} . . .`;
      }
      return str;
    },
    search() {
    },
  },
};
</script>

<style scoped>
.text-gray{
  color: rgb(121, 121, 121);
}

.title-product{
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0px;
}


.status-tag{
  color: white;
  padding: 3px 10px;
  font-size: 10px;
  border-radius: 15px;
}

.success{
  background-color: #37C26A;
}

.fail{
  background-color: #FF5050;
}

.no-padding{
  padding: 0px;
}

.deskripsi{
  color: #808080;
  font-size: 12px;
  text-align: justify;
}

.brand-product{
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0px;
}

.brand{
  color: rgb(45, 105, 223);
  font-weight: 600;
}

.price{
  color: rgb(240, 164, 0);
  font-weight: 600;
}

.no-margin{
  margin: 0px;
}

.custom-card{
  margin-top: 10px!important;
  border-radius: 7px;
  border: 0.5px solid rgba(208, 208, 208, 0.245);
}

.bg-gray{
  background-color: #F6F6F6;
}

.img-product{
  width: 100px;
}

.sticky{
  position: sticky;
  top: 0;
  z-index: 100;
  background: white;
}
</style>
