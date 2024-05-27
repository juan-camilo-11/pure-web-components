import { LitElement } from 'lit';
export default class Alert extends LitElement {
    status?: boolean;
    text: string;
    type: string;
    static styles: import("lit").CSSResult;
    private onPureClose;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
export declare const AlertComponent: import("@lit-labs/react").ReactWebComponent<Alert, {
    onPureClose: string;
}>;
