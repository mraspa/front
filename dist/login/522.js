"use strict";(self.webpackJsonplogin=self.webpackJsonplogin||[]).push([[522],{6328:(N,E,u)=>{u.d(E,{b:()=>g});var s=u(9769),l=u(4674);function g(m,f){return(0,l.m)(f)?(0,s.z)(m,f,1):(0,s.z)(m,1)}},4716:(N,E,u)=>{u.d(E,{x:()=>l});var s=u(9360);function l(g){return(0,s.e)((m,f)=>{try{m.subscribe(f)}finally{f.add(g)}})}},7398:(N,E,u)=>{u.d(E,{U:()=>g});var s=u(9360),l=u(8251);function g(m,f){return(0,s.e)((h,p)=>{let y=0;h.subscribe((0,l.x)(p,_=>{p.next(m.call(f,_,y++))}))})}},564:(N,E,u)=>{u.d(E,{p:()=>m});var s=u(4829),l=u(7103),g=u(8251);function m(f,h,p,y,_,D,M,C){const T=[];let w=0,U=0,b=!1;const P=()=>{b&&!T.length&&!w&&h.complete()},L=O=>w<y?H(O):T.push(O),H=O=>{D&&h.next(O),w++;let k=!1;(0,s.Xf)(p(O,U++)).subscribe((0,g.x)(h,S=>{_?.(S),D?L(S):h.next(S)},()=>{k=!0},void 0,()=>{if(k)try{for(w--;T.length&&w<y;){const S=T.shift();M?(0,l.f)(h,M,()=>H(S)):H(S)}P()}catch(S){h.error(S)}}))};return f.subscribe((0,g.x)(h,L,()=>{b=!0,P()})),()=>{C?.()}}},9769:(N,E,u)=>{u.d(E,{z:()=>h});var s=u(7398),l=u(4829),g=u(9360),m=u(564),f=u(4674);function h(p,y,_=1/0){return(0,f.m)(y)?h((D,M)=>(0,s.U)((C,T)=>y(D,C,M,T))((0,l.Xf)(p(D,M))),_):("number"==typeof y&&(_=y),(0,g.e)((D,M)=>(0,m.p)(D,M,p,_)))}},7103:(N,E,u)=>{function s(l,g,m,f=0,h=!1){const p=g.schedule(function(){m(),h?l.add(this.schedule(null,f)):this.unsubscribe()},f);if(l.add(p),!h)return p}u.d(E,{f:()=>s})},6593:(N,E,u)=>{u.d(E,{Dx:()=>X,b2:()=>he,q6:()=>de,se:()=>x});var s=u(4004),l=u(3574);class g extends l.\u0275DomAdapter{constructor(){super(...arguments),this.supportsDOMEvents=!0}}class m extends g{static makeCurrent(){(0,l.\u0275setRootDomAdapter)(new m)}onAndCancel(n,e,t){return n.addEventListener(e,t),()=>{n.removeEventListener(e,t)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.parentNode&&n.parentNode.removeChild(n)}createElement(n,e){return(e=e||this.getDefaultDocument()).createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return"window"===e?window:"document"===e?n:"body"===e?n.body:null}getBaseHref(n){const e=function h(){return f=f||document.querySelector("base"),f?f.getAttribute("href"):null}();return null==e?null:function y(r){p=p||document.createElement("a"),p.setAttribute("href",r);const n=p.pathname;return"/"===n.charAt(0)?n:`/${n}`}(e)}resetBaseElement(){f=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return(0,l.\u0275parseCookieValue)(document.cookie,n)}}let p,f=null,D=(()=>{class r{build(){return new XMLHttpRequest}static#e=this.\u0275fac=function(t){return new(t||r)};static#t=this.\u0275prov=s.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac})}return r})();const M=new s.InjectionToken("EventManagerPlugins");let C=(()=>{class r{constructor(e,t){this._zone=t,this._eventNameToPlugin=new Map,e.forEach(o=>{o.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,t,o){return this._findPluginFor(t).addEventListener(e,t,o)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(i=>i.supports(e)),!t)throw new s.\u0275RuntimeError(5101,!1);return this._eventNameToPlugin.set(e,t),t}static#e=this.\u0275fac=function(t){return new(t||r)(s.\u0275\u0275inject(M),s.\u0275\u0275inject(s.NgZone))};static#t=this.\u0275prov=s.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac})}return r})();class T{constructor(n){this._doc=n}}const w="ng-app-id";let U=(()=>{class r{constructor(e,t,o,i={}){this.doc=e,this.appId=t,this.nonce=o,this.platformId=i,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=(0,l.isPlatformServer)(i),this.resetHostNodes()}addStyles(e){for(const t of e)1===this.changeUsageCount(t,1)&&this.onStyleAdded(t)}removeStyles(e){for(const t of e)this.changeUsageCount(t,-1)<=0&&this.onStyleRemoved(t)}ngOnDestroy(){const e=this.styleNodesInDOM;e&&(e.forEach(t=>t.remove()),e.clear());for(const t of this.getAllStyles())this.onStyleRemoved(t);this.resetHostNodes()}addHost(e){this.hostNodes.add(e);for(const t of this.getAllStyles())this.addStyleToHost(e,t)}removeHost(e){this.hostNodes.delete(e)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(e){for(const t of this.hostNodes)this.addStyleToHost(t,e)}onStyleRemoved(e){const t=this.styleRef;t.get(e)?.elements?.forEach(o=>o.remove()),t.delete(e)}collectServerRenderedStyles(){const e=this.doc.head?.querySelectorAll(`style[${w}="${this.appId}"]`);if(e?.length){const t=new Map;return e.forEach(o=>{null!=o.textContent&&t.set(o.textContent,o)}),t}return null}changeUsageCount(e,t){const o=this.styleRef;if(o.has(e)){const i=o.get(e);return i.usage+=t,i.usage}return o.set(e,{usage:t,elements:[]}),t}getStyleElement(e,t){const o=this.styleNodesInDOM,i=o?.get(t);if(i?.parentNode===e)return o.delete(t),i.removeAttribute(w),i;{const a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=t,this.platformIsServer&&a.setAttribute(w,this.appId),a}}addStyleToHost(e,t){const o=this.getStyleElement(e,t);e.appendChild(o);const i=this.styleRef,a=i.get(t)?.elements;a?a.push(o):i.set(t,{elements:[o],usage:1})}resetHostNodes(){const e=this.hostNodes;e.clear(),e.add(this.doc.head)}static#e=this.\u0275fac=function(t){return new(t||r)(s.\u0275\u0275inject(l.DOCUMENT),s.\u0275\u0275inject(s.APP_ID),s.\u0275\u0275inject(s.CSP_NONCE,8),s.\u0275\u0275inject(s.PLATFORM_ID))};static#t=this.\u0275prov=s.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac})}return r})();const b={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},P=/%COMP%/g,L="%COMP%",H=`_nghost-${L}`,O=`_ngcontent-${L}`,S=new s.InjectionToken("RemoveStylesOnCompDestroy",{providedIn:"root",factory:()=>!1});function z(r,n){return n.map(e=>e.replace(P,r))}let x=(()=>{class r{constructor(e,t,o,i,a,d,c,v=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=o,this.removeStylesOnCompDestroy=i,this.doc=a,this.platformId=d,this.ngZone=c,this.nonce=v,this.rendererByCompId=new Map,this.platformIsServer=(0,l.isPlatformServer)(d),this.defaultRenderer=new j(e,a,c,this.platformIsServer)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;this.platformIsServer&&t.encapsulation===s.ViewEncapsulation.ShadowDom&&(t={...t,encapsulation:s.ViewEncapsulation.Emulated});const o=this.getOrCreateRenderer(e,t);return o instanceof V?o.applyToHost(e):o instanceof B&&o.applyStyles(),o}getOrCreateRenderer(e,t){const o=this.rendererByCompId;let i=o.get(t.id);if(!i){const a=this.doc,d=this.ngZone,c=this.eventManager,v=this.sharedStylesHost,A=this.removeStylesOnCompDestroy,I=this.platformIsServer;switch(t.encapsulation){case s.ViewEncapsulation.Emulated:i=new V(c,v,t,this.appId,A,a,d,I);break;case s.ViewEncapsulation.ShadowDom:return new re(c,v,e,t,a,d,this.nonce,I);default:i=new B(c,v,t,A,a,d,I)}o.set(t.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}static#e=this.\u0275fac=function(t){return new(t||r)(s.\u0275\u0275inject(C),s.\u0275\u0275inject(U),s.\u0275\u0275inject(s.APP_ID),s.\u0275\u0275inject(S),s.\u0275\u0275inject(l.DOCUMENT),s.\u0275\u0275inject(s.PLATFORM_ID),s.\u0275\u0275inject(s.NgZone),s.\u0275\u0275inject(s.CSP_NONCE))};static#t=this.\u0275prov=s.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac})}return r})();class j{constructor(n,e,t,o){this.eventManager=n,this.doc=e,this.ngZone=t,this.platformIsServer=o,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(n,e){return e?this.doc.createElementNS(b[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(G(n)?n.content:n).appendChild(e)}insertBefore(n,e,t){n&&(G(n)?n.content:n).insertBefore(e,t)}removeChild(n,e){n&&n.removeChild(e)}selectRootElement(n,e){let t="string"==typeof n?this.doc.querySelector(n):n;if(!t)throw new s.\u0275RuntimeError(-5104,!1);return e||(t.textContent=""),t}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,t,o){if(o){e=o+":"+e;const i=b[o];i?n.setAttributeNS(i,e,t):n.setAttribute(e,t)}else n.setAttribute(e,t)}removeAttribute(n,e,t){if(t){const o=b[t];o?n.removeAttributeNS(o,e):n.removeAttribute(`${t}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,t,o){o&(s.RendererStyleFlags2.DashCase|s.RendererStyleFlags2.Important)?n.style.setProperty(e,t,o&s.RendererStyleFlags2.Important?"important":""):n.style[e]=t}removeStyle(n,e,t){t&s.RendererStyleFlags2.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,t){n[e]=t}setValue(n,e){n.nodeValue=e}listen(n,e,t){if("string"==typeof n&&!(n=(0,l.\u0275getDOM)().getGlobalEventTarget(this.doc,n)))throw new Error(`Unsupported event target ${n} for event ${e}`);return this.eventManager.addEventListener(n,e,this.decoratePreventDefault(t))}decoratePreventDefault(n){return e=>{if("__ngUnwrap__"===e)return n;!1===(this.platformIsServer?this.ngZone.runGuarded(()=>n(e)):n(e))&&e.preventDefault()}}}function G(r){return"TEMPLATE"===r.tagName&&void 0!==r.content}class re extends j{constructor(n,e,t,o,i,a,d,c){super(n,i,a,c),this.sharedStylesHost=e,this.hostEl=t,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const v=z(o.id,o.styles);for(const A of v){const I=document.createElement("style");d&&I.setAttribute("nonce",d),I.textContent=A,this.shadowRoot.appendChild(I)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,t){return super.insertBefore(this.nodeOrShadowRoot(n),e,t)}removeChild(n,e){return super.removeChild(this.nodeOrShadowRoot(n),e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}}class B extends j{constructor(n,e,t,o,i,a,d,c){super(n,i,a,d),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=o,this.styles=c?z(c,t.styles):t.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}}class V extends B{constructor(n,e,t,o,i,a,d,c){const v=o+"-"+t.id;super(n,e,t,i,a,d,c,v),this.contentAttr=function ee(r){return O.replace(P,r)}(v),this.hostAttr=function te(r){return H.replace(P,r)}(v)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){const t=super.createElement(n,e);return super.setAttribute(t,this.contentAttr,""),t}}let oe=(()=>{class r extends T{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,o){return e.addEventListener(t,o,!1),()=>this.removeEventListener(e,t,o)}removeEventListener(e,t,o){return e.removeEventListener(t,o)}static#e=this.\u0275fac=function(t){return new(t||r)(s.\u0275\u0275inject(l.DOCUMENT))};static#t=this.\u0275prov=s.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac})}return r})();const K=["alt","control","meta","shift"],se={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},ie={alt:r=>r.altKey,control:r=>r.ctrlKey,meta:r=>r.metaKey,shift:r=>r.shiftKey};let ae=(()=>{class r extends T{constructor(e){super(e)}supports(e){return null!=r.parseEventName(e)}addEventListener(e,t,o){const i=r.parseEventName(t),a=r.eventCallback(i.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,l.\u0275getDOM)().onAndCancel(e,i.domEventName,a))}static parseEventName(e){const t=e.toLowerCase().split("."),o=t.shift();if(0===t.length||"keydown"!==o&&"keyup"!==o)return null;const i=r._normalizeKey(t.pop());let a="",d=t.indexOf("code");if(d>-1&&(t.splice(d,1),a="code."),K.forEach(v=>{const A=t.indexOf(v);A>-1&&(t.splice(A,1),a+=v+".")}),a+=i,0!=t.length||0===i.length)return null;const c={};return c.domEventName=o,c.fullKey=a,c}static matchEventFullKeyCode(e,t){let o=se[e.key]||e.key,i="";return t.indexOf("code.")>-1&&(o=e.code,i="code."),!(null==o||!o)&&(o=o.toLowerCase()," "===o?o="space":"."===o&&(o="dot"),K.forEach(a=>{a!==o&&(0,ie[a])(e)&&(i+=a+".")}),i+=o,i===t)}static eventCallback(e,t,o){return i=>{r.matchEventFullKeyCode(i,e)&&o.runGuarded(()=>t(i))}}static _normalizeKey(e){return"esc"===e?"escape":e}static#e=this.\u0275fac=function(t){return new(t||r)(s.\u0275\u0275inject(l.DOCUMENT))};static#t=this.\u0275prov=s.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac})}return r})();const de=(0,s.createPlatformFactory)(s.platformCore,"browser",[{provide:s.PLATFORM_ID,useValue:l.\u0275PLATFORM_BROWSER_ID},{provide:s.PLATFORM_INITIALIZER,useValue:function le(){m.makeCurrent()},multi:!0},{provide:l.DOCUMENT,useFactory:function ce(){return(0,s.\u0275setDocument)(document),document},deps:[]}]),fe=new s.InjectionToken(""),Z=[{provide:s.\u0275TESTABILITY_GETTER,useClass:class _{addToWindow(n){s.\u0275global.getAngularTestability=(t,o=!0)=>{const i=n.findTestabilityInTree(t,o);if(null==i)throw new s.\u0275RuntimeError(5103,!1);return i},s.\u0275global.getAllAngularTestabilities=()=>n.getAllTestabilities(),s.\u0275global.getAllAngularRootElements=()=>n.getAllRootElements(),s.\u0275global.frameworkStabilizers||(s.\u0275global.frameworkStabilizers=[]),s.\u0275global.frameworkStabilizers.push(t=>{const o=s.\u0275global.getAllAngularTestabilities();let i=o.length,a=!1;const d=function(c){a=a||c,i--,0==i&&t(a)};o.forEach(c=>{c.whenStable(d)})})}findTestabilityInTree(n,e,t){return null==e?null:n.getTestability(e)??(t?(0,l.\u0275getDOM)().isShadowRoot(e)?this.findTestabilityInTree(n,e.host,!0):this.findTestabilityInTree(n,e.parentElement,!0):null)}},deps:[]},{provide:s.\u0275TESTABILITY,useClass:s.Testability,deps:[s.NgZone,s.TestabilityRegistry,s.\u0275TESTABILITY_GETTER]},{provide:s.Testability,useClass:s.Testability,deps:[s.NgZone,s.TestabilityRegistry,s.\u0275TESTABILITY_GETTER]}],Y=[{provide:s.\u0275INJECTOR_SCOPE,useValue:"root"},{provide:s.ErrorHandler,useFactory:function ue(){return new s.ErrorHandler},deps:[]},{provide:M,useClass:oe,multi:!0,deps:[l.DOCUMENT,s.NgZone,s.PLATFORM_ID]},{provide:M,useClass:ae,multi:!0,deps:[l.DOCUMENT]},x,U,C,{provide:s.RendererFactory2,useExisting:x},{provide:l.XhrFactory,useClass:D,deps:[]},[]];let he=(()=>{class r{constructor(e){}static withServerTransition(e){return{ngModule:r,providers:[{provide:s.APP_ID,useValue:e.appId}]}}static#e=this.\u0275fac=function(t){return new(t||r)(s.\u0275\u0275inject(fe,12))};static#t=this.\u0275mod=s.\u0275\u0275defineNgModule({type:r});static#n=this.\u0275inj=s.\u0275\u0275defineInjector({providers:[...Y,...Z],imports:[l.CommonModule,s.ApplicationModule]})}return r})(),X=(()=>{class r{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static#e=this.\u0275fac=function(t){return new(t||r)(s.\u0275\u0275inject(l.DOCUMENT))};static#t=this.\u0275prov=s.\u0275\u0275defineInjectable({token:r,factory:function(t){let o=null;return o=t?new t:function pe(){return new X((0,s.\u0275\u0275inject)(l.DOCUMENT))}(),o},providedIn:"root"})}return r})();typeof window<"u"&&window}}]);