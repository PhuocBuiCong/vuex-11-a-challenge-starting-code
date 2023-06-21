export default {
  namespaced: true,
  state() {
    return {
      title: '',
      description: '',
      price: '',
    };
  },
  mutations: {
    setTitle(state, title) {
      state.title = title;
    },
    setDescription(state, description) {
      state.description = description;
    },
    setPrice(state, price) {
      state.price = price;
    },
    resetFormCreate(state) {
      state.title = '';
      state.description = '';
      state.price = '';
    },
  },
  actions: {
    addToProduct({ commit, state }) {
      const newProduct = {
        id: Date.now().toString(), // Generate a unique ID for the new product
        title: state.title,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
        description: state.description,
        price: parseFloat(state.price),
      };
      console.log(newProduct);
      commit('prods/addProduct', newProduct, { root: true });
      commit('resetFormCreate');
    },
  },
};
