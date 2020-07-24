<template>
   <div class="bg-gray">
    <HeaderWithCart/>
    <div>
      <div class="px-3 pt-2 bg-white pb-3">
        <small class="cl-gray">Detail Konfirmasi Barter</small>
        <p class="text-detail pt-2">Tanggal Barter: {{getMonthYear}}</p>
        <p class="text-detail">Kode Barter: {{order.orderTransactionId }}</p>
        <p class="text-detail">Status barter:
          <span class="text-bold">{{order.orderStatus}}</span></p>
      </div>
      <div class="px-3 mt-3">
        <span class="text-detail">Produk yang ditawarkan</span>
        <div class="bg-white p-3">
          <div>
            <div class="row">
              <div class="col-4 m-0 p-0">
                <img :src="getImage(order.sellingProduct.productBarterImagePaths[0])"
                alt="" class="img-product m-auto">
              </div>
              <div class="col-8 m-0 p-0">
                <p class="title-product">{{order.sellingProduct.productBarterName}}</p>
                <span class="tag-status blue">{{order.sellingProduct.productBarterCondition}}</span>
                <p class="no-resi">No resi: {{order.buyerToWarehouseReceipt.receipt}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white mt-3">
          <div class="header-desc no-margin no-padding">
            <p class="desc-box p-2">Detail Barang</p>
          </div>
          <div class="desc pl-3 pr-3 pb-2">
            <table class="table table-striped border-0 m-0 p-0">
              <tr class="content-table">
                <td>Brand</td>
                <td>{{order.sellingProduct.productBarterBrand}}</td>
              </tr>
              <tr class="content-table">
                <td>Kelengkapan paket</td>
                <td>{{order.sellingProduct.productBarterPackage}}</td>
              </tr>
              <tr class="content-table">
                <td>Volume Barang</td>
                <td>{{ order.sellingProduct.productBarterVolume }}</td>
              </tr>
              <tr class="content-table">
                <td>Berat Barang</td>
                <td>{{order.sellingProduct.productBarterWeight}}</td>
              </tr>
              <tr class="content-table">
                <td>Deskripsi</td>
                <td>{{order.sellingProduct.productBarterDescription}}</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="p-3" v-if="order.sellerItemStatus === 'VERIFIED_IN_WAREHOUSE'">
          <label for="">Masukan nomor resi</label>
          <input type="text" v-model="resiSeller" class="form-control">
          <button class="btn btn-primary mt-2 btn-block"
          @click="updateToWareHouseSeller()">Kirimkan</button>
        </div>
        <div class="mt-3" v-if="order.sellerItemStatus === 'SENT_TO_WAREHOUSE'">
          <b-button variant="primary" block="" @click="verified('SELLER')">Diterima</b-button>
        </div>
      </div>
      <div class="separator fs-12 my-3 px-3">Barter dengan
        <font-awesome-icon
          class="ml-1 exchange"
          icon="exchange-alt"/>
      </div>
       <div class="px-3 mt-3">
        <span class="text-detail"></span>
        <div class="bg-white p-3">
          <div>
            <div class="row">
              <div class="col-4 m-0 p-0">
                <img :src="getImageBuying(order.buyingProduct.barterSubmissionImagePaths[0])"
                alt="" class="img-product m-auto">
              </div>
              <div class="col-8 m-0 p-0">
                <p class="title-product">{{ order.buyingProduct.barterSubmissionName }}</p>
                <span class="tag-status blue">
                  {{ order.buyingProduct.barterSubmissionCondition }}</span>
                <p class="no-resi">No resi: {{order.sellerToWarehouseReceipt.receipt}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white mt-3">
          <div class="header-desc no-margin no-padding">
            <p class="desc-box p-2">Detail Barang</p>
          </div>
          <div class="desc pl-3 pr-3 pb-2">
            <table class="table table-striped border-0 m-0 p-0">
              <tr class="content-table">
                <td>Brand</td>
                <td>{{order.buyingProduct.barterSubmissionBrand}}</td>
              </tr>
              <tr class="content-table">
                <td>Kelengkapan paket</td>
                <td>{{order.buyingProduct.barterSubmissionPackage}}</td>
              </tr>
              <tr class="content-table">
                <td>Volume Barang</td>
                <td>{{ order.buyingProduct.barterSubmissionVolume }}</td>
              </tr>
              <tr class="content-table">
                <td>Berat Barang</td>
                <td>{{order.buyingProduct.barterSubmissionWeight}}</td>
              </tr>
              <tr class="content-table">
                <td>Deskripsi</td>
                <td>{{order.buyingProduct.barterSubmissionDescription}}</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="p-3" v-if="order.buyerItemStatus === 'VERIFIED_IN_WAREHOUSE'">
          <label for="">Masukan nomor resi</label>
          <input type="text" v-model="resiBuyer" class="form-control">
          <button class="btn btn-primary mt-2 btn-block"
          @click="updateToWareHouseBuyer()">Kirimkan</button>
        </div>
        <div class="mt-3" v-if="order.buyerItemStatus === 'SENT_TO_WAREHOUSE'">
          <b-button variant="primary" block="" @click="verified('BUYER')">Diterima</b-button>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import HeaderWithCart from '@/components/HeaderWithCart.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
import Cookie from 'vue-cookie';

export default {
  components: {
    HeaderWithCart,
    Footer,
  },
  data() {
    return {
      order: {
        buyerToWarehouseReceipt: {
          receipt: '',
        },
        sellerToWarehouseReceipt: {
          receipt: '',
        },
        sellingProduct: {
          productBarterImagePaths: [
            '',
          ],
        },
        buyingProduct: {
          barterSubmissionImagePaths: [
            '',
          ],
        },
      },
      resiSeller: '',
      resiBuyer: '',
      monthNames: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
      ],
    };
  },
  async created() {
    await this.checkUser();
    this.getBarterOrderDetail();
  },
  computed: {
    getMonthYear() {
      const theDate = new Date(this.order.barterOrderCreatedAt);
      return `${theDate.getDate()} ${this.monthNames[theDate.getMonth()]} ${theDate.getFullYear()}`;
    },
  },
  methods: {
    checkUser() {
      // melakukan check apakah user masih login atau tidak
      // jika user masih login, maka akan dilempar ke halaman utama
      const dataId = Cookie.get('dataIdAdmin');
      const dataToken = Cookie.get('dataTokenAdmin');
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
          this.nama = response.data.data.userName;
          this.createdAt = response.data.data.userCreatedAt;
        })
        .catch(() => {
          this.$router.replace('/admin/login');
          this.isLogin = false;
        });
    },
    getBarterOrderDetail() {
      // melakukan check apakah user masih login atau tidak
      // jika user masih login, maka akan dilempar ke halaman utama
      const dataToken = Cookie.get('dataTokenAdmin');
      axios.get(`http://localhost:${this.port}/experience/api/barterOrder?barterOrderId=${this.$route.params.id}`,
        {
          headers:
            {
              Authorization: `Bearer ${dataToken}`,
            },
        })
        .then((response) => {
          this.order = response.data.data;
          console.log(this.order);
        });
    },
    getImage(imagePath) {
      const path = imagePath.split('/');
      return `/assets/resources/uploads/barterProductPhoto/${path[path.length - 1]}`;
    },
    getImageBuying(imagePath) {
      const path = imagePath.split('/');
      return `/assets/resources/uploads/barterSubmissionPhoto/${path[path.length - 1]}`;
    },
    verified(role) {
      const request = {
        barterOrderId: this.order.barterOrderId,
        barterRoleEnum: role,
      };

      const dataToken = Cookie.get('dataTokenAdmin');
      axios.put(`http://localhost:${this.port}/experience/api/admin/barterOrder/toVerified`, request,
        {
          headers:
            {
              Authorization: `Bearer ${dataToken}`,
            },
        })
        .then(() => {
          this.getBarterOrderDetail();
        });
    },
    updateToWareHouseSeller() {
      const response = {
        barterOrderId: this.order.barterOrderId,
        barterRoleEnum: 'SELLER',
        receipt: this.resiSeller,
      };

      const dataToken = Cookie.get('dataTokenAdmin');
      axios.put(`http://localhost:${this.port}/experience/api/admin/barterOrder/toConsumers`, response,
        {
          headers:
            {
              Authorization: `Bearer ${dataToken}`,
            },
        })
        .then(() => {
          this.getBarterOrderDetail();
        });
    },
    updateToWareHouseBuyer() {
      const response = {
        barterOrderId: this.order.barterOrderId,
        barterRoleEnum: 'BUYER',
        receipt: this.resiBuyer,
      };

      const dataToken = Cookie.get('dataTokenAdmin');
      axios.put(`http://localhost:${this.port}/experience/api/admin/barterOrder/toConsumers`, response,
        {
          headers:
            {
              Authorization: `Bearer ${dataToken}`,
            },
        })
        .then(() => {
          this.getBarterOrderDetail();
        });
    },
  },
};
</script>

