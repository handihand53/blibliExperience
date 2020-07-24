<template>
  <div>
    <div v-if="products.length !== 0">
      <div class="p-2 mb-1" v-for="product in products" :key="product.barterSubmissionId">
        <div class="box-shadow">
          <div class="background-gray2 p-2">
            <small class="date-text">Tanggal : {{getMonthYear(product)}}</small>
          </div>
          <div class="background-white">
            <div class="p-3 row no-margin">
              <div class="col-4 no-margin no-padding">
                <img
                :src="getImage(product.barterSubmissionTargetBarter.productBarterImagePaths[0])"
                alt="" class="img-product">
              </div>
              <div class="col-8 no-margin no-padding">
                  <p class="title-product">
                    {{ product.barterSubmissionTargetBarter.productBarterName }}</p>
                  <p class="brand-product">Brand:
                    <span class="brand">
                    {{product.barterSubmissionTargetBarter.productBarterBrand}}</span></p>
                  <span class="status-tag success">
                    {{ product.barterSubmissionTargetBarter.availableStatus }}</span>
                  <span class="status-tag second ml-1">
                    {{ product.barterSubmissionTargetBarter.productBarterCondition }}</span>
                  <p class="desc-product">
                    {{ getDeskripsi(product
                    .barterSubmissionTargetBarter.productBarterDescription) }}</p>
                  <router-link :to="'/daftar-penawaran/detail-barter/'+product.barterSubmissionId">
                    <button class="buy-btn">Lihat Detail</button>
                  </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <img src="" alt="">
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Cookie from 'vue-cookie';

export default {
  data() {
    return {
      products: [],
      monthNames: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
      ],
    };
  },
  async created() {
    await this.checkLoginUser();
    await this.getBarterSubmission();
  },
  methods: {
    async checkLoginUser() {
    // melakukan check apakah user masih login atau tidak
    // jika user masih login, maka akan dilempar ke halaman utama
      const dataId = Cookie.get('dataId');
      const dataToken = Cookie.get('dataToken');
      await axios.get(`http://localhost:${this.port}/experience/api/users?id=${dataId}`,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .catch(() => {
          this.$router.push('/');
        });
    },
    async getBarterSubmission() {
      const dataId = Cookie.get('dataId');
      const dataToken = Cookie.get('dataToken');
      await axios.get(`http://localhost:${this.port}/experience/api/barterSubmission/user?userId=${dataId}`,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .then((res) => {
          this.products = res.data.data;
          console.log(this.products);
        })
        .catch((e) => {
          console.log(e.response.status);
        });
    },
    getDeskripsi(str) {
      if (str.length > 100) {
        return str.substr(0, 100);
      }
      return str;
    },
    getImage(imagePath) {
      const path = imagePath.split('/');
      return `/assets/resources/uploads/barterProductPhoto/${path[path.length - 1]}`;
    },
    getMonthYear(date) {
      const theDate = new Date(date.barterSubmissionCreatedAt);
      return `${theDate.getDate()} ${this.monthNames[theDate.getMonth()]} ${theDate.getFullYear()}`;
    },
  },
};
</script>

<style scoped>
.no-margin{
  margin: 0px;
}

.bid-product{
  margin-top: 7px;
  margin-bottom: 0px;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.box-shadow{
  box-shadow: 0px 0px 15px -9px rgba(0, 0, 0, 0.809);
}

.no-padding{
  padding: 0px;
}

.date-text{
  color: rgb(130, 130, 130);
  font-weight: 500;
}

.desc-product{
  font-size: 11px;
  color: #AEAEAE;
  margin-bottom: 5px;
}

.bid-price-product{
  font-size: 25px;
  font-weight: 500;
  color: #F99401;
}

.brand-product{
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0px;
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

.new{
  background-color: #0088FF;
}

.second{
  background-color: #0095DA;
}

.fail{
  background-color: #FF5050;
}

.pending{
  background-color: #C5C5C5;
  color: #5A5A5A;
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

.close{
    position: absolute;
    right: 28px;
    cursor: pointer;
}

.brand{
    color: #0088FF;
}

.background-gray{
    background-color: #f3f3f3;
}

.background-gray2{
  background-color: #E3E3E3;
}

.img-product{
  width: 100px;
}

.background-white{
    background-color: white;
}

.penawaran-barter{
    margin-right: 20px;
    padding-bottom: 2px;
    font-size: 14px;
    display: inline-block;
    color: #AEAEAE;
}

.penawaran-barang{
    font-size: 14px;
    padding-bottom: 2px;
    display: inline-block;
    color: #AEAEAE;
}

.active{
    border-bottom: 2px #0095DA solid;
    color: #0095DA;
}

</style>
