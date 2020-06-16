<template>
<div>
  <MapHeader/>
  <div class="select-loc pt-1 pl-3 pr-3 pb-3 bg-white m-3 border-radius-5 rounded border">
    <small>Pilih lokasi <b>bliblimart</b></small>
    <div class="pt-1">
      <select name="" id="" @change="fillCity" ref="city" class="custom-select mr-sm-2 mb-2">
        <option selected>--- Pilih Kota ---</option>
        <option v-for="layer in layers" :key="layer" >{{ layer.city }}</option>
      </select>
      <select name="" ref="loc" aria-placeholder="hai" v-model="selected" @change="changeCity"
      class="custom-select mr-sm-2" :disabled="this.daerah.length === 0">
        <option selected >--- Pilih Lokasi ---</option>
        <option v-for="d in daerah"
        v-bind:value="{ coord : d.coords , name : d.name}" :key="d" >{{ d.name }}</option>
      </select>
    </div>
  </div>
  <div id="map" class="map"></div>
</div>
</template>

<script>
import L from 'leaflet';
import MapHeader from '@/components/MapHeader.vue';

export default {
  name: 'Location',
  components: {
    MapHeader,
  },
  data() {
    return {
      map: null,
      tileLayer: null,
      layers: [
        {
          id: 0,
          city: 'Bandung',
          active: true,
          features: [
            {
              id: 0,
              name: 'Bliblimart Cibadak',
              type: 'marker',
              coords: [-6.92715, 107.60149],
            },
            {
              id: 1,
              name: 'Bliblimart Braga',
              type: 'marker',
              coords: [-6.92474, 107.61355],
            },
            {
              id: 2,
              name: 'Bliblimart Kopo',
              type: 'marker',
              coords: [-6.9447345, 107.5935306],
            },
          ],
        },
        {
          id: 1,
          city: 'Jakarta',
          active: true,
          features: [
            {
              id: 0,
              name: 'Bliblimart Thamrin',
              type: 'marker',
              coords: [-6.18069, 106.82324],
            },
            {
              id: 1,
              name: 'Bliblimart Pasar Baru',
              type: 'marker',
              coords: [-6.1649010, 106.8334669],
            },
            {
              id: 2,
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
  mounted() {
    this.initMap();
    this.initLayers();
    this.layerChanged(0, true);
    this.layerChanged(1, true);
  },
  methods: {
    initMap() {
      this.map = L.map('map').setView([-6.93, 107.60], 12);
      this.tileLayer = L.tileLayer(
        // http://{s}.tile.osm.org/{z}/{x}/{y}.png
        // https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png
        'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        {
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
        },
      );
      this.tileLayer.addTo(this.map);
      this.map.locate({ setView: true });
      L.control.scale().addTo(this.map);
      this.map.setZoom(13);
      this.map.on('locationfound', this.onLocationFound);
    },
    initLayers() {
      // const myIcon = L.icon({
      //   iconUrl: 'https://www.static-src.com/siva/asset//11_2019/ic-blibli-mart-compressed.png',
      //   iconSize: [48, 48],
      // });
      this.layers.forEach((layer) => {
        const markerFeatures = layer.features.filter((feature) => feature.type === 'marker');
        markerFeatures.forEach((feature) => {
          // eslint-disable-next-line
          feature.leafletObject = L.marker(feature.coords).bindPopup(feature.name);
        });
      });
    },
    layerChanged(layerId, active) {
      const lay = this.layers.find((layer) => layer.id === layerId);
      lay.features.forEach((feature) => {
        if (active) {
          feature.leafletObject.addTo(this.map);
        } else {
          feature.leafletObject.removeFrom(this.map);
        }
      });
    },
    moveMap(coord) {
      L.popup({ autoPan: true })
        .setLatLng(coord)
        .setContent(this.selected.name)
        .openOn(this.map);
      this.map.setZoom(20);
    },
    onLocationFound(e) {
      const myIcon = L.icon({
        iconUrl: 'https://image.flaticon.com/icons/svg/684/684908.svg',
        iconSize: [38, 95],
      });
      const radius = e.accuracy / 200;
      L.marker(e.latlng, { icon: myIcon }).addTo(this.map)
        .bindPopup('Lokasi kamu saat ini').openPopup();
      L.circle(e.latlng, radius).addTo(this.map);
      this.map.setZoom(20);
    },
    fillCity() {
      const currentCity = this.$refs.city.value;
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
      const coord = [this.selected.coord[0], this.selected.coord[1]];
      this.moveMap(coord);
    },
  },
};
</script>

<style scoped>
.map {
  height: 92vh;
  z-index: 10;
}

.select-loc{
  margin-bottom: 2px!important;
  position: absolute;
  bottom: 20px;
  z-index: 100;
  /* height: 100px; */
}

</style>
