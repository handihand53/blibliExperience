<template>
  <div>
    <HeaderWithCart/>
    <div class="overlay">
      <div class="modal-detail show-modal">
        <div class="p-2 pl-2 detail-barang-text" id="modal-show">
          <p class="detail-title-product">Detail Pengajuan Lelang</p>
        </div>
        <div class="custom-detail-card">
          <div class="p-2">
            <div>
              <p class="detail-title-product float-left">{{product.productBiddingName}}</p>
              <!-- <p class="detail-tag-product float-right mt-1">Sudah dikonfirmasi</p> -->
            </div>
            <div style="clear: both;">
              <p class="brand-detail-product">
                Brand:
                <span class="blue-brand">{{product.productBiddingBrand}}</span>
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
                <b-carousel-slide v-for="(image, idx) in
                product.productBiddingImagePaths"
                  :key="image+idx" :img-src="getImage(image)"
                ></b-carousel-slide>
              </b-carousel>
              <div class="row m-0 p-0 mt-4">
                <img :src="getImage(image)"
                v-for="(image, idx) in
                 product.productBiddingImagePaths"
                :key="image+idx"
                @click="moveSlider(idx)"
                alt="" class="img-preview">
              </div>
            </div>
            <div class="pl-3 mb-2">
              <table>
                <tr>
                  <td>
                    <span class="uang-text">Bid </span>
                  </td>
                  <td>
                    <span class="price-detail-text ml-2">Rp{{formatPrice(product.nextBid)}}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="uang-text">Current Bid </span>
                  </td>
                  <td>
                    <span class="price-detail-text ml-2">Rp
                      {{formatPrice(product.currentPrice)}}</span>
                  </td>
                </tr>
              </table>
            </div>
            <div class="about-detail-product">
<!--  -->
              <div class="p-3">
                <div class="custom-card box-shadow px-3 py-2 mb-2 mt-2"
                v-for="(data, idx) in biddingInfo" :key="idx">
                  <table class="table table-borderless mb-0">
                    <tr @click="expand(idx)">
                      <td>
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
                      </td>
                      <td>
                        <p class="title-product col-9 m-0 p-0">Detail bid</p>
                      </td>
                    </tr>
                  </table>
                  <div
                  :class="{hideIcon: !isExpand[idx]}">
                    <hr class="my-2">
                    <div class="no-gutters">
                      <table class="s">
                        <tr>
                          <td>Nama</td>
                          <td class="pl-2">: {{data.userDataForm.userName}}</td>
                        </tr>
                        <tr>
                          <td>Waktu</td>
                          <td class="pl-2">: {{getMonthYear(data.createdAt)}},
                            {{getTime(data.createdAt)}}</td>
                        </tr>
                        <tr>
                          <td>Last bid</td>
                          <td class="pl-2">: Rp{{formatPrice(data.biddingPrice)}}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
<!--  -->
              <div class="p-3">
                <div class="box-shadow mb-2">
                  <div class="head-tentang">
                    <p class="text-detail-product">Tentang Produk</p>
                  </div>
                  <div class="list-detail-tentang">
                    <p class="text-detail-product">
                      Status Barang :
                      <span class="tag">{{product.productBiddingCondition}}</span>
                    </p>
                  </div>
                  <div class="list-detail-tentang">
                    <p class="text-detail-product">Kelengkapan paket :
                      {{product.productBiddingPackage}}</p>
                  </div>
                  <div class="list-detail-tentang">
                    <p class="text-detail-product">Volume barang :
                      {{product.productBiddingVolume}}</p>
                  </div>
                  <div class="list-detail-tentang">
                    <p class="text-detail-product">Berat barang : {{
                      product.productBiddingWeight}}</p>
                  </div>
                  <div class="list-detail-tentang">
                    <p class="text-detail-product">
                      Deskripsi barang : {{
                        product.productBiddingDescription
                      }}
                    </p>
                  </div>
                </div>
                <b-button variant="primary" block @click="postOrder">
                  Post Order
                </b-button>
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
      isExpand: [
        false,
        false,
        false,
      ],
      product: '',
      slide: 0,
      monthNames: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
      ],
      biddingInfo: [],
    };
  },
  async created() {
    await this.checkUser();
    await this.getDetailPengajuan();
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
    async getDetailPengajuan() {
      const dataToken = Cookie.get('dataToken');
      await axios.get(`http://localhost:${this.port}/experience/api/products/bidding?productBiddingId=${this.$route.params.id}`,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .then((res) => {
          let count = 0;
          this.product = res.data.data;
          console.log(res);
          for (let index = this.product.biddingForms.length - 1; index >= 0; index -= 1) {
            if (count <= 2) {
              this.biddingInfo.push(this.product.biddingForms[index]);
            } else {
              break;
            }
            count += 1;
          }
        })
        .catch(() => {
          // this.$router.push('/');
        });
    },
    async postOrder() {
      const postOrder = {
        productBiddingId: this.product.productBiddingId,
      };

      const dataToken = Cookie.get('dataToken');
      await axios.post(`http://localhost:${this.port}/experience/api/biddingOrder`, postOrder,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .then(() => {
          this.$router.push('/daftar-pengajuan');
        })
        .catch(() => {
          this.$router.push('/');
        });
    },
    formatPrice(value) {
      const val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    expand(idx) {
      this.isExpand.splice(idx, 1, !this.isExpand[idx]);
    },
    moveSlider(idx) {
      this.slide = idx;
    },
    getImage(imagePath) {
      const path = imagePath.split('/');
      return `/assets/resources/uploads/biddingProductPhoto/${path[path.length - 1]}`;
    },
    getMonthYear(date) {
      const theDate = new Date(date);
      return `${theDate.getDate()} ${this.monthNames[theDate.getMonth()]} ${theDate.getFullYear()}`;
    },
    getTime(date) {
      const theDate = new Date(date).toLocaleTimeString();
      return `${theDate}`;
    },
  },
};
</script>

<style scoped>
.hideIcon{
  display: none;
}

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

.head-tentang{
  background-color: #0095DA;
  padding: 10px;
  color: white;
}

p{
  margin-bottom: 0px;
}

.custom-card{
  margin-top: 10px!important;
  border-radius: 7px;
  border: 0.5px solid rgba(208, 208, 208, 0.245);
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

.blue{
  color: #0088FF;
}

tr td{
  padding: 0px;
  margin: 0px;
}

.img-preview{
  width: 60px;
  border: 0.8px gray solid;
  padding: 5px;
  margin-right: 10px;
}

.s>tr td{
  font-size: 12px;
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

.product-img{
  width: 100%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  display: block;
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
</style>
