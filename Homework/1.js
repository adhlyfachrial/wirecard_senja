let name = "adhly";
console.log(typeof name);
console.log(name);

const nama = "fachrial";
console.log(typeof nama);
console.log(nama);

//let visitor = prompt('Siapakah namamu?'); // gak bisa jalan di cmd

console.log(' ');
console.log('------------------------ Array ------------------------------');
console.log(' ');

let karyawan = ['adhly', 'adhly', 'adhly', 'adhly'];
karyawan[3] = "fachrial";
karyawan[1][0] = "ganteng"; // ga ke deklarasi di let karyawan

console.log( karyawan );

console.log(' ');
console.log('------------------------ Object ------------------------------');
console.log(' ');

let list_karyawan = [];

karyawan = {
	nama : "adhly",
	jenis : "Laki"
};

list_karyawan[0] = karyawan;

karyawan = {
	nama : "Fadhli",
	jenis : "Laki"
};

list_karyawan[1] = karyawan;

console.log( list_karyawan );

console.log( list_karyawan[1]['nama'] );

console.log(' ');
console.log('------------------------ Destructuring Object ------------------------------');
console.log(' ');

const getUser = () => {
  return {
    namex: 'Adi Nugroho',
    handle: '@adinugroho',
    location: 'Jakarta, Indonesia'
  };
}

// extraction
const { namex, handle, location } = getUser();
console.log(namex, handle, location);

console.log(' ');
console.log('------------------------ Arrow Function ------------------------------');
console.log(' ');

const add = (a, b) => a + b;
console.log( add( 1, 3) );