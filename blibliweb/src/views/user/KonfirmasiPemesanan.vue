<template>
  <div>
    <ConfirmHeader/>
    <div class="pl-3 pt-2">
      <p class="address-label"><font-awesome-icon icon="shipping-fast" />
      Pilih metode pengambilan</p>
    </div>
    <div class="pl-3 pr-3">
      <div class="cst-card pl-3 pr-3 py-2">
        <select class="form-control"
        name="method"
        id="method"
        @change="changeMethod"
        v-model="methode">
          <option value='null' selected disabled>- Pilih metode pengambilan -</option>
          <option value='SELF_SERVICE'>Ambil di Bliblimart</option>
          <option value='DELIVERY_TO_HOME'>Delivery</option>
        </select>
      </div>
    </div>
    <div class="pl-3 pr-3">
      <div :class="{hideSection: isDelivery}">
        <div class="d-flex justify-content-between">
          <p class="address-label pt-2">
          <font-awesome-icon icon="map-marker-alt" /> Alamat Pengiriman</p>
          <router-link to="/profile">
            <p class="change-label pt-2" v-b-modal.modal-sm>ubah</p>
          </router-link>
        </div>
        <div class="cst-card pl-3 pr-3 pt-2">
          <p class="name-text">Handi Hermawan</p>
          <p class="address-text">Alamat :
            <span class="color-gray" v-if="user.userAddressForms === null">-</span>
            <span class="color-gray" v-else>{{user.userAddressForms[0].detail}}</span>
          </p>
        </div>
        <p class="p-1 fs-red mt-2" v-if="addressIsEmpty"
        >Alamat tidak boleh kosong</p>
      </div>
      <div class="cst-card mt-2 pt-2">
        <p class=" shop-name border-bottom pl-3 pb-3 pt-1">List Produk</p>
        <div class="col-12 row no-margin no-padding border-bottom"
        v-for="product in product" :key="product.stockForm.stockId">
          <div class="pl-3 col-4 no-padding">
            <img :src="getImage(product.stockForm.productDataForm.productImagePaths[0])"
            class="img-product ml-auto mr-auto" >
          </div>
          <div class="col-8 no-padding pr-3">
            <p class="product-name">{{ product.stockForm.productDataForm.productName }}</p>
            <p class="total-product">Jumlah: {{ product.amount }}</p>
            <p class="total-product blue">{{ product.stockForm.shopForm.shopName }}</p>
            <p class="price-product">Total Harga
              <span class="price">Rp{{ formatPrice(product.stockForm.productPrice) }}</span></p>
          </div>
        </div>
      </div>
      <p class="rincian-label">
        <font-awesome-icon icon="receipt" class="mr-2"/>Rincian Pembayaran</p>
      <div class="cst-card mt-1 mb-cst">
        <div class="col-12 row no-margin no-padding">
          <p class="detail pt-2 pl-3 pb-1 col-6">Total Belanja</p>
          <p class="detail-price-total pt-2 pl-3 pb-1 col-6">Rp{{
            formatPrice(this.price)}}</p>
        </div>
        <!-- <div class="col-12 row no-margin no-padding border-bottom"
        v-if="methode !== 'SELF_SERVICE'">
          <p class="detail pt-2 pl-3 pb-1 col-6">Biaya Pengiriman</p>
          <p class="detail-price-total pt-2 pl-3 pb-1 col-6">Rp13.000</p>
        </div> -->
        <hr class="m-0 px-2">
        <div class="col-12 row no-margin no-padding">
          <p class="detail pt-2 pl-3 pb-1 col-6">Total Pembayaran</p>
          <p class="detail-price-total pt-2 pl-3 pb-1 col-6">Rp
            {{formatPrice(price)}}
          </p>
        </div>
      </div>
    </div>
    <div class="bottom-navigation col-12 no-padding">
      <div class="row no-margin no-padding">
        <div class="col-7 no-padding pl-3">
          <p class="no-margin jumlah-total-text">Jumlah Total</p>
          <p class="price">Rp{{formatPrice(price)}}</p>
        </div>
        <div class="col-5 no-padding right">
          <button @click="confirmProduct" class="btn-checkout"
          :disabled="addressIsEmpty">Lanjut</button>
        </div>
      </div>
    </div>
    <div class="overlay-loading d-flex align-items-center"
    :class="{hide: !isLoading}">
      <b-spinner
      variant="primary"
      type="grow"
      class="ml-auto mr-auto spinner"
      ></b-spinner>
    </div>
    <b-modal id="modal-sm" size="sm" centered
    body-class="mod-bod"
    title="Pilih Lokasi"  @ok="confirmLocation">
        <p class="address-text2"
        :class="{'bg-active': this.isChoosen[0]}"
        @click="changeLocation(0)">
          <span class="color-gray">1. Jl. Juadi No.29, Kotabaru, Kec.
          Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55224</span>
          <font-awesome-icon icon="check-circle" class="dp-none"
          :class="{choosen: this.isChoosen[0]}"/>
        </p>
        <hr>
        <p class="address-text2"
        @click="changeLocation(1)"
        :class="{'bg-active': this.isChoosen[1]}"
        >
          <span class="color-gray">2. Jl. Juadi No.29, Kotabaru, Kec.
          Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55224</span>
          <font-awesome-icon icon="check-circle" class="dp-none"
          :class="{choosen: this.isChoosen[1]}"/>
        </p>
        <hr>
        <p class="address-text2"
        :class="{'bg-active': this.isChoosen[2]}"
        @click="changeLocation(2)">
          <span class="color-gray">3. Jl. Juadi No.29, Kotabaru, Kec.
          Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55224</span>
          <font-awesome-icon icon="check-circle" class="dp-none"
          :class="{choosen: this.isChoosen[2]}"/>
        </p>
    </b-modal>
  </div>
