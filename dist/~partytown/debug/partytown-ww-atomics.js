(e=>{const t=Symbol(),r=Symbol(),n=Symbol(),i=Symbol(),s=Symbol(),o=Symbol(),a=Symbol(),c=Symbol(),l=new Map,$={},u=new WeakMap,d=[],p={},g={},h=new Map,f=new Map,m=e=>e.split(","),y=e=>{if(e=p.$libPath$+e,new URL(e).origin!=location.origin)throw"Invalid "+e;return e},w=m("clientWidth,clientHeight,clientTop,clientLeft,innerWidth,innerHeight,offsetWidth,offsetHeight,offsetTop,offsetLeft,outerWidth,outerHeight,pageXOffset,pageYOffset,scrollWidth,scrollHeight,scrollTop,scrollLeft"),v=m("childElementCount,children,firstElementChild,lastElementChild,nextElementSibling,previousElementSibling"),b=m("insertBefore,remove,removeChild,replaceChild"),S=m("className,width,height,hidden,innerHTML,innerText,textContent,text"),I=m("setAttribute,setAttributeNS,setProperty"),E=m("addEventListener,dispatchEvent,removeEventListener"),x=E.concat(I,m("add,observe,remove,unobserve")),N=/^[A-Z_]([A-Z0-9-]*[A-Z0-9])?$/,T=()=>{},M=e=>e.length,C=e=>{var t,r,n;try{const r=null===(t=null==e?void 0:e.constructor)||void 0===t?void 0:t.name;if(r)return r}catch(e){}try{const t=null===(n=null===(r=null==e?void 0:e.__zone_symbol__originalInstance)||void 0===r?void 0:r.constructor)||void 0===n?void 0:n.name;if(t)return t}catch(e){}return""},L=[],R=()=>Math.round(Math.random()*Number.MAX_SAFE_INTEGER).toString(36),j=(e,t,r)=>Object.defineProperty(e,t,{...r,configurable:!0}),A=(e,t)=>j(e,"name",{value:t}),O=(e,t,r)=>j(e.prototype,t,r),P=(e,t)=>Object.defineProperties(e.prototype,t),W=(e,t,r)=>O(e,t,{value:r,writable:!0});function k(e,t){var r,n;return null!==(n=null===(r=e.loadScriptsOnMainThread)||void 0===r?void 0:r.map((([e,t])=>new RegExp("string"===e?t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):t))).some((e=>e.test(t))))&&void 0!==n&&n}Object.freeze((()=>{const e=new Set;let t=[];do{Object.getOwnPropertyNames(t).forEach((r=>{"function"==typeof t[r]&&e.add(r)}))}while((t=Object.getPrototypeOf(t))!==Object.prototype);return Array.from(e)})());const H=(e,t)=>t in e[o],D=(e,t)=>e[o][t],B=(e,t,r)=>e[o][t]=r,_=(e,t,r,n,i,s)=>{if(!(i=l.get(t))&&r&&g[e]){const o=l.get(s||"");i=g[e].$createNode$(r,t,n,o),l.set(t,i)}return i},U=(e,t)=>W(e,"nodeType",t),z=(e,t)=>t.map((t=>O(e,t,{get(){let e=F(this,t),r=f.get(e);return r||(r=me(this,[t]),f.set(e,r)),r}}))),F=(e,n,i)=>[e[t],e[r],n,...(i||L).map((e=>String(e&&e[t]?e[r]:e)))].join("."),G=(e,t)=>m(t).map((t=>O(e,t,{get(){return H(this,t)||B(this,t,me(this,[t])),D(this,t)},set(e){D(this,t)!==e&&ye(this,[t],e),B(this,t,e)}}))),q=e=>w.map((t=>O(e,t,{get(){const e=h.get(F(this,t));if("number"==typeof e)return e;const r=me(this,[t],w);return r&&"object"==typeof r?(Object.entries(r).map((([e,t])=>h.set(F(this,e),t))),r[t]):r}}))),J=(e,t)=>t.map((t=>{e.prototype[t]=function(...e){let r=F(this,t,e),n=h.get(r);return n||(n=we(this,[t],e),h.set(r,n)),n}})),V=(e,n,i,s,o)=>{return void 0!==i&&(o=typeof i)?"string"===o||"boolean"===o||"number"===o||null==i?[0,i]:"function"===o?[4,{$winId$:e,$instanceId$:n,$refId$:(a=i,(c=u.get(a))||(u.set(a,c=R()),$[c]=a),c)}]:(s=s||new Set)&&Array.isArray(i)?s.has(i)?[1,[]]:s.add(i)&&[1,i.map((t=>V(e,n,t,s)))]:"object"===o?i[r]?[3,[i[t],i[r]]]:i instanceof Event?[5,Z(e,n,i,!1,s)]:X&&i instanceof TrustedHTML?[0,i.toString()]:i instanceof ArrayBuffer?[8,i]:ArrayBuffer.isView(i)?[9,i.buffer,C(i)]:[2,Z(e,n,i,!0,s)]:void 0:i;var a,c},X="undefined"!=typeof TrustedHTML,Z=(e,t,r,n,i,s,o,a)=>{if(s={},!i.has(r))for(o in i.add(r),r)a=r[o],(n||"function"!=typeof a)&&(s[o]=V(e,t,a,i));return s},Y=(e,n)=>e?V(e[t],e[r],n):[0,n],K=(e,t,r,n,i,s,o,a)=>{if(n){if(i=n[0],s=n[1],0===i||11===i||12===i)return s;if(4===i)return ee(r,s);if(6===i)return e&&r.length>0?(...t)=>we(g[e].$window$,r,t,1):T;if(3===i)return Q(s);if(7===i)return new re(s.map(Q));if(10===i)return new ne(s);if(1===i)return s.map((n=>K(e,t,r,n)));if(14===i)return new te(s);for(a in o={},s)o[a]=K(e,t,[...r,a],s[a]);if(13===i)return new g[e].$window$.CSSStyleDeclaration(e,t,r,o);if(5===i){if("message"===o.type&&o.origin){let e,t=JSON.stringify(o.data),r=d.find((e=>e.$data$===t));r&&(e=g[r.$winId$],e&&(o.source=e.$window$,o.origin=e.$location$.origin))}return new Proxy(new Event(o.type,o),{get:(e,t)=>t in o?o[t]:"function"==typeof e[String(t)]?T:e[String(t)]})}if(2===i)return o}},Q=([e,t,r,n])=>t===e&&g[e]?g[e].$window$:_(e,t,r,void 0,void 0,n),ee=(e,{$winId$:t,$instanceId$:r,$nodeName$:n,$refId$:i})=>($[i]||u.set($[i]=function(...i){const s=_(t,r,n);return we(s,e,i)},i),$[i]);class te extends Error{constructor(e){super(e.message),this.name=e.name,this.message=e.message,this.stack=e.stack}}class re{constructor(e){(this._=e).map(((e,t)=>this[t]=e))}entries(){return this._.entries()}forEach(e,t){this._.map(e,t)}item(e){return this[e]}keys(){return this._.keys()}get length(){return M(this._)}values(){return this._.values()}[Symbol.iterator](){return this._[Symbol.iterator]()}}const ne=class{constructor(e){this.name=e[0],this.value=e[1]}get nodeName(){return this.name}get nodeType(){return 2}},ie=(e,t,r)=>console.warn(`Partytown unable to ${e} cross-origin ${t}: `+r.$location$),se=(t,r)=>{try{if(p.$config$.logStackTraces){const e=(new Error).stack.split("\n"),r=e.findIndex((e=>e.includes("logWorker")));t+="\n"+e.slice(r+1).join("\n")}let n,i;r?(n=`Worker (${ae(r)}) 🎉`,i=ce(r)):(n=e.name,i="#9844bf"),p.lastLog!==t&&(p.lastLog=t,console.debug.apply(console,[`%c${n}`,`background: ${i}; color: white; padding: 2px 3px; border-radius: 2px; font-size: 0.8em;`,t]))}catch(e){}},oe=[],ae=e=>(oe.includes(e)||oe.push(e),oe.indexOf(e)+1),ce=e=>{const t=["#00309e","#ea3655","#eea727"];return t[ae(e)-1]||t[t.length-1]},le=(e,t)=>{let r="";if(e){const t=C(e);if("Window"===t)r="";else if("string"==typeof e[n]){let t=e[n];r="#text"===t?"textNode.":"#comment"===t?"commentNode.":"#document"===t?"document.":"html"===t?"doctype.":t.toLowerCase()+"."}else r="nodeType"in e&&2===e.nodeType?"attributes.":"CanvasRenderingContext2D"===t?"context2D.":"CanvasRenderingContextWebGL"===t?"contextWebGL.":"CSSStyleDeclaration"===t?"style.":"MutationObserver"===t?"mutationObserver.":"NamedNodeMap"===t?"namedNodeMap.":"ResizeObserver"===t?"resizeObserver.":t.substring(0,1).toLowerCase()+t.substring(1)+".";e[s]&&e[s].length&&(r+=[...e[s]].join(".")+".")}if(t.length>1){const e=t.slice(0,t.length-1),n=t[t.length-1];if(!isNaN(n))return r+`${e.join(".")}[${n}]`}return r+t.join(".")},$e=(e,t)=>{const i=typeof t;if(void 0===t)return"undefined";if("boolean"===i||"number"===i||null==t)return JSON.stringify(t);if("string"===i)return e.includes("cookie")?JSON.stringify(t.slice(0,10)+"..."):JSON.stringify(t.length>50?t.slice(0,40)+"...":t);if(Array.isArray(t))return`[${t.map($e).join(", ")}]`;if("object"===i){const i=t[r],s=C(t);if("string"==typeof i){if("Window"===s)return"window";if("string"==typeof t[n]){if(1===t.nodeType)return`<${t[n].toLowerCase()}>`;if(10===t.nodeType)return`<!DOCTYPE ${t[n]}>`;if(t.nodeType<=11)return t[n]}return"¯\\_(ツ)_/¯ instance obj"}return t[Symbol.iterator]?`[${Array.from(t).map((t=>$e(e,t))).join(", ")}]`:"value"in t?"string"==typeof t.value?`"${t.value}"`:ue(t.value):ue(t)}return(e=>"object"==typeof e&&e&&e.then)(t)?"Promise":"function"===i?`ƒ() ${t.name||""}`.trim():`¯\\_(ツ)_/¯ ${String(t)}`.trim()},ue=e=>{const t=[];for(let r in e){const n=e[r],i=typeof n;"string"===i?t.push(`${r}: "${n}"`):"function"===i?t.push(`${r}: ƒ`):Array.isArray(i)?t.push(`${r}: [..]`):"object"===i&&n?t.push(`${r}: {..}`):t.push(`${r}: ${String(n)}`)}let r=t.join(", ");return r.length>200&&(r=r.substring(0,200)+".."),`{ ${r} }`},de=(e,r)=>{(p.$config$.logGetters||p.$config$.logSetters)&&se(`Dimension cache cleared from style.${r} setter`,e[t])},pe=(e,r)=>{(p.$config$.logGetters||p.$config$.logCalls)&&se(`Dimension cache cleared from method call ${r}()`,e[t])},ge=[],he=(e,n,i,o,a,c)=>{if(e[s]){if(ge.push({$winId$:e[t],$instanceId$:e[r],$applyPath$:[...e[s],...n],$assignInstanceId$:o,$groupedGetters$:a}),ge[M(ge)-1].$debug$=((e,t,r)=>{let n=le(e,t);return 1===r?n+=" (blocking)":2===r?n+=" (non-blocking)":3===r&&(n+=" (non-blocking, no-side-effect)"),n.trim()})(e,n,i),c&&3!==i&&console.error("buffer must be sent NonBlockingNoSideEffect"),3===i)p.$postMessage$([12,{$msgId$:R(),$tasks$:[...ge]}],c?[c instanceof ArrayBuffer?c:c.buffer]:void 0),ge.length=0;else if(1===i)return fe(!0);p.$asyncMsgTimer$=setTimeout(fe,20)}},fe=e=>{if(clearTimeout(p.$asyncMsgTimer$),M(ge)){p.$config$.logMainAccess&&se(`Main access, tasks sent: ${ge.length}`);const t=ge[M(ge)-1],r={$msgId$:`${R()}.${p.$tabId$}`,$tasks$:[...ge]};if(ge.length=0,e){const e=((e,t)=>{const r=e.$sharedDataBuffer$,n=new Int32Array(r);Atomics.store(n,0,0),e.$postMessage$([11,t]),Atomics.wait(n,0,0);let i=Atomics.load(n,0),s="",o=0;for(;o<i;o++)s+=String.fromCharCode(n[o+1]);return JSON.parse(s)})(p,r),n=e.$isPromise$,i=K(t.$winId$,t.$instanceId$,t.$applyPath$,e.$rtnValue$);if(e.$error$){if(n)return Promise.reject(e.$error$);throw new Error(e.$error$)}return n?Promise.resolve(i):i}p.$postMessage$([12,r])}},me=(e,r,n,i)=>(p.$config$.get&&(i=p.$config$.get(be(e,r)))!==a||((e,r,n,i=!1,s=!1)=>{if(p.$config$.logGetters)try{const o=`Get ${le(e,r)}, returned: ${$e(r,n)}${i?" (restricted to worker)":""}${s?" (grouped getter)":""}`;o.includes("Symbol(")||se(o,e[t])}catch(e){}})(e,r,i=he(e,r,1,void 0,n),!1,!!n),i),ye=(e,r,n,i)=>{if(p.$config$.set){if((i=p.$config$.set({value:n,prevent:c,...be(e,r)}))===c)return;i!==a&&(n=i)}var s,o;S.some((e=>r.includes(e)))&&(h.clear(),s=e,o=r[r.length-1],(p.$config$.logGetters||p.$config$.logSetters)&&se(`Dimension cache cleared from setter "${o}"`,s[t])),((e,r,n,i=!1)=>{if(p.$config$.logSetters)try{r=r.slice(0,r.length-2),se(`Set ${le(e,r)}, value: ${$e(r,n)}${i?" (restricted to worker)":""}`,e[t])}catch(e){}})(e,r=[...r,Y(e,n),0],n),he(e,r,2)},we=(e,r,n,i,s,o,c,l)=>(p.$config$.apply&&(c=p.$config$.apply({args:n,...be(e,r)}))!==a||(l=r[M(r)-1],r=[...r,Y(e,n)],i=i||(x.includes(l)?2:1),"setAttribute"===l&&H(e,n[0])?B(e,n[0],n[1]):b.includes(l)?(h.clear(),f.clear(),((e,r)=>{(p.$config$.logGetters||p.$config$.logCalls)&&se(`Dimension and DOM structure cache cleared from method call ${r}()`,e[t])})(e,l)):I.includes(l)&&(i=2,h.clear(),pe(e,l)),((e,r,n,i)=>{if(p.$config$.logCalls)try{r=r.slice(0,r.length-1),se(`Call ${le(e,r)}(${n.map((e=>$e(r,e))).join(", ")}), returned: ${$e(r,i)}`,e[t])}catch(e){}})(e,r,n,c=he(e,r,i,s,void 0,o))),c),ve=(e,r,n)=>{((e,r,n)=>{if(p.$config$.logCalls)try{se(`Construct new ${r}(${n.map((e=>$e([],e))).join(", ")})`,e[t])}catch(e){}})(e,r,n),he(e,[1,r,Y(e,n)],1)},be=(e,r)=>({name:r.join("."),continue:a,nodeName:e[n],constructor:C(e),instance:e,window:g[e[t]].$window$}),Se=(e,t,r,n)=>{let i={getItem(i){if(r)return we(e,[t,"getItem"],[i],1);ie("get",t,n)},setItem(i,s){r?we(e,[t,"setItem"],[i,s],1):ie("set",t,n)},removeItem(i){r?we(e,[t,"removeItem"],[i],1):ie("remove",t,n)},key(i){if(r)return we(e,[t,"key"],[i],1);ie("key",t,n)},clear(){r?we(e,[t,"clear"],L,1):ie("clear",t,n)},get length(){if(r)return me(e,[t,"length"]);ie("length",t,n)}};e[t]=new Proxy(i,{get:(e,t)=>Reflect.has(e,t)?Reflect.get(e,t):e.getItem(t),set:(e,t,r)=>(e.setItem(t,r),!0),has:(e,t)=>!!Reflect.has(e,t)||"string"==typeof t&&null!==e.getItem(t),deleteProperty:(e,t)=>(e.removeItem(t),!0)})},Ie=(e,t,r)=>{e[r]=A(class extends t{constructor(e,t,r,i){return super(e,t,r,i||{}),new Proxy(this,{get:(e,t)=>e[t]?e[t]:(e[t]||"string"!=typeof t||e[n][t]||(e[n][t]=me(e,[t])),e[n][t]),set:(e,t,r)=>(e[n][t]=r,ye(e,[t],r),de(e,t),h.clear(),!0)})}setProperty(...e){this[n][e[0]]=e[1],we(this,["setProperty"],e,2),de(this,e[0]),h.clear()}getPropertyValue(e){return this[e]}removeProperty(e){let t=this[n][e];return we(this,["removeProperty"],[e],2),de(this,e),h.clear(),this[n][e]=void 0,t}},r)},Ee=(e,t)=>{e[t]=A(class{constructor(e){this.ownerNode=e}get cssRules(){const e=this.ownerNode;return new Proxy({},{get(t,r){const n=String(r);return"item"===n?t=>Ne(e,t):"length"===n?xe(e).length:isNaN(n)?t[r]:Ne(e,n)}})}insertRule(e,t){const r=xe(this.ownerNode);return(t=void 0===t?0:t)>=0&&t<=r.length&&(we(this.ownerNode,["sheet","insertRule"],[e,t],2),r.splice(t,0,0)),pe(this.ownerNode,"insertRule"),h.clear(),t}deleteRule(e){we(this.ownerNode,["sheet","deleteRule"],[e],2),xe(this.ownerNode).splice(e,1),pe(this.ownerNode,"deleteRule"),h.clear()}get type(){return"text/css"}},t);const r={sheet:{get(){return new e[t](this)}}};P(e.HTMLStyleElement,r)},xe=(e,t)=>((t=D(e,2))||(t=me(e,["sheet","cssRules"]),B(e,2,t)),t),Ne=(e,t,r)=>(0===(r=xe(e))[t]&&(r[t]=me(e,["sheet","cssRules",parseInt(t,10)])),r[t]),Te=(e,t,r,n,i)=>{try{p.$config$.logScriptExecution&&se(`Execute script: ${r.substring(0,100).split("\n").map((e=>e.trim())).join(" ").trim().substring(0,60)}...`,n),e.$currentScriptId$=t,Me(e,r)}catch(e){console.error(r,e),i=String(e.stack||e)}return e.$currentScriptId$="",i},Me=(e,t,r)=>{e.$runWindowLoadEvent$=1;let n=(e=>e.replace(/([a-zA-Z0-9_$\.\'\"\`])?(\.\.\.)?this(?![a-zA-Z0-9_$:])/g,((e,t,r)=>{const n=(t||"")+(r||"");return null!=t?n+"this":n+"(thi$(this)?window:this)"})))(t);t=`with(this){${n.replace(/\/\/# so/g,"//Xso")}\n;function thi$(t){return t===this}};${(p.$config$.globalFns||[]).filter((e=>/[a-zA-Z_$][0-9a-zA-Z_$]*/.test(e))).map((e=>`(typeof ${e}=='function'&&(this.${e}=${e}))`)).join(";")};`+(r?"\n//# sourceURL="+r:""),e.$isSameOrigin$||(t=t.replace(/.postMessage\(/g,`.postMessage('${e.$winId$}',`)),new Function(t).call(e.$window$),e.$runWindowLoadEvent$=0},Ce=(e,t,r)=>{(r=D(e,t))&&setTimeout((()=>r.map((e=>e({type:t})))))},Le=(e,t)=>{for(t=e.$location$;!t.host&&(t=(e=g[e.$parentWinId$]).$location$,e.$winId$!==e.$parentWinId$););return t},Re=(e,t,r,n,i,s)=>(n=Le(e,n),i=new URL(t||"",n),r&&p.$config$.resolveUrl&&(s=p.$config$.resolveUrl(i,n,r))?s:i),je=(e,t,r)=>Re(e,t,r)+"",Ae=(e,t)=>{const r=Le(e),n=new URL(t||"",r);if(p.$config$.resolveSendBeaconRequestParameters){const e=p.$config$.resolveSendBeaconRequestParameters(n,r);if(e)return e}return{}},Oe=()=>`<script src="${y("partytown.js?v=0.10.2")}"><\/script>`,Pe=e=>class{constructor(){this.s="",this.l=[],this.e=[],this.style={}}get src(){return this.s}set src(t){p.$config$.logImageRequests&&se(`Image() request: ${je(e,t,"image")}`,e.$winId$),this.s=t,fetch(je(e,t,"image"),{mode:"no-cors",credentials:"include",keepalive:!0}).then((e=>{e.ok||0===e.status?this.l.map((e=>e({type:"load"}))):this.e.map((e=>e({type:"error"})))}),(()=>this.e.forEach((e=>e({type:"error"})))))}addEventListener(e,t){"load"===e&&this.l.push(t),"error"===e&&this.e.push(t)}removeEventListener(e,t){"load"===e&&(this.l=this.l.filter((e=>e!==t))),"error"===e&&(this.e=this.e.filter((e=>e!==t)))}get onload(){return this.l[0]}set onload(e){this.l=[e]}get onerror(){return this.e[0]}set onerror(e){this.e=[e]}},We={addEventListener:{value(...e){const t=e[0],r=D(this,t)||[];r.push(e[1]),B(this,t,r)}},async:{get:T,set:T},defer:{get:T,set:T},onload:{get(){let e=D(this,"load");return e&&e[0]||null},set(e){B(this,"load",e?[e]:null)}},onerror:{get(){let e=D(this,"error");return e&&e[0]||null},set(e){B(this,"error",e?[e]:null)}},getAttribute:{value(e){return"src"===e?this.src:we(this,["getAttribute"],[e])}},setAttribute:{value(e,t){ke.includes(e)?this[e]=t:we(this,["setAttribute"],[e,t])}}},ke=m("src,type"),He=(e,t)=>{const r={innerHTML:De,innerText:De,src:{get(){return D(this,4)||""},set(e){const r=je(t,e,null),n=p.$config$;if(e=je(t,e,"script"),B(this,4,e),ye(this,["src"],e),r!==e&&ye(this,["dataset","ptsrc"],r),this.type){k(n,e)&&ye(this,["type"],"text/javascript")}}},text:De,textContent:De,type:{get(){return me(this,["type"])},set(e){Be(e)||(B(this,5,e),ye(this,["type"],e))}},...We};P(e,r)},De={get(){const e=me(this,["type"]);if(Be(e)){const e=D(this,3);if(e)return e}return me(this,["innerHTML"])||""},set(e){B(this,3,e)}},Be=e=>!e||"text/javascript"===e,_e=(e,i,s)=>{const o=p.$config$,a=A(class extends s{appendChild(e){return this.insertBefore(e,null)}get href(){}set href(e){}insertBefore(e,s){const a=e[t]=this[t],c=e[r],l=e[n],$="SCRIPT"===l,u="IFRAME"===l;if($){const t=D(e,3),r=D(e,5);if(t){if(Be(r)){const r=e.id;if(r&&k(o,r))ye(e,["type"],"text/javascript");else{const r=Te(i,c,t,a,""),n=r?"pterror":"ptid",s=r||c;ye(e,["type"],"text/partytown-x"),ye(e,["dataset",n],s)}}ye(e,["innerHTML"],t)}}if(we(this,["insertBefore"],[e,s],2),u){const t=D(e,0);if(t&&t.startsWith("javascript:")){const e=t.split("javascript:")[1];Te(i,c,e,a,"")}((e,t)=>{let r,n,i=0,s=()=>{g[e]&&g[e].$isInitialized$&&!g[e].$isLoading$?(r=D(t,1)?"error":"load",n=D(t,r),n&&n.map((e=>e({type:r})))):i++>2e3?(n=D(t,"error"),n&&n.map((e=>e({type:"error"})))):setTimeout(s,9)};s()})(c,e)}return $&&(fe(!0),p.$postMessage$([7,a])),e}get nodeName(){return"#s"===this[n]?"#document-fragment":this[n]}get nodeType(){return 3}get ownerDocument(){return i.$document$}},"Node");z(a,m("childNodes,firstChild,isConnected,lastChild,nextSibling,parentElement,parentNode,previousSibling")),e.Node=a},Ue=m("AUDIO,CANVAS,VIDEO"),ze=m("Audio,MediaSource"),Fe=(e,r,n)=>{P(e,{body:{get:()=>r.$body$},cookie:{get(){return r.$isSameOrigin$?me(this,["cookie"]):(ie("get","cookie",r),"")},set(e){r.$isSameOrigin$?ye(this,["cookie"],e):ie("set","cookie",r)}},createElement:{value(e){if(e=e.toUpperCase(),!N.test(e))throw e+" not valid";const r="IFRAME"===e,n=this[t],i=(r?"f_":"")+R();we(this,["createElement"],[e],2,i);const s=_(n,i,e);if(r){st({$winId$:i,$parentWinId$:n,$url$:"about:blank"},!0).$window$.fetch=fetch,ye(s,["srcdoc"],Oe())}else if("SCRIPT"===e){const e=D(s,5);Be(e)&&ye(s,["type"],"text/partytown")}return s}},createElementNS:{value(e,r){const n=R(),i=_(this[t],n,r,e);return we(this,["createElementNS"],[e,r],2,n),i}},createTextNode:{value(e){const r=this[t],n=R(),i=_(r,n,"#text");return we(this,["createTextNode"],[e],2,n),i}},createEvent:{value:e=>new Event(e)},currentScript:{get(){return r.$currentScriptId$?_(this[t],r.$currentScriptId$,"SCRIPT"):null}},defaultView:{get:()=>n?null:r.$window$},documentElement:{get:()=>r.$documentElement$},getElementsByTagName:{value(e){return"BODY"===(e=e.toUpperCase())?[r.$body$]:"HEAD"===e?[r.$head$]:we(this,["getElementsByTagName"],[e])}},head:{get:()=>r.$head$},images:{get(){return me(this,["images"])}},scripts:{get(){return me(this,["scripts"])}},implementation:{get(){return{hasFeature:()=>!0,createHTMLDocument:e=>{const t=R();we(this,["implementation","createHTMLDocument"],[e],1,{$winId$:t});return st({$winId$:t,$parentWinId$:t,$url$:r.$location$+"",$visibilityState$:"hidden"},!0,!0).$document$}}}},location:{get:()=>r.$location$,set(e){r.$location$.href=e+""}},nodeType:{value:9},parentNode:{value:null},parentElement:{value:null},readyState:{value:"complete"},visibilityState:{get:()=>r.$visibilityState$||"visible"}}),G(e,"compatMode,referrer,forms")},Ge=(e,t)=>{P(e,{parentElement:{get(){return this.parentNode}},parentNode:{get:()=>t.$documentElement$}})},qe=(e,t)=>{P(e,{localName:{get(){return this[n].toLowerCase()}},namespaceURI:{get(){return this[i]||"http://www.w3.org/1999/xhtml"}},nodeType:{value:1},tagName:{get(){return this[n]}}}),z(e,v),G(e,"id"),q(t),J(t,m("getClientRects,getBoundingClientRect"))},Je=(e,t)=>{const r={};m("hash,host,hostname,href,origin,pathname,port,protocol,search").map((e=>{r[e]={get(){let r,n=D(this,4);if("string"!=typeof n){if(r=me(this,["href"]),""===r)return"protocol"===e?":":"";B(this,4,r),n=new URL(r)[e]}return Re(t,n,null)[e]},set(r){let n;if("href"===e)if((e=>{try{return new URL(e),!0}catch(e){return!1}})(r))n=new URL(r);else{const e=t.$location$.href;n=Re(t,e,null),n.href=new URL(r+"",n.href)}else n=Re(t,this.href,null),n[e]=r;B(this,4,n.href),ye(this,["href"],n.href)}}})),P(e,r)},Ve=(e,t)=>{const r={contentDocument:{get(){return Ke(this).$document$}},contentWindow:{get(){return Ke(this).$window$}},src:{get(){let e=D(this,0);return e&&e.startsWith("javascript:")?e:(e=Ke(this).$location$.href,e.startsWith("about:")?"":e)},set(e){if(e)if(e.startsWith("javascript:"))B(this,0,e);else if(!e.startsWith("about:")){let t,r=new XMLHttpRequest,n=Ke(this);n.$location$.href=e=je(n,e,"iframe"),n.$isLoading$=1,B(this,1,void 0),r.open("GET",e,!1),r.send(),t=r.status,t>199&&t<300?(ye(this,["srcdoc"],`<base href="${e}">`+r.responseText.replace(Ze,((e,t)=>{const r=[];let n,i=!1;for(;n=Ye.exec(t);){let[e]=n;e.startsWith("type=")&&(i=!0,e=e.replace(/(application|text)\/javascript/,"text/partytown")),r.push(e)}return i||r.push('type="text/partytown"'),`<script ${r.join(" ")}>`}))+Oe()),fe(!0),p.$postMessage$([7,n.$winId$])):(B(this,1,t),n.$isLoading$=0)}}},...We};P(e,r)},Xe="((?:\\w|-)+(?:=(?:(?:\\w|-)+|'[^']*'|\"[^\"]*\")?)?)",Ze=new RegExp(`<script\\s*((${Xe}\\s*)*)>`,"mg"),Ye=new RegExp(Xe,"mg"),Ke=e=>{const n=e[r];return g[n]||st({$winId$:n,$parentWinId$:e[t],$url$:me(e,["src"])||"about:blank"},!0),g[n]},Qe=e=>{const t=(e,t)=>{const{a:r,b:n,c:i,d:s,e:o,f:a}=we(e,[t],L);return new DOMMatrixReadOnly([r,n,i,s,o,a])},r={...e,getCTM:{value:function(){return t(this,"getCTM")}},getScreenCTM:{value:function(){return t(this,"getScreenCTM")}}};P(e,r)},et=(e,t)=>{e.NamedNodeMap=A(class extends t{constructor(e,t,r){return super(e,t,r),new Proxy(this,{get(e,t){const r=rt[t];return r?r.bind(e,[t]):me(e,[t])},set(e,t,r){if(rt[t])throw new Error("Can't set read-only property: "+String(t));return ye(e,[t],r),!0}})}},"NamedNodeMap")};function tt(e,...t){return we(this,e,t,1)}const rt={getNamedItem:tt,getNamedItemNS:tt,item:tt,removeNamedItem:tt,removeNamedItemNS:tt,setNamedItem:tt,setNamedItemNS:tt},nt=(a,c,l,$,u,h)=>{let f,w,b,S;const I=class{constructor(e,c,l,$,u){this[t]=e||a,this[r]=c||f||R(),this[s]=l||[],this[n]=$||w,this[i]=u||b,this[o]=S&&S[o]||{},f=w=b=void 0}},x=new(A(class extends URL{assign(){se("location.assign(), noop")}reload(){se("location.reload(), noop")}replace(){se("location.replace(), noop")}},"Location"))(l),N=x.origin===p.$origin$||"about:blank"===x.origin,T=c===a,L={},k=()=>{let e,t,r=[];for(e in g)t=g[e],t.$parentWinId$!==a||t.$isTopWindow$||r.push(t);return r},F=A(class extends I{constructor(){super(a,a),this.addEventListener=(...e)=>{"load"===e[0]?L.$runWindowLoadEvent$&&setTimeout((()=>e[1]({type:"load"}))):we(this,["addEventListener"],e,2)};let n,i,o=this,l=0,d=()=>{l||((p.$initWindowMedia$||(e.$bridgeToMedia$=[me,ye,we,ve,P,R,t,r,s],p.$importScripts$(y("partytown-media.js?v=0.10.2")),p.$initWindowMedia$=e.$bridgeFromMedia$,delete e.$bridgeFromMedia$),p.$initWindowMedia$)(I,X,L,o,ze),l=1)},g={},E=(e,t,r,n)=>{Ue.includes(e)&&d();const i=g[e]?g[e]:e.includes("-")?g.UNKNOWN:g.I;return f=t,w=e,b=r,S=n,new i};var M,C;if(o.Window=F,o.name=name+`${ae(a)} (${a})`,_e(o,L,I),(e=>{e.NodeList=A(re,"NodeList")})(o),et(o,I),Ie(o,I,"CSSStyleDeclaration"),((e,t,r)=>{e[r]=A(class extends t{now(){return performance.now()}},r)})(o,I,"Performance"),((e,t)=>{const r=new Map;e.customElements={define(n,i,s){r.set(n,i),t[n.toUpperCase()]=i;const o=[i.name,i.observedAttributes];we(e,["customElements","define"],[n,o,s])},get:t=>r.get(t)||we(e,["customElements","get"],[t]),whenDefined:t=>r.has(t)?Promise.resolve():we(e,["customElements","whenDefined"],[t]),upgrade:t=>we(e,["customElements","upgrade"],[t])}})(o,g),p.$interfaces$.map((([e,t,n,i,c])=>{const l=it[e]?V:"EventTarget"===t?X:"Object"===t?I:o[t],$=o[e]=A(12===i?class extends I{constructor(...t){super(),ve(this,e,t)}}:o[e]||class extends l{},e);c&&(g[c]=$),n.map((([e,t,n])=>{e in $.prototype||e in l.prototype||("string"==typeof t?O($,e,{get(){if(!H(this,e)){const n=this[r],i=[...this[s],e],c=o[t];c&&B(this,e,new c(a,n,i))}return D(this,e)},set(t){B(this,e,t)}}):5===t?W($,e,(function(...t){return we(this,[e],t)})):t>0&&(void 0!==n?W($,e,n):O($,e,{get(){return me(this,[e])},set(t){return ye(this,[e],t)}})))}))})),m("atob,btoa,crypto,indexedDB,setTimeout,setInterval,clearTimeout,clearInterval").map((t=>{delete F.prototype[t],t in o||(n=e[t],null!=n&&(o[t]="function"!=typeof n||n.toString().startsWith("class")?n:n.bind(e)))})),Object.getOwnPropertyNames(e).map((t=>{t in o||(o[t]=e[t])})),ze.map((e=>j(o,e,{get:()=>(d(),o[e])}))),"trustedTypes"in e&&(o.trustedTypes=e.trustedTypes),qe(o.Element,o.HTMLElement),Fe(o.Document,L,h),M=o.DocumentFragment,U(M,11),z(M,v),Je(o.HTMLAnchorElement,L),C=o.HTMLFormElement,P(C,{}),G(C,"elements"),Ve(o.HTMLIFrameElement),He(o.HTMLScriptElement,L),Qe(o.SVGGraphicsElement),Ge(o.HTMLHeadElement,L),Ge(o.HTMLBodyElement,L),((e,t)=>{P(e,{parentElement:{value:null},parentNode:{get:()=>t.$document$}})})(o.HTMLHtmlElement,L),Ee(o,"CSSStyleSheet"),U(o.Comment,8),U(o.DocumentType,10),Object.assign(L,{$winId$:a,$parentWinId$:c,$window$:new Proxy(o,{get:(e,t)=>{var r;if("string"!=typeof t||isNaN(t))return(null===(r=p.$config$.mainWindowAccessors)||void 0===r?void 0:r.includes(t))?me(this,[t]):e[t];{let e=k()[t];return e?e.$window$:void 0}},has:()=>!0}),$document$:E("#document",a+".d"),$documentElement$:E("HTML",a+".e"),$head$:E("HEAD",a+".h"),$body$:E("BODY",a+".b"),$location$:x,$visibilityState$:$,$isSameOrigin$:N,$isTopWindow$:T,$createNode$:E}),o.requestAnimationFrame=e=>setTimeout((()=>e(performance.now())),9),o.cancelAnimationFrame=e=>clearTimeout(e),o.requestIdleCallback=(e,t)=>(t=Date.now(),setTimeout((()=>e({didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-t))})),1)),o.cancelIdleCallback=e=>clearTimeout(e),Se(o,"localStorage",N,L),Se(o,"sessionStorage",N,L),N||(o.indexeddb=void 0),u)i={},o.history={pushState(e){i=e},replaceState(e){i=e},get state(){return i},length:0},o.indexeddb=void 0;else{const e=o.history.pushState.bind(o.history),t=o.history.replaceState.bind(o.history);o.history.pushState=(t,r,n)=>{!1!==L.$propagateHistoryChange$&&e(t,r,n)},o.history.replaceState=(e,r,n)=>{!1!==L.$propagateHistoryChange$&&t(e,r,n)}}o.Worker=void 0}get body(){return L.$body$}get document(){return L.$document$}get documentElement(){return L.$documentElement$}fetch(e,t){return e="string"==typeof e||e instanceof URL?String(e):e.url,fetch(je(L,e,"fetch"),t)}get frames(){return L.$window$}get frameElement(){return T?null:_(c,a,"IFRAME")}get globalThis(){return L.$window$}get head(){return L.$head$}get length(){return k().length}get location(){return x}set location(e){x.href=e+""}get Image(){return Pe(L)}get navigator(){return(e=>{const t={sendBeacon:(t,r)=>{if(p.$config$.logSendBeaconRequests)try{se(`sendBeacon: ${je(e,t,null)}${r?", data: "+JSON.stringify(r):""}, resolvedParams: ${JSON.stringify(Ae(e,t))}`)}catch(e){console.error(e)}try{return fetch(je(e,t,null),{method:"POST",body:r,mode:"no-cors",keepalive:!0,...Ae(e,t)}),!0}catch(e){return console.error(e),!1}}};for(let e in navigator)t[e]=navigator[e];return new Proxy(t,{set:(e,t,r)=>(navigator[t]=r,!0),get(t,r){if(Object.prototype.hasOwnProperty.call(t,r))return t[r];return me(e.$window$,["navigator",r])}})})(L)}get origin(){return x.origin}set origin(e){}get parent(){for(let e in g)if(g[e].$winId$===c)return g[e].$window$;return L.$window$}postMessage(...e){g[e[0]]&&(M(d)>50&&d.splice(0,5),d.push({$winId$:e[0],$data$:JSON.stringify(e[1])}),e=e.slice(1)),we(this,["postMessage"],e,3)}get self(){return L.$window$}get top(){for(let e in g)if(g[e].$isTopWindow$)return g[e].$window$;return L.$window$}get window(){return L.$window$}get XMLHttpRequest(){const e=XMLHttpRequest,t=String(e),r=A(class extends e{open(...e){e[1]=je(L,e[1],"xhr"),super.open(...e)}set withCredentials(e){p.$config$.allowXhrCredentials&&(super.withCredentials=e)}toString(){return t}},C(e));return r.prototype.constructor.toString=()=>t,r}},"Window"),V=class extends I{constructor(e,t,r,n){return super(e,t,r,n),new Proxy(this,{get:(e,t)=>me(e,[t]),set:(e,t,r)=>(ye(e,[t],r),!0)})}},X=class extends I{};return E.map((e=>X.prototype[e]=function(...t){return we(this,[e],t,2)})),G(F,"devicePixelRatio"),q(F),J(F,["getComputedStyle"]),new F,L},it={DOMStringMap:1,NamedNodeMap:1},st=({$winId$:e,$parentWinId$:t,$url$:r,$visibilityState$:n},i,s)=>{if(!g[e]){g[e]=nt(e,t,r,n,i,s);se(`Created ${e===t?"top":"iframe"} window ${ae(e)} environment`,e)}return p.$postMessage$([7,e]),g[e]},ot=[],at=t=>{const r=t.data,n=r[0],i=r[1];if(p.$isInitialized$)if(7===n)(async e=>{let t,r=e.$winId$,n=e.$instanceId$,i=_(r,n,"SCRIPT"),s=e.$content$,o=e.$url$,a=e.$orgUrl$,c="",l=g[r],$=["text/jscript","text/javascript","text/x-javascript","application/javascript","application/x-javascript","text/ecmascript","text/x-ecmascript","application/ecmascript"];if(o)try{if(o=Re(l,o,"script")+"",B(i,4,o),p.$config$.logScriptExecution&&se(`Execute script src: ${a}`,r),t=await fetch(o),t.ok){let e=t.headers.get("content-type");$.some((t=>{var r,n,i;return null===(i=null===(r=null==e?void 0:e.toLowerCase)||void 0===r?void 0:(n=r.call(e)).includes)||void 0===i?void 0:i.call(n,t)}))&&(s=await t.text(),l.$currentScriptId$=n,Me(l,s,a||o)),Ce(i,"load")}else c=t.statusText,Ce(i,"error")}catch(e){console.error(e),c=String(e.stack||e),Ce(i,"error")}else s&&(c=Te(l,n,s,r,c));l.$currentScriptId$="",p.$postMessage$([6,r,n,c])})(i);else if(9===n)(({$winId$:e,$instanceId$:t,$refId$:r,$thisArg$:n,$args$:i})=>{if($[r])try{$[r].apply(K(e,t,[],n),K(e,t,[],i))}catch(e){console.error(e)}})(i);else if(10===n)(({$winId$:e,$forward$:t,$args$:r})=>{try{let n=g[e].$window$,i=0,s=M(t);for(;i<s;i++)i+1<s?n=n[t[i]]:n[t[i]].apply(n,K(null,e,[],r))}catch(e){console.error(e)}})(i);else if(5===n)st(i);else if(8===n){if(1!==g[i].$isInitialized$){const e=i,t=g[e],r=t.$winId$===t.$parentWinId$?"top":"iframe";se(`Initialized ${r} window ${ae(e)} environment 🎉`,e)}g[i].$isInitialized$=1,g[i].$isLoading$=0}else if(14===n)g[i].$visibilityState$=r[2];else if(13===n){const e=i.$winId$,t=g[e];t.$location$.href=i.url,function(e,t,r){const n=t.$window$.history;switch(r.type){case 0:t.$propagateHistoryChange$=!1;try{n.pushState(r.state,"",r.newUrl)}catch(e){}t.$propagateHistoryChange$=!0;break;case 1:t.$propagateHistoryChange$=!1;try{n.replaceState(r.state,"",r.newUrl)}catch(e){}t.$propagateHistoryChange$=!0}}(i.$winId$,t,i)}else 15===n&&((e,t,r,n,i)=>{const s=_(t,r);s&&"function"==typeof s[n]&&s[n].apply(s,i)})(...r);else 1===n?((t=>{const r=p.$config$=JSON.parse(t.$config$),n=t.$origin$;p.$importScripts$=importScripts.bind(e),p.$interfaces$=t.$interfaces$,p.$libPath$=t.$libPath$,p.$origin$=n,p.$postMessage$=postMessage.bind(e),p.$sharedDataBuffer$=t.$sharedDataBuffer$,p.$tabId$=t.$tabId$,e.importScripts=void 0,delete e.postMessage,delete e.WorkerGlobalScope,m("resolveUrl,resolveSendBeaconRequestParameters,get,set,apply").map((e=>{r[e]&&(r[e]=new Function("return "+r[e])())}))})(i),p.$postMessage$([2])):3===n?(p.$interfaces$=[...p.$interfaces$,...i],p.$isInitialized$=1,se("Initialized web worker"),p.$postMessage$([4]),ot.length&&se(`Queued ready messages: ${ot.length}`),[...ot].map(at),ot.length=0):ot.push(t)};e.onmessage=at,postMessage([0])})(self);