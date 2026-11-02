const produk = {
  laptop: 8500000,
  mouse: 150000,
  keyboard: 350000,
  monitor: 3200000,
};

// 1. keys
console.log(Object.keys(produk));
// 2. values
const total = Object.values(produk).reduce((acc, h) => acc + h, 0);
console.log(total);
// 3. entries
for (const [nama, harga] of Object.entries(produk)) {
  console.log(`${nama} : ${harga}`);
}
