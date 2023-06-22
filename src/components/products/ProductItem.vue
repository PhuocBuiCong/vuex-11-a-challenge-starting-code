<template>
  <li class="product">
    <div class="product__data">
      <div class="product__image">
        <img :src="image" :alt="title" />
      </div>
      <div class="product__text">
        <h3>{{ title }}</h3>
        <base-badge mode="highlight" :no-margin-left="true">
          <h4>${{ price }}</h4>
        </base-badge>
        <p>{{ description }}</p>
      </div>
      <div class="action">
        <div class="btn-action" @click="editCart">Edit</div>
        <div class="btn-action delete" @click="addToCart">Delete</div>
      </div>
    </div>
    <div class="product__actions">
      <button @click="addToCart">Add to Cart</button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'image', 'title', 'price', 'description'],
  methods: {
    addToCart() {
      this.$store.dispatch('cart/addToCart', {
        id: this.id,
      });
    },
    editCart() {
      this.$router.push(`/products/edit/${this.id}`);
    },
  },
};
</script>

<style scoped>
li {
  margin: 1.5rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

.product__data {
  display: flex;
}

.product__image {
  margin-right: 1rem;
}

.product__image img {
  height: 10rem;
  width: 10rem;
  object-fit: cover;
}
.product__text {
  width: 320px;
}
.product__text h3 {
  margin: 0 0 0.5rem 0;
}

.product__text h4 {
  margin: 0;
}

.product__actions {
  text-align: center;
}

button {
  font: inherit;
  cursor: pointer;
  background-color: #45006d;
  color: white;
  border: 1px solid #45006d;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
}

button:hover,
button:active {
  background-color: #760ab4;
  border-color: #760ab4;
}
.action {
  display: flex;
  height: 25px;
  cursor: pointer;
}
.btn-action {
  width: 40px;
  background-color: #760ab4;
  color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.delete {
  background-color: red;
  width: 60px;
  margin-left: 5px;
}
</style>
