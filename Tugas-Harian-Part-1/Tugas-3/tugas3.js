// SOAL 1
console.log("--- SOAL 1 ---");

var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript"

String.prototype.toSentenceCase = function(){
    return this.charAt(0).toUpperCase() + this.slice(1)
}
var kapital = kataKedua.toSentenceCase()
var upper = kataKeempat.toUpperCase()
console.log(kataPertama.concat( " " +kapital, " " +kataKetiga, " " +upper));

// SOAL 2
console.log("--- SOAL 2 ---");
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "3";
var kataKeempat = "5";

var strInt_1 = parseInt(kataPertama); // angka 1
var strInt_2 = parseInt(kataKedua); // angka 2
var strInt_3 = parseInt(kataKetiga); // angka 3
var strInt_4 = parseInt(kataKeempat); // angka 5
var jumlah = strInt_1 + strInt_2 + strInt_3 + strInt_4; // penjumlahan seluruh angka (integer)
console.log(jumlah);

// SOAL 3
console.log("--- SOAL 3 ---");

var kalimat ='wah javasript itu keren sekali';

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14); 
var kataKetiga = kalimat.substring(14, 18); // do your own! 
var kataKeempat = kalimat.substring(18, 24 );; // do your own! 
var kataKelima = kalimat.substring(24, 31);; // do your own! 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

// SOAL 4
console.log("--- SOAL 4 ---");
var nilai = 90;

if (nilai >= 80){
    console.log("Indeksnya A");
}else if(nilai >= 70 && nilai < 80){
    console.log("Indeksnya B")
}else if(nilai >= 60 && nilai < 70){
    console.log("Indeksnya C");
}else if(nilai >= 50 && nilai < 60){
    console.log("Indeksnya D");
}else{
    console.log("Indeksnya E");
}

// SOAL 5 
console.log("--- SOAL 5 ---");

var tanggal = 1;
var bulan = 12;
var tahun = 1999;

var Bulanku;
switch(bulan) {
  case 1:   { console.log(tanggal + ' Januari ' + tahun); break; }
  case 2:   { console.log(tanggal + ' Februari ' + tahun); break; }
  case 3:   { console.log(tanggal + ' Maret ' + tahun); break; }
  case 4:   { console.log(tanggal + ' April ' + tahun); break; }
  case 5:   { console.log(tanggal + ' Mei ' + tahun); break; }
  case 6:   { console.log(tanggal + ' Juni ' + tahun); break; }
  case 7:   { console.log(tanggal + ' Juli ' + tahun); break; }
  case 8:   { console.log(tanggal + ' Agustus ' + tahun); break; }
  case 9:   { console.log(tanggal + ' September ' + tahun); break; }
  case 10:   { console.log(tanggal + ' Oktober ' + tahun); break; }
  case 11:   { console.log(tanggal + ' November ' + tahun); break; }
  case 12:   { console.log(tanggal + ' Desember ' + tahun); break; }

}



