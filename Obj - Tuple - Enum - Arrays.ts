// 20.

// ========== Tuple [1, 'Hi'] ============
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     //role: (string|number)[];
//     role: [number, string];
// } = {
//     name: 'Max',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author'],
// };

// Pushing an extra string to Tuple 'role'
//person.role.push('admin'); //TypeScript cannot catch this error
// Switching an obj.key to another value
//person.role[1] = 10; // This checks for Type of role[1] => string

// This is allowed
//person.role = [100, 'admin'];
// ========== END OF Tuple [1, 'Hi'] ============

// ============= Enum ==============
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 200 };

const person = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
    console.log(`person is admin`);
}

// ============ END OF Enum ===============


// ============ Arrays =====================
// Type for array of strings
//let favActivities: string[];
// Will ERR if ! array
//favActivities = 'Sports';
//favActivities = ['Sports', 'Cooking'];

//console.log(person.name);

// From JS
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // will NOT get .map() because hobby !array
    //console.log(hobby.map());
}
// ============ END OF Arrays =====================