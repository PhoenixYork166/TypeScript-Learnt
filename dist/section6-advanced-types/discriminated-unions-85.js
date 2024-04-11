"use strict";
// Discriminated Unions
// similar Objects extending interfaces 
// with similar properties / methods
// this will NOT work as interfaces are NOT compiled at runtime
// function moveAnimal(animal: Animal) {
//     let speed: number;
//      if (animal instanceof Bird) {
//         console.log(`Moving with speed: ${flyingSpeed}`);
//      } else if (animal instanceof Horse) {
//         console.log(`Moving with speed: ${runningSpeed}`);
//      }
// }
function moveAnimal1(animal) {
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
moveAnimal1({ type: 'bird', flyingSpeed: 100 });
