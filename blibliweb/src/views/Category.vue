<template>
  <div>
      <PlainHeader/>
      <div class="p-3">
        <div class="cst-card pl-3 pt-2 pr-3 pb-2 mb-2"
        v-for='category in CategoriesDetails'
        v-bind:key='category'>
         <router-link :to='"/c/"+category'>
          <div>
            <span class="text-capitalize">{{changeFormatText(category)}}
              <font-awesome-icon
                class="float-right f-icon mt-auto mb-auto"
                icon="angle-right"/>
            </span>
          </div>
         </router-link>
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
import axios from 'axios';

export default {
  name: 'Category',
  components: {
    PlainHeader,
    Footer,
    BottomNavigation,
  },
  created() {
    axios.get(`http://localhost:${this.port}/experience/api/products/enums/category`)
      .then((response) => {
        this.category = response.data.data.categories;
      });
  },
  data() {
    return {
      isRotate: false,
      isActive: false,
      category: null,
    };
  },
  computed: {
    CategoriesDetails() {
      return this.category;
    },
  },
  methods: {
    changeFormatText(category) {
      return category.toLowerCase();
    },
  },
};
</script>

<style lang="scss" scoped>

a{
  color: black;
}

a:hover{
  text-decoration: none;
}

.location-dropdown{
  max-height: 0px;
  position: absolute;
  visibility: hidden;
  transition: max-height 0.1s ease-out;
}

.active{
  max-height: fit-content;
  width: auto;
  position: relative;
  visibility: visible;
  transition: max-height 0.25s ease-in;
}

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

ul{
  margin-top: 7px;
  border-top: 1.5px #C7C7C7 solid;
  padding-left: 0px;
  margin-bottom: 3px;
}

li{
  font-size: 14px;
  color: #808080;
  margin-left: 20px;
  list-style: none;
  padding: 0px;
  margin-top: 10px;
  padding-bottom: 7px;
  border-bottom: 0.5px #C7C7C7 solid;
}

</style>
