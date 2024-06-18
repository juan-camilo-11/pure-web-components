import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('pure-expand')
export default class Expand extends LitElement {

    @property()
    options: string = "";

    @property()
    optionsTitle?: string  = "";
    
    @property()
    optionsSubtitle?: string = "";

    @property()
    optionsFooter: string  = "";

    @property()
    position: string  = "left";

    @state()
    private isOpen: boolean = false;

    // --pure--expand-border-color
    // --pure--expand-text-color
    // --pure--expand-text-color-hover
    // --pure--expand-bg-color
    // --pure--expand-bg-color-hover


    static styles = css`
    a, p{
        max-width: 100%;
        font-size: 14px;
        word-wrap: break-word;
    }

    .toggle{
        cursor: pointer;
        display: inline-block;
        height: 100%;
    }
    .container{
        position: absolute;
        top: 2rem;
        transform: 0; 
        border: 1px solid var(--pure--expand-border-color,#242424);
        border-radius: .2rem;
        background-color: var(--pure--expand-bg-color,#FFF);
        color: var(--pure--expand-text-color,#000);
        min-width: max-content;
        max-width: max-content;
    }
    .container__header{
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid var(--pure--expand-border-color,#242424);
        padding: .5rem;
    }
    .container__header p,
    .container__footer p{
        margin: 0;
    }
    .container__header .title{
        font-size: 16px;
        font-weight: bold;
        margin-bottom: .1rem;
    }
    .container__header .subtitle{
        font-size: 14px;
    }
    .container__options,
    .container__footer
    {
        display: flex;
        flex-direction: column;
    }
    .container__options a,
    .container__footer a
    {
        color: var(--pure--expand-text-color,#000);
        text-decoration: none;
        padding: .5rem;
        transition: .3s ease;
    }
    .container__options a:hover,
    .container__footer a:hover
    {
        color: var(--pure--expand-text-color-hover,#FFF);
        background-color: var(--pure--expand-bg-color-hover,#242424);
        transition: .3s ease;
    }
    .container__footer{
        border-top: 1px solid var(--pure--expand-border-color,#242424);
    }
    .container__footer p{
        padding: .5rem;
    }
    `;

    private handleClick() {
        this.isOpen = !this.isOpen;
    }


    render() {
        const options: { text: string, to: string }[] = JSON.parse(this.options);
        const optionsFooter: { text: string, to: string | boolean } = JSON.parse(this.optionsFooter);
        return html`
          <div @click="${this.handleClick}" class="toggle">
              <slot></slot>
          </div>
          ${this.isOpen ?
            html`
              <div class="container" id="container" style="${this.position === "left" ? "transform: 0; ":"transform: translateX(calc(-100% + 1.5rem));"}">
              ${this.optionsTitle ?
                html`
                <div class="container__header">
                    <p class="title">${this.optionsTitle}</p>
                    ${this.optionsSubtitle ? html`<p class="subtitle">${this.optionsSubtitle}</p>` : ""}
                </div>` : ""
                }

                <div class="container__options">
                ${options.map(option => 
                    html`
                        <a href="${option.to}">${option.text}</a>
                    `)
                }
                </div>

                ${this.optionsFooter ?
                    html`
                    <div class="container__footer">
                    ${optionsFooter.to === false ? 
                    html`<p>${optionsFooter.text}</p>` 
                    : 
                    html`<a href="${optionsFooter.to}">${optionsFooter.text}</a>` }
                    
                    </div>` : ""
                    }
                </div>
              </div>
            ` : ''}
        `;
      }
      
}
