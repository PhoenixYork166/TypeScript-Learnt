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
type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
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

moveAnimal({type: 'bird', flyingSpeed: 100});

// type casting
const paragraph = document.getElementById('message-output')! as HTMLParagraphElement;
const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;

userInputElement.value = 'Hi there';

const userInputElement2 = document.getElementById('user-input');

if (userInputElement2) {
    (userInputElement2 as HTMLInputElement).value = 'Hi there';
}
