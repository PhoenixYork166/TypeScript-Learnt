type Combinable2 = string | number;
type Numberic2 = number | boolean;
// Only type number will be intersecting
// across Combinable & Numeric
type Universal2 = Combinable & Numberic;

// Function Overloads
// Combining 2 knowledge bases on addAgain1()
function addAgain2(a: number, b: number): number;
function addAgain2(a: string, b: string): string;
function addAgain2(a: string, b: number): string;
function addAgain2(a: number, b: string): string;
function addAgain2(a: Combinable1, b: Combinable1) {
    // type guard
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    } else if (typeof a === 'string' && typeof b === 'number') {
        return a + b.toString();
    } else if (typeof a === 'number' && typeof b === 'string') {
        return a.toString() + b;
    }
    return +a + +b;
}

const result5 = addAgain2('Max', ' Schwarz') as string;
result5.split(' ');
// console.log(`result5: ${result5}`);

const fetchedUserData: {
    id: string,
    name: string,
    job: {title: string, description: string}
} = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'Max\'s own company'}
};

if (fetchedUserData?.job && fetchedUserData?.job?.title) {
    console.log(`fetchedUserData?.job?.title: ${fetchedUserData?.job?.title}`);
} else {
    console.log(`fetchedUserData.job.title undefined...`);
}


