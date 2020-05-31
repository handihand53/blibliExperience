import axios from 'axios';

const PRODUCT_API = 'http://www.mocky.io/v2/5ec98a583000006b00a6ce11?mocky-delay=50ms';
const CATEGORY_API = 'http://www.mocky.io/v2/5eca1b683000007900a6cf07';

const mainMenu = {
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

export default mainMenu;
