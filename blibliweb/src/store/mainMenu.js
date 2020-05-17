/* eslint-disable no-shadow */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

// eslint-disable-next-line import/no-mutable-exports
let store = [];

const MOCKYIO = 'http://www.mocky.io/v2/5ebd20b931000062005b10c0';
export const state = {
  products: [],
};

const mutations = {
  setProducts(state, value) {
    state.products = value;
  },
};

const actions = {
  getProducts({ commit }) {
    console.log('getData');
    axios
      .get(MOCKYIO)
      .then((response) => commit('setProducts', response.data));
  },
};

const getters = {
  productList(state) {
    return state.products;
  },
};

store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});

export default store;
