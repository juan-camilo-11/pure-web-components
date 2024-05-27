/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class o{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const r=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(s,t,i)},n=(i,s)=>{if(e)i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of s){const s=document.createElement("style"),o=t.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=e.cssText,i.appendChild(s)}},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,f=globalThis,g=f.trustedTypes,v=g?g.emptyScript:"",m=f.reactiveElementPolyfillSupport,y=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},x=(t,e)=>!c(t,e),$={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:x};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const r=s?.call(this);o.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return n(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=s,this[s]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??x)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[y("elementProperties")]=new Map,w[y("finalized")]=new Map,m?.({ReactiveElement:w}),(f.reactiveElementVersions??=[]).push("2.0.4");const _=globalThis,A=_.trustedTypes,k=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,S="?"+C,O=`<${S}>`,P=document,j=()=>P.createComment(""),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,F="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,M=/>/g,H=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,L=/"/g,N=/^(?:script|style|textarea|title)$/i,B=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),I=B(1),V=(B(2),Symbol.for("lit-noChange")),W=Symbol.for("lit-nothing"),q=new WeakMap,J=P.createTreeWalker(P,129);function K(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const X=(t,e)=>{const i=t.length-1,s=[];let o,r=2===e?"<svg>":"",n=U;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,d=0;for(;d<i.length&&(n.lastIndex=d,c=n.exec(i),null!==c);)d=n.lastIndex,n===U?"!--"===c[1]?n=T:void 0!==c[1]?n=M:void 0!==c[2]?(N.test(c[2])&&(o=RegExp("</"+c[2],"g")),n=H):void 0!==c[3]&&(n=H):n===H?">"===c[0]?(n=o??U,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,a=c[1],n=void 0===c[3]?H:'"'===c[3]?L:D):n===L||n===D?n=H:n===T||n===M?n=U:(n=H,o=void 0);const h=n===H&&t[e+1].startsWith("/>")?" ":"";r+=n===U?i+O:l>=0?(s.push(a),i.slice(0,l)+E+i.slice(l)+C+h):i+C+(-2===l?e:h)}return[K(t,r+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class Z{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const n=t.length-1,a=this.parts,[c,l]=X(t,e);if(this.el=Z.createElement(c,i),J.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=J.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(E)){const e=l[r++],i=s.getAttribute(t).split(C),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:n[2],strings:i,ctor:"."===n[1]?et:"?"===n[1]?it:"@"===n[1]?st:tt}),s.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:o}),s.removeAttribute(t));if(N.test(s.tagName)){const t=s.textContent.split(C),e=t.length-1;if(e>0){s.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],j()),J.nextNode(),a.push({type:2,index:++o});s.append(t[e],j())}}}else if(8===s.nodeType)if(s.data===S)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(C,t+1));)a.push({type:7,index:o}),t+=C.length-1}o++}}static createElement(t,e){const i=P.createElement("template");return i.innerHTML=t,i}}function G(t,e,i=t,s){if(e===V)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const r=z(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=G(t,o._$AS(t,e.values),o,s)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??P).importNode(e,!0);J.currentNode=s;let o=J.nextNode(),r=0,n=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new Y(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new ot(o,this,t)),this._$AV.push(e),a=i[++n]}r!==a?.index&&(o=J.nextNode(),r++)}return J.currentNode=P,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),z(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==W&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Z.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Q(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new Z(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Y(this.S(j()),this.S(j()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(void 0===o)t=G(this,t,e,0),r=!z(t)||t!==this._$AH&&t!==V,r&&(this._$AH=t);else{const s=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=G(this,s[i+n],e,n),a===V&&(a=this._$AH[n]),r||=!z(a)||a!==this._$AH[n],a===W?t=W:t!==W&&(t+=(a??"")+o[n+1]),this._$AH[n]=a}r&&!s&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class st extends tt{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??W)===V)return;const i=this._$AH,s=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==W&&(i===W||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const rt=_.litHtmlPolyfillSupport;rt?.(Z,Y),(_.litHtmlVersions??=[]).push("3.1.3");class nt extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new Y(e.insertBefore(j(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}nt._$litElement$=!0,nt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:nt});const at=globalThis.litElementPolyfillSupport;at?.({LitElement:nt}),(globalThis.litElementVersions??=[]).push("4.0.5");const ct=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)},lt={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:x},dt=(t=lt,e,i)=>{const{kind:s,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,o,t)},init(e){return void 0!==e&&this.P(s,void 0,t),e}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];e.call(this,i),this.requestUpdate(s,o,t)}}throw Error("Unsupported decorator location: "+s)};function ht(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}const pt="Disfruta cada momento con pasión.";var ut=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let ft=class extends nt{constructor(){super(...arguments),this.text=pt,this.btnClass="primary",this.size="medium"}handleClick(){this.dispatchEvent(new CustomEvent("onPureClick"))}render(){return I`
      <button @click=${this.handleClick} class="${this.btnClass} ${this.size}">
        ${this.text}
      </button>
    `}};ft.styles=r`
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
  `,ut([ht()],ft.prototype,"text",void 0),ut([ht()],ft.prototype,"btnClass",void 0),ut([ht()],ft.prototype,"size",void 0),ft=ut([ct("pure-button")],ft);var gt=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let vt=class extends nt{constructor(){super(...arguments),this.size="medium",this.message="",this.placeholder="Placeholder",this.defaultValue="",this.status="info",this.type="TEXT"}render(){return I`
            <div>
                <input type="${this.type}" class="${this.size} ${this.status}" placeholder="${this.placeholder}"/>
                ${this.message?I`<p class="${this.size} ${this.status}">${""!==this.message?this.message:""}</p>`:I``}
                
            </div>
    `}};vt.styles=r`
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
  `,gt([ht()],vt.prototype,"size",void 0),gt([ht()],vt.prototype,"message",void 0),gt([ht()],vt.prototype,"placeholder",void 0),gt([ht()],vt.prototype,"defaultValue",void 0),gt([ht()],vt.prototype,"status",void 0),gt([ht()],vt.prototype,"type",void 0),vt=gt([ct("pure-input")],vt);var mt=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let yt=class extends nt{constructor(){super(...arguments),this.status="false"}handleClick(){"disabled"!==this.status&&("true"===this.status?this.status="false":this.status="true"),this.dispatchEvent(new CustomEvent("onPureClick"))}render(){return I`
            <div @click="${this.handleClick}" class="div ${this.status}">
                <div class="toggle ${this.status}">
                </div>
            </div>
    `}};yt.styles=r`
    .div{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 48px;
        height: 24px;
        border: 1px solid #aaa;
        border-radius: 10rem;
        cursor: pointer;
        transition: .5s ease;
        background-color: #aaaaaa;
    }
    .toggle{
        display: block;
        width: 24px;
        height: 24px;
        border-radius: 100%;
        background-color: #fff;
        transition: .3s ease;
    }
    .div.true{
        justify-content: flex-end;
        border: 1px solid var(--pure-toggle-color-bg, #007bff);
        transition: .5s ease;
        background-color: var(--pure-toggle-color-bg, #007bff);
    }
    .toggle.true{
        background-color: #fff;
        transition: .3s ease;
    }
    .div.disabled{
        justify-content: flex-end;
        border: 1px solid #aaaaaa;
        transition: .5s ease;
        background-color: #aaaaaa;
        cursor: default;
    }
  `,mt([ht()],yt.prototype,"status",void 0),yt=mt([ct("pure-toggle")],yt);var bt=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let xt=class extends nt{constructor(){super(...arguments),this.status="false"}handleClick(){"disabled"!==this.status&&("true"===this.status?this.status="false":this.status="true")}render(){return I`
            <div @click="${this.handleClick}" class="div ${this.status}">
            ${"true"===this.status?I`
                <svg xmlns="http://www.w3.org/2000/svg" height="12" width="10.5" viewBox="0 0 448 512">
                    <path fill="#ffffff" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>`:""}
            </div>
        `}};xt.styles=r`
    .div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        border: 1px solid #aaa;
        border-radius: 5px;
        cursor: pointer;
        transition: .5s ease;
        background-color: #fff;
    }
    .div.true{
        border: 1px solid var(--pure-checkbox-bg, #007bff);
        transition: .5s ease;
        background-color: var(--pure-checkbox-bg, #007bff);
    }
    .div.disabled{
        justify-content: flex-end;
        border: 1px solid #aaaaaa;
        transition: .5s ease;
        background-color: #aaaaaa;
        cursor: default;
    }
    div path{
        fill: var(--pure-checkbox-color, #FFF);
    }
  `,bt([ht()],xt.prototype,"status",void 0),xt=bt([ct("pure-checkbox")],xt);var $t=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let wt=class extends nt{constructor(){super(...arguments),this.status="false",this.placeholder="Seleccione",this.options=["Opcion 1","Opcion 2"],this.isOpen=!1}handleClick(){this.isOpen=!this.isOpen}handleClickOption(t){this.selectOption=t,this.isOpen=!1,console.log(t)}render(){return I`
        <div class="container">
            <div @click="${this.handleClick}" class="div ${this.status} ${this.isOpen}">
                <p>${void 0!==this.selectOption?this.selectOption:this.placeholder}</p>
                <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#000000" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
            </div>
            <div class="options ${this.isOpen}">
            ${this.options.map((t=>I`<div class="option" @click="${()=>this.handleClickOption(t)}"><p>${t}</p></div>`))}
                </div>
        </div>
        `}};function _t(t){switch(t){case"info":default:return I`<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#74C0FC" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`;case"error":return I`<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#c10606" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`;case"warning":return I`<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#FFD43B" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`;case"success":return I`<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#3fde44" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>`}}wt.styles=r`
    .div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        min-width: max-content;
        border: 1px solid #aaa;
        border-radius: 5px;
        cursor: pointer;
        transition: .5s ease;
        background-color: #fff;
        padding: .5rem;
        box-sizing: border-box;
        gap: 1rem;
    }
    .div.true{
        border: 1px solid var(--pure-dropdown-bg, #007bff);
    }
    .option{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        max-width: 100%;
        min-width: max-content;
        padding: .5rem;
        box-sizing: border-box;
    }
    .option:hover{
        background-color: var(--pure-dropdown-bg, #007bff);
        color: var(--pure-dropdown-color, #FFF);
    }
    .options{
        max-width: 100%;
        min-width: max-content;
        border-radius: 5px;
        border: 1px solid #aaa;
        display: none;
    }
    .options.true{
        display: block;
    }
    .container {
        display: flex;
        flex-direction: column;
    }
  `,$t([ht()],wt.prototype,"status",void 0),$t([ht()],wt.prototype,"placeholder",void 0),$t([ht()],wt.prototype,"options",void 0),$t([ht()],wt.prototype,"selectOption",void 0),$t([ht({state:!0,attribute:!1})],wt.prototype,"isOpen",void 0),wt=$t([ct("pure-dropdown")],wt);var At=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let kt=class extends nt{constructor(){super(...arguments),this.status=!1,this.text=pt,this.type="info"}handleClick(){this.status=!1}close(){super.connectedCallback(),setTimeout((()=>{this.status=!1}),2e4)}render(){return I`
        <div class="div ${this.status}" style="border-left: 3px solid #${function(t){switch(t){case"info":default:return"74C0FC";case"error":return"C10606";case"warning":return"FFD43B";case"success":return"3DEE44"}}(this.type)};">
            <div class="ico">${_t(this.type)}</div>
            <p>${this.text}</p>
            <div @click="${this.handleClick}" class="close"><svg xmlns="http://www.w3.org/2000/svg" height="14" width="10.5" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#000000" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></div>
        </div>
        `}};kt.styles=r`
    .div{
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: calc(50% - .8rem);
        border-radius: .3rem;
        background-color: var(--pure-alert-bg, #FFF);
        z-index: 1001;
        top: 1rem;
        margin: 0 auto;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
    }
    .div.false{
        display: none;
    }
    p{
        max-width: 80%;
        margin: 0;
        color: var(--pure-alert-color, #000);
        padding: .5rem 0;
        word-wrap: break-word;
    }
    .close{
        display: flex;
        align-items: center;
        justify-content: center;
        cursor:pointer;
        padding: .5rem 0;
        margin-right: .5rem;
    }
    .close path{
        fill: var(--pure-alert-close-fill, #000);
    }
    .ico{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: .5rem;
    }
    

    @media screen and (max-width: 768px) {
        .div {
            width: calc(90% - .8rem);
        }
    }

    @media screen and (min-width: 769px) and (max-width: 1024px) {
        .div {
            width: calc(70% - .8rem);
        }
    }

    @media screen and (min-width: 1025px) {
        .div {
            width: calc(50% - .8rem);
        }
    }
    
  `,At([ht()],kt.prototype,"status",void 0),At([ht()],kt.prototype,"text",void 0),At([ht()],kt.prototype,"type",void 0),kt=At([ct("pure-alert")],kt);var Et=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Ct=class extends nt{constructor(){super(...arguments),this.size="medium",this.text=pt,this.type="info"}render(){return I`
        <div class="div" style="background-color: #${function(t){switch(t){case"info":default:return"7FB3D5";case"error":return"FF9AA2";case"warning":return"FFD67F";case"success":return"9DE6C4"}}(this.type)};">
            <p style="color: #${function(t){switch(t){case"info":default:return"1A3B4C";case"error":return"801A00";case"warning":return"7F4E00";case"success":return"16504B"}}(this.type)};" class="${this.size}">${this.text}</p>
        </div>
        `}};Ct.styles=r`
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
  `,Et([ht()],Ct.prototype,"size",void 0),Et([ht()],Ct.prototype,"text",void 0),Et([ht()],Ct.prototype,"type",void 0),Ct=Et([ct("pure-tag")],Ct);var St=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Ot=class extends nt{constructor(){super(...arguments),this.status=!1,this.text=pt,this.desc=pt,this.showButton=!1,this.btnText=pt,this.type="info"}handleClick(){this.status=!1}handleClose(){this.status=!1}render(){return I`
        <div class="div ${this.status}"></div>
        <div class="container ${this.status}">
            <div class="modal">
                <div class="modal__header">
                    ${_t(this.type)}
                    <svg @click="${this.handleClose}" class="modal__icon" xmlns="http://www.w3.org/2000/svg" height="20" width="15" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#000000" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </div>
                <h2>${this.text}</h2>
                <p>${this.desc}</p>
                <div class="modal__footer">
                ${this.showButton?I`<pure-button @click="${this.handleClick}" text="${this.btnText}"></pure-button>`:I``}
                </div>
            </div>
        </div> 
        `}};Ot.styles=r`
    .div{
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: #007bff;
        z-index: 1000;
        top: 0;
        left:0;
        backdrop-filter: blur(2px);
        opacity: .2;
    }
    
    .container{
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        top: 0;
        left:0;
        z-index: 1005;
    }
    .modal{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        width: 80%;
        background-color: #fff;
        border-radius: .5rem;
        z-index: 1005;
        padding: 1rem;
    }
    .modal__header{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .modal__footer{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .modal__icon{
        cursor: pointer;
    }
    .div.false{
        display: none;
    }
    .container.false{
        display: none;
    }
  `,St([ht({type:Boolean})],Ot.prototype,"status",void 0),St([ht({type:String})],Ot.prototype,"text",void 0),St([ht({type:String})],Ot.prototype,"desc",void 0),St([ht({type:Boolean})],Ot.prototype,"showButton",void 0),St([ht({type:String})],Ot.prototype,"btnText",void 0),St([ht()],Ot.prototype,"type",void 0),Ot=St([ct("pure-modal")],Ot);var Pt=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let jt=class extends nt{constructor(){super(...arguments),this.navItems="",this.logoUrl="",this.logoText="Pure",this.isActive=!1}handleClick(){this.isActive=!this.isActive}handleItems(t){var e,i;const s=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(`#${t}--a`);null==s||s.classList.toggle("active");const o=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelector(`#${t}`);null==o||o.classList.toggle("active")}render(){const t=JSON.parse(this.navItems);return I`
        <button @click="${this.handleClick}" class="menu"><div class="menu-icon"></div></button>
        <nav role="navigation" aria-label="Main" class="${this.isActive?"active":""}">
        <div class="container">
            <div>
                <div class="d-flex" style="margin-left: .5rem;">
                    ${this.logoUrl?I`<img src="${this.logoUrl}" alt="Logo">`:""}
                    <p>${this.logoText}</p>
                </div>
                <button @click="${this.handleClick}" class="${this.isActive?"":"active"} btn-close">
                    <div class="close-icon d-flex"></div>
                </button>
            </div>
            <ul>
                ${t.map((t=>I`
                        <li class="d-flex--colum ${"true"===t.active?"active":""}">
                            ${void 0!==t.subItems?I`
                                <a id="${t.text}--a" class="item--a" @click="${()=>{this.handleItems(t.text)}}">${t.text}</a>
                                <ul id="${t.text}" class="subItems">
                                ${t.subItems.map((t=>I` 
                                    <li><a href="${t.url}" @click="${this.handleClick}">${t.text}</a></li>
                                `))}
                                </ul>`:I`<a href="${t.url}" @click="${this.handleClick}">${t.text}</a>`}
                        </li>`))}
            </ul>
        </div>
        </nav>
        `}};jt.styles=r`
    nav{
        position: fixed;
        top: 0;
        left: -100%;
        width: 50%;
        height: 100%;
        background-color: #F4F6F6;
        transition: 0.5s ease;
        overflow: auto;
    }
    nav::-webkit-scrollbar {
        
        width: 0px;
        height: 0px;
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
        cursor: pointer;
    }
    a{
        width: calc(100% - 1rem);
        height: calc(100% - 1.6rem);
        padding: .8rem .5rem;
        color: #AAA;
        text-decoration: none;
    }
    a:hover{
        color: #000;
        border-right: solid 1px var(--pure-navbar-border-color, #5e5e5e);
        background-color: #EAEDED;
        transition: background-color 0.3s ease;
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
        background-color: var(--pure-navbar-icon-open-bg, #F4F6F6);
        cursor: pointer;
    }
    .menu-icon {
        width: 25px;
        height: 2px;
        background-color: var(--pure-navbar-icon-open-color, #AAA);
        position: relative;
        margin: 20px auto;
        transition: background-color .3s ease;
    }
    
    .menu-icon::before,
    .menu-icon::after {
        content: '';
        width: 25px;
        height: 2px;
        background-color: var(--pure-navbar-icon-open-color, #AAA);
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
        background-color: var(--pure-navbar-icon-open-hover, #000);
        transition: background-color .3s ease;
    }
    .d-flex {
        display: flex;
        justify-content: center;
        align-items: center;
        gap:.4rem;
    }
    .d-flex--colum {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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

    .subItems{
        display: none;
        transition: height 0.3s ease;
    }
    .subItems.active{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        width: 100%;
        height: auto;
        transition: 0.3s ease;
    }
    .subItems li a{
        color: #555555;
    }
    .item--a.active{
        color: #000;
        border-right: solid 1px var(--pure-navbar-border-color, #5e5e5e);
        background-color: #EAEDED;
        transition: background-color 0.3s ease;
    }
  `,Pt([ht()],jt.prototype,"navItems",void 0),Pt([ht()],jt.prototype,"logoUrl",void 0),Pt([ht()],jt.prototype,"logoText",void 0),Pt([ht()],jt.prototype,"isActive",void 0),jt=Pt([ct("pure-navbar")],jt);var zt=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Rt=class extends nt{constructor(){super(...arguments),this.content=""}render(){const t=JSON.parse(this.content);return I`
            <table>
            <thead>
            <tr>
                ${t.columns.map((t=>I` <th>${t.header}</th>`))}
            </tr>
            </thead>
            <tbody>
            ${t.rows.map((t=>I`
                <tr>
                    ${Object.values(t).map((t=>I`<td>${t}</td>`))}
                </tr>
            `))}
            </tbody>
        </table>
    `}};Rt.styles=r`
    table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
    }
    th, td {
        padding: 1rem 1rem;
        text-align: left;
    }
    tr {
        border-bottom: 1px solid var(--pure-table-header-bg, #e9e9e9);
    }
    th {
        background-color: var(--pure-table-header-bg, #e9e9e9);
    }
  `,zt([ht()],Rt.prototype,"content",void 0),Rt=zt([ct("pure-table")],Rt);var Ft=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Ut=class extends nt{constructor(){super(...arguments),this.size="medium",this.text=pt}render(){return I`
        <div class="container ${this.size}">
            <input type="text" id="copyText" value=${this.text} readonly>
            <button @click=${this.copyText}>
            <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512"><path fill="#ffffff" d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"/></svg>
            </button>
        </div>
    `}copyText(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("copyText");e&&(e.select(),document.execCommand("copy"),this.dispatchEvent(new CustomEvent("onPureCopy",{detail:{textCopy:e.value}})))}};Ut.styles=r`
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
      
  `,Ft([ht()],Ut.prototype,"size",void 0),Ft([ht()],Ut.prototype,"text",void 0),Ut=Ft([ct("pure-copy")],Ut)})();