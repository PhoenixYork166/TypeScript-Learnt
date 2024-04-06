"use strict";
// unknown type
// NOT yet know what users input
// unknown = more strictive than any
let userInput;
// sometimes if you known a var can be 
// e.g. string | number
// using union type might be better
// let userInput: string | number;
let userName;
userInput = 5;
userInput = 'Max';
// Needing extra type check
if (typeof userInput === 'string') {
    userName = userInput;
    console.log(`userName: ${userName}`);
}
// never function type = never return anything
// while (true) infinite loop also = never function type
const generateError = (message, code) => {
    // throw error => cancelled the script
    throw { message: message, errorCode: code };
};
const result = generateError('An Error occurred!', 500);
console.log(`result: ${result}`);
