<template>
  <div>
    <HeaderWithCart/>
    <component :is="currentComponent"></component>
    <div class="fixed-white" :class="{'display-none':display}">
     <div class="row p-0 m-0 d-flex align-items-center mt-1
      shadow p-2">
        <font-awesome-icon
        class="m-2"
        @click="back"
        icon="chevron-left"
        id="back"/>
        <p class="font-weight-bold m-auto">Scanner</p>
      </div>
      <div class="p-2">
        <p class="p-0 m-0 my-2">Pilih lokasi</p>
        <div class="pt-1">
          <select name="" id="" @change="fillCity" ref="city" class="custom-select mr-sm-2 mb-2">
            <option selected value=null>--- Pilih Kota ---</option>
            <option v-for="layer in layers" :key="layer" >{{ layer.city }}</option>
          </select>
          <select name="" ref="loc" aria-placeholder="hai" v-model="location" @change="changeCity"
          class="custom-select mr-sm-2" :disabled="this.daerah.length === 0">
            <option selected>--- Pilih Lokasi ---</option>
            <option v-for="d in daerah"
            v-bind:value="{ coord : d.coords , name : d.name}" :key="d" >{{ d.name }}</option>
          </select>
        </div>
        <p class="p-0 m-0 my-2">Pilih metode scan</p>
        <b-button block variant="primary"
        @click="showBarcode" id="barcode"
        :disabled="this.location === null || this.location.name === undefined
        || this.$refs.city.value == 'null'"
        >Scan Barcode</b-button>
        <b-button block variant="primary"
        @click="showQr" id="qrcode"
        :disabled="this.location === null || this.location.name === undefined
        || this.$refs.city.value == 'null'"
        >Scan QrCode</b-button>
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
      display: false,
      currentComponent: '',
      location: null,
      layers: [
        {
          id: '0',
          city: 'Bandung',
          active: true,
          features: [
            {
              id: '00',
              name: 'Bliblimart Cibadak',
              type: 'marker',
              coords: [-6.92715, 107.60149],
            },
            {
              id: '01',
              name: 'Bliblimart Braga',
              type: 'marker',
              coords: [-6.92474, 107.61355],
            },
            {
              id: '02',
              name: 'Bliblimart Kopo',
              type: 'marker',
              coords: [-6.9447345, 107.5935306],
            },
          ],
        },
        {
          id: '1',
          city: 'Jakarta',
          active: true,
          features: [
            {
              id: '03',
              name: 'Bliblimart Thamrin',
              type: 'marker',
              coords: [-6.18069, 106.82324],
            },
            {
              id: '04',
              name: 'Bliblimart Pasar Baru',
              type: 'marker',
              coords: [-6.1649010, 106.8334669],
            },
            {
              id: '05',
              name: 'Bliblimart Slipi',
              type: 'marker',
              coords: [-6.19386, 106.80164],
            },
          ],
        },
      ],
      daerah: [],
    };
  },
  methods: {
    showBarcode() {
      this.display = true;
      this.currentComponent = 'Barcode';
    },
    showQr() {
      this.display = true;
      this.currentComponent = 'Qrcode';
    },
    back() {
      window.history.back();
    },
    fillCity() {
      const currentCity = this.$refs.city.value;
      console.log(currentCity);
      this.daerah = [];
      this.layers.forEach((layer) => {
        if (layer.city === currentCity) {
          layer.features.forEach((feature) => {
            this.daerah.push({
              name: feature.name,
              coords: feature.coords,
            });
          });
        }
        this.checkValueCity();
      });
    },
    checkValueCity() {
      if (this.daerah === []) {
        this.$refs.city.disabled = true;
      }
    },
    changeCity() {
      console.log(this.location.name);
    },
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
  z-index: 10000;
}

.display-none{
  display: none;
}
</style>
