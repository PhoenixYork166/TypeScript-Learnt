// Intersection Type => Combining Types

// recap interface
// interface Admin {
//     name: string,
//     privileges: string[],
// };
// =====================================

// Approach 1 => Intersection type
// Intersection type combines Object types
// type Admin = {
//     name: string;
//     privileges: string[];
// };

// type Employee = {
//     name: string;
//     startDate: Date;
// };

// type ElevatedEmployee = Admin & Employee;

// Approach 2 => interfaces
interface Admin {
    name: string,
    privileges: string[],
}
interface Employee {
    name: string,
    startDate: Date;
}
interface ElevatedEmployee extends Admin, Employee {};

const employee2: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date(),
};
type Combinable = string | number;
type Numberic = number | boolean;
// Only type number will be intersecting
// across Combinable & Numeric
type Universal = Combinable & Numberic;

function addAgain(a: Combinable, b: Combinable) {
    // type guard
    if (typeof a === 'string' || typeof b === 'string') {
        return +a + +b;
    }
    return a + b;
}
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log(`Name: ${emp.name}`);
    // type guard cannot check against custom types
    //if (typeof emp === '') {}

    // if 'privileges' is in emp => can access emp.privileges
    if ('privileges' in emp) {
        console.log(`Privileges: ${emp.privileges}`);
    }

    // IF 'startDate' is in emp => can access emp.startDate
    if ('startDate' in emp) {
        console.log(`startDate: ${emp.startDate}`);
    }
}
printEmployeeInformation(employee2);
printEmployeeInformation({name: 'employee2', startDate: new Date()});
console.log(`\n`);
