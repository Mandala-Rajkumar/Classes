let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Hello';

if(typeof userInput === 'string') {
    userName = userInput;
}

const hello = (a: number, b: number) => {
      return a + b;
}

// console.log(hello(4,4));


const objj = {
   name: 'Raj',
   balance: 2000,
   doing (amount: number) {
    this.balance = this.balance - amount;
    return `${this.name } has an amount of ${this.balance}`
   }
}

console.log(objj.doing(1500));