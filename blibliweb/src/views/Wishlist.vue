<template>
    <div class="bg-cst">
        <HeaderWithCart/>
        <div>
            <div class="background-gray p-3 mt-2">
                <p class="wishlist-title">Daftar Wishlist</p>
            </div>
        </div>
        <div class="p-3">
            <div class="custom-card mb-3">
                <div class="p-3 background-gray">
                    <p class="date-detail wishlist-title">Ditambahkan : 04 Febuari 2019
                        <span class="close">X</span></p>
                </div>
                <div class="p-3 row no-margin">
                    <div class="col-4 no-margin no-padding">
                        <img src="@/assets/etc/aqua.png" alt="" class="wishlist-icon">
                    </div>
                    <div class="col-8 no-margin no-padding">
                        <p class="title-product">Botol Minum Aqua Mineral 300ML</p>
                        <p class="brand-product">Brand: <span class="brand">Aqua</span></p>
                        <p class="price-product">Rp3.000</p>
                        <button class="buy-btn">Beli Sekarang</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import HeaderWithCart from '@/components/HeaderWithCart.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Wishlist',
  components: {
    HeaderWithCart,
    Footer,
  },
};
</script>

<style lang="scss" scoped>

.buy-btn{
    width: 100%;
    background-color: #FF7600;
    padding-top: 6px;
    padding-bottom: 6px;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: 500;
    transition: all 1s;
}

.buy-btn:hover {
  background: #e86c00 radial-gradient(circle, transparent 1%, #e86c00 1%)
    center/15000%;
  color: white;
}

.buy-btn:active {
  background-color: #ff973b;
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

.date-detail{
    font-size: 13px;
    margin-bottom: 0px;
}

.price-product{
    font-size: 18px;
    color: #FF7600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.brand-product{
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 0px;
}

.title-product{
    color: #0088FF;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 0px;
}

.no-padding{
    padding: 0px;
}

.bg-cst{
    background: #f3f3f3;
}

.custom-card{
  box-shadow: 0px 0px 3px -1px rgb(37, 37, 37);
}

.background-gray{
    background-color: rgb(226, 226, 226);
}

.no-margin{
    margin: 0px;
}

.wishlist-title{
    font-size: 14px;
    margin-bottom: 0px;
    color: #606060;
}

.wishlist-icon{
    width: 111px;
}

</style>
