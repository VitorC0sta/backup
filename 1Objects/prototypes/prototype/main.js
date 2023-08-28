//new Object -> Object.prototype
{
const objA = {
    keyA: 'A',
    //__proto__: Object.prototype
};

const objB = {
    keyB: 'B',
    //__proto__: objA
};

const objC = new Object(); //__proto__: objB
objC.keyC = 'C';

Object.setPrototypeOf(objB, objA);
//Object.setPrototypeOf(objC,objA);
Object.setPrototypeOf(objC,objB);
//console.log(objB.keyA, objB.keyB, objB.keyC);
//console.log(objC.keyA,objC.keyB, objC.keyC);
}

function Motocycle(name, price) {
    this.name = name;
    this.price = price;

};

Motocycle.prototype.discount = function(percent) {
    return (this.price*(1-(percent/100))).toFixed(2);
};

Motocycle.prototype.monetaryCorrection = function(percent) {
    return (this.price*(1+(percent/100))).toFixed(2);
};

const mt03 = new Motocycle("mt-03",32630);

console.log(`${mt03.name} R$: ${mt03.discount(20).replace(".", ",")}`);
console.log(`${mt03.name} R$: ${mt03.monetaryCorrection(20).replace(".", ",")}`);

const mt07 = {
    name: "mt-07",
    price: 46990 
}

Object.setPrototypeOf(mt07, Motocycle.prototype);


console.log(`${mt07.name} R$: ${mt07.discount(20).replace(".", ",")}`);
console.log(`${mt07.name} R$: ${mt07.monetaryCorrection(20).replace(".", ",")}`);

const cb1000 = Object.create(Motocycle.prototype, {
    weitgh: {
        enumerable: true,
        writable: true,
        configurable: false,
        value: 208,
    
    }
});
cb1000.price = 78870;
console.log(cb1000);