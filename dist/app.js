"use strict";
function addAgain1(a, b) {
    // type guard
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    else if (typeof a === 'string' && typeof b === 'number') {
        return a + b.toString();
    }
    else if (typeof a === 'number' && typeof b === 'string') {
        return a.toString() + b;
    }
    return +a + +b;
}
const result1 = addAgain1(1, 5);
result1.toString();
console.log(`result1: ${result1}`);
const result2 = addAgain1('Max', ' Schwarz');
result2.split(' ');
console.log(`result2: ${result2}`);
const result3 = addAgain1('Max ', 10);
console.log(`result3: ${result3}`);
const result4 = addAgain1(10, ' Max');
console.log(`result4: ${result4}`);
