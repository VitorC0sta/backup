function Person(name, surname) {
   this.name  = name;
   this.surname = surname;   
   
}

Person.prototype.fullName = function(){ return this.name + " " + this.surname};

const person1 = new Person("Vitor", "C.");
const person2 = new Person("Gabriela", "F.");

console.dir(person1);
console.dir(person2);