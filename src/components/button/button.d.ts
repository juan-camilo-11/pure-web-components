import { LitElement } from 'lit';
import { SizeComponent, ClassComponent } from "../ constants/ constants";
export declare class Button extends LitElement {
    text: string;
    btnClass?: ClassComponent;
    size?: SizeComponent;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    private handleClick;
}
