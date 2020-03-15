<template>
  <div class="bg-gray margin-bot">
    <HeaderWithCart/>
    <div class="mt-2 bg-white p-2 pl-3 pr-3">
      <div class="d-flex justify-content-between">
        <p class="detail-title-product">Xiaomi Redmi 6A</p>
        <p class="tag mt-1">Baru</p>
      </div>
      <div>
        <p class="brand-detail-product">
          Brand:
          <span class="blue-brand">Samsung</span>
        </p>
      </div>
      <div class="p-3 center">
        <img src="@/assets/etc/aqua.png" alt class="detail-image-product p-3" />
      </div>
       <div class="pb-2">
        <table class="table no-margin">
          <tr>
            <td class="sub-text border-top-none">Harga awal</td>
            <td colspan="2" class="price-detail-text border-top-none">Rp13.500.000</td>
          </tr>
          <tr>
            <td class="sub-text">Bid</td>
            <td colspan="2" class="price-detail-text">Rp100.000</td>
          </tr>
          <tr>
            <td class="sub-text">Penawaran Tertinggi</td>
            <td class="price-detail-text">Rp13.300.000</td>
          </tr>
        </table>
        <p class="count-people border-top-none pl-2">2 Orang sudah
            melakukan penawaran</p>
      </div>
    </div>
    <div class="mt-3 bg-white p-3">
      <p class="profile-text mb-1">Profile Pemilik Barang</p>
      <p class="name-text mb-1">Nama : <span class="detail-name">Handi Hermawan</span></p>
      <p class="address-text mb-1">Alamat : <span class="detail-address">Jl.
        Juadi No.29, Kotabaru, Kec. Gondokusuman, Kota Yogyakarta,
        Daerah Istimewa Yogyakarta 55224</span></p>
    </div>
    <div class="mt-3 bg-white p-3">
      <p class="riwayat-text">Riwayat Penawaran</p>
      <p class="riwayat-list" title="Handi Hermawan">Handi menawar dengan harga
        <span class="bid-price">Rp13.300.000</span></p>
      <p class="lainnya-text">Lihat Lainnya</p>
    </div>
    <div class="about-detail-product">
      <div class="p-3">
        <div class="box-shadow mb-2">
          <div class="head-tentang">
            <p class="text-detail-product">Tentang Produk</p>
          </div>
          <div class="p-1 pb-3">
            <div class="list-detail-tentang">
              <p class="text-detail-product">
                Status Barang :
                <span class="tag">Baru</span>
              </p>
            </div>
            <div class="list-detail-tentang">
              <p class="text-detail-product">Lama Pemakaian : 3 Tahun 6 bulan</p>
            </div>
            <div class="list-detail-tentang">
              <p class="text-detail-product">
                Deskripsi barang : Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Neque reiciendis eos, doloribus
                veniam nobis praesentium nesciunt, voluptatum voluptas corporis ipsam
                exercitationem fugit perferendis quisquam ab voluptates voluptate doloremque
                quibusdam accusamus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-tawar box-shadow">
      <div class="text-uppercase">Tawarkan Harga</div>
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
.margin-bot{
  margin-bottom: 65px;
}

.text-detail-product{
  font-size: 12px;
  text-align: justify;
}

.bottom-tawar{
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100%;
  text-align: center;
  padding-top: 17px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  background-color: #ff7f0f;
}

.bottom-tawar:hover {
  background: #e86c00 radial-gradient(circle, transparent 1%, #e86c00 1%)
    center/15000%;
  color: white;
}

.bottom-tawar:active {
  background-color: #ff973b;
  background-size: 100%;
  transition: background 0s;
}

.list-detail-tentang{
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

.text-detail-product{
  font-size: 12px;
  text-align: justify;
}

.box-shadow{
  box-shadow: 0px 0px 15px -9px rgba(0, 0, 0, 0.809);
}

.head-tentang{
  background-color: #0095DA;
  padding: 10px;
  color: white;
}

.about-detail-product{
  background-color: #F3F3F3;
}

.lainnya-text{
  cursor: pointer;
  margin-top: 15px;
  font-size: 13px;
  font-weight: 600;
  color: #0077FF;
  text-align: center;
}

.lainnya-text:active{
  font-weight: bold;
}

.riwayat-list{
  margin-top: 5px;
  font-size: 13px;
}

.bid-price{
  color: #FF7600;
}

.riwayat-text{
  font-weight: 600;
}

.name-text{
  font-size: 13px;
  font-weight: 500;
}

.detail-address{
  color: #808080;
}

.address-text{
  font-size: 13px;
  text-align: justify;
}

.detail-name{
  color: #0077FF;
}

.profile-text{
  font-weight: 600;
}

.profile-pemilik{
  background-color: #F3F3F3;
}

.no-margin{
  margin: 0;
}

.count-people{
  font-size: 13px;
  color: #808080;
}

.price-detail-text{
  color: #FF7600;
  font-size: 18px;
}

.sub-text{
  font-size: 13px;
  color: #808080;
}

.border-top-none{
  border-top: none !important;
}

.table td{
  /* border-top */
}

.bg-gray{
  background-color: #F1F0F0;
}

.brand-detail-product{
  clear: both;
  margin-bottom: 0px;
  font-size: 11px;
}

p{
  margin: 0;
}

.bg-white{
  background-color: white;
}

.tag{
  background-color: #0095DA;
  color: white;
  font-size: 10px;
  padding: 2px 10px;
  border-radius: 10px;
}

.detail-title-product{
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 0px;
}

.blue-brand{
  color: #0095DA;
}

.detail-image-product{
  max-width: 320px;
}
</style>
