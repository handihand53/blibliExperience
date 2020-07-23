<template>
    <div class='mt-1 p-3'>
        <label for='namabarang' class="detail-label">
            Nama Barang<span class="red">*</span></label>
        <input type="text" class="form-control form-input"
        placeholder="Nama Barang" id="namabarang" name="namabarang"
        v-model="namaBarang">
        <label for="brand" class="detail-label">
            Brand<span class="red">*</span></label>
        <input type="text" class="form-control form-input"
        placeholder="Asus, Aqua, Acer" id="brand" name="brand"
        v-model="brand">
        <label for="kategori" class="detail-label">
            Kategori<span class="red">*</span></label>
        <b-form-select v-model="kategori" :options="kategoris" id="kategori"
        ></b-form-select>
        <label for="barangPreferensi" class="detail-label">
            Barang preferensi<span class="red">*</span></label>
        <input type="text" class="form-control form-input"
        placeholder="Kulkas / Handphone / Sepeda"
        id="barangPreferensi" name="barangPreferensi"
        v-model="barangPreferensi">
        <label class="detail-label">
            Kondisi Barang<span class="red">*</span></label><br>
        <select class="form-control form-input" v-model="status">
            <option value="" hidden selected disabled>--- Pilih Kondisi Barang ---</option>
            <option value="SECOND">Lama</option>
            <option value="NEW">Baru</option>
        </select>
        <label for="berat" class="detail-label">
            Berat Barang (kg)<span class="red">*</span></label>
        <input type="number" min="0" class="form-control form-input"
        placeholder="Contoh: 12" id="berat" name="berat" v-model="berat">
        <label for="dimensi" class="detail-label">
            Volume<span class="red">*</span></label>
        <input type="text" class="form-control form-input"
        placeholder="Contoh : 12 cm x 15 cm x 30 cm" id="dimensi" name="dimensi"
        v-model="volume">
        <label for="kelengkapan" class="detail-label">
            Kelengkapan Paket<span class="red">*</span></label>
        <input type="text" class="form-control form-input"
        placeholder="Contoh: dus, buku panduan, kabel" id="kelengkapan" name="kelengkapan"
        v-model="kelengkapanPaket">
        <label for="deskripsi" class="detail-label">
            Deskripsi<span class="red">*</span></label>
        <textarea class="form-control form-input"
        placeholder="Deskripsi" id="deskripsi" name="deskripsi" v-model="deskripsi">
        </textarea>
        <label for="foto" class="detail-label">
            Foto Produk<span class="red">*</span></label>
        <div class="input-group">
            <div class="custom-file">
                <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                <input type="file" class="custom-file-input" id="inputGroupFile01"
                aria-describedby="inputGroupFileAddon01" @change="onFileChange">
            </div>
        </div>
        <small class="text-suggest">Format foto yang diperbolehkan : png,
        jpeg, jpg</small><br>
        <div class="mt-3">
          <p class="m-0 p-0 fs-12" v-for="(name, idx) in imageName" :key="idx">{{name}}
            <font-awesome-icon class="fs-icon" icon="times" @click="remove(idx)"/></p>
        </div>
        <button class="save-btn" @click="posting">Posting</button>
        <small v-if="!formAllFilled" class="red">Silahkan isi semua form.</small>
        <div class="fixed-alert text-center pl-3 pr-3">
          <b-alert
            :show="dismissCountDown"
            dismissible
            variant="success"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged"
          >
            Barang berhasil ditambahkan
          </b-alert>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Cookie from 'vue-cookie';

