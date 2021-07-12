class Card {
    constructor(name,cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name,cost,power,res) {
        super(name,cost);
        this.power = power;
        this.res = res;
    }
    attack (target) {
        target.res = target.res - this.power;
    }
}

class Effect extends Card {
    constructor(name,cost,text,magnitude) {
        super(name,cost);
        this.text = text;
        this.magnitude = magnitude;
    }
    play(target,stat,magnitude) {
        if(stat === 'res'){
            target.res = target.res + magnitude;
        }
        if(stat === 'power'){
            target.power = target.power + magnitude;
        }
    }
}

const firstUnit = new Unit("Red Belt Ninja",3,3,4);
const secondUnit = new Unit("Black Belt Ninja",4,5,4);
const firstEffect = new Effect("Hard Algorithm",2,"Increase target's resilience by 3",3);
const secondEffect = new Effect("Unhandled Promise Rejection",1,"Reduce target's resilience by 2",-2);
const thirdEffect = new Effect("Pair Programming",3,"Increase target's power by 2",2);


firstEffect.play(firstUnit,'res',firstEffect.magnitude);
console.log(firstUnit);
secondEffect.play(firstUnit,'res',secondEffect.magnitude);
console.log(firstUnit);
thirdEffect.play(secondUnit,'power',thirdEffect.magnitude);
console.log(secondUnit);