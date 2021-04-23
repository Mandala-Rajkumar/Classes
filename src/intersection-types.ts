type Admin = {
    name: string,
    privilages: string[];
}

type Employee = {
    name: string,
    startDate: Date
}

type combinableType = Admin & Employee;

const employeeOne : combinableType = {
    name: 'Raj',
    privilages: ['Create-Server'],
    startDate: new Date()
}

console.log(employeeOne);


// This is using Interfaces  

// interface Admin {
//     name: string,
//     privilages: string[];
// }

// interface Employee {
//     name: string,
//     startDate: Date
// }

// interface combinableType extends Admin, Employee {}