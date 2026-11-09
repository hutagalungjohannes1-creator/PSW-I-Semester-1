function hitungTotal(n, harga) {
 if (!Number.isInteger(n) || n < 1) return null;
 return n * harga;
}
console.log(hitungTotal(2, 10000));
const kegiatan = [
 { id: 1, judul: "HTML", kuota: 20 },
 { id: 2, judul: "CSS", kuota: 0 }
];
const tersedia = kegiatan.filter(k => k.kuota > 0);
console.log(tersedia);
const { judul, kuota } = kegiatan[0];
console.log(judul, kuota);

console.log(hitungTotal(0, 10000));  // Harus bernilai null
console.log(hitungTotal(1.5, 10000)); // Harus bernilai null
