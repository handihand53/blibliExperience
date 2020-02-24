<template>
  <div>
    <v-quagga :onDetected="logIt" :readerSize="readerSize" :readerTypes="['ean_reader']"></v-quagga>
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
        width: 150,
        height: 150,
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
