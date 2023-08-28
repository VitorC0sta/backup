/**
 * Goods => discount, monetaryCorrection
 *  
 *  Shoes = color, bottle = material
 */

function Goods(name, price) {
    this.name = name;
    this.price = price
}

Goods.prototype.monetaryCorrection = function(value) {
    return (this.price*=(1+(value/100))).toFixed(2);
}

Goods.prototype.discount = function(value) {
    return (this.price*=(1-(value/100))).toFixed(2);
}

function Shoes(name, price, color) {
    Goods.call(this, name, price); //Give the arguments to "this"
    /**Goods.call(this, name, price) =
     * this.price: price,
     * this.name: name,
     */
    Object.defineProperty(this, "color", {
        enumerable: true,
        configurable: false,
        get: ()=> {
            return color
        },
        set: (value)=> {
            if(typeof value !== "string") {
                throw new Error(`Bad color.`);
            }

            color = value;
        }  
    })
}

Shoes.prototype = Object.create(Goods.prototype);
Shoes.prototype.constructor = Shoes;

function Bottle(name, price, material, storage) {
    Goods.call(this, name, price);

    Object.defineProperties(this, {
        material: {
            enumerable: true,
            configurable: false,
            get: ()=> {
                return material
            },
            set: (value)=> {
                if(typeof value !== "string") {
                    throw new Error(`Bad Material.`);
                }

                material = value;
            }  
        }, 
        storage: {
            enumerable: true,
            configurable: false,
            get: ()=> {
                return storage
            },
            set: (value)=> {
                if(typeof value !== "number") {
                    throw new Error(`Bad value.`);
                }

                storage = value;
            }  
        }
    })

}
Bottle.prototype = Object.create(Goods.prototype);
Bottle.prototype.constructor = Bottle;

const nikeLobster = new Shoes("Nike Dunk Low Blue Lobster", 24000);
nikeLobster.colo  = "Blue";
nikeLobster.monetaryCorrection(5);

const stanley = new Bottle("Stanley 800m", 249.99, "Aluminium");
stanley.discount(5);
stanley.storage = 6;
console.log(stanley, nikeLobster);

console.log(Object.values(nikeLobster), Object.values(stanley))