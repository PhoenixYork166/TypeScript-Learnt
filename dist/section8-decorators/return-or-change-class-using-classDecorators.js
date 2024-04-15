"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger3(logString) {
    console.log('LOGGER FACTORY'); // 1.
    return function (constructor) {
        console.log(`Logging...`); // 5. Logging...
        console.log(logString); // 6. Logging a new person ;)
        console.log(constructor); // 7. Creating person object
    };
}
function WithTemplate2(template, hookId) {
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
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super(); // calling originalConstructor => saved original function
                console.log(`Rendering template`); // 3. Rendering template
                const hookEl = document.getElementById(hookId);
                //const p = new originalConstructor();
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1').textContent = this.name;
                }
            }
        };
    };
}
let Person4 = class Person4 {
    constructor() {
        this.name = 'Max';
        console.log(`Creating person object...`);
    }
};
Person4 = __decorate([
    Logger3('Logging a new person ;)') // 2.
    ,
    WithTemplate2('<h1>My Person Object</h1>', 'app') // 1.
], Person4);
// const person6 = new Person4();
// console.log(`person6:`);
// console.log(person6);
