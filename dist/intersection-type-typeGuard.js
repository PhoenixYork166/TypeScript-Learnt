"use strict";
// Intersection Type => Combining Types
;
const employee2 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date(),
};
function addAgain(a, b) {
    // type guard
    if (typeof a === 'string' || typeof b === 'string') {
        return +a + +b;
    }
    return a + b;
}
function printEmployeeInformation(emp) {
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
printEmployeeInformation({ name: 'employee2', startDate: new Date() });
console.log(`\n`);
