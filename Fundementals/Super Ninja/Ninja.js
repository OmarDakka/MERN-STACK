class Ninja {
    constructor(name,health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;

    }
    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log(this.name,this.health,this.speed,this.strength);    
    }
    drinkSake() {
        this.health += 10;
        console.log(this.health);
    }
}

const Naruto = new Ninja("Naruto",50);
Naruto.drinkSake();

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.wisdom = 10;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
    }

    speakWisdom() {
        console.log("What one programmer can do in one month, two programmers can do in two months.")
        super.drinkSake();
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();