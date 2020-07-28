<template>
  <div>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pretty-checkbox@3.0/dist/pretty-checkbox.min.css">
    <PlainHeader />
    <div class='p-3' v-if="!this.empty">
      <div class='cst-card'>
        <div class='row no-padding no-margin border-bottom pb-2'>
          <label class="container col-1 no-padding">
            <input type="checkbox" checked="checked" class="check" id="toko1"
            @click="checkToko('toko1')">
            <span class="checkmark"></span>
          </label>
          <label>Pilih semua produk</label>
        </div>
        <div class='row no-padding no-margin'>
          <!--  -->
          <div class='col-12 no-margin no-padding row mt-3 border-bottom'
          v-for='(cart, idx) in cartProduct' v-bind:key='cart.stockForm.stockId'>
            <label class="container col-1" style="padding: 0px!important; margin: 0px!important;">
              <input type="checkbox" checked="checked" class="check toko1"
              @click="checkItem('toko1', idx)">
              <span class="checkmark"></span>
            </label>
            <div class='col-11 row no-margin no-padding mb-2'>
              <div class='col-4 no-padding'>
                <img :src='getImage(cart.stockForm.productDataForm.productImagePaths[0])' />
              </div>
              <div class='col-8 no-padding'>
                <p class='title-product'>{{ cart.stockForm.productDataForm.productName }}</p>
                <p class='product-price'>Rp.{{formatPrice(cart.stockForm.productPrice) }}</p>
                <p class="location">{{ cart.stockForm.shopForm.shopName }}</p>
                <p class="total-product">Jumlah</p>
                <div class="col-12 row no-margin no-padding">
                  <div class="no-margin no-padding col-8">
                    <button @click="minAmount(
                      cart.amount, cart.stockForm.stockId,
                      idx, cart.stockForm.productPrice
                      )"
                    class="stock-btn">-</button>
                    <span class="stock-product">{{ cart.amount }}</span>
                    <button @click="addAmount(cart.amount, cart.stockForm.stockId,
                    idx, cart.stockForm.productStock,
                    cart.stockForm.productPrice)"
                    class="stock-btn">+</button>
                  </div>
                  <div class="col-4 no-margin no-padding p-1">
                      <font-awesome-icon
                      class="float-right f-icon mt-auto mb-auto"
                      icon="trash" @click="deleteProduct(cart.stockForm.stockId)"/>
                      <font-awesome-icon
                      class="float-right f-icon mt-auto mb-auto"
                      icon="heart"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-3 text-center" v-else>
      <h4 class="">Upss!</h4>
      <img src="\assets\etc\cartEmpty.jpg" alt=""
      class="img-fluid cart-empty">
      <h4 class="mt-1">Keranjang anda kosong nih!</h4>
      <small>Mau diisi apa lagi ya Keranjang sebesar ini?
        Coba masukkan produk yang sudah kebawa mimpi.</small>
        <br>
        <div class="mt-2">
          <router-link to="/" class="mt-3">Cek mimpimu disini</router-link>
        </div>
    </div>
    <div class="bottom-navigation p-2 row no-margin" v-if="!this.empty">
      <div class="col-6">
        <p class="text-total">Total Belanja({{ length }})</p>
        <p class="text-price">Rp{{ formatPrice(total) }}</p>
      </div>
      <div class="col-6 right no-padding">
        <button @click="checkOut" class="btn-checkout"
        id="checkOut">Checkout</button>
      </div>
    </div>
    <Footer />
    <div class="fixed-alert text-center pl-3 pr-3">
      <b-alert
        :show="dismissCountDown"
        dismissible
        variant="danger"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
      >
        {{alertMsg}}
      </b-alert>
    </div>
    <div class="overlay-loading d-flex align-items-center"
    :class="{hide: !isLoading}">
      <b-spinner
      type="grow"
      variant="primary"
      class="ml-auto mr-auto spinner"
      ></b-spinner>
    </div>
  </div>
</template>

<script>
import PlainHeader from '@/components/PlainHeader.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
import Cookie from 'vue-cookie';

