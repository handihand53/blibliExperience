<template>
  <div>
    <DaftarPenjualHeader/>
    <component :is="currentComponent"></component>
    <Footer/>
  </div>
</template>

<script>
// import tahap1 from '@/store/signupDataMerchant.js';
import DaftarPenjualHeader from '@/components/DaftarPenjualHeader.vue';
import MerchantSignUpStep1 from '@/components/MerchantSignUp-1.vue';
import MerchantSignUpStep2 from '@/components/MerchantSignUp-2.vue';
import MerchantSignUpStep3 from '@/components/MerchantSignUp-3.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    MerchantSignUpStep1,
    MerchantSignUpStep2,
    MerchantSignUpStep3,
    DaftarPenjualHeader,
    Footer,
  },
  data() {
    return {
      currentComponent: MerchantSignUpStep1,
    };
  },
  watch: {
    $route() {
      if (this.$route.params.steps === 'langkah-2') {
        this.currentComponent = MerchantSignUpStep2;
      } else if (this.$route.params.steps === 'langkah-3') {
        this.currentComponent = MerchantSignUpStep3;
      } else {
        this.$router.push('langkah-1');
      }
    },
  },
  created() {
    console.log(this.tahap1);
    // if (this.$route.params.steps === 'langkah-2' && this.tahap1) {
    //   this.currentComponent = MerchantSignUpStep2;
    //   console.log('s');
    // }
  },
};
</script>
<style>

</style>
