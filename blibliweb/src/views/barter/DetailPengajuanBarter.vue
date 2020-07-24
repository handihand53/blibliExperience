<template>
  <div>
    <HeaderWithCart/>
    <div class="overlay">
      <div class="modal-detail show-modal">
        <div class="p-2 pl-2 detail-barang-text" id="modal-show">
          <p class="detail-title-product">Detail Pengajuan Barter</p>
        </div>
        <div class="custom-detail-card">
          <div class="p-2">
            <div>
              <p class="detail-title-product float-left">{{product.productBarterName}}</p>
              <p class="detail-tag-product float-right mt-1"
              v-if="penawaran">{{order.sellerItemStatus}}</p>
            </div>
            <div style="clear: both;">
              <p class="brand-detail-product">
                Brand:
                <span class="blue-brand">{{product.productBarterBrand}}</span>
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
                product.productBarterImagePaths"
                  :key="image" :img-src="getImage(image)"
                ></b-carousel-slide>
              </b-carousel>
              <div class="row m-0 p-0 mt-4">
                <img :src="getImage(image)"
                v-for="(image, idx) in
                product.productBarterImagePaths"
                :key="image"
                @click="moveSlider(idx)"
                alt="" class="img-preview">
              </div>
            </div>
            <div class="pl-3">
              <span class="uang-text">Barang preferensi</span>
              <span class="price-detail-text">{{product.productBarterPreference}}</span>
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
                      <span class="tag">{{ product.productBarterCondition }}</span>
                    </p>
                  </div>
                  <div class="list-detail-tentang">
                    <p class="text-detail-product">
                      Volume Barang :
                      <span>{{ product.productBarterVolume }}</span>
                    </p>
                  </div>
                  <div class="list-detail-tentang">
                    <p class="text-detail-product">
                      Berat Barang :
                      <span>{{ product.productBarterWeight }}</span>
                    </p>
                  </div>
                  <div class="list-detail-tentang">
                    <p class="text-detail-product">
                      Deskripsi barang : {{ product.productBarterDescription }}
                    </p>
                  </div>
                </div>
                <div v-if="!penawaran">
                  <span v-if="suggest !== ''">List Penawaran</span>
                  <div class="custom-card box-shadow px-3 py-2 mb-2 mt-2"
                  v-for="(suggest, idx) in suggest"
                  :key="suggest.barterSubmissionId"
                  >
                      <div @click="expand(idx)" class="row no-gutters">
                        <span class="mr-2">
                          <span
                            :class="{hideIcon: isExpand[idx]}">
                            <font-awesome-icon
                            class="blue"
                            icon="plus"
                            />
                          </span>
                          <span
                          :class="{hideIcon: !isExpand[idx]}">
                            <font-awesome-icon
                            class="blue"
                            icon="minus"
                            />
                          </span>
                        </span>
                        <span>
                          <p class="title-product m-0 p-0">
                            {{suggest.barterSubmissionName}}
                          </p>
                        </span>
                      </div>
                    <div
                    :class="{hideIcon: !isExpand[idx]}">
                      <hr class="my-2">
                      <div class="row no-gutters">
                        <div class="col-3 no-margin no-padding">
                          <img :src="getSubmissionImage(suggest.barterSubmissionImagePaths[0])"
                          alt="" class="img-product2 pr-1">
                        </div>
                        <div class="col-9 no-margin no-padding">
                          <p class="brand-product">Brand: <span class="brand">
                            {{ suggest.barterSubmissionBrand }}</span></p>
                          <p class="brand-product">Status:
                            <span class="tag">
                              {{ suggest.barterSubmissionCondition }}</span></p>
                          <!-- <p class="brand-product">Estimasi Harga:
                            <span class="price">Rp{{formatPrice(150000)}}</span></p> -->
                        </div>
                      </div>
                      <p class="brand-product mt-2">Deskripsi:
                          {{ suggest.barterSubmissionDescription }}</p>
                        <div class="mx-auto">
                          <router-link :to="'/barter/detail-pengajuan/detail-submit/'
                          +suggest.barterSubmissionId">
                            <button class="buy-btn mt-1 btn-block px-3">Lihat Detail</button>
                          </router-link>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="custom-detail-card" v-if="penawaran">
          <div class="separator bg-g fs-12 pb-3">Barter dengan
            <font-awesome-icon
              class="ml-1 exchange"
              icon="exchange-alt"/>
          </div>
          <div class="p-2">
            <div>
              <p class="detail-title-product float-left">
                {{order.buyingProduct.barterSubmissionName}}</p>
              <p class="detail-tag-product float-right mt-1"
              v-if="penawaran">{{order.buyerItemStatus}}</p>
            </div>
            <div style="clear: both;">
              <p class="brand-detail-product">
                Brand:
                <span class="blue-brand">{{order.buyingProduct.barterSubmissionBrand}}</span>
              </p>
            </div>
          </div>
          <div class="overflow-y">
            <div class="p-3">
              <b-carousel
                id="carousel-1"
                v-model="slide2"
                :interval="0"
                indicators
                class="product-img"
                background="transparent"
                style="text-shadow: 1px 1px 2px #333;"
              >
                <b-carousel-slide v-for="image in
                order.buyingProduct.barterSubmissionImagePaths"
                  :key="image" :img-src="getSubmissionImage(image)"
                ></b-carousel-slide>
              </b-carousel>
              <div class="row m-0 p-0 mt-4">
                <img :src="getSubmissionImage(image)"
                v-for="(image, idx) in
                order.buyingProduct.barterSubmissionImagePaths"
                :key="image"
                @click="moveSlider2(idx)"
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
                      <span class="tag">{{ order.buyingProduct.barterSubmissionCondition }}</span>
                    </p>
                  </div>
                  <div class="list-detail-tentang">
                    <p class="text-detail-product">
                      Volume Barang :
                      <span>{{ order.buyingProduct.barterSubmissionVolume }}</span>
                    </p>
                  </div>
                  <div class="list-detail-tentang">
                    <p class="text-detail-product">
                      Berat Barang :
                      <span>{{ order.buyingProduct.barterSubmissionWeight }}</span>
                    </p>
                  </div>
                  <div class="list-detail-tentang">
                    <p class="text-detail-product">
                      Deskripsi barang : {{ order.buyingProduct.barterSubmissionDescription }}
                    </p>
                  </div>
                </div>
                <div v-if="order.sellerItemStatus === 'IN_OWNER'"
                class="">
                  <hr>
                  <input type="text" class="form-control" v-model="resi">
                  <button class="btn btn-primary btn-block mt-2"
                  @click="postResi">Masukkan resi</button>
                </div>
              </div>
            </div>
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
      slide2: 0,
      isExpand: [
        false,
        false,
      ],
      resi: '',
      penawaran: false,
      order: {
        buyingProduct: {
          barterSubmissionName: '',
        },
      },
    };
  },
  async created() {
    await this.checkLoginUser();
    await this.getBarterDetail();
    await this.getAllSubmission();
    await this.getOrder();
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
    async getBarterDetail() {
      const dataToken = Cookie.get('dataToken');
      await axios.get(`http://localhost:${this.port}/experience/api/barter?productBarterId=${this.$route.params.id}`,
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
    async getAllSubmission() {
      // const dataId = Cookie.get('dataId');
      const dataToken = Cookie.get('dataToken');
      await axios.get(`http://localhost:${this.port}/experience/api/barterSubmission/productBarter?productBarterId=${this.$route.params.id}`,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .then((res) => {
          this.suggest = res.data.data;
          this.isExpand = new Array(this.suggest.length);
          this.isExpand.fill(false);
        })
        .catch((e) => {
          console.log(e.response.status);
        });
    },
    async getOrder() {
      const dataId = Cookie.get('dataId');
      const dataToken = Cookie.get('dataToken');
      await axios.get(`http://localhost:${this.port}/experience/api/barterOrder/user?userId=${dataId}&barterRoleEnum=SELLER`,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .then((res) => {
          console.log(res);
          res.data.data.forEach((data) => {
            if (data.sellingProduct.productBarterId === this.$route.params.id) {
              this.penawaran = true;
              this.order = data;
            }
          });
        })
        .catch(() => {
          this.penawaran = false;
        });
    },
    getImage(imagePath) {
      const path = imagePath.split('/');
      return `/assets/resources/uploads/barterProductPhoto/${path[path.length - 1]}`;
    },
    getSubmissionImage(imagePath) {
      const path = imagePath.split('/');
      return `/assets/resources/uploads/barterSubmissionPhoto/${path[path.length - 1]}`;
    },
    moveSlider(idx) {
      this.slide = idx;
    },
    moveSlider2(idx) {
      this.slide2 = idx;
    },
    expand(idx) {
      this.isExpand.splice(idx, 1, !this.isExpand[idx]);
    },
    postResi() {
      const updateData = {
        barterOrderId: this.order.barterOrderId,
        barterRoleEnum: 'SELLER',
        receipt: this.resi,
      };

      if (this.resi !== '') {
        const dataToken = Cookie.get('dataToken');
        axios.put(`http://localhost:${this.port}/experience/api/barterOrder/toWarehouse`, updateData,
          {
            headers:
            {
              Authorization: `Bearer ${dataToken}`,
            },
          })
          .then(() => {
            console.log('s');
            this.getOrder();
          });
      }
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

.bg-g{
  background-color: #f1f1f1;
  text-align: center;
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

tr td{
  padding: 0px;
  margin: 0px;
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

.img-product2{
  width: 100%;
}

.separator {
    display: flex;
    align-items: center;
    text-align: center;
}

.separator::before, .separator::after {
    content: '';
    flex: 1;
    border-bottom: 0.8px solid rgb(148, 148, 148);
}

.separator::before {
    margin-right: .25em;
}

.separator::after {
    margin-left: .25em;
}

.fs-12{
  font-size: 12px;
}

.exchange{
  transform: rotate(90deg);
}
</style>
