"use strict";
function merge2(objA, objB) {
    if (typeof objA === 'object' && typeof objB === 'object') {
        return Object.assign(objA, objB);
    }
    else if (typeof objA !== 'object' && typeof objB === 'object') {
        console.log(`objA: ${objA} is NOT an object!`);
    }
    else if (typeof objA === 'object' && typeof objB !== 'object') {
        console.log(`objB: ${objB} is NOT an object!`);
    }
    else {
        console.log(`neith objA: ${objA} nor objB: ${objB} is an object`);
    }
}
// this is really cumbersome whenever we merge objects 
// then using Type Casting to declare the structure of merged objects
const mergedObj2 = merge2({ name: 'Max' }, { age: 100 });
console.log(`mergedObj2`);
console.log(mergedObj2);
// trying to access mergedObj2.name
mergedObj2.name;
mergedObj2.age;
// ** Generics can help us avoid using Type Casting
function merge3(objA, objB) {
    if (typeof objA === 'object' && typeof objB === 'object') {
        return Object.assign({}, objA, objB);
    }
    else if (typeof objA !== 'object' && typeof objB === 'object') {
        console.log(`objA: ${objA} is NOT an object!`);
    }
    else if (typeof objA === 'object' && typeof objB !== 'object') {
        console.log(`objB: ${objB} is NOT an object!`);
    }
    else {
        console.log(`neith objA: ${objA} nor objB: ${objB} is an object`);
    }
}
const mergedObj3 = merge3({ name: 'Max' }, { age: 100 });
mergedObj3 === null || mergedObj3 === void 0 ? void 0 : mergedObj3.name;
mergedObj3 === null || mergedObj3 === void 0 ? void 0 : mergedObj3.age;
