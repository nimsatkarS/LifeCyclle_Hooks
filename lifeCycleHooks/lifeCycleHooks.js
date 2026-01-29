import { LightningElement } from 'lwc';

export default class LifeCycleHooks extends LightningElement {

   // Messages shown on UI
    constructorMsg = '';
    connectedMsg = '';
    renderMsg = '';
    renderedMsg = '';
    showMessage = false;

    // 1️⃣ constructor
    constructor() {
        super();
        this.constructorMsg = 'Component is created in memory';
    }

    // 2️⃣ connectedCallback
    connectedCallback() {
        this.connectedMsg = 'Component is added to the page (DOM)';
    }

    // 3️⃣ render
    render() {
        this.renderMsg = 'Salesforce is deciding which HTML to show';
        return super.render();
    }

    // 4️⃣ renderedCallback
    renderedCallback() {
        this.renderedMsg = 'UI is now visible to the user';
    }

    // Button click → state change
    handleClick() {
        this.showMessage = true;
    }

    // 5️⃣ disconnectedCallback
    disconnectedCallback() {
        alert('Component removed → Cleanup done (disconnectedCallback)');
    }
}
