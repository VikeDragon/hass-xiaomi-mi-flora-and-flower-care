function t(t,e,s,i){var r,n=arguments.length,o=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,s,o):r(e,s))||o);return n>3&&o&&Object.defineProperty(e,s,o),o}const e=new WeakMap,s=t=>"function"==typeof t&&e.has(t),i=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,r=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},n={},o={},a=`{{lit-${String(Math.random()).slice(2)}}}`,l=`\x3c!--${a}--\x3e`,d=new RegExp(`${a}|${l}`),c="$lit$";class h{constructor(t,e){this.parts=[],this.element=e;const s=[],i=[],r=document.createTreeWalker(e.content,133,null,!1);let n=0,o=-1,l=0;const{strings:h,values:{length:u}}=t;for(;l<u;){const t=r.nextNode();if(null!==t){if(o++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let i=0;for(let t=0;t<s;t++)p(e[t].name,c)&&i++;for(;i-- >0;){const e=h[l],s=f.exec(e)[2],i=s.toLowerCase()+c,r=t.getAttribute(i);t.removeAttribute(i);const n=r.split(d);this.parts.push({type:"attribute",index:o,name:s,strings:n}),l+=n.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),r.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(a)>=0){const i=t.parentNode,r=e.split(d),n=r.length-1;for(let e=0;e<n;e++){let s,n=r[e];if(""===n)s=m();else{const t=f.exec(n);null!==t&&p(t[2],c)&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-c.length)+t[3]),s=document.createTextNode(n)}i.insertBefore(s,t),this.parts.push({type:"node",index:++o})}""===r[n]?(i.insertBefore(m(),t),s.push(t)):t.data=r[n],l+=n}}else if(8===t.nodeType)if(t.data===a){const e=t.parentNode;null!==t.previousSibling&&o!==n||(o++,e.insertBefore(m(),t)),n=o,this.parts.push({type:"node",index:o}),null===t.nextSibling?t.data="":(s.push(t),o--),l++}else{let e=-1;for(;-1!==(e=t.data.indexOf(a,e+1));)this.parts.push({type:"node",index:-1}),l++}}else r.currentNode=i.pop()}for(const t of s)t.parentNode.removeChild(t)}}const p=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},u=t=>-1!==t.index,m=()=>document.createComment(""),f=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class _{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,r=document.createTreeWalker(t,133,null,!1);let n,o=0,a=0,l=r.nextNode();for(;o<s.length;)if(n=s[o],u(n)){for(;a<n.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),r.currentNode=l.content),null===(l=r.nextNode())&&(r.currentNode=e.pop(),l=r.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,n.name,n.strings,this.options));o++}else this.__parts.push(void 0),o++;return i&&(document.adoptNode(t),customElements.upgrade(t)),t}}const g=` ${a} `;class b{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let i=0;i<t;i++){const t=this.strings[i],r=t.lastIndexOf("\x3c!--");s=(r>-1||s)&&-1===t.indexOf("--\x3e",r+1);const n=f.exec(t);e+=null===n?t+(s?g:l):t.substr(0,n.index)+n[1]+n[2]+c+n[3]+a}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}const y=t=>null===t||!("object"==typeof t||"function"==typeof t),v=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class S{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new x(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let i=0;i<e;i++){s+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(y(t)||!v(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class x{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===n||y(t)&&t===this.value||(this.value=t,s(t)||(this.committer.dirty=!0))}commit(){for(;s(this.value);){const t=this.value;this.value=n,t(this)}this.value!==n&&this.committer.commit()}}class w{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(m()),this.endNode=t.appendChild(m())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=m()),t.__insert(this.endNode=m())}insertAfterPart(t){t.__insert(this.startNode=m()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;s(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=n,t(this)}const t=this.__pendingValue;t!==n&&(y(t)?t!==this.value&&this.__commitText(t):t instanceof b?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):v(t)?this.__commitIterable(t):t===o?(this.value=o,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof _&&this.value.template===e)this.value.update(t.values);else{const s=new _(e,t.processor,this.options),i=s._clone();s.update(t.values),this.__commitNode(i),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const r of t)void 0===(s=e[i])&&(s=new w(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(r),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){r(this.startNode.parentNode,t.nextSibling,this.endNode)}}class C{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;s(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=n,t(this)}if(this.__pendingValue===n)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=n}}class T extends S{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new P(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class P extends x{}let N=!1;try{const t={get capture(){return N=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class E{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this.__pendingValue=t}commit(){for(;s(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=n,t(this)}if(this.__pendingValue===n)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),r=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=A(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=n}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const A=t=>t&&(N?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);const k=new class{handleAttributeExpressions(t,e,s,i){const r=e[0];return"."===r?new T(t,e.slice(1),s).parts:"@"===r?[new E(t,e.slice(1),i.eventContext)]:"?"===r?[new C(t,e.slice(1),s)]:new S(t,e,s).parts}handleTextExpression(t){return new w(t)}};function R(t){let e=$.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},$.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(a);return void 0===(s=e.keyString.get(i))&&(s=new h(t,t.getTemplateElement()),e.keyString.set(i,s)),e.stringsArray.set(t.strings,s),s}const $=new Map,V=new WeakMap;(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const O=(t,...e)=>new b(t,e,"html",k),U=133;function M(t,e){const{element:{content:s},parts:i}=t,r=document.createTreeWalker(s,U,null,!1);let n=z(i),o=i[n],a=-1,l=0;const d=[];let c=null;for(;r.nextNode();){a++;const t=r.currentNode;for(t.previousSibling===c&&(c=null),e.has(t)&&(d.push(t),null===c&&(c=t)),null!==c&&l++;void 0!==o&&o.index===a;)o.index=null!==c?-1:o.index-l,o=i[n=z(i,n)]}d.forEach(t=>t.parentNode.removeChild(t))}const I=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,U,null,!1);for(;s.nextNode();)e++;return e},z=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(u(e))return s}return-1};const j=(t,e)=>`${t}--${e}`;let q=!0;void 0===window.ShadyCSS?q=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),q=!1);const B=t=>e=>{const s=j(e.type,t);let i=$.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},$.set(s,i));let r=i.stringsArray.get(e.strings);if(void 0!==r)return r;const n=e.strings.join(a);if(void 0===(r=i.keyString.get(n))){const s=e.getTemplateElement();q&&window.ShadyCSS.prepareTemplateDom(s,t),r=new h(e,s),i.keyString.set(n,r)}return i.stringsArray.set(e.strings,r),r},H=["html","svg"],F=new Set,L=(t,e,s)=>{F.add(t);const i=s?s.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:n}=r;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(i,t);const o=document.createElement("style");for(let t=0;t<n;t++){const e=r[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{H.forEach(e=>{const s=$.get(j(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),M(t,s)})})})(t);const a=i.content;s?function(t,e,s=null){const{element:{content:i},parts:r}=t;if(null==s)return void i.appendChild(e);const n=document.createTreeWalker(i,U,null,!1);let o=z(r),a=0,l=-1;for(;n.nextNode();)for(l++,n.currentNode===s&&(a=I(e),s.parentNode.insertBefore(e,s));-1!==o&&r[o].index===l;){if(a>0){for(;-1!==o;)r[o].index+=a,o=z(r,o);return}o=z(r,o)}}(s,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(s){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),M(s,t)}};window.JSCompiler_renameProperty=((t,e)=>t);const W={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},D=(t,e)=>e!==t&&(e==e||t==t),J={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:D},Y=Promise.resolve(!0),G=1,K=4,Q=8,X=16,Z=32,tt="finalized";class et extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=Y,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const i=this._attributeNameForProperty(s,e);void 0!==i&&(this._attributeToPropertyMap.set(i,s),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=J){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[s]},set(e){const i=this[t];this[s]=e,this._requestUpdate(t,i)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(tt)||t.finalize(),this[tt]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=D){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,i=e.converter||W,r="function"==typeof i?i:i.fromAttribute;return r?r(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,i=e.converter;return(i&&i.toAttribute||W.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|Z,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=J){const i=this.constructor,r=i._attributeNameForProperty(t,s);if(void 0!==r){const t=i._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=this._updateState|Q,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=this._updateState&~Q}}_attributeToProperty(t,e){if(this._updateState&Q)return;const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s._classProperties.get(i)||J;this._updateState=this._updateState|X,this[i]=s._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~X}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const i=this.constructor,r=i._classProperties.get(t)||J;i._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==r.reflect||this._updateState&X||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r))):s=!1}!this._hasRequestedUpdate&&s&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|K;const s=this._updatePromise;this._updatePromise=new Promise((s,i)=>{t=s,e=i});try{await s}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&Z}get _hasRequestedUpdate(){return this._updateState&K}get hasUpdated(){return this._updateState&G}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{(t=this.shouldUpdate(e))&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(this._updateState&G||(this._updateState=this._updateState|G,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~K}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}et[tt]=!0;const st=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}}:Object.assign({},e,{finisher(s){s.createProperty(e.key,t)}}),it=(t,e,s)=>{e.constructor.createProperty(s,t)};function rt(t){return(e,s)=>void 0!==s?it(t,e,s):st(t,e)}const nt="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ot=Symbol();class at{constructor(t,e){if(e!==ot)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(nt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const lt=(t,...e)=>{const s=e.reduce((e,s,i)=>e+(t=>{if(t instanceof at)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[i+1],t[0]);return new at(s,ot)};(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const dt=t=>t.flat?t.flat(1/0):function t(e,s=[]){for(let i=0,r=e.length;i<r;i++){const r=e[i];Array.isArray(r)?t(r,s):s.push(r)}return s}(t);class ct extends et{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){dt(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?nt?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof b&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}ct.finalized=!0,ct.render=((t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const i=s.scopeName,n=V.has(e),o=q&&11===e.nodeType&&!!e.host,a=o&&!F.has(i),l=a?document.createDocumentFragment():e;if(((t,e,s)=>{let i=V.get(e);void 0===i&&(r(e,e.firstChild),V.set(e,i=new w(Object.assign({templateFactory:R},s))),i.appendInto(e)),i.setValue(t),i.commit()})(t,l,Object.assign({templateFactory:B(i)},s)),a){const t=V.get(l);V.delete(l);const s=t.value instanceof _?t.value.template:void 0;L(i,l,s),r(e,e.firstChild),e.appendChild(l),V.set(e,t)}!n&&o&&window.ShadyCSS.styleElement(e.host)});let ht=lt`rgb(14, 171, 56)`;const pt=lt`
    ha-card {
        padding: 24px 16px 16px 16px;
        background-repeat: no-repeat;
        background-size: 100% 100% !important;
    }
    
    .banner {
        display: flex;
        align-items: flex-end;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        padding-top: 12px;
        
        background-color: var(--banner-background);
        border-radius: 3px;
    }
    
    .has-plant-image .banner {
        padding-top: 30%;
    }
    
    .header {
        @apply --paper-font-headline;
        line-height: 40px;
        padding: 8px 16px;
        font-weight: 500;
        font-size: 125%;
    }
    
    .has-plant-image .header {
        font-size: 16px;
        font-weight: 500;
        line-height: 16px;
        padding: 16px;
        color: white;
        width: 100%;
        background: rgba(0, 0, 0, var(--dark-secondary-opacity));
    }
    
    .content {
        display: flex;
        justify-content: space-between;
        padding: 16px 32px 24px 32px;
        background-color: var(--content-background);
        border-radius: 3px;
    }
    
    .has-plant-image .content {
        padding-bottom: 16px;
    }
    
    ha-icon {
        color: var(--paper-item-icon-color);
        margin-bottom: 8px;
    }
    
    .attributes {
        cursor: pointer;
    }
    
    .attributes div {
        text-align: center;
    }
    
    .problem {
        color: var(--google-red-500);
        font-weight: bold;
    }
    
    .uom {
        color: var(--secondary-text-color);
    }
    
    .table-tr-td-border-bottom {
        border-bottom-color: var(--table-tr-td-border-bottom);
        border-bottom: solid 1px;
    }
   
