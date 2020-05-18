/* eslint-disable no-shadow */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

// eslint-disable-next-line import/no-mutable-exports
let store = [];

const PRODUCT_API = 'http://www.mocky.io/v2/5ec18a432f0000417a4c88c2?mocky-delay=50ms';
const CATEGORY_API = 'http://www.mocky.io/v2/5ec229a42f0000014ac34f73?mocky-delay=50ms';
export const state = {
  products: [],
  categories: [],
};

const mutations = {
  setProducts(state, value) {
    state.products = value;
  },
  setCategories(state, value) {
    state.categories = value;
  },
};

const actions = {
  getProducts({ commit }) {
    axios
      .get(PRODUCT_API)
      .then((response) => commit('setProducts', response.data));
  },
  getCategory({ commit }) {
    axios
      .get(CATEGORY_API)
      .then((response) => commit('setCategories', response.data));
  },
};

const getters = {
  productList(state) {
    return state.products;
  },
  categoryList(state) {
    return state.categories;
  },
};

store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});

export default store;
