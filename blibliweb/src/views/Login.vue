<template>
    <div>
      <PlainHeader/>
        <div class="center">
            <img src="@/assets/logo/blibli_logo.png" class="login-logo">
        </div>
        <div class="login-area">
          <p class="login-text">Masuk Ke Akun Kamu</p>
          <div class="form-input">
            <input type="email" placeholder="Email" class="form-control"
            v-model="email" @change="emailCheckFormat">
            <div class="invalid-feedback" :class="{show:emailIsFalse, 'mb-3':emailIsFalse}">
              {{ emailMsg }}
            </div>
            <span @click="showPassword">
              <div>
                <font-awesome-icon
                  class="password-option"
                  :class="{active: !isContentVisible}"
                  icon="eye-slash"/>
                <font-awesome-icon
                  class="password-option"
                  :class="{active: isContentVisible}"
                  icon="eye"/>
              </div>
            </span>
            <input v-model="password" id="password" type="password" placeholder="Kata Sandi"
            ref="pass"
            class="form-control password-field">
            <div class="invalid-feedback" :class="{show:passwordIsFalse, 'mb-3':passwordIsFalse}">
              {{ passwordMsg }}
            </div>
            <button @click="login" class="btn-masuk" id="login">Masuk</button>
            <p class="sign-information">Belum punya akun ?
              <router-link to="/signup">Daftar disini</router-link>
            </p>
            <div class="forget-password">
              <router-link to="/ww">Lupa kata sandi </router-link>
            </div>
          </div>
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
      isLoading: true,
      isContentVisible: true,
      emailIsFalse: false,
      emailMsg: 'x',
      email: '',
      passwordIsFalse: false,
      passwordMsg: '',
      password: '',
      isLoggedIn: false,
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
          console.log(response);
          this.isLoggedIn = true;
          if (response.data !== null) {
            this.$router.push('/');
          } else {
            this.isLoading = false;
          }
        }).catch(() => {
          this.isLoading = false;
        });
    },
    // untuk toggle on/off show/hide password
    showPassword() {
      this.isContentVisible = !this.isContentVisible;

      const passwordField = document.getElementById('password');
      if (!this.isContentVisible) {
        passwordField.setAttribute('type', 'text');
      } else {
        passwordField.setAttribute('type', 'password');
      }
    },
    emailCheckFormat() {
      /* eslint-disable */
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      /* eslint-enable */
      this.emailIsFalse = !re.test(this.email);
      this.emailMsg = 'Email anda salah.';
    },
    login() {
      this.checkEmail();
      this.checkPassword();
      this.isLoading = false;
      if (!this.emailIsFalse && !this.passwordIsFalse) {
        this.isLoading = true;
        const login = {
          userEmail: this.email,
          userPassword: this.password,
        };

        axios.post(`http://localhost:${this.port}/experience/api/auth/login`, login)
          .then((response) => {
            console.log(response);
            this.isLoggedIn = true;
            Cookie.set('dataId', response.data.userId, 1); // set cookies dengan expired 1 hari
            Cookie.set('dataToken', response.data.accessToken, 1); // set cookies dengan expired 1 hari
            setTimeout(() => this.$router.push('/'), 1000); // jika login berhasil maka akan dilempar ke halaman utama
          })
          .catch(() => {
            this.isLoading = false;
          });
      }
    },
    checkEmail() {
      if (this.email === undefined || this.email === '') {
        this.emailMsg = 'Silahkan isi email anda';
        this.emailIsFalse = true;
      }
    },
    checkPassword() {
      if (this.password === undefined || this.password === '') {
        this.passwordMsg = 'Silahkan isi kata sandi anda';
        this.passwordIsFalse = true;
      } else this.passwordIsFalse = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/font/font.scss";

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

.center{
  text-align: center;
}

.login-area{
  margin-bottom: 50px;
}

.sign-information{
  margin-top: 16px;
  text-align: center;
  font-size: 14px;
  font-weight: 100;
  margin-bottom: 0px;
}

.invalid-feedback{
  display: block;
  visibility: hidden;
}

.show{
  visibility: visible;
}

.forget-password{
  text-align: center;
  font-size: 14px;
  font-weight: 100;
}

.btn-masuk {
    height: 58px;
    width: 100%;
    margin-top: 25px;
    background-color: #FF9100;
    color: white;
    border: none;
    border-radius: 7px;
    font-size: 20px;
    transition: all 1s;
}

.btn-masuk:hover {
  background: #e86c00 radial-gradient(circle, transparent 1%, #e86c00 1%)
    center/15000%;
  color: white;
}

.btn-masuk:active {
  background-color: #ff973b;
  background-size: 100%;
  transition: background 0s;
}

.active{
  visibility: visible!important;
}

.form-input{
    // width: 310px;
    margin-left: 25px;
    margin-right: 25px;
    margin-bottom: 20px;
}

.password-field{
    padding-right: 37px;
}

.password-option{
    position: absolute;
    right: 40px;
    margin-top: 10px;
    color: #808080;
    visibility: hidden;
}

.login-text{
    text-align: center;
    // margin-bottom: 0px;
}

.login-logo {
    width: 290px;
    margin: 36px;
}

</style>
