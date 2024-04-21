// ! dev knows this DOM element exists
//const buttonTest = document.querySelector('button')!;
const buttonTest = document.querySelector('button');

const clickHandler = (message: string): void => {
    //let userName = 'Max';
    console.log(`Button has been clicked:\n${message}`);
}

// wrapping with a if check for DOM element
if (buttonTest) {
    buttonTest.addEventListener('click', clickHandler.bind(null, 'This is a message'));
}
