<template>
  <div>
    <HeaderWithCart/>
    <component :is="currentComponent"></component>
    <div class="fixed-white">
     <div class="row p-0 m-0 d-flex align-items-center mt-1
      shadow p-2">
        <font-awesome-icon
        class="m-2"
        @click="filterPage = false"
        icon="chevron-left"/>
        <p class="font-weight-bold m-auto">Scanner</p>
      </div>
      <div class="p-2">
        <p class="p-0 m-0 my-2">Pilih lokasi</p>
        <b-form-select v-model="selected" :options="options"></b-form-select>
        <p class="p-0 m-0 my-2">Pilih metode scan</p>
        <b-button block variant="primary">Scan Barcode</b-button>
        <b-button block variant="primary">Scan QrCode</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderWithCart from '@/components/HeaderWithCart.vue';
import Barcode from '@/components/Barcode.vue';
import Qrcode from '@/components/Qrcode.vue';

export default {
  components: {
    HeaderWithCart,
    Barcode,
    Qrcode,
  },
  data() {
    return {
      currentComponent: null,
    };
  },
};
</script>

<style scoped>
.fixed-white{
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: white;
  top: 0;
  left: 0;
}
</style>
