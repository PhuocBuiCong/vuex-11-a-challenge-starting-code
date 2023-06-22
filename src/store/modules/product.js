export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: '1',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
          title: 'Book Collection',
          description:
            'A collection of must-read books. All-time classics included!',
          price: 99.99,
        },
        {
          id: '2',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
          title: 'Mountain Tent',
          description: 'A tent for the ambitious outdoor tourist.',
          price: 129.99,
        },
        {
          id: '3',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
          title: 'Food Box',
          description:
            'May be partially expired when it arrives but at least it is cheap!',
          price: 6.99,
        },
      ],
      filteredProducts: [],
      productFilteredById: {},
      keyword: '',
    };
  },
  getters: {
    listFilteredProducts: (state) => state.filteredProducts,
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
    getProductById(state, product) {
      state.productFilteredById = product;
    },
  },
  actions: {
    filterProducts({ commit, state }, keyword) {
      const filteredProducts = state.products.filter((product) =>
        product.title.toLowerCase().includes(keyword.toLowerCase())
      );
      commit('setFilteredProducts', filteredProducts);
    },
    getProductByIds({ commit, state }, id) {
      const filteredProductById = state.products.find((item) => item.id === id);
      console.log('item', filteredProductById);
      commit('getProductById', filteredProductById);
    },
  },
};
