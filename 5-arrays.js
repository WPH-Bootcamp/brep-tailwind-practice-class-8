// 1. Membuat Array
const arr1 = [1, 2, 3]; // Array Literal
const arr2 = Array.from('abc'); // Array dari string
const arr3 = new Array(3).fill(0); // Array dengan 3 elemen 0

console.log(arr1);
console.log(arr2);
console.log(arr3);

// 2. Mengakses Elemen Array
const buah = ['apple', 'banana', 'cherry'];
console.log(buah[0]);
console.log(buah[2]);
console.log(buah[1]);
console.log(buah.at(-1));

// 3. Mutating Methods (Mengubah Array Asli)
let keranjang = ['laptop', 'mouse', 'keyboard'];
console.log(keranjang);
keranjang.push('monitor');
console.log(keranjang);

keranjang.pop();
console.log(keranjang);

keranjang.unshift('headset');
console.log(keranjang);

keranjang.shift();
console.log(keranjang);

keranjang.splice(1, 1, 'mousepad');
console.log(keranjang);

keranjang.splice(1, 1);
console.log(keranjang);

keranjang.splice(keranjang.length, 0, 'mousepad');
console.log(keranjang);

// 4. Non Mutating Methods (Tidak Mengubah Array Asli)
const angka = [1, 2, 3, 4, 5];
console.log(angka);

const copy = angka.slice();
console.log(copy);

const gabung = angka.concat(6, 7, 8);
console.log(gabung);

const ada = angka.includes(10);
console.log(ada);
