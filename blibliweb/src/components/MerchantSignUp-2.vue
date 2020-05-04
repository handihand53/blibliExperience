<template>
  <div>
    <div>
      <h3 class="text-center mt-2">Langkah</h3>
      <div class="row no-gutters mb-2 mt-3">
        <div class="text-center ml-auto">
          <div class="costum-round d-flex align-items-center p-3
          finish-state">1</div>
        </div>
        <div class="line mt-auto mb-auto green"></div>
        <div class="text-center">
          <div class="costum-round d-flex align-items-center p-3
          active-state">2</div>
        </div>
        <div class="line mt-auto mb-auto"></div>
        <div class="text-center mr-auto">
          <div class="costum-round d-flex align-items-center p-3">3</div>
        </div>
      </div>
      <div class="p-3">
        <label for="toko">Nama Toko<span class="red">*</span></label>
        <b-form-input type="text" class="form-control" id="toko"
        placeholder="Masukkan nama toko anda" :state="namaState"
        v-model="namaToko" trim @input="checkAll"></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback">
          {{ namaTokoErrorMsg }}
        </b-form-invalid-feedback>
        <label for="deskripsi" class="mt-2">Deskripsi Toko<span class="red">*</span></label>
        <b-form-input type="text" class="form-control" id="deskripsi"
        v-model="deksripsi" placeholder="Deskripsi Toko"
        @input="checkAll" trim :state="deskripsiState"></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback">
          {{ deskripsiErrorMsg }}
        </b-form-invalid-feedback>
        <h5 class="mt-3 mb-0">Alamat Toko</h5>
        <label for="alamat" class="mt-2">Alamat<span class="red">*</span></label>
        <b-form-input type="text" class="form-control" id="alamat"
        v-model="alamat" placeholder="Contoh: Jl ir. Professor Yohanes"
        @input="checkAll" :state="alamatState"></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback">
          {{ alamatErrorMsg }}
        </b-form-invalid-feedback>
        <label for="provinsi" class="mt-2">Provinsi<span class="red">*</span></label>
        <b-form-select v-model="provinsi" :options="provinsis" id="provinsi"
        @change="checkAll"></b-form-select>
        <label for="kabupaten" class="mt-2">Kabupaten<span class="red">*</span></label>
        <b-form-select v-model="kabupaten" :options="kabupatens" id="kabupaten"
        @change="checkAll"></b-form-select>
        <label for="kota" class="mt-2">Kota<span class="red">*</span></label>
        <b-form-select v-model="kota" :options="kotas" id="kota" @change="checkAll"></b-form-select>
        <label for="kecamatan" class="mt-2">Kecamatan<span class="red">*</span>
        </label>
        <b-form-select v-model="kecamatan" :options="kecamatans" id="kecamatan"
        @change="checkAll"></b-form-select>
        <label for="kelurahan" class="mt-2">Kelurahan<span class="red">*</span>
        </label>
        <b-form-select v-model="kelurahan" :options="kelurahans" id="kelurahan"
        @change="checkAll"></b-form-select>
        <div class="row no-gutters">
          <div class="col-5 mr-3">
            <label for="rt" class="mt-2">RT<span class="red">*</span></label>
            <b-form-input type="text" id="rt"
            v-model="rt" placeholder="RT"
            @input="checkAll" :state="rtState"></b-form-input>
          </div>
          <div class="col-5">
            <label for="rw" class="mt-2">RW<span class="red">*</span></label>
            <b-form-input type="text" id="rw"
            v-model="rw" placeholder="RW"
            @input="checkAll" :state="rwState"></b-form-input>
          </div>
        </div>
        <button @click="next" class="next-btn mt-3"
        :class="{'disable': !btnState, 'active-btn': btnState}"
        ref='btn' disabled>Selanjutnya</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      namaState: null,
      deskripsiState: null,
      alamatState: null,
      alamat: '',
      deksripsi: '',
      namaToko: '',
      provinsi: null,
      kabupaten: null,
      kota: null,
      kecamatan: null,
      kelurahan: null,
      provinsis: [
        { value: null, text: 'Provinsi' },
        { value: 'pro', text: 'test' },
      ],
      kabupatens: [
        { value: null, text: 'Kabupaten' },
        { value: 'pro', text: 'test' },
      ],
      kotas: [
        { value: null, text: 'Kota' },
        { value: 'pro', text: 'test' },
      ],
      kecamatans: [
        { value: null, text: 'Kecamatan' },
        { value: 'pro', text: 'test' },
      ],
      kelurahans: [
        { value: null, text: 'Kelurahan' },
        { value: 'pro', text: 'test' },
      ],
      rt: '',
      rtState: null,
      rw: '',
      rwState: null,
      btnState: false,
    };
  },
  methods: {
    checkAll() {
      if (
        this.namaToko !== ''
        && this.deksripsi !== ''
        && this.provinsi !== null
        && this.kabupaten !== null
        && this.kota !== null
        && this.kecamatan !== null
        && this.kelurahan !== null
        && this.rt !== ''
        && this.rw !== ''
      ) {
        this.btnState = true;
        this.$refs.btn.disabled = false;
      } else {
        this.btnState = false;
        this.$refs.btn.disabled = true;
      }
    },
    next() {
      // console.log('tekan');
    },
  },
};
</script>

<style>
.red{
  color: red;
}

.no-padding{
  padding: 0px;
}

.no-margin{
  margin: 0px;
}

.password-hint{
  margin-top: 5px;
  line-height: 1.4;
  font-size: 11px;
  font-weight: 400;
  color: #808080;
  margin-bottom: 0px;
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

.active-state{
  background-color: #0095da;
  color: white;
}

.finish-state{
  background-color: #2FA656;
  border: 1px solid #2FA656!important;
  color: white;
}

.costum-round{
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #0095da;
}

.green{
  border-bottom: 2px solid #2FA656!important;
}

.line{
  width: 100px;
  border-bottom: 2px solid #0084C4;
  height: 1px;
}
</style>
