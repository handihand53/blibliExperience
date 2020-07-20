<template>
  <div class="bg-gray">
    <PlainHeaderMarket/>
    <div class="bg-white p-2">
      <small class="text-gray">Jual Barang</small>
    </div>
    <div class="p-3">
      <label for="nama-barang">Nama Barang<span class="red">*</span></label>
      <vue-bootstrap-typeahead
        v-model="query"
        :data="productData"
        placeholder="Aqua air mineral"
      />
      <label for="Stock">Stok<span class="red">*</span></label>
      <b-form-input type="number" min="0" class="form-control" id="Stock"
      placeholder="Stock"
      v-model="stok" trim @keyup="checkAll"></b-form-input>
      <label for="harga">Harga<span class="red">*</span></label>
      <b-input-group prepend="Rp.">
        <b-form-input min="0" type="number" v-model="harga"
        @keyup="checkAll"></b-form-input>
      </b-input-group>
      <button @click="post" class="next-btn mt-4"
      :class="{'disable': !btnState, 'active-btn': btnState}"
      ref='btn' disabled>Jual Barang</button>
    </div>
    <div class="fixed-alert text-center pl-3 pr-3">
      <b-alert
        :show="dismissCountDown"
        dismissible
        variant="success"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
      >
        Barang berhasil ditambahkan
      </b-alert>
    </div>
    <BottomNavMerchant/>
    <Footer/>
  </div>
</template>

<script>
import PlainHeaderMarket from '@/components/PlainHeaderMarket.vue';
import Footer from '@/components/Footer.vue';
import BottomNavMerchant from '@/components/BottomNavMerchant.vue';
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead';
import axios from 'axios';
import Cookie from 'vue-cookie';

export default {
  components: {
    PlainHeaderMarket,
    BottomNavMerchant,
    Footer,
    VueBootstrapTypeahead,
  },
  data() {
    return {
      namaBarang: '',
      harga: '',
      stok: '',
      btnState: false,
      query: '',
      masterData: '',
      shopId: '',
      dismissSecs: 2,
      dismissCountDown: 0,
      alertMsg: '',
      productData: [
      ],
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
      const dataId = Cookie.get('dataIdMerchant');
      // const dataShopId = Cookie.get('dataShopIdMerchant');
      const dataToken = Cookie.get('dataTokenMerchant');
      await axios.get(`http://localhost:${this.port}/experience/api/shops?userId=${dataId}`,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .then((response) => {
          this.shopId = response.data.data.shopId;
        })
        .catch(() => {
          this.$router.push('/merchant/login');
        });
    },
    async searchMasterData() {
      await axios.get(`http://localhost:${this.port}/experience/api/products/search?searchKey=${this.query}`)
        .then((response) => {
          this.masterData = response.data;
          this.productData = [];
          response.data.data.forEach((element) => {
            this.productData.push(element.productName);
          });
        });
    },
    // Untuk notifikasi ketika berhasil menambah product
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    checkAll() {
      if (
        this.query !== ''
        && this.harga !== ''
        && this.stock !== ''
      ) {
        this.btnState = true;
        this.$refs.btn.disabled = false;
      } else {
        this.btnState = false;
        this.$refs.btn.disabled = true;
      }
    },
    async post() {
      let idx = 0;
      let currentIdx = 0;
      let productIds = '';
      await this.masterData.data.forEach((e) => {
        if (e.productName === this.query) {
          currentIdx = idx;
          productIds = this.masterData.data[currentIdx].productId;
        }
        idx += 1;
      });

      const post = {
        productId: productIds,
        productPrice: this.harga,
        productStock: this.stok,
        shopId: this.shopId,
      };

      if (post.productId !== '') {
        const dataToken = Cookie.get('dataTokenMerchant');
        axios.post(`http://localhost:${this.port}/experience/api/merchant/productStocks`, post, {
          headers:
            {
              Authorization: `Bearer ${dataToken}`,
            },
        })
          .then(() => {
            this.dismissCountDown = this.dismissSecs;
            this.harga = '';
            this.stok = '';
            this.query = '';
          });
      }
    },
  },
  watch: {
    query() {
      this.searchMasterData();
    },
  },
};
</script>

<style scoped>
.red{
  color: red;
}

.bg-gray{
  background-color: #F6F6F6;
}

.text-gray{
  color: rgb(121, 121, 121);
}

label{
  margin-top: 8px;
}

.next-btn{
    border: none;
    background: #898989;
    border-radius: 5px;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    color: white;
    font-weight: 500;
    margin-top: 7px;
    transition: all 1s;
}

.disable{
    cursor: not-allowed;
}

.active-btn{
  background: #FF9100!important;
  color: white;
  cursor: pointer;
  opacity: 1!important;
}

.fixed-alert{
  z-index: 100;
  position: fixed;
  bottom: 0px;
  margin: 5% auto; /* Will not center vertically and won't work in IE6/7. */
  left: 0;
  right: 0;
}
</style>
