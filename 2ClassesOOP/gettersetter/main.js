const _speed = Symbol('speed');

class Car {
    constructor(model, make) {
        this.model = model;
        this.make = make;
        this[_speed] = 0;
    }

    
    get speed() {
        return this[_speed];
    }

    set speed(value) {
        if(typeof value !== 'number') return;
        if(value > 100 || value < 0) return;
        this[_speed] = value;
    }

    accelarate() {
      if(this[_speed] >= 100) return;
      this[_speed] ++;  
    
    }

    break(){
        if(this[_speed] <= 0) return;
        this[_speed]--;
    }
}

const car01 = new Car("Fusca", "Fiat");


car01.speed = 4000;
console.log(car01);
car01.speed = 99;
console.log(car01);
