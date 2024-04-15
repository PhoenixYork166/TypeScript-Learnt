"use strict";
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        // importNode() passes a pointer into HTMLElement
        // importNode(templateElement, deepCloneBoolean)
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.attach();
    }
    attach() {
        // JavaScript default method to insert HTML element
        // insertAdjacentElement(whereToInsert, )
        // whereToInsert = afterbegin / afterend / beforebegine / beforend
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
const projectInput = new ProjectInput();
