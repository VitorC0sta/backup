//Modo feito pelo curso

function request(obj) {
    return new Promise((resolve, reject) => {
        if (window.XMLHttpRequest) { //Novos Browsers.
            
            const xhr = new XMLHttpRequest();
            xhr.open(obj.method, obj.url, true);
            xhr.send();

            xhr.addEventListener("load", () => {
                if (xhr.readyState === 4) {
                    if(xhr.status >=200 && xhr.status < 300 ) {
                        resolve(xhr.responseText);
                    } else {
                        reject(xhr.statusText);
                    }
                }
                
            })

        } else if (window.ActiveXObject) { //IE e outros dinossauros.
            try {
                const xhr = new ActiveXObject("Msxml2.XMLHTTP");
                xhr.open(obj.method, obj.url, true);
                xhr.send();


            } catch(e) {
                try {
                    const xhr = new ActiveXObject("Microsoft.XMLHTTP");
                    xhr.open(obj.method, obj.url, true);
                    xhr.send();
                } catch(e) {}
            }
        }

    })
};

document.addEventListener('click', (e)=> {
    const element = e.target;

    const tag = element.tagName.toLowerCase();

    if(tag === 'a') {
        e.preventDefault();
        loadPage(element);
    }
});

async function loadPage(element) {
    const href = element.getAttribute("href");

    const objectConfiguration = {
        method: 'GET',
        url: href
    };
 try {
    const response = await request(objectConfiguration);
    loadResult(response);
 } catch (e) {
    console.error(e);
 }

};

function loadResult(response) {
    const divResult = document.querySelector('.box-result');
    divResult.innerHTML = response;
}
