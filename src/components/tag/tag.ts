import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { pasterSelectColor, selectTextColor } from "../../utils/componentsTypes";
import { SizeComponent, TypeMessage, defatulText } from '../ constants/ constants';

@customElement('pure-tag')
export class Tag extends LitElement {

    @property()
    size?: SizeComponent = 'medium';

    @property()
    text: string = defatulText;

    @property()
    type: TypeMessage = "info";

    static styles = css`
    .div{
        display: inline-block;
        border-radius: .3rem;
        background-color: #fff;
        padding: .3rem .5rem;
        transition: all 0.3s ease;
    }
    p{
        display: inline;
        margin: 0;
        color: #fff;
        word-wrap: break-word;
        font-weight: 500;
    }
    p.small{
        font-size: 12px;
    }
    p.medium{
        font-size: 14px;
    }
    p.large{
        font-size: 16px;
    }
  `;

    render() {
        return html`
        <div class="div" style="background-color: #${pasterSelectColor(this.type)};">
            <p style="color: #${selectTextColor(this.type)};" class="${this.size}">${this.text}</p>
        </div>
        `;
    }
}
