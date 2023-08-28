function Product(name, price, storage) {
    this.name = name;
    this.price = price;
    

    Object.defineProperty(this, "storage", {
        enumerable: true, //show de keys.
        configurable: false, //can delete or reconfigure the key.
        get: ()=> {
            return storage;
        },
        set: (value)=> {
            if(typeof value !== 'number') {
                throw new TypeError(`"${value}" is not a number.`);

            }

            storage = value;
        },
    });
}


function createProduct(name) {
    return {
        get name() {
            return name
        },
        set name(value){
            if(typeof value !== 'number') {
                throw new TypeError(`"${value}" is not a number.`);

            }

            name = value;
        }
    }
}


const product01 = new Product("Moletom", 89.90, 4);

product01.storage = "Vitor";

console.log(product01, `storage: ${product01.storage}`);