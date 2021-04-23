type Combinable = number | string;

function addElements(a:number , b:number): number;
function addElements(a:string , b:string): string;
function addElements(a:number , b:string): string;
function addElements(a:string , b:number): string;
function addElements(a:Combinable , b:Combinable) {
    if(typeof a === 'string' || typeof b == 'string') {
        return a.toString() + b.toString();
    }
    return a + b;   
}

const result = addElements('Raj' , 'Kumar');
result.split(' ')