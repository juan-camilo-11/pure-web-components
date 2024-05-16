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
      background-color: var(--pure-button-primary-bg, #007bff);
      color: var(--pure-button-primary-color, #FFF);
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: .3s ease;
    }

    .primary:hover {
      background-color: var(--pure-button-primary-bg-hover, #0051a8);
      transition: .3s ease;
    }
    .secondary{
      background-color: var(--pure-button-secondary-bg, #FFF);
      color: var(--pure-button-secondary-color, #0056b3);
      border: 1px solid var(--pure-button-secondary-color, #0056b3);
    }
    .secondary:hover{
      background-color: var(--pure-button-secondary-bg-hover, #0057b33f);
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

  private handleClick() {
    this.dispatchEvent(new CustomEvent('onPureClick'));
  } 

  render() {
    return html`
      <button @click=${this.handleClick} class="${this.btnClass} ${this.size}">
        ${this.text}
      </button>
    `;
  }

}
