export default {
  namespaced: true,
  state() {
    return {
      id: '',
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
    setStateEdit(state, payload) {
      state.title = payload.title;
      state.description = payload.description;
      state.price = payload.price;
      state.id = payload.id;
    },
  },
  actions: {
    updatedProduct({ commit, state }) {
      const productUpdated = {
        id: state.id,
        title: state.title,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
        description: state.description,
        price: parseFloat(state.price),
      };
      commit('prods/updateProduct', productUpdated, { root: true });
    },
  },
};
