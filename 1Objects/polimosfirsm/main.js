// Super Class
function BankAccount(agency, accountNumber, balance) {
    Object.defineProperties(this, {
        agency: {
            enumerable: true,
            configurable: false,
            get: () => agency
        },
        accountNumber: {
            enumerable: true,
            configurable: false,
            get: () => accountNumber
        },
        balance: {
            enumerable: true,
            configurable: false,
            get: () =>{
                return balance
            },
            set: (value) => {
                if (typeof value !== "number"){
                    console.error("[ERROR] Invalid value");
                    return;
                };

                balance = value;
            }
        },
    })
}

BankAccount.prototype.toWithDraw = function(value) {
    if(this.balance < value) {
        this.printBalanceAccount();
        console.log(`Insufficient Funds.`);
        return;
    }

    this.balance -= value;
    this.printBalanceAccount();
};

BankAccount.prototype.toDeposit = function(value) {
    this.balance += value ;
    this.printBalanceAccount();
};

BankAccount.prototype.printBalanceAccount = function() {
    console.log(`\n\t-*-${this.accountType}-*-\nAg/c: ${this.agency}\tAccount: ${this.accountNumber}\nBalance: [R$ ${String(this.balance.toFixed(2)).replace('.',',')}]`);
}

function CurrentAccount(agency, accountNumber, balance, limit) {
    BankAccount.call(this, agency, accountNumber, balance);
    this.accountType = "Current Account";
    Object.defineProperty(this, "limit", {
        enumerable: true,
            configurable: false,
            get: () =>{
                return limit;
            },
            set: (value) => {
                if (typeof value !== "number"){
                    console.error("[ERROR] Invalid value");
                    return;
                };

                limit = value;
            }
    })
}

CurrentAccount.prototype = Object.create(BankAccount.prototype);
CurrentAccount.prototype.constructor = CurrentAccount;

CurrentAccount.prototype.toWithDraw = function(value) {
    if(value > (this.balance + this.limit)) {
        console.log('Insufficient Funds.');
        return;
    }

    this.balance -= value;
    this.printBalanceAccount();
};

function SavingsAccount(agency, accountNumber, balance) {
    BankAccount.call(this, agency, accountNumber, balance);
    this.accountType = "Saving Account";
}

SavingsAccount.prototype = BankAccount.prototype;
SavingsAccount.prototype.constructor = SavingsAccount;


const currentAccount = new CurrentAccount("0338", "001345-3", 10000, 250);
const savingsAccount = new SavingsAccount("0043", "000989-0", 10000); 

currentAccount.toWithDraw(10000);
savingsAccount.toWithDraw(10000);
currentAccount.toWithDraw(250);
savingsAccount.toWithDraw(250)

