<template>
  <div>
    <div class="text-center pt-4">
      <img src="@/assets/logo/blibli_logo.png" alt="" class="bli-bli-logo mb-4">
      <h3 class="fw-600">Sedang mencari harta karun ? </h3>
      <img src="@/assets/etc/treasure.png" alt="" class="img mt-3">
      <p class="pl-4 pr-4 pt-2 not-found-text mb-5">Sama seperti harta karun, halaman yang anda cari
        tidak dapat ditemukan.
        Silahkan ketik ulang URL halaman anda atau kembali ke
        <router-link to="/">Homepage</router-link></p>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Footer,
  },
};
</script>

<style scoped>
.img{
  width: 250px;
}

.not-found-text{
  font-size: 12px;
  font-weight: 400;
}

.bli-bli-logo{
  width: 200px;
}

.fw-600{
  font-weight: 500;
  color: rgb(66, 66, 66);
}
</style>
