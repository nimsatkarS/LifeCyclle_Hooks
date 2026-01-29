import { LightningElement } from 'lwc';

export default class LifeCycleHooks extends LightningElement {

     // UI-friendly messages
    createStatus = '';
    connectStatus = '';
    renderStatus = '';
    showMessage = false;

    constructor() {
        super();
        // Runs when component is created
        this.createStatus = 'Component created (constructor)';
    }

    connectedCallback() {
        // Runs when component is added to page
        this.connectStatus = 'Component connected to the page (connectedCallback)';
    }

    renderedCallback() {
        // Runs after UI is rendered
        this.renderStatus = 'UI rendered successfully (renderedCallback)';
    }

    handleUpdate() {
        // Changing state triggers re-render
        this.showMessage = true;
    }

    disconnectedCallback() {
        // Runs when component is removed
        alert('Component removed from page (disconnectedCallback)');
    }
}