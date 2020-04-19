<template>
  <div>
    <DaftarPenjualHeader/>
    <div>
      <h3 class="text-center">Langkah</h3>
      <div class="row no-gutters mb-2 mt-2">
        <div class="col-4 text-center">
          <div class="costum-round ml-auto mr-auto d-flex align-items-center p-3
          active-state">1</div>
        </div>
        <div class="col-4 text-center">
          <div class="costum-round ml-auto mr-auto d-flex align-items-center p-3">2</div>
        </div>
        <div class="col-4 text-center">
          <div class="costum-round ml-auto mr-auto d-flex align-items-center p-3">3</div>
        </div>
      </div>
      <div class="p-3">
        <label for="email">Email<span class="red">*</span></label>
        <b-form-input type="email" class="form-control" id="email"
        placeholder="Masukkan Email" :state="this.state"
        v-model="email" trim @change="emailCheckFormat"></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback">
          {{ emailErrorMsg }}
        </b-form-invalid-feedback>
        <label for="katasandi" class="mt-2">Kata Sandi<span class="red">*</span></label>
        <b-form-input type="password" class="form-control" id="katasandi"
        v-model="password" placeholder="Masukkan kata sandi"
        @input="passwordCheckFormat" trim :state="passwordState"></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback">
          {{ passwordErrorMsg }}
        </b-form-invalid-feedback>
        <p class="password-hint">Format password min 8 karakter, mengandung huruf besar (A-Z),
          huruf kecil (a-z), dan angka (0-9)</p>
        <label for="katasandi2" class="mt-2">Konfirmasi Kata Sandi<span class="red">*</span></label>
        <b-form-input type="password" class="form-control" id="katasandi2"
        v-model="password2" placeholder="Konfirmasi kata sandi"
        @input="samePasswordCheck" :state="this.samePasswordState"></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback">
          {{ samePasswordErrorMsg }}
        </b-form-invalid-feedback>
        <hr>
        <label for="pemilik">Nama Pemilik<span class="red">*</span></label>
        <b-form-input type="text" class="form-control" id="pemilik"
        v-model="nama" placeholder="Nama Sesuai Kartu Identitas"
        @input="checkAllInput"></b-form-input>
        <label for="hp" class="mt-2">Handphone<span class="red">*</span></label>
        <b-form-input type="number" min="0" class="form-control" id="hp"
        v-model="notlp" placeholder="Contoh : 08212365233333"
        @input="checkAllInput"></b-form-input>
        <label for="date" class="mt-2">Tanggal Lahir<span class="red">*</span></label>
        <b-form-input v-model="tgl" id="date" type="date"
        @input="checkAllInput"></b-form-input>
        <label for="ktp" class="mt-2">Nomor KTP<span class="red">*</span></label>
        <b-form-input v-model="ktp" id="ktp" type="number" placeholder="Masukkan nomor KTP"
        @input="checkAllInput">
        </b-form-input>
        <label for="foto" class="mt-2">Upload Foto KTP<span class="red">*</span></label>
        <div class="input-group">
          <div class="custom-file">
              <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
              <input type="file" class="custom-file-input" id="inputGroupFile01"
              aria-describedby="inputGroupFileAddon01">
          </div>
        </div>
      <button @click="next" class="next-btn mt-3"
      :class="{'disable': !btnState, 'active-btn': btnState}"
      ref='btn' disabled>Selanjutnya</button>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import DaftarPenjualHeader from '@/components/DaftarPenjualHeader.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    DaftarPenjualHeader,
    Footer,
  },
  data() {
    return {
      email: '',
      emailErrorMsg: '',
      state: null,
      password: '',
      password2: '',
      passwordState: null,
      passwordErrorMsg: '',
      samePasswordState: null,
      samePasswordErrorMsg: '',
      ktp: '',
      nama: '',
      notlp: '',
      tgl: '',
      btnState: false,
    };
  },
  computed: {
    emailState() {
      return this.email.length > 0;
    },
  },
  methods: {
    emailCheckFormat() {
      /* eslint-disable */
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      /* eslint-enable */
      this.state = re.test(this.email);
      this.emailErrorMsg = 'Email anda salah.';
      this.checkAllInput();
    },
    passwordCheckFormat() {
      const re = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})');
      this.passwordState = re.test(this.password);
      if (!re.test(this.password)) this.passwordErrorMsg = 'Format password tidak sesuai';
      else this.passwordErrorMsg = '';
      this.samePasswordCheck();
    },
    samePasswordCheck() {
      if (this.password !== this.password2) {
        this.samePasswordState = false;
        this.samePasswordErrorMsg = 'Password tidak sama';
      } else {
        this.samePasswordErrorMsg = '';
        this.samePasswordState = true;
      }
      this.checkAllInput();
    },
    checkAllInput() {
      if (
        this.email !== ''
        && this.password !== ''
        && this.password2 !== ''
        && this.nama !== ''
        && this.ktp !== ''
        && this.notlp !== ''
        && this.tgl !== ''
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

.costum-round{
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #0095da;
}
</style>
