// 22.
// Custom type to accept number OR string
type Combinable4 = number | string;
type ConversionDescriptor4 = 'as-number' | 'as-text';

const combine4 = (
    input1: Combinable4,
    input2: Combinable4,
    resultConversion: ConversionDescriptor4
) => {
    // Allows hoisting
    let result;

    if (
        typeof input1 === 'number' && 
        typeof input2 === 'number' || 
        resultConversion === 'as-number'
        ) {
        
        // +input1 => typeCoersion to number(input1)
        // +input2 => typeCoersion to number(input2)
        result = +input1 + +input2;
        
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
}