
const randomTime = (min, max) => Math.floor(Math.random() * ((max*1000)-(min*1000)) + (min*1000));

 function responseTimeSimulation(message) {
    const time = randomTime(1,3);

    const response = `Time: ${(time/1000).toFixed(2)}s | ${message}`;

    return new Promise((resolve, rejected) => {

        if(typeof message !== 'string') rejected(new Error(`Failed to connect or bad connection.`));

        setTimeout(() => {
            resolve(response);
        }, time); 
    });
    
}

responseTimeSimulation("Conecting to database").then(response => {
    console.log(response);        
    return responseTimeSimulation("Conected to data base");
}).then(response => {
    console.log(response);
    return responseTimeSimulation("Search data"); 
}).then(response=> {
    console.log(response);
    return responseTimeSimulation(1);
}).then(response => {
    console.log(response);
}).catch( err => {
    console.log(err)
});
 

