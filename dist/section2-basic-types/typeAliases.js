"use strict";
const greet = (user) => {
    console.log(`Hi, I am ${user.name}`);
};
const isOlder = (user, checkAge) => {
    return checkAge > user.age;
};
// Rather than
// const gree = (user: {
//     name: string;
//     age: number;
// }) => {
//     console.log(`Hi, I am ${user.name}`);
// }
// const isOlder = (user: { name: string; age: number; }, checkAge: number) => {
//     return checkAge > user.age;
// }
