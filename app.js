// =========== Literals ===================
var combine = function (input1, input2) {
    //let result: number | string;
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
var combinedAges = combine(30, 26);
console.log("combinedAges: ".concat(combinedAges));
var combinedNames = combine('Max', 'Anna');
console.log("combinedNames: ".concat(combinedNames));
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
