// SOAL 1
console.log("--- SOAL 1 ---");
console.log("Release 0"); // Release 0

class Animal{
    constructor(){
        this.name = '';
        this.legs = '';
        this.cold_blooded = false; 
    }
    get animal_name(){
        return this.name;
    }
    set animal_name(x){
        this.name = x;
    }
    get animal_legs(){
        return this.legs;
    }
    set animal_legs(banyak){
        this.legs = banyak; 
    }
    get animal_cold_blooded(){
        return this.cold_blooded;
    }
    set animal_cold_blooded(salah){
        this.cold_blooded = salah;
    }
}

var sheep = new Animal();
sheep.animal_name = "Shaun"
sheep.animal_legs = 4
sheep.animal_cold_blooded = false 

console.log(sheep.animal_name);
console.log(sheep.animal_legs);
console.log(sheep.animal_cold_blooded);

console.log();
console.log("Release 1"); // Release 1

class Ape extends Animal{
    constructor(){
        super();
    }
    yell(){
        return "Auooo";
    }
}

class Frog extends Animal{
    constructor(){
        super();
    }
    jump(){
        return "hop hop";
    }
}

var sungokong = new Ape()
console.log(sungokong.yell());
sungokong.animal_name = "kera sakti"
sungokong.animal_legs = 2

console.log(sungokong.animal_name);
console.log(sungokong.animal_legs);
console.log(sungokong.animal_cold_blooded);

var kodok = new Frog()
kodok.animal_legs = 4
console.log(kodok.jump());
kodok.animal_name = "buduk"

console.log(kodok.animal_name);
console.log(kodok.animal_legs);
console.log(kodok.animal_cold_blooded);



console.log();

// SOAL 2
console.log("--- SOAL 2 ---");
class Clock{
    constructor({template}){
        this.template = template
        this._timer = null
    }
    render(){
       var date = new Date();

       var hours = date.getHours();
       if (hours < 10) hours = '0' + hours;
       
       var mins = date.getMinutes();
       if (mins < 10) mins = '0' + mins;
       
       var secs = date.getSeconds();
       if (secs < 10) secs = '0' + secs;

        var output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

        console.log(output);
    
    }

    stop(){
        clearInterval(timer);
    };

    start(){
        this.render();
        this.timer = setInterval(this.render.bind(this),1000)
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start(); 

