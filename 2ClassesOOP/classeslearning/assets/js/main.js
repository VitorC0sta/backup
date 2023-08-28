class Person{
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    speak() {
        console.log(`${this.name} say hi !`);
    }

    drink() {
        console.log(`${this.name} is drinking.`); 
    }

    sleep() {
        console.log(`${this.name} is yawning.`);
    }
}

/*
    ***Create with constructor function***

function Person(name, surname) {
    this.name = name;
    this.surname = surname;

}
Person.prototype.speak = () => console.log(`${this.name} say hi !`);
Person.prototype.drink = () => console.log(`${this.name} is drinking.`);
Person.prototype.sleep = () => console.log(`${this.name} is yawning.`);
*/

const p1  = new Person('Vitor', 'Costa');
const p2  = new Person('Gabi', 'Ferraz');
const p3  = new Person('Thiago', 'Ferraz');

console.log(p1);
console.log(p2);
console.log(p3);