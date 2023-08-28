//Objects creation
{
const objPerson0 = {
    name: "vitor",
    sname: "costa",
    gender: "male"
};


console.log(objPerson0['name']);
console.log(objPerson0.sname);
console.log(objPerson0);

// With constructor

/** Constructor in array.
 * const array = new Array();
 */

const objPerson1 = new Object();

objPerson1.name = "Gabi";
objPerson1.sname = "Ferraz";
objPerson1.gender = "Female";

const keyName = "name";

console.log(objPerson1[keyName]); //Using variable to get object key.
console.log(objPerson1.sname);
console.log(objPerson1);

delete objPerson0.gender;
delete objPerson1.gender;

console.log(objPerson0, objPerson1);
}

//Methods
{
    const car = new Object();
    let count = 0;
    car.model= "Chiron";
    car.year = 2023;
    car.hallmark = "Bugatti";
    car.check = {
        suspension: true,
        wheel: true,
        oil: true,
        gas: false,

    };

    for(let key in car.check) {
        count++;

    };

    car.startEngine = function() {
        for(let key in car.check) {
            if(car.check[key]) {
                console.log(`${key} checked.`);
            }else {
                console.log(`${key} need atention.`);
            }

        };

        console.log(`\n${this.model} engine started.`);
    };

    car.startEngine();

}

//Factory functions / Constructor functions / Class
{
    //Factory:
    function factoryPerson(name, sname) {
        return {
            name,
            sname,
            get fullName() {
                return `${this.name} ${this.sname}`;
            }
        }
    }

    const person = factoryPerson("Vitor", "Costa");
    console.log(person.fullName);

    //Constructor
    function Person(name,sname) {
        this.name = name;
        this.sname = sname;
    };

    const person01 = new Person("Wal", "Costa");
    Object.freeze(person01); //This Method lock the obj ect.
    console.log(person01);
}
