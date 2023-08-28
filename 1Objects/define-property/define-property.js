function Product(name, price, storage) {
    this.name = name;
    this.price = price;
    this.storage = storage;
 

    Object.defineProperty(this, "storage", {
        enumerable: true, //show de keys.
        value: storage,  //show the value 
        writable: true, //change the value
        configurable: false, //can delete or reconfigure the key.
    });

    Object.defineProperties(this, {
        name: {
            enumerable: true,
            value: "name",
            writable: false,
            configurable:false,
        },
        price: {
            enumerable: true,
            value: "name",
            writable: false,
            configurable:false
        },
    }) 
}

const product01 = new Product("Moletom", 89.90, 4);

product01.storage = 3;

console.log(product01);
for(let key in product01) {
    console.log(key);
}
