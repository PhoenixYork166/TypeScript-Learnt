// Approach 1
type CombinedTypes2 = (number | string);

const getFirstElement = (array: CombinedTypes2[]) => {
    return array[0];
}

const numbers = [1, 2, 3];
const firstNum = getFirstElement(numbers);

const strings = ['123', '456', '789'];
const firstString = getFirstElement(strings);

// Approach 2
function getFirstElement2<ElementType>(array: ElementType[]) {
    return array[0];
}

const numbers2 = [1, 2, 3];
const firstNum2 = getFirstElement2(numbers);

const strings2 = ['123', '456', '789'];
const firstString2 = getFirstElement2(strings);

// More Complicated yet Flexible Generic Functions
function getObjectKey<ObjectType extends object, ObjectKey extends keyof ObjectType>(
    obj: ObjectType, 
    key: ObjectKey) {
    return obj[key];
}

const maxObject = {name: 'Max', age: 100, hobby: ['coding', 'sleeping']};
const maxObjectName = getObjectKey(maxObject, 'name');
const maxObjectAge = getObjectKey(maxObject, 'age');
const maxObjectHobby = getObjectKey(maxObject, 'hobby');
console.log(`maxObject`);
console.log(maxObject);
console.log(`maxOjbectName`);
console.log(maxObjectName);
console.log(`maxObjectAge`);
console.log(maxObjectAge);
console.log(`maxObjectHobby`);
console.log(maxObjectHobby);