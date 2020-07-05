<template>
   <div class="bg-gray">
    <HeaderWithCart/>
    <div>
      <div class="px-3 pt-2 bg-white pb-3">
        <small class="cl-gray">Detail Konfirmasi Barter</small>
        <p class="text-detail pt-2">Tanggal Barter: 11 Aug 2019</p>
        <p class="text-detail">No. Barter: 12034757560</p>
        <p class="text-detail">Status barter:
          <span class="text-bold">Menunggu Konfirmasi</span></p>
      </div>
      <div class="px-3 mt-3">
        <span class="text-detail">Produk yang dibarter</span>
        <div class="bg-white p-3">
          <p class="status-produk m-0">Terkirim</p>
          <div>
            <hr class="m-0 my-1">
            <div class="row">
              <div class="col-4 m-0 p-0">
                <img src="@/assets/etc/aqua.png" alt="" class="img-product m-auto">
              </div>
              <div class="col-8 m-0 p-0">
                <p class="title-product">Botol Minum Aqua Mineral 300ML</p>
                <p class="price-product">Rp.13.000</p>
                <p class="stock-product">Jumlah: 1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="separator fs-12 my-3 px-3">Barter dengan
        <font-awesome-icon
          class="ml-1 exchange"
          icon="exchange-alt"/>
      </div>
      <div class="px-3">
        <span class="text-detail">Pembayaran</span>
        <div class="bg-white p-3">
          <p class="m-0 pembayaran">
            <span class="text-detail left-side">Total Pembayaran:</span>
            <span class="text-detail right-side orange">Rp 107,000</span>
          </p>
          <p class="m-0 pembayaran">
            <span class="text-detail left-side">Total Belanja:</span>
            <span class="text-detail right-side orange">Rp 107,000</span>
          </p>
          <p class="m-0 pembayaran">
            <span class="text-detail left-side">Biaya Pengiriman:</span>
            <span class="text-detail right-side">gratis</span>
          </p>
          <p class="m-0 pembayaran">
            <span class="text-detail left-side">Biaya Layanan:</span>
            <span class="text-detail right-side">gratis</span>
          </p>
          <hr>
          <p class="m-0 pembayaran">
            <span class="text-detail">Metode Pembayaran: </span>
            <span class="text-detail font-weight-bold">BANK BNI</span>
          </p>
          <p class="m-0 pembayaran">
            <span class="text-detail">Status Transaksi: </span>
            <span class="text-detail font-weight-bold success">Sukses</span>
          </p>
        </div>
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
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.cl-gray{
  color: rgb(138, 138, 138);
}

.success{
  color: rgb(0, 106, 255);
}

.separator {
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 12px;
}

.separator::before, .separator::after {
    content: '';
    flex: 1;
    border-bottom: 0.8px solid rgb(148, 148, 148);
}

.separator::before {
    margin-right: .25em;
}

.separator::after {
    margin-left: .25em;
}

.exchange{
  transform: rotate(90deg);
}

.title-product{
  font-size: 14px;
  margin: 0px;
}

.pembayaran{
  line-height: 20px;
}

.bg-gray{
  background-color: #f1f1f1;
}

.stock-product{
  font-size: 13px;
  margin: 0px;
}

.left-side{
  display: inline-block;
  width: 50%;
}

.right-side{
  display: inline-block;
  width: 50%;
  text-align: right;
}

.price-product{
  font-size: 13px;
  margin: 0px;
  color: orange;
}

.img-product {
  padding: 5px;
  max-width: 80px;
  max-height: 120px;
  display: block;
}

.status-produk{
  color: rgb(82, 125, 251);
  font-weight: 600;
}

.text-detail{
  font-weight: 400;
  font-size: 13px;
  margin: 0px;
}

.orange{
  color: orange;
}

.text-bold{
  font-weight: 600;
}
</style>
