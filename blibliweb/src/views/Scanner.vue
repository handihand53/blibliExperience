<template>
  <div>
    <div class="m-0 p-0">
      <div class="flip-h">
        <v-quagga :onDetected="logIt" class="col-3 m-0 p-0" :readerSize="readerSize"
        :readerTypes="['ean_reader']"></v-quagga>
      </div>
    </div>
    <!-- <div id="interactive" class="viewport scanner">
      <video autoplay="true" preload="auto" src="" muted="true" playsinline="true"></video>
      <canvas class="drawingBuffer" width="640" height="480"></canvas>
    </div> -->
  </div>
</template>

<script>
import Vue from 'vue';
import VueQuagga from 'vue-quaggajs';

Vue.use(VueQuagga);

export default {
  name: 'VueBarcodeTest',
  data() {
    return {
      readerSize: {
        width: 100,
        height: 100,
      },
      detecteds: [],
    };
  },
  methods: {
    logIt(data) {
      console.log('detected', data);
    },
  },
};
</script>

<style scoped>
.flip-h{
  -moz-transform: scale(-1, 1);
  -webkit-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);
}

.viewport video{
  width: 100vw!important;
  height: 100vh!important;
}

canvas{
  -moz-transform: scale(-1, 1);
  -webkit-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);
  width: 100vw;
  height: 100vh;
}
</style>
