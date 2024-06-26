import { LitElement } from 'lit';
import { SizeComponent } from '../ constants/ constants';
export default class Input extends LitElement {
    size?: SizeComponent;
    message?: string;
    placeholder?: string;
    value?: string;
    status?: 'info' | 'error';
    type?: string;
    static styles: import("lit").CSSResult;
    private onPureChange;
    render(): import("lit-html").TemplateResult<1>;
}
