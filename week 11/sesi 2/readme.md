# Laporan Praktikum - Pengembangan Situs Web I (Minggu 11 Sesi 2)

* **Mata Kuliah:** Pengembangan Situs Web I
* **Topik:** JSON Lokal, Promise, Asynchronous, Fetch, Validasi, dan Render DOM
* **Nama Mahasiswa:** Johannes Hutagalung
* **NIM:** 41426034
* **Program Studi:** D4 Teknologi Rekayasa Perangkat Lunak (TRPL)

---

## 1. Deskripsi Proyek
Praktikum ini berfokus pada penerapan pemrograman *asynchronous* menggunakan `async/await` dan `fetch` di JavaScript untuk mengambil data lokal berformat JSON (`kegiatan.json`). Selain itu, praktikum ini melatih teknik validasi struktur data, penanganan error HTTP, serta keamanan rendering elemen menggunakan `textContent` pada DOM.

## 2. Struktur Proyek
Proyek ini terdiri dari beberapa file utama di dalam direktori kerja:
* `index.html`: Berisi kerangka antarmuka (tombol muat, elemen status, dan daftar kegiatan).
* `style.css`: Pengaturan gaya dan tata letak responsif.
* `main.js`: Logika JavaScript untuk interaksi tombol, pengambilan data, validasi, dan rendering.
* `data/kegiatan.json`: File sumber data fiktif berformat JSON.

---

## 3. Tahapan Pengerjaan dan Matriks Uji

| Langkah Praktikum | Tindakan yang Dilakukan | Hasil Aktual / Pengamatan | Status |
| :--- | :--- | :--- | :--- |
| **1 & 2. Setup Proyek & Fixture** | Membuat struktur folder, file `kegiatan.json` berisi data fiktif, serta menjalankan server lokal menggunakan Live Server di VS Code. | File JSON dapat diakses melalui HTTP lokal dan siap dibaca oleh aplikasi. | **Sukses** |
| **3 & 4. HTML Status & Tombol** | Menyiapkan elemen dasar pada `index.html` seperti tombol `#muat`, elemen pesan status, dan list (`#daftar`). | Antarmuka web siap menerima dan menampilkan hasil muatan data. | **Selesai** |
| **5. Fetch dengan Async/Await** | Menulis fungsi `muat()` di `main.js` menggunakan `fetch` dan blok `try...catch` untuk menangani status respons dan error 404. | Berhasil membedakan proses sukses dan menangkap error jaringan dengan baik. | **Sukses** |
| **6. Validasi dan Render** | Menambahkan validasi `Array.isArray()` dan pengecekan tipe data `string` pada judul. Menggunakan `replaceChildren()` serta merender elemen via `textContent`. | Data array divalidasi dengan benar. Pengujian judul dengan markup berhasil tampil sebagai teks murni secara aman. | **Validasi & Render Selesai** |

---

## 4. Penjelasan Teknis (`textContent`)
Properti `textContent` digunakan untuk memasukkan teks murni ke dalam elemen DOM. Dalam praktikum ini, penggunaan `textContent` memastikan bahwa setiap judul kegiatan ditampilkan apa adanya sebagai string, sehingga aman dari risiko injeksi kode markup berbahaya (XSS).

## 5. AI Use Statement
* **Alat:** Google Gemini
* **Tujuan:** Membantu memahami konsep dasar *asynchronous JavaScript*, logika validasi, penanganan error, serta penyusunan laporan praktikum.
* **Verifikasi:** Seluruh kode telah diuji secara langsung melalui server lokal di browser serta dipastikan berjalan tanpa kendala pada tab Console maupun Network.