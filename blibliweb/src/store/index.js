/* eslint-disable no-shadow */
import Vue from 'vue';
import Vuex from 'vuex';
import mainMenu from './module/mainMenu';
import detailProduct from './module/detailProduct';
import cariBarang from './module/cariBarang';
import detailCariBarang from './module/detailCariBarang';

Vue.use(Vuex);

// eslint-disable-next-line import/no-mutable-exports
let store = [];

store = new Vuex.Store({
  modules: {
    modules: {
      // eslint-disable-next-line object-shorthand
      productData: mainMenu,
      items: detailProduct,
      _cariBarang: cariBarang,
      _detailCariBarang: detailCariBarang,
    },
  },
});

store.registerModule('productData', mainMenu);
store.registerModule('items', detailProduct);
store.registerModule('_cariBarang', cariBarang);
store.registerModule('_detailCariBarang', detailCariBarang);

export default store;
