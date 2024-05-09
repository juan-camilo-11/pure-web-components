import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { SizeComponent, defatulText } from '../ constants/ constants';

@customElement('pure-input')
export class Input extends LitElement {

    @property()
    size?: SizeComponent = 'medium';

    @property()
    message?: string = defatulText;

    @property()
    placeholder?: string = 'Placeholder';

    @property()
    defaultValue?: string = '';

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
    }
    input{
        max-width: 100%;
        border: 1px solid #aaaaaa;
        border-radius: .3rem;
    }
    input:focus{
        border: 1px solid #007bff;
        outline: none;
    }
    .small{
        font-size: 12px;
        padding: 6px 8px;
    }
    .medium{
        font-size: 14px;
        padding: 8px 10px;
    }
    .large{
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

    render() {
        return html`
            <div>
                <input type="${this.type}" class="${this.size} ${this.status}" placeholder="${this.placeholder}"/>
                <p class="${this.size} ${this.status}">${this.message !== "" ? this.message : ""}</p>
            </div>
    `;
    }

}
