// 1. Memeriksa selector h1 dan #daftar
const judul = document.querySelector("h1");
const daftar = document.querySelector("#daftar");

// Mencetak hasil pencarian ke Console untuk diperiksa
console.log("Hasil selector h1:", judul);
console.log("Hasil selector #daftar:", daftar);

// 5. STATE DAN RENDER
let peserta = [
    { id: 1, nama: "Rina" },
    { id: 2, nama: "Budi" }
];

function render() {
    // Membersihkan elemen anak agar tidak terjadi duplikat saat render ulang
    daftar.replaceChildren();

    // Melakukan perulangan untuk setiap data di dalam array peserta
    for (const p of peserta) {
        const li = document.createElement("li");
        li.textContent = p.nama;
        daftar.append(li);
    }

    const pesan = document.querySelector("#pesan");
    pesan.textContent = peserta.length ? "" : "Belum ada peserta";
}

// Memanggil fungsi render pertama kali
render();