# Laporan Praktikum Pengembangan Situs Web I - Minggu 7 Sesi 3

## Ringkasan Langkah Pengerjaan

1. **Inisialisasi Repository & Initial Commit**
   - Menginisialisasi folder `sesi 3` sebagai repository Git lokal (`git init`).
   - Menyimpan struktur file awal proyek ke branch utama (`master`) dengan commit pertama.

2. **Pembuatan Branch Fitur**
   - Membuat dan langsung berpindah ke branch baru bernama `fitur-petunjuk` (`git switch -c fitur-petunjuk`).
   - Melakukan penambahan/pembaruan teks petunjuk format pada elemen form di file `daftar.html`.
   - Menyimpan perubahan kode tersebut ke dalam branch fitur dengan commit bertajuk *"Memperjelas petunjuk formulir"*.

3. **Simulasi Code Review (`review.md`)**
   - Membuat file `review.md` untuk mencatat tujuan perubahan, cara pengujian via Live Server, serta catatan konkret dari reviewer.
   - Melakukan commit dokumen review ke branch fitur.

4. **Penggabungan Perubahan (Merge)**
   - Berpindah kembali ke branch utama (`master`) menggunakan perintah `git switch master`.
   - Menggabungkan seluruh perubahan dari branch `fitur-petunjuk` ke branch utama menggunakan perintah `git merge fitur-petunjuk`.
   - Melakukan verifikasi riwayat commit menggunakan `git log --oneline -n 5`.


## 🔍 Riwayat Commit (Git Log)
- `50e0bb` (HEAD -> master) Mengisi dokumentasi pada review.md
- `6641b3` (fitur-petunjuk) Memperjelas petunjuk formulir
- `12f16d` Initial commit: struktur awal proyek minggu 7 sesi 3


## Kesimpulan
Seluruh rangkaian praktikum manajemen versi menggunakan Git (pembuatan cabang, penambahan fitur, simulasi review, hingga penggabungan branch) berhasil diselesaikan dengan aman dan bersih 

## Matriks Uji dan Latihan Mandiri
Pada latihan mandiri ini, alur kerja Git dijalankan secara tertib di mana pengembangan fitur dilakukan pada branch terpisah (`fitur-petunjuk`) dengan commit yang terpisah dari branch utama. Proses peninjauan atau review kode dilakukan dengan menanggapi komentar konkret pada file catatan, sehingga ketika proses merge dilakukan ke branch utama (`master`), konten tetap benar dan seluruh halaman web dapat terus berfungsi secara normal tanpa kendala.

Pengujian fungsional dilakukan melalui tiga kondisi utama. Pada kasus normal, formulir diisi dengan data valid sesuai ketentuan sehingga sistem memproses data dengan baik. Pada kasus batas, pengujian dilakukan dengan mengosongkan kolom input wajib, yang kemudian direspons oleh sistem dengan memunculkan peringatan validasi bawaan. Sementara itu, pada kasus gagal, pengujian dilakukan dengan memasukkan data tidak valid (seperti format email tanpa simbol `@`), di mana browser menolak pengiriman data dan menampilkan pesan kesalahan secara langsung.

## Catatan Konflik CSS untuk Walkthrough UTS
Simulasi konflik CSS dilakukan dengan menerapkan aturan ganda pada elemen `header` di dalam file `style.css`. Aturan pertama memberikan warna latar belakang biru, yang kemudian ditimpa oleh aturan kedua dengan warna latar belakang merah di baris bawahnya. Berdasarkan aturan cascade CSS, aturan kedua berhasil menimpa aturan pertama sehingga tampilan header di browser berubah menjadi merah.

## Catatan Troubleshooting
Kendala teknis yang sempat ditemui selama pengujian meliputi perubahan kode yang tidak langsung tampil di browser, yang diatasi dengan memastikan file telah disimpan menggunakan kombinasi `Ctrl + S` serta memuat ulang halaman pada server lokal. Selain itu, masalah terkait tata letak atau konflik CSS disesuaikan melalui pemeriksaan urutan spesifisitas selector di perangkat pengembang browser.

## Pernyataan Penggunaan AI (AI Use Statement)
Penggunaan asisten AI dalam kegiatan ini terbatas sebagai sarana diskusi untuk memahami konsep dasar spesifisitas CSS, alur kerja perintah Git, serta membantu menyusun struktur narasi laporan dokumentasi ini. Seluruh hasil kode dan tahapan eksperimen telah diverifikasi secara mandiri melalui pengujian langsung di browser menggunakan Live Server dan pemeriksaan terminal. Tidak ada data pribadi atau informasi rahasia nyata yang disertakan selama proses konsultasi.

## Catatan Troubleshooting
Beberapa kendala teknis yang sempat ditemui selama proses pengerjaan diatasi melalui pemeriksaan sistematis. Ketika tampilan halaman web tidak kunjung berubah, penanganan dilakukan dengan memastikan file telah disimpan (`Ctrl + S`) dan me-refresh server lokal pada URL yang benar[cite: 11]. Untuk mencegah error 404, path serta penulisan kapitalisasi folder dan file diperiksa kembali[cite: 11]. Masalah styling CSS yang tidak sesuai diselesaikan dengan mengecek file yang termuat, hierarki selector, serta tab Computed pada DevTools browser[cite: 11]. Selain itu, penanganan kesalahan JavaScript seperti SyntaxError atau elemen bernilai null dilakukan dengan membaca baris log Console, memeriksa scope kurung, serta memastikan waktu pemanggilan script sudah tepat

## Pernyataan Penggunaan AI (AI Use Statement)
Penggunaan asisten AI (Gemini AI) pada praktikum ini bertujuan sebagai sarana diskusi untuk membantu penjelasan konsep, seperti alur perintah Git dan simulasi konflik CSS (*cascade & overriding*)[cite: 10, 11]. AI juga dimanfaatkan dalam membantu menyusun struktur narasi laporan pada file README ini[cite: 10, 11]. Seluruh saran yang diberikan oleh AI telah diuji dan diverifikasi secara langsung melalui browser (Live Server), pengujian form, serta pemeriksaan terminal VS Code[cite: 10, 11]. Selama proses konsultasi, tidak ada data rahasia, password, API key, maupun data pribadi mahasiswa nyata yang dimasukkan[cite: 11]. Seluruh kode dan alur kerja yang dihasilkan dapat dijelaskan secara mandiri untuk kebutuhan *walkthrough* UTS