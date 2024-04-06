"use strict";
// =========== Union ===================
const combine3 = (
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
const combinedAges3 = combine3(30, 26, 'as-number');
console.log(`combinedAges3: ${combinedAges3}`);
const combinedStringAges3 = combine3(30, 26, 'as-text');
console.log(`combinedStringAges3: ${combinedStringAges3}`);
const combinedNames3 = combine3('Max', 'Anna', 'as-text');
console.log(`combinedNames3: ${combinedNames3}`);
