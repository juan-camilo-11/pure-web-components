import { LitElement } from 'lit';
import { SizeComponent } from '../ constants/ constants';
export declare class Copy extends LitElement {
    size?: SizeComponent;
    text: string;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    copyText(): void;
}
