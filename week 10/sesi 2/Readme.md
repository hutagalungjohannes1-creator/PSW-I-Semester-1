## 3. Starter DOM

### Tindakan (Action)
1. Membuat elemen kerangka HTML dasar di dalam `index.html` yang terdiri dari tag `<main>`, `<h1>Daftar Peserta</h1>`, `<p id="pesan" role="status"></p>`, dan `<ul id="daftar"></ul>`.
2. Menghubungkan skrip `main.js` ke file HTML menggunakan atribut `defer`.
3. Menuliskan kode pengujian selector di `main.js` menggunakan `document.querySelector("h1")` dan `document.querySelector("#daftar")`.
4. Melakukan eksperimen dengan sengaja menguji selector yang salah (`document.querySelector("#tidak-ada")`) untuk mengamati nilai `null`.

### Hasil Nyata (Actual Result)
- Elemen `<h1>` dan `#daftar` berhasil ditemukan oleh JavaScript dan dicetak ke dalam Console browser sebagai objek elemen yang valid.
- Pengujian selector yang salah (`#tidak-ada`) menghasilkan nilai `null` di Console tanpa merusak jalannya skrip karena waktu eksekusi yang aman berkat atribut `defer`.

### Bukti (Evidence)
* *Catatan Log Console:* 
  - `Hasil selector h1: <h1>Daftar Peserta</h1>`
  - `Hasil selector #daftar: <ul id="daftar"></ul>`
  - `Uji selector salah (#tidak-ada): null`
