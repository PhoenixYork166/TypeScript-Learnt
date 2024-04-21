// Decorator starts with a Captial
// Decorator factories = a Decorator returning a function
function LoggerAgain(logString: string) {
    return function(constructor: Function) {
        console.log(`Logging...`);
        console.log(logString);
        console.log(constructor);
    }
}

// Using a Decorator
// executor Decorator as a function
@LoggerAgain('Logging a new person ;)')
class Person2 {
    name = 'Max';

    constructor() {
        console.log(`Creating person object...`);
    }
}

const person4 = new Person2();

console.log(`person4:`);
console.log(person4);