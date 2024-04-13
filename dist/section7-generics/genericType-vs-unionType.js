"use strict";
// we cannot use Generic Type here...
class DataStorage2 {
    constructor() {
        // switching to Union Type[]
        // CombinedTypes[] = (string | number | boolean | object)[]
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        // javascript default behavior to remove last element
        // from an array
        // use this indexOf guard to break this rule
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); // -1
    }
    getItems() {
        return [...this.data];
    }
}
// when using Union Types => new DataStorage2();
// when using Generic Types => new DataStorage2<string>();
const textStorage2 = new DataStorage2();
textStorage2.addItem('Max');
textStorage2.addItem('Jonas');
console.log(`textStorage2`);
console.log(textStorage2.getItems());
console.log(`\n`);
textStorage2.removeItem('Max');
console.log(`textStorage2`);
console.log(textStorage2.getItems());
console.log(`\n`);
const numberStorage2 = new DataStorage2();
numberStorage2.addItem(10);
numberStorage2.addItem(100);
console.log(`numberStorage2`);
console.log(numberStorage2.getItems());
console.log(`\n`);
const objStorage2 = new DataStorage2();
const maxObj2 = { name: 'Max' };
const jonasObj = { name: 'Jonas' };
// using variable to assign an Object to a stable Memory Address
objStorage2.addItem(maxObj2);
// this adds an Object that assigns to a random Memory Address
objStorage2.addItem({ name: 'Manu' });
// removeItem(item: T) {
// below always removes last element in an Array
// due to JavaScript behaviour
// this.data.splice(this.data.indexOf(item), 1); // -1
// }
objStorage2.removeItem(maxObj2);
console.log(`objStorage2`);
console.log(objStorage2.getItems());
