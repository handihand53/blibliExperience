<template>
  <div>
    <HeaderWithCart/>
    <div class="overlay">
      <div class="modal-detail show-modal">
        <div class="custom-detail-card">
          <div class="p-2">
            <div>
              <p class="detail-title-product float-left">{{product.barterSubmissionName}}</p>
            </div>
            <div style="clear: both;">
              <p class="brand-detail-product">
                Brand:
                <span class="blue-brand">{{product.barterSubmissionBrand}}</span>
              </p>
            </div>
          </div>
          <div class="overflow-y">
            <div class="p-3">
              <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="0"
                indicators
                class="product-img"
                background="transparent"
                style="text-shadow: 1px 1px 2px #333;"
              >
                <b-carousel-slide v-for="image in
                product.barterSubmissionImagePaths"
                  :key="image" :img-src="getImage(image)"
                ></b-carousel-slide>
              </b-carousel>
              <div class="row m-0 p-0 mt-4">
                <img :src="getImage(image)"
                v-for="(image, idx) in
                product.barterSubmissionImagePaths"
                :key="image"
                @click="moveSlider(idx)"
                alt="" class="img-preview">
              </div>
            </div>
            <div class="about-detail-product">
              <div class="p-3">
                <div class="box-shadow mb-2">
                  <div class="head-tentang">
                    <p class="text-detail-product">Tentang Produk</p>
                  </div>
                  <div class="list-detail-tentang">
                    <p class="text-detail-product">
                      Status Barang :
                      <span class="tag">{{ product.barterSubmissionCondition }}</span>
                    </p>
                  </div>
                  <div class="list-detail-tentang">
                    <p class="text-detail-product">
                      Volume Barang :
                      <span>{{ product.barterSubmissionVolume }}</span>
                    </p>
                  </div>
                  <div class="list-detail-tentang">
                    <p class="text-detail-product">
                      Berat Barang :
                      <span>{{ product.barterSubmissionWeight }}</span>
                    </p>
                  </div>
                  <div class="list-detail-tentang">
                    <p class="text-detail-product">
                      Deskripsi barang : {{ product.barterSubmissionDescription }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-nav">
      <div class="row m-0 p-0">
        <div class="buy-btn" @click="submitBarter">
          TERIMA PENAWARAN
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import HeaderWithCart from '@/components/HeaderWithCart.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
import Cookie from 'vue-cookie';

export default {
  components: {
    HeaderWithCart,
    Footer,
  },
  data() {
    return {
      product: '',
      suggest: '',
      slide: 0,
      isExpand: [
        false,
        false,
      ],
    };
  },
  async created() {
    await this.checkLoginUser();
    await this.getSubmissionDetail();
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
          this.$router.replace('/');
        });
    },
    async getSubmissionDetail() {
      // const dataId = Cookie.get('dataId');
      const dataToken = Cookie.get('dataToken');
      await axios.get(`http://localhost:${this.port}/experience/api/barterSubmission?barterSubmissionId=${this.$route.params.id}`,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .then((res) => {
          this.product = res.data.data;
        })
        .catch((e) => {
          console.log(e.response.status);
        });
    },
    submitBarter() {
      const submit = {
        barterSubmissionId: this.product.barterSubmissionId,
      };
      const dataToken = Cookie.get('dataToken');
      axios.post(`http://localhost:${this.port}/experience/api/barterOrder`, submit,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .then((res) => {
          console.log(res);
          this.$router.push('/daftar-pengajuan');
        });
    },
    getImage(imagePath) {
      const path = imagePath.split('/');
      return `/assets/resources/uploads/barterSubmissionPhoto/${path[path.length - 1]}`;
    },
    moveSlider(idx) {
      this.slide = idx;
    },
  },
};
</script>

<style scoped>
.bottom-buy{
  height: 60px;
  background-color: white;
  position: fixed;
}

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

.blue{
  color: #0088FF;
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

.product-img{
  width: 100%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  display: block;
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

.bottom-nav{
  height: 60px;
  background-color: #F99401;
  position: fixed;
  bottom: 0;
  display: block;
  width: 100%;
}

.buy-btn{
  width: 100%;
  height: 100%;
  display: inline-block;
  height: 60px;
  text-align: center;
  padding-top: 17px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  background-color: #ff7f0f;
}

.buy-btn:hover {
  background: #e86c00 radial-gradient(circle, transparent 1%, #e86c00 1%)
    center/15000%;
  color: white;
}

.buy-btn:active {
  background-color: #ff973b;
  background-size: 100%;
  transition: background 1s;
}

.img-preview{
  width: 60px;
  border: 0.8px gray solid;
  padding: 5px;
  margin-right: 10px;
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

.detail-barang-text{
  background-color: white;
  border-bottom: solid 1px rgb(204, 204, 204);
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
  background-color:rgb(0, 105, 209);
}

.fail{
  background-color: #FF5050;
}

.pending{
  background-color: #C5C5C5;
  color: #5A5A5A;
}

.hideIcon{
  display: none;
}

.no-margin{
  margin: 0px;
}

.desc-product{
  font-size: 11px;
  color: #AEAEAE;
  margin-top: 15px;
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

tr td{
  padding: 0px;
  margin: 0px;
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

.img-product2{
  width: 100%;
}
</style>
