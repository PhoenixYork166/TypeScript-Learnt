// Discriminated Unions

// 1 common property across interfaces
// to make up the UNION
interface Bird {
    type: 'bird',
    flyingSpeed: number,
}
interface Horse {
    type: 'horse',
    runningSpeed: number,
}

// Union type
type Animal1 = Bird | Horse;

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

function moveAnimal1(animal: Animal1) {
    let speed: number;

    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break
    }
    console.log(`Moving at speed: ${speed}`);
}
moveAnimal1({type: 'bird', flyingSpeed: 100});