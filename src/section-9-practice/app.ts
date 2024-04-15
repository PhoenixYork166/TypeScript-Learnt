class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;

    constructor() {
        this.templateElement = <HTMLTemplateElement>document.getElementById('project-input');
        this.hostElement = <HTMLDivElement>document.getElementById('app');

        // importNode() passes a pointer into HTMLElement
        // importNode(templateElement, deepCloneBoolean)
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.attach();
    }

    private attach() {
        // JavaScript default method to insert HTML element
        // insertAdjacentElement(whereToInsert, )
        // whereToInsert = afterbegin / afterend / beforebegine / beforend
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}

const projectInput = new ProjectInput();