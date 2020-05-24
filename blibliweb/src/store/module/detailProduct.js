import axios from 'axios';

const PRODUCT_API = 'http://www.mocky.io/v2/5ec674fc3200005e00d74e13?mocky-delay=500ms';

const detailProduct = {
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

export default detailProduct;
