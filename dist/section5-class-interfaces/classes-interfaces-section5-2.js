"use strict";
let add;
add = (n1, n2) => {
    const total = +n1 + +n2;
    console.log(`total: ${total}`);
    return n1 + n2;
};
const sum = add(1, 2);
console.log(`sum: ${sum}`);
;
;
;
// Rule
// can only inherit from 1 class
// can only implement multiple interfaces
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        if (name) {
            this.name = name;
        }
    }
    greet(phrase) {
        if (this.name && phrase) {
            console.log(`${phrase} ${this.name}`);
        }
        else if (!this.name && !phrase) {
            console.log(`this.name && phrase undefined`);
        }
        if (!phrase) {
            console.log(`missing phrase...`);
        }
        if (!this.name) {
            console.log(`this.name undefined...`);
        }
        if (!this.age) {
            console.log(`this.age undefined...`);
        }
        else {
            console.log(`this.age: ${this.age}`);
        }
        if (!this.name && !this.age) {
            console.log(`this.name && this.age undefined`);
        }
    }
    checkAge() {
        console.log(`${this.name} is aged: ${this.age}`);
    }
}
// we can implement an interface in a class
// interfaces vs custom types
// type Greetable = {
//     name: string,
//     age: number,
//     greet(phrase: string): void;
// } | object;
const user1 = new Person('Max', 100);
user1.greet('Helloooo');
console.log(`user1 object:`);
console.log(user1);
const user2 = new Person('User2', 100);
console.log(`user2 object`);
console.log(user2);
user2.greet('Yo!');
user2.checkAge();
