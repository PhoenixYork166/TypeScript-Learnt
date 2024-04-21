"use strict";
const names = ['Max', 'Manuel'];
//names[0].split(' ');
// promise type
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This has been resolved!');
    }, 2000);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 2000);
});
promise1.then(data => {
    data.split(' ');
});
promise2.then(data => {
    data.toString();
});
