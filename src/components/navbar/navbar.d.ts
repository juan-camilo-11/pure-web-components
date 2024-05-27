import { LitElement } from 'lit';
export default class Navbar extends LitElement {
    navItems: string;
    logoUrl?: string;
    logoText?: string;
    private isActive?;
    static styles: import("lit").CSSResult;
    private handleClick;
    private handleItems;
    render(): import("lit-html").TemplateResult<1>;
}
