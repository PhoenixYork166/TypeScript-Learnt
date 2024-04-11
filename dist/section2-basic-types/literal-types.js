"use strict";
// 23.
// =========== Union ===================
const combine2 = (
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
const combinedAges2 = combine2(30, 26, 'as-number');
console.log(`combinedAges2: ${combinedAges2}`);
const combinedStringAges2 = combine2(30, 26, 'as-text');
console.log(`combinedStringAges2: ${combinedStringAges2}`);
const combinedNames2 = combine2('Max', 'Anna', 'as-text');
console.log(`combinedNames2: ${combinedNames2}`);