/* CUSTOM */
   
    table {
        width: 100%;
    }   
     
    table thead {
    
    }
    
    table tr {
      border-top: 1px solid black; 
    }
    
    table tr:first-child {
      border-top: 0;
    }
    
    table tr:first-child {
      border-left: 0; border-right: 0;
    }
    
    table tr:last-child {
      border-bottom: 0;
    }
    
    table tr:last-child{
      border-right: 0;
    }

    .fcasttooltip {
        position: relative;
        display: inline-block;
    }
    
    .fcasttooltip .fcasttooltiptext {
        visibility: hidden;
        
        width: ${400}px;
        background-color: ${lt`rgba(50,50,50,0.85)`};
        color: ${lt`#fff`};
        text-align: center; 
        border-radius: 6px;
        border-style: solid;
        border-color: ${ht};
        border-width: ${1}px;
        padding: 5px 0;
        /* Position the tooltip */
        position: absolute;
        z-index: 1;
        top: 100%;
        left: 0%; 
        margin-left: ${-325}px;
    }
      
    .fcasttooltip .fcasttooltiptext:after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -${5}px;
        border-width: ${5}px;
        border-style: solid;
        border-color: ${ht} transparent transparent transparent;
    }
      
    .fcasttooltip:hover .fcasttooltiptext {
        visibility: ${lt`visible`};
    }
