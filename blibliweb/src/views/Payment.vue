<template>
  <div>
    <PaymentHeader/>
    <div class="pl-3 pt-2">
      <p>Pilih Metode Pembayaran</p>
    </div>
    <div class="pl-2 pr-2 pb-2">
      <div class="custom-card">
        <div class="border-bottom bg-color pr-3 pt-2 pb-3">
          <label class="container no-padding mt-1">
            <input type="radio" checked="checked" name="radio">
            <span class="checkmark"></span>
          </label>
          Transfer via Virtual Account
          <div class="ml-5 pt-1">
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
        <div class="pt-2 pb-2 border-bottom">
          <label class="container no-padding mt-1">
            <input type="radio" name="radio">
            <span class="checkmark"></span>
          </label>
          Kartu Debit
        </div>
        <div class="pt-2 pb-2 border-bottom">
          <label class="container no-padding mt-1">
            <input type="radio" name="radio">
            <span class="checkmark"></span>
          </label>
          Bayar digerai
          <p class="ml-5 desc-detail-pay">Alfa Group / Indomaret / Pos Indonesia</p>
        </div>
        <div class="pt-2 pb-2">
          <label class="container no-padding mt-1">
            <input type="radio" name="radio">
            <span class="checkmark"></span>
          </label>
          Uang Elektronik
          <p class="ml-5 desc-detail-pay">Link aja, Sakuku, Ovo, Gopay</p>
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
};
</script>

<style scoped>
.label-text{
  font-size: 14px;
}

.desc-detail-pay{
  font-size: 12px;
  color: #A8A8A8;
}

.bg-color{
  background-color: rgb(233, 233, 233);
  border-radius: 10px 10px 0 0;
  border-bottom: 0.5px solid rgb(159, 159, 159);
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
