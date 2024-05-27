import { LitElement } from 'lit';
import { TypeMessage } from '../ constants/ constants';
export default class Modal extends LitElement {
    status: boolean;
    text: string;
    desc: string;
    showButton: boolean;
    btnText: string;
    type: TypeMessage;
    static styles: import("lit").CSSResult;
    private handleClick;
    private handleClose;
    render(): import("lit-html").TemplateResult<1>;
}
