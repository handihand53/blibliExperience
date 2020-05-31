<template>
  <div>
    <HeaderWithCart/>
    <div class="bg-gray">
      <div class="pl-3 pr-3 pt-3">
        <p class="f-12 center">Yuk gabung sebagai Merchant Blibli.com</p>
        <p class="f-12 center">Dapatkan fasilitas menarik dan
          Tingkatkan penjualan Anda bersama kami</p>
      </div>
      <div class="pl-3 pr-3 pb-3">
        <div class="card p-3 border-0 shadow-sm">
          <p class="f-12 font-600 center no-border">Bergabung bersama ribuan brand ternama
            dan temukan jutaan konsumen setiap hari</p>
            <router-link to="./merchant/signup/langkah-1">
              <button class="border-0 shadow rounded btn btn-orange">Daftar Sekarang</button>
            </router-link>
        </div>
      </div>
    </div>
    <div class="pt-2">
      <p class="f-12 center mb-4">Kenapa harus berjualan di Blibli.com ?</p>
      <div class="bg">
        <div class="d-flex justify-content-around">
          <div class="column col-4 center">
            <img src="@/assets/etc/1.png" alt="" class="img-icon">
            <p class="f-11 mt-1">Produk terjamin aman</p>
          </div>
          <div class="column col-4 center">
            <img src="@/assets/etc/2.png" alt="" class="img-icon">
            <p class="f-11 mt-1">Gratis Ongkir</p>
          </div>
          <div class="column col-4 center">
            <img src="@/assets/etc/3.png" alt="" class="img-icon">
            <p class="f-11 mt-1">Gratis Packing</p>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div class="column col-4 center">
            <img src="@/assets/etc/4.png" alt="" class="img-icon">
            <p class="f-11 mt-1">Customer Care 24 jam</p>
          </div>
          <div class="column col-4 center">
            <img src="@/assets/etc/5.png" alt="" class="img-icon">
            <p class="f-11 mt-1">Dipercaya brand ternama</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <div class="bg-cara-jual">
        <p class="f-14 center pt-2 pb-2 no-margin">Cara jualan di Blibli.com ?</p>
        <div class="d-flex justify-content-around mt-2">
          <div class="card col-5 border-0 shadow center p-2">
            <img src="@/assets/etc/Register.png" alt="" class="logo mlr-auto">
            <p class="f-16 mt-2 mb-2">Buat Toko</p>
            <p class="no-margin f-9 pb-2">Ikuti 3 langkah mudah untuk buka toko online gratis.
              Setelah menerima email verifikasi, Anda sudah siap berjualan!</p>
          </div>
          <div class="card col-5 border-0 shadow center p-2">
            <img src="@/assets/etc/Upload_Product.png" alt="" class="logo mlr-auto">
            <p class="f-16  mt-2 mb-2">Upload Produk</p>
            <p class="no-margin f-9 pb-2">Tambahkan produk satu persatu atau secara masal.
              Gunakan data produk yang sudah terdaftar agar produk lebih cepat tampil.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <div class="bg-buka-toko p-2 pl-4 pr-4 column">
        <p class="no-margin center open-label pb-1">Tunggu Apa lagi?<br/>Buka Toko sekarang</p>
        <router-link to="/merchant/signup/langkah-1">
          <button class="border-0 shadow rounded btn btn-orange">DAFTAR SEBAGAI PENJUAL</button>
        </router-link>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import HeaderWithCart from '@/components/HeaderWithCart.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    HeaderWithCart,
    Footer,
  },
};
</script>

<style>
.img-icon{
  width: auto;
  height: 52px;
}

.f-9{
  font-size: 10px;
  color: #808080;
  font-weight: 400;
}

.f-16{
  font-size: 16px;
}

.open-label{
  font-size: 19px;
  font-weight: 500;
  color: white;
}

.mlr-auto{
  margin-left: auto;
  margin-right: auto;
}

.bg-cara-jual{
  height: 250px;
  background-image: url("../../assets/etc/bg-cara-jual.png");
  background-position: right;
  background-size: cover;
}

.bg-buka-toko{
  height: 120px;
  background-image: url("../../assets/etc/bg-buka-toko.jpg");
  background-position: center;
  background-size: cover;
}

.no-padding{
  padding: 0px;
}

.f-14{
  font-size: 14px;
}

.logo{
  width: 45px;
}

.bg-gray{
  background-color: #f1f1f1;
}

.font-600{
  font-weight: 600;
}

.f-12{
  font-size: 12px;
}

.no-margin{
  margin: 0px!important;
}

.center{
  text-align: center;
}

.f-11{
  font-size: 11px;
}

.bg{
  height: 240px;
  background-image: url("../../assets/etc/bg-main.jpg");
  background-position: center;
}

.btn-orange {
    width: 100%;
    background-color: #FFA000;
    color: white;
    border: none;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    transition: all 1s;
}

.btn-orange:hover {
  background: rgb(223, 141, 0) radial-gradient(circle, transparent 1%, rgb(223, 141, 0) 1%)
    center/15000%;
  color: white;
}

.btn-orange:active {
  background-color: #FFA000;
  background-size: 100%;
  transition: background 0s;
}
</style>
