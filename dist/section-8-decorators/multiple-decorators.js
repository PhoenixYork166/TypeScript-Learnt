"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorator starts with a Captial
// Decorator factories = a Decorator returning a function
function Logger2(logString) {
    console.log('LOGGER FACTORY'); // 1.
    return function (constructor) {
        console.log(`Logging...`); // 5. Logging...
        console.log(logString); // 6. Logging a new person ;)
        console.log(constructor); // 7. Creating person object
    };
}
function WithTemplate(template, hookId) {
    // _ = I'm aware of constructor, but I won't use it
    console.log('TEMPLATE FACTORY'); // 2.
    return function (constructor) {
        console.log(`Rendering template`); // 3. Rendering template
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = p.name;
        }
    };
}
// Using a Decorator
// executor Decorator as a function
let Person3 = class Person3 {
    constructor() {
        this.name = 'Max';
        console.log(`Creating person object...`);
    }
};
Person3 = __decorate([
    Logger2('Logging a new person ;)') // 2.
    ,
    WithTemplate('<h1>My Person Object</h1>', 'app') // 1.
], Person3);
const person5 = new Person3();
console.log(`person5:`);
console.log(person5);
