const user = {
  id: 1,
  nama: 'Ucup',
  apakahAktif: true,
  hobi: ['coding', 'makan'],
};

const JSONUser = JSON.stringify(user);
console.log(JSONUser);

const JSONUserPretty = JSON.stringify(user, null, 2);
console.log(JSONUserPretty);

const JSONUserData = JSON.parse(JSONUser);
console.log(JSONUserData);
