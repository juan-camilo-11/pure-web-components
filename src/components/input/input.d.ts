import { LitElement } from 'lit';
import { SizeComponent } from '../ constants/ constants';
export default class Input extends LitElement {
    size?: SizeComponent;
    message?: string;
    placeholder?: string;
    defaultValue?: string;
    status?: 'info' | 'error';
    type?: string;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
