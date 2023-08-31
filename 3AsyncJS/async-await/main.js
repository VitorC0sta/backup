const randomTime = (min=0.2, max=3.0) => Math.floor(Math.random() * ((max*1000)-(min*1000)) + (min*1000));

let totalProcessTime = 0;

function dataBaseServiceRequest(message) {
    return new Promise((resolve, reject) => {
        const dataBaseRequest = randomTime()
        ;
        setTimeout(() => {
            totalProcessTime += dataBaseRequest;
            if(typeof message !== 'string') reject(`[ERROR] Lose conection or failed request to data base.`);            
            
            resolve(`Time: ${(dataBaseRequest/1000).toFixed(2)}s | ${message}`);
        }, dataBaseRequest);

    });
}

    
/* 
    dataBaseServiceRequest("Connection Request")
    .then(response => {
        console.log(response);
        return dataBaseServiceRequest("Resquesting Data");
        })
    .then(response => {
        console.log(response);
        return dataBaseServiceRequest("Value");
    })
    .then(response => {
        console.log(response);
        return dataBaseServiceRequest("Closing");
    })
    .then(response => console.log(response))
    .catch(err => {
        console.log(err);
    });
}
*/

(async function execute() {
    try {
        const conectionRequest = dataBaseServiceRequest("Conection request.");
        console.log(conectionRequest);
        setTimeout(function() {return console.log("Was Pending: ", conectionRequest)},2100)
        const requestData = await dataBaseServiceRequest("Requesting data.");
        console.log(requestData);
        const returnedValue = await dataBaseServiceRequest("Value.");
        console.log(returnedValue);
        const closingConnection = await dataBaseServiceRequest("Closing connection.");
        console.log(`${closingConnection}\nTime: ${(totalProcessTime/1000).toFixed(2)}s | Status: Finished processes.`);   
        const err = await dataBaseServiceRequest(-1);     
    } catch(err) {
        console.error(err);
    }
})();
