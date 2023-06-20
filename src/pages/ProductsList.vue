<template>
  <section>
    <input
      type="text"
      placeholder="Entered keyword to search"
      v-model="keyword"
      @input="updateKeyword"
      @change="filterProducts"
    />
    <ul>
      <product-item
        v-for="prod in productList"
        :key="prod.id"
        :id="prod.id"
        :title="prod.title"
        :image="prod.image"
        :description="prod.description"
        :price="prod.price"
      ></product-item>
    </ul>
  </section>
</template>

<script>
import { mapMutations, mapState, mapGetters } from 'vuex';
import ProductItem from '../components/products/ProductItem.vue';

export default {
  components: {
    ProductItem,
  },
  computed: {
    ...mapState('prods', ['keyword']),
    ...mapGetters('prods', 'listFilteredProducts'),
    products() {
      return this.$store.getters['prods/productList'];
    },
  },
  methods: {
    ...mapMutations('prods', ['setKeyword']),
    updateKeyword(e) {
      this.setKeyword(e.target.value);
    },
    filterProducts() {
      this.$store.dispatch('prods/filterProducts', this.keyword);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 40rem;
}
</style>
