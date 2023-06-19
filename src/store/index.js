import { createStore } from 'vuex';
import productModule from './modules/product.js';
import cartModule from './modules/cart.js';
import authModule from './modules/auth.js';
const store = createStore({
  modules: {
    prods: productModule,
    cart: cartModule,
    auth: authModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    login(context) {
      context.commit('login');
    },
    logout(context) {
      context.commit('logout');
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});

export default store;
