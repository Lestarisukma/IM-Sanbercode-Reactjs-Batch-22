// Soal 1
console.log(" --- SOAL 1 ---");
const luasLingkaran =(jarijari) =>{
  return 22/7*jarijari
}
console.log(luasLingkaran(49));

const kelLingkaran = (jari, x = 2)=>{
    return x * 22/7 *jari
}
console.log(kelLingkaran(7));

console.log();

// SOAL 2
console.log("--- SOAL 2 ---");
let kalimat = " "

const a = 'saya'
const b = 'adalah'
const c = 'seorang'
const d = 'frontend' 
const e = 'developer'

const theString = `${a} ${b} ${c} ${d} ${e}` 
console.log(theString);

console.log();

// SOAL 3 
console.log("--- SOAL 3 ---");
const newFunction = (firstName, lastName) => {
    return {
      firstName: firstName,
      lastName: lastName,
      fullName(){
        console.log(`${firstName} ${lastName}`)
      }
    }
  }
   
  //Driver Code 
  newFunction("William", "Imoh").fullName() 

console.log();

// SOAL 4
console.log("--- SOAL 4 ---");
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }

const {firstName, lastName, destination, occupation, spell} = newObject
console.log(firstName, lastName, destination, occupation, spell);

console.log();

// SOAL 5
console.log("--- SOAL 5 ---");
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
//Driver Code
console.log(combined)

let buah = ["Semangka", "Jeruk", "Mangga", "Strawberry", "Nangka", "Salak"]

let [buah1, buah2, ...buah3] = buah;
console.log(buah3)
