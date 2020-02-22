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
