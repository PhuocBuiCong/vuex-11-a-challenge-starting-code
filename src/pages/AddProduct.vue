<template>
  <form class="form-create mt-4">
    <div class="form-group">
      <label for="title">Title</label>
      <input
        type="text"
        class="form-control"
        id="title"
        placeholder="Enter title"
        v-model="email"
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
        v-model="password"
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
        v-model="password"
        @input="updatePrice"
      />
    </div>

    <button type="submit" class="btn btn-primary" @click="addToCart">
      Add Cart
    </button>
  </form>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState('create', ['title', 'description', 'price']),
  },
  methods: {
    ...mapMutations('create', ['setTitle', 'setDescription', 'setPrice']),
    ...mapActions('create', ['addToProduct']),
    updateTitle(event) {
      this.setTitle(event.target.value);
    },
    updateDescription(event) {
      this.setDescription(event.target.value);
    },
    updatePrice(event) {
      this.setPrice(event.target.value);
    },
    addToCart(e) {
      e.preventDefault();
      console.log('title', this.title);
      console.log('description', this.description);
      console.log('price', this.price);
      this.addToProduct();
    },
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
