console.log(" SOAL 1 ")
// SOAL 1
console.log("LOOP PERTAMA");
var a = 0;
while(a < 20){
    a+=2;  
    console.log(a + ' - I love coding');
}
console.log("LOOP KEDUA");
while(a >= 0){
    console.log(a + ' - I will become a frontend developer');
    a-=2;
}

console.log();

// SOAL 2
console.log(" SOAL 2 ");
for(var angka= 1; angka <= 20; angka++){
    if(angka % 2 == 0){
        console.log(angka + ' - Berkualitas');
    }else if(angka % 3 == 0 && angka % 2 != 0){
        console.log(angka + ' - I Love Coding');
    }else{
        console.log(angka + ' - Santai');
    }
}

console.log();

// SOAL 3
console.log(" SOAL 3 ");
var simpan = '';
for( var i=1; i<=7; i++){
    for( var j=1; j<=i; j++){
        simpan+=' # ';
    }
    simpan+='\n';
}
console.log(simpan);

console.log();

// SOAL 4
console.log(" SOAL 4 ");
var kalimat="saya sangat senang belajar javascript";
var arr = kalimat.split(" ");
console.log(arr);

console.log();

// SOAL 5
console.log(" SOAL 5");
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var urut = daftarBuah.sort();
var i = 1;
while(i<=5){
    console.log(urut[0]);
    i++;
}