<style scoped>
.cl-gray{
  color: rgb(138, 138, 138);
}

.success{
  color: rgb(0, 106, 255);
}

.no-resi{
  font-size: 12px;
  margin: 0px;
  padding: 0px;
  font-weight: 600;
  color: #0095DA;
}

.header-desc{
  background-color: #0095DA;
}

.separator {
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 12px;
}

.separator::before, .separator::after {
    content: '';
    flex: 1;
    border-bottom: 0.8px solid rgb(148, 148, 148);
}

.separator::before {
    margin-right: .25em;
}

.separator::after {
    margin-left: .25em;
}

.exchange{
  transform: rotate(90deg);
}

.title-product{
  font-size: 14px;
  margin: 0px;
}

.pembayaran{
  line-height: 20px;
}

.tag-status{
  font-size: 12px;
  padding: 3px 5px;
}

.desc-box{
  font-size: 12px;
  color: white;
}

.blue{
  background-color:rgb(50, 115, 206);
  border-radius: 10px;
  color: white;
}

.desc-product{
  font-size: 12px;
  color: #6c6c6c;
  margin: 0px;
}

.bg-gray{
  background-color: #f1f1f1;
}

.stock-product{
  font-size: 13px;
  margin: 0px;
}

.left-side{
  display: inline-block;
  width: 50%;
}

.right-side{
  display: inline-block;
  width: 50%;
  text-align: right;
}

.price-product{
  font-size: 13px;
  margin: 0px;
  color: orange;
}

.img-product {
  padding: 5px;
  max-width: 80px;
  max-height: 120px;
  display: block;
}

.status-produk{
  color: rgb(82, 125, 251);
  font-weight: 600;
}

.text-detail{
  font-weight: 400;
  font-size: 13px;
  margin: 0px;
}

.orange{
  color: orange;
}

.text-bold{
  font-weight: 600;
}

.content-table{
  font-size: 12px;
}

tr.content-table:nth-child(odd){
  background-color: #eeeeee;
}
</style>
