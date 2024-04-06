"use strict";
// =========== Union ===================
const combine = (
// Union Type
input1, input2, 
//resultConversion: string,
// Literal Type
resultConversion) => {
    let result;
    if (typeof input1 === 'number' &&
        typeof input2 === 'number' ||
        resultConversion === 'as-number') {
        // Adding +var to ensure = number
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number') {
    //     return parseFloat(result);
    // } else {
    //     return result.toString();
    // }    
};
const combinedAges = combine(30, 26, 'as-number');
console.log(`combinedAges: ${combinedAges}`);
const combinedStringAges = combine(30, 26, 'as-text');
console.log(`combinedStringAges: ${combinedStringAges}`);
const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(`combinedNames: ${combinedNames}`);
