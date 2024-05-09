import { LitElement } from 'lit';
import { StatusComponent } from '../ constants/ constants';
export declare class Checkbox extends LitElement {
    status?: StatusComponent;
    static styles: import("lit").CSSResult;
    handleClick(): void;
    render(): import("lit-html").TemplateResult<1>;
}
