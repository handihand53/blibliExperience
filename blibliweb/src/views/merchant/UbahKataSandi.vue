<template>
  <div class="bg-gray">
    <PlainHeaderMarket/>
    <div class="text-center pt-4 column">
      <img src="@/assets/logo/signature.png" alt="" class="profile-logo">
      <h5 class="mt-2 mb-0">Fu Store</h5>
      <p class="mb-0">Market</p>
      <small>Sejak Nov 2010</small>
    </div>
    <div class="pl-3 pr-3">
      <label for="sandiLama">Kata Sandi Lama<span class="red">*</span></label>
      <b-form-input type="password" class="form-control" id="sandiLama"
      placeholder="Kata Sandi Lama"
      v-model="sandiLama" trim @change="checkAll"></b-form-input>
      <label for="sandiBaru">Kata Sandi Baru<span class="red">*</span></label>
      <b-form-input type="password" class="form-control" id="sandiBaru"
      placeholder="Kata Sandi Baru"
      v-model="sandiBaru" trim @change="checkAll"></b-form-input>
      <label for="konfSandiBaru">Konfirmasi Kata Sandi Baru<span class="red">*</span></label>
      <b-form-input type="password" class="form-control" id="konfSandiBaru"
      placeholder="Konfirmasi Kata Sandi Baru"
      v-model="konfSandiBaru" trim @change="checkAll"></b-form-input>
    </div>
    <div class="row no-gutters mt-3 pl-3 pr-3 d-flex align-items-center">
      <button class="col-12 save-btn">Simpan</button>
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
  data() {
    return {
      sandiLama: '',
      sandiBaru: '',
      konfSandiBaru: '',
    };
  },
  methods: {
    checkAll() {
    },
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

.back{
  font-size: 12px;
}

.save-btn{
  background-color: #0095DA;
  color: white!important;
  border: none;
  padding: 5px;
}

.red{
  color: red;
}

label{
  font-size: 14px;
  margin-top: 15px;
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
