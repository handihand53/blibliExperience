<template>
  <div class="p-2">
    <div class="custom-card box-shadow p-3 row no-margin">
      <div class="col-4 no-margin no-padding">
        <img src="@/assets/etc/aqua.png" alt="" class="img-product">
      </div>
      <div class="col-8 no-margin  no-padding">
        <p class="title-product">Botol Minum Aqua Mineral 300ML</p>
        <p class="brand-product">Brand: <span class="brand">Aqua</span></p>
        <span class="status-tag success">Sudah Dikonfirmasi</span>
        <p class="desc-product">Deskripsi: Lorem ipsum dolor, sit amet
          consectetur adipisicing elit.</p>
        <router-link to="/detail-pengajuan-barter">
          <button class="buy-btn">Lihat Detail</button>
        </router-link>
      </div>
    </div>
    <div class="custom-card box-shadow p-3 row no-margin">
      <div class="col-4 no-margin no-padding">
        <img src="@/assets/etc/aqua.png" alt="" class="img-product">
      </div>
      <div class="col-8 no-margin  no-padding">
        <p class="title-product">Botol Minum Aqua Mineral 300ML</p>
        <p class="brand-product">Brand: <span class="brand">Aqua</span></p>
        <span class="status-tag pending">Menunggu Konfirmasi</span>
        <p class="desc-product">Deskripsi: Lorem ipsum dolor, sit amet
          consectetur adipisicing elit.</p>
        <button class="buy-btn">Lihat Detail</button>
      </div>
    </div>
    <div class="custom-card box-shadow p-3 row no-margin">
      <div class="col-4 no-margin no-padding">
        <img src="@/assets/etc/aqua.png" alt="" class="img-product">
      </div>
      <div class="col-8 no-margin  no-padding">
        <p class="title-product">Botol Minum Aqua Mineral 300ML</p>
        <p class="brand-product">Brand: <span class="brand">Aqua</span></p>
        <span class="status-tag fail">Ditolak</span>
        <p class="desc-product">Deskripsi: Lorem ipsum dolor, sit amet
          consectetur adipisicing elit.</p>
        <button class="buy-btn">Lihat Detail</button>
      </div>
    </div>
  </div>
</template>
