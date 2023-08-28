const product = {name:"Product", price: 8.50};

const cuba = {...product, //More intuitive.
    material: "Porcelana",
    color: "Lazuli"
};

const caneca = Object.assign({}, product, { material: "Vidro", color: "Yellow"});

const copo = {name: "copo", price: product.price} //Use just if you want one key.

cuba.name = "Cuba";
cuba.price = 9.90;
caneca.name  = "Caneca";
console.log(product);
console.log(cuba);
console.log(caneca);

Object.defineProperty(product, "name", {
    writable:false,
    configurable:false,
});

console.log(Object.getOwnPropertyDescriptor(product, "name"));

console.log(Object.keys(product), Object.values(product), Object.entries(product));