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
