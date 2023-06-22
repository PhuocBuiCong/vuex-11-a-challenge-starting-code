<template>
  <form class="form-create mt-4">
    <div class="form-group">
      <label for="title">Title</label>
      <input
        type="text"
        class="form-control"
        id="title"
        placeholder="Enter title"
        v-model="productFilteredById.title"
        @input="updateTitle"
      />
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <input
        type="text"
        class="form-control"
        id="description"
        placeholder="Description"
        v-model="productFilteredById.description"
        @input="updateDescription"
      />
    </div>
    <div class="form-group">
      <label for="price">Price ($)</label>
      <input
        type="number"
        class="form-control"
        id="price"
        placeholder="Price"
        v-model="productFilteredById.price"
        @input="updatePrice"
      />
    </div>

    <button type="submit" class="btn btn-primary" @click="updateProduct">
      Update Cart
    </button>
  </form>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState('prods', ['productFilteredById']),
  },
  methods: {
    ...mapMutations('edit', [
      'setTitle',
      'setDescription',
      'setPrice',
      'setStateEdit',
    ]),
    ...mapActions('prods', ['getProductByIds']),
    updateTitle(event) {
      this.setTitle(event.target.value);
    },
    updateDescription(event) {
      this.setDescription(event.target.value);
    },
    updatePrice(event) {
      this.setPrice(event.target.value);
    },
    updateProduct(e) {
      e.preventDefault();
      this.updateProduct();
      this.$router.push('/products');
    },
  },
  created() {
    const id = this.$route.params.slug;
    this.getProductByIds(id);
    this.setStateEdit(this.productFilteredById);
    console.log(this.productFilteredById);
  },
};
</script>

<style scoped>
.form-create {
  width: 50%;
  margin: auto;
}
.disable-btn {
  background-color: antiquewhite;
  color: black;
}
</style>
