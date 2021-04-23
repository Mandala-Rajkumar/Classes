abstract class Department {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  // describe(this: Department) {
  //   console.log(`Department (${this.id}): ${this.name}`);
  // }
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';;
    this.employees.push(employee);
  }

  static creteEmployee(name: string) {
    return { name: name }
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log('Department IT Id -' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instanceObj: AccountingDepartment;

  static proper: string = 'Reddyyyyyyyyyyyy';

  static prooo() {
    return this.proper;
  }

  get mostRecentReport() {
    if(this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No Report Found.');
  }

  set mostRecentReport(text: string) {
    if(!text) {
      throw new Error('Please enter valid value.')
    }
    this.addReport(text);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
     if(AccountingDepartment.instanceObj) {
       return this.instanceObj;
     }
     else {
       this.instanceObj = new AccountingDepartment('d2', []);
       return this.instanceObj;
     }
  } 

  describe() {
    console.log('Department IT Id -' + this.id);
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

// it.employees[2] = 'Anna';

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);
const employee1 = Department.creteEmployee('Rajjjjj');
console.log(employee1);

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
const accounting3 = AccountingDepartment.prooo();
console.log(accounting3);

accounting.mostRecentReport = 'End Report';
accounting.addReport('Something went wrong...');
// console.log(accounting.mostRecentReport)

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();