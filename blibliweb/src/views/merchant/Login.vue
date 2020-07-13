  <template>
  <div class="top-50">
    <div class="header bg-blue">
      <img src="..\..\..\src\assets\logo\blibli_wht.png"
            alt="blibli Logo" class="ml-2 blilogo" />
    </div>
    <div >
      <div class="bg-main p-2 pt-3">
        <div class="card p-2 shadow">
          <p class="card-title">Masuk ke Akun Merchant</p>
          <label class="input-label" for="email">Email</label>
          <input v-model="email" @change="emailCheckFormat"
          type="email" name="email" id="email" placeholder="Masukkan Email"
          class="form-control">
          <div class="invalid-feedback" :class="{show:emailIsFalse}">
            {{ emailMsg }}
          </div>
          <span @click="showPassword" class="eye-icon" id="showpassword">
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
          <label class="input-label" for="password">Kata Sandi</label>
          <input  v-model="password" type="password" name="password" id="password"
          placeholder="Masukkan Kata Sandi"
          class="form-control">
          <div class="invalid-feedback" :class="{show:passwordIsFalse}">
            {{ passwordMsg }}
          </div>
          <button @click="login" class="btn rounded shadow-lg bg-bl-btn" id="login"
          >Masuk</button>
          <router-link to="" class="forget-pass">Lupa kata sandi ?</router-link>
        </div>
      </div>
    </div>
    <div class="pt-4">
      <p class="f-12 center mb-3">Kenapa harus berjualan di Blibli.com ?</p>
      <div class="bg">
        <div class="d-flex justify-content-around">
          <div class="column col-4 center">
            <img src="@/assets/etc/1.png" alt="" class="img-icon">
            <p class="f-11 mt-1">Produk terjamin aman</p>
          </div>
          <div class="column col-4 center">
            <img src="@/assets/etc/2.png" alt="" class="img-icon">
            <p class="f-11 mt-1">Gratis Ongkir</p>
          </div>
          <div class="column col-4 center">
            <img src="@/assets/etc/3.png" alt="" class="img-icon">
            <p class="f-11 mt-1">Gratis Packing</p>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div class="column col-4 center">
            <img src="@/assets/etc/4.png" alt="" class="img-icon">
            <p class="f-11 mt-1">Customer Care 24 jam</p>
          </div>
          <div class="column col-4 center">
            <img src="@/assets/etc/5.png" alt="" class="img-icon">
            <p class="f-11 mt-1">Dipercaya brand ternama</p>
          </div>
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
import Footer from '@/components/Footer.vue';
import axios from 'axios';
import Cookie from 'vue-cookie';

export default {
  components: {
    Footer,
  },
  data() {
    return {
      isContentVisible: true,
      emailIsFalse: false,
      emailMsg: '',
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
      this.isLoggedIn = true;
      // melakukan check apakah user masih login atau tidak
      // jika user masih login, maka akan dilempar ke halaman utama
      const dataId = Cookie.get('dataIdAdmin');
      const dataToken = Cookie.get('dataTokenAdmin');
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
            this.$router.push('/admin');
          } else {
            this.isLoading = false;
          }
        }).catch(() => {
          this.isLoading = false;
        });
    },
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
      this.emailMsg = 'Format email anda salah.';
    },
    login() {
      this.checkEmail();
      this.checkPassword();
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
            // Cookie.set('dataIdAdmin', response.data.userId, 1); // set cookies expired 1 hari
            // set cookies expired 1 hari
            // Cookie.set('dataTokenAdmin', response.data.accessToken, 1);
            // jika login berhasil maka akan dilempar ke halaman utama
            // setTimeout(() => this.$router.push('/admin'), 1000);
            Cookie.set('dataIdMerchant', response.data.userId, 1); // set cookies expired 1 hari
            Cookie.set('dataTokenMerchant', response.data.accessToken, 1); // set cookies expired 1 hari
            setTimeout(() => this.$router.push('/merchant/menu-utama'), 1000); // jika login berhasil maka akan dilempar ke halaman utama
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

<style scoped>
@import "../../style/font/font.scss";

.btn-orange {
  width: 100%;
  background-color: #FFA000;
  color: white;
  border: none;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  transition: all 1s;
}

.spinner{
  width: 50px;
  height: 50px;
}

.btn-orange:hover {
  background: rgb(223, 141, 0) radial-gradient(circle, transparent 1%, rgb(223, 141, 0) 1%)
    center/15000%;
  color: white;
}

.btn-orange:active {
  background-color: #FFA000;
  background-size: 100%;
  transition: background 0s;
}

.header{
  top: 0;
  position: fixed;
  box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  padding: 7px;
  z-index: 1000;
}

.password-option{
    position: absolute;
    right: 40px;
    margin-top: 10px;
    color: #808080;
    visibility: hidden;
}

.eye-icon{
  padding-left: 20px;
}

.top-50{
  top: 49px;
  position: relative;
}

.bg{
  height: 240px;
  background-image: url("../../assets/etc/bg-main.jpg");
  background-position: center;
}

.active{
  visibility: visible!important;
  margin-top: 50px;
  right: 20px;
}

.open-label{
  font-size: 19px;
  font-weight: 500;
  color: white;
}

.bg-buka-toko{
  height: 120px;
  background-image: url("../../assets/etc/bg-buka-toko.jpg");
  background-position: center;
  background-size: cover;
}

.img-icon{
  width: auto;
  height: 52px;
}

.f-12{
  font-size: 12px;
}

.f-11{
  font-size: 11px;
}

.invalid-feedback{
  display: none;
}

.bg-bl-btn{
  margin-top: 15px;
  background-color: #0095DA;
  color: white!important;
  font-weight: 600;
}

.overlay-loading{
  z-index: 10000;
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

.bg-bl-btn:hover {
  background: rgb(0, 154, 220) radial-gradient(circle, transparent 1%, rgb(0, 154, 220) 1%)
    center/15000%;
  color: white;
}

.bg-bl-btn:active {
  background-color: rgb(0, 127, 181);
  background-size: 100%;
  transition: background 1s;
}

.show{
  display: block!important;
}

.card-title{
  font-size: 22px;
  margin: 0px;
  text-align: center;
}

.forget-pass{
  color: #0074D9!important;
  text-align: center;
  margin-top: 8px;
  margin-bottom: 0px;
  font-size: 12px;
}

.center{
  text-align: center;
}

.input-label{
  font-size: 13px;
  margin-top: 10px;
}

.bg-main {
  background: rgba(10, 167, 198, 0.92);
}

.bg-bl {
  background-color: #0095da;
  height: 50px;
}

.blilogo {
  width: 100px;
  height: auto;
}

.bg-blue {
  background-color: #0095da;
}

.no-padding {
  padding: 0px !important;
}

.no-margin {
  margin: 0px !important;
}

.fixed {
  position: fixed;
}

.mt-mb-auto {
  margin-top: auto;
  margin-bottom: auto;
}

.sticky- {
  position: sticky;
  top: 0;
  z-index: 100;
}

.barcodelogo {
  width: 35px;
}

.scan-text {
  font-size: 11px;
  color: #808080;
  margin-bottom: 0px;
}

.shadow-box {
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.3);
}
</style>
