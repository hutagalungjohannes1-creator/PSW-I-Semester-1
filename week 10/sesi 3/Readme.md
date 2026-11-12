3. Form Input
Tindakan (Action)
Menambahkan elemen kerangka form HTML baru di dalam file index.html yang terdiri dari tag <form id="form-peserta">, <label for="nama">Nama (wajib)</label>, <input id="nama" name="nama" required>, dan <button type="submit">Tambah</button>.   Memastikan atribut for="nama" pada label terhubung dengan benar ke id="nama" pada input agar fitur klik label berfungsi.   Mempertahankan elemen penampung pesan (<p id="pesan">) dan daftar (<ul id="daftar">) yang sudah dibuat pada sesi sebelumnya.   Hasil Nyata (Actual Result)Form input berhasil dirender di bawah judul halaman web dan di atas elemen daftar peserta.Saat teks label "Nama (wajib)" diklik pada browser, kursor otomatis berpindah fokus ke dalam kolom kotak input.Bukti (Evidence)Tampilan Halaman: Kotak input teks beserta tombol "Tambah" muncul dengan rapi di antarmuka browser.Inspeksi Elemen: Struktur tag <form> dan komponen di dalamnya terbaca dengan valid pada tab Elements DevTools.

## 4. Tambah Peserta

### Tindakan (Action)
1. Menyiapkan elemen form menggunakan selector `document.querySelector("#form-peserta")` dan mendeklarasikan variabel penghitung ID lokal `let berikutnya = 3;`.
2. Menambahkan *event listener* bertipe `submit` pada form untuk mencegat aksi bawaan *reload* halaman menggunakan `event.preventDefault()`
3. Mengambil nilai input secara aman menggunakan `new FormData(form).get("nama")` serta membersihkan spasi awal/akhir menggunakan `.trim()`
4. Menambahkan validasi sederhana: jika input kosong atau hanya berupa spasi, tampilkan pesan peringatan `"Nama harus diisi"` pada elemen `#pesan` dan hentikan proses
5. Memasukkan objek data baru (`id` dan `nama`) ke dalam array *state* `peserta` menggunakan `.push()`, menjalankan ulang fungsi `render()`, dan mereset form via `form.reset()`.

### Hasil Nyata (Actual Result)
- Pengujian dengan mengetikkan nama valid lalu menekan tombol *Tambah* (atau menekan *Enter*) berhasil memasukkan data peserta baru ke dalam memori dan merender tampilannya di layar secara reaktif.
- Pengujian dengan memasukkan spasi kosong berhasil memicu blok validasi, menampilkan teks peringatan, dan menolak penambahan data.
- Ukuran array *state* terbukti bertambah tepat satu item pada setiap pengiriman data yang sah.

### Bukti (Evidence)
- *Log Konsol / UI:* Data objek peserta baru masuk ke dalam array secara akurat, dan elemen `<li>` baru muncul secara otomatis di dalam kontainer daftar `<ul id="daftar">`.
- *(Sertakan tangkapan layar / screenshot hasil pengujian form ke dalam folder `bukti/`)*

## 5. Tombol Hapus Saat Render

### Tindakan (Action)
1. Membuat elemen tombol baru menggunakan `document.createElement("button")` di dalam loop perulangan fungsi `render()`.
2. Mengatur tipe tombol menjadi `"button"`, memberi teks `"Hapus"`, serta menyematkan penanda ID peserta menggunakan `btn.dataset.id = String(p.id)`
3. Menambahkan tombol tersebut ke dalam elemen list menggunakan `li.append(btn)` tepat setelah elemen teks nama
4. Memastikan potongan kode ini diletakkan di dalam loop render dan bukan di luar perulangan.

### Hasil Nyata (Actual Result)
- Setiap item peserta yang muncul di halaman web kini dilengkapi dengan tombol *"Hapus"* di sampingnya.
- Melalui tab *Elements* pada DevTools, setiap tombol hapus memiliki atribut `data-id` yang sesuai dengan ID unik data peserta (misalnya `data-id="1"`, `data-id="2"`).

### Bukti (Evidence)
- Struktur DOM menampilkan elemen `<button type="button" data-id="...">Hapus</button>` di dalam masing-masing `<li>`.
- *(Sertakan tangkapan layar / screenshot hasil render tombol hapus ke dalam folder `bukti/`)*

## 6. Delegation dan Pengujian

### Tindakan (Action)
1. Memasang satu *event listener* bertipe `click` pada elemen kontainer daftar utama (`ul` / `#daftar`) untuk menerapkan konsep *Event Delegation*[cite: 7].
2. Menggunakan metode `event.target.closest("button[data-id]")` di dalam fungsi *listener* untuk mendeteksi apakah tombol hapus yang diklik valid[cite: 7].
3. Mengambil nilai ID target dengan mengubah tipe datanya menjadi angka menggunakan `Number(btn.dataset.id)`[cite: 7].
4. Menyaring array *state* peserta menggunakan metode `peserta.filter(p => p.id !== id)` dan menjalankan kembali fungsi `render()` untuk memperbarui tampilan DOM secara dinamis[cite: 7].
5. Melakukan pengujian fungsional meliputi: menghapus item pertama/terakhir, menghapus item baru setelah dirender, menguji input teks yang menyerupai markup HTML, serta mengamati perilaku saat *reload* halaman[cite: 7].

