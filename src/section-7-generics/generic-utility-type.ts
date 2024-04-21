interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

// Partial<genericType>
// 1. allows initially flexible param & paramType
// 2. extending custom interfaces
// 3. finally, custom interface {} object structure is achieved
// 4. returning filled object {} to global scope via type casting
// function funcName(param1: typeParam1, paramN: typeParamN): Interface {...}
function createCourseGoal(
    title: string, 
    description: string, 
    date: Date
    ): CourseGoal {
        let courseGoal:Partial<CourseGoal> = {};

        courseGoal.title = title;
        courseGoal.description = description;
        courseGoal.completeUntil = date;
        return courseGoal as CourseGoal;
    };

// if we want TypeScript to warn us
// when we're trying to push/pop sth from an array
// Readonly type + Generic Type of string[]
const names1: Readonly<string[]> = ['Max', 'Ana'];
// names1.push('Manu');
// names1.pop();