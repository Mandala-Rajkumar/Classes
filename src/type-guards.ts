type AdminType = {
    name: string,
    privilages: string[];
}

type EmployeeType = {
    name: string,
    startDate: Date
}

type combineType = string | number;

function addd(a:combineType, b:combineType) {
    // Type Guard
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}

type unKnownEmployee = AdminType | EmployeeType;

function addEmp(emp: unKnownEmployee) {
      console.log(emp.name)
      // Type Guard
      if('privilages' in emp) {
          console.log(emp.privilages)
      }
}

const e1: unKnownEmployee = {
    name: 'Raj',
    privilages: ['Create-Server'],
    startDate: new Date()
}

addEmp(e1);

class Car {
    drive() {
        console.log('driving...')
    }
}


class Truck {
    drive() {
        console.log('driving the Truck...')
    }

    loadCargo(amount: number) {
      console.log('Loading Cargo ' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVechicle(vechicle: Vehicle) {
    vechicle.drive();

    // if('loadCargo' in vechicle) {
    //     vechicle.loadCargo(1000);   
    // }

    // Type Guard
    if(vechicle instanceof Truck) {
        vechicle.loadCargo(1000);   
    }
} 

useVechicle(v1);
useVechicle(v2);