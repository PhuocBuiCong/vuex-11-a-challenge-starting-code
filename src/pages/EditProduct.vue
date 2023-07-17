<template>
  <form class="form-create mt-4">
    <div class="form-group">
      <label for="idx">ID</label>
      <input
        type="text"
        class="form-control"
        id="idx"
        v-model="productById._id"
        readonly
      />
    </div>
    <div class="form-group">
      <label for="title">Title</label>
      <input
        type="text"
        class="form-control"
        id="title"
        placeholder="Enter title"
        v-model="productById.title"
      />
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <input
        type="text"
        class="form-control"
        id="description"
        placeholder="Description"
        v-model="productById.description"
      />
    </div>
    <div class="form-group">
      <label for="price">Price ($)</label>
      <input
        type="number"
        class="form-control"
        id="price"
        placeholder="Price"
        v-model="productById.price"
      />
    </div>

    <button type="submit" class="btn btn-primary" @click="update">
      Update Cart
    </button>
  </form>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { checkPayload } from '../services/useCheckPayloadBeforeSunmit';
export default {
  data() {
    return {
      previousProduct: null,
    };
  },
  computed: {
    ...mapState('prods', ['productById']),
    beforeProductChange() {
      return this.productById;
    },
  },
  methods: {
    ...mapActions('prods', ['getProductById', 'updateProduct']),
    async update(e) {
      e.preventDefault();
      const payload = checkPayload(this.previousProduct, this.productById);
      const id = this.productById._id;
      if (Object.keys(payload).length > 0) {
        console.log(payload);
        await this.updateProduct({ id, payload });
      }
      this.$router.push('/products');
    },
  },
  async created() {
    const id = this.$route.params.slug;
    await this.getProductById(id);
    this.previousProduct = JSON.parse(JSON.stringify(this.productById));
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
