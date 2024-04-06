// 19.
// ========== Tuple [1, 'Hi'] ============
const person: {
    name: string;
    age: number;
    hobbies: string[];
    //role: (string|number)[];
    role: [number, string];
} = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'],
};

//Pushing an extra string to Tuple 'role'
person.role.push('admin'); //TypeScript cannot catch this error
//Switching an obj.key to another value
person.role[1] = 10; // This checks for Type of role[1] => string

//This is allowed
person.role = [100, 'admin'];
