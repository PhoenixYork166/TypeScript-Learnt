// Type Aliases
// type Combinable = number | string;
// type ConversionDes = 'as-number' | 'as-text';
// =========== Union ===================
var combine = function (input1, input2, 
//resultConversion: string,
resultConversion) {
    var result;
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
var combinedAges = combine(30, 26, 'as-number');
console.log("combinedAges: ".concat(combinedAges));
var combinedStringAges = combine(30, 26, 'as-text');
console.log("combinedStringAges: ".concat(combinedStringAges));
var combinedNames = combine('Max', 'Anna', 'as-text');
console.log("combinedNames: ".concat(combinedNames));
