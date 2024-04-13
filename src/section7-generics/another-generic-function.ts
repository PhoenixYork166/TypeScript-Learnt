// to confirm element will always have element.length
interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value';

    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    } else if (element.length > 1) {
        descriptionText = 'Got' + element.length + 'elements.';
    }
    return [element, descriptionText];
}

const greeting = countAndDescribe('Hi There!');
const greeting2 = countAndDescribe(['Sports', 'Cooking']);
//const greeting3 = countAndDescribe(100);

console.log(`greeting:`);
console.log(greeting);
console.log(`\n`);
console.log(`greeting2`);
console.log(greeting2);
console.log(`\n`);
console.log(`greeting3`);
//console.log(greeting3);
