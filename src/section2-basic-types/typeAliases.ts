// Creating own custom type alias
type User = {
    name: string;
    age: number;
};

const greet = (user: User) => {
    console.log(`Hi, I am ${user.name}`);
};

const isOlder = (user: User, checkAge: number) => {
    return checkAge > user.age;
}

// Rather than
// const gree = (user: {
//     name: string;
//     age: number;
// }) => {
//     console.log(`Hi, I am ${user.name}`);
// }

// const isOlder = (user: { name: string; age: number; }, checkAge: number) => {
//     return checkAge > user.age;
// }