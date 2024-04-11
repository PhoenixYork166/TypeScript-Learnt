// type casting
const paragraph2 = document.getElementById('message-output')! as HTMLParagraphElement;
const userInputElement3 = <HTMLInputElement>document.getElementById('user-input')!;

userInputElement.value = 'Hi there';

const userInputElement4 = document.getElementById('user-input');

if (userInputElement2) {
    (userInputElement2 as HTMLInputElement).value = 'Hi there';
}

// recap
// class newClass extends abstractClass implements interface { }
// index type
interface ErrorContainer { // { email: 'Invalid email', username: 'Must start with a character' }

    // index type => Good for working with unknown APIs
    // do NOT know prop name, prop count ahead of time
    // dictionary like structure
    // [key: KeyType]: ValueType;
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    // [prop: number]: string;
    // 1: can be keyType too, not restricted to string only
    // 1: 'Invalid email',
    username: 'Must start with a capital character!',
    email: 'Invalid email!'
};