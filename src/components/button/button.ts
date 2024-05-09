import { LitElement, html, css } from 'lit';
import {customElement, property} from 'lit/decorators.js';

import { defatulText, SizeComponent, ClassComponent} from "../ constants/ constants";

@customElement('pure-button')
export class Button extends LitElement {
  @property()
  text: string = defatulText;

  @property()
  btnClass?: ClassComponent = 'primary';

  @property()
  size?: SizeComponent = 'medium';
  
  static styles = css`
    button {
      width: 100%;
      min-width: max-content;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: .3s ease;
    }

    .primary:hover {
      background-color: #0051a8;
      transition: .3s ease;
    }
    .secondary{
      background-color: #ffffff;
      color: #0056b3;
      border: 1px solid #0056b3;
    }
    .secondary:hover{
      background-color: #0057b33f;
      transition: .3s ease;
    }
    .small{
      font-size: 12px;
      padding: 8px 16px;
    }
    .medium{
      font-size: 14px;
      padding: 10px 20px;
    }
    .large{
      font-size: 16px;
      padding: 12px 24px;
    }
  `;

  render() {
    return html`
      <button @click="${this.handleClick}" class="${this.btnClass} ${this.size}" disabled>
        ${this.text}
      </button>
    `;
  }

  private handleClick() {
    this.dispatchEvent(new CustomEvent('onPureClick'));
  } 
}
