//Modo feito pelo curso

function request(obj) {
    if (window.XMLHttpRequest) { //Novos Browsers.
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        xhr.addEventListener("load", () => {
            if (xhr.readyState === 400) {
                if(xhr.status >=200 && xhr.status < 300 ) {
                    obj.success(xhr.responseText);
                } else {
                    obj.error(xhr.statusText);
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

    


};

/**
 * httprequest.onreadystatechange ou httpRequest.addListener('load', ()=>{});
 * Cilada pelo domain.tld;
 * O que acontece se for false e qual seu uso na httpRequest.open('method', 'url', *);
 * Como funciona send com POST e uma string de consulta e MIME;
 *  --> Exemplo string ed consulta MDN: "name=value&anothername="+encodeURIComponent(myVar)
 *                                       +"&  so=on" 
 * 
 * 
 */