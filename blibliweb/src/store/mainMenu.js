/* eslint-disable no-shadow */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

// eslint-disable-next-line import/no-mutable-exports
let store = [];

const MOCKYIO = 'http://www.mocky.io/v2/5ec229a42f0000014ac34f73';
export const state = {
  category: [],
};

const mutations = {
  setCategory(state, value) {
    state.category = value;
  },
};

const actions = {
  getCategory({ commit }) {
    axios
      .get(MOCKYIO)
      .then((response) => commit('setcategory', response.data));
  },
};

const getters = {
  categoryList(state) {
    return state.category;
  },
};

store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});

export default store;
