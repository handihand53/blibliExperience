import axios from 'axios';

const PRODUCT_API = 'http://www.mocky.io/v2/5eca4e153000005b00a6cf58?mocky-delay=500ms';

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
