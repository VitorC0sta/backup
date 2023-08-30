
const randomTime = (min, max) => Math.floor(Math.random() * ((max*1000)-(min*1000)) + (min*1000));

 function responseTimeSimulation(message) {
    const time = randomTime(1,3);

    const response = `Time: ${(time/1000).toFixed(2)}s | ${message}`;

    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            resolve(response);
        }, time); 
    });
    
}

responseTimeSimulation("Conected 1").then(response => {
    console.log(response);        
    return responseTimeSimulation("Conected 2"); 
}).then(response => {
    console.log(response);
    return responseTimeSimulation("Conected 3");
}).then(response=> {
    console.log(response);
    return responseTimeSimulation("Conected 4çç");
}).then(response => {
    console.log(response);
}).catch();
 

