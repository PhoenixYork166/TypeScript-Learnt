// Type inference 
// Let TypeScript infer the type
// The result returned must match the Type of Descriptor

// const add = (n1: number, n2: number): number => {...}
// const add = (...):number = type of returned value
const add = (n1: number, n2: number): number => {
    return n1 + n2;
}

// If we manually concatenate n1.toString() && n2.toString()
// const add = (n1: number, n2: number): string => {
//     return n1.toString() + n2.toString();
// }

const printResult = (num: number) => {
    console.log(`Result: ${+num}`);
    console.log(`typeof +num: ${typeof +num}`);
}

printResult(add(5, 12));