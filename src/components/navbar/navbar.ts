import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { pasterSelectColor, selectTextColor } from "../../utils/componentsTypes";
import { SizeComponent, TypeMessage, defatulText } from '../ constants/ constants';


@customElement('pure-navbar')
export class Navbar extends LitElement {

    @property()
    navItems = [
        { text: 'Inicio', url: '#home', logo: html` <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#AAA" d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"/></svg>` },
        { text: 'Acerca de', url: '#about', logo: html` <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#AAA" d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"/></svg>` },
        { text: 'Servicios', url: '#services', logo: html` <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#AAA" d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"/></svg>` },
        { text: 'Contacto', url: '#contact', logo: html` <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#AAA" d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"/></svg>` }
    ];
    @property()
    logoUrl?: string = "";

    @property()
    tittle: string = "Lego"

    @property()
    private isActive?: boolean = false;

    static styles = css`
    nav{
        position: fixed;
        top: .5rem;
        left: .5rem;
        width: calc(4.5rem - 1rem);
        height: calc(100% - 1rem);
        background-color: #F4F6F6;
        border-radius: .5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        transition: 0.3s ease;
    }
    ul{
        width: calc(100% -1rem);
        list-style: none;
        padding: 0 .5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    li{
        width: calc(100% - .6rem);
        padding: .5rem .5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.3s ease;
    }
    li:hover{
        color: #FFF;
        border-radius: .5rem;
        background-color: #EAEDED;
        transition: 0.3s ease;
    }
    li:hover > a {
        color: #000;
    }
    li:hover path {
        fill: black;
        transition: 0.3s ease;
    }
    a{
        width: calc(100% - 1rem);
        color: #AAA;
        text-decoration: none;
        margin-left: .5rem;
    }
    li.active{
        background-color: #EAEDED;
    }
    li.active a{
        color: #FFF;
    }
    img{
        width: 30px;
        heigth: 30px;
        margin: 1rem 0;
    }
    li a{
        display: none;
        transition: 0.3s ease;
    }
    nav.active li a{
        display: inline-block;
        transition: 0.5s ease;
    }
    nav.active li{
        justify-content: flex-start;
    }
    div{
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    div p{
        display:none;
    }
    nav.active div p{
        display: inline-block;
        margin-left: .5rem;
        font-size: 20px;
        letter-spacing: 1px;
        font-weight: 500;
    }
    .arrow {
        width: .5rem;
        height: .5rem;
        background-color: none;
        transform: rotate(45deg);
        border-top: 2px solid #AAA;
        border-right: 2px solid #AAA;
    }
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        height: auto;
        border: none;
        background-color: #F4F6F6;
        margin-bottom: 1rem;
    }
    nav.active .arrow{
        border-top: none;
        border-right: none;
        border-bottom: 2px solid #AAA;
        border-left: 2px solid #AAA;
    }
    button:hover .arrow{
        border-color:#000;
        transition: 0.3s ease;
    }
    @media screen and (max-width: 768px) {
        nav{
            width: calc(3.5rem - .6rem);
            left: .3rem;
        }
        nav.active{
            transition: 0.3s ease;
            width: calc(65% - 1rem);
        }
    }
    @media screen and (min-width: 769px) {
        nav.active{
            transition: 0.3s ease;
            width: calc(35% - 1rem);
        }
    }
    @media screen and (max-width: 320px) {
        nav{
            width: calc(3.5rem - .6rem);
            left: .3rem;
        }
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
            width: calc(60% - 1rem);
        }
    }

    @media screen and (min-width: 769px) and (max-width: 1024px) {
        nav.active{
            transition: 0.3s ease;
            width: calc(50% - 1rem);
        }
    }

    @media screen and (min-width: 1025px) {
        nav.active{
            transition: 0.3s ease;
            width: calc(25% - 1rem);
        }
    }

  `;

    private handleClick() {
        this.isActive = !this.isActive;
    }


    render() {
        return html`
        <nav role="navigation" aria-label="Main" class="${this.isActive ? "active" : ""}">
        <div>
            ${this.logoUrl ? html`<img src="${this.logoUrl}" alt="Logo">` : ''}
            <p>${this.tittle}</p>
        </div>
        <ul>
        ${this.navItems.map(item =>
            html`
            <li>
            <span>${item.logo}</span>
                <a href="${item.url}">${item.text}</a>
            </li>
            `)}
        </ul>
            <button @click="${this.handleClick}"><span class="arrow"></span></button>
        </nav>
        `;
    }


}
