import axios from 'axios';

const PRODUCT_API = 'http://www.mocky.io/v2/5eca77563000005b00a6cfdf';
const CATEGORY_API = 'http://www.mocky.io/v2/5eca1b683000007900a6cf07';

const cariBarang = {
  namespaced: true,
  state: {
    products: [],
    categories: [],
  },
  mutations: {
    setProducts(state, value) {
      state.products = value;
    },
    setCategories(state, value) {
      state.categories = value;
    },
  },
  getters: {
    productList(state) {
      return state.products;
    },
    categoryList(state) {
      return state.categories;
    },
  },
  actions: {
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
  },
};

export default cariBarang;
