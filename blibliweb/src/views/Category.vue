<template>
  <div>
      <PlainHeader/>
      <div class="p-3">
        <div @click="isRotate1 = !isRotate1" class="cst-card pl-3 pt-2 pr-3 pb-2 mb-2">
         <span>BlibliMart
          <font-awesome-icon
            class="float-right f-icon mt-auto mb-auto"
            :class="{rotate: isRotate1}"
            icon="angle-right"/>
         </span>
        </div>
        <div @click="isRotate2 = !isRotate2" class="cst-card pl-3 pt-2 pr-3 pb-2 mb-2">
          <span>Barter
          <font-awesome-icon
            class="float-right f-icon mt-auto mb-auto"
            :class="{rotate: isRotate2}"
            icon="angle-right"/>
          </span>
        </div>
        <div @click="isRotate3 = !isRotate3" class="cst-card pl-3 pt-2 pr-3 pb-2 mb-2">
          <span>Cari Barang
          <font-awesome-icon
            class="float-right f-icon mt-auto mb-auto"
            :class="{rotate: isRotate3}"
            icon="angle-right"/>
          </span>
        </div>
      </div>
      <BottomNavigation/>
      <Footer/>
  </div>
</template>

<script>
import PlainHeader from '@/components/PlainHeader.vue';
import Footer from '@/components/Footer.vue';
import BottomNavigation from '@/components/BottomNavigation.vue';

export default {
  name: 'Category',
  components: {
    PlainHeader,
    Footer,
    BottomNavigation,
  },
  data() {
    return {
      isRotate1: false,
      isRotate2: false,
      isRotate3: false,
    };
  },
  methods: {
    changeArrow() {
      console.log(this.innerHTML);
    },
  },
};
</script>

<style lang="scss" scoped>

.f-icon{
  font-size: 24px;
  color: #808080;
  transition: all 0.7s;
}

.rotate{
  transform: rotate(90deg);
}

.cst-card {
  box-shadow: 0px 0px 13px -9px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  padding: 0px;
  margin-top: 7px;
  border: 1px solid rgba(0, 0, 0, 0.061);
  padding: 7px;
}

</style>
