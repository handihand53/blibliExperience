<template>
  <div>
    <PaymentHeader/>
    <div class="pl-3 pt-2">
      <p>Pilih Metode Pembayaran</p>
    </div>
    <div class="pl-2 pr-2 pb-2">
      <div class="custom-card">
        <div class="border-bottom pr-3 pt-2 pb-3" :class="{'bg-color': !isVirtual}">
          <label class="container no-padding mt-1" @click="activePay('VA')">
            <input type="radio" checked="checked" name="radio" id="va">
            <span class="checkmark"></span>
          </label>
          <label for="va">Transfer via Virtual Account</label>
          <div class="ml-5 pt-1" :class="{'none': isVirtual}">
            <p class="label-text">Pilih Bank</p>
            <select name="" id="" class="form-control mt-1 mb-1">
              <option hidden selected disabled>--- Pilih Bank ---</option>
              <option value="">BNI</option>
              <option value="">BCA</option>
              <option value="">Panin Bank</option>
            </select>
            <p class="mb-2 mt-2 label-text">Ketentuan :</p>
            <p class="deskripsi-text">Pilih metode pembayaran ini untuk melakukan
              pembayaran dengan ATM BNI / Mobile Banking BNI / Internet Banking BNI.
            Setelah Anda bayar, pesanan Anda akan langsung diproses.</p>
          </div>
        </div>
        <div class="pt-2 pb-2 border-bottom pr-3" :class="{'bg-color-mid': !isDebit}">
          <label class="container no-padding mt-1" @click="activePay('debit')">
            <input type="radio" name="radio" id="kartuDebit">
            <span class="checkmark"></span>
          </label>
          <label for="kartuDebit">Kartu Debit</label>
           <div class="ml-5 pt-1" :class="{'none': isDebit}">
            <p class="label-text">Pilih Kartu</p>
            <select name="" id="" class="form-control mt-1 mb-1">
              <option hidden selected disabled>--- Pilih Opsi Pembayaran---</option>
              <option value="">Kartu Debit BNI</option>
              <option value="">Kartu Debit BCA</option>
              <option value="">Kartu Debit Bank</option>
              <option value="">Kartu Debit Danamon</option>
              <option value="">Kartu OCBC Nisp</option>
              <option value="">Kartu Mega Debit</option>
              <option value="">Kartu CIMB</option>
            </select>
           <img src="@/assets/icon/prima.jpg" alt="" class="mini-icon">
           <img src="@/assets/icon/logo_bank_danamon.png" alt="" class="mini-icon">
           <img src="@/assets/icon/mandiripng.png" alt="" class="mini-icon">
           <img src="@/assets/icon/Jenius-logo.png" alt="" class="mini-icon">
          </div>
        </div>
        <div class="pt-2 pb-2 border-bottom pr-3" :class="{'bg-color-mid': !isGerai}">
          <label class="container no-padding mt-1" @click="activePay('gerai')">
            <input type="radio" name="radio" id="gerai">
            <span class="checkmark"></span>
          </label>
          <label for="gerai">Bayar digerai</label>
          <p class="ml-5 desc-detail-pay">Alfa Group / Indomaret / Pos Indonesia</p>
           <div class="ml-5 pt-1" :class="{'none': isGerai}">
            <p class="label-text">Pilih Kartu</p>
            <select name="" id="" class="form-control mt-1 mb-1">
              <option hidden selected disabled>--- Pilih Opsi Pembayaran ---</option>
              <option value="">Alfamart</option>
              <option value="">Indomaret</option>
              <option value="">Pos Indonesia</option>
            </select>
           <img src="@/assets/icon/alfamart.png" alt="" class="mini-icon">
           <img src="@/assets/icon/Indomaret.png" alt="" class="mini-icon">
           <img src="@/assets/icon/posindo.png" alt="" class="mini-icon">
          </div>
        </div>
        <div class="pt-2 pb-2 pr-3" :class="{'bg-color-bot': !isElektronik}">
          <label class="container no-padding mt-1" @click="activePay('elektronik')">
            <input type="radio" name="radio" id="elektronik">
            <span class="checkmark"></span>
          </label>
          <label for="elektronik">Uang Elektronik</label>
          <p class="ml-5 desc-detail-pay">Link aja, Sakuku, Ovo, Gopay</p>
          <div class="ml-5 pt-1" :class="{'none': isElektronik}">
            <p class="label-text">Pilih Kartu</p>
            <select name="" id="" class="form-control mt-1 mb-1">
              <option hidden selected disabled>--- Pilih Opsi Pembayaran ---</option>
              <option value="">Link aja</option>
              <option value="">Ovo</option>
              <option value="">Sakuku</option>
              <option value="">Gopay</option>
            </select>
           <img src="@/assets/icon/link-aja.png" alt="" class="mini-icon">
           <img src="@/assets/icon/sakuku.png" alt="" class="mini-icon">
           <img src="@/assets/icon/ovo.png" alt="" class="mini-icon">
           <img src="@/assets/icon/gopay.png" alt="" class="mini-icon">
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 border pl-3 pt-3 pb-2" style="margin-bottom: 80px;">
      <p style="color: gray;">Belanja anda dijamin aman</p>
      <img src="@/assets/icon/norton.png" alt="" class="mini-icon">
      <img src="@/assets/icon/visa.png" alt="" class="mini-icon">
      <img src="@/assets/icon/mastercard securecode logo.png" alt="" class="mini-icon">
    </div>
    <div class="bottom-navigation col-12 no-padding">
      <div class="row no-margin no-padding">
        <div class="col-7 no-padding pl-3">
          <p class="no-margin jumlah-total-text">Jumlah Total</p>
          <p class="price">Rp3.000</p>
        </div>
        <div class="col-5 no-padding right" style="padding: 0;">
          <button class="btn-checkout">Lanjut</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaymentHeader from '@/components/PaymentHeader.vue';

