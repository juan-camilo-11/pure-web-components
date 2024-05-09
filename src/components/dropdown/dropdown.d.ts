import { LitElement } from 'lit';
import { StatusComponent } from '../ constants/ constants';
export declare class Dropdown extends LitElement {
    status?: StatusComponent;
    placeholder?: string;
    options: string[];
    selectOption?: string | undefined;
    private isOpen;
    static styles: import("lit").CSSResult;
    private handleClick;
    private handleClickOption;
    render(): import("lit-html").TemplateResult<1>;
}
