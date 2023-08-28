const speak = {
    speak() {
        console.log(`${this.name} says: Hi !`);
    }
};

const eat = {
    eat() {
        console.log(`${this.name} is eating.`);
    }
};

const drink = {
    drink() {
        console.log(`${this.name} is drinking`);
    }, 
};

const fullName = {
    fullName() {
        console.log(`${this.name} ${this.surname}.`);
    }
};

const personPrototype = Object.assign({}, speak, eat, drink, fullName);

function newPerson(name, surname) {
        
    return  Object.create(personPrototype, {
        name: {value: name},
        surname: {value: surname},

    });
}

const person1 = newPerson('Vitor','Costa');
const person2 = newPerson('Gabi', 'Ferraz');
