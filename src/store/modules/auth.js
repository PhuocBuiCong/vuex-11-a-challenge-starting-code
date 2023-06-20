import {
  validateEmail,
  validatePassword,
} from '../../services/ValidationService';
export default {
  namespaced: true,
  state() {
    return {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
      rememberMe: false,
    };
  },
  mutations: {
    setEmail(state, email) {
      state.email = email;
    },
    setPassword(state, password) {
      state.password = password;
    },
    setEmailError(state, error) {
      state.emailError = error;
    },
    setPasswordError(state, error) {
      state.passwordError = error;
    },
    validateEmail(state) {
      if (!validateEmail(state.email)) {
        state.emailError = 'Invalid email format';
      } else {
        state.emailError = '';
      }
    },
    validatePassword(state) {
      if (!validatePassword(state.password)) {
        state.passwordError = 'Password should be at least 6 characters long.';
      } else {
        state.passwordError = '';
      }
    },
  },
  actions: {
    validateFields({ commit }, field) {
      if (field === 'email') {
        commit('validateEmail');
      } else if (field === 'password') {
        commit('validatePassword');
      }
    },
  },
};
