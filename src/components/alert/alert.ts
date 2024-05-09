import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { selectIcon, selectColor } from "../../utils/componentsTypes";
import { defatulText, TypeMessage } from "../ constants/ constants";

@customElement('pure-alert')
export class Alert extends LitElement {

    @property()
    status?: boolean = false;

    @property()
    text: string = defatulText;

    @property()
    type: TypeMessage = "info";

    static styles = css`
    .div{
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: calc(50% - .8rem);
        border-radius: .3rem;
        background-color: #fff;
        z-index: 1001;
        top: 1rem;
        margin: 0 auto;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
    }
    .div.false{
        display: none;
    }
    p{
        max-width: 80%;
        margin: 0;
        padding: .5rem 0;
        word-wrap: break-word;
    }
    .close{
        display: flex;
        align-items: center;
        justify-content: center;
        cursor:pointer;
        padding: .5rem 0;
        margin-right: .5rem;
    }
    .ico{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: .5rem;
    }
    

    @media screen and (max-width: 768px) {
        .div {
            width: calc(90% - .8rem);
        }
    }

    @media screen and (min-width: 769px) and (max-width: 1024px) {
        .div {
            width: calc(70% - .8rem);
        }
    }

    @media screen and (min-width: 1025px) {
        .div {
            width: calc(50% - .8rem);
        }
    }
    
  `;

    private handleClick() {
        this.status = false;
    }

    private close() {
        super.connectedCallback();
        setTimeout(() => {
            this.status = false;
        }, 20000);
    }

    render() {
        return html`
        <div class="div ${this.status}" style="border-left: 3px solid #${selectColor(this.type)};">
            <div class="ico">${selectIcon(this.type)}</div>
            <p>${this.text}</p>
            <div @click="${this.handleClick}" class="close"><svg xmlns="http://www.w3.org/2000/svg" height="14" width="10.5" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#000000" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></div>
        </div>
        `;
    }


}
