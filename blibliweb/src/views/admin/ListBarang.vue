<template>
  <div class="bg-gray">
    <PlainHeaderMarket/>
    <div class="bg-white p-2">
      <small class="text-gray">List Barang</small>
    </div>
    <div class="p-2 sticky shadow-sm">
      <b-input-group>
        <b-form-input
        v-model="searchKey"
        placeholder="Cari"
        ></b-form-input>
        <b-input-group-append>
          <b-button size="sm" variant="primary"
          @click="searchProduk">
            <font-awesome-icon
            icon="search"/>
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
    <div class="p-1" v-for="data in listOfData" v-bind:key="data.productId">
      <div class="row border card no-gutters shadow-sm p-3"
      style="flex-direction: row!important;">
        <div class="column">
          <p class="title-product">{{ data.productName }}</p>
          <p class="brand-product">Brand: <span class="brand">{{ data.productBrand }}</span></p>
          <p class="deskripsi mt-1">{{ getDescription(data.productDescription) }}</p>
          <router-link :to='"/admin/list-barang/detail/"+data.productId'>
            <b-button size="sm" variant="outline-primary" class="float-right px-3 py-1">
              Lihat Detail
            </b-button>
          </router-link>
        </div>
      </div>
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
      listOfData: [],
      searchKey: '',
    };
  },
  async created() {
    await this.checkLoginUser();
    await this.getListProduct();
  },
  methods: {
    async checkLoginUser() {
      this.isLoggedIn = true;
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
          this.$router.replace('/admin/login');
        });
    },
    async getListProduct() {
      this.isLoggedIn = true;
      const dataToken = Cookie.get('dataTokenAdmin');
      const dataCount = 10;
      await axios.get(`http://localhost:${this.port}/experience/api/products/getAll?skipCount=${dataCount}`,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .then((response) => {
          console.log(response);
          this.listOfData = response.data.data;
        });
    },
    getDescription(str) {
      if (str.length > 180) {
        return `${str.substr(0, 180)} ...`;
      }
      return str;
    },
    async searchProduk() {
      const dataToken = Cookie.get('dataTokenAdmin');
      await axios.get(`http://localhost:${this.port}/experience/api/products/search?searchKey=${this.searchKey}`,
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
  computed: {
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
