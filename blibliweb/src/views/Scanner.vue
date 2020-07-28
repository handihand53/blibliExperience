<template>
  <div>
    <HeaderWithCart/>
    <component :is="currentComponent" :id="location.id"></component>
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
            <option v-for="layer in layers" :key="layer.id" >{{ layer.city }}</option>
          </select>
          <select name="" ref="loc" aria-placeholder="hai" v-model="location"
          class="custom-select mr-sm-2" :disabled="this.daerah.length === 0">
            <option selected>--- Pilih Lokasi ---</option>
            <option v-for="d in daerah"
            v-bind:value="{ id : d.id, coord : d.coords, name : d.name}"
            :key="d.id" >{{ d.name }}</option>
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
import axios from 'axios';

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
      location: {
        id: 0,
      },
      layers: [
        {
          id: 0,
          city: 'Bandung',
          active: true,
          features: [],
        },
      ],
      daerah: [],
    };
  },
  async created() {
    await this.getMap();
  },
  methods: {
    async getMap() {
      await axios.get(`http://localhost:${this.port}/experience/api/products/bliblimart`)
        .then((response) => {
          response.data.data.forEach((data) => {
            if (data.shopAddress.kota === 'Bandung') {
              this.layers[0].features.push(
                {
                  id: data.shopId,
                  name: data.shopName,
                  type: 'marker',
                  coords: [data.shopLocation[0], data.shopLocation[1]],
                },
              );
            }
          });
        });
    },
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
      this.daerah = [];
      this.layers.forEach((layer) => {
        if (layer.city === currentCity) {
          layer.features.forEach((feature) => {
            this.daerah.push({
              id: feature.id,
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
