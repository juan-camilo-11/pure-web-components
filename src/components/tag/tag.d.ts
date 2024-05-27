import { LitElement } from 'lit';
import { SizeComponent, TypeMessage } from '../ constants/ constants';
export default class Tag extends LitElement {
    size?: SizeComponent;
    text: string;
    type: TypeMessage;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
