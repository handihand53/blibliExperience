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
    component: () => import(/* webpackChunkName: "category" */ '../views/user/Cart.vue'),
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
    path: '/detail-product/:id',
    name: 'DetailProduct',
    component: () => import(/* webpackChunkName: "category" */ '../views/DetailProduct.vue'),
    meta: {
      title: 'Detail Product',
    },
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: () => import(/* webpackChunkName: "category" */ '../views/user/Wishlist.vue'),
    meta: {
      title: 'Wishlist',
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "category" */ '../views/user/Profile.vue'),
    meta: {
      title: 'Profil',
    },
  },
  {
    path: '/change-password',
    name: 'Change Password',
    component: () => import(/* webpackChunkName: "category" */ '../views/user/ChangePassword.vue'),
    meta: {
      title: 'Ganti Password',
    },
  },
  {
    path: '/post-product',
    name: 'Post Product',
    component: () => import(/* webpackChunkName: "category" */ '../views/user/PostProduct.vue'),
    meta: {
      title: 'Posting Barang',
    },
  },
  {
    path: '/daftar-penawaran',
    name: 'Daftar Penawaran',
    component: () => import(/* webpackChunkName: "category" */ '../views/user/DaftarPenawaran.vue'),
    meta: {
      title: 'Daftar Penawaran',
    },
  },
  {
    path: '/daftar-penawaran/detail-lelang/:id',
    name: 'Detail Penawaran Lelang',
    component: () => import(/* webpackChunkName: "category" */ '../views/user/DetailPenawaranBarang.vue'),
    meta: {
      title: 'Detail Penawaran Lelang',
    },
  },
  {
    path: '/daftar-penawaran/detail-barter/:id',
    name: 'Detail Penawaran Barter',
    component: () => import(/* webpackChunkName: "category" */ '../views/user/DetailPenawaranBarter.vue'),
    meta: {
      title: 'Detail Penawaran detail-barter',
      name: 'Detail Penawaran Barter',
    },
  },
  {
    path: '/daftar-pengajuan',
    name: 'Daftar Pengajuan',
    component: () => import(/* webpackChunkName: "category" */ '../views/user/DaftarPengajuan.vue'),
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
    path: '/detail-scan/:shopId/:barcode',
    name: 'Detail Barang',
    component: () => import(/* webpackChunkName: "category" */ '../views/DetailScan.vue'),
    meta: {
      title: 'Detail Barang',
    },
  },
  {
    path: '/detail-pengajuan-order/:id',
    name: 'Detail Pengajuan Order',
    component: () => import(/* webpackChunkName: "category" */ '../views/user/DetailPengajuanOrder.vue'),
    meta: {
      title: 'Detail Pengajuan Order',
    },
  },
  {
    path: '/detail-pengajuan-barang/:id',
    name: 'Detail Pengajuan Barang',
    component: () => import(/* webpackChunkName: "category" */ '../views/user/DetailPengajuanBarang.vue'),
    meta: {
      title: 'Detail Pengajuan Barang',
    },
  },
  {
    path: '/detail-pengajuan-finished/:id',
    name: 'Detail Pengajuan Finish Barang',
    component: () => import(/* webpackChunkName: "category" */ '../views/user/DetailPengajuanFinished.vue'),
    meta: {
      title: 'Detail Pengajuan Finish Barang',
    },
  },
  {
    path: '/detail-pengajuan-barter/:id',
    name: 'Detail Pengajuan Barang Barter',
    component: () => import(/* webpackChunkName: "category" */ '../views/user/DetailBarter.vue'),
    meta: {
      title: 'Detail Pengajuan Barang Barter',
    },
  },
  {
    path: '/barter/detail-pengajuan/:id',
    name: 'Detail Barang Pengajuan Barter',
    component: () => import(/* webpackChunkName: "category" */ '../views/barter/DetailPengajuanBarter.vue'),
    meta: {
      title: 'Detail Barang yang di ajukan Barter',
    },
  },
  {
    path: '/barter/detail-pengajuan/detail-submit/:id',
    name: 'Detail Pengajuan Barter',
    component: () => import(/* webpackChunkName: "category" */ '../views/barter/DetailSubmission.vue'),
    meta: {
      title: 'Detail Pengajuan Barter',
    },
  },
  {
    path: '/confirm',
    name: 'Konfirmasi Pemesanan',
    component: () => import(/* webpackChunkName: "category" */ '../views/user/KonfirmasiPemesanan.vue'),
    meta: {
      title: 'Konfirmasi Pemesanan',
    },
  },
  {
    path: '/sukses',
    name: 'Pembayaran berhasil',
    component: () => import(/* webpackChunkName: "category" */ '../views/Sukses.vue'),
    meta: {
      title: 'Sukses',
    },
  },
  {
    path: '/pengajuan/sukses',
    name: 'Pengajuan Pembayaran berhasil',
    component: () => import(/* webpackChunkName: "category" */ '../views/barter/Sukses.vue'),
    meta: {
      title: 'Sukses',
    },
  },
  {
    path: '/search',
    name: 'Search Page',
    component: () => import(/* webpackChunkName: "category" */ '../views/SearchPage.vue'),
    meta: {
      title: 'Cari Produk',
    },
  },
  {
    path: '/lelang/sukses',
    name: 'Pembayaran Lelang berhasil',
    component: () => import(/* webpackChunkName: "category" */ '../views/user/LelangSukses.vue'),
    meta: {
      title: 'Pembayaran Lelang Sukses',
    },
  },
  {
    path: '/pay/:id',
    name: 'Pembayaran',
    component: () => import(/* webpackChunkName: "category" */ '../views/user/Payment.vue'),
    meta: {
      title: 'Pembayaran',
    },
  },
  {
    path: '/pay/lelang/:id',
    name: 'Pembayaran Lelang',
    component: () => import(/* webpackChunkName: "category" */ '../views/user/PaymentLelang.vue'),
    meta: {
      title: 'Pembayaran Lelang',
    },
  },
  {
    path: '/barter',
    name: 'Barter',
    component: () => import(/* webpackChunkName: "category" */ '../views/barter/Barter.vue'),
    meta: {
      title: 'Barter',
    },
  },
  {
    path: '/barter/detail/:id',
    name: 'Detail Barter',
    component: () => import(/* webpackChunkName: "category" */ '../views/barter/DetailBarter.vue'),
    meta: {
      title: 'Detail Barter',
    },
  },
  {
    path: '/barter/pengajuan/:id',
    name: 'Pengajuan Barter',
    component: () => import(/* webpackChunkName: "category" */ '../views/barter/PengajuanBarter.vue'),
    meta: {
      title: 'Pengajuan Barter',
    },
  },
  {
    path: '/barter/konfirmasi',
    name: 'Konfirmasi Pengajuan Barter',
    component: () => import(/* webpackChunkName: "category" */ '../views/barter/KonfirmasiPengajuanBarter.vue'),
    meta: {
      title: 'Konfirmasi Pengajuan Barter',
    },
  },
  {
    path: '/lelang',
    name: 'Lelang',
    component: () => import(/* webpackChunkName: "category" */ '../views/caribarang/CariBarang.vue'),
    meta: {
      title: 'Lelang',
    },
  },
  {
    path: '/lelang/detail/:id',
    name: 'Detail Lelang',
    component: () => import(/* webpackChunkName: "category" */ '../views/caribarang/DetailCariBarang.vue'),
    meta: {
      title: 'Detail Lelang',
    },
  },
  {
    path: '/lelang/ajukan/:id',
    name: 'Ajukan Lelang',
    component: () => import(/* webpackChunkName: "category" */ '../views/caribarang/AjukanCariBarang.vue'),
    meta: {
      title: 'Ajukan Lelang',
    },
  },
  {
    path: '/lelang/konfirmasi',
    name: 'Konfirmasi lelang',
    component: () => import(/* webpackChunkName: "category" */ '../views/caribarang/KonfirmasiPengajuanCariBarang.vue'),
    meta: {
      title: 'Konfirmasi lelang',
    },
  },
  {
    path: '/lelang/berhasil',
    name: 'Berhasil lelang',
    component: () => import(/* webpackChunkName: "category" */ '../views/caribarang/Berhasil.vue'),
    meta: {
      title: 'Berhasil',
    },
  },
  {
    path: '/location',
    name: 'Lokasi Blibli mart',
    component: () => import(/* webpackChunkName: "category" */ '../views/Location.vue'),
    meta: {
      title: 'Lokasi Blibli mart',
    },
  },
  {
    path: '/merchant',
    name: 'Merchant Blibli mart',
    component: () => import(/* webpackChunkName: "category" */ '../views/merchant/Merchant.vue'),
    meta: {
      title: 'Merchant Blibli mart',
    },
  },
  {
    path: '/merchant/login',
    name: 'Login Merchant Blibli mart',
    component: () => import(/* webpackChunkName: "category" */ '../views/merchant/Login.vue'),
    meta: {
      title: 'Login Merchant Blibli mart',
    },
  },
  {
    path: '/merchant/signup/:steps',
    name: 'Daftar Merchant Blibli mart',
    component: () => import(/* webpackChunkName: "category" */ '../views/merchant/Signup.vue'),
    meta: {
      title: 'Daftar Merchant Blibli mart',
    },
  },
  {
    path: '/merchant/menu-utama',
    name: 'Menu Utama Merchant Blibli mart',
    component: () => import(/* webpackChunkName: "category" */ '../views/merchant/MenuUtama.vue'),
    meta: {
      title: 'Menu Utama Merchant Blibli mart',
    },
  },
  {
    path: '/merchant/list-barang',
    name: 'List Barang Merchant Blibli mart',
    component: () => import(/* webpackChunkName: "category" */ '../views/merchant/ListBarang.vue'),
    meta: {
      title: 'List Barang Merchant Blibli mart',
    },
  },
  {
    path: '/merchant/list-barang/detail/:id',
    name: 'Detail List Barang Merchant Blibli mart',
    component: () => import(/* webpackChunkName: "category" */ '../views/merchant/DetailListBarang.vue'),
    meta: {
      title: 'Detail List Barang Merchant Blibli mart',
    },
  },
  {
    path: '/merchant/jual-barang',
    name: 'Jual Barang Merchant Blibli mart',
    component: () => import(/* webpackChunkName: "category" */ '../views/merchant/JualBarang.vue'),
    meta: {
      title: 'Jual Barang Merchant Blibli mart',
    },
  },
  {
    path: '/merchant/edit-barang/:id',
    name: 'Edit Barang Merchant Blibli mart',
    component: () => import(/* webpackChunkName: "category" */ '../views/merchant/EditBarang.vue'),
    meta: {
      title: 'Edit Barang Merchant Blibli mart',
    },
  },
  {
    path: '/merchant/pemberitahuan',
    name: 'Pemberitahuan Merchant Blibli mart',
    component: () => import(/* webpackChunkName: "category" */ '../views/merchant/PemberitahuanPembelian.vue'),
    meta: {
      title: 'Pemberitahuan Merchant Blibli mart',
    },
  },
  {
    path: '/merchant/pemberitahuan/detail-pesanan/:id',
    name: 'Detail Pesanan Masuk Blibli mart',
    component: () => import(/* webpackChunkName: "category" */ '../views/merchant/DetailPesananMasuk.vue'),
    meta: {
      title: 'Detail Pesanan Masuk Blibli mart',
    },
  },
  {
    path: '/merchant/pemberitahuan/detail-riwayat',
    name: 'Detail Riwayat Masuk Blibli mart',
    component: () => import(/* webpackChunkName: "category" */ '../views/merchant/DetailRiwayat.vue'),
    meta: {
      title: 'Detail Riwayat Masuk Blibli mart',
    },
  },
  {
    path: '/merchant/informasi-market',
    name: 'Informasi Market Blibli mart',
    component: () => import(/* webpackChunkName: "category" */ '../views/merchant/InformasiMarket.vue'),
    meta: {
      title: 'Informasi Market Blibli mart',
    },
  },
  {
    path: '/merchant/informasi-market/ubah-kata-sandi',
    name: 'Ubah Kata Sandi Market Blibli mart',
    component: () => import(/* webpackChunkName: "category" */ '../views/merchant/UbahKataSandi.vue'),
    meta: {
      title: 'Ubah Kata Sandi Market Blibli mart',
    },
  },
  {
    path: '/hubungi-kami',
    name: 'Hubungi kami | Blibli',
    component: () => import(/* webpackChunkName: "category" */ '../views/HubungiKami.vue'),
    meta: {
      title: 'Hubungi kami | Blibli',
    },
  },
  {
    path: '/c/:name',
    name: 'Categori Page',
    component: () => import(/* webpackChunkName: "category" */ '../views/CategoryPage.vue'),
    meta: {
      title: 'Kategori',
    },
  },
  {
    path: '/daftar-pesanan',
    name: 'Daftar Pesanan Page',
    component: () => import(/* webpackChunkName: "category" */ '../views/DaftarPesanan.vue'),
    meta: {
      title: 'Daftar Pesanan',
    },
  },
  {
    path: '/daftar-pesanan/detail/:id',
    name: 'Detail Daftar Pesanan Page',
    component: () => import(/* webpackChunkName: "category" */ '../views/DetailDaftarPesanan.vue'),
    meta: {
      title: 'Detail Daftar Pesanan',
    },
  },
  {
    path: '/admin',
    name: 'Admin Page',
    component: () => import(/* webpackChunkName: "category" */ '../views/admin/Admin.vue'),
    meta: {
      title: 'Admin',
    },
  },
  {
    path: '/admin/login',
    name: 'Login Admin Page',
    component: () => import(/* webpackChunkName: "category" */ '../views/admin/Login.vue'),
    meta: {
      title: 'Login Admin',
    },
  },
  {
    path: '/barter/pengajuan/status/berhasil',
    name: 'Pengajuan Berhasil Page',
    component: () => import(/* webpackChunkName: "category" */ '../views/barter/Berhasil.vue'),
    meta: {
      title: 'Pengajuan Berhasil',
    },
  },
  {
    path: '/admin/tambah-barang',
    name: 'Tambah Barang Page',
    component: () => import(/* webpackChunkName: "category" */ '../views/admin/TambahBarang.vue'),
    meta: {
      title: 'Tambah Barang',
    },
  },
  {
    path: '/admin/edit-barang/:id',
    name: 'Edit Barang Page',
    component: () => import(/* webpackChunkName: "category" */ '../views/admin/EditBarang.vue'),
    meta: {
      title: 'Edit Barang',
    },
  },
  {
    path: '/admin/konfirmasi-barter',
    name: 'List Konfirmasi Barter Page',
    component: () => import(/* webpackChunkName: "category" */ '../views/admin/ListKonfirmasiBarter.vue'),
    meta: {
      title: 'List Konfirmasi Barter',
    },
  },
  {
    path: '/admin/konfirmasi-barter/detail/:id',
    name: 'Detail Konfirmasi Barter Page',
    component: () => import(/* webpackChunkName: "category" */ '../views/admin/KonfirmasiBarter.vue'),
    meta: {
      title: 'Detail Konfirmasi Barter',
    },
  },
  {
    path: '/admin/list-barang',
    name: 'List Barang Page',
    component: () => import(/* webpackChunkName: "category" */ '../views/admin/ListBarang.vue'),
    meta: {
      title: 'List Barang',
    },
  },
  {
    path: '/merchant/transaksi-berhasil',
    name: 'Berhasil',
    component: () => import(/* webpackChunkName: "category" */ '../views/merchant/TransaksiBerhasil.vue'),
    meta: {
      title: 'Berhasil!',
    },
  },
  {
    path: '/admin/list-barang/detail/:id',
    name: 'Detail barang admin',
    component: () => import(/* webpackChunkName: "category" */ '../views/admin/DetailBarang.vue'),
    meta: {
      title: 'Detail barang admin',
    },
  },
  {
    path: '*',
    name: 'Not Found',
    component: () => import(/* webpackChunkName: "category" */ '../views/NotFound.vue'),
    meta: {
      title: 'Halaman tidak ditemukan',
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
