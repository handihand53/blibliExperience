import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      title: 'Login',
    },
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/Signup.vue'),
    meta: {
      title: 'Daftar',
    },
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import(/* webpackChunkName: "category" */ '../views/Category.vue'),
    meta: {
      title: 'Kategori',
    },
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "category" */ '../views/Cart.vue'),
    meta: {
      title: 'Daftar Keranjang',
    },
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import(/* webpackChunkName: "category" */ '../views/Account.vue'),
    meta: {
      title: 'Akun',
    },
  },
  {
    path: '/detail-product',
    name: 'DetailProduct',
    component: () => import(/* webpackChunkName: "category" */ '../views/DetailProduct.vue'),
    meta: {
      title: 'Detail Product',
    },
  },
];

const router = new VueRouter({
  routes,
});

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} | Bliblinext Experience`;
  }
});

export default router;