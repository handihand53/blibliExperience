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
      currentComponent: MerchantSignUpStep3,
    };
  },
  watch: {
    $route() {
      if (this.$route.params.steps === 'langkah-2' && this.tahap1) {
        this.currentComponent = MerchantSignUpStep2;
        console.log('a');
      } else if (this.$route.params.steps === 'langkah-1') {
        this.currentComponent = MerchantSignUpStep1;
        console.log('b');
      } else if (!this.tahap1) {
        console.log(this.tahap1);
        this.$router.push('langkah-1');
        console.log('c');
      }
      console.log(this.tahap1);
      console.log(this.$route.params.steps);
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
