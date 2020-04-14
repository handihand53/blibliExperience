<template>
  <div>
    <div class="flip-h">
      <v-quagga :onDetected="logIt" :readerSize="readerSize"
      :readerTypes="['ean_reader']"></v-quagga>
    </div>
    <!-- <div id="interactive" class="viewport scanner">
      <video autoplay="true" preload="auto" src="" muted="true" playsinline="true"></video>
      <canvas class="drawingBuffer" width="640" height="480"></canvas>
    </div> -->
    <div>s</div>
  </div>
</template>

<script>
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

<style scoped>
.flip-h{
  -moz-transform: scale(-1, 1);
  -webkit-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);
}

video{
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