</template>

<script>
import ConfirmHeader from '@/components/ConfirmHeader.vue';
import axios from 'axios';
import Cookie from 'vue-cookie';

export default {
  components: {
    ConfirmHeader,
  },
  data() {
    return {
      isLoading: false,
      isDelivery: false,
      isChoosen: [
        true,
        false,
        false,
      ],
      product: [
        {
          stockForm: {
            productDataForm: {
              productImagePaths: [
                'ds',
              ],
            },
          },
        },
      ],
      methode: 'SELF_SERVICE',
      cartId: '',
      price: 0,
      productList: [],
      user: '',
      addressIsEmpty: false,
    };
  },
  async created() {
    await this.getFirstData();
    await this.checkUser();
    this.changeMethod();
  },
  methods: {
    async getFirstData() {
      if (localStorage.length === 0) {
        this.$router.replace('/');
      }
      this.product = JSON.parse(localStorage.getItem('data'));
      this.cartId = JSON.parse(localStorage.getItem('cartId'));

      await this.product.forEach((data) => {
        this.productList.push(data.stockForm.stockId);
        this.price += data.amount * data.stockForm.productPrice;
      });
    },
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
        .then((res) => {
          this.user = res.data.data;
          console.log(this.user);
        })
        .catch(() => {
          this.$router.replace('/');
        });
    },
    confirmProduct() {
      // add logic checkout here
      this.isLoading = true;
      const confirm = {
        cartId: this.cartId,
        deliveryType: this.methode,
        productStockIdList: this.productList,
        shopId: this.product[0].stockForm.shopForm.shopId,
      };
      const dataToken = Cookie.get('dataToken');
      axios.post(`http://localhost:${this.port}/experience/api/order`, confirm,
        {
          headers:
            {
              Authorization: `Bearer ${dataToken}`,
            },
        })
        .then((res) => {
          localStorage.clear();
          setTimeout(() => this.$router.push(`/pay/${res.data.data.orderId}`), 1000);
        })
        .catch(() => {
          this.$router.replace('/');
        });
    },
    confirmLocation() {
      console.log('ok');
    },
    changeMethod() {
      if (this.methode === 'SELF_SERVICE') {
        this.isDelivery = true;
        // if (this.methode === 'SELF_SERVICE') {
        //   this.price -= 13000;
        // }
      } else {
        this.isDelivery = false;
        if (this.user.userAddressForms === null) {
          console.log('sad');
          this.addressIsEmpty = true;
        } else {
          this.addressIsEmpty = false;
        }
        // if (this.methode !== 'SELF_SERVICE') {
        //   this.price += 13000;
        // }
      }
    },
    changeLocation(idx) {
      this.isChoosen.splice(idx, 1, true);
      for (let i = 0; i < this.isChoosen.length; i += 1) {
        if (i !== idx) {
          this.isChoosen.splice(i, 1, false);
        }
      }
    },
    formatPrice(value) {
      const val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    getImage(imagePath) {
      const path = imagePath.split('/');
      return `/assets/resources/uploads/productPhoto/${path[path.length - 1]}`;
    },
  },
};
</script>

