import { LitElement } from 'lit';
import { StatusComponent } from '../ constants/ constants';
export default class Checkbox extends LitElement {
    status?: StatusComponent;
    static styles: import("lit").CSSResult;
    private handleClick;
    render(): import("lit-html").TemplateResult<1>;
}
