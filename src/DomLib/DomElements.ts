/**
 * Basic Dom Element with data atrtibute / prototype 
 */
export class DomElement extends HTMLDivElement {
    
    constructor(){
        super();
    }
    
    /** Data object for element */
    public data: object = {};

    /**
     * Toggle hide of component
     */
    public hideElement(){
        if (this.hidden) {
            this.hidden = false;
        } else {
            this.hidden = true;
        }
    }
    
    /**
     * Helper to add style to component
     * @param style Style to be added
     */
    public addStyle(style: string): void {
        this.classList.add(style);
    }

    /**
     * Adds a list of styles to a component
     * @param styles Styles to be Added
     */
    public addStyleList(styles: string[]): void{
        styles.forEach((style) => {
            this.classList.add(style);
        });
    }

    /**
     * Helper to remove styles from component
     * @param style Style to be removed
     */
    public removeStyle(style: string): void {
        this.classList.remove(style);
    }

    /**
     * Removes a list of styles to a component
     * @param styles Styles to be removed
     */
    public removeStyleList(styles: string[]): void{
        styles.forEach((style) => {
            this.classList.remove(style);
        });
    }
    
}

/**
 * Basic Label component with text setting helper method
 */
export class Label extends DomElement {
    
    constructor(){
        super();
    }
    
    /**
     * Sets the text of a component
     * @param text Text to be set in component
     */
    public setText(text: string): void{
        this.textContent = text;
    }

}

// Custom elements definitions
customElements.define('ts-container', DomElement, { extends: 'div' });
customElements.define('ts-label', Label, { extends: 'div' });