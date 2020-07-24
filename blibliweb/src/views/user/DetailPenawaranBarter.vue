<template>
  <div class="mb-5">
    <HeaderWithCart/>
    <div class="overlay bg-gray">
      <div class="modal-detail show-modal">
        <div class="bg-white d-flex justify-content-between p-2">
          <p class="brand-detail-product">Kode Transaksi:
            <span class="blue-brand font-weight-bold">{{order.orderTransactionId}}</span>
          </p>
          <span class="tag">
            {{getStatus(product.barterSubmissionTargetBarter.availableStatus)}}</span>
        </div>
        <p class="fs-12 p-2">Barang yang didapatkan</p>
        <div class="custom-detail-card">
          <div class="p-2 pl-3 pr-3">
            <div>
              <p class="detail-title-product float-left">{{
                product.barterSubmissionTargetBarter.productBarterName
                }}</p>
              <p class="status-tag success float-right mt-1">
                {{
                order.sellerItemStatus
                }}
              </p>
            </div>
            <div style="clear: both;">
              <p class="brand-detail-product">
                Brand:
                <span class="blue-brand">
                {{
                  product.barterSubmissionTargetBarter.productBarterBrand
                }}
                </span>
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
                product.barterSubmissionTargetBarter.productBarterImagePaths"
                  :key="image" :img-src="getImage(image)"
                ></b-carousel-slide>
              </b-carousel>
              <div class="row m-0 p-0 mt-4">
                <img :src="getImage(image)"
                v-for="(image, idx) in
                product.barterSubmissionTargetBarter.productBarterImagePaths"
                :key="image"
                @click="moveSlider(idx)"
                alt="" class="img-preview">
              </div>
            </div>
            <div class="about-detail-product">
              <div class="pt-3 pl-3 pr-3">
                <div class="box-shadow mb-2">
                  <div class="head-tentang">
                    <p class="text-detail-product">Tentang Produk</p>
                  </div>
                  <div class="list-detail-tentang">
                    <p class="text-detail-product">
                      Status Barang :
                      <span class="tag">
                        {{
                          product.barterSubmissionTargetBarter.productBarterCondition
                        }}
                      </span>
                    </p>
                  </div>
                  <div class="list-detail-tentang">
                    <p class="text-detail-product">Barter preferensi :
                      {{
                        product.barterSubmissionTargetBarter.productBarterPreference
                      }}
                    </p>
                  </div>
                  <div class="list-detail-tentang">
                    <p class="text-detail-product">Kelengkapan paket :
                      {{
                        product.barterSubmissionTargetBarter.productBarterPackage
                      }}
                    </p>
                  </div>
                  <div class="list-detail-tentang">
                    <p class="text-detail-product">Volume produk :
                      {{
                        product.barterSubmissionTargetBarter.productBarterVolume
                      }}
                    </p>
                  </div>
                  <div class="list-detail-tentang">
                    <p class="text-detail-product">Berat produk :
                      {{
                        product.barterSubmissionTargetBarter.productBarterWeight
                      }}
                    </p>
                  </div>
                  <div class="list-detail-tentang">
                    <p class="text-detail-product">
                      Deskripsi barang : {{
                        product.barterSubmissionTargetBarter.productBarterDescription
                      }}
                    </p>
                  </div>
                </div>
                <div class="separator fs-12 mt-2">Barter dengan
                  <font-awesome-icon
                    class="ml-1 exchange"
                    icon="exchange-alt"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="fs-12 p-2">Barang yang anda tawarkan</p>
        <div class="custom-detail-card">
          <div class="p-2 pl-3 pr-3">
            <div>
              <p class="detail-title-product float-left">
                {{product.barterSubmissionName}}</p>
              <p class="status-tag success float-right mt-1">
                {{order.buyerItemStatus}}</p>
            </div>
            <div style="clear: both;">
              <p class="brand-detail-product">
                Brand:
                <span class="blue-brand">{{product.barterSubmissionBrand}}</span>
              </p>
            </div>
          </div>
          <div class="overflow-y">
            <div class="pl-3 pr-3 pb-3">
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
                product.barterSubmissionImagePaths"
                  :key="image" :img-src="getImage2(image)"
                ></b-carousel-slide>
              </b-carousel>
              <div class="row m-0 p-0 mt-4">
                <img :src="getImage2(image)"
                v-for="(image, idx) in
                product.barterSubmissionImagePaths"
                :key="image"
                @click="moveSlider2(idx)"
                alt="" class="img-preview">
              </div>
            </div>
            <div class="about-detail-product">
              <div class="pt-3 pl-3 pr-3 pb-3">
                <div class="box-shadow mb-2">
                  <div class="head-tentang">
                    <p class="text-detail-product">Tentang Produk</p>
                  </div>
                  <div class="list-detail-tentang">
                    <p class="text-detail-product">
                      Status Barang :
                      <span class="tag">
                        {{
                          product.barterSubmissionCondition
                        }}
                      </span>
                    </p>
                  </div>
                  <div class="list-detail-tentang">
                    <p class="text-detail-product">Kelengkapan paket :
                      {{
                        product.barterSubmissionPackage
                      }}
                    </p>
                  </div>
                  <div class="list-detail-tentang">
                    <p class="text-detail-product">Volume produk :
                      {{
                        product.barterSubmissionVolume
                      }}
                    </p>
                  </div>
                  <div class="list-detail-tentang">
                    <p class="text-detail-product">Berat produk :
                      {{
                        product.barterSubmissionWeight
                      }}
                    </p>
                  </div>
                  <div class="list-detail-tentang">
                    <p class="text-detail-product">
                      Deskripsi barang : {{
                        product.barterSubmissionDescription
                      }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-3" v-if="order.buyerItemStatus === 'IN_OWNER'">
      <label for="">Masukan nomor resi</label>
      <input type="text" v-model="resi" class="form-control">
      <button class="btn btn-primary mt-2 btn-block"
      @click="updateToWareHouse">Kirimkan</button>
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
      slide: 0,
      slide2: 0,
      product: {
        barterSubmissionTargetBarter: {
          availableStatus: '',
        },
      },
      resi: '',
      penawaran: false,
      order: '',
    };
  },
  async created() {
    await this.checkUser();
    await this.getBarterSubmission();
    await this.getOrder();
  },
  methods: {
    checkUser() {
      // melakukan check apakah user masih login atau tidak
      // jika user masih login, maka akan dilempar ke halaman utama
      const dataId = Cookie.get('dataId');
      const dataToken = Cookie.get('dataToken');
      axios.get(`http://localhost:${this.port}/experience/api/users?id=${dataId}`,
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
    async getBarterSubmission() {
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
    async getOrder() {
      const dataId = Cookie.get('dataId');
      const dataToken = Cookie.get('dataToken');
      await axios.get(`http://localhost:${this.port}/experience/api/barterOrder/user?userId=${dataId}&barterRoleEnum=BUYER`,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .then((res) => {
          res.data.data.forEach((data) => {
            if (data.buyingProduct.barterSubmissionId === this.$route.params.id) {
              this.penawaran = true;
              this.order = data;
              console.log(this.order);
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
    getImage2(imagePath) {
      const path = imagePath.split('/');
      return `/assets/resources/uploads/barterSubmissionPhoto/${path[path.length - 1]}`;
    },
    moveSlider(idx) {
      this.slide = idx;
    },
    moveSlider2(idx) {
      this.slide2 = idx;
    },
    async updateToWareHouse() {
      const data = {
        barterOrderId: this.order.barterOrderId,
        barterRoleEnum: 'BUYER',
        receipt: this.resi,
      };

      if (
        this.resi !== ''
        && this.resi !== undefined
      ) {
        const dataToken = Cookie.get('dataToken');
        await axios.put(`http://localhost:${this.port}/experience/api/barterOrder/toWarehouse`, data,
          {
            headers:
            {
              Authorization: `Bearer ${dataToken}`,
            },
          })
          .then((res) => {
            console.log(res);
            this.getOrder();
          });
      }
    },
    getStatus(str) {
      return str === 'NOT_AVAILABLE' ? 'Sedang di proses' : 'belum di proses';
    },
  },
};
</script>

<style scoped>
.exchange{
  transform: rotate(90deg);
}

.name-text{
  font-size: 13px;
  font-weight: 500;
}

.detail-address{
  color: #808080;
}

.address-text{
  font-size: 13px;
  text-align: justify;
}

.fs-12{
  font-size: 12px;
}

.detail-name{
  color: #0077FF;
}

.profile-text{
  font-weight: 600;
}

.profile-pemilik{
  background-color: #F3F3F3;
}

.bottom-buy{
  height: 60px;
  background-color: white;
  position: fixed;
}

.product-img{
  width: 100%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.list-detail-tentang{
  padding: 10px;
}

.bottom-ajukan{
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100%;
  text-align: center;
  padding-top: 17px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  background-color: #ff7f0f;
}

.img-preview{
  width: 60px;
  border: 0.8px gray solid;
  padding: 5px;
  margin-right: 10px;
}

.text-detail-product{
  font-size: 12px;
  text-align: justify;
}

.list-detail-tentang:nth-child(odd){
  background-color: rgb(224, 224, 224);
}

.bg-gray{
    background-color: #f1f0f0;
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
  font-size: 20px;
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
  font-size: 11px;
  background-color: #FF7600;
  color: white;
  padding: 2px 15px;
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
  padding: 1px 10px;
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

</style>
