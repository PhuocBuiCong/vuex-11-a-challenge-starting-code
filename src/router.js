import { createRouter, createWebHistory } from 'vue-router';

import ProductsList from './pages/ProductsList.vue';
import UserCart from './pages/UserCart.vue';
import ShopAdmin from './pages/ShopAdmin.vue';
import ShopLogin from './pages/ShopLogin.vue';
import AddProduct from './pages/AddProduct.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/login', component: ShopLogin },
    { path: '/create-product', component: AddProduct },
    { path: '/products', component: ProductsList },
    { path: '/cart', component: UserCart },
    { path: '/admin', component: ShopAdmin },
  ],
});

export function useRouter() {
  return router;
}
