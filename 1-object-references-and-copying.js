const a = 1;
const b = 1;

console.log(a === b);

const c = {
  angka: 1,
  penghargaan: {
    predikat: 'baik',
  },
};
const d = { angka: 1 };

console.log(c === d);

const e = c;
console.log(e === c);

e.angka = 100;

console.log(c);

const f = { ...c };
console.log(f === c);
f.angka = 100_000;
f.penghargaan.predikat = 'kurang';
console.log(f);
console.log(c);

const g = structuredClone(c);
console.log(g);
g.penghargaan.predikat = 'baik';

console.log(g);
console.log(c);
