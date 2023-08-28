class Device {
    constructor(name, model) {
        this.name = name;
        this.state = false;
        this.model = model;
    }


    turnOn() {
        if(this.state) {
            console.log(`${this.name} it's already power on!`)
            return
        }

        this.state = true;
    }

    turnOff() {
        if(!this.state) {
            console.log(`${this.name} it's already power off!`)
            return
        }

        this.state = false;
    }
}

const _mobileNumber = Symbol("Mobile Number");

class Smartphone extends Device {
    constructor(name, number, color, model) {
        super(name, model);
        this[_mobileNumber] = number;
        this.color = color;
    }

    call(value) {
        console.log(`Calling ${value}...`);
        
        for(let i = 0; i <5;i++) {
            console.log('.')
        }

        console.log('Call ended.');
    }

    get mobileNumber() {
        return this[_mobileNumber];
    }

    set mobileNumber(value) {
        if(typeof value !== "string") return;
        if(value.length !== 9) return;

        this[_mobileNumber] = value;

    } 
}

class Laptop extends Device {
    constructor(name, operationalSystem, model) {
        super(name, model);
        this.operationalSystem = operationalSystem;
        
    }
}

const device01 = new Smartphone("Iphone", "(19)98842-9799", "Darkgray", "13 Pro");
const device02 = new Laptop("Acer", "Linux", "Helios");

console.log(device01);
console.log(device01.call("988033031"));
console.log(device02)


