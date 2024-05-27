import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { SizeComponent, defatulText } from '../ constants/ constants';

@customElement('pure-copy')
export default class Copy extends LitElement {

    @property()
    size?: SizeComponent = 'medium';

    @property()
    text: string = defatulText;

    static styles = css`
    .container {
        text-align: center;
        display: flex;
        width:100%;
      }
      
      input {
        padding: .5rem;
        font-size: 12px;
        flex-grow: 1;
        background-color: var(--pure-input-bg, #FFF);
        border: 1px solid #aaaaaa;
        border-right: none;
        border-top-left-radius: .3rem; 
        border-bottom-left-radius: .3rem;
        min-width: 100px;
      }
      .container.small input{
        font-size: 12px;
        padding: .5rem;
      }
      .container.medium input{
        font-size: 14px;
        padding: .6rem;
      }
      .container.large input{
        font-size: 16px;
        padding: .7rem;
      }
      input:focus{
        border: 1px solid var(--pure-input-focus, #007bff);
        outline: none;
    }
      button {
        border: none;
        padding: .5rem 1rem;
        font-size: 16px;
        cursor: pointer;
        background-color: var(--pure-copy-bg, #007bff);
        transition: .3s ease;
        border-top-right-radius: .3rem; 
        border-bottom-right-radius: .3rem;
      }
      button:hover{
        background-color: var(--pure-copy-bg-hover, #0051a8);
        transition: .3s ease;
      }
      button path{
        fill: var(--pure-copy-color, #FFF);
      }
      
  `;

    render() {
        return html`
        <div class="container ${this.size}">
            <input type="text" id="copyText" value=${this.text} readonly>
            <button @click=${this.copyText}>
            <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512"><path fill="#ffffff" d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"/></svg>
            </button>
        </div>
    `;
    }

    private copyText() {
        const textInput = this.shadowRoot?.getElementById('copyText') as HTMLInputElement;
        if (textInput) {
            textInput.select();
            document.execCommand('copy');
            this.dispatchEvent(new CustomEvent('onPureCopy', {
                detail: { textCopy: textInput.value }
            }));
        }
    }
}
