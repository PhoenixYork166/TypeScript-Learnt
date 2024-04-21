"use strict";
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log(`Moving at speed: ${speed}`);
}
moveAnimal({ type: 'bird', flyingSpeed: 100 });
// type casting
const paragraph = document.getElementById('message-output');
const userInputElement = document.getElementById('user-input');
userInputElement.value = 'Hi there';
const userInputElement2 = document.getElementById('user-input');
if (userInputElement2) {
    userInputElement2.value = 'Hi there';
}
