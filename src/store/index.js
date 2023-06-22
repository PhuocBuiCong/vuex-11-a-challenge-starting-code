import { createStore } from 'vuex';
import productModule from './modules/product.js';
import cartModule from './modules/cart.js';
import authModule from './modules/auth.js';
import createCartModule from './modules/createCart.js';
import editCartModule from './modules/editCart.js';
const store = createStore({
  modules: {
    prods: productModule,
    cart: cartModule,
    auth: authModule,
    create: createCartModule,
    edit: editCartModule,
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
