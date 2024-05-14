import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { StatusComponent } from '../ constants/ constants';
@customElement('pure-checkbox')
export class Checkbox extends LitElement {

    @property()
    status?: StatusComponent  = "false";

    static styles = css`
    .div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        border: 1px solid #aaa;
        border-radius: 5px;
        cursor: pointer;
        transition: .5s ease;
        background-color: #fff;
    }
    .div.true{
        border: 1px solid var(--pure-checkbox-bg, #007bff);
        transition: .5s ease;
        background-color: var(--pure-checkbox-bg, #007bff);
    }
    .div.disabled{
        justify-content: flex-end;
        border: 1px solid #aaaaaa;
        transition: .5s ease;
        background-color: #aaaaaa;
        cursor: default;
    }
    div path{
        fill: var(--pure-checkbox-color, #FFF);
    }
  `;

    private handleClick() {
        this.status !== "disabled" ? this.status === "true" ? this.status = "false" : this.status = "true" : null;
    }

    render() {
        return html`
            <div @click="${this.handleClick}" class="div ${this.status}">
            ${this.status === "true" ? html`
                <svg xmlns="http://www.w3.org/2000/svg" height="12" width="10.5" viewBox="0 0 448 512">
                    <path fill="#ffffff" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>` : ""}
            </div>
        `;
    }
}
