import { LitElement } from 'lit';
import { TypeMessage } from "../ constants/ constants";
export declare class Alert extends LitElement {
    status?: boolean;
    text: string;
    type: TypeMessage;
    static styles: import("lit").CSSResult;
    private handleClick;
    private close;
    render(): import("lit-html").TemplateResult<1>;
}
