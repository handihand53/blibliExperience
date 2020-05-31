<template>
  <div class="bg-gray">
    <HeaderWithCart/>
    <div class="bg-white p-2">
      <p class="title">Detail Produk Yang Diajukan</p>
    </div>
    <div class="bg-white mt-2 p-2">
      <p class="barter-title">Produk yang akan di barter</p>
      <div class="row no-margin pt-2">
        <img src="@/assets/etc/aqua.png" alt="" class="img-barter mt-2">
        <div class="column d-flex align-items-center">
          <div class="ml-2">
            <p class="title-product">Samsung A10</p>
            <label class="tag">Baru</label>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white mt-3 p-3">
      <label for="" class="label-input">Nama Produk<span class="red">*</span></label>
      <input type="text" class="form-control">

      <label for="" class="label-input">Brand/Merk Produk<span class="red">*</span></label>
      <input type="text" class="form-control">

      <label for="" class="label-input">Estimasi harga barang<span class="red">*</span>
      (Rupiah)</label>
      <input type="text" class="form-control">

      <label for="" class="label-input">Status Barang<span class="red">*</span></label>
      <input type="text" class="form-control">

      <label for="" class="label-input">Deskripsi Barang<span class="red">*</span></label>
      <textarea type="text" class="form-control"></textarea>
      <small>Misalkan : lama pemakaian, keadaan barang, dll</small>

      <label for="" class="label-input">Uang Tunai<span class="red">*</span></label>
      <input type="text" class="form-control">

      <label for="" class="label-input mt-2">Foto Produk<span class="red">*</span></label>
      <div class="input-group">
        <div class="custom-file">
            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
            <input type="file" class="custom-file-input" id="inputGroupFile01"
            aria-describedby="inputGroupFileAddon01">
        </div>
      </div>

      <small class="text-suggest">Format foto yang diperbolehkan : png,
      jpeg, jpg</small><br>
      <small class="text-suggest">Ukuran maks per foto adalah 5 mb</small><br>
      <button class="ajukan-btn text-uppercase">Ajukan</button>
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

<style scoped>
.bg-gray{
  background-color: #f1f0f0;
}

.red{
  color: red;
}

.label-input{
  font-size: 14px;
}

.ajukan-btn{
    border: none;
    background: #FD8218;
    border-radius: 5px;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    color: white;
    font-weight: 500;
    margin-top: 7px;
    transition: all 1s;
}

.ajukan-btn:hover {
  background: #e86c00 radial-gradient(circle, transparent 1%, #e86c00 1%)
    center/15000%;
  color: white;
}

.ajukan-btn:active {
  background-color: #ff973b;
  background-size: 100%;
  transition: background 1s;
}

.tag{
  background-color: #0095DA;
  color: white;
  font-size: 10px;
  padding: 2px 10px;
  border-radius: 10px;
}

.no-margin{
  margin: 0;
}

.bg-white{
  background-color: white;
}

.title{
  font-size: 14px;
}

.title-product{
  font-size: 14px;
  font-weight: 600;
}

p{
  margin: 0;
}

.img-barter{
  width: 50px;
}

.barter-title{
  font-size: 13px;
  color: rgb(137, 137, 137);
}
</style>
