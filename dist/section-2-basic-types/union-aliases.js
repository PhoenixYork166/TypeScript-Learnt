"use strict";
const combine4 = (input1, input2, resultConversion) => {
    // Allows hoisting
    let result;
    if (typeof input1 === 'number' &&
        typeof input2 === 'number' ||
        resultConversion === 'as-number') {
        // +input1 => typeCoersion to number(input1)
        // +input2 => typeCoersion to number(input2)
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
