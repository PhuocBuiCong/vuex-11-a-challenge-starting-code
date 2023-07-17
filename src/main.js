import { createApp } from 'vue';

import { useRouter } from './router';
import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import store from './store/index.js';
import http from './plugins/axios';
import Vue from 'vue';

const app = createApp(App);
const router = useRouter();
app.use(router);
app.use(store);
app.component('base-badge', BaseBadge);
app.mount('#app');

Vue.prototype.$http = http;
Vue.config.productionTip = false;
