// Generic Class
class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); // -1
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
console.log(`textStorage`);
console.log(textStorage.getItems());
console.log(`\n`);
textStorage.removeItem('Max');
console.log(`textStorage`);
console.log(textStorage.getItems());
console.log(`\n`);

const numberStorage = new DataStorage<number>();

const objStorage = new DataStorage<object>();
const maxObj = {name: 'Max'};
// using variable to assign an Object to a stable Memory Address
objStorage.addItem(maxObj);
// this adds an Object that assigns to a random Memory Address
objStorage.addItem({name: 'Manu'});
// removeItem(item: T) {
    // below always removes last element in an Array
    // due to JavaScript behaviour
    // this.data.splice(this.data.indexOf(item), 1); // -1
// }
objStorage.removeItem(maxObj);
console.log(`objStorage`);
console.log(objStorage.getItems());
