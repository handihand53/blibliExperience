<template>
    <div>
        <PlainHeader/>
        <div>
            <img src="../assets/logo/blibli-icon-1.png" alt="" class="icon mr-auto ml-auto">
            <p class="center signup-title">Daftar Akun Baru</p>
            <div class="form-input">
              <input type="text" placeholder="Masukkan Nama Lengkap" class="form-control">
              <input type="text" placeholder="Masukkan Email" class="form-control mt-3">
                <span @click="showPassword1">
                  <div>
                    <font-awesome-icon
                      class="password-option"
                      :class="{active: !isContentVisible1}"
                      icon="eye-slash"/>
                    <font-awesome-icon
                      class="password-option"
                      :class="{active: isContentVisible1}"
                      icon="eye"/>
                  </div>
                </span>
                <input type="password" id="password1" placeholder="Masukkan Kata Sandi"
                class="form-control password-field">
                <span @click="showPassword2">
                  <div>
                    <font-awesome-icon
                      class="password-option2"
                      :class="{active: !isContentVisible}"
                      icon="eye-slash"/>
                    <font-awesome-icon
                      class="password-option2"
                      :class="{active: isContentVisible}"
                      icon="eye"/>
                  </div>
                </span>
                <input type="password" id="password2" placeholder="Konfirmasi Kata Sandi"
                class="form-control password-field">
                <div class="row no-padding no-margin mt-3">
                <div class="col-1 no-padding">
                    <input type="checkbox" class="form-control form-checkbox">
                </div>
                <div class="col-11 no-padding">
                    <small class="snk">Saya sudah membaca & setuju dengan
                        <router-link to="/ww">Syarat & Ketentuan</router-link>
                        Blibli.com</small>
                </div>
            </div>
            <button class="daftar-btn ml-auto mr-auto disable" disabled>Daftar</button>
            </div>
            <p class="center redirect-text">Sudah punya akun ?
                <router-link to="/login">Masuk disini</router-link>
            </p>
        </div>
        <Footer/>
    </div>
</template>

<script>
import PlainHeader from '@/components/PlainHeader.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Login',
  components: {
    PlainHeader,
    Footer,
  },
  data() {
    return {
      isContentVisible: true,
      isContentVisible1: true,
    };
  },
  methods: {
    showPassword1() {
      this.isContentVisible1 = !this.isContentVisible1;
      const passwordField = document.getElementById('password1');
      if (passwordField.getAttribute('type') === 'password') {
        passwordField.setAttribute('type', 'text');
      } else {
        passwordField.setAttribute('type', 'password');
      }
    },
    showPassword2() {
      this.isContentVisible = !this.isContentVisible;
      const passwordField = document.getElementById('password2');
      if (passwordField.getAttribute('type') === 'password') {
        passwordField.setAttribute('type', 'text');
      } else {
        passwordField.setAttribute('type', 'password');
      }
    },
  },
};
</script>

<style lang="scss" scoped>

.redirect-text{
    font-size: 13px;
    margin-top: 12px;
}

.disable{
    cursor: not-allowed;
}

.password-field{
    padding-right: 37px;
    margin-top: 19px;
}

.password-option{
    position: absolute;
    right: 40px;
    margin-top: 30px;
    color: #808080;
    visibility: hidden;
}

.active{
  visibility: visible!important;
}

.password-option2{
    position: absolute;
    right: 40px;
    margin-top: 30px;
    color: #808080;
    visibility: hidden;
}

.no-margin{
  margin: 0px;
}

.daftar-btn{
    // width: 311px;
    margin-left: 25px;
    margin-right: 25px;
    width: 100%;
    display: block;
    height: 38px;
    border-radius: 5px;
    border: none;
    margin-top: 20px;
    color: #898989;
    font-weight: 500;
}

.snk{
    font-weight: 500;
}

.no-padding{
    padding: 0px;
}

.signup-title{
    margin-top: 11px;
}

.form-checkbox{
    width: 18px;
    background-color: white;
    color: #0095DA;
}

.form-input{
    // width: 310px;
    margin-left: 25px;
    margin-right: 25px;
    font-weight: 500;
    margin-top: 20px;
}

.icon{
    display: block;
    width: 33px;
    height: auto;
    margin-top: 5px;
}

.center{
    text-align: center;
}

</style>
