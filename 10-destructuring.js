// 1. Array Destructuring
const [a, , c, d = 0, ...e] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(a);
console.log(c);
console.log(d);
console.log(e);

let f = 'merah';
let g = 'hijau';

[f, g] = [g, f];
console.log(f);
console.log(g);

// 2. Object Destructuring
const user = { nama: 'Ucup', umur: 28 };

const { nama, umur, role = 'user' } = user;
console.log(nama);
console.log(role);

const order = {
  produk: {
    namaProduk: 'Laptop',
    harga: 10_000_000,
  },
};

const {
  produk: { namaProduk, harga },
} = order;

console.log(namaProduk);

function tampilUser({ nama, umur }) {
  return `${nama} - ${umur}`;
}

console.log(tampilUser(user));
