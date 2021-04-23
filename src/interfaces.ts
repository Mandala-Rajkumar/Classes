interface AddFn {
    (a: number , b: number) : number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
      return n1 + n2;
}

interface Named {
    readonly name?: string;
    outputName?: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string;

    constructor(n?: string) {
        if(n) {
            this.name = n;
        }
    }

    greet(phrase: string) {
        if(this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Hi')
        }
    }
}

const user: Greetable = new Person();

// user = {
//     name: 'RajKumar',
//     age: 24,
//     greet(phrase: string) {
//         console.log(phrase + ' ' + this.name);
//     }
// }

user.greet('Hi there - I am');