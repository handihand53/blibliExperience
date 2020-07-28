<template>
    <div>
        <HeaderWithCart/>
        <div>
            <div class="center mt-3">
                <img src="@/assets/logo/signature.png" alt="" class="icon-signature">
                <p class="name-text">{{ nama }}</p>
                <p class="member-text">Member</p>
                <p class="date-text">Sejak {{ this.getMonthYear }}</p>
            </div>
            <div class="p-3">
                <!-- nama -->
                <label for="name" class="detail-label">
                    Nama Lengkap<span class="red">*</span></label>
                <input type="text" class="form-control form-input"
                placeholder="Nama Lengkap" id="name" name="name"
                :value="nama">
                <!-- email -->
                <label for="email" class="detail-label">
                    Email Login<span class="red">*</span></label>
                <input type="text" class="form-control form-input" id="email" name="email"
                disabled v-model="email">
                <!-- tanggal -->
                <label for="day" class="detail-label">
                    Tanggal Lahir<span class="red">*</span></label>
                <input type="date" class="form-control form-input"
                v-model="tglLahir" id="date" name="date">
                <!-- handphone -->
                <label for="nohp" class="detail-label">
                    Nomor Handphone<span class="red">*</span></label>
                <input type="number" min="0" class="form-control"
                placeholder="Nomor Telepon" id="nohp" name="nohp"
                v-model="noTlp">
                <small class="text-suggest">Contoh: 082120393939</small><br>
                <!-- kenis kelamin -->
                <label class="detail-label">
                  Jenis Kelamin<span class="red">*</span></label><br>
                <select class="form-control form-input" v-model="jk">
                    <option value="" hidden selected disabled>--- Pilih jenis kelamin ---</option>
                    <option value="PRIA">Pria</option>
                    <option value="WANITA">Wanita</option>
                </select>
                <!-- alamat -->
                <label class="detail-label">
                  Alamat<span class="red">*</span></label><br>
                <textarea class="form-control" cols="30" rows="4"
                v-model="address"></textarea>
                <!-- opsi -->
                <label for="nohp" class="detail-label">Opsi</label><br>
                <router-link to="/change-password">
                    <button class="change-password-btn">Ubah Kata Sandi</button>
                </router-link><br>
                <button class="save-btn" @click="updateUser">Simpan</button>
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
import Cookie from 'vue-cookie';

export default {
  name: 'Profile',
  components: {
    HeaderWithCart,
    Footer,
  },
  data() {
    return {
      nama: '',
      email: '',
      tglLahir: null,
      noTlp: '',
      gender: null,
      createdAt: null,
      isLoading: true,
      address: '',
      monthNames: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
      ],
      jk: '',
      data: [],
    };
  },
  async created() {
    await this.checkUser();
  },
  methods: {
    checkUser() {
      // melakukan check apakah user masih login atau tidak
      // jika user masih login, maka akan dilempar ke halaman utama
      const dataId = Cookie.get('dataId');
      const dataToken = Cookie.get('dataToken');
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
          this.data = response.data.data;
          this.isLoading = false;
          this.nama = response.data.data.userName;
          this.email = response.data.data.userEmail;
          this.jk = response.data.data.userGender;
          this.noTlp = response.data.data.userPhoneNumber;
          this.tglLahir = response.data.data.userBirthDate;
          this.createdAt = response.data.data.userCreatedAt;
          if (this.data.userAddressForms !== null) {
            this.address = this.data.userAddressForms[0].detail;
          }
          console.log(this.data);
        })
        .catch(() => {
          this.$router.replace('/');
        });
    },
    updateUser() {
      const dataToken = Cookie.get('dataToken');

      const update = {
        userAddressForms: [
          {
            detail: this.address,
            kecamatan: 'string',
            kelurahan: 'string',
            kota: 'string',
            provinsi: 'string',
            rt: 'string',
            rw: 'string',
          },
        ],
        userBirthDate: this.tglLahir,
        userGender: this.jk,
        userId: this.data.userId,
        userIdentityId: '123412',
        userPhoneNumber: this.noTlp,
      };
      console.log(update);
      axios.put(`http://localhost:${this.port}/experience/api/users`, update,
        {
          headers:
            {
              Authorization: `Bearer ${dataToken}`,
            },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e.response);
          // this.$router.replace('/');
        });
    },
  },
  computed: {
    getMonthYear() {
      const theDate = new Date(this.createdAt);
      return `${this.monthNames[theDate.getMonth()]} ${theDate.getFullYear()}`;
    },
  },
};
</script>

<style lang="scss" scoped>

$red: #FF0000;

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
