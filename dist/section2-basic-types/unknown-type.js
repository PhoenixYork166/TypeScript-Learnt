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
