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
click.addEventListener('click', p.showMessage);
const registeredValidators = {};
function RequiredString(target, propName) {
    var _a, _b;
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: [...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []), 'required'] // Course.title: string required
     });
}
function PositiveNumber(target, propName) {
    var _a, _b;
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: [...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []), 'positive'] // Course.price: number positive
     });
}
function validate(obj) {
    // finding obj.constructor.name through the prototypal chain
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    // switch (validator) must NOT return !!obj[prop] true/false
    // OR return obj[prop] > 0 true/false
    // otherwise, the validator will NOT check against every class.property
    let isValid = true;
    for (const prop in objValidatorConfig) {
        console.log(`prop`);
        console.log(prop);
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    // true combined with false return false
                    // return !!obj[prop];
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    // return obj[prop] > 0
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    //return true;
    return isValid; // this ensure all class.property is checked
}
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    RequiredString
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector('form');
courseForm.addEventListener('submit', event => {
    event.preventDefault(); // stop refresh
    const titleEl = document.getElementById('title');
    const priceEl = document.getElementById('price');
    const title = titleEl.value;
    const price = +priceEl.value;
    //if (title.trim().length > 0 && price) {}
    // we add Validation in class Course
    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        alert('Invalid input, please try again...');
        return;
    }
    ;
    console.log(createdCourse);
});