* *(Sertakan tangkapan layar / screenshot DevTools Console ke dalam folder `bukti/`

## 4. Teks dan Elemen Baru (`textContent`)

### Tindakan (Action)
1. Membuat elemen `<li>` baru secara dinamis menggunakan `document.createElement("li")` di dalam file `main.js`.
2. Mengisi nilai teks pada elemen `<li>` tersebut menggunakan properti `li.textContent = "<b>Rina</b>";` yang di dalamnya menyertakan tag HTML `<b>`.
3. Menambahkan elemen `<li>` tersebut ke dalam kontainer `<ul id="daftar">` menggunakan metode `daftar.append(li)`.
4. Mengamati hasil tampilan di halaman web serta memeriksa struktur DOM melalui tab *Elements* pada browser DevTools.

### Hasil Nyata (Actual Result)
- Teks pada halaman web tampil secara literal atau mentah apa adanya, yaitu tertulis **`<b>Rina</b>`** tanpa ada efek huruf tebal.
- Berdasarkan pemeriksaan DOM (*Inspect Element*), browser tidak membuat elemen atau tag `<b>` baru di dalam memori DOM; string tersebut diperlakukan sepenuhnya sebagai teks murni (*plain text*).

### Penjelasan Perbedaan `textContent` dan HTML Parsing
- **`textContent`**: Membaca dan memperlakukan seluruh string sebagai teks murni. Karakter khusus seperti tanda kurung siku tidak akan diterjemahkan menjadi elemen HTML, sehingga aman dari celah keamanan.
- **HTML Parsing (seperti `innerHTML`)**: Membaca string dan mem-parsing tag HTML di dalamnya menjadi elemen DOM sungguhan (misalnya mengubah teks menjadi tebal menggunakan tag `<b>`).

### Bukti (Evidence)
- Hasil render pada browser menampilkan teks mentah `<b>Rina</b>` di dalam daftar list.
- Struktur HTML pada tab *Elements* DevTools

## 5. State dan Render Array

### Tindakan (Action)
1. Membuat data utama (yang biasa disebut *state*) berupa daftar/array berisi data peserta, yaitu `Rina` dan `Budi`.
2. Membuat sebuah fungsi bernama `render()` di dalam file `main.js`. Di dalam fungsi ini, kita menggunakan perintah `daftar.replaceChildren()` supaya daftar di layar dibersihkan dulu sebelum data yang baru ditampilkan, lalu kita memakai perulangan (`for...of`) untuk mencetak setiap nama peserta ke dalam elemen HTML (`<li>`).
3. Menguji coba memanggil fungsi `render()` dua kali berturut-turut untuk melihat apakah nama pesertanya jadi berlipat ganda (duplikat) atau tidak.
4. Menguji coba mengosongkan data pesertanya menjadi array kosong (`peserta = []`), lalu menjalankan fungsi `render()` lagi untuk melihat reaksinya di layar.

### Hasil Nyata (Actual Result)
- Nama-nama peserta (`Rina` dan `Budi`) berhasil muncul di halaman web secara otomatis dari data array yang kita buat.
- Meskipun fungsi `render()` dipanggil dua kali berturut-turut, daftar namanya tidak menjadi dobel atau menumpuk, karena perintah `daftar.replaceChildren()` berhasil membersihkan tampilan lama sebelum menampilkan yang baru.
- Saat data peserta diubah menjadi kosong (`[]`) dan fungsi `render()` dijalankan, halaman web langsung bersih dari daftar nama peserta sesuai dengan data yang kosong tersebut.

### Bukti (Evidence)
- Halaman web menampilkan daftar list (`<li>`) yang jumlahnya pas sesuai dengan isi data di dalam array.
- Saat array dikosongkan, bagian list di halaman web menjadi kosong dan tidak ada nama yang tercetak.

## 6. Keadaan Kosong (Empty State)

### Tindakan (Action)
1. Menambahkan elemen paragraf dengan atribut `id="pesan"` ke dalam file `index.html` tepat di bawah judul daftar peserta untuk menampung teks peringatan.
2. Memasukkan logika pengecekan pesan kosong ke dalam fungsi `render()` di file `main.js` menggunakan operator ternary (`peserta.length ? "" : "Belum ada peserta"`).
3. Melakukan pengujian kondisi array berisi dan array kosong (`peserta = []`) melalui tab *Console* pada browser untuk melihat perubahan tampilan secara langsung.
4. Memisahkan pengaturan gaya tampilan (warna teks abu-abu dan gaya miring) untuk elemen pesan ke dalam file `style.css`.

### Hasil Nyata (Actual Result)
- Ketika array `peserta` memiliki data, daftar nama peserta muncul di layar dan teks peringatan kosong tidak ditampilkan.
- Ketika array `peserta` dikosongkan (`[]`) dan fungsi `render()` dijalankan, daftar nama peserta menjadi bersih dan teks peringatan *"Belum ada peserta"* otomatis muncul di halaman web.
- Tampilan teks peringatan menjadi lebih rapi dan sesuai dengan pengaturan gaya yang dipisahkan di file CSS.

### Bukti (Evidence)
- Elemen `<p id="pesan">` terisi teks `"Belum ada peserta"` saat array kosong, dan kembali kosong saat array berisi data ketika diperiksa melalui *Elements* dan *Console* browser.

## 7. hasil uji
1. Kasus Normal (Contoh: Data Peserta Berisi)
Input/Kondisi: Array peserta berisi data valid ([{ id: 1, nama: "Rina" }, { id: 2, nama: "Budi" }]).

Tindakan: Memanggil fungsi render() untuk merender data ke elemen list <ul>.

Hasil Aktual: Daftar nama peserta muncul di layar dan pesan kosong tidak tampil.

Status/Bukti: Berhasil (<li> tercetak sesuai jumlah data array).

2. Kasus Batas (Contoh: Array Kosong / Empty State)
Input/Kondisi: Array peserta dikosongkan (peserta = []).

Tindakan: Menambahkan logika pengecekan panjang array di dalam fungsi render() dan menjalankan render()

Hasil Aktual: Elemen list bersih dan teks "Belum ada peserta" otomatis muncul di halaman web
Status/Bukti: Berhasil (pesan empty state tampil sesuai harapan).

3. Kasus Gagal (Contoh: Render Dua Kali / Duplikasi Data)
Input/Kondisi: Memanggil fungsi render() secara berurutan dua kali tanpa pembersihan elemen.

Tindakan: Menggunakan daftar.replaceChildren() di dalam fungsi render() untuk mencegah penumpukan elemen.

Hasil Aktual: Item list pada DOM tidak mengalami duplikat atau berlipat ganda.

Status/Bukti: Berhasil diatasi menggunakan replaceChildren().

1. Panduan Troubleshooting (Pemeriksaan Masalah)
Halaman tidak berubah: Cek apakah file sudah disimpan (Save), lalu lakukan refresh pada browser.
Error 404: Periksa kembali nama folder, jalur (path), atau besar-kecilnya huruf pada nama file (kapitalisasi
CSS tidak cocok: Periksa apakah file CSS sudah terhubung dengan benar, cek selector, hingga melihat tab Computed di Inspect Element.
ReferenceError / SyntaxError: Baca baris error di tab Console browser, lalu periksa apakah ada variabel yang salah ketik atau pasangan kurung yang kurang.
Elemen null: Periksa kembali nama pemilih (selector) seperti #daftar atau #pesan apakah sudah sesuai antara HTML dan JavaScript.
Data tidak sesuai: Periksa kembali struktur data, state, dan hasil render di dalam fungsi.

2. Ketentuan AI Use Statement
Menggunakan AI sebagai alat bantu penjelasan konsep atau diagnosis kode dengan data fiktif.
Menjaga keamanan dengan tidak pernah memasukkan password, kunci API rahasia, atau data pribadi yang nyata
Menguji kembali setiap saran kode melalui browser dan matriks uji   
Menuliskan alat bantu dan verifikasi yang digunakan dengan jujur di laporan
