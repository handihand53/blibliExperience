<template>
  <header class="header">
    <div class="blibli-header">
      <div class="d-flex justify-content-between
      container-blibli">
        <p class="blibli-text-header">Blibli Experience 2020</p>
        <div class="row no-gutters">
          <p class="mr-1 blibli-text-header">Syarat & Ketentuan</p>
          <p class="blibli-text-header">Kebijakan Privasi</p>
        </div>
      </div>
    </div>
    <nav class="no-padding blue blibli-mobile">
      <div class="container-blibli">
        <div class="row col-12 no-padding no-margin pt-2 pb-2 bg-bl
        head-pad-desk">
          <div class="col-9 no-padding mt-mb-auto">
            <img src="..\..\src\assets\logo\blibli_wht.png" alt="blibli Logo" class="ml-2 blilogo"/>
          </div>
          <div class="col-3 no-padding mt-mb-auto">
            <div class="right">
              <router-link to="/login" v-if="this.user === null">
                <font-awesome-icon icon="sign-in-alt"/> Masuk
              </router-link>
              <router-link to="/profile" v-else>
                Hi, {{ getFirstName }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <nav class="no-padding blue blibli-header">
      <div class="container-blibli">
        <div class="row col-12 no-padding no-margin pt-2 pb-2 bg-bl
        head-pad-desk d-flex justify-content-between">
          <div class="no-padding mt-mb-auto">
            <img src="..\..\src\assets\logo\blibli_wht.png" alt="blibli Logo" class="ml-2 blilogo"/>
          </div>
          <div class="no-padding mt-mb-auto">
            <font-awesome-icon icon="layer-group"/> Kategori
          </div>
          <div class="mt-mb-auto width-search">
            <b-input-group size="md" class="bg-white-custom">
              <b-input-group-prepend>
                <div class="prepend">
                  <font-awesome-icon icon="search"
                  class="ml-auto mr-auto search-icon"/>
                </div>
              </b-input-group-prepend>
              <b-form-input placeholder="Nokia 380"
              class="input"></b-form-input>
              <b-input-group-append>
                <b-button variant="outline-primary">Cari</b-button>
              </b-input-group-append>
            </b-input-group>
          </div>
          <div class="no-padding mt-mb-auto">
            <img src="@/assets/logo/blibli_wht_logoonly.png" class="stash-icon" alt=""> bag
          </div>
          <div class="no-padding mt-mb-auto">
            <div class="right">
              <router-link to="/login" v-if="this.user === null">
                <font-awesome-icon icon="sign-in-alt"/> Masuk
              </router-link>
              <router-link to="/profile" v-else>
                Hi, {{ getFirstName }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import axios from 'axios';
import Cookie from 'vue-cookie';

export default {
  data() {
    return {
      search: '',
      slide: 0,
      dismissSecs: 3,
      dismissCountDown: 0,
      user: null,
      dataId: '',
      dataToken: '',
    };
  },
  async created() {
    await this.getUserData();
  },
  methods: {
    async getUserData() {
      this.dataId = Cookie.get('dataId');
      this.dataToken = Cookie.get('dataToken');
      await axios.get(`http://localhost:${this.port}/experience/api/users?id=${this.dataId}`,
        {
          headers:
            {
              Authorization: `Bearer ${this.dataToken}`,
            },
        })
        .then((response) => {
          this.user = response.data;
        });
    },
  },
  computed: {
    getFirstName() {
      const name = this.user.data.userName.split(' ');
      return name[0];
    },
  },
};
</script>

<style scoped lang="scss">
@import "../style/font/font.scss";
$break-small: 720px;
$break-large: 730px;

@media screen and (max-width: $break-small) {
  header {
    z-index: 1000;
  }

  nav {
    color: white;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  a {
    color: white !important;
    text-decoration: none !important;
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
    height: 90px;
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

  .blibli-header{
    display: none;
  }
}

// desktop version
@media screen and (min-width: $break-large) {
  p{
    margin-bottom: 0px;
  }

  .blibli-text-header{
    font-size: 13px;
    color: white;
    font-weight: 400;
    padding: 5px;
  }

  .container-blibli{
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1140px;
  }

  .width-search{
    width: 55%;
  }

  .blibli-header{
    background-color: #007eb8;
    display: block;
  }

  header {
    z-index: 1000;
  }

  .blue{
    background-color: #0095da;
  }

  nav {
    color: white;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  a {
    color: white !important;
    text-decoration: none !important;
  }

  .bg-bl {
    background-color: #0095da;
    height: 50px;
  }

  .bg-blue {
    @media screen and (max-width: $break-small) {
      background-color: #0095da;
    }
    height: 90px;
  }

  .prepend{
    margin-top: auto;
    margin-bottom: auto;
    width: 40px;
    margin-left: auto;
    text-align: center;
  }

  .search-icon{
    color: gray;
  }

  .button-cari{
    background-color: #0095da;
    padding: 5px 20px;
    font-size: 12px;
    border-radius: 10px;
    border: none;
  }

  .bg-white-custom{
    background-color: white;
    border-radius: 7px 0 0 7px;
    border-radius: 7px;
  }

  .no-padding {
    padding: 0px !important;
  }

  .no-margin {
    margin: 0px !important;
  }

  .blibli-mobile{
    display: none;
  }

  .fixed {
    position: fixed;
  }

  .blilogo {
    width: 100px;
    height: auto;
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

  .input{
    border: none;
  }

  .scan-text {
    font-size: 11px;
    color: #808080;
    margin-bottom: 0px;
  }

  .shadow-box {
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.3);
  }

  .right{
    text-align: right;
  }

  .stash-icon{
    width: 24px;
    right: 35px;
  }
}

</style>
