import http from '../../plugins/axios';

export default {
  namespaced: true,
  state() {
    return {
      products: [],
      filteredProducts: [],
      productById: {},
      keyword: '',
    };
  },
  getters: {
    productList: (state) => state.products,
  },
  mutations: {
    setKeyword(state, keyword) {
      state.keyword = keyword;
    },
    setFilteredProducts(state, products) {
      state.filteredProducts = products;
    },
    addProduct(state, product) {
      state.products.push(product);
    },
    updateProduct(state, updatedProduct) {
      const productIdChanged = state.products.findIndex(
        (product) => product.id === updatedProduct.id
      );
      if (productIdChanged !== -1) {
        state.products.splice(productIdChanged, 1, updatedProduct);
      }
    },
    deletedProduct(state, productDeleteId) {
      const productIndex = state.products.findIndex(
        (product) => product.id === productDeleteId
      );
      if (productIndex !== -1) {
        state.products.splice(productIndex, 1);
      }
    },
  },
  actions: {
    filterProducts({ commit, state }, keyword) {
      const filteredProducts = state.products.filter((product) =>
        product.title.toLowerCase().includes(keyword.toLowerCase())
      );
      commit('setFilteredProducts', filteredProducts);
    },
    deleteProduct({ commit }, productId) {
      commit('deletedProduct', productId);
    },
    async getProductsList({ state }) {
      try {
        const response = await http.get('/products');
        state.products = response.data.products;
      } catch (error) {
        console.error(error);
      }
    },
    async getProductById({ state }, id) {
      try {
        const response = await http.get(`/product/${id}`);
        console.log(response);
        state.productById = response.data.product;
      } catch (error) {
        console.error(error);
      }
    },
    async updateProduct(context, { id, payload }) {
      try {
        console.log(id, payload);
        const response = await http.put(`${id}/update`, payload);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
