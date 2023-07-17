<template>
  <section>
    <div class="search-field">
      <input
        type="text"
        class="input-search"
        placeholder="Entered keyword to search"
        v-model="keyword"
        @input="updateKeyword"
        @change="filterProducts"
      />
    </div>

    <ul>
      <product-item
        v-for="prod in products"
        :key="prod._id"
        :id="prod._id"
        :title="prod.title"
        :image="prod.image"
        :description="prod.description"
        :price="prod.price"
      ></product-item>
    </ul>
  </section>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import ProductItem from '../components/products/ProductItem.vue';

export default {
  components: {
    ProductItem,
  },
  computed: {
    ...mapState('prods', ['keyword', 'filteredProducts', 'products']),
  },
  methods: {
    ...mapMutations('prods', ['setKeyword']),
    ...mapActions('prods', ['getProductsList']),
    updateKeyword(e) {
      this.setKeyword(e.target.value);
    },
    filterProducts() {
      this.$store.dispatch('prods/filterProducts', this.keyword);
    },
  },
  created() {
    // Initialize filteredProducts with all products
    this.$store.commit('prods/setFilteredProducts', this.products);
    console.log('111');
    this.getProductsList();
  },
  watch: {
    keyword(newKeyword) {
      if (newKeyword === '') {
        // If keyword is empty, set filteredProducts to all products
        this.$store.commit('prods/setFilteredProducts', this.products);
      } else {
        // If keyword is not empty, filter products based on the keyword
        this.$store.dispatch('prods/filterProducts', newKeyword);
      }
    },
  },
};
</script>

<style scoped>
.search-field {
  margin: 2rem auto;
  max-width: 40rem;
}
.input-search {
  width: 50%;
}
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 40rem;
}
</style>
