<template>
  <div class="bg-gray">
    <PlainHeaderMarket/>
    <div class="bg-white border-bottom box-shadow">
      <div class="p-2">
        <small style="color: #AEAEAE; font-weight: 600;">Konfirmasi Barter</small>
      </div>
      <div class="m-0 p-0 mt-2 pb-2">
        <div class="overflow-x">
          <span class="mx-1">
            <b-button pill variant="outline-primary" size="sm"
            @click="changeStatus(0, 'WAITING_IN_WAREHOUSE')"
            :class="{buttonActive : this.isActive[0]}">Menunggu</b-button>
          </span>
          <span class="mx-1">
            <b-button pill variant="outline-primary" size="sm"
             @click="changeStatus(1, 'SENT_TO_WAREHOUSE')"
            :class="{buttonActive : this.isActive[1]}">Dikirim</b-button>
          </span>
          <span class="mx-1">
            <b-button pill variant="outline-primary" size="sm"
             @click="changeStatus(2, 'VERIFIED_IN_WAREHOUSE')"
            :class="{buttonActive : this.isActive[2]}">Verifikasi</b-button>
          </span>
          <span class="mx-1">
            <b-button pill variant="outline-primary" size="sm"
             @click="changeStatus(3, 'SENT_TO_CONSUMERS')"
            :class="{buttonActive : this.isActive[3]}">Dikirim</b-button>
          </span>
          <span class="mx-1">
            <b-button pill variant="outline-primary" size="sm"
             @click="changeStatus(4, 'FINISHED')"
            :class="{buttonActive : this.isActive[4]}">Selesai</b-button>
          </span>
        </div>
      </div>
    </div>
    <div class="mt-3">
      <div class="custom-card p-3 row shadow-sm m-2"
      v-for="product in products" :key="product.barterOrderId">
        <div class="col-4 m-0 p-0">
          <img :src="getImage(product.sellingProduct.productBarterImagePaths[0])"
          alt="" class="img-product">
        </div>
        <div class="col-8 m-0 p-0">
          <p class="text-detail">No. Barter: {{product.orderTransactionId}}</p>
          <p class="title-product">{{product.sellingProduct.productBarterName}}</p>
          <p class="desc-product">Deskripsi:
            {{getDeskripsi(product.sellingProduct.productBarterDescription)}}</p>
          <!-- <p class="status-product">{{this.status}}</p> -->
          <router-link :to="'/admin/konfirmasi-barter/detail/'+product.barterOrderId">
            <button class="buy-btn">Lihat Detail</button>
          </router-link>
        </div>
      </div>
    </div>
    <!-- <div>
      <component :is="currentComponent"></component>
    </div> -->
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
      status: 'WAITING_IN_WAREHOUSE',
      isActive: [
        true,
        false,
        false,
        false,
        false,
      ],
      products: '',
    };
  },
  async created() {
    await this.checkUser();
    this.getAllListData();
  },
  methods: {
    checkUser() {
      // melakukan check apakah user masih login atau tidak
      // jika user masih login, maka akan dilempar ke halaman utama
      const dataId = Cookie.get('dataIdAdmin');
      const dataToken = Cookie.get('dataTokenAdmin');
      axios.get(`http://localhost:${this.port}/experience/api/users?id=${dataId}`,
        {
          headers:
            {
              Authorization: `Bearer ${dataToken}`,
            },
        })
        .then((response) => {
          if (response.data === null) {
            this.$router.push('/admin/login');
          }
        })
        .catch(() => {
          this.isLogin = false;
          this.$router.push('/admin/login');
        });
    },
    changeStatus(idx, str) {
      this.isActive.splice(idx, 1, true);
      for (let i = 0; i < this.isActive.length; i += 1) {
        if (i !== idx) this.isActive.splice(i, 1, false);
      }
      this.status = str;
      this.getAllListData();
    },
    getAllListData() {
      const dataToken = Cookie.get('dataTokenAdmin');
      axios.get(`http://localhost:${this.port}/experience/api/admin/barterOrder/orderStatus?request=${this.status}`,
        {
          headers:
            {
              Authorization: `Bearer ${dataToken}`,
            },
        })
        .then((response) => {
          this.products = response.data.data;
          console.log(response);
        });
    },
    getImage(imagePath) {
      const path = imagePath.split('/');
      return `/assets/resources/uploads/barterProductPhoto/${path[path.length - 1]}`;
    },
    getDeskripsi(str) {
      if (str.length > 100) {
        return `${str.substr(0, 100)} ...`;
      }
      return str;
    },
  },
};
</script>

<style scoped>
.desc-product{
  font-size: 11px;
  color: #AEAEAE;
  margin-top: 2px;
  margin-bottom: 0px;
}

.text-detail{
  font-weight: 600;
  font-size: 13px;
  margin: 0px;
  color: rgb(0, 149, 255);
}

.status-product{
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 12px;
  margin: 0px;
  color: rgb(80, 140, 223);
}

.title-product{
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0px;
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

.buttonActive{
  background-color: rgb(0, 123, 255);
  color: white!important;
}

.bg-gray{
  background-color: #f1f1f1;
}

.img-product {
  max-width: 90px;
  max-height: 120px;
  display: block;
}

.custom-card{
  margin-top: 10px!important;
  border: 0.5px solid rgba(208, 208, 208, 0.245);
  background-color: white;
  border-radius: 10px;
}

.overflow-x{
  overflow-x: auto;
  white-space: nowrap;
}
</style>
