<template>
  <div>
    <div class="card mt-2 ml-2 mr-2 pt-1 pb-2 pl-2">
      <div class="overflow-x">
        <span class="category mr-2 active">Semua</span>
        <span class="category mr-2 un-active">Elektronik</span>
        <span class="category mr-2 un-active">Makanan</span>
        <span class="category mr-2 un-active">Minuman</span>
        <span class="category mr-2 un-active">Pakaian</span>
        <span class="category mr-2 un-active">Lain-lain</span>
      </div>
    </div>
    <div class="content col-12 row no-margin pl-2 pr-2">
      <router-link to="/detail-product" class="cst-card col-6">
        <div class="">
          <img src="../../src/assets/etc/aqua.png" alt="aqua" class="img-product ml-auto mr-auto" />
          <p class="title-product">Botol Minum Aqua Miner...</p>
          <p class="product-price">Rp.3.000</p>
        </div>
      </router-link>
      <router-link to="/detail-product" class="cst-card col-6">
        <div class="">
          <img src="../../src/assets/etc/aqua.png" alt="aqua" class="img-product ml-auto mr-auto" />
          <p class="title-product">Botol Minum Aqua Miner...</p>
          <p class="product-price">Rp.3.000</p>
        </div>
      </router-link>
      <router-link to="/detail-product" class="cst-card col-6">
        <div class="">
          <img src="../../src/assets/etc/aqua.png" alt="aqua" class="img-product ml-auto mr-auto" />
          <p class="title-product">Botol Minum Aqua Miner...</p>
          <p class="product-price">Rp.3.000</p>
        </div>
      </router-link>
      <router-link to="/detail-product" class="cst-card col-6">
        <div class="">
          <img src="../../src/assets/etc/aqua.png" alt="aqua" class="img-product ml-auto mr-auto" />
          <p class="title-product">Botol Minum Aqua Miner...</p>
          <p class="product-price">Rp.3.000</p>
        </div>
      </router-link>
      <router-link to="/detail-product" class="cst-card col-6">
        <div class="">
          <img src="../../src/assets/etc/aqua.png" alt="aqua" class="img-product ml-auto mr-auto" />
          <p class="title-product">Botol Minum Aqua Miner...</p>
          <p class="product-price">Rp.3.000</p>
        </div>
      </router-link>
      <router-link to="/detail-product" class="cst-card col-6">
        <div class="">
          <img src="../../src/assets/etc/aqua.png" alt="aqua" class="img-product ml-auto mr-auto" />
          <p class="title-product">Botol Minum Aqua Miner...</p>
          <p class="product-price">Rp.3.000</p>
        </div>
      </router-link>
      <router-link to="/detail-product" class="cst-card col-6">
        <div class="">
          <img src="../../src/assets/etc/aqua.png" alt="aqua" class="img-product ml-auto mr-auto" />
          <p class="title-product">Botol Minum Aqua Miner...</p>
          <p class="product-price">Rp.3.000</p>
        </div>
      </router-link>
      <router-link to="/detail-product" class="cst-card col-6">
        <div class="">
          <img src="../../src/assets/etc/aqua.png" alt="aqua" class="img-product ml-auto mr-auto" />
          <p class="title-product">Botol Minum Aqua Miner...</p>
          <p class="product-price">Rp.3.000</p>
        </div>
      </router-link>
      <router-link to="/detail-product" class="cst-card col-6">
        <div class="">
          <img src="../../src/assets/etc/aqua.png" alt="aqua" class="img-product ml-auto mr-auto" />
          <p class="title-product">Botol Minum Aqua Miner...</p>
          <p class="product-price">Rp.3.000</p>
        </div>
      </router-link>
      <router-link to="/detail-product" class="cst-card col-6">
        <div class="">
          <img src="../../src/assets/etc/aqua.png" alt="aqua" class="img-product ml-auto mr-auto" />
          <p class="title-product">Botol Minum Aqua Miner...</p>
          <p class="product-price">Rp.3.000</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,500,700&display=swap" rel="stylesheet');
@import "../style/font/font.scss";

.category {
  font-size: 13px;
  border-radius: 20px;
  padding: 4px 7px;
  font-weight: 600;
  color: #7c7c7c;
  background-color: #e0e0e0;
  cursor: pointer;
}

.un-active {
  transition: all 0.3s;
}

.un-active:hover {
  background: #e86c00 radial-gradient(circle, transparent 1%, #e86c00 1%)
    center/15000%;
  color: white;
}

.overflow-x{
  overflow-x: auto;
  white-space: nowrap;
}

a:hover{
  text-decoration: none;
}

.overflow-x::-webkit-scrollbar {
  display: none;
}

.un-active:active {
  background-color: #ff973b;
  background-size: 100%;
  transition: background 0s;
}

.title-product {
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #7c7c7c;
  margin-top: 5px;
}

.product-price {
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #ff7600;
}

.cst-card {
  box-shadow: 0px 0px 13px -9px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  padding: 0px;
  margin-top: 7px;
  max-width: 49.1%;
  border: 1px solid rgba(0, 0, 0, 0.061);
  padding: 7px;
}

.cst-card:nth-child(even) {
  margin-left: 5px;
}

.img-product {
  width: 120px;
  height: 120px;
  display: block;
}

p {
  margin: 0px;
}

.active {
  background-image: linear-gradient(to bottom right, #e86c00, #ff985c);
  color: white;
}

.content {
  flex-direction: row;
}

.no-padding {
  padding: 0px !important;
}

.no-margin {
  margin: 0px !important;
}
</style>
