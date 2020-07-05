<template>
  <div class="bg-grey">
    <HeaderWithCart/>
      <div>
        <p class="pl-2 pr-2 pt-2">Tawarkan Harga</p>
        <div class="row no-margin pt-3 pb-2 bg-white mt-1 border">
          <div class="col-4 no-margin no-padding">
            <img src="@/assets/etc/aqua.png" alt="" class="img-product">
          </div>
          <div class="col-8 no-margin no-padding">
            <p class="title-product">Botol Minum Aqua Mineral 300ML</p>
            <p class="brand-product border-bottom pb-1">Brand: <span class="brand">Aqua</span></p>
            <p class="high-price mt-1">Harga Penawaran Tertinggi:</p>
            <p class="price">Rp13.500.000</p>
            <p class="high-price mt-1">Minimal bid:</p>
            <p class="price">Rp100.000</p>
          </div>
        </div>
      </div>
      <div class="bg-white border mt-2 p-3">
        <p>Form Pengajuan Harga</p>
        <label for="bidnumber" class="label-text">Harga yang ditawarkan<span class="red">*</span>
        </label>
        <input type="number" class="form-control mb-2" step="100000" min="100000" id="bidnumber"
        disabled v-model="this.amount">
        <!-- <label for="bidnumber" class="label-text">Deskripsi<span class="red">*</span>
        </!-->
        <!-- <textarea name="" id="" cols="20" rows="5" class="form-control"></textarea>
        <small class="syarat"><i><span class="red">*</span>
        Pastikan deskripsi barang sesuai dengan kondisi yang diajukan</i></small> -->
        <!-- <br> -->
        <div class="d-flex align-items-center">
          <input type="checkbox" class="checkbox-input mr-2" v-model="check"
          id="sk-check">
          <label for="sk-check" class="snk">Dengan ini saya menyatakan setuju dengan S&K yang
            berlaku di blibli.com
          </label>
        </div>
        <button class="mt-2 btn-ajukan"
        :disabled="!this.check" @click="ajukan">AJUKAN</button>
      </div>
    <Footer/>
  </div>
</template>

<script>
import HeaderWithCart from '@/components/HeaderWithCart.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    HeaderWithCart,
    Footer,
  },
  created() {
  },
  data() {
    return {
      check: false,
      amount: window.localStorage.getItem('price'),
    };
  },
  methods: {
    ajukan() {
      this.$router.push('konfirmasi');
    },
  },
};
</script>

<style scoped>
.syarat{
  font-size: 12px;
  line-height: 2px;
}

.checkbox-input{
  font-size: 50px;
}

.snk{
  font-size: 12px;
  margin: 0;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  height:auto;
}

.btn-ajukan{
    width: 100%;
    background: #FD8218;
    padding-top: 10px;
    padding-bottom: 10px;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: 500;
    transition: all 1s;
    font-size: 18px;
}

.btn-ajukan:hover {
  background: #e86c00 radial-gradient(circle, transparent 1%, #e86c00 1%)
    center/15000%;
  color: white;
}

.btn-ajukan:active {
  background-color: #ff973b;
  background-size: 100%;
  transition: background 0s;
}

.red{
  color: red;
}

.high-price{
  font-size: 12px;
}

.label-text{
  font-size: 12px;
  margin: 0;
}

.bg-white{
  background-color: white;
}

.bg-grey{
  background-color: #F1F1F1;
}

.price{
  color: orange;

font-weight: 600}

p{
    margin: 0;
}

.no-margin{
  margin: 0;
}

.no-padding{
  padding: 0;
}

.img-product{
  width: 100%;;
}


.title-product{
  padding-right: 10px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0px;
}

.desc-product{
  font-size: 12px;
  color: #AEAEAE;
}

.brand-product{
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0px;
}

.brand{
    color: #0088FF;
}
</style>
