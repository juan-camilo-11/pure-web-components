import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { selectIcon } from "../../utils/componentsTypes";
import { TypeMessage, defatulText } from '../ constants/ constants';

@customElement('pure-modal')
export class Modal extends LitElement {

    @property({ type: Boolean }) status = false;
    @property({ type: String }) text = defatulText;
    @property({ type: String }) desc = defatulText;
    @property({ type: Boolean }) showButton = false;
    @property({ type: String }) btnText = defatulText;
    @property() 
    type: TypeMessage = "info";

    static styles = css`
    .div{
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: #007bff;
        z-index: 1000;
        top: 0;
        left:0;
        backdrop-filter: blur(2px);
        opacity: .2;
    }
    
    .container{
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        top: 0;
        left:0;
        z-index: 1005;
    }
    .modal{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        width: 80%;
        background-color: #fff;
        border-radius: .5rem;
        z-index: 1005;
        padding: 1rem;
    }
    .modal__header{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .modal__footer{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .modal__icon{
        cursor: pointer;
    }
    .div.false{
        display: none;
    }
    .container.false{
        display: none;
    }
  `;

    private handleClick() {
        this.status = false;
    }
    private handleClose() {
        this.status = false;
    }


    render() {
        
        return html`
        <div class="div ${this.status}"></div>
        <div class="container ${this.status}">
            <div class="modal">
                <div class="modal__header">
                    ${selectIcon(this.type)}
                    <svg @click="${this.handleClose}" class="modal__icon" xmlns="http://www.w3.org/2000/svg" height="20" width="15" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#000000" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </div>
                <h2>${this.text}</h2>
                <p>${this.desc}</p>
                <div class="modal__footer">
                ${this.showButton
                    ? html `<pure-button @click="${this.handleClick}" text="${this.btnText}"></pure-button>`
                    : html ``
                  }
                </div>
            </div>
        </div>
            
        
        `;
    }


}
