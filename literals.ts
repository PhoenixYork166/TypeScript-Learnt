// 23.
// =========== Literals ===================
const combine = (
    input1: number | string, 
    input2: number | string, 
    //resultConversion: string
    // Limiting resultConversion types to a Union type
    resultConversion: 'as-number' | 'as-text'
    ) => {
    //let result: number | string;
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        // Adding + in front of input1 to force it become a number
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;

    // if (resultConversion === 'as-number') {
    //     return parseFloat(result);
    // } else {
    //     return result.toString();
    // }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(`combinedAges: ${combinedAges}`);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(`combinedStringAges: ${combinedStringAges}`);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(`combinedNames: ${combinedNames}`);












// const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
//     const result = n1 + n2;

//     if (showResult) {
//         console.log(phrase + result);

//     } else {
//         return result;
//     }
// }

// const number1 = 5;
// const number2 = 10;
// const result = true;
// const phraseShow = 'Result is: ';
// add(number1, number2, result, phraseShow);