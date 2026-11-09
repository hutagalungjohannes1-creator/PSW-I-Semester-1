1. Persiapan dan Struktur File Proyek
Sebelum mulai ngoding, aku menyiapkan beberapa file utama di dalam folder proyekku:

index.html: File halaman web utamanya yang aku kasih tambahan atribut type="module" supaya bisa pakai sistem impor modul JavaScript.

utils.js: File khusus tempat aku naruh fungsi-fungsi pendukung yang sifatnya murni (pure function), contohnya fungsi hitungTotal.

main.js: File utama tempat aku nulis logika program buat ngolah data array, objek, dan ngetes fungsi-fungsi yang udah dibuat.

README.md: Catatan laporan dan dokumentasi hasil uji coba yang aku lakuin selama praktikum.

2. Eksperimen Kode dan Hasil yang Aku Dapat
Membuat Pure Function (hitungTotal):
Aku bikin fungsi hitungTotal(jumlah, harga) di file utils.js. Fungsi ini murni ngitung perkalian angka dari parameter yang dikasih tanpa merusak data di luar. Kalau ada yang ngisi angka ngaco (misalnya angka 0, angka minus, atau desimal kayak 1.5), fungsinya bakal langsung ngembaliin nilai null.

Beda return sama console.log:
Dari percobaan ini, aku jadi paham kalau return itu ngasih hasil akhir yang nilainya bisa disimpan ke dalam variabel atau diolah lagi. Kalau console.log cuma sekadar nampilin tulisan doang ke layar konsol browser (hasil aslinya sebenarnya undefined).

Ngolah Array dan Objek (filter dan map):
Aku bikin data daftar kegiatan pakai array of objects. Terus, aku pakai metode .filter() buat nyari kegiatan mana saja yang kuotanya masih ada (kuota > 0). Waktu aku coba iseng set semua kuotanya jadi 0, programnya tetap aman dan otomatis ngasih hasil array kosong [] tanpa bikin error.

3. Catatan Hasil Pengujianku
Kemarin aku sempat ngetes berbagai macam kondisi input langsung di konsol browser, dan hasilnya semua sesuai harapan:

Uji Normal (hitungTotal(2, 10000)): Berhasil ngeluarin angka 20000 dengan pas.

Uji Batas Minimal (hitungTotal(1, 10000)): Berhasil jalan normal dan hasilnya 10000.

Uji Batas Maksimal (hitungTotal(5, 10000)): Berhasil ngitung total jadi 50000.

Uji Tolak Angka 0 (hitungTotal(0, 10000)): Berhasil kedetek sama sistem dan ngasih output null.

Uji Tolak Angka Lebih (hitungTotal(6, 10000)): Berhasil nolak dan ngasih output null.

Uji Angka Desimal (hitungTotal(1.5, 10000)): Berhasil kedetek bukan bilangan bulat, jadi hasilnya null.

Uji Filter Kosong: Berhasil nge-return array kosong [] pas semua kuota kegiatan lagi kosong.

Uji Scope Variabel: Sempat nyoba manggil variabel lokal dari luar blok kode, dan hasilnya muncul error ReferenceError sesuai teori yang dipelajari.