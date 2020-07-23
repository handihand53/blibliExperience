<template>
  <div class="mb-5">
    <HeaderWithCart/>
    <div class="overlay bg-gray">
      <div class="modal-detail show-modal pt-3">
        <div class="custom-detail-card">
          <div class="p-2 pl-3 pr-3">
            <div>
              <p class="detail-title-product float-left">
                {{ product.productDataForm.productName }}</p>
              <p class="tag float-right mt-1">Kategori
                {{product.productDataForm.productCategory}}</p>
            </div>
            <div style="clear: both;">
              <p class="brand-detail-product">
                Brand:
                <span class="blue-brand">{{product.productDataForm.productBrand}}</span>
              </p>
            </div>
          </div>
          <div class="overflow-y">
            <!-- <div class=" center">
              <img src="@/assets/etc/aqua.png" alt class="detail-image-product p-3" />
            </div> -->
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="0"
              indicators
              class="product-img"
              background="transparent"
              style="text-shadow: 1px 1px 2px #333;"
            >
              <!-- slides with image -->
              <b-carousel-slide v-for="image in product.productDataForm.productImagePaths"
                :key="image" :img-src="getImage(image)"
              ></b-carousel-slide>
            </b-carousel>
            <div class="row m-0 p-0 mt-4 ml-3">
              <img :src="getImage(image)"
              @click="moveSlider(idx)"
              v-for="(image, idx) in product.productDataForm.productImagePaths"
              :key="image"
              alt="" class="img-preview">
            </div>
            <hr>
            <div class="pl-3 pb-4 pt-1">
              <table>
                <tr>
                  <td class="uang-text">Harga</td>
                  <td class="price-detail-text pl-4">Rp.{{ formatPrice(product.productPrice) }}</td>
                </tr>
              </table>
            </div>
            <div class="about-detail-product">
              <div class="p-3">
                <div class="box-shadow mb-2">
                  <div class="head-tentang">
                    <p class="text-detail-product">Tentang Produk
                      {{ product.productDataForm.productName }}</p>
                  </div>
                  <div class="list-detail-tentang">
                    <p class="text-detail-product">
                      Barcode : <span>{{ product.productDataForm.productBarcode }}</span>
                    </p>
                  </div>
                  <div class="list-detail-tentang">
                    <p class="text-detail-product">
                      Stok : <span>{{ product.productStock }}</span>
                    </p>
                  </div>
                  <div class="list-detail-tentang">
                    <p class="text-detail-product">
                      Berat : <span>{{ product.productDataForm.productWeight }}</span>
                    </p>
                  </div>
                  <div class="list-detail-tentang">
                    <p class="text-detail-product">
                      Dimensi Barang : <span>{{ product.productDataForm.productVolume }}</span>
                    </p>
                  </div>
                  <div class="list-detail-tentang">
                    <p class="text-detail-product">
                      Deskripsi : {{ product.productDataForm.productDescription }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div @click="editProduct" class="bottom-ajukan box-shadow">
      <div class="text-uppercase">Edit Produk</div>
    </div>
    <div class="overlay-loading d-flex align-items-center"
    :class="{hide: !isLoading}">
      <b-spinner
      type="grow"
      variant="primary"
      class="ml-auto mr-auto spinner"
      ></b-spinner>
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
      isLoading: false,
      product: {
        productDataForm: {
          productName: '',
        },
      },
    };
  },
  async created() {
    await this.checkLoginUser();
    await this.getDetailProduct();
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
        .then((response) => {
          this.shopId = response.data.data.shopId;
        })
        .catch(() => {
          this.$router.push('/merchant/login');
        });
    },
    async getDetailProduct() {
      const dataId = Cookie.get('dataShopIdMerchant');
      await axios.get(`http://localhost:${this.port}/experience/api/products?id=${this.$route.params.id}`)
        .then((response) => {
          response.data.data.productStockList.forEach((data) => {
            if (data.shopForm.shopId === dataId) {
              this.product = data;
            }
          });
        })
        .catch(() => {
          this.$router.push('/merchant/login');
        });
    },
    getImage(imagePath) {
      const path = imagePath.split('/');
      return `/assets/resources/uploads/productPhoto/${path[path.length - 1]}`;
    },
    editProduct() {
      this.isLoading = true;
      setTimeout(() => this.$router.push(`/merchant/edit-barang/${this.$route.params.id}`), 100);
    },
    moveSlider(idx) {
      this.slide = idx;
    },
    formatPrice(value) {
      const val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
  },
};
</script>

<style scoped>
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

.hide{
  display: none!important;
}

.spinner{
  width: 50px;
  height: 50px;
}

.img-preview{
  width: 60px;
  border: 0.8px gray solid;
  padding: 5px;
  margin-right: 10px;
}


.overlay-loading{
  z-index: 200;
  background-color: #0000006a;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
}

.detail-name{
  color: #0077FF;
}

.product-img{
  width: 100%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  display: block;
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