`;let ut=class extends ct{constructor(){super(...arguments),this.MOINSTURE="moisture",this.CONDUCTIVITY="conductivity",this.BRIGHTNESS="brightness",this.TEMPERATURE="temperature",this.BATTERY="battery"}getCardSize(){return 1}static get styles(){return pt}setConfig(t){if(console.log({flora_care_card_config:t}),!t)throw new Error("Invalid configuration");this._config=t}render(){return this._render()}_render(){if(null==this.hass.states[this._config.entity])throw new Error("entity is required");return this._floraCare=this.hass.states[this._config.entity],this._floraRanges=this._floraCare.attributes.ranges,O`
      <ha-card style="background-image:url(${this._floraCare.attributes.image});background-repeat: no-repeat;background-size: auto !important;">
        <div class='banner'>${this.computeHeader()}
        </div>
        <div class='banner' style="padding-left: 16px;padding-right: 16px;">${this.computeMaintenanceToolTips(this._floraCare.attributes.maintenance)}</div>
        <div class='content'>
            ${this.computeContent()}
        </div>
      </ha-card>
        `}computeContent(){return O`
            ${this.computeContentItem(this.getSensor(this._floraCare.attributes.sensors[this.MOINSTURE]),this._floraRanges.min_soil_moist,this._floraRanges.max_soil_moist,this.computeAttributeClass(this._floraCare.attributes.problem,this.MOINSTURE))}
            ${this.computeContentItem(this.getSensor(this._floraCare.attributes.sensors[this.CONDUCTIVITY]),this._floraRanges.min_soil_ec,this._floraRanges.max_soil_ec,this.computeAttributeClass(this._floraCare.attributes.problem,this.CONDUCTIVITY))}
            ${this.computeContentItem(this.getSensor(this._floraCare.attributes.sensors[this.BRIGHTNESS]),this._floraRanges.min_light_lux,this._floraRanges.max_light_lux,this.computeAttributeClass(this._floraCare.attributes.problem,this.BRIGHTNESS))}
            ${this.computeContentItem(this.getSensor(this._floraCare.attributes.sensors[this.TEMPERATURE]),this._floraRanges.min_temp,this._floraRanges.max_temp,this.computeAttributeClass(this._floraCare.attributes.problem,this.TEMPERATURE))}
        `}computeTitle(){return this._config&&this._config.name}computeContentItem(t,e,s,i){return void 0!==t?O`
             <div class="attributes" on-click="attributeClicked">
                <div>
                    <ha-icon icon="${t.attributes.icon}"></ha-icon>
                </div>
                <div class="${i}">
                    ${t.state} ${t.attributes.unit_of_measurement}
                </div>
                <div class="uom">
                ${null!==e&&null!==s?O`${e}-${s}`:O``}
                </div>            
            </div>           
        `:O`
            `}computeMaintenanceToolTips(t){return O`
            <table class="s-table-lite">
                <thead>
                    <tr><td colspan="2" class="table-tr-td-border-bottom" style="text-align: center;font-weight: 500;">Maintenance</td></tr>
                </thead>
                <tbody> 
                    ${Object.keys(t).map(e=>O`
                        <tr>
                            <td valign="top" style="width:1%;text-align: left;line-height: 1em;font-weight: 500;font-size: 85%;">${this.capitalize(e)}</td>
                            <td valign="top" style="text-align: left;line-height: 1em;font-weight: normal;font-size: 85%;">${t[e]}</td>
                        </tr>    
                    `)}  
                </tbody>
            </table>      
        `}computeInfoToolTips(t){return O`
            <table is="s-table-lite">
                <tbody>
                    ${Object.keys(t).filter(t=>"floral_language"!=t).map(e=>O`
                        
                        <tr>
                            <td valign="top" style="width:1%;text-align: left;">${this.capitalize(e)}</td>
                            <td valign="top" style="text-align: left;">${t[e]}</td>
                        </tr>    
                    `)}                    
                </tbody>
            </table>      
        `}computeHeader(){return O`
            <table is="s-table-lite">
                <tbody>
                    <tr>
                        <td valign="top" class="header" style="padding-bottom: 0;">${this.computeTitle()}</td>
                        <td>
                            <div class="attributes">
                                <div class="fcasttooltip">
                                    <ha-icon icon="mdi:information-variant"></ha-icon>
                                    <div class="fcasttooltiptext">${this.computeInfoToolTips(this._floraCare.attributes.info)}</div>
                                </div>
                                <div class=""></div>
                                <div class="uom">&nbsp;</div>            
                            </div>                            
                        </td>  
                        <td>
                            <div class="attributes">
                                <div class="fcasttooltip">
                                    <ha-icon icon="mdi:lifebuoy"></ha-icon>
                                    <div class="fcasttooltiptext">${this.computeMaintenanceToolTips(this._floraCare.attributes.maintenance)}</div>
                                </div>
                                <div class=""></div>
                                <div class="uom">&nbsp;</div>            
                            </div>                            
                        </td>                        
                        <td>
                        ${this.computeContentItem(this.getSensor(this._floraCare.attributes.sensors[this.BATTERY]),null,null,this.computeAttributeClass(this._floraCare.attributes.problem,this.BATTERY))}  
                        </td>
                    </tr>
                    <tr>
                        <td valign="top" colspan="5" class="header table-tr-td-border-bottom" style="text-align: right;padding-right: 8px;padding-top: 6;line-height: 1em;font-weight: normal;font-size: 105%;">${this._config.zone_name}</td>
                    </tr>
                </tbody>
            </table>           
        `}computeAttributeClass(t,e){return-1===t.indexOf(e)?"":"problem"}getSensor(t){return this.hass.states[t]}capitalize(t){return t.charAt(0).toUpperCase()+t.slice(1)}};t([rt()],ut.prototype,"hass",void 0),t([rt()],ut.prototype,"_config",void 0),t([rt()],ut.prototype,"_floraCare",void 0),t([rt()],ut.prototype,"_floraRanges",void 0),ut=t([(t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:s,elements:i}=e;return{kind:s,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e))("xiaomi-mi-flora-and-flower-care-card")],ut);