export default {
  data() {
    return {
      namaBarang: '',
      brand: '',
      harga: '',
      kategori: '',
      barangPreferensi: '',
      berat: '',
      status: '',
      volume: '',
      kelengkapanPaket: '',
      deskripsi: '',
      kategoris: [],
      formAllFilled: true,
      image: [],
      dismissSecs: 2,
      dismissCountDown: 0,
      imageName: [],
    };
  },
  async created() {
    await this.checkLoginUser();
    await this.getCategory();
  },
  methods: {
    async checkLoginUser() {
      this.isLoggedIn = true;
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
          this.$router.replace('/');
        });
    },
    async getCategory() {
      await axios.get(`http://localhost:${this.port}/experience/api/products/enums/category`)
        .then((response) => {
          response.data.data.categories.forEach((i) => {
            this.kategoris.push({
              value: i, text: `${i}`,
            });
          });
        });
    },
    posting() {
      const dataId = Cookie.get('dataId');
      const dataToken = Cookie.get('dataToken');
      const masterData = {
        productBarterBrand: this.brand,
        productBarterCondition: this.status,
        productBarterDescription: this.deskripsi,
        productBarterName: this.namaBarang,
        productBarterPackage: this.kelengkapanPaket,
        productBarterPreference: this.barangPreferensi,
        productBarterVolume: this.volume,
        productBarterWeight: this.berat,
        productCategory: this.kategori,
        userId: dataId,
      };

      const formData = new FormData();
      this.image.forEach((data) => {
        formData.append('images', data);
      });
      formData.append('productBarterMetaData', JSON.stringify(masterData));
      if (
        this.namaBarang !== ''
        && this.brand !== ''
        && this.status !== ''
        && this.deskripsi !== ''
        && this.kelengkapanPaket !== ''
        && this.barangPreferensi !== ''
        && this.volume !== ''
        && this.berat !== ''
        && this.kategori !== ''
        && this.image.length !== 0
      ) {
        axios.post(`http://localhost:${this.port}/experience/api/barter`, formData, {
          headers:
            {
              Authorization: `Bearer ${dataToken}`,
            },
        })
          .then(() => {
            this.dismissCountDown = this.dismissSecs;
            this.$router.push('/barter');
          });
      } else {
        this.formAllFilled = false;
      }
    },
    onFileChange(e) {
      /* eslint-disable */
      if (
        e.target.files[0].type === "image/png"
        || e.target.files[0].type === "image/jpeg"
      ) {
        this.imageName.push(e.target.files[0].name);
        this.image.push(e.target.files[0]);
      }
      this.checkAll();
    },
    remove(idx) {
      this.image.splice(idx, 1);
      this.imageName.splice(idx, 1);
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
  },
};
</script>

<style lang='scss' scoped>
$red: #FF0000;

.save-btn{
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

.save-btn:hover {
  background: #e86c00 radial-gradient(circle, transparent 1%, #e86c00 1%)
    center/15000%;
  color: white;
}

.save-btn:active {
  background-color: #ff973b;
  background-size: 100%;
  transition: background 1s;
}

.red{
  color: red;
  font-weight: 500;
}

.text-suggest{
    font-weight: 500px;
    color: #808080;
}

.background-gray{
    background-color: #f3f3f3;
}

.background-white{
    background-color: white;
}

.label-radio{
    margin-left: 5px;
    margin-right: 10px;
    font-size: 13px;
}

.red{
    color: $red;
}

.form-input{
    margin-bottom: 10px;
}

.barter{
    margin-right: 20px;
    padding-bottom: 2px;
    font-size: 14px;
    display: inline-block;
    color: #AEAEAE;
}

.fixed-alert{
  z-index: 100;
  position: fixed;
  bottom: -20px;
  margin: 5% auto; /* Will not center vertically and won't work in IE6/7. */
  left: 0;
  right: 0;
}

.cari-barang{
    font-size: 14px;
    padding-bottom: 2px;
    display: inline-block;
    color: #AEAEAE;
}


.fs-12{
  font-size: 12px;
}

.active{
    border-bottom: 2px #0095DA solid;
    color: #0095DA;
}

.fs-icon{
  font-size: 10px;
  color: red;
}

.detail-label{
    font-size: 13px;
}
</style>
