"use strict";
let logged;
const sendAnalytics = (data) => {
    console.log(`sending data:\n${data}`);
    logged = true;
    console.log(`logged: ${logged}`);
};
sendAnalytics('The Data');
