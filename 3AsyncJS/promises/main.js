// const randomTime = (min, max) => Math.floor(Math.random() * (max-min) + min);


// function responseTimeSimulation(message) {
//     const time = randomTime(1000,3000);

//     const response = `Time: ${(time/1000).toFixed(2)}s | ${message}`;

//     return new Promise((resolve, rejected) => {
//         setTimeout(() => {
//             resolve(response);
//         }, time); 
//     });
    
// }

// responseTimeSimulation("Conected 1").then(response => {
//     console.log(response);        
//     return responseTimeSimulation("Conected 2"); 
// }).then(response => {
//     console.log(response);
//     return responseTimeSimulation("Conected 3");
// }).then(response=> {
//     console.log(response);
//     return responseTimeSimulation("Conected 4");
// }).catch();

const text = "Exemplo com acentuação: usuário cachaça áéíóú";

console.log(text);