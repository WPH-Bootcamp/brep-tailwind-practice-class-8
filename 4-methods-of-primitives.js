const nama = '  Budi Santoso  ';

console.log(nama.length); // 16
console.log(nama.trim()); // "Budi Santoso"
console.log(nama.toUpperCase()); // "  BUDI SANTOSO  "
console.log(nama.includes('Budi')); // true

const teks = 'Hello World';

console.log(teks.slice(0, 5)); // "Hello"
console.log(teks.replace('World', 'JS')); // "Hello JS"

const kode = '42';

console.log(kode.padStart(5, '0')); // "00042"
console.log(kode.padEnd(5, '*')); // "42***"

console.log('ha'.repeat(3)); // "hahaha"
console.log('ha'.repeat(3)); // "hahaha"

const harga = 15750.5;
console.log(harga.toFixed(3)); // "15750.50"

const noHp = '08123456789';

const formatted =
  noHp.slice(0, 4) + '-' + noHp.slice(4, 8) + '-' + noHp.slice(8);

console.log(formatted);
// "0812-3456-789"
