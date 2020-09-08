import { DomElement, Label } from '../DomLib/DomElements';

export default class Test extends DomElement {

    constructor(){
        super();
        this.createChildren();
    }

    protected createChildren(): void {
        this.addStyle('Test');
        this.addStyleList([
            'pt-2',
            'text-center',
            'h1'
        ]);

        const title = new Label();
        title.setText("Hello World");
        title.addStyle('Test_title');
        this.appendChild(title);

        const imageContainer = new DomElement();
        imageContainer.addStyle('ImageContainer');
        const newImage = new Image();
        newImage.setAttribute('src', 'assets/img/giphy.gif');
        imageContainer.appendChild(newImage);
        this.appendChild(imageContainer);

    }

}

// Custom elements definitions
customElements.define('ts-test', Test, { extends: 'div' });