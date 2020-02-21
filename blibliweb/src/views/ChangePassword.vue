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
                placeholder="Kata Sandi Lama" id="sandilama" name="sandilama">
                <label for="sandilama" class="detail-label">
                    Kata Sandi Baru<span class="red">*</span></label>
                <input type="password" class="form-control form-input"
                placeholder="Kata Sandi Baru" id="sandilama" name="sandilama">
                <label for="sandilama" class="detail-label">
                    Konfirmasi Kata Sandi<span class="red">*</span></label>
                <input type="password" class="form-control form-input"
                placeholder="Konfirmasi Kata Sandi" id="sandilama" name="sandilama">
                <div class="right">
                    <span @click="back" class="back-text">Kembali</span>
                    <button class="change-btn">Ubah Kata Sandi</button>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import HeaderWithCart from '@/components/HeaderWithCart.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Account',
  components: {
    HeaderWithCart,
    Footer,
  },
  methods: {
    back() {
      window.history.back();
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

.red{
    color: $red;
}

.form-input{
    margin-bottom: 10px;
}

.icon-signature{
    width: 105px;
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
