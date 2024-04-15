"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Property Decorator = Describe class.property using a Property Decorator inside a Class
function LLog(target, propertyName) {
    console.log('Property decorator');
    console.log(target, propertyName);
}
// Accessor Decorator = function Log2(target: any, nameOfAccessor: string, accessorDescriptor: PropertyDescriptor)
function LLog2(target, name, descriptior) {
    console.log('Accessor decorator');
    console.log(target); // object
    console.log(name);
    console.log(descriptior); // object
    //return {enumerable};
}
// Method Decorator
function LLog3(target, name, descriptior) {
    console.log('Method Decorator');
    console.log(target); // object
    console.log(name);
    console.log(descriptior); // object
}
// Parameter Decorator => target = target parameter, name = name of parameter, position = position of parameter
function LLog4(target, name, position) {
    console.log('Parameter Decorator');
    console.log(target); // object
    console.log(name);
    console.log(position); // object
}
class PProduct {
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error('Invalid price - Price should be > 0');
        }
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    LLog
], PProduct.prototype, "title", void 0);
__decorate([
    LLog2
], PProduct.prototype, "price", null);
__decorate([
    LLog3,
    __param(0, LLog4)
], PProduct.prototype, "getPriceWithTax", null);
const p3 = new PProduct('Book', 19);
const p4 = new PProduct('Book', 20);
// since const p = new Printer()
// target = Prototype of Object / Its constructor function
function Autobind(target, methodName, descriptor) {
    const originalMethod = descriptor.value; // Printer.showMessage()
    const adjDescriptor = {
        configurable: true,
        enumerable: false, // this does NOT show up in for in loops
        get() {
            const boundFn = originalMethod.bind(this); // this is encapsulated inside get() {...} Thus it will NOT be overridden by .addEventListener('click', p.showMessage);
            return boundFn;
        },
    };
    return adjDescriptor; // this will override the old descriptor
}
class Printer {
    constructor() {
        this.message = 'This works!';
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const click = document.querySelector('button');
buttonTest === null || buttonTest === void 0 ? void 0 : buttonTest.addEventListener('click', p.showMessage);
