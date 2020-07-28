<template>
  <div>
    <div>
      <qrcode-drop-zone @decode="onDecode" @init="logErrors">
      <qrcode-stream @decode="onDecode" @init="onInit" />
      </qrcode-drop-zone>
      <qrcode-capture v-if="noStreamApiSupport" @decode="onDecode" />
    </div>
  </div>
</template>

<script>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader';
import axios from 'axios';

export default {
  components: { QrcodeStream, QrcodeDropZone, QrcodeCapture },
  data() {
    return {
      result: '',
      noStreamApiSupport: false,
      shopId: this.$attrs.id,
      error: '',
    };
  },
  methods: {
    async getProduct() {
      await axios.get(`http://localhost:${this.port}/experience/api/products/barcode?shopId=${this.shopId}&productBarcode=${this.result}`)
        .then(() => {
          this.$router.push(`/detail-scan/${this.shopId}/${this.result}`);
        });
    },
    onDecode(result) {
      this.result = result;
      this.getProduct();
    },
    logErrors(promise) {
      this.error = promise;
    },
    async onInit(promise) {
      try {
        await promise;
      } catch (error) {
        if (error.name === 'StreamApiNotSupportedError') {
          this.noStreamApiSupport = true;
        }
      }
    },
  },
};
</script>

<style scoped>
.error {
  font-weight: bold;
  color: red;
}

.validation-success,
.validation-failure,
.validation-pending {
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, .8);
  text-align: center;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 10px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
.validation-success {
  color: green;
}
.validation-failure {
  color: red;
}
</style>
