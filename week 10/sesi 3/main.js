// 1. Memeriksa selector h1, #daftar, #pesan, dan #form-peserta
const judul = document.querySelector("h1");
const daftar = document.querySelector("#daftar");
const pesan = document.querySelector("#pesan");
const form = document.querySelector("#form-peserta");

// Mencetak hasil pencarian ke Console untuk diperiksa
console.log("Hasil selector h1:", judul);
console.log("Hasil selector #daftar:", daftar);

// 5. STATE DAN RENDER
let peserta = [
    { id: 1, nama: "Rina" },
    { id: 2, nama: "Budi" }
];
let berikutnya = 3; // Penghitung ID lokal untuk data baru[cite: 5]

function render() {
    // Membersihkan elemen anak agar tidak terjadi duplikat saat render ulang[cite: 12]
    daftar.replaceChildren();

    // Melakukan perulangan untuk setiap data di dalam array peserta[cite: 12]
    for (const p of peserta) {
        const li = document.createElement("li");

        const namaSpan = document.createElement("span");
        namaSpan.textContent = p.nama;

        // 5. TOMBOL HAPUS SAAT RENDER[cite: 6]
        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = "Hapus";
        btn.dataset.id = String(p.id); // Menyimpan ID peserta ke atribut data-id[cite: 6]

        // Menggabungkan teks nama dan tombol ke dalam li[cite: 6]
        li.append(namaSpan, btn);
        daftar.append(li);
    }

    // Mengatur pesan kosong (empty state)[cite: 13]
    pesan.textContent = peserta.length ? "" : "Belum ada peserta";
}

// 4. TAMBAH PESERTA[cite: 5]
form.addEventListener("submit", event => {
    event.preventDefault();
    const nama = String(new FormData(form).get("nama") ?? "").trim();

    // Validasi input kosong atau spasi saja[cite: 5]
    if (!nama) {
        pesan.textContent = "Nama harus diisi";
        return;
    }


    peserta.push({ id: berikutnya++, nama });
    render();
    form.reset();
});

// 6. DELEGATION DAN PENGUJIAN[cite: 7]
daftar.addEventListener("click", event => {
    const btn = event.target.closest("button[data-id]");
    if (!btn || !daftar.contains(btn)) return;

    const id = Number(btn.dataset.id);
    peserta = peserta.filter(p => p.id !== id);
    render();
});


render();