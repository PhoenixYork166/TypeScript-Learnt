// Property Decorator = Describe class.property using a Property Decorator inside a Class
function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator');
    console.log(target, propertyName);
}

// Accessor Decorator = function Log2(target: any, nameOfAccessor: string, accessorDescriptor: PropertyDescriptor)
function Log2(target: any, name: string, descriptior: PropertyDescriptor) {
    console.log('Accessor decorator');
    console.log(target); // object
    console.log(name);
    console.log(descriptior); // object
}

// Method Decorator
function Log3(target: any, name: string | Symbol, descriptior: PropertyDescriptor) {
    console.log('Method Decorator');
    console.log(target); // object
    console.log(name);
    console.log(descriptior); // object
}

// Parameter Decorator => target = target parameter, name = name of parameter, position = position of parameter
function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter Decorator');
    console.log(target); // object
    console.log(name);
    console.log(position); // object
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
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

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}
const p1 = new Product('Book', 19);
const p2 = new Product('Book', 20);