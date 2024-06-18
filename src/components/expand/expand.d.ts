import { LitElement } from 'lit';
export default class Expand extends LitElement {
    options: string;
    optionsTitle?: string;
    optionsSubtitle?: string;
    optionsFooter: string;
    position: string;
    private isOpen;
    static styles: import("lit").CSSResult;
    private handleClick;
    render(): import("lit-html").TemplateResult<1>;
}
