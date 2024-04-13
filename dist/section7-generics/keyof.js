"use strict";
// function merge1<T, U>(objA: T, objB: U) 
// ** this says objA & objB will often be of different types **
// ** adding type constraints **
function merge1(objA, objB) {
    return Object.assign({}, objA, objB);
}
;
// if NO Type Casting => cannot access mergedObj.properties
// ** This allows objA to be of dynamic object structure **
// const mergedObj1 = merge1({ name: 'Max', hobbies: ['Sports] }, {age: 100});
const mergedObj1 = merge1({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj1);
console.log(`mergedObj.name`);
console.log(mergedObj1.name);
console.log(`mergedObj.age`);
console.log(mergedObj1.age);
// keyof constraint
// this ensures U is a key of T object
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
const extract1 = extractAndConvert({ name: 'Max' }, 'name');
console.log(`extract1`);
console.log(extract1);
