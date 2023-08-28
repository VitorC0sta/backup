class Cpf {
    constructor(sendedCpf) {
        this.cpf = sendedCpf;
        Object.defineProperty(this, "cleanCpf", {
            writable: true,
            enumerable: true,
            configurable: false,
            value: sendedCpf.replace(/\D+/g, '')
        });
    }

    isValidCpf() {
        if(typeof this.cleanCpf === 'undefined') return false;
        if(typeof this.cleanCpf !== 'string') return false;
        if(this.cleanCpf.length !== 11) return false;

        const noDigitCpf = this.cleanCpf.slice(0,-2);
        const findFirstDigit = this.findDigit(noDigitCpf)
        const findSecondDigit = this.findDigit(noDigitCpf+ findFirstDigit);

        const fullCpf = String(noDigitCpf + findFirstDigit + findSecondDigit);

        
        return fullCpf === this.cleanCpf
    } 

    findDigit(noDigitCpf) {
        const arrayNoDigitCpf = Array.from(noDigitCpf);
        let regressiveCount = arrayNoDigitCpf.length + 1;
        let findSum = arrayNoDigitCpf.reduce((ac, el) => {
            ac += Number(el)*regressiveCount;
            regressiveCount--;
            return ac;
        }, 0);
        
        const findDigit = 11-(findSum%11)

        return findDigit > 9 ? '0':String(findDigit);
    }
}


const printValidation = (cpf) => cpf.isValidCpf()? console.log(`${cpf.cpf} e Valido.`):console.log(`${cpf.cpf} e Invalido.`);

const cpf01 = new Cpf('705.484.450-52');
const cpf02 = new Cpf('123.456.789-10');

printValidation(cpf01);
printValidation(cpf02);