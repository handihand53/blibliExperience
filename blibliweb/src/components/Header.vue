<template>
  <header class="header">
    <nav class="no-padding">
      <div class="row col-12 no-padding no-margin pt-2 pb-2 bg-bl">
        <div class="col-9 no-padding mt-mb-auto">
          <img src="..\..\src\assets\logo\blibli_wht.png" alt="blibli Logo" class="ml-2 blilogo" />
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
    </nav>
  </header>
</template>

<script>
import axios from 'axios';

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
      this.dataId = this.$cookie.get('dataId');
      this.dataToken = this.$cookie.get('dataToken');
      await axios.get(`http://localhost:${this.port}/experience/api/users?id=${this.dataId}`,
        {
          headers:
            {
              Authorization: `Bearer ${this.dataToken}`,
            },
        })
        .then((response) => {
          this.user = response.data;
          console.log(this.user);
        })
        .catch((resp) => {
          console.log(resp);
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

header {
  z-index: 1000;
}

nav {
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;

  @media screen and (max-width: $break-small) {
  }

  // @media screen and (min-width: $break-large) {
  //   float: right;
  // }
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
  @media screen and (max-width: $break-small) {
    background-color: #0095da;
  }
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
</style>
