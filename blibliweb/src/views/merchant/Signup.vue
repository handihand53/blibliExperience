<template>
  <div>
    <DaftarPenjualHeader/>
    <component :is="currentComponent"></component>
    <Footer/>
  </div>
</template>

<script>
import DaftarPenjualHeader from '@/components/DaftarPenjualHeader.vue';
// import MerchantSignUpStep1 from '@/components/MerchantSignUp-1.vue';
import MerchantSignUpStep2 from '@/components/MerchantSignUp-2.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    // MerchantSignUpStep1,
    MerchantSignUpStep2,
    DaftarPenjualHeader,
    Footer,
  },
  data() {
    return {
      currentComponent: MerchantSignUpStep2,
    };
  },
};
</script>

<style>

</style>
