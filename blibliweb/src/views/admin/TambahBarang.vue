<template>
  <div class="bg-gray">
    <PlainHeaderMarket/>
    <div class="bg-white p-2">
      <small class="text-gray">Tambah data master barang</small>
    </div>
    <div class="pl-3 pr-3">
      <label for="nama-barang">Nama Barang<span class="red">*</span></label>
      <b-form-input type="text" class="form-control" id="nama-barang"
      placeholder="Nama Barang"
      v-model="namaBarang" trim @keyup="checkAll"></b-form-input>
      <label for="brand">Brand<span class="red">*</span></label>
      <b-form-input type="text" class="form-control" id="brand"
      placeholder="Brand"
      v-model="brand" trim @keyup="checkAll"></b-form-input>
      <label for="barcode">Barcode<span class="red">*</span></label>
      <b-form-input type="number" min="0" class="form-control" id="barcode"
      placeholder="Kode barcode" v-model="barcode" trim @keyup="checkAll"></b-form-input>
      <label for="kategori">Kategori<span class="red">*</span></label>
      <b-form-select v-model="kategori" :options="kategoris" id="kategori"
      @change="checkAll"></b-form-select>
      <label for="beratBarang">Berat Barang<span class="red">*</span></label>
      <b-form-input type="number" min="0" class="form-control" id="beratBarang"
      placeholder="Contoh: 12 kg" v-model="beratBarang" trim @keyup="checkAll"></b-form-input>
      <label for="dimensiBarang">Dimensi Barang<span class="red">*</span></label>
      <b-form-input type="text" class="form-control" id="dimensiBarang"
      placeholder="Contoh: 12cm x 12cm x 15cm" v-model="dimensiBarang"
      trim @keyup="checkAll"></b-form-input>
      <!-- <label for="kelengkapanBarang">Kelengkapan Barang<span class="red">*</span></label>
      <b-form-input type="text" class="form-control" id="kelengkapanBarang"
      placeholder="Kardus, buku petunjuk, kabel" v-model="kelengkapanBarang"
      trim @keyup="checkAll"></b-form-input> -->
      <label for="deskripsi">Deskripsi<span class="red">*</span></label>
      <b-form-textarea
        id="deskripsi"
        v-model="deskripsi"
        placeholder="Masukkan deskripsi barang"
        rows="3"
        max-rows="6"
        trim
        @keyup="checkAll"
      ></b-form-textarea>
      <!-- <label for="foto" class="mt-2">Upload Foto Produk<span class="red">*</span></label> -->
      <!-- <div class="input-group">
        <div class="custom-file">
            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
            <input @change="processFile($event)" type="file" class="custom-file-input"
            id="inputGroupFile01"
            aria-describedby="inputGroupFileAddon01">
        </div>
      </div> -->
      <button @click="post" class="next-btn mt-4"
      :class="{'disable': !btnState, 'active-btn': btnState}"
      ref='btn' disabled>Input Barang</button>
    </div>
    <Footer/>
  </div>
</template>

<script>
import PlainHeaderMarket from '@/components/PlainHeaderMarket.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';

export default {
  components: {
    PlainHeaderMarket,
    Footer,
  },
  data() {
    return {
      namaBarang: '',
      brand: '',
      barcode: '',
      beratBarang: '',
      dimensiBarang: '',
      deskripsi: '',
      kategori: null,
      kategoris: [
        { value: null, text: 'Kategori' },
      ],
      btnState: false,
    };
  },
  async created() {
    await this.getCategory();
  },
  methods: {
    getCategory() {
      // const config = {
      //   headers:
      //     {
      //       Authorization: `Bearer ${dataToken}`,
      //     },
      // };

      axios.get(`http://localhost:${this.port}/experience/api/products/enums/category`)
        .then((response) => {
          response.data.data.categories.forEach((i) => {
            this.kategoris.push({
              value: i, text: `${i}`,
            });
          });
        });
    },
    checkAll() {
      if (
        this.namaBarang !== ''
        && this.brand !== ''
        && this.barcode !== ''
        && this.beratBarang !== ''
        && this.dimensiBarang !== ''
        && this.deskripsi !== ''
        && this.kategori !== null
      ) {
        this.btnState = true;
        this.$refs.btn.disabled = false;
      } else {
        this.btnState = false;
        this.$refs.btn.disabled = true;
      }
    },
    post() {
      const masterData = {
        productBarcode: this.barcode,
        productBrand: this.brand,
        productCategory: this.kategori,
        productCreatedAt: '2020-07-12T15:09:25.044Z',
        productDescription: this.deskripsi,
        productName: this.namaBarang,
        productVolume: this.dimensiBarang,
        productWeight: this.beratBarang,
      };

      axios.post(`http://localhost:${this.port}/experience/api/admin/productMasters`, masterData)
        .then((response) => {
          console.log(response);
        });
      console.log(masterData);
    },
  },
};
</script>

<style scoped>
.red{
  color: red;
}

.bg-gray{
  background-color: #F6F6F6;
}

.text-gray{
  color: rgb(121, 121, 121);
}

label{
  margin-top: 8px;
}

.next-btn{
    border: none;
    background: #898989;
    border-radius: 5px;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    color: white;
    font-weight: 500;
    margin-top: 7px;
    transition: all 1s;
}

.disable{
    cursor: not-allowed;
}

.active-btn{
  background: #FF9100!important;
  color: white;
  cursor: pointer;
  opacity: 1!important;
}
</style>
