function Person(nama, umur) {
  this.nama = nama;
  this.umur = umur;
}

Person.prototype.sapa = function () {
  return `Halo, saya ${this.nama} berumur ${this.umur} Tahun`;
};

const ucup = new Person('Ucup', 22);
const renday = new Person('Renday', 22);

console.log(ucup, renday);
console.log(ucup.sapa());
console.log(ucup instanceof Person);
