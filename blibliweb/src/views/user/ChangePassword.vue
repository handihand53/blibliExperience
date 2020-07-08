<template>
    <div>
        <HeaderWithCart/>
        <div>
            <div class="center mt-3">
                <img src="@/assets/logo/signature.png" alt="" class="icon-signature">
                <p class="name-text">Handi Hermawan</p>
                <p class="member-text">Member</p>
                <p class="date-text">Sejak Nov 2010</p>
            </div>
            <div class="p-3">
                <label for="sandilama" class="detail-label">
                    Kata Sandi<span class="red">*</span></label>
                <input type="password" class="form-control form-input"
                placeholder="Kata Sandi Lama" id="sandilama" name="sandilama"
                v-model="oldPassword">
                <div class="invalid-feedback"
                :class="{show:oldPasswordStatus}">
                  Kata sandi tidak boleh kosong
                </div>
                <label for="sandibaru" class="detail-label">
                    Kata Sandi Baru<span class="red">*</span></label>
                <input type="password" class="form-control form-input"
                placeholder="Kata Sandi Baru" id="sandibaru" name="sandibaru"
                v-model="newPassword">
                <div class="invalid-feedback"
                :class="{show:newPasswordStatus}">
                  Kata sandi baru tidak boleh kosong
                </div>
                <label for="konfirmasisandi" class="detail-label">
                    Konfirmasi Kata Sandi<span class="red">*</span></label>
                <input type="password" class="form-control form-input"
                placeholder="Konfirmasi Kata Sandi" id="konfirmasisandi" name="konfirmasisandi"
                v-model="confirmNewPassword">
                <div class="invalid-feedback"
                :class="{show:confirmPasswordStatus}">
                  Kata sandi tidak sama
                </div>
                <div class="right">
                    <span @click="back" class="back-text">Kembali</span>
                    <button @click="updatePassword"
                    class="change-btn rounded">Ubah Kata Sandi</button>
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
import HeaderWithCart from '@/components/HeaderWithCart.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';

export default {
  name: 'Account',
  components: {
    HeaderWithCart,
    Footer,
  },
  data() {
    return {
      isLoading: true,
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
      userId: '',
      oldPasswordStatus: false,
      newPasswordStatus: false,
      confirmPasswordStatus: false,
    };
  },
  created() {
    // melakukan check apakah user masih login atau tidak
    // jika user masih login, maka akan dilempar ke halaman utama
    const dataId = this.$cookie.get('dataId');
    const dataToken = this.$cookie.get('dataToken');
    axios.get(`http://localhost:${this.port}/experience/api/users?id=${dataId}`,
      {
        headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
      })
      .then((response) => {
        if (response.data === null) {
          this.$router.push('/');
        }
        this.isLoading = false;
        this.userId = response.data.data.userId;
      }).catch(() => {
        this.$router.push('/');
        this.isLoading = false;
      });
  },
  methods: {
    back() {
      window.history.back();
    },
    checkOldPassword() {
      if (this.oldPassword === '') {
        this.oldPasswordStatus = true;
      } else {
        this.oldPasswordStatus = false;
      }
    },
    checkNewPassword() {
      if (this.newPassword === '') {
        this.newPasswordStatus = true;
      } else {
        this.newPasswordStatus = false;
      }
    },
    checkConfirmPassword() {
      if (this.confirmNewPassword !== this.newPassword) {
        this.confirmPasswordStatus = true;
      } else {
        this.confirmPasswordStatus = false;
      }
    },
    updatePassword() {
      this.checkOldPassword();
      this.checkNewPassword();
      this.checkConfirmPassword();
      if (!this.confirmPasswordStatus
      && !this.newPasswordStatus
      && !this.oldPasswordStatus) {
        this.isLoading = true;
        const dataToken = this.$cookie.get('dataToken');

        const changePassword = {
          userId: this.userId,
          userNewPassword: this.newPassword,
          userPassword: this.oldPassword,
        };

        axios.put(`http://localhost:${this.port}/experience/api/users/update/password`, changePassword,
          {
            headers:
              {
                Authorization: `Bearer ${dataToken}`,
              },
          })
          .then((response) => {
            if (response.data !== null) {
              this.$router.push('/profile');
            }
            this.isLoading = false;
          }).catch(() => {
            this.isLoading = false;
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$red: #FF0000;

.change-btn{
    border: none;
    background: #FD8218;
    color: white;
    font-weight: 500;
    width: 200px;
    padding-top: 7px;
    padding-bottom: 7px;
    margin-left: 10px;
}

.invalid-feedback{
  display: none;
  margin-bottom: 7px;
}

.right{
    text-align: right;
}

.back-text{
    font-size: 13px;
    color: #0EB3FF;
}

.detail-label{
    font-size: 13px;
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

.red{
    color: $red;
}

.form-input{
  margin-bottom: 7px;
}

.icon-signature{
    width: 105px;
}

.show{
  display: block;
}

.center{
    text-align: center;
}

.name-text{
    font-size: 18px;
    margin-bottom: 0px;
}

.member-text{
    font-size: 15px;
    color: #808080;
    margin-bottom: 0px;
}

.date-text{
    font-size: 12px;
    color: #808080;
    margin-bottom: 0px;
    font-weight: 300;
}

</style>
