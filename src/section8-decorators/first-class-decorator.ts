// Decorator starts with a Captial
function Logger(constructor: Function):void {
    console.log(`Logging...`);
    console.log(constructor);
}

// Using a Decorator
@Logger
class Person1 {
    name = 'Max';

    constructor() {
        console.log(`Creating person object...`);
    }
}

const person3 = new Person1();

console.log(`person3:`);
console.log(person3);