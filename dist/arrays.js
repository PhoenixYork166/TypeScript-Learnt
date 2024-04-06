"use strict";
// 18. Arrays Types
// ============ Arrays =====================
// Type for array of strings
//let favActivities: string[];
// Will ERR if ! array
//favActivities = 'Sports';
//favActivities = ['Sports', 'Cooking'];
const person = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'],
};
// From JS
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // will NOT get .map() because hobby !array
    //console.log(hobby.map());
}
