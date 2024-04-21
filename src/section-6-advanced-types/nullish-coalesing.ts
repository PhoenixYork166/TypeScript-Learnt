const fetchedUserData2: {
    id: string,
    name: string,
    job: {title: string, description: string}
} = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'Max\'s own company'}
};

// fetchedUserData2?.job?.title ? console.log(`fetchedUserData2?.job?.title: ${fetchedUserData2?.job?.title}`) : console.log(`fetchedUserData2.job.title undefined...`);

const userInput2 = 'Max';

// const storedData = (null or undefined) ?? showThisFallback;
const storedData = userInput2 ?? 'DEFAULT';
console.log(`storedData: ${storedData}`);