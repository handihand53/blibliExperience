<template>
  <div>
    <HeaderWithCart title="Hubungi Kami"/>
    <div class="p-4">
      <h5>Hubungi Kami</h5>
      <p class="text-header">Customer Service kami buka 24 jam, silahkan menghubungi
        jika ada kendala.</p>
      <div>
        <table class="table">
          <tr>
            <td>
              <div class="d-flex text-align-center">
                <font-awesome-icon
                class="icon"
                icon="phone-volume"/>
              </div>
            </td>
            <td>
            <div class="column">
              <p class="text-title">Telephone</p>
              <p class="text-desc">021-333-222-111-0</p>
            </div>
            </td>
          </tr>
          <tr>
            <td>
              <font-awesome-icon
              class="icon"
              icon="envelope"/>
            </td>
            <td>
            <div class="column">
              <p class="text-title">Email</p>
              <p class="text-desc">customer.care@blibli.com</p>
            </div>
            </td>
          </tr>
          <tr>
            <td>
              <font-awesome-icon
              class="icon"
              icon="comments"/>
            </td>
            <td>
            <div class="column">
              <p class="text-title">SMS</p>
              <p class="text-desc">082-112-231-122</p>
            </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import HeaderWithCart from '@/components/HeaderWithCart.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    HeaderWithCart,
    Footer,
  },
};
</script>

<style scoped>
.text-header{
  font-size: 12px;
}

.icon{
  font-size: 20px;
  width: 20px!important;
}

.text-title{
  font-weight: 500;
  font-size: 14px;
  padding: 0px;
  margin: 0px;
}

.text-desc{
  font-weight: 400;
  font-size: 12px;
  padding: 0px;
  margin: 0px;
}

td{
  padding: 10px;
  vertical-align: middle;
}

tr > td:nth-child(odd){
  width: 20px!important;
}
</style>