export default {
  name: 'Cart',
  components: {
    PlainHeader,
    Footer,
  },
  data() {
    return {
      isLoading: false,
      amount: [],
      cartProduct: [],
      total: 0,
      price: [],
      length: 0,
      empty: false,
      cartId: '',
      dismissSecs: 2,
      dismissCountDown: 0,
      alertMsg: '',
    };
  },
  created() {
    this.getCart();
    this.scrollToTop();
  },
  methods: {
    getCart() {
      this.amount = [];
      this.price = [];
      this.cartProduct = [];
      this.isLoading = true;
      const dataId = Cookie.get('dataId');
      const dataToken = Cookie.get('dataToken');
      axios.get(`http://localhost:${this.port}/experience/api/carts?userId=${dataId}`,
        {
          headers:
            {
              Authorization: `Bearer ${dataToken}`,
            },
        })
        .then((response) => {
          if (response.data.data.cartForms.length === 0) {
            this.empty = true;
          } else {
            this.empty = false;
            this.cartId = response.data.data.cartId;
            response.data.data.cartForms.forEach((res) => {
              this.amount.push(res.amount);
            });
            this.cartProduct = response.data.data.cartForms;
            this.cartProduct.forEach((res) => {
              this.price.push({
                price: res.stockForm.productPrice * res.amount,
                status: true,
              });
            });
            this.countTotal();
          }
        })
        .catch((er) => {
          if (er.response.status === 500) {
            this.empty = true;
          } else {
            this.$router.replace('/');
          }
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    checkAll() {
      for (let i = 0; i < document.getElementsByClassName('check').length; i += 1) {
        document.getElementsByClassName('check')[i].checked = this.$refs.maincheckbox.checked;
      }
    },
    checkToko(shop) {
      for (let i = 0; i < document.getElementsByClassName(shop).length; i += 1) {
        this.price[i].status = document.getElementById(shop).checked;
        document.getElementsByClassName(shop)[i].checked = document.getElementById(shop).checked;
      }
      this.countTotal();
    },
    checkItem(shop, idx) {
      this.price[idx].status = !this.price[idx].status;
      let xTrue = 0;
      let xFalse = 0;
      for (let i = 0; i < document.getElementsByClassName(shop).length; i += 1) {
        if (document.getElementsByClassName(shop)[i].checked) {
          xTrue += 1;
        } else {
          xFalse += 1;
        }
      }
      if (xTrue === document.getElementsByClassName(shop).length) {
        document.getElementById(shop).checked = true;
      }
      if (xFalse === document.getElementsByClassName(shop).length) {
        document.getElementById(shop).checked = false;
      }
      this.countTotal();
    },
    formatPrice(value) {
      const val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    checkOut() {
      let status = true;
      let match = false;
      let shopId = '';
      // add logic checkout here
      const id = [];
      for (let i = 0; i < this.price.length; i += 1) {
        if (this.price[i].status) {
          if (!match) {
            shopId = this.cartProduct[i].stockForm.shopForm.shopId;
            match = true;
          }

          if (shopId !== this.cartProduct[i].stockForm.shopForm.shopId) {
            status = false;
          }
          id.push(this.cartProduct[i]);
        }
      }

      if (id.length === 0) {
        this.alertMsg = 'Silahkan pilih produk';
        this.dismissCountDown = this.dismissSecs;
      } else if (status) {
        localStorage.setItem('data', JSON.stringify(id));
        localStorage.setItem('cartId', JSON.stringify(this.cartId));
        this.isLoading = true;
        setTimeout(() => this.$router.push('/confirm'), 1000);
      } else {
        this.alertMsg = 'Toko tidak boleh beda';
        this.dismissCountDown = this.dismissSecs;
      }
    },
    getImage(imagePath) {
      const path = imagePath.split('/');
      return `/assets/resources/uploads/productPhoto/${path[path.length - 1]}`;
    },
    addAmount(amt, stockIds, idx, stock, price) {
      // add logic change amount here
      if (amt + 1 <= stock) {
        const request = {
          amount: 1,
          cartId: this.cartId,
          stockId: stockIds,
        };
        const dataToken = Cookie.get('dataToken');
        axios.put(`http://localhost:${this.port}/experience/api/carts/updateAmount`, request,
          {
            headers:
              {
                Authorization: `Bearer ${dataToken}`,
              },
          })
          .then(() => {
            this.getCart();
          });
        this.price[idx].price += price;
        this.countTotal();
      }
    },
    minAmount(amt, stockIds, idx, price) {
      // add logic change amount here
      if (amt - 1 > 0) {
        const request = {
          amount: -1,
          cartId: this.cartId,
          stockId: stockIds,
        };
        const dataToken = Cookie.get('dataToken');
        axios.put(`http://localhost:${this.port}/experience/api/carts/updateAmount`, request,
          {
            headers:
              {
                Authorization: `Bearer ${dataToken}`,
              },
          })
          .then(() => {
            this.getCart();
          });
        this.price[idx].price -= price;
        this.countTotal();
      }
    },
    countTotal() {
      this.total = 0;
      this.length = 0;
      this.price.forEach((data) => {
        if (data.status) {
          this.total += data.price;
          this.length += 1;
        }
      });
    },
    deleteProduct(id) {
      const request = {
        cartId: this.cartId,
        stockId: id,
      };
      const dataToken = Cookie.get('dataToken');
      axios.put(`http://localhost:${this.port}/experience/api/carts/deleteProduct`, request,
        {
          headers:
            {
              Authorization: `Bearer ${dataToken}`,
            },
        })
        .then(() => {
          this.getCart();
        });
    },
    // Untuk notifikasi ketika user menekan 'beli sekarang'
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
  },
};
</script>

<style lang='scss' scoped>
@import '~pretty-checkbox/src/pretty-checkbox.scss';
.f-icon{
    font-size: 15px;
    margin-left: 10px;
    color: #c6c6c6;
}

.f-icon:hover{
    cursor: pointer;
    color: #6f6f6f;
}

.btn-checkout{
  width: 117px;
  height: 40px;
  font-size: 14px;
  color: white;
  background-color: #FD8218;
  border: none;
  border-radius: 7px;
  display: block;
  margin-top: 3px;
  float: right;
  transition: all 0.7s;
}

.btn-checkout:hover {
  background: #e86c00 radial-gradient(circle, transparent 1%, #e86c00 1%)
    center/15000%;
  color: white;
}

.btn-checkout:active {
  background-color: #ff973b;
  background-size: 100%;
  transition: background 0s;
}

.text-total{
  font-size: 12px;
  padding: 0px;
  margin: 0px;
}

.hide{
  display: none!important;
}

.spinner{
  width: 50px;
  height: 50px;
}

.text-price{
  font-size: 18px;
  padding: 0px;
  margin: 0px;
  color: #ff7600;
  font-weight: 600;
}

.fixed-alert{
  z-index: 100;
  position: fixed;
  bottom: 15px;
  margin: 5% auto; /* Will not center vertically and won't work in IE6/7. */
  left: 0;
  right: 0;
}

.cart-empty{
  max-width: 100%!important;
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


.title-product {
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #7c7c7c;
  margin-top: 5px;
  padding: 0px;
  margin-bottom: 0px;
}

.total-product{
  margin-bottom: 0px;
  font-size: 12px;
  color: #808080;
}

.stock-product{
    font-size: 15px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 0px;
    margin-right: 5px;
    margin-left: 5px;
    border-bottom: 1px #808080 solid;
}

.stock-btn{
    font-size: 14px;
    background-color: transparent;
    border-radius: 7px;
    font-weight: 500;
    padding: 2px 9px;
    border: #D1D1D1 1.3px solid!important;
}

.stock-btn:active {
  background-color: #ff973b;
  color: white;
  border-color: transparent;
  background-size: 100%;
  transition: background 0s;
}

.product-price {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #ff7600;
  padding: 0px;
  margin-bottom: 0px;
}

.bottom-navigation{
  position: fixed;
  bottom: 0;
  height: 60px;
  background-color: white;
  width: 100%;
  box-shadow: 0px 0px 13px -7px rgba(0, 0, 0, 0.75);
}

.no-padding {
  padding: 0px;
}

.form-checkbox {
  margin-top: auto;
  margin-bottom: auto;
  font-size: 2px;
  margin-right: 5px;
}

.no-margin-top {
  margin-top: 0px;
}

.no-margin {
  margin: 0px;
}

label {
  margin: 0px;
}

.cst-card {
  box-shadow: 0px 0px 13px -9px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  padding: 0px;
  margin-top: 7px;
  border: 1px solid rgba(0, 0, 0, 0.061);
  padding: 7px;
}

img {
  max-width: 88px;
}

.location{
  font-size: 12px;
  margin-bottom: 0px;
  color: rgb(0, 140, 255);
  font-weight: 600;
}

/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  margin-top: 4px;
  margin-left: 2px;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  margin-top: 4px;
  margin-left: 2px;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 17px;
  width: 17px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
