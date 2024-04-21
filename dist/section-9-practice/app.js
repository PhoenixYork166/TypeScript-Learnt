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
class State {
    constructor() {
        this.listeners = []; // array of Functions
    }
    // used whenever project changes e.g. adding a new project
    addListener(listenerFn) {
        this.listeners.push(listenerFn);
    }
}
// Project State Management similar to Redux for React || NgRx for Angular
class ProjectState extends State {
    constructor() {
        super();
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
    addProject(title, description, numOfPeople) {
        const newProject = new Project(Math.random().toString(), title, description, numOfPeople, ProjectStatus.Active);
        // const newProject = {
        //     id: Math.random().toString(),
        //     title: title,
        //     description: description,
        //     people: numOfPeople
        // };
        this.projects.push(newProject);
        this.updateListeners();
    }
    // projectId = map this.projects: Project[] Array => flip status
    moveProject(projectId, newStatus) {
        const project = this.projects.find(prj => prj.id === projectId);
        // check if project exists
        if (project && project.status !== newStatus) {
            // changing extracted project.status => newStatus
            project.status = newStatus;
            this.updateListeners();
        }
    }
    updateListeners() {
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
// abstract class Component<T extends whereToRender, U extends elementToRender>
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
// ProjectItem Class
// class ProjectItem extends Component<T extends whereToRender, U extends elementToRender>
class ProjectItem extends Component {
    get persons() {
        if (this.project.people === 1) {
            return '1 person';
        }
        else {
            return `${this.project.people} persons`;
        }
    }
    constructor(hostId, project) {
        super('single-project', hostId, false, project.id);
        this.project = project;
        this.configure();
        this.renderContent();
    }
    dragStartHandler(event) {
        console.log(`Drag starts`);
        console.log(event);
        // to actually do dragging
        //event.dataTransfer!.setData(dataIdentifier, dataId);
        event.dataTransfer.setData('text/plain', this.project.id);
        event.dataTransfer.effectAllowed = 'move';
    }
    dragEndHandler(_) {
        console.log(`Drag ended`);
    }
    // each ProjectItem does NOT need to do 'submit' action
    configure() {
        this.element.addEventListener('dragstart', this.dragStartHandler);
        this.element.addEventListener('dragend', this.dragEndHandler);
    }
    renderContent() {
        /*
        <template id="single-project">
            <li>
                <h2><!-- Title of Project --></h2>
                <h3><!-- Number of People --></h3>
                <p><!-- Description --></p>
            </li>
        </template>
        */
        this.element.querySelector('h2').textContent = this.project.title;
        this.element.querySelector('h3').textContent = this.persons + ' assigned to this project'; // typeof this.project.people = 'number'
        this.element.querySelector('p').textContent = this.project.description;
    }
}
__decorate([
    Autobinding
], ProjectItem.prototype, "dragStartHandler", null);
__decorate([
    Autobinding
], ProjectItem.prototype, "dragEndHandler", null);
// ProjectList Class
// class ProjectList extends Component<T extends whereToRender, U extends elementToRender>
class ProjectList extends Component {
    constructor(type) {
        //super(templateId: string, hostElementId: string, insertAtStart: boolean, newElementId?: string)
        // false = ProjectList are NOT rendered at start of list
        super('project-list', 'app', false, `${type}-projects`);
        this.type = type;
        this.assignedProjects = [];
        this.configure();
        // this will happen in the base class
        // this.attach();
        this.renderContent();
    }
    dragOverHandler(event) {
        if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
            // to disable JavaScript/TypeScript default Drop event being prohibited
            event.preventDefault();
            const listEl = this.element.querySelector('ul');
            // add pink background: #ffe3ee when drag starts
            listEl.classList.add('droppable');
            console.log(`Drag Over has been detected!`);
        }
    }
    dropHandler(event) {
        console.log(`Drop detected!`);
        console.log(event);
        console.log(`\n`);
        console.log(`Attempting to retrieve:\nevent.dataTransfer!.getData('text/plain')`);
        console.log(event.dataTransfer.getData('text/plain'));
        // extracting projectId
        const projectId = event.dataTransfer.getData('text/plain');
        projectState.moveProject(projectId, this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished);
    }
    dragLeaveHandler(_) {
        const listEl = this.element.querySelector('ul');
        // remove pink background: #ffe3ee when drop completes
        listEl.classList.remove('droppable');
        console.log(`Drop area detected!`);
    }
    configure() {
        this.element.addEventListener('dragover', this.dragOverHandler);
        this.element.addEventListener('drop', this.dropHandler);
        this.element.addEventListener('dragleave', this.dragLeaveHandler);
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
    }
    renderContent() {
        // fill blank spaces in template with some lives
        const listId = `${this.type}-projects-list`;
        this.element.querySelector('ul').id = listId;
        // selecting <h2></h2>
        this.element.querySelector('h2').textContent = this.type.toUpperCase() + ' PROJECTS';
    }
    renderProjects() {
        const listEl = document.getElementById(`${this.type}-projects-list`);
        // get rid of all listed items => re-render again
        // whenever we add render a new project
        // we clear all existing projects
        listEl.innerHTML = '';
        for (const projectItem of this.assignedProjects) {
            /*
            const listItem = document.createElement('li');
            listItem.textContent = projectItem.title;
            // To avoid unnecessary re-rendering &
            // check for rendered active projects before rendering
            listEl.appendChild(listItem);
            */
            new ProjectItem(this.element.querySelector('ul').id, projectItem);
        }
    }
}
__decorate([
    Autobinding
], ProjectList.prototype, "dragOverHandler", null);
__decorate([
    Autobinding
], ProjectList.prototype, "dropHandler", null);
__decorate([
    Autobinding
], ProjectList.prototype, "dragLeaveHandler", null);
// Singleton design pattern
// class ProjectInput extends Component<T extends whereToRender, U extends elementToRender>
class ProjectInput extends Component {
    constructor() {
        //super(templateId: string, hostElementId: string, insertAtStart: boolean, newElementId?: string)
        // true = ProjectList are rendered at start of list
        super('project-input', 'app', true, 'user-input');
        this.titleInputElement = this.element.querySelector('#title'); // <input type="text" id="title" />
        this.descriptionInputElement = this.element.querySelector('#description');
        this.peopleInputElement = this.element.querySelector('#people');
        this.configure();
    }
    configure() {
        // this.element.addEventListener('submit', this.submitHandler.bind(this)); // binding to this of submitHandler()
        this.element.addEventListener('submit', this.submitHandler);
    }
    renderContent() { }
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
}
__decorate([
    Autobinding // Autobinding() decorator 
    // binding this of submitHandler() to this of configure()
], ProjectInput.prototype, "submitHandler", null);
const projectInput = new ProjectInput();
const activeProjectList = new ProjectList('active');
const finishedProjectList = new ProjectList('finished');
