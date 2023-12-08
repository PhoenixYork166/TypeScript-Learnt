// ! = This will always find an HTMLButtonElement & NOT yield NULL
const button = document.querySelector("button")! as HTMLButtonElement;
// ! = This will always find an element & NOT yield NULL
const input1 = document.getElementById("num1")! as HTMLInputElement;
// ! = This will always find an element & NOT yield NULL
const input2 = document.getElementById("num2")! as HTMLInputElement;

const add = (num1: number, num2: number) => {
  return num1 + num2;  
}

button.addEventListener("click", function() {
  // Adding +input1.value => Make sure it's a number !string
  console.log(add(+input1.value, +input2.value));
  //console.log(`typeof input1.value: ${typeof document.getElementById("num1").value}`);
});
// document.getElementById("num1").value = always a TEXT