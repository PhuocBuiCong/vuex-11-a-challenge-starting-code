import { createApp } from 'vue';

import { useRouter } from './router';
import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import store from './store/index.js';
const app = createApp(App);
const router = useRouter();
app.use(router);
app.use(store);
app.component('base-badge', BaseBadge);

app.mount('#app');
