// Type inference 
// Let TypeScript infer the type
// The result returned must match the Type of Descriptor
var add = function (n1, n2) {
    return n1 + n2;
};
var printResult = function (num) {
    console.log("Result: ".concat(+num));
    console.log("typeof +num: ".concat(typeof +num));
};
printResult(add(5, 12));
