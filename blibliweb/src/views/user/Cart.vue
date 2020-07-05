<template>
  <div>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pretty-checkbox@3.0/dist/pretty-checkbox.min.css">
    <PlainHeader />
    <div class='p-3'>
      <div class='row no-padding no-margin cst-card p-2'>
        <label class="container col-1 no-padding">
          <input type="checkbox" checked="checked" ref="maincheckbox" @click="checkAll">
          <span class="checkmark"></span>
        </label>
        <label>Pilih Semua Produk</label>
      </div>
      <!--  -->
      <div class='cst-card'>
        <div class='row no-padding no-margin border-bottom pb-2'>
          <label class="container col-1 no-padding">
            <input type="checkbox" checked="checked" class="check" id="toko1"
            @click="checkToko('toko1')">
            <span class="checkmark"></span>
          </label>
          <label>Nama Toko</label>
        </div>
        <div class='row no-padding no-margin'>
          <!--  -->
          <div class='col-12 no-margin no-padding row mt-3 border-bottom'>
            <label class="container col-1" style="padding: 0px!important; margin: 0px!important;">
              <input type="checkbox" checked="checked" class="check toko1"
              @click="checkItem('toko1')">
              <span class="checkmark"></span>
            </label>
            <div class='col-11 row no-margin no-padding mb-2'>
              <div class='col-4 no-padding'>
                <img src='@/assets/etc/aqua.png' alt />
              </div>
              <div class='col-8 no-padding'>
                <p class='title-product'>Botol Minum Aqua Mineral 300Ml</p>
                <p class='product-price'>Rp.3.000</p>
                <p class="location">Bliblimart A</p>
                <p class="total-product">Jumlah</p>
                <div class="col-12 row no-margin no-padding">
                  <div class="no-margin no-padding col-8">
                    <button @click="minAmount(0)"
                    class="stock-btn">-</button>
                    <span class="stock-product">{{ this.amount[0] }}</span>
                    <button @click="addAmount(0)"
                    class="stock-btn">+</button>
                  </div>
                  <div class="col-4 no-margin no-padding p-1">
                      <font-awesome-icon
                      class="float-right f-icon mt-auto mb-auto"
                      icon="trash"/>
                      <font-awesome-icon
                      class="float-right f-icon mt-auto mb-auto"
                      icon="heart"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='col-12 no-margin no-padding row mt-3 border-bottom'>
            <label class="container col-1" style="padding: 0px!important; margin: 0px!important;">
              <input type="checkbox" checked="checked" class="check toko1"
              @click="checkItem('toko1')">
              <span class="checkmark"></span>
            </label>
            <div class='col-11 row no-margin no-padding mb-2'>
              <div class='col-4 no-padding'>
                <img src='@/assets/etc/aqua.png' alt />
              </div>
              <div class='col-8 no-padding'>
                <p class='title-product'>Botol Minum Aqua Mineral 300Ml</p>
                <p class='product-price'>Rp.3.000</p>
                <p class="location">Bliblimart A</p>
                <p class="total-product">Jumlah</p>
                <div class="col-12 row no-margin no-padding">
                  <div class="no-margin no-padding col-8">
                    <button class="stock-btn"
                    @click="minAmount(1)">-</button>
                    <span class="stock-product">{{ this.amount[1] }}</span>
                    <button class="stock-btn"
                    @click="addAmount(1)">+</button>
                  </div>
                  <div class="col-4 no-margin no-padding p-1">
                      <font-awesome-icon
                      class="float-right f-icon mt-auto mb-auto"
                      icon="trash"/>
                      <font-awesome-icon
                      class="float-right f-icon mt-auto mb-auto"
                      icon="heart"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
        </div>
      </div>
      <!-- HAPUS NANTI -->
      <div class='cst-card'>
        <div class='row no-padding no-margin border-bottom pb-2'>
          <label class="container col-1 no-padding">
            <input type="checkbox" checked="checked" class="check" id="toko2"
            @click="checkToko('toko2')">
            <span class="checkmark"></span>
          </label>
          <label>Nama Toko</label>
        </div>
        <div class='row no-padding no-margin'>
          <!--  -->
          <div class='col-12 no-margin no-padding row mt-3 border-bottom'>
            <label class="container col-1" style="padding: 0px!important; margin: 0px!important;">
              <input type="checkbox" checked="checked" class="check toko2"
              @click="checkItem('toko2')">
              <span class="checkmark"></span>
            </label>
            <div class='col-11 row no-margin no-padding mb-2'>
              <div class='col-4 no-padding'>
                <img src='@/assets/etc/aqua.png' alt />
              </div>
              <div class='col-8 no-padding'>
                <p class='title-product'>Botol Minum Aqua Mineral 300Ml</p>
                <p class='product-price'>Rp.3.000</p>
                <p class="location">Bliblimart A</p>
                <p class="total-product">Jumlah</p>
                <div class="col-12 row no-margin no-padding">
                  <div class="no-margin no-padding col-8">
                    <button class="stock-btn"
                    @click="minAmount(2)">-</button>
                    <span class="stock-product">{{ this.amount[2] }}</span>
                    <button class="stock-btn"
                    @click="addAmount(2)">+</button>
                  </div>
                  <div class="col-4 no-margin no-padding p-1">
                      <font-awesome-icon
                      class="float-right f-icon mt-auto mb-auto"
                      icon="trash"/>
                      <font-awesome-icon
                      class="float-right f-icon mt-auto mb-auto"
                      icon="heart"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='col-12 no-margin no-padding row mt-3 border-bottom'>
            <label class="container col-1" style="padding: 0px!important; margin: 0px!important;">
              <input type="checkbox" checked="checked" class="check toko2"
              @click="checkItem('toko2')">
              <span class="checkmark"></span>
            </label>
            <div class='col-11 row no-margin no-padding mb-2'>
              <div class='col-4 no-padding'>
                <img src='@/assets/etc/aqua.png' alt />
              </div>
              <div class='col-8 no-padding'>
                <p class='title-product'>Botol Minum Aqua Mineral 300Ml</p>
                <p class='product-price'>Rp.3.000</p>
                <p class="location">Bliblimart A</p>
                <p class="total-product">Jumlah</p>
                <div class="col-12 row no-margin no-padding">
                  <div class="no-margin no-padding col-8">
                    <button @click="minAmount(3)"
                    class="stock-btn">-</button>
                    <span class="stock-product">{{ this.amount[3] }}</span>
                    <button @click="addAmount(3)"
                    class="stock-btn">+</button>
                  </div>
                  <div class="col-4 no-margin no-padding p-1">
                      <font-awesome-icon
                      class="float-right f-icon mt-auto mb-auto"
                      icon="trash"/>
                      <font-awesome-icon
                      class="float-right f-icon mt-auto mb-auto"
                      icon="heart"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
        </div>
      </div>
      <!-- BATAS DUMMY -->
    </div>
    <div class="bottom-navigation p-2 row no-margin">
      <div class="col-6">
        <p class="text-total">Total Belanja(1)</p>
        <p class="text-price">Rp3.000</p>
      </div>
      <div class="col-6 right no-padding">
        <button @click="checkOut" class="btn-checkout">Checkout</button>
      </div>
    </div>
    <Footer />
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

export default {
  name: 'Cart',
  components: {
    PlainHeader,
    Footer,
  },
  data() {
    return {
      isLoading: false,
      amount: [
        1,
        1,
        1,
        1,
      ],
    };
  },
  created() {
    this.scrollToTop();
  },
  methods: {
    checkAll() {
      for (let i = 0; i < document.getElementsByClassName('check').length; i += 1) {
        document.getElementsByClassName('check')[i].checked = this.$refs.maincheckbox.checked;
      }
    },
    checkToko(shop) {
      for (let i = 0; i < document.getElementsByClassName(shop).length; i += 1) {
        document.getElementsByClassName(shop)[i].checked = document.getElementById(shop).checked;
      }
    },
    checkItem(shop) {
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
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    checkOut() {
      // add logic checkout here
      this.isLoading = true;
      setTimeout(() => this.$router.push('/confirm'), 1000);
    },
    addAmount(idx) {
      // add logic change amount here
      this.amount.splice(idx, 1, this.amount[idx] += 1);
    },
    minAmount(idx) {
      // add logic change amount here
      if (this.amount[idx] - 1 > 0) {
        this.amount.splice(idx, 1, this.amount[idx] -= 1);
      }
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
    border: #D1D1D1 1.3px solid;
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
