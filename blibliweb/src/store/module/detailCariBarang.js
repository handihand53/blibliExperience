import axios from 'axios';

const PRODUCT_API = 'http://www.mocky.io/v2/5eca8c1f3000009300a6d023';

const detailCariBarang = {
  namespaced: true,
  state: {
    products: [],
  },
  mutations: {
    setProduct(state, value) {
      state.products = value;
    },
  },
  getters: {
    dataProduct(state) {
      return state.products;
    },
  },
  actions: {
    getItem({ commit }) {
      return axios
        .get(PRODUCT_API)
        .then((response) => commit('setProduct', response.data));
    },
  },
};

export default detailCariBarang;
