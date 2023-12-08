var button = document.querySelector("button");
// ! = This will always find an element & NOT yield NULL
var input1 = document.getElementById("num1");
// ! = This will always find an element & NOT yield NULL
var input2 = document.getElementById("num2");
var add = function (num1, num2) {
    return num1 + num2;
};
button.addEventListener("click", function () {
    // Adding +input1.value => Make sure it's a number !string
    console.log(add(+input1.value, +input2.value));
    //console.log(`typeof input1.value: ${typeof document.getElementById("num1").value}`);
});
// document.getElementById("num1").value = always a TEXT
