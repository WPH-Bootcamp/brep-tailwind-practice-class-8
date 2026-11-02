// 1. Map (Mengembalikan array baru)
const angka = [1, 2, 3, 4, 5];
console.log(angka);
const double = angka.map(function (x) {
  return x * 2;
});
console.log(double);

// 2. Filter (Mengembalikan array baru)
const ganjil = angka.filter(function (x) {
  return x % 2 !== 0;
});
console.log(ganjil);

const genap = angka.filter((x) => x % 2 === 0);
console.log(genap);

// 3. Reduce (Mengembalikan nilai tunggal)
const jumlah = angka.reduce((acc, curr) => acc + curr, 0);
console.log(jumlah);

// 4. Find (Mengembalikan nilai tunggal)
const found = angka.find((x) => x < 4);
console.log(found);

// 5. FindIndex (Mengembalikan indeks nilai tunggal)
const foundIndex = angka.findIndex((x) => x < 4);
console.log(foundIndex);

// 6. Some and Every (Mengembalikan boolean)
const some = angka.some((x) => x < 4);
console.log(some);

const every = angka.every((x) => x < 4);
console.log(every);

// 7. ForEach (Mengakses setiap elemen)
angka.forEach((x) => console.log(x));
