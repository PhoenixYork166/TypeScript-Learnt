// ** Generics can help us avoid using Type Casting
function merge4<T extends object, U extends object>(objA: T, objB: U) {
    if (typeof objA === 'object' && typeof objB === 'object') {
        return Object.assign({}, objA, objB);
    } else if (typeof objA !== 'object' && typeof objB === 'object') {
        console.error(`objA: ${objA} is NOT an object!`);
    } else if (typeof objA === 'object' && typeof objB !== 'object') {
        console.error(`objB: ${objB} is NOT an object!`);
    } else {
        console.error(`neith objA: ${objA} nor objB: ${objB} is an object`);
    }
}
//const mergedObj4 = merge4({name: 'Max'}, {age: 100});
// const mergedObj4 = merge4({name: 'Max', hobbies: ['Sports']}, 30);
// mergedObj4?.name;
// mergedObj4?.age;

const mergedObj5 = merge4({name: 'Max', hobbies: ['Sports']}, {age: 100});
mergedObj5?.name;
mergedObj5?.age;