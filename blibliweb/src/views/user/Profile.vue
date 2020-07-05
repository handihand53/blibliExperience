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
                <!-- nama -->
                <label for="name" class="detail-label">
                    Nama Lengkap<span class="red">*</span></label>
                <input type="text" class="form-control form-input"
                placeholder="Nama Lengkap" id="name" name="name"
                value="Handi Hermawan">
                <!-- email -->
                <label for="email" class="detail-label">
                    Email Login<span class="red">*</span></label>
                <input type="text" class="form-control form-input" id="email" name="email"
                disabled value="handihand53@gmail.com">
                <!-- tanggal -->
                <label for="day" class="detail-label">
                    Tanggal Lahir<span class="red">*</span></label>
                <input type="date" class="form-control form-input"
                placeholder="" id="date" name="date">
                <!-- handphone -->
                <label for="nohp" class="detail-label">
                    Nomor Handphone<span class="red">*</span></label>
                <input type="number" min="0" class="form-control"
                placeholder="Nomor Telepon" id="nohp" name="nohp">
                <small class="text-suggest">Contoh: 082120393939</small><br>
                <!-- kenis kelamin -->
                <label for="jk" class="detail-label">
                    Jenis Kelamin<span class="red">*</span></label><br>
                <input type="radio" class="form-input" id="pria" name="jk">
                <label for="pria" class="jk">Pria</label>
                <input type="radio" class="form-input" id="wanita" name="jk">
                <label for="wanita" class="jk">Wanita</label><br>
                <!-- opsi -->
                <label for="nohp" class="detail-label">Opsi</label><br>
                <router-link to="/change-password">
                    <button class="change-password-btn">Ubah Kata Sandi</button>
                </router-link><br>
                <button class="save-btn">Simpan</button>
                <full-calendar :events="events"></full-calendar>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import HeaderWithCart from '@/components/HeaderWithCart.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Profile',
  components: {
    HeaderWithCart,
    Footer,
  },
};
</script>

<style lang="scss" scoped>

$red: #FF0000;

.save-btn{
    border: none;
    background: #FD8218;
    border-radius: 5px;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    color: white;
    font-weight: 500;
    margin-top: 7px;
}

.change-password-btn{
    border: 1.5px #0EB3FF solid;
    background: transparent;
    border-radius: 5px;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    color: rgb(8, 161, 231);
    font-weight: 500;
}

.jk{
    margin-left: 5px;
    margin-right: 10px;
    font-size: 15px;
}

.text-suggest{
    font-weight: 500px;
    color: #808080;
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
