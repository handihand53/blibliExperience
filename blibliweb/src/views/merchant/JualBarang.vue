<template>
  <div class="bg-gray">
    <PlainHeaderMarket/>
    <div class="bg-white p-2">
      <small class="text-gray">Jual Barang</small>
    </div>
    <div class="p-3">
      <label for="nama-barang">Nama Barang<span class="red">*</span></label>
      <b-form-input type="text" class="form-control" id="nama-barang"
      placeholder="Nama Barang"
      v-model="namaBarang" trim @keyup="checkAll"></b-form-input>
      <label for="nama-barang">Stok<span class="red">*</span></label>
      <b-form-input type="number" min="0" class="form-control" id="nama-barang"
      placeholder="Nama Barang"
      v-model="stok" trim @keyup="checkAll"></b-form-input>
      <label for="nama-barang">Harga<span class="red">*</span></label>
      <b-input-group prepend="Rp.">
        <b-form-input min="0" type="number" v-model="harga"
        @keyup="checkAll"></b-form-input>
      </b-input-group>
      <button @click="post" class="next-btn mt-4"
      :class="{'disable': !btnState, 'active-btn': btnState}"
      ref='btn' disabled>Jual Barang</button>
    </div>
    <BottomNavMerchant/>
    <Footer/>
  </div>
</template>

<script>
import PlainHeaderMarket from '@/components/PlainHeaderMarket.vue';
import Footer from '@/components/Footer.vue';
import BottomNavMerchant from '@/components/BottomNavMerchant.vue';

export default {
  components: {
    PlainHeaderMarket,
    BottomNavMerchant,
    Footer,
  },
  data() {
    return {
      namaBarang: '',
      harga: '',
      stok: '',
      btnState: false,
    };
  },
  methods: {
    checkAll() {
      if (
        this.namaBarang !== ''
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
    post() {
      console.log('post');
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
</style>
