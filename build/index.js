/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";var t={287:(t,e)=>{var r=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),n=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),h=Symbol.iterator,f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,m={};function y(t,e,r){this.props=t,this.context=e,this.refs=m,this.updater=r||f}function g(){}function b(t,e,r){this.props=t,this.context=e,this.refs=m,this.updater=r||f}y.prototype.isReactComponent={},y.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},y.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},g.prototype=y.prototype;var x=b.prototype=new g;x.constructor=b,v(x,y.prototype),x.isPureReactComponent=!0;var $=Array.isArray,w=Object.prototype.hasOwnProperty,_={current:null},A={key:!0,ref:!0,__self:!0,__source:!0};function k(t,e,o){var i,s={},n=null,a=null;if(null!=e)for(i in void 0!==e.ref&&(a=e.ref),void 0!==e.key&&(n=""+e.key),e)w.call(e,i)&&!A.hasOwnProperty(i)&&(s[i]=e[i]);var c=arguments.length-2;if(1===c)s.children=o;else if(1<c){for(var l=Array(c),d=0;d<c;d++)l[d]=arguments[d+2];s.children=l}if(t&&t.defaultProps)for(i in c=t.defaultProps)void 0===s[i]&&(s[i]=c[i]);return{$$typeof:r,type:t,key:n,ref:a,props:s,_owner:_.current}}function E(t){return"object"==typeof t&&null!==t&&t.$$typeof===r}var S=/\/+/g;function C(t,e){return"object"==typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,(function(t){return e[t]}))}(""+t.key):e.toString(36)}function O(t,e,i,s,n){var a=typeof t;"undefined"!==a&&"boolean"!==a||(t=null);var c=!1;if(null===t)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case r:case o:c=!0}}if(c)return n=n(c=t),t=""===s?"."+C(c,0):s,$(n)?(i="",null!=t&&(i=t.replace(S,"$&/")+"/"),O(n,e,i,"",(function(t){return t}))):null!=n&&(E(n)&&(n=function(t,e){return{$$typeof:r,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(n,i+(!n.key||c&&c.key===n.key?"":(""+n.key).replace(S,"$&/")+"/")+t)),e.push(n)),1;if(c=0,s=""===s?".":s+":",$(t))for(var l=0;l<t.length;l++){var d=s+C(a=t[l],l);c+=O(a,e,i,d,n)}else if(d=function(t){return null===t||"object"!=typeof t?null:"function"==typeof(t=h&&t[h]||t["@@iterator"])?t:null}(t),"function"==typeof d)for(t=d.call(t),l=0;!(a=t.next()).done;)c+=O(a=a.value,e,i,d=s+C(a,l++),n);else if("object"===a)throw e=String(t),Error("Objects are not valid as a React child (found: "+("[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return c}function P(t,e,r){if(null==t)return t;var o=[],i=0;return O(t,o,"","",(function(t){return e.call(r,t,i++)})),o}function R(t){if(-1===t._status){var e=t._result;(e=e()).then((function(e){0!==t._status&&-1!==t._status||(t._status=1,t._result=e)}),(function(e){0!==t._status&&-1!==t._status||(t._status=2,t._result=e)})),-1===t._status&&(t._status=0,t._result=e)}if(1===t._status)return t._result.default;throw t._result}var j={current:null},z={transition:null},F={ReactCurrentDispatcher:j,ReactCurrentBatchConfig:z,ReactCurrentOwner:_};function T(){throw Error("act(...) is not supported in production builds of React.")}e.Children={map:P,forEach:function(t,e,r){P(t,(function(){e.apply(this,arguments)}),r)},count:function(t){var e=0;return P(t,(function(){e++})),e},toArray:function(t){return P(t,(function(t){return t}))||[]},only:function(t){if(!E(t))throw Error("React.Children.only expected to receive a single React element child.");return t}},e.Component=y,e.Fragment=i,e.Profiler=n,e.PureComponent=b,e.StrictMode=s,e.Suspense=d,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,e.act=T,e.cloneElement=function(t,e,o){if(null==t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=v({},t.props),s=t.key,n=t.ref,a=t._owner;if(null!=e){if(void 0!==e.ref&&(n=e.ref,a=_.current),void 0!==e.key&&(s=""+e.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(l in e)w.call(e,l)&&!A.hasOwnProperty(l)&&(i[l]=void 0===e[l]&&void 0!==c?c[l]:e[l])}var l=arguments.length-2;if(1===l)i.children=o;else if(1<l){c=Array(l);for(var d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}return{$$typeof:r,type:t.type,key:s,ref:n,props:i,_owner:a}},e.createContext=function(t){return(t={$$typeof:c,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:t},t.Consumer=t},e.createElement=k,e.createFactory=function(t){var e=k.bind(null,t);return e.type=t,e},e.createRef=function(){return{current:null}},e.forwardRef=function(t){return{$$typeof:l,render:t}},e.isValidElement=E,e.lazy=function(t){return{$$typeof:u,_payload:{_status:-1,_result:t},_init:R}},e.memo=function(t,e){return{$$typeof:p,type:t,compare:void 0===e?null:e}},e.startTransition=function(t){var e=z.transition;z.transition={};try{t()}finally{z.transition=e}},e.unstable_act=T,e.useCallback=function(t,e){return j.current.useCallback(t,e)},e.useContext=function(t){return j.current.useContext(t)},e.useDebugValue=function(){},e.useDeferredValue=function(t){return j.current.useDeferredValue(t)},e.useEffect=function(t,e){return j.current.useEffect(t,e)},e.useId=function(){return j.current.useId()},e.useImperativeHandle=function(t,e,r){return j.current.useImperativeHandle(t,e,r)},e.useInsertionEffect=function(t,e){return j.current.useInsertionEffect(t,e)},e.useLayoutEffect=function(t,e){return j.current.useLayoutEffect(t,e)},e.useMemo=function(t,e){return j.current.useMemo(t,e)},e.useReducer=function(t,e,r){return j.current.useReducer(t,e,r)},e.useRef=function(t){return j.current.useRef(t)},e.useState=function(t){return j.current.useState(t)},e.useSyncExternalStore=function(t,e,r){return j.current.useSyncExternalStore(t,e,r)},e.useTransition=function(){return j.current.useTransition()},e.version="18.3.1"},540:(t,e,r)=>{t.exports=r(287)}},e={};function r(o){var i=e[o];if(void 0!==i)return i.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,r),s.exports}(()=>{const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),i=new WeakMap;class s{constructor(t,e,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const r=this.t;if(e&&void 0===t){const e=void 0!==r&&1===r.length;e&&(t=i.get(r)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(r,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,r,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[o+1]),t[0]);return new s(r,t,o)},a=(r,o)=>{if(e)r.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),i=t.litNonce;void 0!==i&&o.setAttribute("nonce",i),o.textContent=e.cssText,r.appendChild(o)}},c=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,o))(e)})(t):t,{is:l,defineProperty:d,getOwnPropertyDescriptor:p,getOwnPropertyNames:u,getOwnPropertySymbols:h,getPrototypeOf:f}=Object,v=globalThis,m=v.trustedTypes,y=m?m.emptyScript:"",g=v.reactiveElementPolyfillSupport,b=(t,e)=>t,x={toAttribute(t,e){switch(e){case Boolean:t=t?y:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},$=(t,e)=>!l(t,e),w={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;class _ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,e);void 0!==o&&d(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){const{get:o,set:i}=p(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return o?.call(this)},set(e){const s=o?.call(this);i.call(this,e),this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=f(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...u(t),...h(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return a(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(void 0!==o&&!0===r.reflect){const i=(void 0!==r.converter?.toAttribute?r.converter:x).toAttribute(e,r.type);this._$Em=t,null==i?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,e){const r=this.constructor,o=r._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=r.getPropertyOptions(o),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:x;this._$Em=o,this[o]=i.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,r){if(void 0!==t){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??$)(this[t],e))return;this.P(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t)!0!==r.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[b("elementProperties")]=new Map,_[b("finalized")]=new Map,g?.({ReactiveElement:_}),(v.reactiveElementVersions??=[]).push("2.0.4");const A=globalThis,k=A.trustedTypes,E=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+C,P=`<${O}>`,R=document,j=()=>R.createComment(""),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,F=Array.isArray,T="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,H=/>/g,N=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,D=/"/g,I=/^(?:script|style|textarea|title)$/i,B=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),V=B(1),q=(B(2),Symbol.for("lit-noChange")),W=Symbol.for("lit-nothing"),J=new WeakMap,X=R.createTreeWalker(R,129);function K(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const Z=(t,e)=>{const r=t.length-1,o=[];let i,s=2===e?"<svg>":"",n=U;for(let e=0;e<r;e++){const r=t[e];let a,c,l=-1,d=0;for(;d<r.length&&(n.lastIndex=d,c=n.exec(r),null!==c);)d=n.lastIndex,n===U?"!--"===c[1]?n=M:void 0!==c[1]?n=H:void 0!==c[2]?(I.test(c[2])&&(i=RegExp("</"+c[2],"g")),n=N):void 0!==c[3]&&(n=N):n===N?">"===c[0]?(n=i??U,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,a=c[1],n=void 0===c[3]?N:'"'===c[3]?D:L):n===D||n===L?n=N:n===M||n===H?n=U:(n=N,i=void 0);const p=n===N&&t[e+1].startsWith("/>")?" ":"";s+=n===U?r+P:l>=0?(o.push(a),r.slice(0,l)+S+r.slice(l)+C+p):r+C+(-2===l?e:p)}return[K(t,s+(t[r]||"<?>")+(2===e?"</svg>":"")),o]};class Y{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let i=0,s=0;const n=t.length-1,a=this.parts,[c,l]=Z(t,e);if(this.el=Y.createElement(c,r),X.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=X.nextNode())&&a.length<n;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(S)){const e=l[s++],r=o.getAttribute(t).split(C),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:i,name:n[2],strings:r,ctor:"."===n[1]?rt:"?"===n[1]?ot:"@"===n[1]?it:et}),o.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:i}),o.removeAttribute(t));if(I.test(o.tagName)){const t=o.textContent.split(C),e=t.length-1;if(e>0){o.textContent=k?k.emptyScript:"";for(let r=0;r<e;r++)o.append(t[r],j()),X.nextNode(),a.push({type:2,index:++i});o.append(t[e],j())}}}else if(8===o.nodeType)if(o.data===O)a.push({type:2,index:i});else{let t=-1;for(;-1!==(t=o.data.indexOf(C,t+1));)a.push({type:7,index:i}),t+=C.length-1}i++}}static createElement(t,e){const r=R.createElement("template");return r.innerHTML=t,r}}function G(t,e,r=t,o){if(e===q)return e;let i=void 0!==o?r._$Co?.[o]:r._$Cl;const s=z(e)?void 0:e._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),void 0===s?i=void 0:(i=new s(t),i._$AT(t,r,o)),void 0!==o?(r._$Co??=[])[o]=i:r._$Cl=i),void 0!==i&&(e=G(t,i._$AS(t,e.values),i,o)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,o=(t?.creationScope??R).importNode(e,!0);X.currentNode=o;let i=X.nextNode(),s=0,n=0,a=r[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new tt(i,i.nextSibling,this,t):1===a.type?e=new a.ctor(i,a.name,a.strings,this,t):6===a.type&&(e=new st(i,this,t)),this._$AV.push(e),a=r[++n]}s!==a?.index&&(i=X.nextNode(),s++)}return X.currentNode=R,o}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,o){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),z(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>F(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==W&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,o="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=Y.createElement(K(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new Q(o,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=J.get(t.strings);return void 0===e&&J.set(t.strings,e=new Y(t)),e}k(t){F(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,o=0;for(const i of t)o===e.length?e.push(r=new tt(this.S(j()),this.S(j()),this,this.options)):r=e[o],r._$AI(i),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,o,i){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=W}_$AI(t,e=this,r,o){const i=this.strings;let s=!1;if(void 0===i)t=G(this,t,e,0),s=!z(t)||t!==this._$AH&&t!==q,s&&(this._$AH=t);else{const o=t;let n,a;for(t=i[0],n=0;n<i.length-1;n++)a=G(this,o[r+n],e,n),a===q&&(a=this._$AH[n]),s||=!z(a)||a!==this._$AH[n],a===W?t=W:t!==W&&(t+=(a??"")+i[n+1]),this._$AH[n]=a}s&&!o&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class rt extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class ot extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class it extends et{constructor(t,e,r,o,i){super(t,e,r,o,i),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??W)===q)return;const r=this._$AH,o=t===W&&r!==W||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==W&&(r===W||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const nt=A.litHtmlPolyfillSupport;nt?.(Y,tt),(A.litHtmlVersions??=[]).push("3.1.3");class at extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,r)=>{const o=r?.renderBefore??e;let i=o._$litPart$;if(void 0===i){const t=r?.renderBefore??null;o._$litPart$=i=new tt(e.insertBefore(j(),t),t,void 0,r??{})}return i._$AI(t),i})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}at._$litElement$=!0,at.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:at});const ct=globalThis.litElementPolyfillSupport;ct?.({LitElement:at}),(globalThis.litElementVersions??=[]).push("4.0.5");const lt=t=>(e,r)=>{void 0!==r?r.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)},dt={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:$},pt=(t=dt,e,r)=>{const{kind:o,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===o){const{name:o}=r;return{set(r){const i=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,i,t)},init(e){return void 0!==e&&this.P(o,void 0,t),e}}}if("setter"===o){const{name:o}=r;return function(r){const i=this[o];e.call(this,r),this.requestUpdate(o,i,t)}}throw Error("Unsupported decorator location: "+o)};function ut(t){return(e,r)=>"object"==typeof r?pt(t,e,r):((t,e,r)=>{const o=e.hasOwnProperty(r);return e.constructor.createProperty(r,o?{...t,wrapped:!0}:t),o?Object.getOwnPropertyDescriptor(e,r):void 0})(t,e,r)}function ht(t){return ut({...t,state:!0,attribute:!1})}const ft="Disfruta cada momento con pasión.";var vt=function(t,e,r,o){var i,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(n=(s<3?i(n):s>3?i(e,r,n):i(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let mt=class extends at{constructor(){super(...arguments),this.text=ft,this.btnClass="primary",this.size="medium"}handleClick(){this.dispatchEvent(new CustomEvent("onPureClick"))}render(){return V`
      <button @click=${this.handleClick} class="${this.btnClass} ${this.size}">
        ${this.text}
      </button>
    `}};mt.styles=n`
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
  `,vt([ut()],mt.prototype,"text",void 0),vt([ut()],mt.prototype,"btnClass",void 0),vt([ut()],mt.prototype,"size",void 0),mt=vt([lt("pure-button")],mt);var yt=function(t,e,r,o){var i,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(n=(s<3?i(n):s>3?i(e,r,n):i(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let gt=class extends at{constructor(){super(...arguments),this.size="medium",this.message="",this.placeholder="Placeholder",this.defaultValue="",this.status="info",this.type="TEXT"}render(){return V`
            <div>
                <input type="${this.type}" class="${this.size} ${this.status}" placeholder="${this.placeholder}"/>
                ${this.message?V`<p class="${this.size} ${this.status}">${""!==this.message?this.message:""}</p>`:V``}
                
            </div>
    `}};gt.styles=n`
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
  `,yt([ut()],gt.prototype,"size",void 0),yt([ut()],gt.prototype,"message",void 0),yt([ut()],gt.prototype,"placeholder",void 0),yt([ut()],gt.prototype,"defaultValue",void 0),yt([ut()],gt.prototype,"status",void 0),yt([ut()],gt.prototype,"type",void 0),gt=yt([lt("pure-input")],gt);var bt=function(t,e,r,o){var i,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(n=(s<3?i(n):s>3?i(e,r,n):i(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let xt=class extends at{constructor(){super(...arguments),this.status="false"}handleClick(){"disabled"!==this.status&&("true"===this.status?this.status="false":this.status="true"),this.dispatchEvent(new CustomEvent("onPureClick"))}render(){return V`
            <div @click="${this.handleClick}" class="div ${this.status}">
                <div class="toggle ${this.status}">
                </div>
            </div>
    `}};xt.styles=n`
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
  `,bt([ut()],xt.prototype,"status",void 0),xt=bt([lt("pure-toggle")],xt);var $t=function(t,e,r,o){var i,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(n=(s<3?i(n):s>3?i(e,r,n):i(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let wt=class extends at{constructor(){super(...arguments),this.status="false"}handleClick(){"disabled"!==this.status&&("true"===this.status?this.status="false":this.status="true")}render(){return V`
            <div @click="${this.handleClick}" class="div ${this.status}">
            ${"true"===this.status?V`
                <svg xmlns="http://www.w3.org/2000/svg" height="12" width="10.5" viewBox="0 0 448 512">
                    <path fill="#ffffff" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>`:""}
            </div>
        `}};wt.styles=n`
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
  `,$t([ut()],wt.prototype,"status",void 0),wt=$t([lt("pure-checkbox")],wt);var _t=function(t,e,r,o){var i,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(n=(s<3?i(n):s>3?i(e,r,n):i(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let At=class extends at{constructor(){super(...arguments),this.status="false",this.placeholder="Seleccione",this.options=["Opcion 1","Opcion 2"],this.isOpen=!1}handleClick(){this.isOpen=!this.isOpen}handleClickOption(t){this.selectOption=t,this.isOpen=!1,console.log(t)}render(){return V`
        <div class="container">
            <div @click="${this.handleClick}" class="div ${this.status} ${this.isOpen}">
                <p>${void 0!==this.selectOption?this.selectOption:this.placeholder}</p>
                <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#000000" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
            </div>
            <div class="options ${this.isOpen}">
            ${this.options.map((t=>V`<div class="option" @click="${()=>this.handleClickOption(t)}"><p>${t}</p></div>`))}
                </div>
        </div>
        `}};function kt(t){switch(t){case"info":default:return V`<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#74C0FC" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`;case"error":return V`<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#c10606" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`;case"warning":return V`<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#FFD43B" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`;case"success":return V`<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#3fde44" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>`}}At.styles=n`
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
  `,_t([ut()],At.prototype,"status",void 0),_t([ut()],At.prototype,"placeholder",void 0),_t([ut()],At.prototype,"options",void 0),_t([ut()],At.prototype,"selectOption",void 0),_t([ht()],At.prototype,"isOpen",void 0),At=_t([lt("pure-dropdown")],At);const Et=new Set(["children","localName","ref","style","className"]),St=new WeakMap,Ct=(t,e,r,o,i)=>{const s=i?.[e];void 0===s?(t[e]=r,null==r&&e in HTMLElement.prototype&&t.removeAttribute(e)):r!==o&&((t,e,r)=>{let o=St.get(t);void 0===o&&St.set(t,o=new Map);let i=o.get(e);void 0!==r?void 0===i?(o.set(e,i={handleEvent:r}),t.addEventListener(e,i)):i.handleEvent=r:void 0!==i&&(o.delete(e),t.removeEventListener(e,i))})(t,s,r)};var Ot=r(540),Pt=function(t,e,r,o){var i,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(n=(s<3?i(n):s>3?i(e,r,n):i(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Rt=class extends at{constructor(){super(...arguments),this.status=!1,this.text=ft,this.type="info"}onPureClose(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("onPureClose")),this.status=!1}connectedCallback(){super.connectedCallback(),setTimeout((()=>{this.status=!1}),2e4)}render(){return V`
        <div class="div ${this.status}" style="border-left: 3px solid #${function(t){switch(t){case"info":default:return"74C0FC";case"error":return"C10606";case"warning":return"FFD43B";case"success":return"3DEE44"}}(this.type)};">
            <div class="ico">${kt(this.type)}</div>
            <p>${this.text}</p>
            <div @click="${this.onPureClose}" class="close"><svg xmlns="http://www.w3.org/2000/svg" height="14" width="10.5" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#000000" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></div>
        </div>
        `}};Rt.styles=n`
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
    
  `,Pt([ut()],Rt.prototype,"status",void 0),Pt([ut()],Rt.prototype,"text",void 0),Pt([ut()],Rt.prototype,"type",void 0),Rt=Pt([lt("pure-alert")],Rt),(({react:t,tagName:e,elementClass:r,events:o,displayName:i})=>{const s=new Set(Object.keys(o??{})),n=t.forwardRef(((i,n)=>{const a=t.useRef(new Map),c=t.useRef(null),l={},d={};for(const[t,e]of Object.entries(i))Et.has(t)?l["className"===t?"class":t]=e:s.has(t)||t in r.prototype?d[t]=e:l[t]=e;return t.useLayoutEffect((()=>{if(null===c.current)return;const t=new Map;for(const e in d)Ct(c.current,e,i[e],a.current.get(e),o),a.current.delete(e),t.set(e,i[e]);for(const[t,e]of a.current)Ct(c.current,t,void 0,e,o);a.current=t})),t.useLayoutEffect((()=>{c.current?.removeAttribute("defer-hydration")}),[]),l.suppressHydrationWarning=!0,t.createElement(e,{...l,ref:t.useCallback((t=>{c.current=t,"function"==typeof n?n(t):null!==n&&(n.current=t)}),[n])})}));n.displayName=i??r.name})({tagName:"pure-alert",elementClass:Rt,react:Ot,events:{onPureClose:"onPureClose"}});var jt=function(t,e,r,o){var i,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(n=(s<3?i(n):s>3?i(e,r,n):i(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let zt=class extends at{constructor(){super(...arguments),this.size="medium",this.text=ft,this.type="info"}render(){return V`
        <div class="div" style="background-color: #${function(t){switch(t){case"info":default:return"7FB3D5";case"error":return"FF9AA2";case"warning":return"FFD67F";case"success":return"9DE6C4"}}(this.type)};">
            <p style="color: #${function(t){switch(t){case"info":default:return"1A3B4C";case"error":return"801A00";case"warning":return"7F4E00";case"success":return"16504B"}}(this.type)};" class="${this.size}">${this.text}</p>
        </div>
        `}};zt.styles=n`
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
  `,jt([ut()],zt.prototype,"size",void 0),jt([ut()],zt.prototype,"text",void 0),jt([ut()],zt.prototype,"type",void 0),zt=jt([lt("pure-tag")],zt);var Ft=function(t,e,r,o){var i,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(n=(s<3?i(n):s>3?i(e,r,n):i(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Tt=class extends at{constructor(){super(...arguments),this.status=!1,this.text=ft,this.desc=ft,this.showButton=!1,this.btnText=ft,this.type="info"}handleClick(){this.status=!1}handleClose(){this.status=!1}render(){return V`
        <div class="div ${this.status}"></div>
        <div class="container ${this.status}">
            <div class="modal">
                <div class="modal__header">
                    ${kt(this.type)}
                    <svg @click="${this.handleClose}" class="modal__icon" xmlns="http://www.w3.org/2000/svg" height="20" width="15" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#000000" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </div>
                <h2>${this.text}</h2>
                <p>${this.desc}</p>
                <div class="modal__footer">
                ${this.showButton?V`<pure-button @click="${this.handleClick}" text="${this.btnText}"></pure-button>`:V``}
                </div>
            </div>
        </div> 
        `}};Tt.styles=n`
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
  `,Ft([ut({type:Boolean})],Tt.prototype,"status",void 0),Ft([ut({type:String})],Tt.prototype,"text",void 0),Ft([ut({type:String})],Tt.prototype,"desc",void 0),Ft([ut({type:Boolean})],Tt.prototype,"showButton",void 0),Ft([ut({type:String})],Tt.prototype,"btnText",void 0),Ft([ut()],Tt.prototype,"type",void 0),Tt=Ft([lt("pure-modal")],Tt);var Ut=function(t,e,r,o){var i,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(n=(s<3?i(n):s>3?i(e,r,n):i(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Mt=class extends at{constructor(){super(...arguments),this.navItems="",this.logoUrl="",this.logoText="Pure",this.isActive=!1}handleClick(){this.isActive=!this.isActive}handleItems(t){var e,r;const o=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(`#${t}--a`);null==o||o.classList.toggle("active");const i=null===(r=this.shadowRoot)||void 0===r?void 0:r.querySelector(`#${t}`);null==i||i.classList.toggle("active")}render(){const t=JSON.parse(this.navItems);return V`
        <button @click="${this.handleClick}" class="menu"><div class="menu-icon"></div></button>
        <nav role="navigation" aria-label="Main" class="${this.isActive?"active":""}">
        <div class="container">
            <div>
                <div class="d-flex" style="margin-left: .5rem;">
                    ${this.logoUrl?V`<img src="${this.logoUrl}" alt="Logo">`:""}
                    <p>${this.logoText}</p>
                </div>
                <button @click="${this.handleClick}" class="${this.isActive?"":"active"} btn-close">
                    <div class="close-icon d-flex"></div>
                </button>
            </div>
            <ul>
                ${t.map((t=>V`
                        <li class="d-flex--colum ${"true"===t.active?"active":""}">
                            ${void 0!==t.subItems?V`
                                <a id="${t.text}--a" class="item--a" @click="${()=>{this.handleItems(t.text)}}">${t.text}</a>
                                <ul id="${t.text}" class="subItems">
                                ${t.subItems.map((t=>V` 
                                    <li><a href="${t.url}" @click="${this.handleClick}">${t.text}</a></li>
                                `))}
                                </ul>`:V`<a href="${t.url}" @click="${this.handleClick}">${t.text}</a>`}
                        </li>`))}
            </ul>
        </div>
        </nav>
        `}};Mt.styles=n`
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
  `,Ut([ut()],Mt.prototype,"navItems",void 0),Ut([ut()],Mt.prototype,"logoUrl",void 0),Ut([ut()],Mt.prototype,"logoText",void 0),Ut([ut()],Mt.prototype,"isActive",void 0),Mt=Ut([lt("pure-navbar")],Mt);var Ht=function(t,e,r,o){var i,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(n=(s<3?i(n):s>3?i(e,r,n):i(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Nt=class extends at{constructor(){super(...arguments),this.content=""}render(){const t=JSON.parse(this.content);return V`
            <table>
            <thead>
            <tr>
                ${t.columns.map((t=>V` <th>${t.header}</th>`))}
            </tr>
            </thead>
            <tbody>
            ${t.rows.map((t=>V`
                <tr>
                    ${Object.values(t).map((t=>V`<td>${t}</td>`))}
                </tr>
            `))}
            </tbody>
        </table>
    `}};Nt.styles=n`
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
  `,Ht([ut()],Nt.prototype,"content",void 0),Nt=Ht([lt("pure-table")],Nt);var Lt=function(t,e,r,o){var i,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(n=(s<3?i(n):s>3?i(e,r,n):i(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Dt=class extends at{constructor(){super(...arguments),this.size="medium",this.text=ft}render(){return V`
        <div class="container ${this.size}">
            <input type="text" id="copyText" value=${this.text} readonly>
            <button @click=${this.copyText}>
            <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512"><path fill="#ffffff" d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"/></svg>
            </button>
        </div>
    `}copyText(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("copyText");e&&(e.select(),document.execCommand("copy"),this.dispatchEvent(new CustomEvent("onPureCopy",{detail:{textCopy:e.value}})))}};Dt.styles=n`
    .container {
        text-align: center;
        display: flex;
        width:100%;
      }
      
      input {
        color: var(--pure-input-color, #000);
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
      
  `,Lt([ut()],Dt.prototype,"size",void 0),Lt([ut()],Dt.prototype,"text",void 0),Dt=Lt([lt("pure-copy")],Dt);var It=function(t,e,r,o){var i,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(n=(s<3?i(n):s>3?i(e,r,n):i(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Bt=class extends at{constructor(){super(...arguments),this.options="",this.optionsTitle="",this.optionsSubtitle="",this.optionsFooter="",this.position="left",this.isOpen=!1}handleClick(){this.isOpen=!this.isOpen}render(){const t=JSON.parse(this.options),e=JSON.parse(this.optionsFooter);return V`
          <div @click="${this.handleClick}" class="toggle">
              <slot></slot>
          </div>
          ${this.isOpen?V`
              <div class="container" id="container" style="${"left"===this.position?"transform: 0; ":"transform: translateX(calc(-100% + 1.5rem));"}">
              ${this.optionsTitle?V`
                <div class="container__header">
                    <p class="title">${this.optionsTitle}</p>
                    ${this.optionsSubtitle?V`<p class="subtitle">${this.optionsSubtitle}</p>`:""}
                </div>`:""}

                <div class="container__options">
                ${t.map((t=>V`
                        <a href="${t.to}">${t.text}</a>
                    `))}
                </div>

                ${this.optionsFooter?V`
                    <div class="container__footer">
                    ${!1===e.to?V`<p>${e.text}</p>`:V`<a href="${e.to}">${e.text}</a>`}
                    
                    </div>`:""}
                </div>
              </div>
            `:""}
        `}};Bt.styles=n`
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
    `,It([ut()],Bt.prototype,"options",void 0),It([ut()],Bt.prototype,"optionsTitle",void 0),It([ut()],Bt.prototype,"optionsSubtitle",void 0),It([ut()],Bt.prototype,"optionsFooter",void 0),It([ut()],Bt.prototype,"position",void 0),It([ht()],Bt.prototype,"isOpen",void 0),Bt=It([lt("pure-expand")],Bt)})()})();