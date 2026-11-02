// 1. Membuat Map()
const map = new Map();
console.log(map);

// 2. Menambahkan Data(set)
map.set('nama', 'budi');
map.set('umur', 25);
console.log(map);

// 3. Mengambil Data (get)
console.log(map.get('nama'));
console.log(map.get('umur'));

// 4. Cek Key
console.log(map.has('umur'));

// 5. Menghapus Data
map.delete('umur');
console.log(map);

// 6. Menghapus Semua (clear)
map.clear();
console.log(map);
