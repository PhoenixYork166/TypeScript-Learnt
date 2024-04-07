"use strict";
class Department {
    // private id: string;
    //public readonly name: string;
    //private employees: string[] = [];
    constructor(id, name, employees = []) {
        this.id = id;
        this.name = name;
        this.employees = employees;
        this.name = name;
    }
    describe() {
        console.log(`Department.id: ${this.id}`);
        console.log(`Department.name: ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
        console.log(`Added this.employees:\n${this.employees}`);
    }
    printEmployeeInformation() {
        console.log(`this.employees.length:\n${this.employees.length}`);
        console.log(`current this.employees:\n${this.employees}`);
    }
}
// Class Inheritance
class ITDepartment extends Department {
    constructor(id, admins) {
        // super bases on class Department
        super(id, 'IT');
        this.admins = admins;
    }
    printAdmins() {
        console.log(`this.admins:\n${this.admins}`);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(`this.reports:\n${this.reports}`);
    }
}
// constructor(id: number, admins: string[]) {...}
const it = new ITDepartment(1, ['Berlin']);
it.addEmployee('Max');
it.addEmployee('Manu');
it.describe();
it.printAdmins();
it.name = 'IT';
it.printEmployeeInformation();
console.log(`\n`);
// constructor(id: number, private reports: string[]) {...}
const accounting = new AccountingDepartment(2, []);
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.describe();
accounting.printEmployeeInformation();
accounting.addReport('Something went wrong...');
accounting.printReports();
// creating a new Department object 'Accounting'
// using Department blueprint
// const accounting = new Department(1, 'Accounting');
// accounting.addEmployee('Max');
// accounting.addEmployee('Manu');
// accounting.describe();
// accounting.printEmployeeInformation();
// this public class allows others
// to edit class accounting.employees to ruin the class
//accounting.employees[2] = 'Anna';
// console.log(`accounting:\n${accounting}`);
// console.log(`accounting.name:\n${accounting.name}`);
// destructuring class Department
// including both Department.name & Department.describe()
// const accountingCopy = { 
//     name: 'accountingCopy', 
//     describe: accounting.describe 
// };
// accountingCopy.describe();
