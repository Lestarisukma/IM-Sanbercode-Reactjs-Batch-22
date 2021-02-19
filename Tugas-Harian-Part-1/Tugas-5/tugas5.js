// SOAL 1 
console.log(" SOAL 1 ");
function halo(){
    return "Halo Sanbers!"
}
var temp = halo();
console.log(temp);

console.log();

// SOAL 2
console.log(" SOAL 2 ");
function kalikan(num1, num2){
    return num1 * num2
}
var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1, num2);
console.log(hasilKali);

console.log();

// SOAL 3
console.log(" SOAL 3");
function introduce(name, age, address, hobby){
    return 'Nama Saya ' + name + ', umur saya ' + age + ' tahun, alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby 
}

var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";
 
var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);

console.log();

// SOAL 4
console.log(" SOAL 4");
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var pesertaObj = {
    nama : "Asep",
    jenisKelamin : "laki-laki",
    hobi : "baca buku",
    tahunLahir : 1992
}
console.log(pesertaObj);

console.log();

// SOAL 5 
console.log(" SOAL 5 ");
var arrBuah = [
   { nama: "strawberry", warna: "merah", adaBijinya: "tidak", harga: 9000 },
   { nama: "jeruk", warna: "oranye", adaBijinya: "ada", harga: 8000},
   { nama: "Semangka", warna: "Hijau & Merah", adaBijinya: "ada", harga: 10000},
   { nama: "Pisang", warna: "Kuning", adaBijinya: "tidak", harga: 5000}
]
console.log(arrBuah[0]);

console.log();

// SOAL 6
console.log(" SOAL 6");

var dataFilm = []
function tambahDataFilm(nama, durasi, genre, tahun){
    var isi = {}
    isi.nama = nama;
    isi.durasi = durasi;
    isi.genre = genre,
    isi.tahun = tahun;
    dataFilm.push(isi);
    return dataFilm;
}
tambahDataFilm('LOTR','2 jam', 'action', '1999');
tambahDataFilm('avengers','2 jam', 'action', '2019');
tambahDataFilm('spiderman','2 jam', 'action', '2004');
tambahDataFilm('juon','2 jam', 'horror', '2004');
console.log(dataFilm);
