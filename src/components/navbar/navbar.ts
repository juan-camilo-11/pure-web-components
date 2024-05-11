import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('pure-navbar')
export class Navbar extends LitElement {

    @property()
    navItems: string = '';

    @property()
    logoUrl?: string = "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg";

    @property()
    logoText?: string = "";

    @property()
    private isActive?: boolean = false;

    static styles = css`
    nav{
        position: fixed;
        top: 0;
        left: -100%;
        width: 50%;
        height: 100%;
        background-color: #F4F6F6;
        transition: 0.5s ease;
    }
    nav.active{
        display:flex;
        left: 0;
        transition: 0.5s ease;
    }
    ul{
        width: 100%;
        padding: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    li{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.3s ease;
    }
    li:hover{
        color: #FFF;
        border-right: solid 1px #5e5e5e;
        background-color: #EAEDED;
        transition: 0.3s ease;
    }
    li:hover a {
        color: #000;
    }
    a{
        width: calc(100% - 1rem);
        height: calc(100% - 1.6rem);
        padding: .8rem 0rem;
        color: #AAA;
        text-decoration: none;
        margin-left: .5rem;
    }
    li.active{
        border-right: solid 1px #5e5e5e;
        background-color: #EAEDED;
    }
    li.active a{
        color: #000;
    }
    img{
        width: 4rem;
        height: auto;
        margin: 1rem 0;
    }
    .container{
        display:flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .menu{
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        height: auto;
        border: none;
        background-color: #F4F6F6;
        cursor: pointer;
    }
    .menu-icon {
        width: 25px;
        height: 2px;
        background-color: #AAA;
        position: relative;
        margin: 20px auto;
        transition: background-color .3s ease;
    }
    
    .menu-icon::before,
    .menu-icon::after {
        content: '';
        width: 25px;
        height: 2px;
        background-color: #AAA;
        position: absolute;
        transition: background-color .3s ease;
    }
    
    .menu-icon::before {
        top: -8px;
        left: 0;
    }
    
    .menu-icon::after {
        top: 8px;
        left: 0;
    }
    .menu:hover .menu-icon,
    .menu:hover .menu-icon::before,
    .menu:hover .menu-icon::after
    {
        background-color: #000;
        transition: background-color .3s ease;
    }
    .d-flex {
        display: flex;
        justify-content: center;
        align-items: center;
        gap:.4rem;
    }
    .container > div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    @media screen and (max-width: 320px) {
        nav.active{
            transition: 0.3s ease;
            width: calc(70% - 1rem);
        }
    }
    
    @media screen and (min-width: 321px) and (max-width: 480px) {
        nav.active{
            transition: 0.3s ease;
            width: calc(65% - 1rem);
        }
    }
    
    @media screen and (min-width: 481px) and (max-width: 768px) {
        nav.active{
            transition: 0.3s ease;
            width: calc(40% - 1rem);
        }
    }
    
    @media screen and (min-width: 769px) and (max-width: 1024px) {
        nav.active{
            transition: 0.3s ease;
            width: calc(30% - 1rem);
        }
    }
    
    @media screen and (min-width: 1025px) {
        nav.active{
            transition: 0.3s ease;
            width: calc(20% - 1rem);
        }
    }
    
    
    .close-icon {
        width: .8ren;
        height: .8rem;
        position: relative;
        padding: .3rem .5rem;
    }
    
    .close-icon::before,
    .close-icon::after {
        content: '';
        position: absolute;
        width: 2px;
        height: 100%;
        background-color: #AAA;
    }
    .btn-close:hover .close-icon::before,
    .btn-close:hover .close-icon::after {
        background-color: #000;
        transition: 0.3s ease;
    }
    
    .close-icon::before {
        transform: rotate(45deg);
    }
    
    .close-icon::after {
        transform: rotate(-45deg);
    }
    .btn-close{
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        height: auto;
        border: none;
        background-color: #F4F6F6;
        cursor: pointer;
        margin-right: .5rem;
    }
  `;

    private handleClick() {
        this.isActive = !this.isActive;
        console.log(this.isActive)
    }


    render() {
        const items: { text: string, url: string, active: string }[] = JSON.parse(this.navItems);
        return html`
        <button @click="${this.handleClick}" class="menu"><div class="menu-icon"></div></button>
        <nav role="navigation" aria-label="Main" class="${this.isActive ? "active" : ""}">
        <div class="container">
            <div>
                <div class="d-flex" style="margin-left: .5rem;">
                    ${this.logoUrl ? html`<img src="${this.logoUrl}" alt="Logo">` : ''}
                    <p>${this.logoText}</p>
                </div>
                <button @click="${this.handleClick}" class="${!this.isActive ? "active" : ""} btn-close">
                    <div class="close-icon d-flex"></div>
                </button>
            </div>
            <ul>
                ${items.map(item => 
                    html`
                    <li class="${item.active === "true" ? "active" : ""}">
                        <a href="${item.url}" @click="${this.handleClick}">${item.text}</a>
                    </li>
                    `
                )}
            </ul>
        </div>
        </nav>
        `;
    }


}
