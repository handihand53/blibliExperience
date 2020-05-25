/* eslint-disable no-shadow */
import Vue from 'vue';
import Vuex from 'vuex';
import mainMenu from './module/mainMenu';
import detailProduct from './module/detailProduct';
import cariBarang from './module/cariBarang';
import detailCariBarang from './module/detailCariBarang';
import barter from './module/barter';

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
      _barter: barter,
    },
  },
});

store.registerModule('productData', mainMenu);
store.registerModule('items', detailProduct);
store.registerModule('_cariBarang', cariBarang);
store.registerModule('_detailCariBarang', detailCariBarang);
store.registerModule('_barter', barter);

export default store;
