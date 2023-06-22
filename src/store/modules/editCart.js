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
    setStateEdit(state, payload) {
      state.title = payload.title;
      state.description = payload.description;
      state.price = payload.price;
    },
  },
  actions: {},
};
