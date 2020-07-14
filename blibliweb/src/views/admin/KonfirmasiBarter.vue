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
        <span class="text-detail">Produk yang ditawarkan</span>
        <div class="bg-white p-3">
          <div>
            <div class="row">
              <div class="col-4 m-0 p-0">
                <img src="@/assets/etc/aqua.png" alt="" class="img-product m-auto">
              </div>
              <div class="col-8 m-0 p-0">
                <p class="title-product">Botol Minum Aqua Mineral 300ML</p>
                <span class="tag-status blue">Baru</span>
                <p class="desc-product">Deskripsi: laskdjkla jdlaskj l</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white mt-3">
          <div class="header-desc no-margin no-padding">
            <p class="desc-box p-2">Detail Barang</p>
          </div>
          <div class="desc pl-3 pr-3 pb-2">
            <table class="table table-striped border-0 m-0 p-0">
              <tr class="content-table">
                <td>Lama pemakaian</td>
                <td>-</td>
              </tr>
              <tr class="content-table">
                <td>Kelengkapan paket</td>
                <td>Dus, Buku panduan, headset, charger</td>
              </tr>
              <tr class="content-table">
                <td>Dimensi</td>
                <td>15 Inch</td>
              </tr>
              <tr class="content-table">
                <td>Berat</td>
                <td>15 kg</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="separator fs-12 my-3 px-3">Barter dengan
        <font-awesome-icon
          class="ml-1 exchange"
          icon="exchange-alt"/>
      </div>
       <div class="px-3 mt-3">
        <span class="text-detail"></span>
        <div class="bg-white p-3">
          <div>
            <div class="row">
              <div class="col-4 m-0 p-0">
                <img src="@/assets/etc/aqua.png" alt="" class="img-product m-auto">
              </div>
              <div class="col-8 m-0 p-0">
                <p class="title-product">Botol Minum Aqua Mineral 300ML</p>
                <span class="tag-status blue">Baru</span>
                <p class="desc-product">Deskripsi: laskdjkla jdlaskj l asd laskdjkla jdlaskj l</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white mt-3">
          <div class="header-desc no-margin no-padding">
            <p class="desc-box p-2">Detail Barang</p>
          </div>
          <div class="desc pl-3 pr-3 pb-2">
            <table class="table table-striped border-0 m-0 p-0">
              <tr class="content-table">
                <td>Lama pemakaian</td>
                <td>-</td>
              </tr>
              <tr class="content-table">
                <td>Kelengkapan paket</td>
                <td>Dus, Buku panduan, headset, charger</td>
              </tr>
              <tr class="content-table">
                <td>Dimensi</td>
                <td>15 Inch</td>
              </tr>
              <tr class="content-table">
                <td>Berat</td>
                <td>15 kg</td>
              </tr>
            </table>
          </div>
        </div>
        <hr>
        <div class="mt-3">
          <b-button variant="primary" block="">Proses</b-button>
          <b-button variant="outline-secondary" block="">Tolak</b-button>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import HeaderWithCart from '@/components/HeaderWithCart.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
import Cookie from 'vue-cookie';

export default {
  components: {
    HeaderWithCart,
    Footer,
  },
  data() {
    return {
    };
  },
  async created() {
    await this.checkUser();
  },
  methods: {
    checkUser() {
      // melakukan check apakah user masih login atau tidak
      // jika user masih login, maka akan dilempar ke halaman utama
      const dataId = Cookie.get('dataId');
      const dataToken = Cookie.get('dataToken');
      axios.get(`http://localhost:${this.port}/experience/api/users?id=${dataId}`,
        {
          headers:
            {
              Authorization: `Bearer ${dataToken}`,
            },
        })
        .then((response) => {
          if (response.data === null) {
            this.$router.push('/');
          }
          this.isLoading = false;
          this.nama = response.data.data.userName;
          this.createdAt = response.data.data.userCreatedAt;
        })
        .catch(() => {
          this.isLogin = false;
        });
    },
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

.header-desc{
  background-color: #0095DA;
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

.tag-status{
  font-size: 12px;
  padding: 3px 5px;
}

.desc-box{
  color: white;
}

.blue{
  background-color:rgb(50, 115, 206);
  border-radius: 10px;
  color: white;
}

.desc-product{
  font-size: 12px;
  color: #6c6c6c;
  margin: 0px;
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

tr.content-table:nth-child(odd){
  background-color: #eeeeee;
}
</style>
