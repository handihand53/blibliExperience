<template>
  <div>
    <HeaderWithCart/>
    <div>
      <div>
        <div class="background-white border-bottom box-shadow">
          <div class="p-2">
            <small style="color: #AEAEAE; font-weight: 600;">Daftar Pengajuan Barter</small>
          </div>
        </div>
        <div>
          <div class="custom-card box-shadow p-3 row no-margin">
            <div class="col-2 no-margin no-padding">
              <img src="@/assets/etc/aqua.png" alt="" class="img-product">
            </div>
            <div class="col-10 no-margin  no-padding">
              <p class="title-product">Botol Minum Aqua Mineral 300ML</p>
              <p class="brand-product">Brand: <span class="brand">Aqua</span></p>
              <p class="brand-product">Barter Referensi:
                <span class="brand">Samsung Note 10</span></p>
            </div>
          </div>
          <div class="p-2">
            <small style="color: #AEAEAE; font-weight: 600;">List Pengajuan</small>
          </div>
          <div class="custom-card box-shadow px-3 py-2 mb-2 m-0"
          style="margin-top: 0px!important;">
            <table class="table table-borderless">
              <tr @click="expand(0)">
                <td>
                  <span
                    :class="{hideIcon: isExpand[0]}">
                    <font-awesome-icon
                    class="blue"
                    icon="plus"
                    />
                  </span>
                  <span
                  :class="{hideIcon: !isExpand[0]}">
                    <font-awesome-icon
                    class="blue"
                    icon="minus"
                    />
                  </span>
                </td>
                <td>
                  <p class="title-product col-9 m-0 p-0">Samsung Note 10</p>
                </td>
              </tr>
            </table>
            <div
            :class="{hideIcon: !isExpand[0]}">
              <hr class="my-2">
              <div class="row no-gutters">
                <div class="col-3 no-margin no-padding">
                  <img src="@/assets/etc/aqua.png" alt="" class="img-product2">
                </div>
                <div class="col-9 no-margin no-padding">
                  <p class="brand-product">Brand: <span class="brand">Samsung</span></p>
                  <p class="brand-product">Status: <span class="status-tag success">Baru</span></p>
                  <p class="brand-product">Estimasi Harga:
                    <span class="price">Rp{{formatPrice(150000)}}</span></p>
                  <router-link to="/detail-pengajuan-barter/12398123">
                    <button class="buy-btn mt-1">Lihat Detail</button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="custom-card box-shadow px-3 py-2 mb-2 m-0"
          style="margin-top: 0px!important;">
            <table class="table table-borderless">
              <tr @click="expand(1)">
                <td>
                  <span
                    :class="{hideIcon: isExpand[1]}">
                    <font-awesome-icon
                    class="blue"
                    icon="plus"
                    />
                  </span>
                  <span
                  :class="{hideIcon: !isExpand[1]}">
                    <font-awesome-icon
                    class="blue"
                    icon="minus"
                    />
                  </span>
                </td>
                <td>
                  <p class="title-product col-9 m-0 p-0">Samsung Note 10</p>
                </td>
              </tr>
            </table>
            <div
            :class="{hideIcon: !isExpand[1]}">
              <hr class="my-2">
              <div class="row no-gutters">
                <div class="col-3 no-margin no-padding">
                  <img src="@/assets/etc/aqua.png" alt="" class="img-product2">
                </div>
                <div class="col-9 no-margin no-padding">
                  <p class="brand-product">Brand: <span class="brand">Samsung</span></p>
                  <p class="brand-product">Status: <span class="status-tag success">Baru</span></p>
                  <p class="brand-product">Estimasi Harga:
                    <span class="price">Rp{{formatPrice(150000)}}</span></p>
                  <router-link to="/detail-pengajuan-barter/12398123">
                    <button class="buy-btn mt-1">Lihat Detail</button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import HeaderWithCart from '@/components/HeaderWithCart.vue';
