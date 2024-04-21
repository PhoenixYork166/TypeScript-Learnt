"use strict";
// 26. Function Return Types & :void 
// 27. Functions as Types
// Type inference 
// Let TypeScript infer the type
// The result returned must match the Type of Descriptor
// const add = (n1: number, n2: number): number => {...}
// const add = (...):number = type of returned value
const add2 = (n1, n2) => {
    return n1 + n2;
};
// If we manually concatenate n1.toString() && n2.toString()
// const add = (n1: number, n2: number): string => {
//     return n1.toString() + n2.toString();
// }
// This Arrow func does NOT have a 'return' statement
// const printResult = (...):void => 
// it does NOT return anything
const printResult2 = (num) => {
    // Concatenating num to number(num)
    console.log(`Result: ${+num}`);
    console.log(`typeof +num: ${typeof +num}`);
};
printResult2(add2(5, 12));
// undefined = valid type
let someValue;
// However, a function is NOT allowed to be type 'undefined'
// This is Incorrect
const printUndefined2 = (num2) => {
    console.log(`Result: ${+num2}`);
    console.log(`typeof +num2: ${typeof +num2}`);
    // Use a return to make it work...
    return;
};
printUndefined2(add2(5, 12));
// Making sure that 'combineValues' will hold a func
// let combineValues: Function;
// Specifying the return type of a func
// Forcing combineValues func = a func that returns a number
let combineValues2;
// TS does NOT complain add() as a func to take 2 arguments
// && returning a number result
combineValues2 = add2; // passing in a func
// combineValues = 5; // this gives an error
// printResult() is a func returns nothing (): void
// TS complains printResult() does NOT satisfy 
// returning a number result 
// Mismatch here
// combineValues = printResult; 
console.log(`\n`);
console.log(`We are here: `);
console.log(`combineValues: ${combineValues2(8, 8)}`); //16
