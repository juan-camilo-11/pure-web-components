import { LitElement } from 'lit';
export declare class Navbar extends LitElement {
    navItems: {
        text: string;
        url: string;
        logo: import("lit-html").TemplateResult<1>;
    }[];
    logoUrl?: string;
    tittle: string;
    private isActive?;
    static styles: import("lit").CSSResult;
    private handleClick;
    render(): import("lit-html").TemplateResult<1>;
}
