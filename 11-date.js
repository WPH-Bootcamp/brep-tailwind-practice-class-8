// 1. Membuat Date

// -. Sekarang
const now = new Date();
console.log(now);

// -. Dari String (ISO format)
// YYYY-MM-DD
const tgl1 = new Date('2026-01-15');
console.log(tgl1);

// -. Dari Parameter (tahun, bulan, tanggal)
const tgl2 = new Date(2026, 0, 15);
console.log(tgl2);

// 2. Mengambil Data

const sekarang = new Date();

console.log(sekarang.getFullYear());
console.log(sekarang.getMonth());
console.log(sekarang.getDate());
console.log(sekarang.getDay());
console.log(sekarang.getHours());

// 3. Timestamp

const timestamp = Date.now();
console.log(timestamp);

// 4. Formatting
const tglHariIni = new Date();

console.log(tglHariIni.toLocaleDateString('id-ID'));
console.log(tglHariIni.toLocaleTimeString('id-ID'));
console.log(tglHariIni.toISOString());
