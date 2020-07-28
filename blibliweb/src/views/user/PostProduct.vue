<template>
    <div class="background-gray">
        <HeaderWithCart/>
        <div>
            <div class="background-white">
                <div class="p-2">
                    <small style="color: #AEAEAE">Posting Produk</small>
                </div>
                <div class="pl-2">
                    <span @click="barter" class="barter"
                    :class="{active: isActive}" id="barter">Barter</span>
                    <span @click="cariBarang" class="cari-barang"
                    :class="{active: !isActive}" id="lelang">Lelang</span>
                </div>
            </div>
          <component :is="currentComponent"></component>
        </div>
        <Footer/>
    </div>
</template>

<script>
import HeaderWithCart from '@/components/HeaderWithCart.vue';
import PostProductComponent from '@/components/PostProductComponent.vue';
import CariProductComponent from '@/components/CariProductComponent.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
import Cookie from 'vue-cookie';

export default {
  name: 'PostProduct',
  data() {
    return {
      isActive: true,
      currentComponent: PostProductComponent,
    };
  },
  components: {
    HeaderWithCart,
    Footer,
  },
  async created() {
    await this.checkUser();
  },
  methods: {
    barter() {
      this.isActive = true;
      this.currentComponent = PostProductComponent;
    },
    cariBarang() {
      this.isActive = false;
      this.currentComponent = CariProductComponent;
    },
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
        .catch(() => {
          this.$router.replace('/');
        });
    },
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
    transition: all 1s;
}

.save-btn:hover {
  background: #e86c00 radial-gradient(circle, transparent 1%, #e86c00 1%)
    center/15000%;
  color: white;
}

.save-btn:active {
  background-color: #ff973b;
  background-size: 100%;
  transition: background 1s;
}

.text-suggest{
    font-weight: 500px;
    color: #808080;
}

.background-gray{
    background-color: #f3f3f3;
}

.background-white{
    background-color: white;
}

.label-radio{
    margin-left: 5px;
    margin-right: 10px;
    font-size: 13px;
}

.red{
    color: $red;
}

.form-input{
    margin-bottom: 10px;
}

.barter{
    margin-right: 20px;
    padding-bottom: 2px;
    font-size: 14px;
    display: inline-block;
    color: #AEAEAE;
}

.cari-barang{
    font-size: 14px;
    padding-bottom: 2px;
    display: inline-block;
    color: #AEAEAE;
}

.active{
    border-bottom: 2px #0095DA solid;
    color: #0095DA;
}

.detail-label{
    font-size: 13px;
}
</style>