export default {
  components: {
    PaymentHeader,
  },
  data() {
    return {
      isGerai: true,
      isElektronik: true,
      isDebit: true,
      isVirtual: false,
    };
  },
  methods: {
    activePay(str) {
      if (str === 'VA') {
        this.isVirtual = false;
        this.isGerai = true;
        this.isElektronik = true;
        this.isDebit = true;
      } else if (str === 'debit') {
        this.isVirtual = true;
        this.isGerai = true;
        this.isElektronik = true;
        this.isDebit = false;
      } else if (str === 'gerai') {
        this.isVirtual = true;
        this.isGerai = false;
        this.isElektronik = true;
        this.isDebit = true;
      } else if (str === 'elektronik') {
        this.isVirtual = true;
        this.isGerai = true;
        this.isElektronik = false;
        this.isDebit = true;
      }
    },
  },
};
</script>

<style scoped>
.right{
  text-align: right;
}

.none{
  display: none;
}

.detail{
  font-size: 13px;
}

.price{
  color: #FF7600;
  font-size: 20px;
}

.jumlah-total-text{
  font-size: 14px;
  color: #5D5D5D;
}

.bottom-navigation{
  position: fixed;
  bottom: 0;
  background-color: white;
  box-shadow: 0px 0px 13px -9px rgba(0, 0, 0, 1);
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

.label-text{
  font-size: 14px;
}

label{
  margin-bottom: 0;
}

.desc-detail-pay{
  font-size: 12px;
  color: #A8A8A8;
}

.bg-color{
  border-top: 0.5px rgb(159, 159, 159) solid;
  background-color: rgb(233, 233, 233);
  border-radius: 10px 10px 0 0;
  border-bottom: 0.5px solid rgb(159, 159, 159);
}

.bg-color-mid{
  background-color: rgb(233, 233, 233);
}

.bg-color-bot{
  border-bottom: 1px transparent solid;
  background-color: rgb(233, 233, 233);
  border-radius: 0 0 10px 10px;
  border-bottom: 0.5px solid rgb(159, 159, 159);
}

.mini-icon{
  width: 50px;
  margin: 5px;
}

p{
  margin-bottom: 0px;
}

.deskripsi-text{
  font-size: 12px;
}

.custom-card{
  border-radius: 10px;
  padding: 0px;
  border: 0.5px solid rgb(159, 159, 159);
}

/* The container */
.container {
  width: 5px;
  display: inline;
  position: relative;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 15px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-left: 15px;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: #eee;
  border-radius: 50%;
  border: 1.5px #2196F3 solid;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: rgb(255, 255, 255);
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
   /* background-color: #2196F3; */
  border: 1.5px #2196F3 solid;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 3.8px;
  left: 3.7px;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background: #2196F3;
}

</style>