<style scoped>
.bottom-navigation{
  position: fixed;
  bottom: 0;
  background-color: white;
  box-shadow: 0px 0px 13px -9px rgba(0, 0, 0, 1);
}

.hideSection{
  display: none;
}

.mb-cst{
  margin-bottom: 75px;
}

.fs-red{
  font-size: 12px;
  color: red;
}

.mod-bod{
  padding: 0px!important;
}

.jumlah-total-text{
  font-size: 14px;
  color: #5D5D5D;
}

.address-label{
  color: #737373;
  font-size: 14px;
}

.change-label{
  color: rgb(0, 157, 255);
  font-size: 12px;
}

.dp-none{
  display: none;
}

.btn-checkout{
  margin: 7px;
  margin-right: 17px;
  width: 117px;
  height: 40px;
  font-size: 14px;
  color: white;
  background-color: #FD8218;
  border: none;
  border-radius: 7px;
  display: block;
  float: right;
  transition: all 0.7s;
}

.hide{
  display: none!important;
}

.spinner{
  width: 50px;
  height: 50px;
}

.choosen{
  color: rgb(0, 149, 255);
  float: right;
  top: 0;
  right: 20px;
  display: block;
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

.btn-checkout:hover {
  background: #e86c00 radial-gradient(circle, transparent 1%, #e86c00 1%)
    center/15000%;
  color: white;
}

.blue{
  color:rgb(0, 149, 255)!important;
}

.btn-checkout:active {
  background-color: #ff973b;
  background-size: 100%;
  transition: background 0s;
}

.right{
  text-align: right;
}

.detail{
  font-size: 13px;
}

.no-padding{
  padding: 0px;
}

.detail-price-total{
  font-size: 13px;
  text-align: right;
}

.no-margin{
  margin: 0px;
}

.price{
  color: #FF7600;
  font-size: 20px;
}

.price-product{
  text-align: right;
  margin-top: 20px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #7c7c7c;
}

.rincian-label{
  margin-top: 15px;
  margin-left: 15px;
  color: #737373;
}

.total-product{
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #7c7c7c;
}

.img-product{
  width: 90px;
  margin-top: 15px;
  margin-bottom: 15px;
}

.product-name{
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #7c7c7c;
  margin-top: 5px;
}

.border-bottom{
  border-bottom: 1px solid rgba(138, 138, 138, 0.333);
}

.cst-card {
  box-shadow: 0px 0px 13px -9px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  padding: 0px;
  margin-top: 7px;
  border: 1px solid rgba(0, 0, 0, 0.061);
}

.name-text{
  font-size: 14px;
  font-weight: 600;
}

.color-gray{
  color: #737373;
  font-size: 500;
}

.address-text{
  font-size: 14px;
  font-weight: 600;
  text-align: justify;
}

.address-text2{
  font-size: 14px;
  font-weight: 600;
}

p{
  margin-bottom: 5px;
}
</style>
