<template>
  <div class="bg-gray">
    <HeaderWithCart/>
    <div class="bg-white p-2">
      <p class="title">Detail Produk Yang Diajukan</p>
    </div>
    <div class="bg-white mt-2 p-2">
      <p class="barter-title">Produk yang akan di barter</p>
      <div class="row no-margin pt-2">
        <img :src="getImage(product.productBarterImagePaths[0])" alt="" class="img-barter mt-2">
        <div class="column d-flex align-items-center">
          <div class="ml-2">
            <p class="title-product">{{product.productBarterName}}</p>
            <label class="tag" v-if="product.productBarterCondition == 'NEW'">
              {{product.productBarterCondition}}</label>
            <label class="tag-lama" v-else>{{product.productBarterCondition}}</label>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white mt-3 p-3">
      <label for="" class="label-input">Nama Produk<span class="red">*</span></label>
      <input type="text" class="form-control" v-model="namaProduk">

      <label for="" class="label-input">Brand/Merk Produk<span class="red">*</span></label>
      <input type="text" class="form-control" v-model="brand">

      <label class="detail-label">
            Kondisi Barang<span class="red">*</span></label><br>
        <select class="form-control form-input" v-model="status">
            <option value="" hidden selected disabled>--- Pilih Kondisi Barang ---</option>
            <option value="SECOND">Lama</option>
            <option value="NEW">Baru</option>
        </select>

      <label for="" class="label-input">Kelengkapan Barang<span class="red">*</span></label>
      <input type="text" class="form-control" v-model="kelengkapan">

      <label for="" class="label-input">Volume Barang<span class="red">*</span></label>
      <input type="text" class="form-control" v-model="volume">

      <label for="" class="label-input">Berat Barang<span class="red">*</span></label>
      <input type="number" min="0" class="form-control" v-model="berat">

      <label for="" class="label-input">Deskripsi Barang<span class="red">*</span></label>
      <textarea type="text" class="form-control" v-model="deskripsi"></textarea>
      <small>Misalkan : lama pemakaian, keadaan barang, dll</small>

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
      <button class="ajukan-btn text-uppercase"
      @click="ajukanBarter">Ajukan</button>
      <small v-if="!formAllFilled" class="red">Silahkan isi semua form.</small>
    </div>
    <Footer/>
    <div class="overlay-loading d-flex align-items-center"
    :class="{hide: !isLoading}">
      <b-spinner
      type="grow"
      variant="primary"
      class="ml-auto mr-auto spinner"
      ></b-spinner>
    </div>
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
      isLoading: false,
      product: '',
      namaProduk: '',
      brand: '',
      status: '',
      deskripsi: '',
      kelengkapan: '',
      volume: '',
      berat: '',
      formAllFilled: true,
    };
  },
  async created() {
    await this.checkLoginUser();
    await this.getBarterById();
  },
  methods: {
    async checkLoginUser() {
    // melakukan check apakah user masih login atau tidak
    // jika user masih login, maka akan dilempar ke halaman utama
      const dataId = Cookie.get('dataId');
      const dataToken = Cookie.get('dataToken');
      await axios.get(`http://localhost:${this.port}/experience/api/users?id=${dataId}`,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .catch(() => {
          this.$router.push('/');
        });
    },
    async getBarterById() {
      await axios.get(`http://localhost:${this.port}/experience/api/barter?productBarterId=${this.$route.params.id}`)
        .then((response) => {
          this.product = response.data.data;
          console.log(this.product);
        });
    },
    async ajukanBarter() {
      const dataToken = Cookie.get('dataToken');
      const dataId = Cookie.get('dataId');

      const ajukan = {
        barterSubmissionBrand: this.brand,
        barterSubmissionCondition: this.status,
        barterSubmissionDescription: this.deskripsi,
        barterSubmissionImagePaths: [
          'string',
        ],
        barterSubmissionName: this.namaProduk,
        barterSubmissionPackage: this.kelengkapan,
        barterSubmissionVolume: this.volume,
        barterSubmissionWeight: this.berat,
        productBarterId: this.$route.params.id,
        userId: dataId,
      };
      console.log(ajukan);
      if (
        this.namaProduk !== ''
        && this.brand !== ''
        && this.status !== ''
        && this.deskripsi !== ''
        && this.kelengkapan !== ''
        && this.volume !== ''
        && this.berat !== ''
      ) {
        this.isLoading = true;
        await axios.post(`http://localhost:${this.port}/experience/api/barterSubmission`, ajukan,
          {
            headers:
            {
              Authorization: `Bearer ${dataToken}`,
            },
          })
          .then(() => {
            setTimeout(() => this.$router.push('/barter/pengajuan/berhasil'), 1000);
            // this.category = response.data.data.categories;
          });
      } else {
        this.formAllFilled = false;
      }
      // add logic checkout here
    },
    getImage(imagePath) {
      const path = imagePath.split('/');
      return `/assets/resources/uploads/barterProductPhoto/${path[path.length - 1]}`;
    },
  },
};
</script>

<style scoped>
.bg-gray{
  background-color: #f1f0f0;
}

.hide{
  display: none!important;
}

.spinner{
  width: 50px;
  height: 50px;
}

.overlay-loading{
  z-index: 200;
  background-color: #0000006a;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
}

.red{
  color: red;
}

.red{
  color: red;
  font-weight: 500;
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

.tag-lama{
  background-color: #FD8218;
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
  max-width: 100px;
}

.barter-title{
  font-size: 13px;
  color: rgb(137, 137, 137);
}
</style>
