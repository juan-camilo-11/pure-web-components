import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { SizeComponent, defatulText } from '../ constants/ constants';

@customElement('pure-input')
export default class Input extends LitElement {

    @property()
    size?: SizeComponent = 'medium';

    @property()
    message?: string = "";

    @property()
    placeholder?: string = 'Placeholder';

    @property()
    value?: string = '';

    @property()
    status?: 'info' | 'error' = 'info';

    @property()
    type?: string = 'TEXT';

    static styles = css`
    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: .5rem;
        width: 100%
    }
    p{
        margin: 0;
        color: var(--color-input-message-text, #474747);
    }
    input{
        background-color: var(--color-input-bg, #FFF);
        color: var(--color-input-text, #474747);
        border: 1px solid #aaaaaa;
        border-radius: .3rem;
    }
    input:focus{
        border: 1px solid var(--pure-input-focus, #007bff);
        outline: none;
    }
    .small{
        width: calc(100% - 16px);
        font-size: 12px;
        padding: 6px 8px;
    }
    .medium{
        width: calc(100% - 20px);
        font-size: 14px;
        padding: 8px 10px;
    }
    .large{
        width: calc(100% - 28px);
        font-size: 16px;
        padding: 10px 14px;
    }
    p.small{
        padding:0;
    }
    p.medium{
        padding:0;
    }
    p.large{
        padding:0;
    }
    p.error{
        color: #ff0000;
    }
    input.error{
        border-color: #ff0000;
    }
  `;

    private onPureChange(event: any) {
        this.value = event.target.value;
        this.dispatchEvent(new CustomEvent('onPureChange', {
            bubbles: true,
            composed: true,
            detail: { value: this.value }
        }));
    }


    render() {
        return html`
            <div>
                <input  
                    type="${this.type}"
                    class="${this.size} ${this.status}" 
                    placeholder="${this.placeholder}"
                    @input="${this.onPureChange}"
                    />
                ${this.message
                ? html`<p class="${this.size} ${this.status}">${this.message !== "" ? this.message : ""}</p>`
                : html``
            }
                
            </div>
    `;
    }

}
