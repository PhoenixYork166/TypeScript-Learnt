// Decorator starts with a Captial
// Decorator factories = a Decorator returning a function
function Logger2(logString: string) {
    console.log('LOGGER FACTORY'); // 1.
    return function(constructor: Function) { // 4. Creating person object...
        console.log(`Logging...`); // 5. Logging...
        console.log(logString); // 6. Logging a new person ;)
        console.log(constructor); // 7. Creating person object
    }
}

function WithTemplate(template: string, hookId: string) {
    // _ = I'm aware of constructor, but I won't use it
    console.log('TEMPLATE FACTORY'); // 2.
    return function(constructor: any) {
        console.log(`Rendering template`); // 3. Rendering template
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}

// Using a Decorator
// executor Decorator as a function
@Logger2('Logging a new person ;)') // 2.
@WithTemplate('<h1>My Person Object</h1>', 'app') // 1.
class Person3 {
    name = 'Max';

    constructor() {
        console.log(`Creating person object...`);
    }
}

const person5 = new Person3();

console.log(`person5:`);
console.log(person5);

