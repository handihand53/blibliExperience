<template>
  <div class="bg-gray">
    <PlainHeader />
    <div class="text-center mar-custom">
      <font-awesome-icon icon="check-circle" class="ml-auto check-icon"/>
      <p class="mt-4">Transaksi berhasil di proses</p>
      <router-link to="/daftar-pengajuan">
        <b-button variant="primary">Kembali</b-button>
      </router-link>
    </div>
    <Footer/>
  </div>
</template>

<script>
import PlainHeader from '@/components/PlainHeader.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    PlainHeader,
    Footer,
  },
};
</script>

<style scoped>
.bottom-navigation{
  position: fixed;
  bottom: 0;
  height: 60px;
  background-color: white;
  width: 100%;
  box-shadow: 0px 0px 13px -7px rgba(0, 0, 0, 0.75);
}

.bg-gray{
  background-color: #F6F6F6;
}

.cl-blue{
  color: #3594FF;
}

.cl-green{
  color: rgb(0, 135, 11);
}

.fs-15{
  font-size: 18px !important;
  font-weight: 600;
}

.price{
  color: #FF7600;
}

.mar-custom{
  margin-bottom: 150px;
}

.text-total{
  font-size: 12px;
  padding: 0px;
  margin: 0px;
}

hr{
  margin: 0px!important;
}

.text-price{
  font-size: 18px;
  padding: 0px;
  margin: 0px;
  color: #ff7600;
  font-weight: 600;
}

.text-title-card{
  font-size: 13px;
}

.btn-checkout{
  width: 117px;
  height: 40px;
  font-size: 14px;
  color: white;
  background-color: #FD8218;
  border: none;
  border-radius: 7px;
  display: block;
  margin-top: 3px;
  float: right;
  transition: all 0.7s;
}

.btn-checkout:hover {
  background: #e86c00 radial-gradient(circle, transparent 1%, #e86c00 1%)
    center/15000%;
  color: white;
}

.img-detail{
  width: 80px;
}

.text-card{
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bg-gray-card{
  background-color: #E3E3E3;
}

.btn-checkout:active {
  background-color: #ff973b;
  background-size: 100%;
  transition: background 0s;
}

.bg-gray{
  background-color: #F6F6F6;
  height: 100vh;
}

.text-gray{
  color: rgb(121, 121, 121);
}

.check-icon{
  margin-top: 120px;
  color: #0095DA;
  font-size: 100px;
}
</style>
