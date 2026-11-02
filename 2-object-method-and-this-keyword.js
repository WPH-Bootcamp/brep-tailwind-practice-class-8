const user = {
  nama: 'ucup',
  umur: 21,
  sapa: function () {
    const hasil = this.umur >= 20 ? `Hello Mr. ${this.nama}` : 'Hello kids.';
    return hasil;
  },
  jalan() {
    return `${this.nama} sedang jalan`;
  },
};

console.log(user.sapa());
console.log(user.jalan());
