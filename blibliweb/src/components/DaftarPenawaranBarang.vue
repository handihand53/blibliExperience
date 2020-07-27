<template>
  <div>
    <div class="d-flex justify-content-between mt-2 pb-2">
        <div class="overflow-x">
          <span class="mx-2">
            <b-button pill variant="outline-primary"
            class="px-3" @click="changeStatus(0, 'WAITING_FOR_PAYMENT')" size="sm" id="changeStat0"
            :class="{buttonActive : this.isActive[0]}">Menunggu</b-button>
          </span>
          <span class="mx-2">
            <b-button pill variant="outline-primary"
            class="px-3" @click="changeStatus(1, 'WIN')" size="sm" id="changeStat1"
            :class="{buttonActive : this.isActive[1]}">Menang</b-button>
          </span>
          <span class="mx-2">
            <b-button pill variant="outline-primary"
            class="px-3" @click="changeStatus(2, 'DELIVERED_TO_CONSUMER')"
            size="sm" id="changeStat2"
            :class="{buttonActive : this.isActive[2]}">Sedang dikirim</b-button>
          </span>
          <span class="mx-2">
            <b-button pill variant="outline-primary"
            class="px-3" @click="changeStatus(3, 'FINISHED')"
            size="sm" id="changeStat3"
            :class="{buttonActive : this.isActive[3]}">Diterima</b-button>
          </span>
        </div>
      </div>
    <div class="p-2 mb-1"
    v-for="product in product" :key="product.orderTransactionId">
        <div class="box-shadow">
          <!-- <div class="background-gray2 p-2">
            <small class="date-text">Tanggal : {{getMonthYear}}</small>
          </div> -->
          <div class="background-white">
            <div class="p-3 row no-margin">
              <div class="col-4 no-margin no-padding">
              <!-- <img :src="getImage(product.productBiddingForm.)" alt="" class="img-product"> -->
              </div>
              <div class="col-8 no-margin  no-padding">
                  <p class="title-product">{{product.productBiddingForm.productBiddingName}}</p>
                  <p class="brand-product">Brand: <span class="brand">
                    {{product.productBiddingForm.productBiddingBrand}}</span></p>
                  <p class="brand-product">Penawar: <span class="brand">Handi Hermawan</span></p>
                  <p class="bid-product">Bid:
                    <span class="bid-price-product">Rp
                      {{formatPrice(product.productBiddingForm.currentPrice)}}</span></p>
                  <router-link :to="'/daftar-penawaran/detail-lelang/'+product.biddingOrderId">
                    <button class="buy-btn">Lihat Detail</button>
                  </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import Cookie from 'vue-cookie';

export default {
  data() {
    return {
      display: true,
      product: '',
      monthNames: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
      ],
      isActive: [
        true,
        false,
        false,
        false,
      ],
      currentState: 'WIN',
    };
  },
  async created() {
    await this.checkLoginUser();
  },
  methods: {
    async checkLoginUser() {
    // melakukan check apakah user masih login atau tidak
    // jika user masih login, maka akan dilempar ke halaman utama
      const dataId = Cookie.get('dataId');
      const dataToken = Cookie.get('dataToken');
      await axios.get(`http://localhost:${this.port}/experience/api/users?id=${dataId}`,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .catch(() => {
          // this.$router.push('/');
        });
    },
    async getListPenawaran() {
    // melakukan check apakah user masih login atau tidak
    // jika user masih login, maka akan dilempar ke halaman utama
      const dataId = Cookie.get('dataId');
      const dataToken = Cookie.get('dataToken');
      await axios.get(`http://localhost:${this.port}/experience/api/biddingOrder/winner?userId=${dataId}`,
        {
          headers:
          {
            Authorization: `Bearer ${dataToken}`,
          },
        })
        .then((res) => {
          this.product = res.data.data;
          console.log(res);
        })
        .catch(() => {
          // this.$router.push('/');
        });
    },
    formatPrice(value) {
      const val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    getImage(imagePath) {
      const path = imagePath.split('/');
      return `/assets/resources/uploads/biddingProductPhoto/${path[path.length - 1]}`;
    },
    getMonthYear(date) {
      const theDate = new Date(date);
      return `${theDate.getDate()} ${this.monthNames[theDate.getMonth()]} ${theDate.getFullYear()}`;
    },
    getTime(date) {
      const theDate = new Date(date).toLocaleTimeString();
      return `${theDate}`;
    },
    changeStatus(idx, stat) {
      this.currentState = stat;
      if (this.currentState === 'WIN') {
        this.getListPenawaran();
      }
      this.isActive.splice(idx, 1, true);
      for (let i = 0; i < this.isActive.length; i += 1) {
        if (i !== idx) this.isActive.splice(i, 1, false);
      }
    },
  },
};
</script>

<style scoped>
.no-margin{
  margin: 0px;
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

.date-text{
  color: rgb(130, 130, 130);
  font-weight: 500;
}

.desc-product{
  font-size: 11px;
  color: #AEAEAE;
}

.bid-price-product{
  font-size: 25px;
  font-weight: 500;
  color: #F99401;
}

.brand-product{
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0px;
}

.title-product{
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0px;
}

.buttonActive{
  background-color: rgb(0, 123, 255);
  color: white!important;
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

.overflow-x{
  overflow-x: auto;
  white-space: nowrap;
}


.overflow-x::-webkit-scrollbar {
  display: none;
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
  width: 100px;
}

.background-white{
    background-color: white;
}

.penawaran-barter{
    margin-right: 20px;
    padding-bottom: 2px;
    font-size: 14px;
    display: inline-block;
    color: #AEAEAE;
}

.penawaran-barang{
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
