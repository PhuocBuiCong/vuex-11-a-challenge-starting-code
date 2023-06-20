<template>
  <form class="form-login mt-4">
    <div class="form-group">
      <label for="email">Email address</label>
      <input
        type="email"
        class="form-control"
        id="email"
        placeholder="Enter email"
        v-model="email"
        @input="updateEmail"
        @focusout="validateFields('email')"
      />
      <div v-if="emailError" class="error text-danger">
        {{ emailError }}
      </div>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="password"
        class="form-control"
        id="password"
        placeholder="Password"
        v-model="password"
        @input="updatePassword"
        @focusout="validateFields('password')"
      />
      <div v-if="passwordError" class="error text-danger">
        {{ passwordError }}
      </div>
    </div>
    <button
      type="submit"
      class="btn btn-primary"
      :class="disableBtn"
      @click="handleLogin"
    >
      Submit
    </button>
  </form>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState('auth', ['email', 'password', 'emailError', 'passwordError']),
    disableBtn() {
      if (this.emailError || this.passwordError) {
        return 'disable-btn';
      }
      return '';
    },
  },
  methods: {
    ...mapMutations('auth', ['setEmail', 'setPassword']),
    ...mapActions('auth', ['validateFields']),
    updateEmail(event) {
      this.setEmail(event.target.value); // Call the setEmail mutation to update the email state in the store
    },
    updatePassword(event) {
      this.setPassword(event.target.value); // Call the setPassword mutation to update the password state in the store
    },
    handleLogin(e) {
      e.preventDefault();
      console.log('email', this.email);
      console.log('password', this.password);
      this.$router.push('/products');
    },
  },
};
</script>

<style scoped>
.form-login {
  width: 50%;
  margin: auto;
}
.disable-btn {
  background-color: antiquewhite;
  color: black;
}
</style>
