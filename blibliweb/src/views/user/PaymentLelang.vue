<template>
  <div>
    <PaymentHeader/>
    <div class="pl-3 pt-2">
      <p>Pilih Metode Pembayaran</p>
    </div>
    <div class="pl-2 pr-2 pb-2">
      <div class="custom-card">
        <div class="border-bottom pr-3 pt-2 pb-3" :class="{'bg-color': !isVirtual}">
          <label class="container no-padding mt-1" @click="activePay('VA')" id='VA'>
            <input type="radio" checked="checked" name="radio" id="va">
            <span class="checkmark"></span>
          </label>
          <label for="va">Transfer via Virtual Account</label>
          <div class="ml-5 pt-1" :class="{'none': isVirtual}">
            <p class="label-text">Pilih Bank</p>
            <select v-model="bank" class="form-control mt-1 mb-1">
              <option hidden selected disabled>--- Pilih Bank ---</option>
              <option value="BANK_TRANSFER_BNI">BNI</option>
              <option value="BANK_TRANSFER_BCA">BCA</option>
              <option value="BANK_TRANSFER_MANDIRI">MANDIRI</option>
            </select>
            <p class="mb-2 mt-2 label-text">Ketentuan :</p>
            <p class="deskripsi-text">Pilih metode pembayaran ini untuk melakukan
              pembayaran dengan ATM BNI / Mobile Banking BNI / Internet Banking BNI.
            Setelah Anda bayar, pesanan Anda akan langsung diproses.</p>
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
            <p class="label-text">Pilih gerai pembayaran</p>
            <select v-model="bank" class="form-control mt-1 mb-1">
              <option hidden selected disabled>--- Pilih Opsi Pembayaran ---</option>
              <option value="ALFAMART">Alfamart</option>
              <option value="INDOMART">Indomaret</option>
              <option value="POS_INDONESIA">Pos Indonesia</option>
            </select>
           <img src="@/assets/icon/alfamart.png" alt="" class="mini-icon">
           <img src="@/assets/icon/Indomaret.png" alt="" class="mini-icon">
           <img src="@/assets/icon/posindo.png" alt="" class="mini-icon">
          </div>
        </div>
        <div class="pt-2 pb-2 pr-3" :class="{'bg-color-bot': !isElektronik}">
          <label class="container no-padding mt-1" @click="activePay('elektronik')"
          id="elektronik">
            <input type="radio" name="radio" id="elektronik">
            <span class="checkmark"></span>
          </label>
          <label for="elektronik">Uang Elektronik</label>
          <p class="ml-5 desc-detail-pay">Link aja, Sakuku, Ovo, Gopay</p>
          <div class="ml-5 pt-1" :class="{'none': isElektronik}">
            <p class="label-text">Pilih jenis uang elektronik</p>
            <select v-model="bank" class="form-control mt-1 mb-1">
              <option hidden selected disabled>--- Pilih Opsi Pembayaran ---</option>
              <option value="LINK_AJA">Link aja</option>
              <option value="OVO">Ovo</option>
              <option value="GOPAY">Gopay</option>
            </select>
           <img src="@/assets/icon/link-aja.png" alt="" class="mini-icon">
           <img src="@/assets/icon/ovo.png" alt="" class="mini-icon">
           <img src="@/assets/icon/gopay.png" alt="" class="mini-icon">
          </div>
        </div>
      </div>
    </div>
    <div class="px-2 hint" v-if="isBank">
      Pilih metode pembayaran!
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
          <p class="price">Rp{{formatPrice(amount)}}</p>
        </div>
        <div class="col-5 no-padding right" style="padding: 0;">
          <button @click="pay" class="btn-checkout">Lanjut</button>
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
  </div>
</template>

<script>
import PaymentHeader from '@/components/PaymentHeader.vue';
import axios from 'axios';
import Cookie from 'vue-cookie';

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
      isLoading: false,
      bank: '',
      amount: 0,
      isBank: false,
    };
  },
  async created() {
    await this.checkUser();
    this.getDetailPengajuan();
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
    pay() {
      // add logic checkout here
      if (this.bank !== '') {
        const pay = {
          biddingOrderId: this.$route.params.id,
          paymentType: this.bank,
        };
        const dataToken = Cookie.get('dataToken');
        axios.post(`http://localhost:${this.port}/experience/api/biddingPayment`, pay,
          {
            headers:
              {
                Authorization: `Bearer ${dataToken}`,
              },
          })
          .then(() => {
            this.isLoading = true;
            setTimeout(() => this.$router.replace('/lelang/sukses'), 1000);
          })
          .catch(() => {
            // this.$router.replace('/');
          });
      } else {
        this.isBank = true;
      }
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
        .catch(() => {
          this.$router.replace('/');
        });
    },
    async getDetailPengajuan() {
      const dataToken = Cookie.get('dataToken');
      await axios.get(`http://localhost:${this.port}/experience/api/biddingOrder?biddingOrderId=${this.$route.params.id}`,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .then((res) => {
          this.amount = res.data.data.productBiddingForm.currentPrice;
        })
        .catch(() => {
          this.$router.push('/');
        });
    },
    formatPrice(value) {
      const val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
  },
};
</script>

<style scoped>
.right{
  text-align: right;
}

.hide{
  display: none!important;
}

.spinner{
  width: 50px;
  height: 50px;
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

.hint{
  color: red;
  font-size: 12px;
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
