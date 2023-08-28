// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

*/
 
const cpf01 = new Cpf("070.987.720-03");
const cpf02 = new Cpf("705.484.450-52");
 

function Cpf(sendedCpf) {
    Object.defineProperty(this, "cpfArray", {
        enumerable: true,
        configurable: false,
        get: function() {
            return Array.from((this.cpf = sendedCpf.replace(/\D+/g, '')));
        },
    });
}

Cpf.prototype.cpfValidation = function(){
    
    if(typeof this.cpfArray === 'undefined') return false;
    if(this.cpfArray.length !== 11) return false;
    
    const parcialCpf = this.cpfArray.slice(0,-2);
    const validCpf = parcialCpf;
    const digitOne = this.findDigit(validCpf);
    validCpf.push(digitOne);
    const digitTwo = this.findDigit(validCpf);
    validCpf.push(digitTwo);
    
    console.log(validCpf.join(), this.cpfArray.join())
    return validCpf.toString() === this.cpfArray.toString();
}

Cpf.prototype.findDigit = function(parcialCpf) {
    const cpfWithoutDigit = Array.from(parcialCpf);
    let regressiveCounter = cpfWithoutDigit.length + 1;
    let findedDigit = cpfWithoutDigit.reduce((acc, el) => {
        acc += (regressiveCounter * Number(el));
        regressiveCounter--;        
        return acc;
    }, 0);

    findedDigit = 11-(findedDigit%11);

    return findedDigit > 9? '0':String(findedDigit);

}

console.log(cpf01.cpfValidation());
console.log(cpf02.cpfValidation());