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
          finish-state">2</div>
        </div>
        <div class="line mt-auto mb-auto green"></div>
        <div class="text-center mr-auto">
          <div class="costum-round d-flex align-items-center p-3
          active-state">3</div>
        </div>
      </div>
      <div class="p-3">
        <label for="pemilik">Nama Pemilik</label>
        <b-form-input type="text" class="form-control" id="pemilik"
        v-model="namaPemilik" trim disabled></b-form-input>
        <label for="toko">Nama Toko</label>
        <b-form-input type="text" class="form-control" id="toko"
        v-model="namaToko" trim disabled></b-form-input>
        <label for="alamat">Alamat Toko</label>
        <b-form-input type="text" class="form-control" id="alamat"
        v-model="alamat" trim disabled></b-form-input>
        <label for="hp">Nomor Hp</label>
        <b-form-input type="number" class="form-control" id="hp"
        v-model="nomorHp" trim disabled></b-form-input>
        <label for="ktp">Nomor KTP</label>
        <b-form-input type="number" class="form-control" id="ktp"
        v-model="nomorKtp" trim disabled></b-form-input>
        <label for="email">Email</label>
        <b-form-input type="email" class="form-control" id="email"
        v-model="email" trim disabled></b-form-input>
        <b-form-checkbox
        class="mt-2"
          id="checkbox-1"
          v-model="status"
          name="checkbox-1"
          checked=true
          checked-value=true
          @change="checkStats"
        >
        Saya BERJANJI bahwa data yang saya masukan benar adanya
        </b-form-checkbox>
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
      namaPemilik: 'Handi Hermawan',
      namaToko: 'Blitoko',
      alamat: 'Jawa Barat, Kota Tasikmalaya Mangkubumi Linggajaya RT 001 RW 006',
      nomorHp: '082120389898',
      nomorKtp: '332165494568',
      email: 'test@mail.com',
      btnState: false,
      status: false,
    };
  },
  methods: {
    checkStats() {
      if (
        !this.status
      ) {
        this.btnState = true;
        this.$refs.btn.disabled = false;
      } else {
        this.btnState = false;
        this.$refs.btn.disabled = true;
      }
    },
    next() {
      console.log('tekan');
    },
  },
};
</script>

<style scoped>
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
