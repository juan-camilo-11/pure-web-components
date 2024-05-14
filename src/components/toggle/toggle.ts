import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { StatusComponent } from '../ constants/ constants';

@customElement('pure-toggle')
export class Toggle extends LitElement {

    @property()
    status?: StatusComponent  = "false";

    static styles = css`
    .div{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        max-width: 48px;
        height: 24px;
        border: 1px solid #aaa;
        border-radius: 10rem;
        cursor: pointer;
        transition: .5s ease;
        background-color: #aaaaaa;
    }
    .toggle{
        display: block;
        width: 24px;
        height: 24px;
        border-radius: 100%;
        background-color: #fff;
        transition: .3s ease;
    }
    .div.true{
        justify-content: flex-end;
        border: 1px solid var(--pure-toggle-color-bg, #007bff);
        transition: .5s ease;
        background-color: var(--pure-toggle-color-bg, #007bff);
    }
    .toggle.true{
        background-color: #fff;
        transition: .3s ease;
    }
    .div.disabled{
        justify-content: flex-end;
        border: 1px solid #aaaaaa;
        transition: .5s ease;
        background-color: #aaaaaa;
        cursor: default;
    }
  `;

    private handleClick() {
        this.status !== "disabled" ? this.status === "true" ? this.status = "false" : this.status = "true" : null
        this.dispatchEvent(new CustomEvent('onPureClick'));
    }

    render() {
        return html`
            <div @click="${this.handleClick}" class="div ${this.status}">
                <div class="toggle ${this.status}">
                </div>
            </div>
    `;
    }

}
