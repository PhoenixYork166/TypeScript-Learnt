"use strict";
const add = (n1, n2, showResult, phrase) => {
    // in the past...
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect input!');
    // }
    // Only numbers are involved
    let result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
};
// let number1: number;
//const number1 = 5;
let number1;
number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase;
resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
