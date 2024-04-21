// 22. Union Types
// =========== Union ===================
const combine5 = (
    input1: number | string, 
    input2: number | string
    ) => {
    let result: number | string;

    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine5(30, 26);
console.log(`combinedAges: ${combinedAges}`);

const combinedNames = combine5('Max', 'Anna');
console.log(`combinedNames: ${combinedNames}`);