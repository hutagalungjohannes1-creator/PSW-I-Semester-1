Nama    : Johannes Hutagalung
Nim     : 41426034
Prodi   : DIV-Teknologi Rekayasa Perangkat Lunak

 
 
 1. STARTER MOBILE
 Catatan Pengamatan
 Tindakan yang saya lakukan: saya membuka devtools lalu saya menguji halaman web 320px
 Hasil nyata yang tampil di layar: hasilnya layar langsung mengikuti ukuran medianya teksnya memanjang kebawah mengikuti tampilan
Bukti: sudah saya tampilkan di folder bukti

2. BREAKPOINT KONTEN
Catatan pengamatan:
**tindakan yang saya lakukan**
saya menambahkan: 
`@media (min-width: 48rem)` {
  `.catalog { grid-template-columns: repeat(2, 1fr); }`
}
Kedalam css saya
**Hasil nyata yang tampil di layar**: saya menguji layar broswer dengan ukuran 767px, 768px, 769px, lalu saya mengamati ukuran mana yang membuat layout halaman web dari 1 kolom menjadi 2 kolom, lalu setelah saya uji ternyata dari ukuran 768px dan 769px telah mencapai ukuran minimum 48 rem dan layout halaman berubah menjadi 2 kolom
Bukti: sudah saya lampirkan di folder bukti

3. NAVIGASI DAN FORM
Catatan pengamatan:
**Tindakan yang saya lakukan**
saya menambahkan:
`.nav-list { display: flex; flex-wrap: wrap; gap: .75rem; }` 
`input, select, textarea { max-width: 100%; }` ke dalam css. lalu saya mencoba menguji dengan menambahkan label panjang, periksa tombol dan input dan lakukan tab pada viewport kecil
**Hasil nyata yang tampil di layar**: 
setelah 3 pengujian sederhana (tes label panjang, cek kotak form agar tidak meluber, dan tes tombol Tab). 1. tes tabel panjang tesknya tidak memotong keluar dari kotak. 2. melakukan pengujian aksebilitas menggunakan tombol `tab`
**Bukti**: sudah saya lampirkan ke folder bukti

4. Matriks Viewport
Catatan pengamatan:
**Tindakan yang saya lakukan**
- saya menambahkan `.card { min-width: 0; }` kedalam css untuk mencegah flex/grid anak tertahan pada lebar minimun defaultnya
- lalu saya melakukan pengujian 320px(mobile) 768px(Tablet) 1200(Desktop)
- lalu saya melakukan pengujian zoom sebesar 200%
- lalu saya dengan sengaja menambahkan `width: 900px`. lalu saya memperbaikinya kembali
Hasil Nyata Pengamatan
- setelah saya melakukan pengujian oada 320px, 786px, dan 1200px layar tidak mengalami masalah tetapi menyesuaikan dengan rapi
- pada saat melakukan zoom teks dan elemen yang terdapat tetap dapat dibaca tanpa membuatnya berantakan 
**Simulasi Overflow (Before vs After):**
**Before**: sebelumnya saya menambahkan `width: 900px` lalu scroll bar kesamping muncul karena layar yang sempit
**After**: saya mengganti `min-width`: menjadi `Max-width: 100%` lalu seketika scroll bar nya hilang dan tata letaknya aman kembali
**Bukti**
pada folder `bukti/Ukuran Viewport`

5. LATIHAN MANDIRI DAN MATRIKS UJI

Prediksi Sebelum Eksperimen:
- **Kasus 320px:** Konten diharapkan tetap lengkap dan tampil rapi 1 kolom tanpa ada scroll horizontal.
- **Sekitar Breakpoint:** Query aktif sesuai kondisi perubahan ukuran layar.
- **Zoom 200%:** Konten tidak terpotong dan tetap dapat dibaca dengan jelas.
- **Keyboard:** Fokus navigasi terlihat jelas saat tombol Tab ditekan.

