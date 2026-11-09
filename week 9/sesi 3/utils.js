export function hitungTotal(n, harga) { return n * harga; }

// utils.js
export function hitungTotal(n, harga) {
    if (!Number.isInteger(n) || n < 1) return null;
    return n * harga;
}