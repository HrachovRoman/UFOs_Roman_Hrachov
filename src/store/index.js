import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    products: [],
  },
  mutations: {
    SET_PRODUCTS_TO_STATE (state, products) {
      state.products = products;
    },
    SORT_BY(state) {
      console.log(state.products);
    },
  },
  actions: {
    async GET_PRODUCTS_FROM_API({commit}) {
       await axios('https://pixabay.com/api/?key=25040269-2f9aa7fd66c7370fd80cad212&q=cats&image_type=all&per_page=50')
       .then (response => {
        commit('SET_PRODUCTS_TO_STATE', response.data.hits);
       })
        .catch ((error) => {
        console.log(error);
      });
    }
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    }
  },
  modules: {
  }
});
