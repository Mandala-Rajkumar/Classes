const paragraph = document.querySelector('p');
console.log(paragraph);

// 1st Type
const input1 = <HTMLInputElement>document.getElementById('user-input')!;
console.log(input1.value);

// 2nd Type
const input2 = document.getElementById('user-input')! as HTMLInputElement;
console.log(input2.value);

// or
const input3 = document.getElementById('user-input');
if(input3) {
    (input3 as HTMLInputElement).value = 'Hello Man'
}


 