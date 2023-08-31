const randomTime = (min, max) => Math.floor(Math.random() * ((max*1000)-(min*1000)) + (min*1000));

function dataBaseServiceRequest(message) {
    return new Promise((resolve, reject) => {
        const dataBaseRequest = randomTime(0.2, 3.5);
        
        setTimeout(() => {
            if(typeof message !== 'string') reject(`[ERROR] Lose conection or failed request to data base.`);            
            
            resolve(`Time: ${(dataBaseRequest/1000).toFixed(2)}s | ${message}`);
        }, dataBaseRequest);

    });
}

const promises = [
    dataBaseServiceRequest("Conection Request"), 
    dataBaseServiceRequest("Conected to data base"),
    dataBaseServiceRequest("Resquesting Data"),
    dataBaseServiceRequest("Value"),
    dataBaseServiceRequest("Closing conection"),
    dataBaseServiceRequest(-1)
];

/* Ease Promise methods.
Promise.all(); //Return all promisses
Promise.race(); //Returns the fastest promise.
Promise.resolve();
Promise.reject();

*/

Promise.all(promises)
.then((value) => console.log(value))
.catch((err) => console.log(err));

   