const greetingButton =
    document.querySelector('#greeting-button');

greetingButton.addEventListener('click', () => {
    alert('Selamat belajar Koncoku!');
});


console.log('main.js berhasil dijalankan');

const teks = "39";

console.log(teks + 1);
console.log(Number(teks) + 1);

console.log(typeof teks);
console.log(typeof Number(teks));

console.log(Number("abc"));
console.log(Number.isFinite(Number("abc")));

const jumlah = Number("abc");

if (!Number.isInteger(jumlah) || jumlah < 1 || jumlah > 5) {
    console.log("Jumlah tidak valid");
} else {
    console.log(jumlah * 10000);
}


const judul = ["HTML", "CSS", "Audit"];

for (const item of judul) {
    console.log(item);
}


const judulKosong = [];

for (const item of judulKosong) {
    console.log(item);
}

judul.push("JavaScript");

for (const item of judul) {
    console.log(item);
}