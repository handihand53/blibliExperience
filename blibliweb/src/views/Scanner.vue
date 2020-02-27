<template>
  <div>
    <v-quagga :onDetected="logIt" :readerSize="readerSize"
    :readerTypes="['ean_reader']"></v-quagga>
    <!-- <div id="interactive" class="viewport scanner">
      <video autoplay="true" preload="auto" src="" muted="true" playsinline="true"></video>
      <canvas class="drawingBuffer" width="640" height="480"></canvas>
    </div> -->
    <div>s</div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueQuagga from 'vue-quaggajs';

// register component 'v-quagga'
Vue.use(VueQuagga);

export default {
  name: 'VueBarcodeTest',
  data() {
    return {
      readerSize: {
        width: 360,
        height: 480,
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
