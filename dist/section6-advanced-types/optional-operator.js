"use strict";
var _a, _b;
function addAgain2(a, b) {
    // type guard
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    else if (typeof a === 'string' && typeof b === 'number') {
        return a + b.toString();
    }
    else if (typeof a === 'number' && typeof b === 'string') {
        return a.toString() + b;
    }
    return +a + +b;
}
const result5 = addAgain2('Max', ' Schwarz');
result5.split(' ');
// console.log(`result5: ${result5}`);
const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'Max\'s own company' }
};
if ((fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) && ((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title)) {
    console.log(`fetchedUserData?.job?.title: ${(_b = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _b === void 0 ? void 0 : _b.title}`);
}
else {
    console.log(`fetchedUserData.job.title undefined...`);
}
