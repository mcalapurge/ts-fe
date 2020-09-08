import { Label, DomElement } from "./DomElements";

/**
 * Utilities and helpers for the DOM / Document
 */
export default class DomUtils {

    /**
     * Grabs a custom HTML element by tag name and index
     * @param tag Name of tag to be replaced from the raw html
     * @param index Number of the element to be grabbed from the collection
     */
    static GetTemplateElement(tag: string, index?: number): Element {
        const element = document.getElementsByTagName(tag)[index || 0]
        return element;
    }
    
    /**
     * Replaces a custom HTML element with a component / element
     * Adds text from a custom HTML attribute
     * @param tag Custom HTML element to be replaced
     * @param replacer Component / element to replace tag with
     */
    static TemplateReplacer(tag:string, replacer: DomElement): void {
        const initial = this.GetTemplateElement(tag);
        
        initial.parentElement?.appendChild(replacer);
        initial.parentElement?.removeChild(initial);
    }

    /**
     * Replaces a custom HTML element with a component / element
     * Adds text from a custom HTML attribute
     * @param tag Custom HTML element to be replaced
     * @param replacer Component / element to replace tag with
     * @param textAttr Custom HTML attribute to be read from
     */
    static TemplateTextReplacer(tag:string, replacer: Label, textAttr?:string): void {
        const initial = this.GetTemplateElement(tag);
        
        // Grab custom text attribute from passed
        // If not passed, default to 'text' attribute
        // if 'text' attribute missing, set text to ''
        replacer.setText(initial.getAttribute(textAttr || 'text') || '');

        initial.parentElement?.appendChild(replacer);
        initial.parentElement?.removeChild(initial);
    }

}