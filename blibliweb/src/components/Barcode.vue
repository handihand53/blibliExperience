<template>
  <div>
    <div class="m-0 p-0">
      <!-- <div class="flip-h"> -->
        <v-quagga :onDetected="logIt" :readerSize="readerSize"
        :readerTypes="['ean_reader']"></v-quagga>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueQuagga from 'vue-quaggajs';
import axios from 'axios';

Vue.use(VueQuagga);

export default {
  name: 'VueBarcodeTest',
  data() {
    return {
      shopId: this.$attrs.id,
      readerSize: {
        width: 1240,
        height: 480,
      },
      barcode: '',
      detecteds: [],
      detect: false,
    };
  },
  methods: {
    async logIt(data) {
      this.barcode = data.codeResult.code;
      if (!this.detect) {
        this.detect = true;
        await this.getProduct();
      }
    },
    async getProduct() {
      await axios.get(`http://localhost:${this.port}/experience/api/products/barcode?shopId=${this.shopId}&productBarcode=${this.barcode}`)
        .then(() => {
          this.$router.push(`/detail-scan/${this.shopId}/${this.barcode}`);
        })
        .catch(() => {
          this.detect = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.flip-h{
  -moz-transform: scale(-1, 1);
  -webkit-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);
}

/deep/ video{
  width: 100vw!important;
}

/deep/ .drawingBuffer{
  -moz-transform: scale(-1, 1);
  -webkit-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);
  width: 100vw;
  height: 100vh;
}
</style>
