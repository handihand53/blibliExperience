<template>
  <div>
    <PlainHeaderMarket/>
    <div class="bg-white pl-2 pr-2 pt-2 pb-1">
      <small class="text-gray">Pemberitahuan Pembelian</small>
      <div>
        <small class="text-gray bold mr-3" :class="{active: isActive}"
        @click="pesananMasuk" id="pesananMasuk">Pesanan Masuk</small>
        <small class="text-gray bold" :class="{active: !isActive}"
        @click="riwayat" id="riwayat">Riwayat</small>
      </div>
    </div>
    <component :is="currentComponent"></component>
    <BottomNavMerchant/>
    <Footer/>
  </div>
</template>

<script>
import PlainHeaderMarket from '@/components/PlainHeaderMarket.vue';
import Footer from '@/components/Footer.vue';
import BottomNavMerchant from '@/components/BottomNavMerchant.vue';
import PesananMasukMerchant from '@/components/PesananMasukMerchant.vue';
import RiwayatMerchant from '@/components/RiwayatMerchant.vue';

export default {
  components: {
    PlainHeaderMarket,
    BottomNavMerchant,
    PesananMasukMerchant,
    RiwayatMerchant,
    Footer,
  },
  data() {
    return {
      isActive: true,
      currentComponent: PesananMasukMerchant,
    };
  },
  methods: {
    pesananMasuk() {
      this.isActive = true;
      this.currentComponent = PesananMasukMerchant;
    },
    riwayat() {
      this.isActive = false;
      this.currentComponent = RiwayatMerchant;
    },
  },
};
</script>

<style scoped>
.text-gray{
  color: rgb(121, 121, 121);
}

.bold{
  font-weight: 600;
  font-size: 15px;
}

.active{
  color: #0095DA!important;
  border-bottom: 2px solid #0095DA;
  padding-bottom: 0.25rem;
}

</style>