**Laporan Hasil Pengujian**
1. Kasus Normal
- **Input / Kondisi:** Pengujian tampilan standar pada viewport desktop (1200px) dan tablet (768px).
- **Tindakan:** Membuka halaman web pada ukuran layar desktop dan tablet untuk melihat transisi tata letak.
- **Hasil Aktual:** Media query aktif sesuai kondisi, tata letak berpindah dari 1 kolom menjadi 2 kolom dengan rapi dan konten dapat dibaca dengan sempurna.
- **Status / Bukti:** LULUS (Lihat file `viewport-768px.png` dan `1200px.png`). 
2. Kasus Batas (Edge Cases)
- **Input / Kondisi:** Pengujian pada viewport 320px, perbesaran Zoom 200%, dan navigasi Keyboard.
- **Tindakan:** 
  - Mengubah ukuran viewport browser ke 320px.
  - Melakukan zoom browser hingga 200%.
  - Menekan tombol Tab pada keyboard untuk berpindah antar elemen navigasi dan formulir.
- **Hasil Aktual:** 
  - Konten tetap utuh dan lengkap tanpa muncul scrollbar horizontal pada 320px.
  - Teks dan elemen tidak terpotong saat di-zoom 200%.
  - Ring fokus terlihat dengan jelas pada tiap elemen interaktif saat di-Tab.
- **Status / Bukti:** LULUS (Lihat file `viewport-320px.png` dan `zoom-200.png`).
3. Kasus Gagal (Eksperimen Overflow & Data Panjang)
- **Input / Kondisi:** Pengujian simulasi overflow dengan `width: 900px;` serta memasukkan teks/label sangat panjang.
- **Tindakan:** 
  - Memberikan properti `width: 900px;` secara sengaja pada elemen `.card`.
  - Mengisi label form dengan teks yang sangat panjang.
- **Hasil Aktual:** Timbul kebocoran tata letak (overflow) dan muncul scrollbar horizontal karena lebar elemen melebihi ukuran viewport kecil.
- **Perbaikan & Retest:** 
  - Memperbaiki kode CSS dengan mengganti `width: 900px;` menjadi `max-width: 100%;` serta memastikan `.card` memiliki `min-width: 0;`.
  - Hasil retest menunjukkan scrollbar horizontal hilang dan teks melipat (*wrap*) secara rapi di dalam wadah.
- **Status / Bukti:** LULUS setelah perbaikan (Lihat bukti sebelum-sesudah pada `overflow-before-900px.png` dan `overflow-after-fix.png`).

6. TROUBLESHOOTING DAN AI USE STATEMENT
Panduan Troubleshooting
- **Halaman tidak berubah:** Simpan file (`save`), lalu *refresh* URL server yang benar.
- **Error 404:** Periksa *path* (jalur), folder, dan kapitalisasi nama file.
- **CSS tidak cocok:** Periksa apakah file termuat dengan benar, periksa *selector*, *cascade*, lalu periksa bagian *Computed* pada developer tools.
- **ReferenceError / SyntaxError:** Baca baris pada *Console*, periksa *scope* (cakupan) serta pasangan tanda kurung[cite: 9].
- **Elemen null:** Periksa kembali *selector* elemen serta waktu eksekusi skrip (*script timing*)[cite: 9].
- **Data tidak sesuai:** Periksa kontrak data, *parsing*, *state*, dan hasil *render*.

AI Use Statement
- **Penggunaan AI:** Menggunakan bantuan AI untuk penjelasan konsep serta diagnosis penanganan error dengan data faktif.
- **Keamanan Data:** Tidak memasukkan password, API key rahasia, ataupun data mahasiswa yang nyata.
- **Pengujian:** Menguji seluruh saran yang diberikan oleh AI melalui browser serta matriks uji secara berkala.
- **Alat dan Tujuan:** Menggunakan asisten AI untuk tujuan diagnosis kode, perbaikan tata letak responsif, dan penyusunan draf dokumentasi, serta memverifikasi hasilnya secara manual di browser.
- **Kesiapan Walkthrough:** Mahasiswa siap menjelaskan seluruh kode dan alur penyelesaian saat sesi *walkthrough*.