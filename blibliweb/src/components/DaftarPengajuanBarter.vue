<template>
  <div class="p-2">
    <div class="custom-card box-shadow p-3 row no-margin"
    v-for="product in product" :key="product.productBarterId">
      <div class="col-4 no-margin no-padding">
        <img :src="getImage(product.productBarterImagePaths[0])"
        alt="" class="img-product">
      </div>
      <div class="col-8 no-margin no-padding">
        <p class="title-product">{{
          product.productBarterName
          }}</p>
        <p class="brand-product">Brand: <span class="brand">{{
          product.productBarterBrand}}</span></p>
        <!-- <span class="status-tag success">Sudah Dikonfirmasi</span> -->
        <p class="desc-product">Deskripsi: {{
          getDeskripsi(product.productBarterDescription)
        }}
        </p>
        <router-link :to="'/barter/detail-pengajuan/'+product.productBarterId">
          <button class="buy-btn">Lihat Detail</button>
        </router-link>
      </div>
    </div>
    <div class="text-align-center content-margin" v-if="show">
      <img src="/assets/etc/people.png" alt=""
      class="img-empty">
      <h4 class="mt-1">Belum ada barang lagi nih!</h4>
      <small>Mau tukar apa lagi ya ?<br>
        Coba masukkan produk yang mau kamu tukar.</small>
      <br>
      <router-link to="/post-product" class="mt-3">Disini</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Cookie from 'vue-cookie';

export default {
  data() {
    return {
      show: false,
      product: '',
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
      await axios.get(`http://localhost:${this.port}/experience/api/barter/user?userId=${dataId}`,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .then((res) => {
          this.product = res.data.data;
        })
        .catch(() => {
          this.show = true;
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
  },
};
</script>

<style scoped>
.list-detail-tentang{
  padding: 10px;
}

.text-detail-product{
  font-size: 12px;
  text-align: justify;
}

.list-detail-tentang:nth-child(odd){
  background-color: rgb(224, 224, 224);
}

.head-tentang{
  background-color: #0095DA;
  padding: 10px;
  color: white;
}

p{
  margin-bottom: 0px;
}

.float-left{
  float: left;
}

.float-right{
  float: right;
}

.about-detail-product{
  background-color: #F3F3F3;
}

.detail-image-product{
  max-width: 320px;
}

.overflow-y{
  background-color: white;
}

.tag{
  background-color: #0095DA;
  color: white;
  font-size: 10px;
  padding: 2px 10px;
  border-radius: 10px;
}

.uang-text{
  margin-right: 30px;
  color: #5A5A5A;
  font-size: 14px;
}

.price-detail-text{
  color: #FF7600;
  font-size: 25px;
}

.img-empty{
  width: 40%;
}

.detail-barang-text{
  background-color: white;
  border-bottom: solid 10px rgb(204, 204, 204);
  transition: all 1s;
}

.blue-brand{
  color: #0095DA;
}

.brand-detail-product{
  clear: both;
  margin-bottom: 0px;
  font-size: 11px;
}

.detail-title-product{
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 0px;
}

.text-align-center{
  text-align: center;
  margin-top: 40px;
}

.detail-title-product::after{
  clear: left;
}

.detail-tag-product{
  font-size: 10px;
  background-color: #37C26A;
  color: white;
  padding: 2px 7px;
  border-radius: 10px;
  margin-bottom: 0px;
}

.content-margin{
  margin-top: 120px;
  margin-bottom: 120px;
}

.bid-product{
  margin-top: 7px;
  margin-bottom: 0px;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.center{
  text-align:center;
}

.custom-detail-card{
  background-color: white;
  max-height: 77%;
}

.bid-price-product{
  font-size: 22px;
  font-weight: 500;
  color: #F99401;
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

.pending{
  background-color: #C5C5C5;
  color: #5A5A5A;
}

.no-margin{
  margin: 0px;
}

.desc-product{
  font-size: 11px;
  color: #AEAEAE;
  margin-top: 2px;
}

.brand-product{
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0px;
}

.custom-card{
  margin-top: 10px!important;
  border-radius: 7px;
  border: 0.5px solid rgba(208, 208, 208, 0.245);
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

.pengajuan-barter{
    margin-right: 20px;
    padding-bottom: 2px;
    font-size: 14px;
    display: inline-block;
    color: #AEAEAE;
}

.pengajuan-barang{
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
