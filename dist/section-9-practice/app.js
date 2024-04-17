"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Project Type
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
    ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
})(ProjectStatus || (ProjectStatus = {}));
class Project {
    constructor(id, title, description, people, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.people = people;
        this.status = status;
    }
}
// Project State Management similar to Redux for React || NgRx for Angular
class ProjectState {
    constructor() {
        this.listeners = []; // array of Functions
        this.projects = []; // array of stored projects
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
    addListener(listenerFn) {
        this.listeners.push(listenerFn);
    }
    addProject(title, description, numOfPeople) {
        const newProject = new Project(Math.random().toString(), title, description, numOfPeople, ProjectStatus.Active);
        // const newProject = {
        //     id: Math.random().toString(),
        //     title: title,
        //     description: description,
        //     people: numOfPeople
        // };
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
function validateInput(validatableInput) {
    let isValid = true;
    if (validatableInput.required) {
        isValid = isValid && validatableInput.value.toString().trim().length !== 0; // true && false => false
    }
    if (validatableInput.minLength != null &&
        typeof validatableInput.value === 'string') {
        isValid = isValid && validatableInput.value.length >= validatableInput.minLength;
    }
    if (validatableInput.maxLength != null &&
        typeof validatableInput.value === 'string') {
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
_, 
// methodName: string, 
_2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
// Component Base Class
// Similar to React, { Component } from 'react'
class Component {
    constructor(templateId, hostElementId, insertAtStart, newElementId) {
        this.templateElement = document.getElementById(templateId);
        this.hostElement = document.getElementById(hostElementId);
        const importedNode = document.importNode(this.templateElement.content, true);
        // HTML Form Element
        this.element = importedNode.firstElementChild;
        // <section class="projects">
        // need a dynamic value for a number of lists of projects
        // to inject relevant css based on type of listed projects
        if (newElementId) {
            this.element.id = newElementId;
        }
        this.attach(insertAtStart);
    }
    attach(insertAtBeginning) {
        // <ul></ul> is before end of </section>
        this.hostElement.insertAdjacentElement(insertAtBeginning ? 'afterbegin' : 'beforeend', this.element);
    }
    ;
}
// ProjectList Class
class ProjectList extends Component {
    constructor(type) {
        super();
        this.type = type;
        this.templateElement = document.getElementById('project-list');
        this.hostElement = document.getElementById('app');
        this.assignedProjects = [];
        // importNode() passes a pointer into HTMLElement
        // importNode(templateElement, deepCloneBoolean)
        const importedNode = document.importNode(this.templateElement.content, true);
        // HTML Form Element
        this.element = importedNode.firstElementChild; // <section class="projects">
        // need a dynamic value for a number of lists of projects
        // to inject relevant css based on type of listed projects
        this.element.id = `${this.type}-projects`;
        // to register a listener function
        projectState.addListener((projects) => {
            // true => keep item in newly created Project[]
            // then stored in relevantProjects 
            // false => drop the item from the new list
            const relevantProjects = projects.filter(prj => {
                if (this.type === 'active') {
                    return prj.status === ProjectStatus.Active;
                }
                return prj.status === ProjectStatus.Finished;
            });
            //this.assignedProjects = projects;
            this.assignedProjects = relevantProjects;
            this.renderProjects();
        });
        this.attach();
        this.renderContent();
    }
    renderProjects() {
        const listEl = document.getElementById(`${this.type}-projects-list`);
        // get rid of all listed items => re-render again
        // whenever we add render a new project
        // we clear all existing projects
        listEl.innerHTML = '';
        for (const projectItem of this.assignedProjects) {
            const listItem = document.createElement('li');
            listItem.textContent = projectItem.title;
            // To avoid unnecessary re-rendering & 
            // check for rendered active projects before rendering
            listEl.appendChild(listItem);
        }
    }
    renderContent() {
        // fill blank spaces in template with some lives
        const listId = `${this.type}-projects-list`;
        this.element.querySelector('ul').id = listId;
        // selecting <h2></h2>
        this.element.querySelector('h2').textContent = this.type.toUpperCase() + 'PROJECTS';
    }
    attach() {
        // <ul></ul> is before end of </section>
        this.hostElement.insertAdjacentElement('beforeend', this.element);
    }
}
// Singleton design pattern
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        // importNode() passes a pointer into HTMLElement
        // importNode(templateElement, deepCloneBoolean)
        const importedNode = document.importNode(this.templateElement.content, true);
        // HTML Form Element
        this.element = importedNode.firstElementChild;
        // to inject css #user-input
        this.element.id = 'user-input';
        this.titleInputElement = this.element.querySelector('#title'); // <input type="text" id="title" />
        this.descriptionInputElement = this.element.querySelector('#description');
        this.peopleInputElement = this.element.querySelector('#people');
        this.configure();
        this.attach();
    }
    // function type = tuple[string, string, number]
    gatherUserInput() {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;
        // passing each of enteredValue to create an Object
        // that extends interface Validatable
        const titleValidatable = {
            value: enteredTitle,
            required: true
        };
        const descriptionValidatable = {
            value: enteredDescription,
            required: true,
            minLength: 5
        };
        const peopleValidatable = {
            value: +enteredPeople,
            required: true,
            min: 1,
            max: 10
        };
        if (!validateInput(titleValidatable) ||
            !validateInput(descriptionValidatable) ||
            !validateInput(peopleValidatable)) {
            alert('Invalid input, please try again!');
            //throw new Error('Invalid input, please try again!');
            return; // return void
        }
        else {
            return [enteredTitle, enteredDescription, +enteredPeople];
        }
    }
    clearInputs() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    }
    submitHandler(event) {
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
    configure() {
        // this.element.addEventListener('submit', this.submitHandler.bind(this)); // binding to this of submitHandler()
        this.element.addEventListener('submit', this.submitHandler);
    }
    attach() {
        // JavaScript default method to insert HTML element
        // insertAdjacentElement(whereToInsert, )
        // whereToInsert = afterbegin / afterend / beforebegine / beforend
        // because this.templateElement = <HTMLTemplateElement>document.getElementById('project-input');
        // thereform 'afterbegin' = <form></form>
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
__decorate([
    Autobinding // Autobinding() decorator 
    // binding this of submitHandler() to this of configure()
], ProjectInput.prototype, "submitHandler", null);
const projectInput = new ProjectInput();
const activeProjectList = new ProjectList('active');
const finishedProjectList = new ProjectList('finished');
