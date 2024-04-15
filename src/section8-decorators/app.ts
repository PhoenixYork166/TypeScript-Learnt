// Property Decorator = Describe class.property using a Property Decorator inside a Class
function LLog(target: any, propertyName: string | Symbol) {
    console.log('Property decorator');
    console.log(target, propertyName);
}

// Accessor Decorator = function Log2(target: any, nameOfAccessor: string, accessorDescriptor: PropertyDescriptor)
function LLog2(target: any, name: string, descriptior: PropertyDescriptor) {
    console.log('Accessor decorator');
    console.log(target); // object
    console.log(name);
    console.log(descriptior); // object
    //return {enumerable};
}

// Method Decorator
function LLog3(target: any, name: string | Symbol, descriptior: PropertyDescriptor) {
    console.log('Method Decorator');
    console.log(target); // object
    console.log(name);
    console.log(descriptior); // object
}

// Parameter Decorator => target = target parameter, name = name of parameter, position = position of parameter
function LLog4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter Decorator');
    console.log(target); // object
    console.log(name);
    console.log(position); // object
}

class PProduct {
    @LLog
    title: string;
    private _price: number;

    @LLog2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - Price should be > 0');
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @LLog3
    getPriceWithTax(@LLog4 tax: number) {
        return this._price * (1 + tax);
    }
}
const p3 = new PProduct('Book', 19);
const p4 = new PProduct('Book', 20);

// since const p = new Printer()
// target = Prototype of Object / Its constructor function
function Autobind(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value; // Printer.showMessage()
    const adjDescriptor: PropertyDescriptor = { // return at the end
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
    message = 'This works!';

    @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer();

const click = document.querySelector('button');
buttonTest?.addEventListener('click', p.showMessage);