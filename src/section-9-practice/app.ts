// Project State Management similar to Redux for React || NgRx for Angular
class ProjectState {
    private listeners: any[] = []; // array of Functions
    private projects: any[] = []; // array of stored projects
    private static instance: ProjectState;

    private constructor() {

    }

    // Limiting global scope to only has 1 instance of ProjectState
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }

    // used whenever project changes e.g. adding a new project
    addListener(listenerFn: Function) {
        this.listeners.push(listenerFn);
    }

    addProject(title: string, description: string, numOfPeople: number) {
        const newProject = {
            id: Math.random().toString(),
            title: title,
            description: description,
            people: numOfPeople
        };
        this.projects.push(newProject);
        for (const listenerFn of this.listeners) {
            // only parse in a copy of this.projects
            // every listenerFn getting executed & 
            // gets our brand new copy of projects
            listenerFn(this.projects.slice()); 
        }
    }
}

// global only has 1 instance of ProjectState
const projectState = ProjectState.getInstance(); // static getInstance()

// validation logic
interface Validatable {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
}

function validateInput(validatableInput: Validatable) {
    let isValid = true;
    if (validatableInput.required) {
        isValid = isValid && validatableInput.value.toString().trim().length !== 0; // true && false => false
    }
    if (validatableInput.minLength != null && 
        typeof validatableInput.value === 'string'
        ) {
        isValid = isValid && validatableInput.value.length >= validatableInput.minLength;
    }
    if (validatableInput.maxLength != null && 
        typeof validatableInput.value === 'string'
        ) {
        isValid = isValid && validatableInput.value.length <= validatableInput.maxLength;
    }
    if (validatableInput.min != null && typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value >= validatableInput.min;
    }
    if (validatableInput.max != null && typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value <= validatableInput.max;
    }
    return isValid;
}

// autobind Decorator
function Autobinding(
    // target: any, // tsconfig.json => "noUnusedParameters": false
    _: any,
    // methodName: string, 
    _2: string,
    descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;
        const adjDescriptor: PropertyDescriptor = {
            configurable: true,
            get() {
                const boundFn = originalMethod.bind(this);
                return boundFn;
            }
        };
        return adjDescriptor;
}

// ProjectList Class
class ProjectList {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLElement;
    assignedProjects: any[];
    
    constructor(private type: 'active' | 'finished') {
        this.templateElement = <HTMLTemplateElement>document.getElementById('project-list');
        this.hostElement = <HTMLDivElement>document.getElementById('app');
        this.assignedProjects = [];

        // importNode() passes a pointer into HTMLElement
        // importNode(templateElement, deepCloneBoolean)
        const importedNode = document.importNode(
            this.templateElement.content, 
            true
            );

        // HTML Form Element
        this.element = importedNode.firstElementChild as HTMLElement; // <section class="projects">

        // need a dynamic value for a number of lists of projects
        // to inject relevant css based on type of listed projects
        this.element.id = `${this.type}-projects`;
        
        // to register a listener function
        projectState.addListener((projects: any[]) => {
            this.assignedProjects = projects;
            this.renderProjects();
        });
        this.attach();
        this.renderContent();
    }

    private renderProjects() {
        const listEl = <HTMLUListElement>document.getElementById(`${this.type}-projects-list`);
        for (const projectItem of this.assignedProjects) {
            const listItem = document.createElement('li');
            listItem.textContent = projectItem.title;
            listEl.appendChild(listItem);
        }
    }

    private renderContent() {
        // fill blank spaces in template with some lives
        const listId = `${this.type}-projects-list`;
        this.element.querySelector('ul')!.id = listId;
        // selecting <h2></h2>
        this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + 'PROJECTS';
    }

    private attach() {
        // <ul></ul> is before end of </section>
        this.hostElement.insertAdjacentElement('beforeend', this.element);
    }
}

// Singleton design pattern
class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        this.templateElement = <HTMLTemplateElement>document.getElementById('project-input');
        this.hostElement = <HTMLDivElement>document.getElementById('app');

        // importNode() passes a pointer into HTMLElement
        // importNode(templateElement, deepCloneBoolean)
        const importedNode = document.importNode(
            this.templateElement.content, 
            true
        );

        // HTML Form Element
        this.element = importedNode.firstElementChild as HTMLFormElement;
        // to inject css #user-input
        this.element.id = 'user-input';

        this.titleInputElement = <HTMLInputElement>this.element.querySelector('#title'); // <input type="text" id="title" />
        this.descriptionInputElement = <HTMLInputElement>this.element.querySelector('#description'); 
        this.peopleInputElement = <HTMLInputElement>this.element.querySelector('#people'); 

        this.configure();
        this.attach();
    }

    // function type = tuple[string, string, number]
    private gatherUserInput(): [string, string, number] | void {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;

        // passing each of enteredValue to create an Object
        // that extends interface Validatable
        const titleValidatable: Validatable = {
            value: enteredTitle,
            required: true
        };
        const descriptionValidatable: Validatable = {
            value: enteredDescription,
            required: true,
            minLength: 5
        };
        const peopleValidatable: Validatable = {
            value: +enteredPeople,
            required: true,
            min: 1,
            max: 10
        };

        if (
            !validateInput(titleValidatable) ||
            !validateInput(descriptionValidatable) ||
            !validateInput(peopleValidatable)
            ) {
                alert('Invalid input, please try again!');
                //throw new Error('Invalid input, please try again!');
                return; // return void
        } else {
            return [enteredTitle, enteredDescription, +enteredPeople];
        }
    }

    private clearInputs() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    }

    @Autobinding // Autobinding() decorator 
    // binding this of submitHandler() to this of configure()
    private submitHandler(event: Event) {
        event.preventDefault(); // prevent default page refresh
        const userInput = this.gatherUserInput();
        //if (userInput instanceof Tuple) // we cannot check Tuple at runtime level
        // *** Tuple [string, string, number] = array
        if (Array.isArray(userInput)) {
            // destructuring here
            const [title, description, people] = userInput; 
            console.log(`title:\n${title}\ndescription:\n${description}\npeople:${people}`);

            projectState.addProject(title, description, people);
            // clear userInputs after logging
            this.clearInputs();
        }
    }

    private configure() {
        // this.element.addEventListener('submit', this.submitHandler.bind(this)); // binding to this of submitHandler()
        this.element.addEventListener('submit', this.submitHandler);
    }

    private attach() {
        // JavaScript default method to insert HTML element
        // insertAdjacentElement(whereToInsert, )
        // whereToInsert = afterbegin / afterend / beforebegine / beforend

        // because this.templateElement = <HTMLTemplateElement>document.getElementById('project-input');
        // thereform 'afterbegin' = <form></form>
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}

const projectInput = new ProjectInput();
const activeProjectList = new ProjectList('active');
const finishedProjectList = new ProjectList('finished');