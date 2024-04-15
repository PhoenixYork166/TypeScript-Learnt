"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorator starts with a Captial
// Decorator factories = a Decorator returning a function
function LoggerAgain(logString) {
    return function (constructor) {
        console.log(`Logging...`);
        console.log(logString);
        console.log(constructor);
    };
}
// Using a Decorator
// executor Decorator as a function
let Person2 = class Person2 {
    constructor() {
        this.name = 'Max';
        console.log(`Creating person object...`);
    }
};
Person2 = __decorate([
    LoggerAgain('Logging a new person ;)')
], Person2);
const person4 = new Person2();
console.log(`person4:`);
console.log(person4);
