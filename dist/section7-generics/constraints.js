"use strict";
// ** Generics can help us avoid using Type Casting
function merge4(objA, objB) {
    if (typeof objA === 'object' && typeof objB === 'object') {
        return Object.assign({}, objA, objB);
    }
    else if (typeof objA !== 'object' && typeof objB === 'object') {
        console.error(`objA: ${objA} is NOT an object!`);
    }
    else if (typeof objA === 'object' && typeof objB !== 'object') {
        console.error(`objB: ${objB} is NOT an object!`);
    }
    else {
        console.error(`neith objA: ${objA} nor objB: ${objB} is an object`);
    }
}
//const mergedObj4 = merge4({name: 'Max'}, {age: 100});
// const mergedObj4 = merge4({name: 'Max', hobbies: ['Sports']}, 30);
// mergedObj4?.name;
// mergedObj4?.age;
const mergedObj5 = merge4({ name: 'Max', hobbies: ['Sports'] }, { age: 100 });
mergedObj5 === null || mergedObj5 === void 0 ? void 0 : mergedObj5.name;
mergedObj5 === null || mergedObj5 === void 0 ? void 0 : mergedObj5.age;
