<template>
  <div class="bg-gray">
    <PlainHeaderMarket/>
    <div class="bg-white p-2">
      <small class="text-gray">Detail Master Data</small>
    </div>
    <div class="mt-3 shadow-sm card border-0 p-2">
      <p class="title-product">{{ listOfData.productName }}</p>
      <p class="brand-product mt-1">Brand:
        <span class="brand">{{ listOfData.productBrand }}</span></p>
      <p class="brand-product mt-1">Kategori:
        <span class="brand">{{ listOfData.productCategory }}</span></p>
      <hr class="m-0 my-1">
      <p class="deskripsi mt-1">Deskripsi:<br>{{ listOfData.productDescription }}</p>
      <p class="brand-product">Ukuran produk: {{ listOfData.productVolume }}</p>
      <p class="brand-product mt-1">Berat produk: {{ listOfData.productWeight }}</p>
      <p class="brand-product mt-1">Barcode produk: {{ listOfData.productBarcode }}</p>
      <router-link to='' class="ml-auto mr-auto mt-3 mb-2">
        <b-button variant="outline-primary" class="px-3 py-1">
          Edit data produk
        </b-button>
      </router-link>
    </div>
    <Footer/>
  </div>
</template>

<script>
import PlainHeaderMarket from '@/components/PlainHeaderMarket.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
import Cookie from 'vue-cookie';

export default {
  components: {
    PlainHeaderMarket,
    Footer,
  },
  data() {
    return {
      listOfData: {
        productBarcode: '',
        productBrand: '',
        productCategory: '',
        productDescription: '',
        productId: '',
        productName: '',
        productVolume: '',
        productWeight: '',
      },
    };
  },
  async created() {
    await this.checkLoginUser();
    await this.getDetailProduct();
  },
  methods: {
    async checkLoginUser() {
      // melakukan check apakah user masih login atau tidak
      // jika user masih login, maka akan dilempar ke halaman utama
      const dataId = Cookie.get('dataIdAdmin');
      const dataToken = Cookie.get('dataTokenAdmin');
      await axios.get(`http://localhost:${this.port}/experience/api/users?id=${dataId}`,
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
    async getDetailProduct() {
      const dataToken = Cookie.get('dataTokenAdmin');
      await axios.get(`http://localhost:${this.port}/experience/api/products?id=${this.$route.params.id}`,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .then((response) => {
          this.listOfData = response.data.data;
        });
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
