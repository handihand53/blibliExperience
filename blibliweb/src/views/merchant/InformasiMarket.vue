<template>
  <div class="bg-gray">
    <PlainHeaderMarket/>
    <div class="text-center pt-4 pb-2 column">
      <img src="@/assets/logo/signature.png" alt="" class="profile-logo">
      <h5 class="mt-2 mb-0">Fu Store</h5>
      <p class="mb-0">Market</p>
      <small>Sejak Nov 2010</small>
    </div>
    <div class="pl-3 pr-3">
      <label for="email">Email Login<span class="red">*</span></label>
      <b-form-input type="email" class="form-control" id="email"
      placeholder="Email"
      v-model="email" trim @change="checkAll"
      disabled></b-form-input>
      <div class="row mt-3 no-gutters">
        <div>
          <label for="hp">Nomor Handphone<span class="red">*</span></label>
        </div>
        <div class="ml-auto">
          <span class="cl-blue fs-12">Ubah Nomor</span>
        </div>
      </div>
      <b-form-input type="number" class="form-control" id="hp"
      placeholder="08212312938712"
      v-model="hp" ref="hp" trim
      disabled></b-form-input>
      <small class="hint-text">Contoh : 08212312938712</small><br>
      <label for="alamat">Alamat<span class="red">*</span></label>
      <b-form-textarea
        id="alamat"
        v-model="alamat"
        placeholder="Alamat anda"
        rows="3"
        max-rows="6"
        trim
        @change="checkAll"
      ></b-form-textarea>
    </div>
    <div class="p-3">
      <b-button class="col-12" variant="outline-primary">Ubah Kata Sandi</b-button>
      <b-button class="col-12 simpan-btn mt-3" variant="warning">Simpan</b-button>
    </div>
    <Footer/>
  </div>
</template>

<script>
import PlainHeaderMarket from '@/components/PlainHeaderMarket.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    PlainHeaderMarket,
    Footer,
  },
};
</script>

<style scoped>
.bg-gray{
  background-color: #F6F6F6;
  height: 100vh;
}

.profile-logo{
  width: 105px;
}

.simpan-btn{
  border-color: rgba(253, 131, 24, 0.449);
  background-color: #FD8218;
  color: white!important;
}

.simpan-btn:active{
  color: white!important;
  border-color: rgba(253, 131, 24, 0.449)!important;
  background-color: rgb(218, 131, 55)!important;
}

.simpan-btn:focus{
  color: white!important;
  border-color: rgba(253, 131, 24, 0.449)!important;
  background-color: rgb(218, 131, 55)!important;
}

.simpan-btn:hover{
  color: white!important;
  border-color: rgba(253, 131, 24, 0.211)!important;
  background-color: rgb(218, 131, 55)!important;
}


.red{
  color: red;
}

label{
  font-size: 14px;
}

.fs-12{
  font-size: 14px;
}

.hint-text{
  font-size: 11px;
  color: #808080;
}

.cl-blue{
  color: #3594FF;
}
</style>
