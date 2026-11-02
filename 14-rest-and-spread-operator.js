// 1. Rest Parameters
function tambahSemua(...angka) {
  return angka.reduce((total, n) => total + n, 0);
}

console.log(tambahSemua(1, 2, 3, 4, 5));

// 2. Spread Syntax
const angka = [1, 2, 3, 4];

console.log(Math.max(...angka));

const a = [1, 2];
const b = [3, 4];

const gabungArr = [...a, ...b];
console.log(gabungArr);

const arr = [1, 2, 3];
const copy = [...arr];
copy[0] = 2;
console.log(arr);
console.log(copy);

const obj1 = { a: 1 };
const obj2 = { b: 2 };

const gabungObj = { ...obj1, ...obj2 };
console.log(gabungObj);

const config = {
  tema: 'light',
};

const user = {
  tema: 'dark',
};

const final = { ...config, ...user };
console.log(final);
