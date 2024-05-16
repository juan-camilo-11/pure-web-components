import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('pure-table')
export class Table extends LitElement {
    @property()
    content: string = '';
    
    //--pure-table-header-bg

    static styles = css`
    table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
    }
    th, td {
        padding: 8px;
        border-top: 1px solid #CCCCCC;
        border-bottom: 1px solid #CCCCCC;
        text-align: left;
    }
    th {
        background-color: var(--pure-table-header-bg, #CACFD2);
    }
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    tr:nth-child(odd) {
        background-color: #FFFFFF;
    }
  `;

    render() {
        const items: any = JSON.parse(this.content);
        return html`
            <table>
            <thead>
            <tr>
                ${items.columns.map((item: any) =>
                    html` <th>${item.header}</th>`
                )}
            </tr>
            </thead>
            <tbody>
            ${items.rows.map((row: any) => html`
                <tr>
                    ${Object.values(row).map((value: any) => html`<td>${value}</td>`)}
                </tr>
            `)}
            </tbody>
        </table>
    `;
    }
}
