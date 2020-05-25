<template>
  <div>
    <div class="p-2 mb-1">
      <div class="box-shadow">
        <div class="background-gray2 p-2">
          <small class="date-text">Tanggal : 04 Febuari 2019</small>
        </div>
        <div class="background-white">
          <div class="p-3 row no-margin">
            <div class="col-4 no-margin no-padding">
                <img src="@/assets/etc/aqua.png" alt="" class="img-product">
            </div>
            <div class="col-8 no-margin no-padding">
                <p class="title-product">Botol Minum Aqua Mineral 300ML</p>
                <p class="brand-product">Brand: <span class="brand">Aqua</span></p>
                <p class="desc-product">Deskripsi: Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit.</p>
                <button class="buy-btn">Lihat Detail</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-2 mb-1">
      <div class="box-shadow">
        <div class="background-gray2 p-2">
          <small class="date-text">Tanggal : 04 Febuari 2019</small>
        </div>
        <div class="background-white">
          <div class="p-3 row no-margin">
            <div class="col-4 no-margin no-padding">
                <img src="@/assets/etc/aqua.png" alt="" class="img-product">
            </div>
            <div class="col-8 no-margin  no-padding">
                <p class="title-product">Botol Minum Aqua Mineral 300ML</p>
                <p class="brand-product">Brand: <span class="brand">Aqua</span></p>
                <p class="desc-product">Deskripsi: Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit.</p>
                <button class="buy-btn">Lihat Detail</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
