import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { StatusComponent } from '../ constants/ constants';

@customElement('pure-dropdown')
export default class Dropdown extends LitElement {

    @property()
    status?: StatusComponent  = "false";

    @property()
    placeholder?: string  = "Seleccione";

    @property()
    options: string[]  = ["Opcion 1","Opcion 2"];

    @property()
    selectOption?: string | undefined;

    @state()
    private isOpen: boolean = false;

    static styles = css`
    .div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        min-width: max-content;
        border: 1px solid #aaa;
        border-radius: 5px;
        cursor: pointer;
        transition: .5s ease;
        background-color: #fff;
        padding: .5rem;
        box-sizing: border-box;
        gap: 1rem;
    }
    .div.true{
        border: 1px solid var(--pure-dropdown-bg, #007bff);
    }
    .option{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        max-width: 100%;
        min-width: max-content;
        padding: .5rem;
        box-sizing: border-box;
    }
    .option:hover{
        background-color: var(--pure-dropdown-bg, #007bff);
        color: var(--pure-dropdown-color, #FFF);
    }
    .options{
        max-width: 100%;
        min-width: max-content;
        border-radius: 5px;
        border: 1px solid #aaa;
        display: none;
    }
    .options.true{
        display: block;
    }
    .container {
        display: flex;
        flex-direction: column;
    }
  `;

    private handleClick() {
        this.isOpen = !this.isOpen;
    }
    private handleClickOption(option: string) {
        this.selectOption = option;
        this.isOpen = false;
        console.log(option)
    }

    render() {
        return html`
        <div class="container">
            <div @click="${this.handleClick}" class="div ${this.status} ${this.isOpen}">
                <p>${this.selectOption !== undefined ? this.selectOption : this.placeholder}</p>
                <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#000000" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
            </div>
            <div class="options ${this.isOpen}">
            ${this.options.map(option => 
                html`<div class="option" @click="${() => this.handleClickOption(option)}"><p>${option}</p></div>`)}
                </div>
        </div>
        `;
    }
}
