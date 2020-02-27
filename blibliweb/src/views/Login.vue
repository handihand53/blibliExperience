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
              class="form-control password-field">
              <div class="invalid-feedback" :class="{show:passwordIsFalse, 'mb-3':passwordIsFalse}">
                {{ passwordMsg }}
              </div>
              <button @click="login" class="btn-masuk">Masuk</button>
              <p class="sign-information">Belum punya akun ?
                <router-link to="/signup">Daftar disini</router-link>
              </p>
              <div class="forget-password">
                <router-link to="/ww">Lupa kata sandi </router-link>
              </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
// @ is an alias to /src
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
      emailIsFalse: false,
      emailMsg: 'x',
      email: '',
      passwordIsFalse: false,
      passwordMsg: '',
      password: '',
    };
  },
  methods: {
    showPassword() {
      this.isContentVisible = !this.isContentVisible;

      const passwordField = document.getElementById('password');
      if (passwordField.getAttribute('type') === 'password') {
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
