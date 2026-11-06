Eksperimen Konversi Tipe Data (main.js)

Kasus "5" + 3

Hasil: "53"

Analisis: Terjadi implicit coercion di mana operator plus menggabungkan angka dan string menjadi tipe data string.

Kasus Number("5") + 3

Hasil: 8

Analisis: Menggunakan explicit conversion lewat fungsi Number() agar string sukses berubah wujud menjadi integer murni sebelum dijumlahkan.

Kasus Number("xyz") & Number.isFinite(NaN)

Hasil: NaN dan false

Analisis: Konversi teks non-angka mengembalikan NaN, dan fungsi isFinite mendeteksinya sebagai nilai tak terdefinisi.

Validasi Logika Pembelian Tiket (Batas 1–5 Pcs)

Rentang Valid (1 s/d 5):

Hasil: Transaksi sukses dengan perhitungan total = qty * 15000. Contoh: Memesan 2 tiket menghasilkan total Rp 30.000.

Kondisi Ekstrem (0 & 6):

Hasil: Sistem menolak dengan feedback "Input di luar batas".

Analisis: Blok logika percabangan berhasil memblokir angka di luar rentang ketentuan.

Data Cacat (2.5 & "teks"):

Hasil: Sistem langsung memicu error penolakan.

Analisis: Validasi !Number.isInteger sukses menepis pecahan desimal, sementara input string berujung NaN.

Iterasi Koleksi Data via Looping (for...of)

Array Terisi: ["React", "Node", "Database"]

Hasil: Ketiga item tercetak berurutan secara vertikal pada Console.

Analisis: Perulangan for...of menelusuri tiap elemen array secara otomatis hingga indeks terakhir.

Array Kosong: []

Hasil: Tanpa cetakan teks apapun (silent exit).

Analisis: Eksekusi langsung dilewati karena panjang array bernilai nol.