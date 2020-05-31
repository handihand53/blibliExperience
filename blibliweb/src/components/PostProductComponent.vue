<template>
    <div class="mt-1 p-3">
        <label for="namabarang" class="detail-label">
            Nama Barang<span class="red">*</span></label>
        <input type="text" class="form-control form-input"
        placeholder="Nama Barang" id="namabarang" name="namabarang">
        <label for="brand" class="detail-label">
            Brand<span class="red">*</span></label>
        <input type="text" class="form-control form-input"
        placeholder="Asus, Aqua, Acer" id="brand" name="brand">
        <label for="harga" class="detail-label">
            Harga (Rp)<span class="red">*</span></label>
        <input type="text" min="0" class="form-control form-input"
        placeholder="Contoh: 13000" id="harga" name="harga">
        <label for="kategori" class="detail-label">
            Kategori<span class="red">*</span></label>
        <select name="kategori" id="kategori" class="form-control form-input">
            <option value="" hidden selected disabled>--- Pilih Kategori ---</option>
            <option value="">a</option>
            <option value="">b</option>
        </select>
        <label for="barangPreferensi" class="detail-label">
            Barang preferensi<span class="red">*</span></label>
        <input type="text" class="form-control form-input"
        placeholder="Kulkas / Handphone / Sepeda"
        id="barangPreferensi" name="barangPreferensi">
        <label class="detail-label">
            Kondisi Barang<span class="red">*</span></label><br>
        <input type="radio" class="form-input"
        id="baru" name="status">
        <label for="baru" class="label-radio">Baru</label>
        <input type="radio" class="form-input"
        id="lama" name="status">
        <label for="lama" class="label-radio">Lama</label>
        <br>
        <label for="berat" class="detail-label">
            Berat Barang (kg)<span class="red">*</span></label>
        <input type="text" min="0" class="form-control form-input"
        placeholder="Contoh: 12" id="berat" name="berat">
        <label for="dimensi" class="detail-label">
            Dimensi<span class="red">*</span></label>
        <input type="text" class="form-control form-input"
        placeholder="Contoh : 12 cm x 15 cm x 30 cm" id="dimensi" name="dimensi">
        <label for="kelengkapan" class="detail-label">
            Kelengkapan Paket<span class="red">*</span></label>
        <input type="text" class="form-control form-input"
        placeholder="Contoh: dus, buku panduan, kabel" id="kelengkapan" name="kelengkapan">
        <label for="deskripsi" class="detail-label">
            Deskripsi<span class="red">*</span></label>
        <textarea class="form-control form-input"
        placeholder="Deskripsi" id="deskripsi" name="deskripsi">
        </textarea>
        <label for="foto" class="detail-label">
            Foto Produk<span class="red">*</span></label>
        <div class="input-group">
            <div class="custom-file">
                <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                <input type="file" class="custom-file-input" id="inputGroupFile01"
                aria-describedby="inputGroupFileAddon01">
            </div>
        </div>
        <small class="text-suggest">Format foto yang diperbolehkan : png,
        jpeg, jpg</small><br>
        <small class="text-suggest">Ukuran maks per foto adalah 5 mb</small><br>
        <button class="save-btn">Posting</button>
    </div>
</template>

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