import axios from 'axios';
import Cookie from 'vue-cookie';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    HeaderWithCart,
    Footer,
  },
  data() {
    return {
      isExpand: [
        false,
        false,
      ],
    };
  },
  async created() {
    await this.checkUser();
  },
  methods: {
    formatPrice(value) {
      const val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    expand(idx) {
      this.isExpand.splice(idx, 1, !this.isExpand[idx]);
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

<style scoped>
.list-detail-tentang{
  padding: 10px;
}

.blue{
  color: #0088FF;
}

.text-detail-product{
  font-size: 12px;
  text-align: justify;
}

.list-detail-tentang:nth-child(odd){
  background-color: rgb(224, 224, 224);
}

.img-product2{
  width: 75px;
}

.head-tentang{
  background-color: #0095DA;
  padding: 10px;
  color: white;
}

p{
  margin-bottom: 0px;
}

.price{
  color:#F99401;
}

.float-left{
  float: left;
}

.float-right{
  float: right;
}

.about-detail-product{
  background-color: #F3F3F3;
}

.detail-image-product{
  max-width: 320px;
}

table{
  margin: 0px;
}

.hideIcon{
  display: none;
}

tr td{
  padding: 0px;
  margin: 0px;
}

.overflow-y{
  background-color: white;
}

.tag{
  background-color: #0095DA;
  color: white;
  font-size: 10px;
  padding: 2px 10px;
  border-radius: 10px;
}

.uang-text{
  margin-right: 30px;
  color: #5A5A5A;
  font-size: 14px;
}

.price-detail-text{
  color: #FF7600;
  font-size: 25px;
}

.detail-barang-text{
  background-color: white;
  border-bottom: solid 10px rgb(204, 204, 204);
  transition: all 1s;
}

.blue-brand{
  color: #0095DA;
}

.brand-detail-product{
  clear: both;
  margin-bottom: 0px;
  font-size: 11px;
}

.detail-title-product{
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 0px;
}

.detail-title-product::after{
  clear: left;
}

.detail-tag-product{
  font-size: 10px;
  background-color: #37C26A;
  color: white;
  padding: 2px 7px;
  border-radius: 10px;
  margin-bottom: 0px;
}

.bid-product{
  margin-top: 7px;
  margin-bottom: 0px;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.center{
  text-align:center;
}

.custom-detail-card{
  background-color: white;
  max-height: 77%;
}

.bid-price-product{
  font-size: 22px;
  font-weight: 500;
  color: #F99401;
}

.status-tag{
  color: white;
  padding: 3px 10px;
  font-size: 10px;
  border-radius: 15px;
}

.success{
  background-color: #37C26A;
}

.fail{
  background-color: #FF5050;
}

.pending{
  background-color: #C5C5C5;
  color: #5A5A5A;
}

.no-margin{
  margin: 0px;
}

.desc-product{
  font-size: 11px;
  color: #AEAEAE;
  margin-top: 15px;
}

.brand-product{
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0px;
}

.custom-card{
  margin-top: 10px!important;
  border-radius: 7px;
  border: 0.5px solid rgba(208, 208, 208, 0.245);
}

.bid-product{
  margin-top: 7px;
  margin-bottom: 0px;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.box-shadow{
  box-shadow: 0px 0px 15px -9px rgba(0, 0, 0, 0.809);
}

.no-padding{
  padding: 0px;
}

.title-product{
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0px;
}

.buy-btn{
    width: 100%;
    background-color: rgb(0, 128, 255);
    padding-top: 6px;
    padding-bottom: 6px;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: 500;
    transition: all 1s;
    font-size: 13px;
}

.buy-btn:hover {
  background: rgb(0, 128, 255) radial-gradient(circle, transparent 1%, rgb(0, 105, 209) 1%)
    center/15000%;
  color: white;
}

.buy-btn:active {
  background-color: rgb(0, 112, 224);
  background-size: 100%;
  transition: background 0s;
}

.close{
    position: absolute;
    right: 28px;
    cursor: pointer;
}

.brand{
    color: #0088FF;
}

.background-gray{
    background-color: #f3f3f3;
}

.background-gray2{
  background-color: #E3E3E3;
}

.img-product{
  width: 55px;
}

.background-white{
    background-color: white;
}

.pengajuan-barter{
    margin-right: 20px;
    padding-bottom: 2px;
    font-size: 14px;
    display: inline-block;
    color: #AEAEAE;
}

.pengajuan-barang{
    font-size: 14px;
    padding-bottom: 2px;
    display: inline-block;
    color: #AEAEAE;
}

.active{
    border-bottom: 2px #0095DA solid;
    color: #0095DA;
}
</style>
