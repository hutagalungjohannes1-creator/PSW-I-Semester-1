Nama : Johannes Hutagalung
NIM : 41426034
Prodi : D4 Teknologi Rekayasa Perangkat Lunak

Bahasa dokumen: html mempunyai lang=id ; Lulus
Judul halaman : title tampil pada tab browser ; lulus
Hierarki heading: h1, h2, dan h3 berurutan logis; lulus
Navigasi : Tautan menuju id yang tersedia; lulus

Tag Penutup yang Hilang: Struktur elemen di bawah article menjadi berantakan saat dibuka di browser; Di DevTools (tab Elements), tag p atau tag lain di bawahnya masuk otomatis ke dalam elemen article; Tag penutup article dihilangkan sehingga browser mencoba menutupnya secara otomatis di tempat yang salah; Menambahkan kembali tag article di akhir konten artikel;berhasil
Perubahan ID Section Gejala: Tautan navigasi tidak merespons atau tidak menggeser layar (scroll) ke bagian yang dituju Bukti: URL di browser berubah memuat #kegiatan, tetapi tampilan layar tetap di posisi atas. Penyebab: Nilai href pada navigasi (#kegiatan) tidak cocok dengan atribut id pada section yang diubah. Perbaikan: Menyamakan isi atribut href di navigasi dengan id pada target section Hasil: Berhasil.
Tambahkan h4 langsung setelah h2 tanpa h3, lalu evaluasi hierarkinya. Gejala: Hirarki heading melompat sehingga urutan judul dokumen tidak logis bagi pembaca layar. Bukti: Di DevTools terlihat urutan tag heading melompat langsung dari h2 ke h4 tanpa melewati h3 Penyebab: Penggunaan tingkat heading HTML tidak berurutan sesuai aturan standar aksesibilitas web Perbaikan: Mengubah tag h4 menjadi h3 agar urutan hirarki heading kembali berjenjang. Hasil: Berhasil
Letakkan main di dalam header, jalankan validator, kemudian perbaiki. Gejala: Terjadi kesalahan struktur (validation error) pada dokumen HTML5. Bukti: Pada situs W3Penyebab: Elemen main diletakkan di dalam tag header, padahal harusnya berada langsung di bawah body Validator muncul pesan error: Element main not allowed as child of element header. Perbaikan: Memindahkan seluruh blok main keluar dari header sehingga sejajar di dalam body:berhasilllllllllllllllllllllllllllllllllllllllllllll
 