<template>
  <div>
    <div>
      <qrcode-drop-zone @decode="onDecode" @init="logErrors">
      <qrcode-stream @decode="onDecode" @init="onInit" />
      </qrcode-drop-zone>
      <qrcode-capture v-if="noStreamApiSupport" @decode="onDecode" />
    </div>
    <b-modal id="modal-sm" size="sm" centered
    v-model="show"
    title="Perhatian !"
    hide-footer>
      <div class="center">
        <img src="/assets/etc/404product.png" alt="" class="img-404">
        <p class="mt-1">Tidak ada produk<br>yang sesuai dengan kode QR</p>
        <b-button variant="primary" class="
        mx-auto
        mt-1"
        @click="show = false">Mengerti</b-button>
      </div>
    </b-modal>
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
      barcode: '',
      show: false,
    };
  },
  methods: {
    async getProduct() {
      await axios.get(`http://localhost:${this.port}/experience/api/products/barcode?shopId=${this.shopId}&productBarcode=${this.barcode}`)
        .then(() => {
          this.$router.push(`/detail-scan/${this.shopId}/${this.barcode}`);
        })
        .catch(() => {
          this.show = true;
        });
    },
    async getProductById() {
      axios.get(`http://localhost:${this.port}/experience/api/products?id=${this.result}`)
        .then((response) => {
          this.barcode = response.data.data.productBarcode;
          this.getProduct();
        })
        .catch(() => {
          this.show = true;
        });
    },
    onDecode(result) {
      this.result = result;
      this.getProductById();
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

.center{
  text-align: center;
}

.img-404{
  width: 50%;
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
