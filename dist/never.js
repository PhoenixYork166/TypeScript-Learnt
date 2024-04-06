"use strict";
// unknown type
// NOT yet know what users input
// unknown = more strictive than any
let userInput1;
// sometimes if you known a var can be 
// e.g. string | number
// using union type might be better
// let userInput1: string | number;
let userName1;
userInput1 = 5;
userInput1 = 'Max';
// Needing extra type check
if (typeof userInput1 === 'string') {
    userName1 = userInput1;
    console.log(`userName: ${userName1}`);
}
// never function type = never return anything
// while (true) infinite loop also = never function type
const generateError = (message, code) => {
    // throw error => cancelled the script
    throw { message: message, errorCode: code };
};
const result = generateError('An Error occurred!', 500);
console.log(`result: ${result}`);
