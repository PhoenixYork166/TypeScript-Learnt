// console.log(`Sending data...`);
type dataType = string | object;
type logged = boolean;
let logged: boolean;

const sendAnalytics = (data: dataType) => {
    console.log(`sending data:\n${data}`);
    logged = true;
    console.log(`logged: ${logged}`);
}

sendAnalytics('The Data');