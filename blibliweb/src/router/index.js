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
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: () => import(/* webpackChunkName: "category" */ '../views/Wishlist.vue'),
    meta: {
      title: 'Wishlist',
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "category" */ '../views/Profile.vue'),
    meta: {
      title: 'Profil',
    },
  },
  {
    path: '/change-password',
    name: 'Change Password',
    component: () => import(/* webpackChunkName: "category" */ '../views/ChangePassword.vue'),
    meta: {
      title: 'Ganti Password',
    },
  },
  {
    path: '/post-product',
    name: 'Post Product',
    component: () => import(/* webpackChunkName: "category" */ '../views/PostProduct.vue'),
    meta: {
      title: 'Posting Barang',
    },
  },
  {
    path: '/daftar-penawaran',
    name: 'Daftar Penawaran',
    component: () => import(/* webpackChunkName: "category" */ '../views/DaftarPenawaran.vue'),
    meta: {
      title: 'Daftar Penawaran',
    },
  },
  {
    path: '/daftar-pengajuan',
    name: 'Daftar Pengajuan',
    component: () => import(/* webpackChunkName: "category" */ '../views/DaftarPengajuan.vue'),
    meta: {
      title: 'Daftar Pengajuan',
    },
  },
  {
    path: '/scan',
    name: 'Scanner',
    component: () => import(/* webpackChunkName: "category" */ '../views/Scanner.vue'),
    meta: {
      title: 'Scanner',
    },
  },
  {
    path: '/detail-pengajuan-barang',
    name: 'Detail Pengajuan Barang',
    component: () => import(/* webpackChunkName: "category" */ '../views/DetailPengajuanBarang.vue'),
    meta: {
      title: 'Detail Pengajuan Barang',
    },
  },
  {
    path: '/barter/detail-pengajuan',
    name: 'Detail Pengajuan Barter',
    component: () => import(/* webpackChunkName: "category" */ '../views/DetailPengajuanBarter.vue'),
    meta: {
      title: 'Detail Pengajuan Barter',
    },
  },
  {
    path: '/scan-qr',
    name: 'Qr Scanner',
    component: () => import(/* webpackChunkName: "category" */ '../views/QrScanner.vue'),
    meta: {
      title: 'Scan QR',
    },
  },
  {
    path: '/confirm',
    name: 'Konfirmasi Pemesanan',
    component: () => import(/* webpackChunkName: "category" */ '../views/KonfirmasiPemesanan.vue'),
    meta: {
      title: 'Konfirmasi Pemesanan',
    },
  },
  {
    path: '/pay',
    name: 'Pembayaran',
    component: () => import(/* webpackChunkName: "category" */ '../views/Payment.vue'),
    meta: {
      title: 'Pembayaran',
    },
  },
  {
    path: '/barter',
    name: 'Barter',
    component: () => import(/* webpackChunkName: "category" */ '../views/Barter.vue'),
    meta: {
      title: 'Barter',
    },
  },
  {
    path: '/barter/detail',
    name: 'Detail Barter',
    component: () => import(/* webpackChunkName: "category" */ '../views/DetailBarter.vue'),
    meta: {
      title: 'Detail Barter',
    },
  },
  {
    path: '/barter/pengajuan',
    name: 'Pengajuan Barter',
    component: () => import(/* webpackChunkName: "category" */ '../views/PengajuanBarter.vue'),
    meta: {
      title: 'Pengajuan Barter',
    },
  },
  {
    path: '/barter/konfirmasi',
    name: 'Konfirmasi Pengajuan Barter',
    component: () => import(/* webpackChunkName: "category" */ '../views/KonfirmasiPengajuanBarter.vue'),
    meta: {
      title: 'Konfirmasi Pengajuan Barter',
    },
  },
  {
    path: '/cari-barang',
    name: 'Cari Barang',
    component: () => import(/* webpackChunkName: "category" */ '../views/CariBarang.vue'),
    meta: {
      title: 'Cari Barang',
    },
  },
  {
    path: '/cari-barang/detail',
    name: 'Detail Cari Barang',
    component: () => import(/* webpackChunkName: "category" */ '../views/DetailCariBarang.vue'),
    meta: {
      title: 'Detail Cari Barang',
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