### Hasil Nyata (Actual Result)
- Penghapusan item peserta (baik item pertama, item terakhir, maupun item yang baru saja ditambahkan) berjalan dengan sangat mulus dan akurat berkat penanganan ID berbasis *event delegation*.
- Pengujian pengetikan teks dengan markup HTML (contoh: `<b>Budi</b>`) berhasil dirender sebagai teks murni (*plain text*) di layar tanpa memicu eksekusi tag HTML apa pun, membuktikan keamanan struktur DOM dari potensi injeksi skrip.
- Pengamatan saat *reload* halaman menunjukkan bahwa data peserta kembali ke kondisi *state* awal karena aplikasi belum menggunakan penyimpanan permanen (*Local Storage*).

### Bukti (Evidence)
- *Tampilan & Interaksi:* Tombol hapus berfungsi secara instan menghapus elemen baris terkait dari antarmuka halaman tanpa memerlukan *refresh* manual.
- *Tab Console / DevTools:* Tidak ada pesan galat (*error*) yang muncul saat proses klik penghapusan maupun saat pengujian input markup.
- *(Sertakan tangkapan layar / screenshot hasil pengujian akhir ke dalam folder `bukti/`)*

. Latihan Mandiri dan Matriks UjiTabel Matriks UjiInput/KondisiTindakanHasil AktualStatus/BuktiKasus NormalMengisi nama peserta yang valid pada form input lalu menekan tombol Tambah atau menekan tombol Enter pada keyboard.Data peserta baru berhasil ditambahkan ke dalam daftar beserta tombol hapus dinamisnya.Sesuai SS (Bukti terlampir pada tangkapan layar pengujian)Kasus BatasMenginput spasi kosong (whitespace) saja pada kolom nama lalu melakukan submit form.Sistem menolak input, pesan kesalahan "Nama harus diisi" muncul pada elemen #pesan, dan data tidak bertambah.Sesuai SS (Bukti terlampir pada tangkapan layar validasi)Kasus Gagal / AksiMenghapus item peserta via tombol hapus dinamis serta melakukan reload halaman peramban.Tombol hapus menghapus elemen target dari DOM dan memori via event delegation; saat halaman di-reload, data kembali ke state awal.Sesuai SS (Bukti terlampir pada tangkapan layar pengujian)Penilaian BuktiHasil pengujian pada setiap skenario di atas telah diverifikasi dan sepenuhnya sesuai dengan tangkapan layar (SS) yang dilampirkan pada folder bukti.

## 8. Troubleshooting dan AI Use Statement

### Panduan Troubleshooting (Gejala dan Pemeriksaan)
- **Halaman tidak berubah:** Simpan file (Ctrl+S), lalu lakukan refresh pada URL server yang benar.
- **Error 404:** Periksa path, nama folder, serta kapitalisasi file (huruf besar/kecil).
- **CSS tidak cocok:** Pastikan file CSS termuat, periksa selector, aturan cascade, lalu cek tab Computed pada DevTools.
- **ReferenceError / SyntaxError:** Baca baris pesan error pada Console, lalu periksa scope variabel dan pasangan tanda kurung.
- **Elemen bernilai null:** Periksa penulisan selector HTML serta waktu pemanggilan (posisi tag script).
- **Data tidak sesuai:** Periksa kontrak data, proses parsing, isi state memori, dan hasil render elemen.

---

### AI Use Statement (Pernyataan Penggunaan AI)
- **Penggunaan AI:** AI (Gemini) digunakan untuk membantu penjelasan konsep, diagnosis error dengan data fiktif, serta membimbing penyusunan struktur kode dan laporan README.
- **Keamanan Data:** Tidak ada password, API key rahasia, maupun data sensitif mahasiswa yang dimasukkan saat berinteraksi dengan AI.
- **Verifikasi & Pengujian:** Seluruh saran dan potongan kode dari AI telah diuji dan diverifikasi secara langsung melalui peramban (browser) serta matriks pengujian praktikum.
- **Pemahaman Kode:** Seluruh alur logika program, event handling, dan pembaruan DOM dipahami secara mendalam dan siap dijelaskan saat proses walkthrough/demonstrasi.

---

### Diagnosis Aman
Untuk mengatasi kendala secara efektif, kecilkan lingkup masalah, baca bukti pesan error di console, ubah satu penyebab secara bertahap, lalu lakukan uji ulang (retest). Hindari melakukan reset hard atau penghapusan kode secara luas hanya untuk mengatasi error kecil