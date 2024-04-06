"use strict";
// ============= Enum ==============
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1000] = "ADMIN";
    Role[Role["READ_ONLY"] = 0] = "READ_ONLY";
    Role[Role["AUTHOR"] = 200] = "AUTHOR";
    Role[Role["OWNER"] = 777] = "OWNER";
})(Role || (Role = {}));
;
const person1 = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 1000, 200, 777, 'unknown'],
};
// if (person.role.includes(Role.ADMIN)) {
//     console.log(`person is an admin`);
// } else {
//     console.log(`person is NOT an admin`);
// }
// Using Switch operator to reflect all roles 
// that the person has
for (let i = 0; i < person1.role.length; i++) {
    switch (person1.role[i]) {
        case Role.ADMIN:
            console.log('Person is an admin');
            break;
        case Role.OWNER:
            console.log('Person is the owner');
            break;
        case Role.AUTHOR:
            console.log('Person is an author');
            break;
        case Role.READ_ONLY:
            console.log('Person has read-only access');
            break;
        default:
            console.log(`Person has an unknown role: ${person1.role[i]}`);
            break;
    }
}
