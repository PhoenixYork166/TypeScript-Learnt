function merge2(objA: object, objB: object) {
    
    if (typeof objA === 'object' && typeof objB === 'object') {
        return Object.assign(objA, objB);
    } else if (typeof objA !== 'object' && typeof objB === 'object') {
        console.log(`objA: ${objA} is NOT an object!`);
    } else if (typeof objA === 'object' && typeof objB !== 'object') {
        console.log(`objB: ${objB} is NOT an object!`);
    } else {
        console.log(`neith objA: ${objA} nor objB: ${objB} is an object`);
    }
}

// this is really cumbersome whenever we merge objects 
// then using Type Casting to declare the structure of merged objects
const mergedObj2 = merge2({name: 'Max'}, {age: 100}) as {name: string, age: number};
console.log(`mergedObj2`);
console.log(mergedObj2);

// trying to access mergedObj2.name
mergedObj2.name
mergedObj2.age

// ** Generics can help us avoid using Type Casting
function merge3<T, U>(objA: T, objB: U) {
    if (typeof objA === 'object' && typeof objB === 'object') {
        return Object.assign({}, objA, objB);
    } else if (typeof objA !== 'object' && typeof objB === 'object') {
        console.log(`objA: ${objA} is NOT an object!`);
    } else if (typeof objA === 'object' && typeof objB !== 'object') {
        console.log(`objB: ${objB} is NOT an object!`);
    } else {
        console.log(`neith objA: ${objA} nor objB: ${objB} is an object`);
    }
}
const mergedObj3 = merge3({name: 'Max'}, {age: 100});
mergedObj3?.name;
mergedObj3?.age;