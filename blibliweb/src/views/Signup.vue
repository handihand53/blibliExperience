<template>
    <div>
        <PlainHeader/>
        <div>
            <img src="../assets/logo/blibli-icon-1.png" alt="" class="icon mr-auto ml-auto">
            <p class="center signup-title">Daftar Akun Baru</p>
            <div class="form-input">
              <input v-model="nama" type="text"
              placeholder="Masukkan Nama Lengkap"
              class="form-control"
              @change="nameCheck">
              <div class="invalid-feedback" :class="{show:nameIsFalse, 'mb-3':nameIsFalse}">
                {{ nameMsg }}
              </div>
              <input type="email" placeholder="Masukkan Email" class="form-control mt-3"
              v-model="email" @change="emailCheckFormat">
              <div class="invalid-feedback" :class="{show:emailIsFalse}">
                {{ emailMsg }}
              </div>
              <span @click="showPassword('password1')" id="pass1">
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
                <input v-model="password1" @change="checkPassword1()"
                type="password" id="password1" placeholder="Masukkan Kata Sandi"
                class="form-control password-field">
                <div class="invalid-feedback"
                :class="{show:passwordIsFalse1}">
                  {{ passwordMsg1 }}
                </div>
                <span @click="showPassword('password2')" id="pass2">
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
                <input v-model="password2" @change="checkPassword2()"
                type="password" id="password2"
                placeholder="Konfirmasi Kata Sandi"
                class="form-control password-field">
                <div class="invalid-feedback"
                :class="{show:passwordIsFalse2}">
                  {{ passwordMsg2 }}
                </div>
                <div class="row no-padding no-margin mt-3">
                <div class="col-1 no-padding">
                    <input @click="snkCheck" type="checkbox"
                    ref="snk" class="form-control form-checkbox">
                </div>
                <div class="col-11 no-padding">
                    <small class="snk">Saya sudah membaca & setuju dengan
                        <router-link to="/ww">Syarat & Ketentuan</router-link>
                        Blibli.com</small>
                </div>
            </div>
            <button @click="signUp" class="daftar-btn ml-auto mr-auto"
            :class="{disable: isDisable, 'active-btn': !isDisable}"
            ref='btn' disabled>Daftar</button>
            </div>
            <p class="center redirect-text">Sudah punya akun ?
              <router-link to="/login">Masuk disini</router-link>
            </p>
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
import PlainHeader from '@/components/PlainHeader.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
import Cookie from 'vue-cookie';

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
      nameMsg: '',
      nameIsFalse: false,
      nama: '',
      emailIsFalse: false,
      emailMsg: '',
      email: '',
      password1: '',
      passwordIsFalse1: false,
      passwordMsg1: '',
      password2: '',
      passwordIsFalse2: false,
      passwordMsg2: '',
      match: false,
      matchEmail: false,
      syaratDanKetentuan: false,
      isDisable: true,
      isDisabled: false,
      isLoading: false,
    };
  },
  async created() {
    await this.checkLoginUser();
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
        .then((response) => {
          this.isLoggedIn = true;
          if (response.data !== null) {
            this.$router.push('/');
          } else {
            this.isLoading = false;
          }
        }).catch((s) => {
          console.log(s);
          this.isLoading = false;
        });
    },
    showPassword(id) {
      if (id === 'password1') this.isContentVisible1 = !this.isContentVisible1;
      if (id === 'password2') this.isContentVisible = !this.isContentVisible;

      const passwordField = document.getElementById(id);
      if (passwordField.getAttribute('type') === 'password') {
        passwordField.setAttribute('type', 'text');
      } else {
        passwordField.setAttribute('type', 'password');
      }
    },
    nameCheck() {
      if (this.nama === undefined || this.nama === '') {
        this.nameMsg = 'Silahkan isi nama lengkap anda';
        this.nameIsFalse = true;
      } else {
        this.nameMsg = '';
        this.nameIsFalse = false;
      }

      this.isAllFormFill();
    },
    emailCheckFormat() {
      /* eslint-disable */
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      /* eslint-enable */
      this.emailIsFalse = !re.test(this.email);
      this.emailMsg = 'Email anda salah.';
      this.matchEmail = false;
      if (re.test(this.email)) {
        this.emailMsg = '';
        this.matchEmail = true;
        this.isAllFormFill();
      }
    },
    checkEmail() {
      if (this.email === undefined) {
        this.emailMsg = 'Silahkan isi email anda';
        this.emailIsFalse = true;
      }
      this.isAllFormFill();
    },
    checkPassword1() {
      if (this.password1 === undefined || this.password1 === '') {
        this.passwordMsg1 = 'Silahkan isi kata sandi anda';
        this.passwordIsFalse1 = true;
      } else {
        this.passwordIsFalse1 = false;
        this.passwordMsg1 = '';
      }
      this.checkSamePassword();
      this.isAllFormFill();
    },
    checkPassword2() {
      if (this.password2 === undefined || this.password2 === '') {
        this.passwordMsg2 = 'Silahkan isi kata sandi anda';
        this.passwordIsFalse2 = true;
      } else {
        this.passwordIsFalse2 = false;
        this.passwordMsg2 = '';
      }
      this.checkSamePassword();
      this.isAllFormFill();
    },
    checkSamePassword() {
      if (this.password2 !== this.password1 && (this.password2 !== '' || this.password2 !== undefined)) {
        this.passwordMsg2 = 'Password tidak sama';
        this.passwordIsFalse2 = true;
        this.match = false;
      } else {
        this.passwordIsFalse2 = false;
        this.match = true;
      }
    },
    isAllFormFill() {
      if (
        (this.nama !== '' || this.nama !== undefined)
        && (this.email !== '' || this.email !== undefined)
        && (this.password1 !== '' || this.password1 !== undefined)
        && (this.password2 !== '' || this.password2 !== undefined)
        && this.match === true
        && this.matchEmail === true
        && this.syaratDanKetentuan === true) {
        this.$refs.btn.disabled = false;
        this.isDisable = false;
      } else {
        this.isDisable = true;
        this.$refs.btn.disabled = true;
      }
    },
    snkCheck() {
      if (this.$refs.snk.checked) this.syaratDanKetentuan = true;
      else this.syaratDanKetentuan = false;
      this.isAllFormFill();
    },
    signUp() {
      this.isLoading = true;

      const payload = {
        userEmail: this.email,
        userName: this.nama,
        userPassword: this.password1,
      };

      const login = {
        userEmail: this.email,
        userPassword: this.password1,
      };

      axios.post(`http://localhost:${this.port}/experience/api/auth/register`, payload)
        .then(() => {
          axios.post(`http://localhost:${this.port}/experience/api/auth/login`, login)
            .then((response) => {
              Cookie.set('dataId', response.data.userId, 1); // set cookies dengan expired 1 hari
              Cookie.set('dataToken', response.data.accessToken, 1); // set cookies dengan expired 1 hari
              setTimeout(() => this.$router.push('/'), 1000);
            });
        })
        .catch((e) => {
          console.log(e);
        });
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

.invalid-feedback{
  display: block;
  visibility: hidden;
}

.show{
  visibility: visible;
}

.password-field{
    padding-right: 37px;
    margin-top: 19px;
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

.hide{
  display: none!important;
}

.spinner{
  width: 50px;
  height: 50px;
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
    background-color: #c9c4c4;
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

.active-btn{
  background-color: orange;
  color: white;
  cursor: pointer;
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
