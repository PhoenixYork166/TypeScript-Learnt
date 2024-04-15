function Logger3(logString: string) {
    console.log('LOGGER FACTORY'); // 1.
    return function(constructor: Function) { // 4. Creating person object...
        console.log(`Logging...`); // 5. Logging...
        console.log(logString); // 6. Logging a new person ;)
        console.log(constructor); // 7. Creating person object
    }
}

function WithTemplate2(template: string, hookId: string) {
    // _ = I'm aware of constructor, but I won't use it
    console.log('TEMPLATE FACTORY'); // 2.

    // In our Decorator function => return a new class
    // using Generic functions <T extends {} >(originalConstructor: T) 
    // <T extends {new(...args)} > => {} a Special Type
    // new() = a new function to accept properties arguments
    // to generate a new object
    // ...args = Rest parameters to accept as many parameters as possible

    // a new Object is returned when parameters are 
    // parsed into Class upon instantiation
    return function<T extends {new(...args: any[]): {name: string}} >(
        originalConstructor: T
        ) {
         return class extends originalConstructor {
            constructor(..._: any[]) {
                super(); // calling originalConstructor
                console.log(`Rendering template`); // 3. Rendering template
                const hookEl = document.getElementById(hookId);
                //const p = new originalConstructor();
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name;
                }
            }
        }
    };
}

@Logger3('Logging a new person ;)') // 2.
@WithTemplate2('<h1>My Person Object</h1>', 'app') // 1.
class Person4 {
    name = 'Max';

    constructor() {
        console.log(`Creating person object...`);
    }
}

// const person6 = new Person4();

// console.log(`person6:`);
// console.log(person6);