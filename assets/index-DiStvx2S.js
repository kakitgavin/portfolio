(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var nh={exports:{}},Uo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function ES(){if(y_)return Uo;y_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return Uo.Fragment=t,Uo.jsx=i,Uo.jsxs=i,Uo}var M_;function TS(){return M_||(M_=1,nh.exports=ES()),nh.exports}var Wt=TS(),ih={exports:{}},ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_;function bS(){if(E_)return ae;E_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,R={};function y(U,tt,vt){this.props=U,this.context=tt,this.refs=R,this.updater=vt||M}y.prototype.isReactComponent={},y.prototype.setState=function(U,tt){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,tt,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=y.prototype;function O(U,tt,vt){this.props=U,this.context=tt,this.refs=R,this.updater=vt||M}var N=O.prototype=new _;N.constructor=O,b(N,y.prototype),N.isPureReactComponent=!0;var w=Array.isArray,B={H:null,A:null,T:null,S:null,V:null},V=Object.prototype.hasOwnProperty;function I(U,tt,vt,St,J,dt){return vt=dt.ref,{$$typeof:o,type:U,key:tt,ref:vt!==void 0?vt:null,props:dt}}function Z(U,tt){return I(U.type,tt,void 0,void 0,void 0,U.props)}function D(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function C(U){var tt={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(vt){return tt[vt]})}var G=/\/+/g;function lt(U,tt){return typeof U=="object"&&U!==null&&U.key!=null?C(""+U.key):tt.toString(36)}function rt(){}function gt(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(rt,rt):(U.status="pending",U.then(function(tt){U.status==="pending"&&(U.status="fulfilled",U.value=tt)},function(tt){U.status==="pending"&&(U.status="rejected",U.reason=tt)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function ht(U,tt,vt,St,J){var dt=typeof U;(dt==="undefined"||dt==="boolean")&&(U=null);var xt=!1;if(U===null)xt=!0;else switch(dt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(U.$$typeof){case o:case t:xt=!0;break;case g:return xt=U._init,ht(xt(U._payload),tt,vt,St,J)}}if(xt)return J=J(U),xt=St===""?"."+lt(U,0):St,w(J)?(vt="",xt!=null&&(vt=xt.replace(G,"$&/")+"/"),ht(J,tt,vt,"",function(re){return re})):J!=null&&(D(J)&&(J=Z(J,vt+(J.key==null||U&&U.key===J.key?"":(""+J.key).replace(G,"$&/")+"/")+xt)),tt.push(J)),1;xt=0;var bt=St===""?".":St+":";if(w(U))for(var Nt=0;Nt<U.length;Nt++)St=U[Nt],dt=bt+lt(St,Nt),xt+=ht(St,tt,vt,dt,J);else if(Nt=x(U),typeof Nt=="function")for(U=Nt.call(U),Nt=0;!(St=U.next()).done;)St=St.value,dt=bt+lt(St,Nt++),xt+=ht(St,tt,vt,dt,J);else if(dt==="object"){if(typeof U.then=="function")return ht(gt(U),tt,vt,St,J);throw tt=String(U),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return xt}function z(U,tt,vt){if(U==null)return U;var St=[],J=0;return ht(U,St,"","",function(dt){return tt.call(vt,dt,J++)}),St}function K(U){if(U._status===-1){var tt=U._result;tt=tt(),tt.then(function(vt){(U._status===0||U._status===-1)&&(U._status=1,U._result=vt)},function(vt){(U._status===0||U._status===-1)&&(U._status=2,U._result=vt)}),U._status===-1&&(U._status=0,U._result=tt)}if(U._status===1)return U._result.default;throw U._result}var Y=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function Mt(){}return ae.Children={map:z,forEach:function(U,tt,vt){z(U,function(){tt.apply(this,arguments)},vt)},count:function(U){var tt=0;return z(U,function(){tt++}),tt},toArray:function(U){return z(U,function(tt){return tt})||[]},only:function(U){if(!D(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ae.Component=y,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=O,ae.StrictMode=s,ae.Suspense=m,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ae.__COMPILER_RUNTIME={__proto__:null,c:function(U){return B.H.useMemoCache(U)}},ae.cache=function(U){return function(){return U.apply(null,arguments)}},ae.cloneElement=function(U,tt,vt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var St=b({},U.props),J=U.key,dt=void 0;if(tt!=null)for(xt in tt.ref!==void 0&&(dt=void 0),tt.key!==void 0&&(J=""+tt.key),tt)!V.call(tt,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&tt.ref===void 0||(St[xt]=tt[xt]);var xt=arguments.length-2;if(xt===1)St.children=vt;else if(1<xt){for(var bt=Array(xt),Nt=0;Nt<xt;Nt++)bt[Nt]=arguments[Nt+2];St.children=bt}return I(U.type,J,void 0,void 0,dt,St)},ae.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},ae.createElement=function(U,tt,vt){var St,J={},dt=null;if(tt!=null)for(St in tt.key!==void 0&&(dt=""+tt.key),tt)V.call(tt,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(J[St]=tt[St]);var xt=arguments.length-2;if(xt===1)J.children=vt;else if(1<xt){for(var bt=Array(xt),Nt=0;Nt<xt;Nt++)bt[Nt]=arguments[Nt+2];J.children=bt}if(U&&U.defaultProps)for(St in xt=U.defaultProps,xt)J[St]===void 0&&(J[St]=xt[St]);return I(U,dt,void 0,void 0,null,J)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(U){return{$$typeof:d,render:U}},ae.isValidElement=D,ae.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:K}},ae.memo=function(U,tt){return{$$typeof:p,type:U,compare:tt===void 0?null:tt}},ae.startTransition=function(U){var tt=B.T,vt={};B.T=vt;try{var St=U(),J=B.S;J!==null&&J(vt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(Mt,Y)}catch(dt){Y(dt)}finally{B.T=tt}},ae.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ae.use=function(U){return B.H.use(U)},ae.useActionState=function(U,tt,vt){return B.H.useActionState(U,tt,vt)},ae.useCallback=function(U,tt){return B.H.useCallback(U,tt)},ae.useContext=function(U){return B.H.useContext(U)},ae.useDebugValue=function(){},ae.useDeferredValue=function(U,tt){return B.H.useDeferredValue(U,tt)},ae.useEffect=function(U,tt,vt){var St=B.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(U,tt)},ae.useId=function(){return B.H.useId()},ae.useImperativeHandle=function(U,tt,vt){return B.H.useImperativeHandle(U,tt,vt)},ae.useInsertionEffect=function(U,tt){return B.H.useInsertionEffect(U,tt)},ae.useLayoutEffect=function(U,tt){return B.H.useLayoutEffect(U,tt)},ae.useMemo=function(U,tt){return B.H.useMemo(U,tt)},ae.useOptimistic=function(U,tt){return B.H.useOptimistic(U,tt)},ae.useReducer=function(U,tt,vt){return B.H.useReducer(U,tt,vt)},ae.useRef=function(U){return B.H.useRef(U)},ae.useState=function(U){return B.H.useState(U)},ae.useSyncExternalStore=function(U,tt,vt){return B.H.useSyncExternalStore(U,tt,vt)},ae.useTransition=function(){return B.H.useTransition()},ae.version="19.1.0",ae}var T_;function Od(){return T_||(T_=1,ih.exports=bS()),ih.exports}var kh=Od(),ah={exports:{}},Lo={},sh={exports:{}},rh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_;function AS(){return b_||(b_=1,function(o){function t(z,K){var Y=z.length;z.push(K);t:for(;0<Y;){var Mt=Y-1>>>1,U=z[Mt];if(0<l(U,K))z[Mt]=K,z[Y]=U,Y=Mt;else break t}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var K=z[0],Y=z.pop();if(Y!==K){z[0]=Y;t:for(var Mt=0,U=z.length,tt=U>>>1;Mt<tt;){var vt=2*(Mt+1)-1,St=z[vt],J=vt+1,dt=z[J];if(0>l(St,Y))J<U&&0>l(dt,St)?(z[Mt]=dt,z[J]=Y,Mt=J):(z[Mt]=St,z[vt]=Y,Mt=vt);else if(J<U&&0>l(dt,Y))z[Mt]=dt,z[J]=Y,Mt=J;else break t}}return K}function l(z,K){var Y=z.sortIndex-K.sortIndex;return Y!==0?Y:z.id-K.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,v=null,x=3,M=!1,b=!1,R=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function w(z){for(var K=i(p);K!==null;){if(K.callback===null)s(p);else if(K.startTime<=z)s(p),K.sortIndex=K.expirationTime,t(m,K);else break;K=i(p)}}function B(z){if(R=!1,w(z),!b)if(i(m)!==null)b=!0,V||(V=!0,lt());else{var K=i(p);K!==null&&ht(B,K.startTime-z)}}var V=!1,I=-1,Z=5,D=-1;function C(){return y?!0:!(o.unstable_now()-D<Z)}function G(){if(y=!1,V){var z=o.unstable_now();D=z;var K=!0;try{t:{b=!1,R&&(R=!1,O(I),I=-1),M=!0;var Y=x;try{e:{for(w(z),v=i(m);v!==null&&!(v.expirationTime>z&&C());){var Mt=v.callback;if(typeof Mt=="function"){v.callback=null,x=v.priorityLevel;var U=Mt(v.expirationTime<=z);if(z=o.unstable_now(),typeof U=="function"){v.callback=U,w(z),K=!0;break e}v===i(m)&&s(m),w(z)}else s(m);v=i(m)}if(v!==null)K=!0;else{var tt=i(p);tt!==null&&ht(B,tt.startTime-z),K=!1}}break t}finally{v=null,x=Y,M=!1}K=void 0}}finally{K?lt():V=!1}}}var lt;if(typeof N=="function")lt=function(){N(G)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,gt=rt.port2;rt.port1.onmessage=G,lt=function(){gt.postMessage(null)}}else lt=function(){_(G,0)};function ht(z,K){I=_(function(){z(o.unstable_now())},K)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(z){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var Y=x;x=K;try{return z()}finally{x=Y}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=x;x=z;try{return K()}finally{x=Y}},o.unstable_scheduleCallback=function(z,K,Y){var Mt=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Mt+Y:Mt):Y=Mt,z){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=Y+U,z={id:g++,callback:K,priorityLevel:z,startTime:Y,expirationTime:U,sortIndex:-1},Y>Mt?(z.sortIndex=Y,t(p,z),i(m)===null&&z===i(p)&&(R?(O(I),I=-1):R=!0,ht(B,Y-Mt))):(z.sortIndex=U,t(m,z),b||M||(b=!0,V||(V=!0,lt()))),z},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(z){var K=x;return function(){var Y=x;x=K;try{return z.apply(this,arguments)}finally{x=Y}}}}(rh)),rh}var A_;function RS(){return A_||(A_=1,sh.exports=AS()),sh.exports}var oh={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function CS(){if(R_)return Cn;R_=1;var o=Od();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Cn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},Cn.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},Cn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Cn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Cn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Cn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Cn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Cn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Cn.requestFormReset=function(m){s.d.r(m)},Cn.unstable_batchedUpdates=function(m,p){return m(p)},Cn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Cn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Cn.version="19.1.0",Cn}var C_;function wS(){if(C_)return oh.exports;C_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),oh.exports=CS(),oh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_;function DS(){if(w_)return Lo;w_=1;var o=RS(),t=Od(),i=wS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(u(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),e;if(f===r)return d(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var S=!1,E=c.child;E;){if(E===a){S=!0,a=c,r=f;break}if(E===r){S=!0,r=c,a=f;break}E=E.sibling}if(!S){for(E=f.child;E;){if(E===a){S=!0,a=f,r=c;break}if(E===r){S=!0,r=f,a=c;break}E=E.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),N=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function lt(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function gt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case y:return"Profiler";case R:return"StrictMode";case B:return"Suspense";case V:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case N:return(e.displayName||"Context")+".Provider";case O:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:gt(e.type)||"Memo";case Z:n=e._payload,e=e._init;try{return gt(e(n))}catch{}}return null}var ht=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},Mt=[],U=-1;function tt(e){return{current:e}}function vt(e){0>U||(e.current=Mt[U],Mt[U]=null,U--)}function St(e,n){U++,Mt[U]=e.current,e.current=n}var J=tt(null),dt=tt(null),xt=tt(null),bt=tt(null);function Nt(e,n){switch(St(xt,n),St(dt,e),St(J,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Zg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Zg(n),e=Kg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}vt(J),St(J,e)}function re(){vt(J),vt(dt),vt(xt)}function Kt(e){e.memoizedState!==null&&St(bt,e);var n=J.current,a=Kg(n,e.type);n!==a&&(St(dt,e),St(J,a))}function Ge(e){dt.current===e&&(vt(J),vt(dt)),bt.current===e&&(vt(bt),Ao._currentValue=Y)}var Ie=Object.prototype.hasOwnProperty,ce=o.unstable_scheduleCallback,F=o.unstable_cancelCallback,Bn=o.unstable_shouldYield,_e=o.unstable_requestPaint,ne=o.unstable_now,Xt=o.unstable_getCurrentPriorityLevel,De=o.unstable_ImmediatePriority,Ht=o.unstable_UserBlockingPriority,L=o.unstable_NormalPriority,T=o.unstable_LowPriority,et=o.unstable_IdlePriority,_t=o.log,yt=o.unstable_setDisableYieldValue,ct=null,zt=null;function At(e){if(typeof _t=="function"&&yt(e),zt&&typeof zt.setStrictMode=="function")try{zt.setStrictMode(ct,e)}catch{}}var Rt=Math.clz32?Math.clz32:It,ve=Math.log,Tt=Math.LN2;function It(e){return e>>>=0,e===0?32:31-(ve(e)/Tt|0)|0}var jt=256,Qt=4194304;function Ot(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function le(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var E=r&134217727;return E!==0?(r=E&~f,r!==0?c=Ot(r):(S&=E,S!==0?c=Ot(S):a||(a=E&~e,a!==0&&(c=Ot(a))))):(E=r&~f,E!==0?c=Ot(E):S!==0?c=Ot(S):a||(a=r&~e,a!==0&&(c=Ot(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function ee(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ue(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var e=jt;return jt<<=1,(jt&4194048)===0&&(jt=256),e}function Ut(){var e=Qt;return Qt<<=1,(Qt&62914560)===0&&(Qt=4194304),e}function ot(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function pt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Pt(e,n,a,r,c,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,P=e.expirationTimes,$=e.hiddenUpdates;for(a=S&~a;0<a;){var ut=31-Rt(a),mt=1<<ut;E[ut]=0,P[ut]=-1;var nt=$[ut];if(nt!==null)for($[ut]=null,ut=0;ut<nt.length;ut++){var it=nt[ut];it!==null&&(it.lane&=-536870913)}a&=~mt}r!==0&&Lt(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function Lt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Rt(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&4194090}function ie(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Rt(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function Ve(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function en(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ee(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:m_(e.type))}function Yn(e,n){var a=K.p;try{return K.p=e,n()}finally{K.p=a}}var pn=Math.random().toString(36).slice(2),on="__reactFiber$"+pn,Sn="__reactProps$"+pn,In="__reactContainer$"+pn,Ka="__reactEvents$"+pn,Ko="__reactListeners$"+pn,Qo="__reactHandles$"+pn,Qa="__reactResources$"+pn,da="__reactMarker$"+pn;function pa(e){delete e[on],delete e[Sn],delete e[Ka],delete e[Ko],delete e[Qo]}function Oi(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[In]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=t_(e);e!==null;){if(a=e[on])return a;e=t_(e)}return n}e=a,a=e.parentNode}return null}function Pi(e){if(e=e[on]||e[In]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Ja(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ma(e){var n=e[Qa];return n||(n=e[Qa]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nn(e){e[da]=!0}var Jo=new Set,$o={};function zi(e,n){A(e,n),A(e+"Capture",n)}function A(e,n){for($o[e]=n,e=0;e<n.length;e++)Jo.add(n[e])}var W=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},st={};function q(e){return Ie.call(st,e)?!0:Ie.call(at,e)?!1:W.test(e)?st[e]=!0:(at[e]=!0,!1)}function Et(e,n,a){if(q(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ct(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function wt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}var Bt,$t;function Yt(e){if(Bt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Bt=n&&n[1]||"",$t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Bt+e+$t}var Vt=!1;function he(e,n){if(!e||Vt)return"";Vt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(it){var nt=it}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(it){nt=it}e.call(mt.prototype)}}else{try{throw Error()}catch(it){nt=it}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(it){if(it&&nt&&typeof it.stack=="string")return[it.stack,nt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),S=f[0],E=f[1];if(S&&E){var P=S.split(`
`),$=E.split(`
`);for(c=r=0;r<P.length&&!P[r].includes("DetermineComponentFrameRoot");)r++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(r===P.length||c===$.length)for(r=P.length-1,c=$.length-1;1<=r&&0<=c&&P[r]!==$[c];)c--;for(;1<=r&&0<=c;r--,c--)if(P[r]!==$[c]){if(r!==1||c!==1)do if(r--,c--,0>c||P[r]!==$[c]){var ut=`
`+P[r].replace(" at new "," at ");return e.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",e.displayName)),ut}while(1<=r&&0<=c);break}}}finally{Vt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Yt(a):""}function Te(e){switch(e.tag){case 26:case 27:case 5:return Yt(e.type);case 16:return Yt("Lazy");case 13:return Yt("Suspense");case 19:return Yt("SuspenseList");case 0:case 15:return he(e.type,!1);case 11:return he(e.type.render,!1);case 1:return he(e.type,!0);case 31:return Yt("Activity");default:return""}}function Ye(e){try{var n="";do n+=Te(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function xe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Se(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function qt(e){var n=Se(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){r=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(S){r=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function je(e){e._valueTracker||(e._valueTracker=qt(e))}function Me(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Se(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function bn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ga=/[\n"\\]/g;function ke(e){return e.replace(ga,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Bi(e,n,a,r,c,f,S,E){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+xe(n)):e.value!==""+xe(n)&&(e.value=""+xe(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?An(e,S,xe(n)):a!=null?An(e,S,xe(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+xe(E):e.removeAttribute("name")}function Fe(e,n,a,r,c,f,S,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+xe(a):"",n=n!=null?""+xe(n):a,E||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=E?e.checked:!!r,e.defaultChecked=!!r,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function An(e,n,a){n==="number"&&bn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ln(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+xe(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function mn(e,n,a){if(n!=null&&(n=""+xe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+xe(a):""}function yn(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ht(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=xe(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r)}function Ti(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ii=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zd(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Ii.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Kd(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&Zd(e,c,r)}else for(var f in n)n.hasOwnProperty(f)&&Zd(e,f,n[f])}function tc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var y0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),M0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tl(e){return M0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var ec=null;function nc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ws=null,Ds=null;function Qd(e){var n=Pi(e);if(n&&(e=n.stateNode)){var a=e[Sn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Bi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ke(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[Sn]||null;if(!c)throw Error(s(90));Bi(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Me(r)}break t;case"textarea":mn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ln(e,!!a.multiple,n,!1)}}}var ic=!1;function Jd(e,n,a){if(ic)return e(n,a);ic=!0;try{var r=e(n);return r}finally{if(ic=!1,(ws!==null||Ds!==null)&&(Fl(),ws&&(n=ws,e=Ds,Ds=ws=null,Qd(n),e)))for(n=0;n<e.length;n++)Qd(e[n])}}function Ir(e,n){var a=e.stateNode;if(a===null)return null;var r=a[Sn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ac=!1;if(Fi)try{var Fr={};Object.defineProperty(Fr,"passive",{get:function(){ac=!0}}),window.addEventListener("test",Fr,Fr),window.removeEventListener("test",Fr,Fr)}catch{ac=!1}var _a=null,sc=null,el=null;function $d(){if(el)return el;var e,n=sc,a=n.length,r,c="value"in _a?_a.value:_a.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(r=1;r<=S&&n[a-r]===c[f-r];r++);return el=c.slice(e,1<r?1-r:void 0)}function nl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function il(){return!0}function tp(){return!1}function Fn(e){function n(a,r,c,f,S){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?il:tp,this.isPropagationStopped=tp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),n}var $a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},al=Fn($a),Hr=g({},$a,{view:0,detail:0}),E0=Fn(Hr),rc,oc,Gr,sl=g({},Hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gr&&(Gr&&e.type==="mousemove"?(rc=e.screenX-Gr.screenX,oc=e.screenY-Gr.screenY):oc=rc=0,Gr=e),rc)},movementY:function(e){return"movementY"in e?e.movementY:oc}}),ep=Fn(sl),T0=g({},sl,{dataTransfer:0}),b0=Fn(T0),A0=g({},Hr,{relatedTarget:0}),lc=Fn(A0),R0=g({},$a,{animationName:0,elapsedTime:0,pseudoElement:0}),C0=Fn(R0),w0=g({},$a,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),D0=Fn(w0),U0=g({},$a,{data:0}),np=Fn(U0),L0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},N0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},O0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=O0[e])?!!n[e]:!1}function uc(){return P0}var z0=g({},Hr,{key:function(e){if(e.key){var n=L0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=nl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?N0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uc,charCode:function(e){return e.type==="keypress"?nl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?nl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),B0=Fn(z0),I0=g({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ip=Fn(I0),F0=g({},Hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uc}),H0=Fn(F0),G0=g({},$a,{propertyName:0,elapsedTime:0,pseudoElement:0}),V0=Fn(G0),k0=g({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),X0=Fn(k0),W0=g({},$a,{newState:0,oldState:0}),Y0=Fn(W0),q0=[9,13,27,32],cc=Fi&&"CompositionEvent"in window,Vr=null;Fi&&"documentMode"in document&&(Vr=document.documentMode);var j0=Fi&&"TextEvent"in window&&!Vr,ap=Fi&&(!cc||Vr&&8<Vr&&11>=Vr),sp=" ",rp=!1;function op(e,n){switch(e){case"keyup":return q0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Us=!1;function Z0(e,n){switch(e){case"compositionend":return lp(n);case"keypress":return n.which!==32?null:(rp=!0,sp);case"textInput":return e=n.data,e===sp&&rp?null:e;default:return null}}function K0(e,n){if(Us)return e==="compositionend"||!cc&&op(e,n)?(e=$d(),el=sc=_a=null,Us=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ap&&n.locale!=="ko"?null:n.data;default:return null}}var Q0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function up(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Q0[e.type]:n==="textarea"}function cp(e,n,a,r){ws?Ds?Ds.push(r):Ds=[r]:ws=r,n=Wl(n,"onChange"),0<n.length&&(a=new al("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var kr=null,Xr=null;function J0(e){Xg(e,0)}function rl(e){var n=Ja(e);if(Me(n))return e}function fp(e,n){if(e==="change")return n}var hp=!1;if(Fi){var fc;if(Fi){var hc="oninput"in document;if(!hc){var dp=document.createElement("div");dp.setAttribute("oninput","return;"),hc=typeof dp.oninput=="function"}fc=hc}else fc=!1;hp=fc&&(!document.documentMode||9<document.documentMode)}function pp(){kr&&(kr.detachEvent("onpropertychange",mp),Xr=kr=null)}function mp(e){if(e.propertyName==="value"&&rl(Xr)){var n=[];cp(n,Xr,e,nc(e)),Jd(J0,n)}}function $0(e,n,a){e==="focusin"?(pp(),kr=n,Xr=a,kr.attachEvent("onpropertychange",mp)):e==="focusout"&&pp()}function tx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(Xr)}function ex(e,n){if(e==="click")return rl(n)}function nx(e,n){if(e==="input"||e==="change")return rl(n)}function ix(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qn=typeof Object.is=="function"?Object.is:ix;function Wr(e,n){if(qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Ie.call(n,c)||!qn(e[c],n[c]))return!1}return!0}function gp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _p(e,n){var a=gp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=gp(a)}}function vp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?vp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function xp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=bn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=bn(e.document)}return n}function dc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var ax=Fi&&"documentMode"in document&&11>=document.documentMode,Ls=null,pc=null,Yr=null,mc=!1;function Sp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;mc||Ls==null||Ls!==bn(r)||(r=Ls,"selectionStart"in r&&dc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yr&&Wr(Yr,r)||(Yr=r,r=Wl(pc,"onSelect"),0<r.length&&(n=new al("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Ls)))}function ts(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ns={animationend:ts("Animation","AnimationEnd"),animationiteration:ts("Animation","AnimationIteration"),animationstart:ts("Animation","AnimationStart"),transitionrun:ts("Transition","TransitionRun"),transitionstart:ts("Transition","TransitionStart"),transitioncancel:ts("Transition","TransitionCancel"),transitionend:ts("Transition","TransitionEnd")},gc={},yp={};Fi&&(yp=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function es(e){if(gc[e])return gc[e];if(!Ns[e])return e;var n=Ns[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in yp)return gc[e]=n[a];return e}var Mp=es("animationend"),Ep=es("animationiteration"),Tp=es("animationstart"),sx=es("transitionrun"),rx=es("transitionstart"),ox=es("transitioncancel"),bp=es("transitionend"),Ap=new Map,_c="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_c.push("scrollEnd");function pi(e,n){Ap.set(e,n),zi(n,[e])}var Rp=new WeakMap;function ni(e,n){if(typeof e=="object"&&e!==null){var a=Rp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ye(n)},Rp.set(e,n),n)}return{value:e,source:n,stack:Ye(n)}}var ii=[],Os=0,vc=0;function ol(){for(var e=Os,n=vc=Os=0;n<e;){var a=ii[n];ii[n++]=null;var r=ii[n];ii[n++]=null;var c=ii[n];ii[n++]=null;var f=ii[n];if(ii[n++]=null,r!==null&&c!==null){var S=r.pending;S===null?c.next=c:(c.next=S.next,S.next=c),r.pending=c}f!==0&&Cp(a,c,f)}}function ll(e,n,a,r){ii[Os++]=e,ii[Os++]=n,ii[Os++]=a,ii[Os++]=r,vc|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function xc(e,n,a,r){return ll(e,n,a,r),ul(e)}function Ps(e,n){return ll(e,null,null,n),ul(e)}function Cp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Rt(a),e=f.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function ul(e){if(50<vo)throw vo=0,Af=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var zs={};function lx(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(e,n,a,r){return new lx(e,n,a,r)}function Sc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hi(e,n){var a=e.alternate;return a===null?(a=jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function wp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function cl(e,n,a,r,c,f){var S=0;if(r=e,typeof e=="function")Sc(e)&&(S=1);else if(typeof e=="string")S=cS(e,a,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=jn(31,a,n,c),e.elementType=D,e.lanes=f,e;case b:return ns(a.children,c,f,n);case R:S=8,c|=24;break;case y:return e=jn(12,a,n,c|2),e.elementType=y,e.lanes=f,e;case B:return e=jn(13,a,n,c),e.elementType=B,e.lanes=f,e;case V:return e=jn(19,a,n,c),e.elementType=V,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case N:S=10;break t;case O:S=9;break t;case w:S=11;break t;case I:S=14;break t;case Z:S=16,r=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=jn(S,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function ns(e,n,a,r){return e=jn(7,e,r,n),e.lanes=a,e}function yc(e,n,a){return e=jn(6,e,null,n),e.lanes=a,e}function Mc(e,n,a){return n=jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Bs=[],Is=0,fl=null,hl=0,ai=[],si=0,is=null,Gi=1,Vi="";function as(e,n){Bs[Is++]=hl,Bs[Is++]=fl,fl=e,hl=n}function Dp(e,n,a){ai[si++]=Gi,ai[si++]=Vi,ai[si++]=is,is=e;var r=Gi;e=Vi;var c=32-Rt(r)-1;r&=~(1<<c),a+=1;var f=32-Rt(n)+c;if(30<f){var S=c-c%5;f=(r&(1<<S)-1).toString(32),r>>=S,c-=S,Gi=1<<32-Rt(n)+c|a<<c|r,Vi=f+e}else Gi=1<<f|a<<c|r,Vi=e}function Ec(e){e.return!==null&&(as(e,1),Dp(e,1,0))}function Tc(e){for(;e===fl;)fl=Bs[--Is],Bs[Is]=null,hl=Bs[--Is],Bs[Is]=null;for(;e===is;)is=ai[--si],ai[si]=null,Vi=ai[--si],ai[si]=null,Gi=ai[--si],ai[si]=null}var Un=null,Ze=null,Re=!1,ss=null,bi=!1,bc=Error(s(519));function rs(e){var n=Error(s(418,""));throw Zr(ni(n,e)),bc}function Up(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[on]=e,n[Sn]=r,a){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(a=0;a<So.length;a++)pe(So[a],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":pe("invalid",n),Fe(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),je(n);break;case"select":pe("invalid",n);break;case"textarea":pe("invalid",n),yn(n,r.value,r.defaultValue,r.children),je(n)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||jg(n.textContent,a)?(r.popover!=null&&(pe("beforetoggle",n),pe("toggle",n)),r.onScroll!=null&&pe("scroll",n),r.onScrollEnd!=null&&pe("scrollend",n),r.onClick!=null&&(n.onclick=Yl),n=!0):n=!1,n||rs(e)}function Lp(e){for(Un=e.return;Un;)switch(Un.tag){case 5:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:Un=Un.return}}function qr(e){if(e!==Un)return!1;if(!Re)return Lp(e),Re=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Vf(e.type,e.memoizedProps)),a=!a),a&&Ze&&rs(e),Lp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Ze=gi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Ze=null}}else n===27?(n=Ze,Na(e.type)?(e=Yf,Yf=null,Ze=e):Ze=n):Ze=Un?gi(e.stateNode.nextSibling):null;return!0}function jr(){Ze=Un=null,Re=!1}function Np(){var e=ss;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),ss=null),e}function Zr(e){ss===null?ss=[e]:ss.push(e)}var Ac=tt(null),os=null,ki=null;function va(e,n,a){St(Ac,n._currentValue),n._currentValue=a}function Xi(e){e._currentValue=Ac.current,vt(Ac)}function Rc(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Cc(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var P=0;P<n.length;P++)if(E.context===n[P]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),Rc(f.return,a,e),r||(S=null);break t}f=E.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(s(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Rc(S,a,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function Kr(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var E=c.type;qn(c.pendingProps.value,S.value)||(e!==null?e.push(E):e=[E])}}else if(c===bt.current){if(S=c.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Ao):e=[Ao])}c=c.return}e!==null&&Cc(n,e,a,r),n.flags|=262144}function dl(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ls(e){os=e,ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return Op(os,e)}function pl(e,n){return os===null&&ls(e),Op(e,n)}function Op(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ki===null){if(e===null)throw Error(s(308));ki=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ki=ki.next=n;return a}var ux=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},cx=o.unstable_scheduleCallback,fx=o.unstable_NormalPriority,un={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wc(){return{controller:new ux,data:new Map,refCount:0}}function Qr(e){e.refCount--,e.refCount===0&&cx(fx,function(){e.controller.abort()})}var Jr=null,Dc=0,Fs=0,Hs=null;function hx(e,n){if(Jr===null){var a=Jr=[];Dc=0,Fs=Nf(),Hs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Dc++,n.then(Pp,Pp),n}function Pp(){if(--Dc===0&&Jr!==null){Hs!==null&&(Hs.status="fulfilled");var e=Jr;Jr=null,Fs=0,Hs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function dx(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var zp=z.S;z.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&hx(e,n),zp!==null&&zp(e,n)};var us=tt(null);function Uc(){var e=us.current;return e!==null?e:Xe.pooledCache}function ml(e,n){n===null?St(us,us.current):St(us,n.pool)}function Bp(){var e=Uc();return e===null?null:{parent:un._currentValue,pool:e}}var $r=Error(s(460)),Ip=Error(s(474)),gl=Error(s(542)),Lc={then:function(){}};function Fp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function _l(){}function Hp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(_l,_l),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Vp(e),e;default:if(typeof n.status=="string")n.then(_l,_l);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Vp(e),e}throw to=n,$r}}var to=null;function Gp(){if(to===null)throw Error(s(459));var e=to;return to=null,e}function Vp(e){if(e===$r||e===gl)throw Error(s(483))}var xa=!1;function Nc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Oc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ya(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ce&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=ul(e),Cp(e,null,a),n}return ll(e,r,n,a),ul(e)}function eo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,ie(e,a)}}function Pc(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var zc=!1;function no(){if(zc){var e=Hs;if(e!==null)throw e}}function io(e,n,a,r){zc=!1;var c=e.updateQueue;xa=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var P=E,$=P.next;P.next=null,S===null?f=$:S.next=$,S=P;var ut=e.alternate;ut!==null&&(ut=ut.updateQueue,E=ut.lastBaseUpdate,E!==S&&(E===null?ut.firstBaseUpdate=$:E.next=$,ut.lastBaseUpdate=P))}if(f!==null){var mt=c.baseState;S=0,ut=$=P=null,E=f;do{var nt=E.lane&-536870913,it=nt!==E.lane;if(it?(ye&nt)===nt:(r&nt)===nt){nt!==0&&nt===Fs&&(zc=!0),ut!==null&&(ut=ut.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var te=e,Zt=E;nt=n;var Oe=a;switch(Zt.tag){case 1:if(te=Zt.payload,typeof te=="function"){mt=te.call(Oe,mt,nt);break t}mt=te;break t;case 3:te.flags=te.flags&-65537|128;case 0:if(te=Zt.payload,nt=typeof te=="function"?te.call(Oe,mt,nt):te,nt==null)break t;mt=g({},mt,nt);break t;case 2:xa=!0}}nt=E.callback,nt!==null&&(e.flags|=64,it&&(e.flags|=8192),it=c.callbacks,it===null?c.callbacks=[nt]:it.push(nt))}else it={lane:nt,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ut===null?($=ut=it,P=mt):ut=ut.next=it,S|=nt;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;it=E,E=it.next,it.next=null,c.lastBaseUpdate=it,c.shared.pending=null}}while(!0);ut===null&&(P=mt),c.baseState=P,c.firstBaseUpdate=$,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),wa|=S,e.lanes=S,e.memoizedState=mt}}function kp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Xp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)kp(a[e],n)}var Gs=tt(null),vl=tt(0);function Wp(e,n){e=Qi,St(vl,e),St(Gs,n),Qi=e|n.baseLanes}function Bc(){St(vl,Qi),St(Gs,Gs.current)}function Ic(){Qi=vl.current,vt(Gs),vt(vl)}var Ma=0,ue=null,Le=null,an=null,xl=!1,Vs=!1,cs=!1,Sl=0,ao=0,ks=null,px=0;function Je(){throw Error(s(321))}function Fc(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!qn(e[a],n[a]))return!1;return!0}function Hc(e,n,a,r,c,f){return Ma=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?Cm:wm,cs=!1,f=a(r,c),cs=!1,Vs&&(f=qp(n,a,r,c)),Yp(e),f}function Yp(e){z.H=Al;var n=Le!==null&&Le.next!==null;if(Ma=0,an=Le=ue=null,xl=!1,ao=0,ks=null,n)throw Error(s(300));e===null||gn||(e=e.dependencies,e!==null&&dl(e)&&(gn=!0))}function qp(e,n,a,r){ue=e;var c=0;do{if(Vs&&(ks=null),ao=0,Vs=!1,25<=c)throw Error(s(301));if(c+=1,an=Le=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=yx,f=n(a,r)}while(Vs);return f}function mx(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?so(n):n,e=e.useState()[0],(Le!==null?Le.memoizedState:null)!==e&&(ue.flags|=1024),n}function Gc(){var e=Sl!==0;return Sl=0,e}function Vc(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function kc(e){if(xl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}xl=!1}Ma=0,an=Le=ue=null,Vs=!1,ao=Sl=0,ks=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?ue.memoizedState=an=e:an=an.next=e,an}function sn(){if(Le===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var n=an===null?ue.memoizedState:an.next;if(n!==null)an=n,Le=e;else{if(e===null)throw ue.alternate===null?Error(s(467)):Error(s(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},an===null?ue.memoizedState=an=e:an=an.next=e}return an}function Xc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function so(e){var n=ao;return ao+=1,ks===null&&(ks=[]),e=Hp(ks,e,n),n=ue,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Cm:wm),e}function yl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return so(e);if(e.$$typeof===N)return Rn(e)}throw Error(s(438,String(e)))}function Wc(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ue.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Xc(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=C;return n.index++,a}function Wi(e,n){return typeof n=="function"?n(e):n}function Ml(e){var n=sn();return Yc(n,Le,e)}function Yc(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var E=S=null,P=null,$=n,ut=!1;do{var mt=$.lane&-536870913;if(mt!==$.lane?(ye&mt)===mt:(Ma&mt)===mt){var nt=$.revertLane;if(nt===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),mt===Fs&&(ut=!0);else if((Ma&nt)===nt){$=$.next,nt===Fs&&(ut=!0);continue}else mt={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(E=P=mt,S=f):P=P.next=mt,ue.lanes|=nt,wa|=nt;mt=$.action,cs&&a(f,mt),f=$.hasEagerState?$.eagerState:a(f,mt)}else nt={lane:mt,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(E=P=nt,S=f):P=P.next=nt,ue.lanes|=mt,wa|=mt;$=$.next}while($!==null&&$!==n);if(P===null?S=f:P.next=E,!qn(f,e.memoizedState)&&(gn=!0,ut&&(a=Hs,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=P,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function qc(e){var n=sn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=e(f,S.action),S=S.next;while(S!==c);qn(f,n.memoizedState)||(gn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function jp(e,n,a){var r=ue,c=sn(),f=Re;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!qn((Le||c).memoizedState,a);S&&(c.memoizedState=a,gn=!0),c=c.queue;var E=Qp.bind(null,r,c,e);if(ro(2048,8,E,[e]),c.getSnapshot!==n||S||an!==null&&an.memoizedState.tag&1){if(r.flags|=2048,Xs(9,El(),Kp.bind(null,r,c,a,n),null),Xe===null)throw Error(s(349));f||(Ma&124)!==0||Zp(r,n,a)}return a}function Zp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=Xc(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Kp(e,n,a,r){n.value=a,n.getSnapshot=r,Jp(n)&&$p(e)}function Qp(e,n,a){return a(function(){Jp(n)&&$p(e)})}function Jp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!qn(e,a)}catch{return!0}}function $p(e){var n=Ps(e,2);n!==null&&$n(n,e,2)}function jc(e){var n=Hn();if(typeof e=="function"){var a=e;if(e=a(),cs){At(!0);try{a()}finally{At(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},n}function tm(e,n,a,r){return e.baseState=a,Yc(e,Le,typeof r=="function"?r:Wi)}function gx(e,n,a,r,c){if(bl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};z.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,em(n,f)):(f.next=a.next,n.pending=a.next=f)}}function em(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=z.T,S={};z.T=S;try{var E=a(c,r),P=z.S;P!==null&&P(S,E),nm(e,n,E)}catch($){Zc(e,n,$)}finally{z.T=f}}else try{f=a(c,r),nm(e,n,f)}catch($){Zc(e,n,$)}}function nm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){im(e,n,r)},function(r){return Zc(e,n,r)}):im(e,n,a)}function im(e,n,a){n.status="fulfilled",n.value=a,am(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,em(e,a)))}function Zc(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,am(n),n=n.next;while(n!==r)}e.action=null}function am(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function sm(e,n){return n}function rm(e,n){if(Re){var a=Xe.formState;if(a!==null){t:{var r=ue;if(Re){if(Ze){e:{for(var c=Ze,f=bi;c.nodeType!==8;){if(!f){c=null;break e}if(c=gi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ze=gi(c.nextSibling),r=c.data==="F!";break t}}rs(r)}r=!1}r&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sm,lastRenderedState:n},a.queue=r,a=bm.bind(null,ue,r),r.dispatch=a,r=jc(!1),f=tf.bind(null,ue,!1,r.queue),r=Hn(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=gx.bind(null,ue,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function om(e){var n=sn();return lm(n,Le,e)}function lm(e,n,a){if(n=Yc(e,n,sm)[0],e=Ml(Wi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=so(n)}catch(S){throw S===$r?gl:S}else r=n;n=sn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,Xs(9,El(),_x.bind(null,c,a),null)),[r,f,e]}function _x(e,n){e.action=n}function um(e){var n=sn(),a=Le;if(a!==null)return lm(n,a,e);sn(),n=n.memoizedState,a=sn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Xs(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=ue.updateQueue,n===null&&(n=Xc(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function El(){return{destroy:void 0,resource:void 0}}function cm(){return sn().memoizedState}function Tl(e,n,a,r){var c=Hn();r=r===void 0?null:r,ue.flags|=e,c.memoizedState=Xs(1|n,El(),a,r)}function ro(e,n,a,r){var c=sn();r=r===void 0?null:r;var f=c.memoizedState.inst;Le!==null&&r!==null&&Fc(r,Le.memoizedState.deps)?c.memoizedState=Xs(n,f,a,r):(ue.flags|=e,c.memoizedState=Xs(1|n,f,a,r))}function fm(e,n){Tl(8390656,8,e,n)}function hm(e,n){ro(2048,8,e,n)}function dm(e,n){return ro(4,2,e,n)}function pm(e,n){return ro(4,4,e,n)}function mm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function gm(e,n,a){a=a!=null?a.concat([e]):null,ro(4,4,mm.bind(null,n,e),a)}function Kc(){}function _m(e,n){var a=sn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Fc(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function vm(e,n){var a=sn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Fc(n,r[1]))return r[0];if(r=e(),cs){At(!0);try{e()}finally{At(!1)}}return a.memoizedState=[r,n],r}function Qc(e,n,a){return a===void 0||(Ma&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=yg(),ue.lanes|=e,wa|=e,a)}function xm(e,n,a,r){return qn(a,n)?a:Gs.current!==null?(e=Qc(e,a,r),qn(e,n)||(gn=!0),e):(Ma&42)===0?(gn=!0,e.memoizedState=a):(e=yg(),ue.lanes|=e,wa|=e,n)}function Sm(e,n,a,r,c){var f=K.p;K.p=f!==0&&8>f?f:8;var S=z.T,E={};z.T=E,tf(e,!1,n,a);try{var P=c(),$=z.S;if($!==null&&$(E,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ut=dx(P,r);oo(e,n,ut,Jn(e))}else oo(e,n,r,Jn(e))}catch(mt){oo(e,n,{then:function(){},status:"rejected",reason:mt},Jn())}finally{K.p=f,z.T=S}}function vx(){}function Jc(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=ym(e).queue;Sm(e,c,n,Y,a===null?vx:function(){return Mm(e),a(r)})}function ym(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Mm(e){var n=ym(e).next.queue;oo(e,n,{},Jn())}function $c(){return Rn(Ao)}function Em(){return sn().memoizedState}function Tm(){return sn().memoizedState}function xx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();e=Sa(a);var r=ya(n,e,a);r!==null&&($n(r,n,a),eo(r,n,a)),n={cache:wc()},e.payload=n;return}n=n.return}}function Sx(e,n,a){var r=Jn();a={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},bl(e)?Am(n,a):(a=xc(e,n,a,r),a!==null&&($n(a,e,r),Rm(a,n,r)))}function bm(e,n,a){var r=Jn();oo(e,n,a,r)}function oo(e,n,a,r){var c={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(bl(e))Am(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,E=f(S,a);if(c.hasEagerState=!0,c.eagerState=E,qn(E,S))return ll(e,n,c,0),Xe===null&&ol(),!1}catch{}finally{}if(a=xc(e,n,c,r),a!==null)return $n(a,e,r),Rm(a,n,r),!0}return!1}function tf(e,n,a,r){if(r={lane:2,revertLane:Nf(),action:r,hasEagerState:!1,eagerState:null,next:null},bl(e)){if(n)throw Error(s(479))}else n=xc(e,a,r,2),n!==null&&$n(n,e,2)}function bl(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function Am(e,n){Vs=xl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Rm(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,ie(e,a)}}var Al={readContext:Rn,use:yl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je},Cm={readContext:Rn,use:yl,useCallback:function(e,n){return Hn().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:fm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Tl(4194308,4,mm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Tl(4194308,4,e,n)},useInsertionEffect:function(e,n){Tl(4,2,e,n)},useMemo:function(e,n){var a=Hn();n=n===void 0?null:n;var r=e();if(cs){At(!0);try{e()}finally{At(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Hn();if(a!==void 0){var c=a(n);if(cs){At(!0);try{a(n)}finally{At(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=Sx.bind(null,ue,e),[r.memoizedState,e]},useRef:function(e){var n=Hn();return e={current:e},n.memoizedState=e},useState:function(e){e=jc(e);var n=e.queue,a=bm.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Kc,useDeferredValue:function(e,n){var a=Hn();return Qc(a,e,n)},useTransition:function(){var e=jc(!1);return e=Sm.bind(null,ue,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=ue,c=Hn();if(Re){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xe===null)throw Error(s(349));(ye&124)!==0||Zp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,fm(Qp.bind(null,r,f,e),[e]),r.flags|=2048,Xs(9,El(),Kp.bind(null,r,f,a,n),null),a},useId:function(){var e=Hn(),n=Xe.identifierPrefix;if(Re){var a=Vi,r=Gi;a=(r&~(1<<32-Rt(r)-1)).toString(32)+a,n="«"+n+"R"+a,a=Sl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=px++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:$c,useFormState:rm,useActionState:rm,useOptimistic:function(e){var n=Hn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=tf.bind(null,ue,!0,a),a.dispatch=n,[e,n]},useMemoCache:Wc,useCacheRefresh:function(){return Hn().memoizedState=xx.bind(null,ue)}},wm={readContext:Rn,use:yl,useCallback:_m,useContext:Rn,useEffect:hm,useImperativeHandle:gm,useInsertionEffect:dm,useLayoutEffect:pm,useMemo:vm,useReducer:Ml,useRef:cm,useState:function(){return Ml(Wi)},useDebugValue:Kc,useDeferredValue:function(e,n){var a=sn();return xm(a,Le.memoizedState,e,n)},useTransition:function(){var e=Ml(Wi)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:so(e),n]},useSyncExternalStore:jp,useId:Em,useHostTransitionStatus:$c,useFormState:om,useActionState:om,useOptimistic:function(e,n){var a=sn();return tm(a,Le,e,n)},useMemoCache:Wc,useCacheRefresh:Tm},yx={readContext:Rn,use:yl,useCallback:_m,useContext:Rn,useEffect:hm,useImperativeHandle:gm,useInsertionEffect:dm,useLayoutEffect:pm,useMemo:vm,useReducer:qc,useRef:cm,useState:function(){return qc(Wi)},useDebugValue:Kc,useDeferredValue:function(e,n){var a=sn();return Le===null?Qc(a,e,n):xm(a,Le.memoizedState,e,n)},useTransition:function(){var e=qc(Wi)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:so(e),n]},useSyncExternalStore:jp,useId:Em,useHostTransitionStatus:$c,useFormState:um,useActionState:um,useOptimistic:function(e,n){var a=sn();return Le!==null?tm(a,Le,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Wc,useCacheRefresh:Tm},Ws=null,lo=0;function Rl(e){var n=lo;return lo+=1,Ws===null&&(Ws=[]),Hp(Ws,e,n)}function uo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Cl(e,n){throw n.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Dm(e){var n=e._init;return n(e._payload)}function Um(e){function n(X,H){if(e){var Q=X.deletions;Q===null?(X.deletions=[H],X.flags|=16):Q.push(H)}}function a(X,H){if(!e)return null;for(;H!==null;)n(X,H),H=H.sibling;return null}function r(X){for(var H=new Map;X!==null;)X.key!==null?H.set(X.key,X):H.set(X.index,X),X=X.sibling;return H}function c(X,H){return X=Hi(X,H),X.index=0,X.sibling=null,X}function f(X,H,Q){return X.index=Q,e?(Q=X.alternate,Q!==null?(Q=Q.index,Q<H?(X.flags|=67108866,H):Q):(X.flags|=67108866,H)):(X.flags|=1048576,H)}function S(X){return e&&X.alternate===null&&(X.flags|=67108866),X}function E(X,H,Q,ft){return H===null||H.tag!==6?(H=yc(Q,X.mode,ft),H.return=X,H):(H=c(H,Q),H.return=X,H)}function P(X,H,Q,ft){var Ft=Q.type;return Ft===b?ut(X,H,Q.props.children,ft,Q.key):H!==null&&(H.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===Z&&Dm(Ft)===H.type)?(H=c(H,Q.props),uo(H,Q),H.return=X,H):(H=cl(Q.type,Q.key,Q.props,null,X.mode,ft),uo(H,Q),H.return=X,H)}function $(X,H,Q,ft){return H===null||H.tag!==4||H.stateNode.containerInfo!==Q.containerInfo||H.stateNode.implementation!==Q.implementation?(H=Mc(Q,X.mode,ft),H.return=X,H):(H=c(H,Q.children||[]),H.return=X,H)}function ut(X,H,Q,ft,Ft){return H===null||H.tag!==7?(H=ns(Q,X.mode,ft,Ft),H.return=X,H):(H=c(H,Q),H.return=X,H)}function mt(X,H,Q){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=yc(""+H,X.mode,Q),H.return=X,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case x:return Q=cl(H.type,H.key,H.props,null,X.mode,Q),uo(Q,H),Q.return=X,Q;case M:return H=Mc(H,X.mode,Q),H.return=X,H;case Z:var ft=H._init;return H=ft(H._payload),mt(X,H,Q)}if(ht(H)||lt(H))return H=ns(H,X.mode,Q,null),H.return=X,H;if(typeof H.then=="function")return mt(X,Rl(H),Q);if(H.$$typeof===N)return mt(X,pl(X,H),Q);Cl(X,H)}return null}function nt(X,H,Q,ft){var Ft=H!==null?H.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Ft!==null?null:E(X,H,""+Q,ft);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:return Q.key===Ft?P(X,H,Q,ft):null;case M:return Q.key===Ft?$(X,H,Q,ft):null;case Z:return Ft=Q._init,Q=Ft(Q._payload),nt(X,H,Q,ft)}if(ht(Q)||lt(Q))return Ft!==null?null:ut(X,H,Q,ft,null);if(typeof Q.then=="function")return nt(X,H,Rl(Q),ft);if(Q.$$typeof===N)return nt(X,H,pl(X,Q),ft);Cl(X,Q)}return null}function it(X,H,Q,ft,Ft){if(typeof ft=="string"&&ft!==""||typeof ft=="number"||typeof ft=="bigint")return X=X.get(Q)||null,E(H,X,""+ft,Ft);if(typeof ft=="object"&&ft!==null){switch(ft.$$typeof){case x:return X=X.get(ft.key===null?Q:ft.key)||null,P(H,X,ft,Ft);case M:return X=X.get(ft.key===null?Q:ft.key)||null,$(H,X,ft,Ft);case Z:var fe=ft._init;return ft=fe(ft._payload),it(X,H,Q,ft,Ft)}if(ht(ft)||lt(ft))return X=X.get(Q)||null,ut(H,X,ft,Ft,null);if(typeof ft.then=="function")return it(X,H,Q,Rl(ft),Ft);if(ft.$$typeof===N)return it(X,H,Q,pl(H,ft),Ft);Cl(H,ft)}return null}function te(X,H,Q,ft){for(var Ft=null,fe=null,Gt=H,Jt=H=0,vn=null;Gt!==null&&Jt<Q.length;Jt++){Gt.index>Jt?(vn=Gt,Gt=null):vn=Gt.sibling;var be=nt(X,Gt,Q[Jt],ft);if(be===null){Gt===null&&(Gt=vn);break}e&&Gt&&be.alternate===null&&n(X,Gt),H=f(be,H,Jt),fe===null?Ft=be:fe.sibling=be,fe=be,Gt=vn}if(Jt===Q.length)return a(X,Gt),Re&&as(X,Jt),Ft;if(Gt===null){for(;Jt<Q.length;Jt++)Gt=mt(X,Q[Jt],ft),Gt!==null&&(H=f(Gt,H,Jt),fe===null?Ft=Gt:fe.sibling=Gt,fe=Gt);return Re&&as(X,Jt),Ft}for(Gt=r(Gt);Jt<Q.length;Jt++)vn=it(Gt,X,Jt,Q[Jt],ft),vn!==null&&(e&&vn.alternate!==null&&Gt.delete(vn.key===null?Jt:vn.key),H=f(vn,H,Jt),fe===null?Ft=vn:fe.sibling=vn,fe=vn);return e&&Gt.forEach(function(Ia){return n(X,Ia)}),Re&&as(X,Jt),Ft}function Zt(X,H,Q,ft){if(Q==null)throw Error(s(151));for(var Ft=null,fe=null,Gt=H,Jt=H=0,vn=null,be=Q.next();Gt!==null&&!be.done;Jt++,be=Q.next()){Gt.index>Jt?(vn=Gt,Gt=null):vn=Gt.sibling;var Ia=nt(X,Gt,be.value,ft);if(Ia===null){Gt===null&&(Gt=vn);break}e&&Gt&&Ia.alternate===null&&n(X,Gt),H=f(Ia,H,Jt),fe===null?Ft=Ia:fe.sibling=Ia,fe=Ia,Gt=vn}if(be.done)return a(X,Gt),Re&&as(X,Jt),Ft;if(Gt===null){for(;!be.done;Jt++,be=Q.next())be=mt(X,be.value,ft),be!==null&&(H=f(be,H,Jt),fe===null?Ft=be:fe.sibling=be,fe=be);return Re&&as(X,Jt),Ft}for(Gt=r(Gt);!be.done;Jt++,be=Q.next())be=it(Gt,X,Jt,be.value,ft),be!==null&&(e&&be.alternate!==null&&Gt.delete(be.key===null?Jt:be.key),H=f(be,H,Jt),fe===null?Ft=be:fe.sibling=be,fe=be);return e&&Gt.forEach(function(MS){return n(X,MS)}),Re&&as(X,Jt),Ft}function Oe(X,H,Q,ft){if(typeof Q=="object"&&Q!==null&&Q.type===b&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:t:{for(var Ft=Q.key;H!==null;){if(H.key===Ft){if(Ft=Q.type,Ft===b){if(H.tag===7){a(X,H.sibling),ft=c(H,Q.props.children),ft.return=X,X=ft;break t}}else if(H.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===Z&&Dm(Ft)===H.type){a(X,H.sibling),ft=c(H,Q.props),uo(ft,Q),ft.return=X,X=ft;break t}a(X,H);break}else n(X,H);H=H.sibling}Q.type===b?(ft=ns(Q.props.children,X.mode,ft,Q.key),ft.return=X,X=ft):(ft=cl(Q.type,Q.key,Q.props,null,X.mode,ft),uo(ft,Q),ft.return=X,X=ft)}return S(X);case M:t:{for(Ft=Q.key;H!==null;){if(H.key===Ft)if(H.tag===4&&H.stateNode.containerInfo===Q.containerInfo&&H.stateNode.implementation===Q.implementation){a(X,H.sibling),ft=c(H,Q.children||[]),ft.return=X,X=ft;break t}else{a(X,H);break}else n(X,H);H=H.sibling}ft=Mc(Q,X.mode,ft),ft.return=X,X=ft}return S(X);case Z:return Ft=Q._init,Q=Ft(Q._payload),Oe(X,H,Q,ft)}if(ht(Q))return te(X,H,Q,ft);if(lt(Q)){if(Ft=lt(Q),typeof Ft!="function")throw Error(s(150));return Q=Ft.call(Q),Zt(X,H,Q,ft)}if(typeof Q.then=="function")return Oe(X,H,Rl(Q),ft);if(Q.$$typeof===N)return Oe(X,H,pl(X,Q),ft);Cl(X,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,H!==null&&H.tag===6?(a(X,H.sibling),ft=c(H,Q),ft.return=X,X=ft):(a(X,H),ft=yc(Q,X.mode,ft),ft.return=X,X=ft),S(X)):a(X,H)}return function(X,H,Q,ft){try{lo=0;var Ft=Oe(X,H,Q,ft);return Ws=null,Ft}catch(Gt){if(Gt===$r||Gt===gl)throw Gt;var fe=jn(29,Gt,null,X.mode);return fe.lanes=ft,fe.return=X,fe}finally{}}}var Ys=Um(!0),Lm=Um(!1),ri=tt(null),Ai=null;function Ea(e){var n=e.alternate;St(cn,cn.current&1),St(ri,e),Ai===null&&(n===null||Gs.current!==null||n.memoizedState!==null)&&(Ai=e)}function Nm(e){if(e.tag===22){if(St(cn,cn.current),St(ri,e),Ai===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ai=e)}}else Ta()}function Ta(){St(cn,cn.current),St(ri,ri.current)}function Yi(e){vt(ri),Ai===e&&(Ai=null),vt(cn)}var cn=tt(0);function wl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Wf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function ef(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var nf={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=Jn(),c=Sa(r);c.payload=n,a!=null&&(c.callback=a),n=ya(e,c,r),n!==null&&($n(n,e,r),eo(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=Jn(),c=Sa(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ya(e,c,r),n!==null&&($n(n,e,r),eo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Jn(),r=Sa(a);r.tag=2,n!=null&&(r.callback=n),n=ya(e,r,a),n!==null&&($n(n,e,a),eo(n,e,a))}};function Om(e,n,a,r,c,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,S):n.prototype&&n.prototype.isPureReactComponent?!Wr(a,r)||!Wr(c,f):!0}function Pm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&nf.enqueueReplaceState(n,n.state,null)}function fs(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var Dl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function zm(e){Dl(e)}function Bm(e){console.error(e)}function Im(e){Dl(e)}function Ul(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Fm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function af(e,n,a){return a=Sa(a),a.tag=3,a.payload={element:null},a.callback=function(){Ul(e,n)},a}function Hm(e){return e=Sa(e),e.tag=3,e}function Gm(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){Fm(n,a,r)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Fm(n,a,r),typeof c!="function"&&(Da===null?Da=new Set([this]):Da.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function Mx(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Kr(n,a,c,!0),a=ri.current,a!==null){switch(a.tag){case 13:return Ai===null?Cf():a.alternate===null&&Ke===0&&(Ke=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===Lc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Df(e,r,c)),!1;case 22:return a.flags|=65536,r===Lc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Df(e,r,c)),!1}throw Error(s(435,a.tag))}return Df(e,r,c),Cf(),!1}if(Re)return n=ri.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==bc&&(e=Error(s(422),{cause:r}),Zr(ni(e,a)))):(r!==bc&&(n=Error(s(423),{cause:r}),Zr(ni(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=ni(r,a),c=af(e.stateNode,r,c),Pc(e,c),Ke!==4&&(Ke=2)),!1;var f=Error(s(520),{cause:r});if(f=ni(f,a),_o===null?_o=[f]:_o.push(f),Ke!==4&&(Ke=2),n===null)return!0;r=ni(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=af(a.stateNode,r,e),Pc(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Da===null||!Da.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Hm(c),Gm(c,e,a,r),Pc(a,c),!1}a=a.return}while(a!==null);return!1}var Vm=Error(s(461)),gn=!1;function Mn(e,n,a,r){n.child=e===null?Lm(n,null,a,r):Ys(n,e.child,a,r)}function km(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var S={};for(var E in r)E!=="ref"&&(S[E]=r[E])}else S=r;return ls(n),r=Hc(e,n,a,S,f,c),E=Gc(),e!==null&&!gn?(Vc(e,n,c),qi(e,n,c)):(Re&&E&&Ec(n),n.flags|=1,Mn(e,n,r,c),n.child)}function Xm(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!Sc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Wm(e,n,f,r,c)):(e=cl(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!hf(e,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Wr,a(S,r)&&e.ref===n.ref)return qi(e,n,c)}return n.flags|=1,e=Hi(f,r),e.ref=n.ref,e.return=n,n.child=e}function Wm(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(Wr(f,r)&&e.ref===n.ref)if(gn=!1,n.pendingProps=r=f,hf(e,c))(e.flags&131072)!==0&&(gn=!0);else return n.lanes=e.lanes,qi(e,n,c)}return sf(e,n,a,r,c)}function Ym(e,n,a){var r=n.pendingProps,c=r.children,f=e!==null?e.memoizedState:null;if(r.mode==="hidden"){if((n.flags&128)!==0){if(r=f!==null?f.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~r}else n.childLanes=0,n.child=null;return qm(e,n,r,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ml(n,f!==null?f.cachePool:null),f!==null?Wp(n,f):Bc(),Nm(n);else return n.lanes=n.childLanes=536870912,qm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(ml(n,f.cachePool),Wp(n,f),Ta(),n.memoizedState=null):(e!==null&&ml(n,null),Bc(),Ta());return Mn(e,n,c,a),n.child}function qm(e,n,a,r){var c=Uc();return c=c===null?null:{parent:un._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&ml(n,null),Bc(),Nm(n),e!==null&&Kr(e,n,r,!0),null}function Ll(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function sf(e,n,a,r,c){return ls(n),a=Hc(e,n,a,r,void 0,c),r=Gc(),e!==null&&!gn?(Vc(e,n,c),qi(e,n,c)):(Re&&r&&Ec(n),n.flags|=1,Mn(e,n,a,c),n.child)}function jm(e,n,a,r,c,f){return ls(n),n.updateQueue=null,a=qp(n,r,a,c),Yp(e),r=Gc(),e!==null&&!gn?(Vc(e,n,f),qi(e,n,f)):(Re&&r&&Ec(n),n.flags|=1,Mn(e,n,a,f),n.child)}function Zm(e,n,a,r,c){if(ls(n),n.stateNode===null){var f=zs,S=a.contextType;typeof S=="object"&&S!==null&&(f=Rn(S)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=nf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Nc(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Rn(S):zs,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(ef(n,a,S,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&nf.enqueueReplaceState(f,f.state,null),io(n,r,f,c),no(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var E=n.memoizedProps,P=fs(a,E);f.props=P;var $=f.context,ut=a.contextType;S=zs,typeof ut=="object"&&ut!==null&&(S=Rn(ut));var mt=a.getDerivedStateFromProps;ut=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||$!==S)&&Pm(n,f,r,S),xa=!1;var nt=n.memoizedState;f.state=nt,io(n,r,f,c),no(),$=n.memoizedState,E||nt!==$||xa?(typeof mt=="function"&&(ef(n,a,mt,r),$=n.memoizedState),(P=xa||Om(n,a,P,r,nt,$,S))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=$),f.props=r,f.state=$,f.context=S,r=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Oc(e,n),S=n.memoizedProps,ut=fs(a,S),f.props=ut,mt=n.pendingProps,nt=f.context,$=a.contextType,P=zs,typeof $=="object"&&$!==null&&(P=Rn($)),E=a.getDerivedStateFromProps,($=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==mt||nt!==P)&&Pm(n,f,r,P),xa=!1,nt=n.memoizedState,f.state=nt,io(n,r,f,c),no();var it=n.memoizedState;S!==mt||nt!==it||xa||e!==null&&e.dependencies!==null&&dl(e.dependencies)?(typeof E=="function"&&(ef(n,a,E,r),it=n.memoizedState),(ut=xa||Om(n,a,ut,r,nt,it,P)||e!==null&&e.dependencies!==null&&dl(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,it,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,it,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=it),f.props=r,f.state=it,f.context=P,r=ut):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Ll(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=Ys(n,e.child,null,c),n.child=Ys(n,null,a,c)):Mn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=qi(e,n,c),e}function Km(e,n,a,r){return jr(),n.flags|=256,Mn(e,n,a,r),n.child}var rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function of(e){return{baseLanes:e,cachePool:Bp()}}function lf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=oi),e}function Qm(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Re){if(c?Ea(n):Ta(),Re){var E=Ze,P;if(P=E){t:{for(P=E,E=bi;P.nodeType!==8;){if(!E){E=null;break t}if(P=gi(P.nextSibling),P===null){E=null;break t}}E=P}E!==null?(n.memoizedState={dehydrated:E,treeContext:is!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},P=jn(18,null,null,0),P.stateNode=E,P.return=n,n.child=P,Un=n,Ze=null,P=!0):P=!1}P||rs(n)}if(E=n.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return Wf(E)?n.lanes=32:n.lanes=536870912,null;Yi(n)}return E=r.children,r=r.fallback,c?(Ta(),c=n.mode,E=Nl({mode:"hidden",children:E},c),r=ns(r,c,a,null),E.return=n,r.return=n,E.sibling=r,n.child=E,c=n.child,c.memoizedState=of(a),c.childLanes=lf(e,S,a),n.memoizedState=rf,r):(Ea(n),uf(n,E))}if(P=e.memoizedState,P!==null&&(E=P.dehydrated,E!==null)){if(f)n.flags&256?(Ea(n),n.flags&=-257,n=cf(e,n,a)):n.memoizedState!==null?(Ta(),n.child=e.child,n.flags|=128,n=null):(Ta(),c=r.fallback,E=n.mode,r=Nl({mode:"visible",children:r.children},E),c=ns(c,E,a,null),c.flags|=2,r.return=n,c.return=n,r.sibling=c,n.child=r,Ys(n,e.child,null,a),r=n.child,r.memoizedState=of(a),r.childLanes=lf(e,S,a),n.memoizedState=rf,n=c);else if(Ea(n),Wf(E)){if(S=E.nextSibling&&E.nextSibling.dataset,S)var $=S.dgst;S=$,r=Error(s(419)),r.stack="",r.digest=S,Zr({value:r,source:null,stack:null}),n=cf(e,n,a)}else if(gn||Kr(e,n,a,!1),S=(a&e.childLanes)!==0,gn||S){if(S=Xe,S!==null&&(r=a&-a,r=(r&42)!==0?1:Ve(r),r=(r&(S.suspendedLanes|a))!==0?0:r,r!==0&&r!==P.retryLane))throw P.retryLane=r,Ps(e,r),$n(S,e,r),Vm;E.data==="$?"||Cf(),n=cf(e,n,a)}else E.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=P.treeContext,Ze=gi(E.nextSibling),Un=n,Re=!0,ss=null,bi=!1,e!==null&&(ai[si++]=Gi,ai[si++]=Vi,ai[si++]=is,Gi=e.id,Vi=e.overflow,is=n),n=uf(n,r.children),n.flags|=4096);return n}return c?(Ta(),c=r.fallback,E=n.mode,P=e.child,$=P.sibling,r=Hi(P,{mode:"hidden",children:r.children}),r.subtreeFlags=P.subtreeFlags&65011712,$!==null?c=Hi($,c):(c=ns(c,E,a,null),c.flags|=2),c.return=n,r.return=n,r.sibling=c,n.child=r,r=c,c=n.child,E=e.child.memoizedState,E===null?E=of(a):(P=E.cachePool,P!==null?($=un._currentValue,P=P.parent!==$?{parent:$,pool:$}:P):P=Bp(),E={baseLanes:E.baseLanes|a,cachePool:P}),c.memoizedState=E,c.childLanes=lf(e,S,a),n.memoizedState=rf,r):(Ea(n),a=e.child,e=a.sibling,a=Hi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function uf(e,n){return n=Nl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Nl(e,n){return e=jn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function cf(e,n,a){return Ys(n,e.child,null,a),e=uf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Jm(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Rc(e.return,n,a)}function ff(e,n,a,r,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=r,f.tail=a,f.tailMode=c)}function $m(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;if(Mn(e,n,r.children,a),r=cn.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jm(e,a,n);else if(e.tag===19)Jm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(St(cn,r),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&wl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),ff(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&wl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}ff(n,!0,a,null,f);break;case"together":ff(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function qi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),wa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Kr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Hi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Hi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function hf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&dl(e)))}function Ex(e,n,a){switch(n.tag){case 3:Nt(n,n.stateNode.containerInfo),va(n,un,e.memoizedState.cache),jr();break;case 27:case 5:Kt(n);break;case 4:Nt(n,n.stateNode.containerInfo);break;case 10:va(n,n.type,n.memoizedProps.value);break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Ea(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Qm(e,n,a):(Ea(n),e=qi(e,n,a),e!==null?e.sibling:null);Ea(n);break;case 19:var c=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Kr(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return $m(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),St(cn,cn.current),r)break;return null;case 22:case 23:return n.lanes=0,Ym(e,n,a);case 24:va(n,un,e.memoizedState.cache)}return qi(e,n,a)}function tg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)gn=!0;else{if(!hf(e,a)&&(n.flags&128)===0)return gn=!1,Ex(e,n,a);gn=(e.flags&131072)!==0}else gn=!1,Re&&(n.flags&1048576)!==0&&Dp(n,hl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var r=n.elementType,c=r._init;if(r=c(r._payload),n.type=r,typeof r=="function")Sc(r)?(e=fs(r,e),n.tag=1,n=Zm(null,n,r,e,a)):(n.tag=0,n=sf(null,n,r,e,a));else{if(r!=null){if(c=r.$$typeof,c===w){n.tag=11,n=km(null,n,r,e,a);break t}else if(c===I){n.tag=14,n=Xm(null,n,r,e,a);break t}}throw n=gt(r)||r,Error(s(306,n,""))}}return n;case 0:return sf(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=fs(r,n.pendingProps),Zm(e,n,r,c,a);case 3:t:{if(Nt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Oc(e,n),io(n,r,null,a);var S=n.memoizedState;if(r=S.cache,va(n,un,r),r!==f.cache&&Cc(n,[un],a,!0),no(),r=S.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Km(e,n,r,a);break t}else if(r!==c){c=ni(Error(s(424)),n),Zr(c),n=Km(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=gi(e.firstChild),Un=n,Re=!0,ss=null,bi=!0,a=Lm(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(jr(),r===c){n=qi(e,n,a);break t}Mn(e,n,r,a)}n=n.child}return n;case 26:return Ll(e,n),e===null?(a=a_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(a=n.type,e=n.pendingProps,r=ql(xt.current).createElement(a),r[on]=n,r[Sn]=e,Tn(r,a,e),nn(r),n.stateNode=r):n.memoizedState=a_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Kt(n),e===null&&Re&&(r=n.stateNode=e_(n.type,n.pendingProps,xt.current),Un=n,bi=!0,c=Ze,Na(n.type)?(Yf=c,Ze=gi(r.firstChild)):Ze=c),Mn(e,n,n.pendingProps.children,a),Ll(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Re&&((c=r=Ze)&&(r=Qx(r,n.type,n.pendingProps,bi),r!==null?(n.stateNode=r,Un=n,Ze=gi(r.firstChild),bi=!1,c=!0):c=!1),c||rs(n)),Kt(n),c=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,r=f.children,Vf(c,f)?r=null:S!==null&&Vf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=Hc(e,n,mx,null,null,a),Ao._currentValue=c),Ll(e,n),Mn(e,n,r,a),n.child;case 6:return e===null&&Re&&((e=a=Ze)&&(a=Jx(a,n.pendingProps,bi),a!==null?(n.stateNode=a,Un=n,Ze=null,e=!0):e=!1),e||rs(n)),null;case 13:return Qm(e,n,a);case 4:return Nt(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ys(n,null,r,a):Mn(e,n,r,a),n.child;case 11:return km(e,n,n.type,n.pendingProps,a);case 7:return Mn(e,n,n.pendingProps,a),n.child;case 8:return Mn(e,n,n.pendingProps.children,a),n.child;case 12:return Mn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,va(n,n.type,r.value),Mn(e,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,ls(n),c=Rn(c),r=r(c),n.flags|=1,Mn(e,n,r,a),n.child;case 14:return Xm(e,n,n.type,n.pendingProps,a);case 15:return Wm(e,n,n.type,n.pendingProps,a);case 19:return $m(e,n,a);case 31:return r=n.pendingProps,a=n.mode,r={mode:r.mode,children:r.children},e===null?(a=Nl(r,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Hi(e.child,r),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Ym(e,n,a);case 24:return ls(n),r=Rn(un),e===null?(c=Uc(),c===null&&(c=Xe,f=wc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Nc(n),va(n,un,c)):((e.lanes&a)!==0&&(Oc(e,n),io(n,null,null,a),no()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),va(n,un,r)):(r=f.cache,va(n,un,r),r!==c.cache&&Cc(n,[un],a,!0))),Mn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ji(e){e.flags|=4}function eg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!u_(n)){if(n=ri.current,n!==null&&((ye&4194048)===ye?Ai!==null:(ye&62914560)!==ye&&(ye&536870912)===0||n!==Ai))throw to=Lc,Ip;e.flags|=8192}}function Ol(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ut():536870912,e.lanes|=n,Ks|=n)}function co(e,n){if(!Re)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Tx(e,n,a){var r=n.pendingProps;switch(Tc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Xi(un),re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(qr(n)?ji(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Np())),qe(n),null;case 26:return a=n.memoizedState,e===null?(ji(n),a!==null?(qe(n),eg(n,a)):(qe(n),n.flags&=-16777217)):a?a!==e.memoizedState?(ji(n),qe(n),eg(n,a)):(qe(n),n.flags&=-16777217):(e.memoizedProps!==r&&ji(n),qe(n),n.flags&=-16777217),null;case 27:Ge(n),a=xt.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ji(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return qe(n),null}e=J.current,qr(n)?Up(n):(e=e_(c,r,a),n.stateNode=e,ji(n))}return qe(n),null;case 5:if(Ge(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ji(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return qe(n),null}if(e=J.current,qr(n))Up(n);else{switch(c=ql(xt.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof r.is=="string"?c.createElement("select",{is:r.is}):c.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e=typeof r.is=="string"?c.createElement(a,{is:r.is}):c.createElement(a)}}e[on]=n,e[Sn]=r;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(Tn(e,a,r),a){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ji(n)}}return qe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&ji(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=xt.current,qr(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=Un,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||jg(e.nodeValue,a)),e||rs(n)}else e=ql(e).createTextNode(r),e[on]=n,n.stateNode=e}return qe(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=qr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[on]=n}else jr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),c=!1}else c=Np(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Yi(n),n):(Yi(n),null)}if(Yi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=r!==null,e=e!==null&&e.memoizedState!==null,a){r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool);var f=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Ol(n,n.updateQueue),qe(n),null;case 4:return re(),e===null&&Bf(n.stateNode.containerInfo),qe(n),null;case 10:return Xi(n.type),qe(n),null;case 19:if(vt(cn),c=n.memoizedState,c===null)return qe(n),null;if(r=(n.flags&128)!==0,f=c.rendering,f===null)if(r)co(c,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=wl(e),f!==null){for(n.flags|=128,co(c,!1),e=f.updateQueue,n.updateQueue=e,Ol(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)wp(a,e),a=a.sibling;return St(cn,cn.current&1|2),n.child}e=e.sibling}c.tail!==null&&ne()>Bl&&(n.flags|=128,r=!0,co(c,!1),n.lanes=4194304)}else{if(!r)if(e=wl(f),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,Ol(n,e),co(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Re)return qe(n),null}else 2*ne()-c.renderingStartTime>Bl&&a!==536870912&&(n.flags|=128,r=!0,co(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ne(),n.sibling=null,e=cn.current,St(cn,r?e&1|2:e&1),n):(qe(n),null);case 22:case 23:return Yi(n),Ic(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Ol(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&vt(us),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Xi(un),qe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function bx(e,n){switch(Tc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Xi(un),re(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ge(n),null;case 13:if(Yi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));jr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return vt(cn),null;case 4:return re(),null;case 10:return Xi(n.type),null;case 22:case 23:return Yi(n),Ic(),e!==null&&vt(us),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Xi(un),null;case 25:return null;default:return null}}function ng(e,n){switch(Tc(n),n.tag){case 3:Xi(un),re();break;case 26:case 27:case 5:Ge(n);break;case 4:re();break;case 13:Yi(n);break;case 19:vt(cn);break;case 10:Xi(n.type);break;case 22:case 23:Yi(n),Ic(),e!==null&&vt(us);break;case 24:Xi(un)}}function fo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,S=a.inst;r=f(),S.destroy=r}a=a.next}while(a!==c)}}catch(E){He(n,n.return,E)}}function ba(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var S=r.inst,E=S.destroy;if(E!==void 0){S.destroy=void 0,c=n;var P=a,$=E;try{$()}catch(ut){He(c,P,ut)}}}r=r.next}while(r!==f)}}catch(ut){He(n,n.return,ut)}}function ig(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Xp(n,a)}catch(r){He(e,e.return,r)}}}function ag(e,n,a){a.props=fs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){He(e,n,r)}}function ho(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(c){He(e,n,c)}}function Ri(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){He(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){He(e,n,c)}else a.current=null}function sg(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){He(e,e.return,c)}}function df(e,n,a){try{var r=e.stateNode;Yx(r,e.type,a,n),r[Sn]=n}catch(c){He(e,e.return,c)}}function rg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Na(e.type)||e.tag===4}function pf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||rg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Na(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Yl));else if(r!==4&&(r===27&&Na(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(mf(e,n,a),e=e.sibling;e!==null;)mf(e,n,a),e=e.sibling}function Pl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Na(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Pl(e,n,a),e=e.sibling;e!==null;)Pl(e,n,a),e=e.sibling}function og(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Tn(n,r,a),n[on]=e,n[Sn]=a}catch(f){He(e,e.return,f)}}var Zi=!1,$e=!1,gf=!1,lg=typeof WeakSet=="function"?WeakSet:Set,_n=null;function Ax(e,n){if(e=e.containerInfo,Hf=$l,e=xp(e),dc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,E=-1,P=-1,$=0,ut=0,mt=e,nt=null;e:for(;;){for(var it;mt!==a||c!==0&&mt.nodeType!==3||(E=S+c),mt!==f||r!==0&&mt.nodeType!==3||(P=S+r),mt.nodeType===3&&(S+=mt.nodeValue.length),(it=mt.firstChild)!==null;)nt=mt,mt=it;for(;;){if(mt===e)break e;if(nt===a&&++$===c&&(E=S),nt===f&&++ut===r&&(P=S),(it=mt.nextSibling)!==null)break;mt=nt,nt=mt.parentNode}mt=it}a=E===-1||P===-1?null:{start:E,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Gf={focusedElem:e,selectionRange:a},$l=!1,_n=n;_n!==null;)if(n=_n,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,_n=e;else for(;_n!==null;){switch(n=_n,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var te=fs(a.type,c,a.elementType===a.type);e=r.getSnapshotBeforeUpdate(te,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(Zt){He(a,a.return,Zt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Xf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,_n=e;break}_n=n.return}}function ug(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Aa(e,a),r&4&&fo(5,a);break;case 1:if(Aa(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){He(a,a.return,S)}else{var c=fs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){He(a,a.return,S)}}r&64&&ig(a),r&512&&ho(a,a.return);break;case 3:if(Aa(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Xp(e,n)}catch(S){He(a,a.return,S)}}break;case 27:n===null&&r&4&&og(a);case 26:case 5:Aa(e,a),n===null&&r&4&&sg(a),r&512&&ho(a,a.return);break;case 12:Aa(e,a);break;case 13:Aa(e,a),r&4&&hg(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Px.bind(null,a),$x(e,a))));break;case 22:if(r=a.memoizedState!==null||Zi,!r){n=n!==null&&n.memoizedState!==null||$e,c=Zi;var f=$e;Zi=r,($e=n)&&!f?Ra(e,a,(a.subtreeFlags&8772)!==0):Aa(e,a),Zi=c,$e=f}break;case 30:break;default:Aa(e,a)}}function cg(e){var n=e.alternate;n!==null&&(e.alternate=null,cg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&pa(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,Gn=!1;function Ki(e,n,a){for(a=a.child;a!==null;)fg(e,n,a),a=a.sibling}function fg(e,n,a){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(ct,a)}catch{}switch(a.tag){case 26:$e||Ri(a,n),Ki(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:$e||Ri(a,n);var r=We,c=Gn;Na(a.type)&&(We=a.stateNode,Gn=!1),Ki(e,n,a),Mo(a.stateNode),We=r,Gn=c;break;case 5:$e||Ri(a,n);case 6:if(r=We,c=Gn,We=null,Ki(e,n,a),We=r,Gn=c,We!==null)if(Gn)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(a.stateNode)}catch(f){He(a,n,f)}else try{We.removeChild(a.stateNode)}catch(f){He(a,n,f)}break;case 18:We!==null&&(Gn?(e=We,$g(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Do(e)):$g(We,a.stateNode));break;case 4:r=We,c=Gn,We=a.stateNode.containerInfo,Gn=!0,Ki(e,n,a),We=r,Gn=c;break;case 0:case 11:case 14:case 15:$e||ba(2,a,n),$e||ba(4,a,n),Ki(e,n,a);break;case 1:$e||(Ri(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&ag(a,n,r)),Ki(e,n,a);break;case 21:Ki(e,n,a);break;case 22:$e=(r=$e)||a.memoizedState!==null,Ki(e,n,a),$e=r;break;default:Ki(e,n,a)}}function hg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Do(e)}catch(a){He(n,n.return,a)}}function Rx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new lg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new lg),n;default:throw Error(s(435,e.tag))}}function _f(e,n){var a=Rx(e);n.forEach(function(r){var c=zx.bind(null,e,r);a.has(r)||(a.add(r),r.then(c,c))})}function Zn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=e,S=n,E=S;t:for(;E!==null;){switch(E.tag){case 27:if(Na(E.type)){We=E.stateNode,Gn=!1;break t}break;case 5:We=E.stateNode,Gn=!1;break t;case 3:case 4:We=E.stateNode.containerInfo,Gn=!0;break t}E=E.return}if(We===null)throw Error(s(160));fg(f,S,c),We=null,Gn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)dg(n,e),n=n.sibling}var mi=null;function dg(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Zn(n,e),Kn(e),r&4&&(ba(3,e,e.return),fo(3,e),ba(5,e,e.return));break;case 1:Zn(n,e),Kn(e),r&512&&($e||a===null||Ri(a,a.return)),r&64&&Zi&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=mi;if(Zn(n,e),Kn(e),r&512&&($e||a===null||Ri(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[da]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,r,a),f[on]=e,nn(f),r=f;break t;case"link":var S=o_("link","href",c).get(r+(a.href||""));if(S){for(var E=0;E<S.length;E++)if(f=S[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(E,1);break e}}f=c.createElement(r),Tn(f,r,a),c.head.appendChild(f);break;case"meta":if(S=o_("meta","content",c).get(r+(a.content||""))){for(E=0;E<S.length;E++)if(f=S[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(E,1);break e}}f=c.createElement(r),Tn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[on]=e,nn(f),r=f}e.stateNode=r}else l_(c,e.type,e.stateNode);else e.stateNode=r_(c,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?l_(c,e.type,e.stateNode):r_(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&df(e,e.memoizedProps,a.memoizedProps)}break;case 27:Zn(n,e),Kn(e),r&512&&($e||a===null||Ri(a,a.return)),a!==null&&r&4&&df(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Zn(n,e),Kn(e),r&512&&($e||a===null||Ri(a,a.return)),e.flags&32){c=e.stateNode;try{Ti(c,"")}catch(it){He(e,e.return,it)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,df(e,c,a!==null?a.memoizedProps:c)),r&1024&&(gf=!0);break;case 6:if(Zn(n,e),Kn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(it){He(e,e.return,it)}}break;case 3:if(Kl=null,c=mi,mi=jl(n.containerInfo),Zn(n,e),mi=c,Kn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Do(n.containerInfo)}catch(it){He(e,e.return,it)}gf&&(gf=!1,pg(e));break;case 4:r=mi,mi=jl(e.stateNode.containerInfo),Zn(n,e),Kn(e),mi=r;break;case 12:Zn(n,e),Kn(e);break;case 13:Zn(n,e),Kn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ef=ne()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_f(e,r)));break;case 22:c=e.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,$=Zi,ut=$e;if(Zi=$||c,$e=ut||P,Zn(n,e),$e=ut,Zi=$,Kn(e),r&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||Zi||$e||hs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{E=P.stateNode;var mt=P.memoizedProps.style,nt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;E.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(it){He(P,P.return,it)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(it){He(P,P.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,_f(e,a))));break;case 19:Zn(n,e),Kn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_f(e,r)));break;case 30:break;case 21:break;default:Zn(n,e),Kn(e)}}function Kn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(rg(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=pf(e);Pl(e,f,c);break;case 5:var S=a.stateNode;a.flags&32&&(Ti(S,""),a.flags&=-33);var E=pf(e);Pl(e,E,S);break;case 3:case 4:var P=a.stateNode.containerInfo,$=pf(e);mf(e,$,P);break;default:throw Error(s(161))}}catch(ut){He(e,e.return,ut)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function pg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;pg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Aa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ug(e,n.alternate,n),n=n.sibling}function hs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ba(4,n,n.return),hs(n);break;case 1:Ri(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&ag(n,n.return,a),hs(n);break;case 27:Mo(n.stateNode);case 26:case 5:Ri(n,n.return),hs(n);break;case 22:n.memoizedState===null&&hs(n);break;case 30:hs(n);break;default:hs(n)}e=e.sibling}}function Ra(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:Ra(c,f,a),fo(4,f);break;case 1:if(Ra(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){He(r,r.return,$)}if(r=f,c=r.updateQueue,c!==null){var E=r.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)kp(P[c],E)}catch($){He(r,r.return,$)}}a&&S&64&&ig(f),ho(f,f.return);break;case 27:og(f);case 26:case 5:Ra(c,f,a),a&&r===null&&S&4&&sg(f),ho(f,f.return);break;case 12:Ra(c,f,a);break;case 13:Ra(c,f,a),a&&S&4&&hg(c,f);break;case 22:f.memoizedState===null&&Ra(c,f,a),ho(f,f.return);break;case 30:break;default:Ra(c,f,a)}n=n.sibling}}function vf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Qr(a))}function xf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Qr(e))}function Ci(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)mg(e,n,a,r),n=n.sibling}function mg(e,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(e,n,a,r),c&2048&&fo(9,n);break;case 1:Ci(e,n,a,r);break;case 3:Ci(e,n,a,r),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Qr(e)));break;case 12:if(c&2048){Ci(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,E=f.onPostCommit;typeof E=="function"&&E(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){He(n,n.return,P)}}else Ci(e,n,a,r);break;case 13:Ci(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Ci(e,n,a,r):po(e,n):f._visibility&2?Ci(e,n,a,r):(f._visibility|=2,qs(e,n,a,r,(n.subtreeFlags&10256)!==0)),c&2048&&vf(S,n);break;case 24:Ci(e,n,a,r),c&2048&&xf(n.alternate,n);break;default:Ci(e,n,a,r)}}function qs(e,n,a,r,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,E=a,P=r,$=S.flags;switch(S.tag){case 0:case 11:case 15:qs(f,S,E,P,c),fo(8,S);break;case 23:break;case 22:var ut=S.stateNode;S.memoizedState!==null?ut._visibility&2?qs(f,S,E,P,c):po(f,S):(ut._visibility|=2,qs(f,S,E,P,c)),c&&$&2048&&vf(S.alternate,S);break;case 24:qs(f,S,E,P,c),c&&$&2048&&xf(S.alternate,S);break;default:qs(f,S,E,P,c)}n=n.sibling}}function po(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:po(a,r),c&2048&&vf(r.alternate,r);break;case 24:po(a,r),c&2048&&xf(r.alternate,r);break;default:po(a,r)}n=n.sibling}}var mo=8192;function js(e){if(e.subtreeFlags&mo)for(e=e.child;e!==null;)gg(e),e=e.sibling}function gg(e){switch(e.tag){case 26:js(e),e.flags&mo&&e.memoizedState!==null&&hS(mi,e.memoizedState,e.memoizedProps);break;case 5:js(e);break;case 3:case 4:var n=mi;mi=jl(e.stateNode.containerInfo),js(e),mi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=mo,mo=16777216,js(e),mo=n):js(e));break;default:js(e)}}function _g(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function go(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];_n=r,xg(r,e)}_g(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)vg(e),e=e.sibling}function vg(e){switch(e.tag){case 0:case 11:case 15:go(e),e.flags&2048&&ba(9,e,e.return);break;case 3:go(e);break;case 12:go(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,zl(e)):go(e);break;default:go(e)}}function zl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];_n=r,xg(r,e)}_g(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ba(8,n,n.return),zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,zl(n));break;default:zl(n)}e=e.sibling}}function xg(e,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Qr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,_n=r;else t:for(a=e;_n!==null;){r=_n;var c=r.sibling,f=r.return;if(cg(r),r===a){_n=null;break t}if(c!==null){c.return=f,_n=c;break t}_n=f}}}var Cx={getCacheForType:function(e){var n=Rn(un),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},wx=typeof WeakMap=="function"?WeakMap:Map,Ce=0,Xe=null,de=null,ye=0,we=0,Qn=null,Ca=!1,Zs=!1,Sf=!1,Qi=0,Ke=0,wa=0,ds=0,yf=0,oi=0,Ks=0,_o=null,Vn=null,Mf=!1,Ef=0,Bl=1/0,Il=null,Da=null,En=0,Ua=null,Qs=null,Js=0,Tf=0,bf=null,Sg=null,vo=0,Af=null;function Jn(){if((Ce&2)!==0&&ye!==0)return ye&-ye;if(z.T!==null){var e=Fs;return e!==0?e:Nf()}return Ee()}function yg(){oi===0&&(oi=(ye&536870912)===0||Re?k():536870912);var e=ri.current;return e!==null&&(e.flags|=32),oi}function $n(e,n,a){(e===Xe&&(we===2||we===9)||e.cancelPendingCommit!==null)&&($s(e,0),La(e,ye,oi,!1)),pt(e,a),((Ce&2)===0||e!==Xe)&&(e===Xe&&((Ce&2)===0&&(ds|=a),Ke===4&&La(e,ye,oi,!1)),wi(e))}function Mg(e,n,a){if((Ce&6)!==0)throw Error(s(327));var r=!a&&(n&124)===0&&(n&e.expiredLanes)===0||ee(e,n),c=r?Lx(e,n):wf(e,n,!0),f=r;do{if(c===0){Zs&&!r&&La(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Dx(a)){c=wf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var E=e;c=_o;var P=E.current.memoizedState.isDehydrated;if(P&&($s(E,S).flags|=256),S=wf(E,S,!1),S!==2){if(Sf&&!P){E.errorRecoveryDisabledLanes|=f,ds|=f,c=4;break t}f=Vn,Vn=c,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){$s(e,0),La(e,n,0,!0);break}t:{switch(r=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:La(r,n,oi,!Ca);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Ef+300-ne(),10<c)){if(La(r,n,oi,!Ca),le(r,0,!0)!==0)break t;r.timeoutHandle=Qg(Eg.bind(null,r,a,Vn,Il,Mf,n,oi,ds,Ks,Ca,f,2,-0,0),c);break t}Eg(r,a,Vn,Il,Mf,n,oi,ds,Ks,Ca,f,0,-0,0)}}break}while(!0);wi(e)}function Eg(e,n,a,r,c,f,S,E,P,$,ut,mt,nt,it){if(e.timeoutHandle=-1,mt=n.subtreeFlags,(mt&8192||(mt&16785408)===16785408)&&(bo={stylesheets:null,count:0,unsuspend:fS},gg(n),mt=dS(),mt!==null)){e.cancelPendingCommit=mt(Dg.bind(null,e,n,f,a,r,c,S,E,P,ut,1,nt,it)),La(e,f,S,!$);return}Dg(e,n,f,a,r,c,S,E,P)}function Dx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!qn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function La(e,n,a,r){n&=~yf,n&=~ds,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-Rt(c),S=1<<f;r[f]=-1,c&=~S}a!==0&&Lt(e,a,n)}function Fl(){return(Ce&6)===0?(xo(0),!1):!0}function Rf(){if(de!==null){if(we===0)var e=de.return;else e=de,ki=os=null,kc(e),Ws=null,lo=0,e=de;for(;e!==null;)ng(e.alternate,e),e=e.return;de=null}}function $s(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,jx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Rf(),Xe=e,de=a=Hi(e.current,null),ye=n,we=0,Qn=null,Ca=!1,Zs=ee(e,n),Sf=!1,Ks=oi=yf=ds=wa=Ke=0,Vn=_o=null,Mf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var c=31-Rt(r),f=1<<c;n|=e[c],r&=~f}return Qi=n,ol(),a}function Tg(e,n){ue=null,z.H=Al,n===$r||n===gl?(n=Gp(),we=3):n===Ip?(n=Gp(),we=4):we=n===Vm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,de===null&&(Ke=1,Ul(e,ni(n,e.current)))}function bg(){var e=z.H;return z.H=Al,e===null?Al:e}function Ag(){var e=z.A;return z.A=Cx,e}function Cf(){Ke=4,Ca||(ye&4194048)!==ye&&ri.current!==null||(Zs=!0),(wa&134217727)===0&&(ds&134217727)===0||Xe===null||La(Xe,ye,oi,!1)}function wf(e,n,a){var r=Ce;Ce|=2;var c=bg(),f=Ag();(Xe!==e||ye!==n)&&(Il=null,$s(e,n)),n=!1;var S=Ke;t:do try{if(we!==0&&de!==null){var E=de,P=Qn;switch(we){case 8:Rf(),S=6;break t;case 3:case 2:case 9:case 6:ri.current===null&&(n=!0);var $=we;if(we=0,Qn=null,tr(e,E,P,$),a&&Zs){S=0;break t}break;default:$=we,we=0,Qn=null,tr(e,E,P,$)}}Ux(),S=Ke;break}catch(ut){Tg(e,ut)}while(!0);return n&&e.shellSuspendCounter++,ki=os=null,Ce=r,z.H=c,z.A=f,de===null&&(Xe=null,ye=0,ol()),S}function Ux(){for(;de!==null;)Rg(de)}function Lx(e,n){var a=Ce;Ce|=2;var r=bg(),c=Ag();Xe!==e||ye!==n?(Il=null,Bl=ne()+500,$s(e,n)):Zs=ee(e,n);t:do try{if(we!==0&&de!==null){n=de;var f=Qn;e:switch(we){case 1:we=0,Qn=null,tr(e,n,f,1);break;case 2:case 9:if(Fp(f)){we=0,Qn=null,Cg(n);break}n=function(){we!==2&&we!==9||Xe!==e||(we=7),wi(e)},f.then(n,n);break t;case 3:we=7;break t;case 4:we=5;break t;case 7:Fp(f)?(we=0,Qn=null,Cg(n)):(we=0,Qn=null,tr(e,n,f,7));break;case 5:var S=null;switch(de.tag){case 26:S=de.memoizedState;case 5:case 27:var E=de;if(!S||u_(S)){we=0,Qn=null;var P=E.sibling;if(P!==null)de=P;else{var $=E.return;$!==null?(de=$,Hl($)):de=null}break e}}we=0,Qn=null,tr(e,n,f,5);break;case 6:we=0,Qn=null,tr(e,n,f,6);break;case 8:Rf(),Ke=6;break t;default:throw Error(s(462))}}Nx();break}catch(ut){Tg(e,ut)}while(!0);return ki=os=null,z.H=r,z.A=c,Ce=a,de!==null?0:(Xe=null,ye=0,ol(),Ke)}function Nx(){for(;de!==null&&!Bn();)Rg(de)}function Rg(e){var n=tg(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,n===null?Hl(e):de=n}function Cg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=jm(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=jm(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:kc(n);default:ng(a,n),n=de=wp(n,Qi),n=tg(a,n,Qi)}e.memoizedProps=e.pendingProps,n===null?Hl(e):de=n}function tr(e,n,a,r){ki=os=null,kc(n),Ws=null,lo=0;var c=n.return;try{if(Mx(e,c,n,a,ye)){Ke=1,Ul(e,ni(a,e.current)),de=null;return}}catch(f){if(c!==null)throw de=c,f;Ke=1,Ul(e,ni(a,e.current)),de=null;return}n.flags&32768?(Re||r===1?e=!0:Zs||(ye&536870912)!==0?e=!1:(Ca=e=!0,(r===2||r===9||r===3||r===6)&&(r=ri.current,r!==null&&r.tag===13&&(r.flags|=16384))),wg(n,e)):Hl(n)}function Hl(e){var n=e;do{if((n.flags&32768)!==0){wg(n,Ca);return}e=n.return;var a=Tx(n.alternate,n,Qi);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=e}while(n!==null);Ke===0&&(Ke=5)}function wg(e,n){do{var a=bx(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);Ke=6,de=null}function Dg(e,n,a,r,c,f,S,E,P){e.cancelPendingCommit=null;do Gl();while(En!==0);if((Ce&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=vc,Pt(e,a,f,S,E,P),e===Xe&&(de=Xe=null,ye=0),Qs=n,Ua=e,Js=a,Tf=f,bf=c,Sg=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Bx(L,function(){return Pg(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=z.T,z.T=null,c=K.p,K.p=2,S=Ce,Ce|=4;try{Ax(e,n,a)}finally{Ce=S,K.p=c,z.T=r}}En=1,Ug(),Lg(),Ng()}}function Ug(){if(En===1){En=0;var e=Ua,n=Qs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var r=K.p;K.p=2;var c=Ce;Ce|=4;try{dg(n,e);var f=Gf,S=xp(e.containerInfo),E=f.focusedElem,P=f.selectionRange;if(S!==E&&E&&E.ownerDocument&&vp(E.ownerDocument.documentElement,E)){if(P!==null&&dc(E)){var $=P.start,ut=P.end;if(ut===void 0&&(ut=$),"selectionStart"in E)E.selectionStart=$,E.selectionEnd=Math.min(ut,E.value.length);else{var mt=E.ownerDocument||document,nt=mt&&mt.defaultView||window;if(nt.getSelection){var it=nt.getSelection(),te=E.textContent.length,Zt=Math.min(P.start,te),Oe=P.end===void 0?Zt:Math.min(P.end,te);!it.extend&&Zt>Oe&&(S=Oe,Oe=Zt,Zt=S);var X=_p(E,Zt),H=_p(E,Oe);if(X&&H&&(it.rangeCount!==1||it.anchorNode!==X.node||it.anchorOffset!==X.offset||it.focusNode!==H.node||it.focusOffset!==H.offset)){var Q=mt.createRange();Q.setStart(X.node,X.offset),it.removeAllRanges(),Zt>Oe?(it.addRange(Q),it.extend(H.node,H.offset)):(Q.setEnd(H.node,H.offset),it.addRange(Q))}}}}for(mt=[],it=E;it=it.parentNode;)it.nodeType===1&&mt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<mt.length;E++){var ft=mt[E];ft.element.scrollLeft=ft.left,ft.element.scrollTop=ft.top}}$l=!!Hf,Gf=Hf=null}finally{Ce=c,K.p=r,z.T=a}}e.current=n,En=2}}function Lg(){if(En===2){En=0;var e=Ua,n=Qs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var r=K.p;K.p=2;var c=Ce;Ce|=4;try{ug(e,n.alternate,n)}finally{Ce=c,K.p=r,z.T=a}}En=3}}function Ng(){if(En===4||En===3){En=0,_e();var e=Ua,n=Qs,a=Js,r=Sg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?En=5:(En=0,Qs=Ua=null,Og(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Da=null),en(a),n=n.stateNode,zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(ct,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=z.T,c=K.p,K.p=2,z.T=null;try{for(var f=e.onRecoverableError,S=0;S<r.length;S++){var E=r[S];f(E.value,{componentStack:E.stack})}}finally{z.T=n,K.p=c}}(Js&3)!==0&&Gl(),wi(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===Af?vo++:(vo=0,Af=e):vo=0,xo(0)}}function Og(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Qr(n)))}function Gl(e){return Ug(),Lg(),Ng(),Pg()}function Pg(){if(En!==5)return!1;var e=Ua,n=Tf;Tf=0;var a=en(Js),r=z.T,c=K.p;try{K.p=32>a?32:a,z.T=null,a=bf,bf=null;var f=Ua,S=Js;if(En=0,Qs=Ua=null,Js=0,(Ce&6)!==0)throw Error(s(331));var E=Ce;if(Ce|=4,vg(f.current),mg(f,f.current,S,a),Ce=E,xo(0,!1),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(ct,f)}catch{}return!0}finally{K.p=c,z.T=r,Og(e,n)}}function zg(e,n,a){n=ni(a,n),n=af(e.stateNode,n,2),e=ya(e,n,2),e!==null&&(pt(e,2),wi(e))}function He(e,n,a){if(e.tag===3)zg(e,e,a);else for(;n!==null;){if(n.tag===3){zg(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Da===null||!Da.has(r))){e=ni(a,e),a=Hm(2),r=ya(n,a,2),r!==null&&(Gm(a,r,n,e),pt(r,2),wi(r));break}}n=n.return}}function Df(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new wx;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(Sf=!0,c.add(a),e=Ox.bind(null,e,n,a),n.then(e,e))}function Ox(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xe===e&&(ye&a)===a&&(Ke===4||Ke===3&&(ye&62914560)===ye&&300>ne()-Ef?(Ce&2)===0&&$s(e,0):yf|=a,Ks===ye&&(Ks=0)),wi(e)}function Bg(e,n){n===0&&(n=Ut()),e=Ps(e,n),e!==null&&(pt(e,n),wi(e))}function Px(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Bg(e,a)}function zx(e,n){var a=0;switch(e.tag){case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Bg(e,a)}function Bx(e,n){return ce(e,n)}var Vl=null,er=null,Uf=!1,kl=!1,Lf=!1,ps=0;function wi(e){e!==er&&e.next===null&&(er===null?Vl=er=e:er=er.next=e),kl=!0,Uf||(Uf=!0,Fx())}function xo(e,n){if(!Lf&&kl){Lf=!0;do for(var a=!1,r=Vl;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var S=r.suspendedLanes,E=r.pingedLanes;f=(1<<31-Rt(42|e)+1)-1,f&=c&~(S&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Gg(r,f))}else f=ye,f=le(r,r===Xe?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||ee(r,f)||(a=!0,Gg(r,f));r=r.next}while(a);Lf=!1}}function Ix(){Ig()}function Ig(){kl=Uf=!1;var e=0;ps!==0&&(qx()&&(e=ps),ps=0);for(var n=ne(),a=null,r=Vl;r!==null;){var c=r.next,f=Fg(r,n);f===0?(r.next=null,a===null?Vl=c:a.next=c,c===null&&(er=a)):(a=r,(e!==0||(f&3)!==0)&&(kl=!0)),r=c}xo(e)}function Fg(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-Rt(f),E=1<<S,P=c[S];P===-1?((E&a)===0||(E&r)!==0)&&(c[S]=Ue(E,n)):P<=n&&(e.expiredLanes|=E),f&=~E}if(n=Xe,a=ye,a=le(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(we===2||we===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&F(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ee(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&F(r),en(a)){case 2:case 8:a=Ht;break;case 32:a=L;break;case 268435456:a=et;break;default:a=L}return r=Hg.bind(null,e),a=ce(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&F(r),e.callbackPriority=2,e.callbackNode=null,2}function Hg(e,n){if(En!==0&&En!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Gl()&&e.callbackNode!==a)return null;var r=ye;return r=le(e,e===Xe?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Mg(e,r,n),Fg(e,ne()),e.callbackNode!=null&&e.callbackNode===a?Hg.bind(null,e):null)}function Gg(e,n){if(Gl())return null;Mg(e,n,!0)}function Fx(){Zx(function(){(Ce&6)!==0?ce(De,Ix):Ig()})}function Nf(){return ps===0&&(ps=k()),ps}function Vg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:tl(""+e)}function kg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Hx(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=Vg((c[Sn]||null).action),S=r.submitter;S&&(n=(n=S[Sn]||null)?Vg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var E=new al("action","action",null,r,c);e.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ps!==0){var P=S?kg(c,S):new FormData(c);Jc(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(E.preventDefault(),P=S?kg(c,S):new FormData(c),Jc(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var Of=0;Of<_c.length;Of++){var Pf=_c[Of],Gx=Pf.toLowerCase(),Vx=Pf[0].toUpperCase()+Pf.slice(1);pi(Gx,"on"+Vx)}pi(Mp,"onAnimationEnd"),pi(Ep,"onAnimationIteration"),pi(Tp,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(sx,"onTransitionRun"),pi(rx,"onTransitionStart"),pi(ox,"onTransitionCancel"),pi(bp,"onTransitionEnd"),A("onMouseEnter",["mouseout","mouseover"]),A("onMouseLeave",["mouseout","mouseover"]),A("onPointerEnter",["pointerout","pointerover"]),A("onPointerLeave",["pointerout","pointerover"]),zi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zi("onBeforeInput",["compositionend","keypress","textInput","paste"]),zi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(So));function Xg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var S=r.length-1;0<=S;S--){var E=r[S],P=E.instance,$=E.currentTarget;if(E=E.listener,P!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=$;try{f(c)}catch(ut){Dl(ut)}c.currentTarget=null,f=P}else for(S=0;S<r.length;S++){if(E=r[S],P=E.instance,$=E.currentTarget,E=E.listener,P!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=$;try{f(c)}catch(ut){Dl(ut)}c.currentTarget=null,f=P}}}}function pe(e,n){var a=n[Ka];a===void 0&&(a=n[Ka]=new Set);var r=e+"__bubble";a.has(r)||(Wg(n,e,2,!1),a.add(r))}function zf(e,n,a){var r=0;n&&(r|=4),Wg(a,e,r,n)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function Bf(e){if(!e[Xl]){e[Xl]=!0,Jo.forEach(function(a){a!=="selectionchange"&&(kx.has(a)||zf(a,!1,e),zf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Xl]||(n[Xl]=!0,zf("selectionchange",!1,n))}}function Wg(e,n,a,r){switch(m_(n)){case 2:var c=gS;break;case 8:c=_S;break;default:c=Qf}a=c.bind(null,n,a,e),c=void 0,!ac||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function If(e,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var S=r.tag;if(S===3||S===4){var E=r.stateNode.containerInfo;if(E===c)break;if(S===4)for(S=r.return;S!==null;){var P=S.tag;if((P===3||P===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;E!==null;){if(S=Oi(E),S===null)return;if(P=S.tag,P===5||P===6||P===26||P===27){r=f=S;continue t}E=E.parentNode}}r=r.return}Jd(function(){var $=f,ut=nc(a),mt=[];t:{var nt=Ap.get(e);if(nt!==void 0){var it=al,te=e;switch(e){case"keypress":if(nl(a)===0)break t;case"keydown":case"keyup":it=B0;break;case"focusin":te="focus",it=lc;break;case"focusout":te="blur",it=lc;break;case"beforeblur":case"afterblur":it=lc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=b0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=H0;break;case Mp:case Ep:case Tp:it=C0;break;case bp:it=V0;break;case"scroll":case"scrollend":it=E0;break;case"wheel":it=X0;break;case"copy":case"cut":case"paste":it=D0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=ip;break;case"toggle":case"beforetoggle":it=Y0}var Zt=(n&4)!==0,Oe=!Zt&&(e==="scroll"||e==="scrollend"),X=Zt?nt!==null?nt+"Capture":null:nt;Zt=[];for(var H=$,Q;H!==null;){var ft=H;if(Q=ft.stateNode,ft=ft.tag,ft!==5&&ft!==26&&ft!==27||Q===null||X===null||(ft=Ir(H,X),ft!=null&&Zt.push(yo(H,ft,Q))),Oe)break;H=H.return}0<Zt.length&&(nt=new it(nt,te,null,a,ut),mt.push({event:nt,listeners:Zt}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",it=e==="mouseout"||e==="pointerout",nt&&a!==ec&&(te=a.relatedTarget||a.fromElement)&&(Oi(te)||te[In]))break t;if((it||nt)&&(nt=ut.window===ut?ut:(nt=ut.ownerDocument)?nt.defaultView||nt.parentWindow:window,it?(te=a.relatedTarget||a.toElement,it=$,te=te?Oi(te):null,te!==null&&(Oe=u(te),Zt=te.tag,te!==Oe||Zt!==5&&Zt!==27&&Zt!==6)&&(te=null)):(it=null,te=$),it!==te)){if(Zt=ep,ft="onMouseLeave",X="onMouseEnter",H="mouse",(e==="pointerout"||e==="pointerover")&&(Zt=ip,ft="onPointerLeave",X="onPointerEnter",H="pointer"),Oe=it==null?nt:Ja(it),Q=te==null?nt:Ja(te),nt=new Zt(ft,H+"leave",it,a,ut),nt.target=Oe,nt.relatedTarget=Q,ft=null,Oi(ut)===$&&(Zt=new Zt(X,H+"enter",te,a,ut),Zt.target=Q,Zt.relatedTarget=Oe,ft=Zt),Oe=ft,it&&te)e:{for(Zt=it,X=te,H=0,Q=Zt;Q;Q=nr(Q))H++;for(Q=0,ft=X;ft;ft=nr(ft))Q++;for(;0<H-Q;)Zt=nr(Zt),H--;for(;0<Q-H;)X=nr(X),Q--;for(;H--;){if(Zt===X||X!==null&&Zt===X.alternate)break e;Zt=nr(Zt),X=nr(X)}Zt=null}else Zt=null;it!==null&&Yg(mt,nt,it,Zt,!1),te!==null&&Oe!==null&&Yg(mt,Oe,te,Zt,!0)}}t:{if(nt=$?Ja($):window,it=nt.nodeName&&nt.nodeName.toLowerCase(),it==="select"||it==="input"&&nt.type==="file")var Ft=fp;else if(up(nt))if(hp)Ft=nx;else{Ft=tx;var fe=$0}else it=nt.nodeName,!it||it.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?$&&tc($.elementType)&&(Ft=fp):Ft=ex;if(Ft&&(Ft=Ft(e,$))){cp(mt,Ft,a,ut);break t}fe&&fe(e,nt,$),e==="focusout"&&$&&nt.type==="number"&&$.memoizedProps.value!=null&&An(nt,"number",nt.value)}switch(fe=$?Ja($):window,e){case"focusin":(up(fe)||fe.contentEditable==="true")&&(Ls=fe,pc=$,Yr=null);break;case"focusout":Yr=pc=Ls=null;break;case"mousedown":mc=!0;break;case"contextmenu":case"mouseup":case"dragend":mc=!1,Sp(mt,a,ut);break;case"selectionchange":if(ax)break;case"keydown":case"keyup":Sp(mt,a,ut)}var Gt;if(cc)t:{switch(e){case"compositionstart":var Jt="onCompositionStart";break t;case"compositionend":Jt="onCompositionEnd";break t;case"compositionupdate":Jt="onCompositionUpdate";break t}Jt=void 0}else Us?op(e,a)&&(Jt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Jt="onCompositionStart");Jt&&(ap&&a.locale!=="ko"&&(Us||Jt!=="onCompositionStart"?Jt==="onCompositionEnd"&&Us&&(Gt=$d()):(_a=ut,sc="value"in _a?_a.value:_a.textContent,Us=!0)),fe=Wl($,Jt),0<fe.length&&(Jt=new np(Jt,e,null,a,ut),mt.push({event:Jt,listeners:fe}),Gt?Jt.data=Gt:(Gt=lp(a),Gt!==null&&(Jt.data=Gt)))),(Gt=j0?Z0(e,a):K0(e,a))&&(Jt=Wl($,"onBeforeInput"),0<Jt.length&&(fe=new np("onBeforeInput","beforeinput",null,a,ut),mt.push({event:fe,listeners:Jt}),fe.data=Gt)),Hx(mt,e,$,a,ut)}Xg(mt,n)})}function yo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Wl(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ir(e,a),c!=null&&r.unshift(yo(e,c,f)),c=Ir(e,n),c!=null&&r.push(yo(e,c,f))),e.tag===3)return r;e=e.return}return[]}function nr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Yg(e,n,a,r,c){for(var f=n._reactName,S=[];a!==null&&a!==r;){var E=a,P=E.alternate,$=E.stateNode;if(E=E.tag,P!==null&&P===r)break;E!==5&&E!==26&&E!==27||$===null||(P=$,c?($=Ir(a,f),$!=null&&S.unshift(yo(a,$,P))):c||($=Ir(a,f),$!=null&&S.push(yo(a,$,P)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var Xx=/\r\n?/g,Wx=/\u0000|\uFFFD/g;function qg(e){return(typeof e=="string"?e:""+e).replace(Xx,`
`).replace(Wx,"")}function jg(e,n){return n=qg(n),qg(e)===n}function Yl(){}function Ne(e,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Ti(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Ti(e,""+r);break;case"className":Ct(e,"class",r);break;case"tabIndex":Ct(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ct(e,a,r);break;case"style":Kd(e,r,f);break;case"data":if(n!=="object"){Ct(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=tl(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ne(e,n,"name",c.name,c,null),Ne(e,n,"formEncType",c.formEncType,c,null),Ne(e,n,"formMethod",c.formMethod,c,null),Ne(e,n,"formTarget",c.formTarget,c,null)):(Ne(e,n,"encType",c.encType,c,null),Ne(e,n,"method",c.method,c,null),Ne(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=tl(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Yl);break;case"onScroll":r!=null&&pe("scroll",e);break;case"onScrollEnd":r!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=tl(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":pe("beforetoggle",e),pe("toggle",e),Et(e,"popover",r);break;case"xlinkActuate":wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":wt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":wt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":wt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":wt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Et(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=y0.get(a)||a,Et(e,a,r))}}function Ff(e,n,a,r,c,f){switch(a){case"style":Kd(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?Ti(e,r):(typeof r=="number"||typeof r=="bigint")&&Ti(e,""+r);break;case"onScroll":r!=null&&pe("scroll",e);break;case"onScrollEnd":r!=null&&pe("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Yl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$o.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[Sn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,c);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):Et(e,a,r)}}}function Tn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ne(e,n,f,S,a,null)}}c&&Ne(e,n,"srcSet",a.srcSet,a,null),r&&Ne(e,n,"src",a.src,a,null);return;case"input":pe("invalid",e);var E=f=S=c=null,P=null,$=null;for(r in a)if(a.hasOwnProperty(r)){var ut=a[r];if(ut!=null)switch(r){case"name":c=ut;break;case"type":S=ut;break;case"checked":P=ut;break;case"defaultChecked":$=ut;break;case"value":f=ut;break;case"defaultValue":E=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:Ne(e,n,r,ut,a,null)}}Fe(e,f,E,P,$,S,c,!1),je(e);return;case"select":pe("invalid",e),r=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":S=E;break;case"multiple":r=E;default:Ne(e,n,c,E,a,null)}n=f,a=S,e.multiple=!!r,n!=null?ln(e,!!r,n,!1):a!=null&&ln(e,!!r,a,!0);return;case"textarea":pe("invalid",e),f=c=r=null;for(S in a)if(a.hasOwnProperty(S)&&(E=a[S],E!=null))switch(S){case"value":r=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Ne(e,n,S,E,a,null)}yn(e,r,c,f),je(e);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(r=a[P],r!=null))switch(P){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ne(e,n,P,r,a,null)}return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(r=0;r<So.length;r++)pe(So[r],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(r=a[$],r!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ne(e,n,$,r,a,null)}return;default:if(tc(n)){for(ut in a)a.hasOwnProperty(ut)&&(r=a[ut],r!==void 0&&Ff(e,n,ut,r,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(r=a[E],r!=null&&Ne(e,n,E,r,a,null))}function Yx(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,E=null,P=null,$=null,ut=null;for(it in a){var mt=a[it];if(a.hasOwnProperty(it)&&mt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":P=mt;default:r.hasOwnProperty(it)||Ne(e,n,it,null,r,mt)}}for(var nt in r){var it=r[nt];if(mt=a[nt],r.hasOwnProperty(nt)&&(it!=null||mt!=null))switch(nt){case"type":f=it;break;case"name":c=it;break;case"checked":$=it;break;case"defaultChecked":ut=it;break;case"value":S=it;break;case"defaultValue":E=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:it!==mt&&Ne(e,n,nt,it,r,mt)}}Bi(e,S,E,P,$,ut,f,c);return;case"select":it=S=E=nt=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":it=P;default:r.hasOwnProperty(f)||Ne(e,n,f,null,r,P)}for(c in r)if(f=r[c],P=a[c],r.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":nt=f;break;case"defaultValue":E=f;break;case"multiple":S=f;default:f!==P&&Ne(e,n,c,f,r,P)}n=E,a=S,r=it,nt!=null?ln(e,!!a,nt,!1):!!r!=!!a&&(n!=null?ln(e,!!a,n,!0):ln(e,!!a,a?[]:"",!1));return;case"textarea":it=nt=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ne(e,n,E,null,r,c)}for(S in r)if(c=r[S],f=a[S],r.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":nt=c;break;case"defaultValue":it=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Ne(e,n,S,c,r,f)}mn(e,nt,it);return;case"option":for(var te in a)if(nt=a[te],a.hasOwnProperty(te)&&nt!=null&&!r.hasOwnProperty(te))switch(te){case"selected":e.selected=!1;break;default:Ne(e,n,te,null,r,nt)}for(P in r)if(nt=r[P],it=a[P],r.hasOwnProperty(P)&&nt!==it&&(nt!=null||it!=null))switch(P){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Ne(e,n,P,nt,r,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Zt in a)nt=a[Zt],a.hasOwnProperty(Zt)&&nt!=null&&!r.hasOwnProperty(Zt)&&Ne(e,n,Zt,null,r,nt);for($ in r)if(nt=r[$],it=a[$],r.hasOwnProperty($)&&nt!==it&&(nt!=null||it!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,n));break;default:Ne(e,n,$,nt,r,it)}return;default:if(tc(n)){for(var Oe in a)nt=a[Oe],a.hasOwnProperty(Oe)&&nt!==void 0&&!r.hasOwnProperty(Oe)&&Ff(e,n,Oe,void 0,r,nt);for(ut in r)nt=r[ut],it=a[ut],!r.hasOwnProperty(ut)||nt===it||nt===void 0&&it===void 0||Ff(e,n,ut,nt,r,it);return}}for(var X in a)nt=a[X],a.hasOwnProperty(X)&&nt!=null&&!r.hasOwnProperty(X)&&Ne(e,n,X,null,r,nt);for(mt in r)nt=r[mt],it=a[mt],!r.hasOwnProperty(mt)||nt===it||nt==null&&it==null||Ne(e,n,mt,nt,r,it)}var Hf=null,Gf=null;function ql(e){return e.nodeType===9?e:e.ownerDocument}function Zg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Kg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Vf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var kf=null;function qx(){var e=window.event;return e&&e.type==="popstate"?e===kf?!1:(kf=e,!0):(kf=null,!1)}var Qg=typeof setTimeout=="function"?setTimeout:void 0,jx=typeof clearTimeout=="function"?clearTimeout:void 0,Jg=typeof Promise=="function"?Promise:void 0,Zx=typeof queueMicrotask=="function"?queueMicrotask:typeof Jg<"u"?function(e){return Jg.resolve(null).then(e).catch(Kx)}:Qg;function Kx(e){setTimeout(function(){throw e})}function Na(e){return e==="head"}function $g(e,n){var a=n,r=0,c=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<r&&8>r){a=r;var S=e.ownerDocument;if(a&1&&Mo(S.documentElement),a&2&&Mo(S.body),a&4)for(a=S.head,Mo(a),S=a.firstChild;S;){var E=S.nextSibling,P=S.nodeName;S[da]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=E}}if(c===0){e.removeChild(f),Do(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:r=a.charCodeAt(0)-48;else r=0;a=f}while(a);Do(n)}function Xf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Xf(a),pa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Qx(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[da])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=gi(e.nextSibling),e===null)break}return null}function Jx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=gi(e.nextSibling),e===null))return null;return e}function Wf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function $x(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function gi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Yf=null;function t_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function e_(e,n,a){switch(n=ql(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Mo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);pa(e)}var li=new Map,n_=new Set;function jl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ji=K.d;K.d={f:tS,r:eS,D:nS,C:iS,L:aS,m:sS,X:oS,S:rS,M:lS};function tS(){var e=Ji.f(),n=Fl();return e||n}function eS(e){var n=Pi(e);n!==null&&n.tag===5&&n.type==="form"?Mm(n):Ji.r(e)}var ir=typeof document>"u"?null:document;function i_(e,n,a){var r=ir;if(r&&typeof n=="string"&&n){var c=ke(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),n_.has(c)||(n_.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),Tn(n,"link",e),nn(n),r.head.appendChild(n)))}}function nS(e){Ji.D(e),i_("dns-prefetch",e,null)}function iS(e,n){Ji.C(e,n),i_("preconnect",e,n)}function aS(e,n,a){Ji.L(e,n,a);var r=ir;if(r&&e&&n){var c='link[rel="preload"][as="'+ke(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+ke(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+ke(a.imageSizes)+'"]')):c+='[href="'+ke(e)+'"]';var f=c;switch(n){case"style":f=ar(e);break;case"script":f=sr(e)}li.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),li.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(Eo(f))||n==="script"&&r.querySelector(To(f))||(n=r.createElement("link"),Tn(n,"link",e),nn(n),r.head.appendChild(n)))}}function sS(e,n){Ji.m(e,n);var a=ir;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+ke(r)+'"][href="'+ke(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=sr(e)}if(!li.has(f)&&(e=g({rel:"modulepreload",href:e},n),li.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(To(f)))return}r=a.createElement("link"),Tn(r,"link",e),nn(r),a.head.appendChild(r)}}}function rS(e,n,a){Ji.S(e,n,a);var r=ir;if(r&&e){var c=ma(r).hoistableStyles,f=ar(e);n=n||"default";var S=c.get(f);if(!S){var E={loading:0,preload:null};if(S=r.querySelector(Eo(f)))E.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=li.get(f))&&qf(e,a);var P=S=r.createElement("link");nn(P),Tn(P,"link",e),P._p=new Promise(function($,ut){P.onload=$,P.onerror=ut}),P.addEventListener("load",function(){E.loading|=1}),P.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Zl(S,n,r)}S={type:"stylesheet",instance:S,count:1,state:E},c.set(f,S)}}}function oS(e,n){Ji.X(e,n);var a=ir;if(a&&e){var r=ma(a).hoistableScripts,c=sr(e),f=r.get(c);f||(f=a.querySelector(To(c)),f||(e=g({src:e,async:!0},n),(n=li.get(c))&&jf(e,n),f=a.createElement("script"),nn(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function lS(e,n){Ji.M(e,n);var a=ir;if(a&&e){var r=ma(a).hoistableScripts,c=sr(e),f=r.get(c);f||(f=a.querySelector(To(c)),f||(e=g({src:e,async:!0,type:"module"},n),(n=li.get(c))&&jf(e,n),f=a.createElement("script"),nn(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function a_(e,n,a,r){var c=(c=xt.current)?jl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ar(a.href),a=ma(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ar(a.href);var f=ma(c).hoistableStyles,S=f.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=c.querySelector(Eo(e)))&&!f._p&&(S.instance=f,S.state.loading=5),li.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},li.set(e,a),f||uS(c,e,a,S.state))),n&&r===null)throw Error(s(528,""));return S}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=sr(a),a=ma(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ar(e){return'href="'+ke(e)+'"'}function Eo(e){return'link[rel="stylesheet"]['+e+"]"}function s_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function uS(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Tn(n,"link",a),nn(n),e.head.appendChild(n))}function sr(e){return'[src="'+ke(e)+'"]'}function To(e){return"script[async]"+e}function r_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+ke(a.href)+'"]');if(r)return n.instance=r,nn(r),r;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),nn(r),Tn(r,"style",c),Zl(r,a.precedence,e),n.instance=r;case"stylesheet":c=ar(a.href);var f=e.querySelector(Eo(c));if(f)return n.state.loading|=4,n.instance=f,nn(f),f;r=s_(a),(c=li.get(c))&&qf(r,c),f=(e.ownerDocument||e).createElement("link"),nn(f);var S=f;return S._p=new Promise(function(E,P){S.onload=E,S.onerror=P}),Tn(f,"link",r),n.state.loading|=4,Zl(f,a.precedence,e),n.instance=f;case"script":return f=sr(a.src),(c=e.querySelector(To(f)))?(n.instance=c,nn(c),c):(r=a,(c=li.get(f))&&(r=g({},a),jf(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),nn(c),Tn(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Zl(r,a.precedence,e));return n.instance}function Zl(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,S=0;S<r.length;S++){var E=r[S];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function qf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function jf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Kl=null;function o_(e,n,a){if(Kl===null){var r=new Map,c=Kl=new Map;c.set(a,r)}else c=Kl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[da]||f[on]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var E=r.get(S);E?E.push(f):r.set(S,[f])}}return r}function l_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function cS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function u_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var bo=null;function fS(){}function hS(e,n,a){if(bo===null)throw Error(s(475));var r=bo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=ar(a.href),f=e.querySelector(Eo(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(r.count++,r=Ql.bind(r),e.then(r,r)),n.state.loading|=4,n.instance=f,nn(f);return}f=e.ownerDocument||e,a=s_(a),(c=li.get(c))&&qf(a,c),f=f.createElement("link"),nn(f);var S=f;S._p=new Promise(function(E,P){S.onload=E,S.onerror=P}),Tn(f,"link",a),n.instance=f}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(r.count++,n=Ql.bind(r),e.addEventListener("load",n),e.addEventListener("error",n))}}function dS(){if(bo===null)throw Error(s(475));var e=bo;return e.stylesheets&&e.count===0&&Zf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Ql(){if(this.count--,this.count===0){if(this.stylesheets)Zf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Jl=null;function Zf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Jl=new Map,n.forEach(pS,e),Jl=null,Ql.call(e))}function pS(e,n){if(!(n.state.loading&4)){var a=Jl.get(e);if(a)var r=a.get(null);else{a=new Map,Jl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),r=S)}r&&a.set(null,r)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||r,f===r&&a.set(null,c),a.set(S,c),this.count++,r=Ql.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Ao={$$typeof:N,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function mS(e,n,a,r,c,f,S,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ot(0),this.hiddenUpdates=ot(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function c_(e,n,a,r,c,f,S,E,P,$,ut,mt){return e=new mS(e,n,a,S,E,P,$,mt),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),e.current=f,f.stateNode=e,n=wc(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Nc(f),e}function f_(e){return e?(e=zs,e):zs}function h_(e,n,a,r,c,f){c=f_(c),r.context===null?r.context=c:r.pendingContext=c,r=Sa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=ya(e,r,n),a!==null&&($n(a,e,n),eo(a,e,n))}function d_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Kf(e,n){d_(e,n),(e=e.alternate)&&d_(e,n)}function p_(e){if(e.tag===13){var n=Ps(e,67108864);n!==null&&$n(n,e,67108864),Kf(e,67108864)}}var $l=!0;function gS(e,n,a,r){var c=z.T;z.T=null;var f=K.p;try{K.p=2,Qf(e,n,a,r)}finally{K.p=f,z.T=c}}function _S(e,n,a,r){var c=z.T;z.T=null;var f=K.p;try{K.p=8,Qf(e,n,a,r)}finally{K.p=f,z.T=c}}function Qf(e,n,a,r){if($l){var c=Jf(r);if(c===null)If(e,n,r,tu,a),g_(e,r);else if(xS(c,e,n,a,r))r.stopPropagation();else if(g_(e,r),n&4&&-1<vS.indexOf(e)){for(;c!==null;){var f=Pi(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Ot(f.pendingLanes);if(S!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;S;){var P=1<<31-Rt(S);E.entanglements[1]|=P,S&=~P}wi(f),(Ce&6)===0&&(Bl=ne()+500,xo(0))}}break;case 13:E=Ps(f,2),E!==null&&$n(E,f,2),Fl(),Kf(f,2)}if(f=Jf(r),f===null&&If(e,n,r,tu,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else If(e,n,r,null,a)}}function Jf(e){return e=nc(e),$f(e)}var tu=null;function $f(e){if(tu=null,e=Oi(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return tu=e,null}function m_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xt()){case De:return 2;case Ht:return 8;case L:case T:return 32;case et:return 268435456;default:return 32}default:return 32}}var th=!1,Oa=null,Pa=null,za=null,Ro=new Map,Co=new Map,Ba=[],vS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function g_(e,n){switch(e){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":Pa=null;break;case"mouseover":case"mouseout":za=null;break;case"pointerover":case"pointerout":Ro.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(n.pointerId)}}function wo(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Pi(n),n!==null&&p_(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function xS(e,n,a,r,c){switch(n){case"focusin":return Oa=wo(Oa,e,n,a,r,c),!0;case"dragenter":return Pa=wo(Pa,e,n,a,r,c),!0;case"mouseover":return za=wo(za,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return Ro.set(f,wo(Ro.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Co.set(f,wo(Co.get(f)||null,e,n,a,r,c)),!0}return!1}function __(e){var n=Oi(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Yn(e.priority,function(){if(a.tag===13){var r=Jn();r=Ve(r);var c=Ps(a,r);c!==null&&$n(c,a,r),Kf(a,r)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function eu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Jf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);ec=r,a.target.dispatchEvent(r),ec=null}else return n=Pi(a),n!==null&&p_(n),e.blockedOn=a,!1;n.shift()}return!0}function v_(e,n,a){eu(e)&&a.delete(n)}function SS(){th=!1,Oa!==null&&eu(Oa)&&(Oa=null),Pa!==null&&eu(Pa)&&(Pa=null),za!==null&&eu(za)&&(za=null),Ro.forEach(v_),Co.forEach(v_)}function nu(e,n){e.blockedOn===n&&(e.blockedOn=null,th||(th=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,SS)))}var iu=null;function x_(e){iu!==e&&(iu=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){iu===e&&(iu=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if($f(r||a)===null)continue;break}var f=Pi(a);f!==null&&(e.splice(n,3),n-=3,Jc(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function Do(e){function n(P){return nu(P,e)}Oa!==null&&nu(Oa,e),Pa!==null&&nu(Pa,e),za!==null&&nu(za,e),Ro.forEach(n),Co.forEach(n);for(var a=0;a<Ba.length;a++){var r=Ba[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ba.length&&(a=Ba[0],a.blockedOn===null);)__(a),a.blockedOn===null&&Ba.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],S=c[Sn]||null;if(typeof f=="function")S||x_(a);else if(S){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[Sn]||null)E=S.formAction;else if($f(c)!==null)continue}else E=S.action;typeof E=="function"?a[r+1]=E:(a.splice(r,3),r-=3),x_(a)}}}function eh(e){this._internalRoot=e}au.prototype.render=eh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Jn();h_(a,r,e,n,null,null)},au.prototype.unmount=eh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;h_(e.current,2,null,e,null,null),Fl(),n[In]=null}};function au(e){this._internalRoot=e}au.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ee();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ba.length&&n!==0&&n<Ba[a].priority;a++);Ba.splice(a,0,e),a===0&&__(e)}};var S_=t.version;if(S_!=="19.1.0")throw Error(s(527,S_,"19.1.0"));K.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var yS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!su.isDisabled&&su.supportsFiber)try{ct=su.inject(yS),zt=su}catch{}}return Lo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=zm,f=Bm,S=Im,E=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks)),n=c_(e,1,!1,null,null,a,r,c,f,S,E,null),e[In]=n.current,Bf(e),new eh(n)},Lo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=zm,S=Bm,E=Im,P=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=c_(e,1,!0,n,a??null,r,c,f,S,E,P,$),n.context=f_(null),a=n.current,r=Jn(),r=Ve(r),c=Sa(r),c.callback=null,ya(a,c,r),a=r,n.current.lanes=a,pt(n,a),wi(n),e[In]=n.current,Bf(e),new au(n)},Lo.version="19.1.0",Lo}var D_;function US(){if(D_)return ah.exports;D_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),ah.exports=DS(),ah.exports}var LS=US();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pd="175",Rr={ROTATE:0,DOLLY:1,PAN:2},br={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},NS=0,U_=1,OS=2,Hv=1,PS=2,aa=3,Za=0,Wn=1,sa=2,la=0,Cr=1,Xh=2,L_=3,N_=4,zS=5,Ms=100,BS=101,IS=102,FS=103,HS=104,GS=200,VS=201,kS=202,XS=203,Wh=204,Yh=205,WS=206,YS=207,qS=208,jS=209,ZS=210,KS=211,QS=212,JS=213,$S=214,qh=0,jh=1,Zh=2,Dr=3,Kh=4,Qh=5,Jh=6,$h=7,Gv=0,ty=1,ey=2,qa=0,ny=1,iy=2,ay=3,sy=4,ry=5,oy=6,ly=7,Vv=300,Ur=301,Lr=302,td=303,ed=304,Ku=306,nd=1e3,Ts=1001,id=1002,yi=1003,uy=1004,ru=1005,Li=1006,lh=1007,bs=1008,fa=1009,kv=1010,Xv=1011,Vo=1012,zd=1013,As=1014,ra=1015,ua=1016,Bd=1017,Id=1018,ko=1020,Wv=35902,Yv=1021,qv=1022,Si=1023,jv=1024,Zv=1025,Xo=1026,Wo=1027,Kv=1028,Fd=1029,Qv=1030,Hd=1031,Gd=1033,Pu=33776,zu=33777,Bu=33778,Iu=33779,ad=35840,sd=35841,rd=35842,od=35843,ld=36196,ud=37492,cd=37496,fd=37808,hd=37809,dd=37810,pd=37811,md=37812,gd=37813,_d=37814,vd=37815,xd=37816,Sd=37817,yd=37818,Md=37819,Ed=37820,Td=37821,Fu=36492,bd=36494,Ad=36495,Jv=36283,Rd=36284,Cd=36285,wd=36286,cy=3200,fy=3201,hy=0,dy=1,Ya="",ci="srgb",Nr="srgb-linear",Xu="linear",Pe="srgb",rr=7680,O_=519,py=512,my=513,gy=514,$v=515,_y=516,vy=517,xy=518,Sy=519,Dd=35044,P_="300 es",oa=2e3,Wu=2001;class Cs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hu=Math.PI/180,Ud=180/Math.PI;function ja(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(wn[o&255]+wn[o>>8&255]+wn[o>>16&255]+wn[o>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]).toLowerCase()}function me(o,t,i){return Math.max(t,Math.min(i,o))}function yy(o,t){return(o%t+t)%t}function uh(o,t,i){return(1-i)*o+i*t}function Ui(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ze(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const My={DEG2RAD:Hu};class kt{constructor(t=0,i=0){kt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*s-h*l+t.x,this.y=u*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class se{constructor(t,i,s,l,u,h,d,m,p){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p)}set(t,i,s,l,u,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],v=s[7],x=s[2],M=s[5],b=s[8],R=l[0],y=l[3],_=l[6],O=l[1],N=l[4],w=l[7],B=l[2],V=l[5],I=l[8];return u[0]=h*R+d*O+m*B,u[3]=h*y+d*N+m*V,u[6]=h*_+d*w+m*I,u[1]=p*R+g*O+v*B,u[4]=p*y+g*N+v*V,u[7]=p*_+g*w+v*I,u[2]=x*R+M*O+b*B,u[5]=x*y+M*N+b*V,u[8]=x*_+M*w+b*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-s*u*g+s*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=g*h-d*p,x=d*m-g*u,M=p*u-h*m,b=i*v+s*x+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=v*R,t[1]=(l*p-g*s)*R,t[2]=(d*s-l*h)*R,t[3]=x*R,t[4]=(g*i-l*m)*R,t[5]=(l*u-d*i)*R,t[6]=M*R,t[7]=(s*m-p*i)*R,t[8]=(h*i-s*u)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(ch.makeScale(t,i)),this}rotate(t){return this.premultiply(ch.makeRotation(-t)),this}translate(t,i){return this.premultiply(ch.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ch=new se;function t0(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Yo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Ey(){const o=Yo("canvas");return o.style.display="block",o}const z_={};function Gu(o){o in z_||(z_[o]=!0,console.warn(o))}function Ty(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function by(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ay(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const B_=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),I_=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ry(){const o={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Pe&&(l.r=ca(l.r),l.g=ca(l.g),l.b=ca(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Pe&&(l.r=wr(l.r),l.g=wr(l.g),l.b=wr(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ya?Xu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Nr]:{primaries:t,whitePoint:s,transfer:Xu,toXYZ:B_,fromXYZ:I_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:t,whitePoint:s,transfer:Pe,toXYZ:B_,fromXYZ:I_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),o}const Ae=Ry();function ca(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function wr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let or;class Cy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{or===void 0&&(or=Yo("canvas")),or.width=t.width,or.height=t.height;const l=or.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=or}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Yo("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=ca(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ca(i[s]/255)*255):i[s]=ca(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wy=0;class Vd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=ja(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(fh(l[h].image)):u.push(fh(l[h]))}else u=fh(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function fh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Cy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dy=0;class On extends Cs{constructor(t=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,s=Ts,l=Ts,u=Li,h=bs,d=Si,m=fa,p=On.DEFAULT_ANISOTROPY,g=Ya){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=ja(),this.name="",this.source=new Vd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case nd:t.x=t.x-Math.floor(t.x);break;case Ts:t.x=t.x<0?0:1;break;case id:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case nd:t.y=t.y-Math.floor(t.y);break;case Ts:t.y=t.y<0?0:1;break;case id:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=Vv;On.DEFAULT_ANISOTROPY=1;class tn{constructor(t=0,i=0,s=0,l=1){tn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,p=m[0],g=m[4],v=m[8],x=m[1],M=m[5],b=m[9],R=m[2],y=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-R)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+R)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,w=(M+1)/2,B=(_+1)/2,V=(g+x)/4,I=(v+R)/4,Z=(b+y)/4;return N>w&&N>B?N<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(N),l=V/s,u=I/s):w>B?w<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(w),s=V/l,u=Z/l):B<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(B),s=I/u,l=Z/u),this.set(s,l,u,i),this}let O=Math.sqrt((y-b)*(y-b)+(v-R)*(v-R)+(x-g)*(x-g));return Math.abs(O)<.001&&(O=1),this.x=(y-b)/O,this.y=(v-R)/O,this.z=(x-g)/O,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this.w=me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this.w=me(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uy extends Cs{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new tn(0,0,t,i),this.scissorTest=!1,this.viewport=new tn(0,0,t,i);const l={width:t,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const u=new On(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Vd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends Uy{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class e0 extends On{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ly extends On{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],v=s[l+3];const x=u[h+0],M=u[h+1],b=u[h+2],R=u[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v;return}if(d===1){t[i+0]=x,t[i+1]=M,t[i+2]=b,t[i+3]=R;return}if(v!==R||m!==x||p!==M||g!==b){let y=1-d;const _=m*x+p*M+g*b+v*R,O=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const B=Math.sqrt(N),V=Math.atan2(B,_*O);y=Math.sin(y*V)/B,d=Math.sin(d*V)/B}const w=d*O;if(m=m*y+x*w,p=p*y+M*w,g=g*y+b*w,v=v*y+R*w,y===1-d){const B=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=B,p*=B,g*=B,v*=B}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],v=u[h],x=u[h+1],M=u[h+2],b=u[h+3];return t[i]=d*b+g*v+m*M-p*x,t[i+1]=m*b+g*x+p*v-d*M,t[i+2]=p*b+g*M+d*x-m*v,t[i+3]=g*b-d*v-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),v=d(u/2),x=m(s/2),M=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=x*g*v+p*M*b,this._y=p*M*v-x*g*b,this._z=p*g*b+x*M*v,this._w=p*g*v-x*M*b;break;case"YXZ":this._x=x*g*v+p*M*b,this._y=p*M*v-x*g*b,this._z=p*g*b-x*M*v,this._w=p*g*v+x*M*b;break;case"ZXY":this._x=x*g*v-p*M*b,this._y=p*M*v+x*g*b,this._z=p*g*b+x*M*v,this._w=p*g*v-x*M*b;break;case"ZYX":this._x=x*g*v-p*M*b,this._y=p*M*v+x*g*b,this._z=p*g*b-x*M*v,this._w=p*g*v+x*M*b;break;case"YZX":this._x=x*g*v+p*M*b,this._y=p*M*v+x*g*b,this._z=p*g*b-x*M*v,this._w=p*g*v-x*M*b;break;case"XZY":this._x=x*g*v-p*M*b,this._y=p*M*v-x*g*b,this._z=p*g*b+x*M*v,this._w=p*g*v+x*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=s+d+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(s>d&&s>v){const M=2*Math.sqrt(1+s-d-v);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-s-v);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+v-s-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-s*p,this._z=u*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=h*v+this._w*x,this._x=s*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(t=0,i=0,s=0){j.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(F_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(F_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),g=2*(d*i-u*l),v=2*(u*s-h*i);return this.x=i+m*p+h*v-d*g,this.y=s+m*g+d*p-u*v,this.z=l+m*v+u*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return hh.copy(this).projectOnVector(t),this.sub(hh)}reflect(t){return this.sub(hh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hh=new j,F_=new Rs;class qo{constructor(t=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(_i.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(_i.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=_i.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,_i):_i.fromBufferAttribute(u,h),_i.applyMatrix4(t.matrixWorld),this.expandByPoint(_i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ou.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ou.copy(s.boundingBox)),ou.applyMatrix4(t.matrixWorld),this.union(ou)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_i),_i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(No),lu.subVectors(this.max,No),lr.subVectors(t.a,No),ur.subVectors(t.b,No),cr.subVectors(t.c,No),Fa.subVectors(ur,lr),Ha.subVectors(cr,ur),ms.subVectors(lr,cr);let i=[0,-Fa.z,Fa.y,0,-Ha.z,Ha.y,0,-ms.z,ms.y,Fa.z,0,-Fa.x,Ha.z,0,-Ha.x,ms.z,0,-ms.x,-Fa.y,Fa.x,0,-Ha.y,Ha.x,0,-ms.y,ms.x,0];return!dh(i,lr,ur,cr,lu)||(i=[1,0,0,0,1,0,0,0,1],!dh(i,lr,ur,cr,lu))?!1:(uu.crossVectors(Fa,Ha),i=[uu.x,uu.y,uu.z],dh(i,lr,ur,cr,lu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const $i=[new j,new j,new j,new j,new j,new j,new j,new j],_i=new j,ou=new qo,lr=new j,ur=new j,cr=new j,Fa=new j,Ha=new j,ms=new j,No=new j,lu=new j,uu=new j,gs=new j;function dh(o,t,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){gs.fromArray(o,u);const d=l.x*Math.abs(gs.x)+l.y*Math.abs(gs.y)+l.z*Math.abs(gs.z),m=t.dot(gs),p=i.dot(gs),g=s.dot(gs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const Ny=new qo,Oo=new j,ph=new j;class Qu{constructor(t=new j,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):Ny.setFromPoints(t).getCenter(s);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Oo.subVectors(t,this.center);const i=Oo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Oo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ph.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Oo.copy(t.center).add(ph)),this.expandByPoint(Oo.copy(t.center).sub(ph))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ta=new j,mh=new j,cu=new j,Ga=new j,gh=new j,fu=new j,_h=new j;class kd{constructor(t=new j,i=new j(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ta)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ta.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){mh.copy(t).add(i).multiplyScalar(.5),cu.copy(i).sub(t).normalize(),Ga.copy(this.origin).sub(mh);const u=t.distanceTo(i)*.5,h=-this.direction.dot(cu),d=Ga.dot(this.direction),m=-Ga.dot(cu),p=Ga.lengthSq(),g=Math.abs(1-h*h);let v,x,M,b;if(g>0)if(v=h*m-d,x=h*d-m,b=u*g,v>=0)if(x>=-b)if(x<=b){const R=1/g;v*=R,x*=R,M=v*(v+h*x+2*d)+x*(h*v+x+2*m)+p}else x=u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x=-u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x<=-b?(v=Math.max(0,-(-h*u+d)),x=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p):x<=b?(v=0,x=Math.min(Math.max(-u,-m),u),M=x*(x+2*m)+p):(v=Math.max(0,-(h*u+d)),x=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p);else x=h>0?-u:u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(mh).addScaledVector(cu,x),M}intersectSphere(t,i){ta.subVectors(t.center,this.origin);const s=ta.dot(this.direction),l=ta.dot(ta)-s*s,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(u=(t.min.y-x.y)*g,h=(t.max.y-x.y)*g):(u=(t.max.y-x.y)*g,h=(t.min.y-x.y)*g),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-x.z)*v,m=(t.max.z-x.z)*v):(d=(t.max.z-x.z)*v,m=(t.min.z-x.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ta)!==null}intersectTriangle(t,i,s,l,u){gh.subVectors(i,t),fu.subVectors(s,t),_h.crossVectors(gh,fu);let h=this.direction.dot(_h),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ga.subVectors(this.origin,t);const m=d*this.direction.dot(fu.crossVectors(Ga,fu));if(m<0)return null;const p=d*this.direction.dot(gh.cross(Ga));if(p<0||m+p>h)return null;const g=-d*Ga.dot(_h);return g<0?null:this.at(g/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(t,i,s,l,u,h,d,m,p,g,v,x,M,b,R,y){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p,g,v,x,M,b,R,y)}set(t,i,s,l,u,h,d,m,p,g,v,x,M,b,R,y){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=M,_[7]=b,_[11]=R,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/fr.setFromMatrixColumn(t,0).length(),u=1/fr.setFromMatrixColumn(t,1).length(),h=1/fr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const x=h*g,M=h*v,b=d*g,R=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=M+b*p,i[5]=x-R*p,i[9]=-d*m,i[2]=R-x*p,i[6]=b+M*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*g,M=m*v,b=p*g,R=p*v;i[0]=x+R*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=M*d-b,i[6]=R+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*g,M=m*v,b=p*g,R=p*v;i[0]=x-R*d,i[4]=-h*v,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*g,i[9]=R-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*g,M=h*v,b=d*g,R=d*v;i[0]=m*g,i[4]=b*p-M,i[8]=x*p+R,i[1]=m*v,i[5]=R*p+x,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,M=h*p,b=d*m,R=d*p;i[0]=m*g,i[4]=R-x*v,i[8]=b*v+M,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*v+b,i[10]=x-R*v}else if(t.order==="XZY"){const x=h*m,M=h*p,b=d*m,R=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+R,i[5]=h*g,i[9]=M*v-b,i[2]=b*v-M,i[6]=d*g,i[10]=R*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Oy,t,Py)}lookAt(t,i,s){const l=this.elements;return ti.subVectors(t,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Va.crossVectors(s,ti),Va.lengthSq()===0&&(Math.abs(s.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Va.crossVectors(s,ti)),Va.normalize(),hu.crossVectors(ti,Va),l[0]=Va.x,l[4]=hu.x,l[8]=ti.x,l[1]=Va.y,l[5]=hu.y,l[9]=ti.y,l[2]=Va.z,l[6]=hu.z,l[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],v=s[5],x=s[9],M=s[13],b=s[2],R=s[6],y=s[10],_=s[14],O=s[3],N=s[7],w=s[11],B=s[15],V=l[0],I=l[4],Z=l[8],D=l[12],C=l[1],G=l[5],lt=l[9],rt=l[13],gt=l[2],ht=l[6],z=l[10],K=l[14],Y=l[3],Mt=l[7],U=l[11],tt=l[15];return u[0]=h*V+d*C+m*gt+p*Y,u[4]=h*I+d*G+m*ht+p*Mt,u[8]=h*Z+d*lt+m*z+p*U,u[12]=h*D+d*rt+m*K+p*tt,u[1]=g*V+v*C+x*gt+M*Y,u[5]=g*I+v*G+x*ht+M*Mt,u[9]=g*Z+v*lt+x*z+M*U,u[13]=g*D+v*rt+x*K+M*tt,u[2]=b*V+R*C+y*gt+_*Y,u[6]=b*I+R*G+y*ht+_*Mt,u[10]=b*Z+R*lt+y*z+_*U,u[14]=b*D+R*rt+y*K+_*tt,u[3]=O*V+N*C+w*gt+B*Y,u[7]=O*I+N*G+w*ht+B*Mt,u[11]=O*Z+N*lt+w*z+B*U,u[15]=O*D+N*rt+w*K+B*tt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],v=t[6],x=t[10],M=t[14],b=t[3],R=t[7],y=t[11],_=t[15];return b*(+u*m*v-l*p*v-u*d*x+s*p*x+l*d*M-s*m*M)+R*(+i*m*M-i*p*x+u*h*x-l*h*M+l*p*g-u*m*g)+y*(+i*p*v-i*d*M-u*h*v+s*h*M+u*d*g-s*p*g)+_*(-l*d*g-i*m*v+i*d*x+l*h*v-s*h*x+s*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=t[9],x=t[10],M=t[11],b=t[12],R=t[13],y=t[14],_=t[15],O=v*y*p-R*x*p+R*m*M-d*y*M-v*m*_+d*x*_,N=b*x*p-g*y*p-b*m*M+h*y*M+g*m*_-h*x*_,w=g*R*p-b*v*p+b*d*M-h*R*M-g*d*_+h*v*_,B=b*v*m-g*R*m-b*d*x+h*R*x+g*d*y-h*v*y,V=i*O+s*N+l*w+u*B;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/V;return t[0]=O*I,t[1]=(R*x*u-v*y*u-R*l*M+s*y*M+v*l*_-s*x*_)*I,t[2]=(d*y*u-R*m*u+R*l*p-s*y*p-d*l*_+s*m*_)*I,t[3]=(v*m*u-d*x*u-v*l*p+s*x*p+d*l*M-s*m*M)*I,t[4]=N*I,t[5]=(g*y*u-b*x*u+b*l*M-i*y*M-g*l*_+i*x*_)*I,t[6]=(b*m*u-h*y*u-b*l*p+i*y*p+h*l*_-i*m*_)*I,t[7]=(h*x*u-g*m*u+g*l*p-i*x*p-h*l*M+i*m*M)*I,t[8]=w*I,t[9]=(b*v*u-g*R*u-b*s*M+i*R*M+g*s*_-i*v*_)*I,t[10]=(h*R*u-b*d*u+b*s*p-i*R*p-h*s*_+i*d*_)*I,t[11]=(g*d*u-h*v*u-g*s*p+i*v*p+h*s*M-i*d*M)*I,t[12]=B*I,t[13]=(g*R*l-b*v*l+b*s*x-i*R*x-g*s*y+i*v*y)*I,t[14]=(b*d*l-h*R*l-b*s*m+i*R*m+h*s*y-i*d*y)*I,t[15]=(h*v*l-g*d*l+g*s*m-i*v*m-h*s*x+i*d*x)*I,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=t.x,d=t.y,m=t.z,p=u*h,g=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,h){return this.set(1,s,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,v=d+d,x=u*p,M=u*g,b=u*v,R=h*g,y=h*v,_=d*v,O=m*p,N=m*g,w=m*v,B=s.x,V=s.y,I=s.z;return l[0]=(1-(R+_))*B,l[1]=(M+w)*B,l[2]=(b-N)*B,l[3]=0,l[4]=(M-w)*V,l[5]=(1-(x+_))*V,l[6]=(y+O)*V,l[7]=0,l[8]=(b+N)*I,l[9]=(y-O)*I,l[10]=(1-(x+R))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let u=fr.set(l[0],l[1],l[2]).length();const h=fr.set(l[4],l[5],l[6]).length(),d=fr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],vi.copy(this);const p=1/u,g=1/h,v=1/d;return vi.elements[0]*=p,vi.elements[1]*=p,vi.elements[2]*=p,vi.elements[4]*=g,vi.elements[5]*=g,vi.elements[6]*=g,vi.elements[8]*=v,vi.elements[9]*=v,vi.elements[10]*=v,i.setFromRotationMatrix(vi),s.x=u,s.y=h,s.z=d,this}makePerspective(t,i,s,l,u,h,d=oa){const m=this.elements,p=2*u/(i-t),g=2*u/(s-l),v=(i+t)/(i-t),x=(s+l)/(s-l);let M,b;if(d===oa)M=-(h+u)/(h-u),b=-2*h*u/(h-u);else if(d===Wu)M=-h/(h-u),b=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,u,h,d=oa){const m=this.elements,p=1/(i-t),g=1/(s-l),v=1/(h-u),x=(i+t)*p,M=(s+l)*g;let b,R;if(d===oa)b=(h+u)*v,R=-2*v;else if(d===Wu)b=u*v,R=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=R,m[14]=-b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const fr=new j,vi=new Qe,Oy=new j(0,0,0),Py=new j(1,1,1),Va=new j,hu=new j,ti=new j,H_=new Qe,G_=new Rs;class ha{constructor(t=0,i=0,s=0,l=ha.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(me(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-me(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return H_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(H_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return G_.setFromEuler(this),this.setFromQuaternion(G_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ha.DEFAULT_ORDER="XYZ";class n0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zy=0;const V_=new j,hr=new Rs,ea=new Qe,du=new j,Po=new j,By=new j,Iy=new Rs,k_=new j(1,0,0),X_=new j(0,1,0),W_=new j(0,0,1),Y_={type:"added"},Fy={type:"removed"},dr={type:"childadded",child:null},vh={type:"childremoved",child:null};class Pn extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const t=new j,i=new ha,s=new Rs,l=new j(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Qe},normalMatrix:{value:new se}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new n0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return hr.setFromAxisAngle(t,i),this.quaternion.multiply(hr),this}rotateOnWorldAxis(t,i){return hr.setFromAxisAngle(t,i),this.quaternion.premultiply(hr),this}rotateX(t){return this.rotateOnAxis(k_,t)}rotateY(t){return this.rotateOnAxis(X_,t)}rotateZ(t){return this.rotateOnAxis(W_,t)}translateOnAxis(t,i){return V_.copy(t).applyQuaternion(this.quaternion),this.position.add(V_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(k_,t)}translateY(t){return this.translateOnAxis(X_,t)}translateZ(t){return this.translateOnAxis(W_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?du.copy(t):du.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(Po,du,this.up):ea.lookAt(du,Po,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),hr.setFromRotationMatrix(ea),this.quaternion.premultiply(hr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Y_),dr.child=t,this.dispatchEvent(dr),dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Fy),vh.child=t,this.dispatchEvent(vh),vh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Y_),dr.child=t,this.dispatchEvent(dr),dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,t,By),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,Iy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];u(t.shapes,v)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),v=h(t.shapes),x=h(t.skeletons),M=h(t.animations),b=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Pn.DEFAULT_UP=new j(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new j,na=new j,xh=new j,ia=new j,pr=new j,mr=new j,q_=new j,Sh=new j,yh=new j,Mh=new j,Eh=new tn,Th=new tn,bh=new tn;class hi{constructor(t=new j,i=new j,s=new j){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),xi.subVectors(t,i),l.cross(xi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){xi.subVectors(l,i),na.subVectors(s,i),xh.subVectors(t,i);const h=xi.dot(xi),d=xi.dot(na),m=xi.dot(xh),p=na.dot(na),g=na.dot(xh),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,M=(p*m-d*g)*x,b=(h*g-d*m)*x;return u.set(1-M-b,b,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(t,i,s,l,u,h,d,m){return this.getBarycoord(t,i,s,l,ia)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ia.x),m.addScaledVector(h,ia.y),m.addScaledVector(d,ia.z),m)}static getInterpolatedAttribute(t,i,s,l,u,h){return Eh.setScalar(0),Th.setScalar(0),bh.setScalar(0),Eh.fromBufferAttribute(t,i),Th.fromBufferAttribute(t,s),bh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Eh,u.x),h.addScaledVector(Th,u.y),h.addScaledVector(bh,u.z),h}static isFrontFacing(t,i,s,l){return xi.subVectors(s,i),na.subVectors(t,i),xi.cross(na).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),xi.cross(na).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return hi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return hi.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return hi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let h,d;pr.subVectors(l,s),mr.subVectors(u,s),Sh.subVectors(t,s);const m=pr.dot(Sh),p=mr.dot(Sh);if(m<=0&&p<=0)return i.copy(s);yh.subVectors(t,l);const g=pr.dot(yh),v=mr.dot(yh);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(pr,h);Mh.subVectors(t,u);const M=pr.dot(Mh),b=mr.dot(Mh);if(b>=0&&M<=b)return i.copy(u);const R=M*p-m*b;if(R<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(mr,d);const y=g*b-M*v;if(y<=0&&v-g>=0&&M-b>=0)return q_.subVectors(u,l),d=(v-g)/(v-g+(M-b)),i.copy(l).addScaledVector(q_,d);const _=1/(y+R+x);return h=R*_,d=x*_,i.copy(s).addScaledVector(pr,h).addScaledVector(mr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const i0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ka={h:0,s:0,l:0},pu={h:0,s:0,l:0};function Ah(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class ge{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=Ae.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ae.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=Ae.workingColorSpace){if(t=yy(t,1),i=me(i,0,1),s=me(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=Ah(h,u,t+1/3),this.g=Ah(h,u,t),this.b=Ah(h,u,t-1/3)}return Ae.toWorkingColorSpace(this,l),this}setStyle(t,i=ci){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ci){const s=i0[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ca(t.r),this.g=ca(t.g),this.b=ca(t.b),this}copyLinearToSRGB(t){return this.r=wr(t.r),this.g=wr(t.g),this.b=wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return Ae.fromWorkingColorSpace(Dn.copy(this),t),Math.round(me(Dn.r*255,0,255))*65536+Math.round(me(Dn.g*255,0,255))*256+Math.round(me(Dn.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ae.workingColorSpace){Ae.fromWorkingColorSpace(Dn.copy(this),i);const s=Dn.r,l=Dn.g,u=Dn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=g<=.5?v/(h+d):v/(2-h-d),h){case s:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-s)/v+2;break;case u:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(Dn.copy(this),i),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=ci){Ae.fromWorkingColorSpace(Dn.copy(this),t);const i=Dn.r,s=Dn.g,l=Dn.b;return t!==ci?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ka),this.setHSL(ka.h+t,ka.s+i,ka.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ka),t.getHSL(pu);const s=uh(ka.h,pu.h,i),l=uh(ka.s,pu.s,i),u=uh(ka.l,pu.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new ge;ge.NAMES=i0;let Hy=0;class zr extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=ja(),this.name="",this.type="Material",this.blending=Cr,this.side=Za,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wh,this.blendDst=Yh,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=O_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(s.blending=this.blending),this.side!==Za&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Wh&&(s.blendSrc=this.blendSrc),this.blendDst!==Yh&&(s.blendDst=this.blendDst),this.blendEquation!==Ms&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==O_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xd extends zr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ha,this.combine=Gv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const rn=new j,mu=new kt;let Gy=0;class Ei{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Dd,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)mu.fromBufferAttribute(this,i),mu.applyMatrix3(t),this.setXY(i,mu.x,mu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix3(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix4(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.applyNormalMatrix(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.transformDirection(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ui(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=ze(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ui(i,this.array)),i}setX(t,i){return this.normalized&&(i=ze(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ui(i,this.array)),i}setY(t,i){return this.normalized&&(i=ze(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ui(i,this.array)),i}setZ(t,i){return this.normalized&&(i=ze(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ui(i,this.array)),i}setW(t,i){return this.normalized&&(i=ze(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=ze(i,this.array),s=ze(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=ze(i,this.array),s=ze(s,this.array),l=ze(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=ze(i,this.array),s=ze(s,this.array),l=ze(l,this.array),u=ze(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dd&&(t.usage=this.usage),t}}class a0 extends Ei{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class s0 extends Ei{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class zn extends Ei{constructor(t,i,s){super(new Float32Array(t),i,s)}}let Vy=0;const ui=new Qe,Rh=new Pn,gr=new j,ei=new qo,zo=new qo,xn=new j;class di extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(t0(t)?s0:a0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new se().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,i,s){return ui.makeTranslation(t,i,s),this.applyMatrix4(ui),this}scale(t,i,s){return ui.makeScale(t,i,s),this.applyMatrix4(ui),this}lookAt(t){return Rh.lookAt(t),Rh.updateMatrix(),this.applyMatrix4(Rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new zn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ei.setFromBufferAttribute(u),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const s=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];zo.setFromBufferAttribute(d),this.morphTargetsRelative?(xn.addVectors(ei.min,zo.min),ei.expandByPoint(xn),xn.addVectors(ei.max,zo.max),ei.expandByPoint(xn)):(ei.expandByPoint(zo.min),ei.expandByPoint(zo.max))}ei.getCenter(s);let l=0;for(let u=0,h=t.count;u<h;u++)xn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(xn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)xn.fromBufferAttribute(d,p),m&&(gr.fromBufferAttribute(t,p),xn.add(gr)),l=Math.max(l,s.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Z=0;Z<s.count;Z++)d[Z]=new j,m[Z]=new j;const p=new j,g=new j,v=new j,x=new kt,M=new kt,b=new kt,R=new j,y=new j;function _(Z,D,C){p.fromBufferAttribute(s,Z),g.fromBufferAttribute(s,D),v.fromBufferAttribute(s,C),x.fromBufferAttribute(u,Z),M.fromBufferAttribute(u,D),b.fromBufferAttribute(u,C),g.sub(p),v.sub(p),M.sub(x),b.sub(x);const G=1/(M.x*b.y-b.x*M.y);isFinite(G)&&(R.copy(g).multiplyScalar(b.y).addScaledVector(v,-M.y).multiplyScalar(G),y.copy(v).multiplyScalar(M.x).addScaledVector(g,-b.x).multiplyScalar(G),d[Z].add(R),d[D].add(R),d[C].add(R),m[Z].add(y),m[D].add(y),m[C].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let Z=0,D=O.length;Z<D;++Z){const C=O[Z],G=C.start,lt=C.count;for(let rt=G,gt=G+lt;rt<gt;rt+=3)_(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const N=new j,w=new j,B=new j,V=new j;function I(Z){B.fromBufferAttribute(l,Z),V.copy(B);const D=d[Z];N.copy(D),N.sub(B.multiplyScalar(B.dot(D))).normalize(),w.crossVectors(V,D);const G=w.dot(m[Z])<0?-1:1;h.setXYZW(Z,N.x,N.y,N.z,G)}for(let Z=0,D=O.length;Z<D;++Z){const C=O[Z],G=C.start,lt=C.count;for(let rt=G,gt=G+lt;rt<gt;rt+=3)I(t.getX(rt+0)),I(t.getX(rt+1)),I(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ei(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new j,u=new j,h=new j,d=new j,m=new j,p=new j,g=new j,v=new j;if(t)for(let x=0,M=t.count;x<M;x+=3){const b=t.getX(x+0),R=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,y),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,R),p.fromBufferAttribute(s,y),d.add(g),m.add(g),p.add(g),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)xn.fromBufferAttribute(t,i),xn.normalize(),t.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,v=d.normalized,x=new p.constructor(m.length*g);let M=0,b=0;for(let R=0,y=m.length;R<y;R++){d.isInterleavedBufferAttribute?M=m[R]*d.data.stride+d.offset:M=m[R]*g;for(let _=0;_<g;_++)x[b++]=p[M++]}return new Ei(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new di,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,v=p.length;g<v;g++){const x=p[g],M=t(x,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const M=p[v];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=t.morphAttributes;for(const p in u){const g=[],v=u[p];for(let x=0,M=v.length;x<M;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const j_=new Qe,_s=new kd,gu=new Qu,Z_=new j,_u=new j,vu=new j,xu=new j,Ch=new j,Su=new j,K_=new j,yu=new j;class Ni extends Pn{constructor(t=new di,i=new Xd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){Su.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],v=u[m];g!==0&&(Ch.fromBufferAttribute(v,t),h?Su.addScaledVector(Ch,g):Su.addScaledVector(Ch.sub(i),g))}i.add(Su)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),gu.copy(s.boundingSphere),gu.applyMatrix4(u),_s.copy(t.ray).recast(t.near),!(gu.containsPoint(_s.origin)===!1&&(_s.intersectSphere(gu,Z_)===null||_s.origin.distanceToSquared(Z_)>(t.far-t.near)**2))&&(j_.copy(u).invert(),_s.copy(t.ray).applyMatrix4(j_),!(s.boundingBox!==null&&_s.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,_s)))}_computeIntersections(t,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,x=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,R=x.length;b<R;b++){const y=x[b],_=h[y.materialIndex],O=Math.max(y.start,M.start),N=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let w=O,B=N;w<B;w+=3){const V=d.getX(w),I=d.getX(w+1),Z=d.getX(w+2);l=Mu(this,_,t,s,p,g,v,V,I,Z),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let y=b,_=R;y<_;y+=3){const O=d.getX(y),N=d.getX(y+1),w=d.getX(y+2);l=Mu(this,h,t,s,p,g,v,O,N,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,R=x.length;b<R;b++){const y=x[b],_=h[y.materialIndex],O=Math.max(y.start,M.start),N=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let w=O,B=N;w<B;w+=3){const V=w,I=w+1,Z=w+2;l=Mu(this,_,t,s,p,g,v,V,I,Z),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let y=b,_=R;y<_;y+=3){const O=y,N=y+1,w=y+2;l=Mu(this,h,t,s,p,g,v,O,N,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function ky(o,t,i,s,l,u,h,d){let m;if(t.side===Wn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,t.side===Za,d),m===null)return null;yu.copy(d),yu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(yu);return p<i.near||p>i.far?null:{distance:p,point:yu.clone(),object:o}}function Mu(o,t,i,s,l,u,h,d,m,p){o.getVertexPosition(d,_u),o.getVertexPosition(m,vu),o.getVertexPosition(p,xu);const g=ky(o,t,i,s,_u,vu,xu,K_);if(g){const v=new j;hi.getBarycoord(K_,_u,vu,xu,v),l&&(g.uv=hi.getInterpolatedAttribute(l,d,m,p,v,new kt)),u&&(g.uv1=hi.getInterpolatedAttribute(u,d,m,p,v,new kt)),h&&(g.normal=hi.getInterpolatedAttribute(h,d,m,p,v,new j),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new j,materialIndex:0};hi.getNormal(_u,vu,xu,x.normal),g.face=x,g.barycoord=v}return g}class jo extends di{constructor(t=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],v=[];let x=0,M=0;b("z","y","x",-1,-1,s,i,t,h,u,0),b("z","y","x",1,-1,s,i,-t,h,u,1),b("x","z","y",1,1,t,s,i,l,h,2),b("x","z","y",1,-1,t,s,-i,l,h,3),b("x","y","z",1,-1,t,i,s,l,u,4),b("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new zn(p,3)),this.setAttribute("normal",new zn(g,3)),this.setAttribute("uv",new zn(v,2));function b(R,y,_,O,N,w,B,V,I,Z,D){const C=w/I,G=B/Z,lt=w/2,rt=B/2,gt=V/2,ht=I+1,z=Z+1;let K=0,Y=0;const Mt=new j;for(let U=0;U<z;U++){const tt=U*G-rt;for(let vt=0;vt<ht;vt++){const St=vt*C-lt;Mt[R]=St*O,Mt[y]=tt*N,Mt[_]=gt,p.push(Mt.x,Mt.y,Mt.z),Mt[R]=0,Mt[y]=0,Mt[_]=V>0?1:-1,g.push(Mt.x,Mt.y,Mt.z),v.push(vt/I),v.push(1-U/Z),K+=1}}for(let U=0;U<Z;U++)for(let tt=0;tt<I;tt++){const vt=x+tt+ht*U,St=x+tt+ht*(U+1),J=x+(tt+1)+ht*(U+1),dt=x+(tt+1)+ht*U;m.push(vt,St,dt),m.push(St,J,dt),Y+=6}d.addGroup(M,Y,D),M+=Y,x+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Or(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Nn(o){const t={};for(let i=0;i<o.length;i++){const s=Or(o[i]);for(const l in s)t[l]=s[l]}return t}function Xy(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function r0(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const Yu={clone:Or,merge:Nn};var Wy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends zr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wy,this.fragmentShader=Yy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Or(t.uniforms),this.uniformsGroups=Xy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class o0 extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=oa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xa=new j,Q_=new kt,J_=new kt;class fi extends o0{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Ud*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ud*2*Math.atan(Math.tan(Hu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Xa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xa.x,Xa.y).multiplyScalar(-t/Xa.z),Xa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Xa.x,Xa.y).multiplyScalar(-t/Xa.z)}getViewSize(t,i){return this.getViewBounds(t,Q_,J_),i.subVectors(J_,Q_)}setViewOffset(t,i,s,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Hu*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const _r=-90,vr=1;class qy extends Pn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(_r,vr,t,i);l.layers=this.layers,this.add(l);const u=new fi(_r,vr,t,i);u.layers=this.layers,this.add(u);const h=new fi(_r,vr,t,i);h.layers=this.layers,this.add(h);const d=new fi(_r,vr,t,i);d.layers=this.layers,this.add(d);const m=new fi(_r,vr,t,i);m.layers=this.layers,this.add(m);const p=new fi(_r,vr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===oa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Wu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=R,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(v,x,M),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class l0 extends On{constructor(t=[],i=Ur,s,l,u,h,d,m,p,g){super(t,i,s,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jy extends Mi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new l0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Li}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new jo(5,5,5),u=new Xn({name:"CubemapFromEquirect",uniforms:Or(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Wn,blending:la});u.uniforms.tEquirect.value=i;const h=new Ni(l,u),d=i.minFilter;return i.minFilter===bs&&(i.minFilter=Li),new qy(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(u)}}class Eu extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zy={type:"move"};class wh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Eu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Eu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Eu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const R of t.hand.values()){const y=i.getJointPose(R,s),_=this._getHandJoint(p,R);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),M=.02,b=.005;p.inputState.pinching&&x>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Zy)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Eu;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Ky extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ha,this.environmentIntensity=1,this.environmentRotation=new ha,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Qy{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Dd,this.updateRanges=[],this.version=0,this.uuid=ja()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,u=this.stride;l<u;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ja()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ja()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ln=new j;class qu{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)Ln.fromBufferAttribute(this,i),Ln.applyMatrix4(t),this.setXYZ(i,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Ln.fromBufferAttribute(this,i),Ln.applyNormalMatrix(t),this.setXYZ(i,Ln.x,Ln.y,Ln.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Ln.fromBufferAttribute(this,i),Ln.transformDirection(t),this.setXYZ(i,Ln.x,Ln.y,Ln.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=Ui(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=ze(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=ze(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=ze(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=ze(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=ze(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Ui(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Ui(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Ui(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Ui(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=ze(i,this.array),s=ze(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=ze(i,this.array),s=ze(s,this.array),l=ze(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t=t*this.data.stride+this.offset,this.normalized&&(i=ze(i,this.array),s=ze(s,this.array),l=ze(l,this.array),u=ze(u,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=u,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return new Ei(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new qu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ld extends zr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let xr;const Bo=new j,Sr=new j,yr=new j,Mr=new kt,Io=new kt,u0=new Qe,Tu=new j,Fo=new j,bu=new j,$_=new kt,Dh=new kt,tv=new kt;class Uh extends Pn{constructor(t=new Ld){if(super(),this.isSprite=!0,this.type="Sprite",xr===void 0){xr=new di;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new Qy(i,5);xr.setIndex([0,1,2,0,2,3]),xr.setAttribute("position",new qu(s,3,0,!1)),xr.setAttribute("uv",new qu(s,2,3,!1))}this.geometry=xr,this.material=t,this.center=new kt(.5,.5)}raycast(t,i){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Sr.setFromMatrixScale(this.matrixWorld),u0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),yr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Sr.multiplyScalar(-yr.z);const s=this.material.rotation;let l,u;s!==0&&(u=Math.cos(s),l=Math.sin(s));const h=this.center;Au(Tu.set(-.5,-.5,0),yr,h,Sr,l,u),Au(Fo.set(.5,-.5,0),yr,h,Sr,l,u),Au(bu.set(.5,.5,0),yr,h,Sr,l,u),$_.set(0,0),Dh.set(1,0),tv.set(1,1);let d=t.ray.intersectTriangle(Tu,Fo,bu,!1,Bo);if(d===null&&(Au(Fo.set(-.5,.5,0),yr,h,Sr,l,u),Dh.set(0,1),d=t.ray.intersectTriangle(Tu,bu,Fo,!1,Bo),d===null))return;const m=t.ray.origin.distanceTo(Bo);m<t.near||m>t.far||i.push({distance:m,point:Bo.clone(),uv:hi.getInterpolation(Bo,Tu,Fo,bu,$_,Dh,tv,new kt),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Au(o,t,i,s,l,u){Mr.subVectors(o,i).addScalar(.5).multiply(s),l!==void 0?(Io.x=u*Mr.x-l*Mr.y,Io.y=l*Mr.x+u*Mr.y):Io.copy(Mr),o.copy(t),o.x+=Io.x,o.y+=Io.y,o.applyMatrix4(u0)}const Lh=new j,Jy=new j,$y=new se;class Wa{constructor(t=new j(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Lh.subVectors(s,i).cross(Jy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Lh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||$y.getNormalMatrix(t),l=this.coplanarPoint(Lh).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new Qu,Ru=new j;class c0{constructor(t=new Wa,i=new Wa,s=new Wa,l=new Wa,u=new Wa,h=new Wa){this.planes=[t,i,s,l,u,h]}set(t,i,s,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=oa){const s=this.planes,l=t.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],v=l[6],x=l[7],M=l[8],b=l[9],R=l[10],y=l[11],_=l[12],O=l[13],N=l[14],w=l[15];if(s[0].setComponents(m-u,x-p,y-M,w-_).normalize(),s[1].setComponents(m+u,x+p,y+M,w+_).normalize(),s[2].setComponents(m+h,x+g,y+b,w+O).normalize(),s[3].setComponents(m-h,x-g,y-b,w-O).normalize(),s[4].setComponents(m-d,x-v,y-R,w-N).normalize(),i===oa)s[5].setComponents(m+d,x+v,y+R,w+N).normalize();else if(i===Wu)s[5].setComponents(d,v,R,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),vs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(t){return vs.center.set(0,0,0),vs.radius=.7071067811865476,vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Ru.x=l.normal.x>0?t.max.x:t.min.x,Ru.y=l.normal.y>0?t.max.y:t.min.y,Ru.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Ru)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wd extends zr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ju=new j,Zu=new j,ev=new Qe,Ho=new kd,Cu=new Qu,Nh=new j,nv=new j;class tM extends Pn{constructor(t=new di,i=new Wd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)ju.fromBufferAttribute(i,l-1),Zu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=ju.distanceTo(Zu);t.setAttribute("lineDistance",new zn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Cu.copy(s.boundingSphere),Cu.applyMatrix4(l),Cu.radius+=u,t.ray.intersectsSphere(Cu)===!1)return;ev.copy(l).invert(),Ho.copy(t.ray).applyMatrix4(ev);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,x=s.attributes.position;if(g!==null){const M=Math.max(0,h.start),b=Math.min(g.count,h.start+h.count);for(let R=M,y=b-1;R<y;R+=p){const _=g.getX(R),O=g.getX(R+1),N=wu(this,t,Ho,m,_,O,R);N&&i.push(N)}if(this.isLineLoop){const R=g.getX(b-1),y=g.getX(M),_=wu(this,t,Ho,m,R,y,b-1);_&&i.push(_)}}else{const M=Math.max(0,h.start),b=Math.min(x.count,h.start+h.count);for(let R=M,y=b-1;R<y;R+=p){const _=wu(this,t,Ho,m,R,R+1,R);_&&i.push(_)}if(this.isLineLoop){const R=wu(this,t,Ho,m,b-1,M,b-1);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function wu(o,t,i,s,l,u,h){const d=o.geometry.attributes.position;if(ju.fromBufferAttribute(d,l),Zu.fromBufferAttribute(d,u),i.distanceSqToSegment(ju,Zu,Nh,nv)>s)return;Nh.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Nh);if(!(p<t.near||p>t.far))return{distance:p,point:nv.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const iv=new j,av=new j;class f0 extends tM{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,u=i.count;l<u;l+=2)iv.fromBufferAttribute(i,l),av.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+iv.distanceTo(av);t.setAttribute("lineDistance",new zn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class h0 extends On{constructor(t,i,s=As,l,u,h,d=yi,m=yi,p,g=Xo){if(g!==Xo&&g!==Wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,u,h,d,m,g,s,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Vd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ju extends di{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,v=t/d,x=i/m,M=[],b=[],R=[],y=[];for(let _=0;_<g;_++){const O=_*x-h;for(let N=0;N<p;N++){const w=N*v-u;b.push(w,-O,0),R.push(0,0,1),y.push(N/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let O=0;O<d;O++){const N=O+p*_,w=O+p*(_+1),B=O+1+p*(_+1),V=O+1+p*_;M.push(N,w,V),M.push(w,B,V)}this.setIndex(M),this.setAttribute("position",new zn(b,3)),this.setAttribute("normal",new zn(R,3)),this.setAttribute("uv",new zn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ju(t.width,t.height,t.widthSegments,t.heightSegments)}}class eM extends zr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class nM extends zr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const sv={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class iM{constructor(t,i,s){const l=this;let u=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this.itemStart=function(g){d++,u===!1&&l.onStart!==void 0&&l.onStart(g,h,d),u=!0},this.itemEnd=function(g){h++,l.onProgress!==void 0&&l.onProgress(g,h,d),h===d&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,v){return p.push(g,v),this},this.removeHandler=function(g){const v=p.indexOf(g);return v!==-1&&p.splice(v,2),this},this.getHandler=function(g){for(let v=0,x=p.length;v<x;v+=2){const M=p[v],b=p[v+1];if(M.global&&(M.lastIndex=0),M.test(g))return b}return null}}}const aM=new iM;class Yd{constructor(t){this.manager=t!==void 0?t:aM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,u){s.load(t,l,i,u)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Yd.DEFAULT_MATERIAL_NAME="__DEFAULT";class sM extends Yd{constructor(t){super(t)}load(t,i,s,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const u=this,h=sv.get(t);if(h!==void 0)return u.manager.itemStart(t),setTimeout(function(){i&&i(h),u.manager.itemEnd(t)},0),h;const d=Yo("img");function m(){g(),sv.add(t,this),i&&i(this),u.manager.itemEnd(t)}function p(v){g(),l&&l(v),u.manager.itemError(t),u.manager.itemEnd(t)}function g(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),u.manager.itemStart(t),d.src=t,d}}class rv extends Yd{constructor(t){super(t)}load(t,i,s,l){const u=new On,h=new sM(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(d){u.image=d,u.needsUpdate=!0,i!==void 0&&i(u)},s,l),u}}class d0 extends o0{constructor(t=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class rM extends fi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class oM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ov(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=ov();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function ov(){return performance.now()}class lv{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(me(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class lM extends f0{constructor(t=10,i=10,s=4473924,l=8947848){s=new ge(s),l=new ge(l);const u=i/2,h=t/i,d=t/2,m=[],p=[];for(let x=0,M=0,b=-d;x<=i;x++,b+=h){m.push(-d,0,b,d,0,b),m.push(b,0,-d,b,0,d);const R=x===u?s:l;R.toArray(p,M),M+=3,R.toArray(p,M),M+=3,R.toArray(p,M),M+=3,R.toArray(p,M),M+=3}const g=new di;g.setAttribute("position",new zn(m,3)),g.setAttribute("color",new zn(p,3));const v=new Wd({vertexColors:!0,toneMapped:!1});super(g,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class uM extends f0{constructor(t=1){const i=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],s=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],l=new di;l.setAttribute("position",new zn(i,3)),l.setAttribute("color",new zn(s,3));const u=new Wd({vertexColors:!0,toneMapped:!1});super(l,u),this.type="AxesHelper"}setColors(t,i,s){const l=new ge,u=this.geometry.attributes.color.array;return l.set(t),l.toArray(u,0),l.toArray(u,3),l.set(i),l.toArray(u,6),l.toArray(u,9),l.set(s),l.toArray(u,12),l.toArray(u,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class cM extends Cs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function uv(o,t,i,s){const l=fM(s);switch(i){case Yv:return o*t;case jv:return o*t;case Zv:return o*t*2;case Kv:return o*t/l.components*l.byteLength;case Fd:return o*t/l.components*l.byteLength;case Qv:return o*t*2/l.components*l.byteLength;case Hd:return o*t*2/l.components*l.byteLength;case qv:return o*t*3/l.components*l.byteLength;case Si:return o*t*4/l.components*l.byteLength;case Gd:return o*t*4/l.components*l.byteLength;case Pu:case zu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Bu:case Iu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case sd:case od:return Math.max(o,16)*Math.max(t,8)/4;case ad:case rd:return Math.max(o,8)*Math.max(t,8)/2;case ld:case ud:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case cd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case fd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case hd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case dd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case pd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case md:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case gd:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case _d:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case vd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case xd:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Sd:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case yd:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Md:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Ed:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Td:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Fu:case bd:case Ad:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Jv:case Rd:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Cd:case wd:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function fM(o){switch(o){case fa:case kv:return{byteLength:1,components:1};case Vo:case Xv:case ua:return{byteLength:2,components:1};case Bd:case Id:return{byteLength:2,components:4};case As:case zd:case ra:return{byteLength:4,components:1};case Wv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function p0(){let o=null,t=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function hM(o){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const g=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,g);else{v.sort((M,b)=>M.start-b.start);let x=0;for(let M=1;M<v.length;M++){const b=v[x],R=v[M];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++x,v[x]=R)}v.length=x+1;for(let M=0,b=v.length;M<b;M++){const R=v[M];o.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var dM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_M=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,SM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,MM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,EM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,AM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,RM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,OM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,BM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,IM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,FM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kM="gl_FragColor = linearToOutputTexel( gl_FragColor );",XM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,YM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,KM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$M=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_E=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ME=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,UE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,LE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,VE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ZE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,KE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,QE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,JE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$E=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,oT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_T=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ST=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,MT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ET=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,RT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,UT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,NT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,OT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,BT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,GT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,XT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:dM,alphahash_pars_fragment:pM,alphamap_fragment:mM,alphamap_pars_fragment:gM,alphatest_fragment:_M,alphatest_pars_fragment:vM,aomap_fragment:xM,aomap_pars_fragment:SM,batching_pars_vertex:yM,batching_vertex:MM,begin_vertex:EM,beginnormal_vertex:TM,bsdfs:bM,iridescence_fragment:AM,bumpmap_pars_fragment:RM,clipping_planes_fragment:CM,clipping_planes_pars_fragment:wM,clipping_planes_pars_vertex:DM,clipping_planes_vertex:UM,color_fragment:LM,color_pars_fragment:NM,color_pars_vertex:OM,color_vertex:PM,common:zM,cube_uv_reflection_fragment:BM,defaultnormal_vertex:IM,displacementmap_pars_vertex:FM,displacementmap_vertex:HM,emissivemap_fragment:GM,emissivemap_pars_fragment:VM,colorspace_fragment:kM,colorspace_pars_fragment:XM,envmap_fragment:WM,envmap_common_pars_fragment:YM,envmap_pars_fragment:qM,envmap_pars_vertex:jM,envmap_physical_pars_fragment:sE,envmap_vertex:ZM,fog_vertex:KM,fog_pars_vertex:QM,fog_fragment:JM,fog_pars_fragment:$M,gradientmap_pars_fragment:tE,lightmap_pars_fragment:eE,lights_lambert_fragment:nE,lights_lambert_pars_fragment:iE,lights_pars_begin:aE,lights_toon_fragment:rE,lights_toon_pars_fragment:oE,lights_phong_fragment:lE,lights_phong_pars_fragment:uE,lights_physical_fragment:cE,lights_physical_pars_fragment:fE,lights_fragment_begin:hE,lights_fragment_maps:dE,lights_fragment_end:pE,logdepthbuf_fragment:mE,logdepthbuf_pars_fragment:gE,logdepthbuf_pars_vertex:_E,logdepthbuf_vertex:vE,map_fragment:xE,map_pars_fragment:SE,map_particle_fragment:yE,map_particle_pars_fragment:ME,metalnessmap_fragment:EE,metalnessmap_pars_fragment:TE,morphinstance_vertex:bE,morphcolor_vertex:AE,morphnormal_vertex:RE,morphtarget_pars_vertex:CE,morphtarget_vertex:wE,normal_fragment_begin:DE,normal_fragment_maps:UE,normal_pars_fragment:LE,normal_pars_vertex:NE,normal_vertex:OE,normalmap_pars_fragment:PE,clearcoat_normal_fragment_begin:zE,clearcoat_normal_fragment_maps:BE,clearcoat_pars_fragment:IE,iridescence_pars_fragment:FE,opaque_fragment:HE,packing:GE,premultiplied_alpha_fragment:VE,project_vertex:kE,dithering_fragment:XE,dithering_pars_fragment:WE,roughnessmap_fragment:YE,roughnessmap_pars_fragment:qE,shadowmap_pars_fragment:jE,shadowmap_pars_vertex:ZE,shadowmap_vertex:KE,shadowmask_pars_fragment:QE,skinbase_vertex:JE,skinning_pars_vertex:$E,skinning_vertex:tT,skinnormal_vertex:eT,specularmap_fragment:nT,specularmap_pars_fragment:iT,tonemapping_fragment:aT,tonemapping_pars_fragment:sT,transmission_fragment:rT,transmission_pars_fragment:oT,uv_pars_fragment:lT,uv_pars_vertex:uT,uv_vertex:cT,worldpos_vertex:fT,background_vert:hT,background_frag:dT,backgroundCube_vert:pT,backgroundCube_frag:mT,cube_vert:gT,cube_frag:_T,depth_vert:vT,depth_frag:xT,distanceRGBA_vert:ST,distanceRGBA_frag:yT,equirect_vert:MT,equirect_frag:ET,linedashed_vert:TT,linedashed_frag:bT,meshbasic_vert:AT,meshbasic_frag:RT,meshlambert_vert:CT,meshlambert_frag:wT,meshmatcap_vert:DT,meshmatcap_frag:UT,meshnormal_vert:LT,meshnormal_frag:NT,meshphong_vert:OT,meshphong_frag:PT,meshphysical_vert:zT,meshphysical_frag:BT,meshtoon_vert:IT,meshtoon_frag:FT,points_vert:HT,points_frag:GT,shadow_vert:VT,shadow_frag:kT,sprite_vert:XT,sprite_frag:WT},Dt={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Di={basic:{uniforms:Nn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:Nn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new ge(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:Nn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:Nn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:Nn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new ge(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:Nn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:Nn([Dt.points,Dt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:Nn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:Nn([Dt.common,Dt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:Nn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:Nn([Dt.sprite,Dt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:Nn([Dt.common,Dt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:Nn([Dt.lights,Dt.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};Di.physical={uniforms:Nn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const Du={r:0,b:0,g:0},xs=new ha,YT=new Qe;function qT(o,t,i,s,l,u,h){const d=new ge(0);let m=u===!0?0:1,p,g,v=null,x=0,M=null;function b(N){let w=N.isScene===!0?N.background:null;return w&&w.isTexture&&(w=(N.backgroundBlurriness>0?i:t).get(w)),w}function R(N){let w=!1;const B=b(N);B===null?_(d,m):B&&B.isColor&&(_(B,1),w=!0);const V=o.xr.getEnvironmentBlendMode();V==="additive"?s.buffers.color.setClear(0,0,0,1,h):V==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||w)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(N,w){const B=b(w);B&&(B.isCubeTexture||B.mapping===Ku)?(g===void 0&&(g=new Ni(new jo(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Or(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(V,I,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),xs.copy(w.backgroundRotation),xs.x*=-1,xs.y*=-1,xs.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),g.material.uniforms.envMap.value=B,g.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(YT.makeRotationFromEuler(xs)),g.material.toneMapped=Ae.getTransfer(B.colorSpace)!==Pe,(v!==B||x!==B.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,v=B,x=B.version,M=o.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new Ni(new Ju(2,2),new Xn({name:"BackgroundMaterial",uniforms:Or(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Za,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(B.colorSpace)!==Pe,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(v!==B||x!==B.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,v=B,x=B.version,M=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function _(N,w){N.getRGB(Du,r0(o)),s.buffers.color.setClear(Du.r,Du.g,Du.b,w,h)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,w=1){d.set(N),m=w,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,_(d,m)},render:R,addToRenderList:y,dispose:O}}function jT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=x(null);let u=l,h=!1;function d(C,G,lt,rt,gt){let ht=!1;const z=v(rt,lt,G);u!==z&&(u=z,p(u.object)),ht=M(C,rt,lt,gt),ht&&b(C,rt,lt,gt),gt!==null&&t.update(gt,o.ELEMENT_ARRAY_BUFFER),(ht||h)&&(h=!1,w(C,G,lt,rt),gt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(gt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function g(C){return o.deleteVertexArray(C)}function v(C,G,lt){const rt=lt.wireframe===!0;let gt=s[C.id];gt===void 0&&(gt={},s[C.id]=gt);let ht=gt[G.id];ht===void 0&&(ht={},gt[G.id]=ht);let z=ht[rt];return z===void 0&&(z=x(m()),ht[rt]=z),z}function x(C){const G=[],lt=[],rt=[];for(let gt=0;gt<i;gt++)G[gt]=0,lt[gt]=0,rt[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:lt,attributeDivisors:rt,object:C,attributes:{},index:null}}function M(C,G,lt,rt){const gt=u.attributes,ht=G.attributes;let z=0;const K=lt.getAttributes();for(const Y in K)if(K[Y].location>=0){const U=gt[Y];let tt=ht[Y];if(tt===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(tt=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(tt=C.instanceColor)),U===void 0||U.attribute!==tt||tt&&U.data!==tt.data)return!0;z++}return u.attributesNum!==z||u.index!==rt}function b(C,G,lt,rt){const gt={},ht=G.attributes;let z=0;const K=lt.getAttributes();for(const Y in K)if(K[Y].location>=0){let U=ht[Y];U===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(U=C.instanceColor));const tt={};tt.attribute=U,U&&U.data&&(tt.data=U.data),gt[Y]=tt,z++}u.attributes=gt,u.attributesNum=z,u.index=rt}function R(){const C=u.newAttributes;for(let G=0,lt=C.length;G<lt;G++)C[G]=0}function y(C){_(C,0)}function _(C,G){const lt=u.newAttributes,rt=u.enabledAttributes,gt=u.attributeDivisors;lt[C]=1,rt[C]===0&&(o.enableVertexAttribArray(C),rt[C]=1),gt[C]!==G&&(o.vertexAttribDivisor(C,G),gt[C]=G)}function O(){const C=u.newAttributes,G=u.enabledAttributes;for(let lt=0,rt=G.length;lt<rt;lt++)G[lt]!==C[lt]&&(o.disableVertexAttribArray(lt),G[lt]=0)}function N(C,G,lt,rt,gt,ht,z){z===!0?o.vertexAttribIPointer(C,G,lt,gt,ht):o.vertexAttribPointer(C,G,lt,rt,gt,ht)}function w(C,G,lt,rt){R();const gt=rt.attributes,ht=lt.getAttributes(),z=G.defaultAttributeValues;for(const K in ht){const Y=ht[K];if(Y.location>=0){let Mt=gt[K];if(Mt===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(Mt=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(Mt=C.instanceColor)),Mt!==void 0){const U=Mt.normalized,tt=Mt.itemSize,vt=t.get(Mt);if(vt===void 0)continue;const St=vt.buffer,J=vt.type,dt=vt.bytesPerElement,xt=J===o.INT||J===o.UNSIGNED_INT||Mt.gpuType===zd;if(Mt.isInterleavedBufferAttribute){const bt=Mt.data,Nt=bt.stride,re=Mt.offset;if(bt.isInstancedInterleavedBuffer){for(let Kt=0;Kt<Y.locationSize;Kt++)_(Y.location+Kt,bt.meshPerAttribute);C.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Kt=0;Kt<Y.locationSize;Kt++)y(Y.location+Kt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let Kt=0;Kt<Y.locationSize;Kt++)N(Y.location+Kt,tt/Y.locationSize,J,U,Nt*dt,(re+tt/Y.locationSize*Kt)*dt,xt)}else{if(Mt.isInstancedBufferAttribute){for(let bt=0;bt<Y.locationSize;bt++)_(Y.location+bt,Mt.meshPerAttribute);C.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let bt=0;bt<Y.locationSize;bt++)y(Y.location+bt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let bt=0;bt<Y.locationSize;bt++)N(Y.location+bt,tt/Y.locationSize,J,U,tt*dt,tt/Y.locationSize*bt*dt,xt)}}else if(z!==void 0){const U=z[K];if(U!==void 0)switch(U.length){case 2:o.vertexAttrib2fv(Y.location,U);break;case 3:o.vertexAttrib3fv(Y.location,U);break;case 4:o.vertexAttrib4fv(Y.location,U);break;default:o.vertexAttrib1fv(Y.location,U)}}}}O()}function B(){Z();for(const C in s){const G=s[C];for(const lt in G){const rt=G[lt];for(const gt in rt)g(rt[gt].object),delete rt[gt];delete G[lt]}delete s[C]}}function V(C){if(s[C.id]===void 0)return;const G=s[C.id];for(const lt in G){const rt=G[lt];for(const gt in rt)g(rt[gt].object),delete rt[gt];delete G[lt]}delete s[C.id]}function I(C){for(const G in s){const lt=s[G];if(lt[C.id]===void 0)continue;const rt=lt[C.id];for(const gt in rt)g(rt[gt].object),delete rt[gt];delete lt[C.id]}}function Z(){D(),h=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:D,dispose:B,releaseStatesOfGeometry:V,releaseStatesOfProgram:I,initAttributes:R,enableAttribute:y,disableUnusedAttributes:O}}function ZT(o,t,i){let s;function l(p){s=p}function u(p,g){o.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,v){v!==0&&(o.drawArraysInstanced(s,p,g,v),i.update(g,s,v))}function d(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,v);let M=0;for(let b=0;b<v;b++)M+=g[b];i.update(M,s,1)}function m(p,g,v,x){if(v===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],g[b],x[b]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,g,0,x,0,v);let b=0;for(let R=0;R<v;R++)b+=g[R]*x[R];i.update(b,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function KT(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==Si&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const Z=I===ua&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==fa&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ra&&!Z)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),O=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),B=b>0,V=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:O,maxVaryings:N,maxFragmentUniforms:w,vertexTextures:B,maxSamples:V}}function QT(o){const t=this;let i=null,s=0,l=!1,u=!1;const h=new Wa,d=new se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||s!==0||l;return l=x,s=v.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,M){const b=v.clippingPlanes,R=v.clipIntersection,y=v.clipShadows,_=o.get(v);if(!l||b===null||b.length===0||u&&!y)u?g(null):p();else{const O=u?0:s,N=O*4;let w=_.clippingState||null;m.value=w,w=g(b,x,N,M);for(let B=0;B!==N;++B)w[B]=i[B];_.clippingState=w,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(v,x,M,b){const R=v!==null?v.length:0;let y=null;if(R!==0){if(y=m.value,b!==!0||y===null){const _=M+R*4,O=x.matrixWorldInverse;d.getNormalMatrix(O),(y===null||y.length<_)&&(y=new Float32Array(_));for(let N=0,w=M;N!==R;++N,w+=4)h.copy(v[N]).applyMatrix4(O,d),h.normal.toArray(y,w),y[w+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,y}}function JT(o){let t=new WeakMap;function i(h,d){return d===td?h.mapping=Ur:d===ed&&(h.mapping=Lr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===td||d===ed)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new jy(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const Ar=4,cv=[.125,.215,.35,.446,.526,.582],Es=20,Oh=new d0,fv=new ge;let Ph=null,zh=0,Bh=0,Ih=!1;const ys=(1+Math.sqrt(5))/2,Er=1/ys,hv=[new j(-ys,Er,0),new j(ys,Er,0),new j(-Er,0,ys),new j(Er,0,ys),new j(0,ys,-Er),new j(0,ys,Er),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],$T=new j;class dv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=$T}=u;Ph=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ph,zh,Bh),this._renderer.xr.enabled=Ih,t.scissorTest=!1,Uu(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ur||t.mapping===Lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ph=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:ua,format:Si,colorSpace:Nr,depthBuffer:!1},l=pv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pv(t,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tb(u)),this._blurMaterial=eb(u,t,i)}return l}_compileMaterial(t){const i=new Ni(this._lodPlanes[0],t);this._renderer.compile(i,Oh)}_sceneToCubeUV(t,i,s,l,u){const m=new fi(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,M=v.toneMapping;v.getClearColor(fv),v.toneMapping=qa,v.autoClear=!1;const b=new Xd({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),R=new Ni(new jo,b);let y=!1;const _=t.background;_?_.isColor&&(b.color.copy(_),t.background=null,y=!0):(b.color.copy(fv),y=!0);for(let O=0;O<6;O++){const N=O%3;N===0?(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[O],u.y,u.z)):N===1?(m.up.set(0,0,p[O]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[O],u.z)):(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[O]));const w=this._cubeSize;Uu(l,N*w,O>2?w:0,w,w),v.setRenderTarget(l),y&&v.render(R,m),v.render(t,m)}R.geometry.dispose(),R.material.dispose(),v.toneMapping=M,v.autoClear=x,t.background=_}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Ur||t.mapping===Lr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=gv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mv());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Ni(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;Uu(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Oh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=hv[(l-u-1)%hv.length];this._blur(t,u-1,u,h,d)}i.autoClear=s}_blur(t,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",u),this._halfBlur(h,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Ni(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[s]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Es-1),R=u/b,y=isFinite(u)?1+Math.floor(g*R):Es;y>Es&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Es}`);const _=[];let O=0;for(let I=0;I<Es;++I){const Z=I/R,D=Math.exp(-Z*Z/2);_.push(D),I===0?O+=D:I<y&&(O+=2*D)}for(let I=0;I<_.length;I++)_[I]=_[I]/O;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:N}=this;x.dTheta.value=b,x.mipInt.value=N-s;const w=this._sizeLods[l],B=3*w*(l>N-Ar?l-N+Ar:0),V=4*(this._cubeSize-w);Uu(i,B,V,3*w,2*w),m.setRenderTarget(i),m.render(v,Oh)}}function tb(o){const t=[],i=[],s=[];let l=o;const u=o-Ar+1+cv.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-Ar?m=cv[h-o+Ar-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,b=6,R=3,y=2,_=1,O=new Float32Array(R*b*M),N=new Float32Array(y*b*M),w=new Float32Array(_*b*M);for(let V=0;V<M;V++){const I=V%3*2/3-1,Z=V>2?0:-1,D=[I,Z,0,I+2/3,Z,0,I+2/3,Z+1,0,I,Z,0,I+2/3,Z+1,0,I,Z+1,0];O.set(D,R*b*V),N.set(x,y*b*V);const C=[V,V,V,V,V,V];w.set(C,_*b*V)}const B=new di;B.setAttribute("position",new Ei(O,R)),B.setAttribute("uv",new Ei(N,y)),B.setAttribute("faceIndex",new Ei(w,_)),t.push(B),l>Ar&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function pv(o,t,i){const s=new Mi(o,t,i);return s.texture.mapping=Ku,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Uu(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function eb(o,t,i){const s=new Float32Array(Es),l=new j(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:la,depthTest:!1,depthWrite:!1})}function mv(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:la,depthTest:!1,depthWrite:!1})}function gv(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:la,depthTest:!1,depthWrite:!1})}function qd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nb(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===td||m===ed,g=m===Ur||m===Lr;if(p||g){let v=t.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new dv(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new dv(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function ib(o){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Gu("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function ab(o,t,i,s){const l={},u=new WeakMap;function h(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const b in x.attributes)t.remove(x.attributes[b]);x.removeEventListener("dispose",h),delete l[x.id];const M=u.get(x);M&&(t.remove(M),u.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const M in x)t.update(x[M],o.ARRAY_BUFFER)}function p(v){const x=[],M=v.index,b=v.attributes.position;let R=0;if(M!==null){const O=M.array;R=M.version;for(let N=0,w=O.length;N<w;N+=3){const B=O[N+0],V=O[N+1],I=O[N+2];x.push(B,V,V,I,I,B)}}else if(b!==void 0){const O=b.array;R=b.version;for(let N=0,w=O.length/3-1;N<w;N+=3){const B=N+0,V=N+1,I=N+2;x.push(B,V,V,I,I,B)}}else return;const y=new(t0(x)?s0:a0)(x,1);y.version=R;const _=u.get(v);_&&t.remove(_),u.set(v,y)}function g(v){const x=u.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function sb(o,t,i){let s;function l(x){s=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function m(x,M){o.drawElements(s,M,u,x*h),i.update(M,s,1)}function p(x,M,b){b!==0&&(o.drawElementsInstanced(s,M,u,x*h,b),i.update(M,s,b))}function g(x,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,x,0,b);let y=0;for(let _=0;_<b;_++)y+=M[_];i.update(y,s,1)}function v(x,M,b,R){if(b===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/h,M[_],R[_]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,u,x,0,R,0,b);let _=0;for(let O=0;O<b;O++)_+=M[O]*R[O];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function rb(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function ob(o,t,i){const s=new WeakMap,l=new tn;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=s.get(d);if(x===void 0||x.count!==v){let C=function(){Z.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var M=C;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let w=0;b===!0&&(w=1),R===!0&&(w=2),y===!0&&(w=3);let B=d.attributes.position.count*w,V=1;B>t.maxTextureSize&&(V=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const I=new Float32Array(B*V*4*v),Z=new e0(I,B,V,v);Z.type=ra,Z.needsUpdate=!0;const D=w*4;for(let G=0;G<v;G++){const lt=_[G],rt=O[G],gt=N[G],ht=B*V*4*G;for(let z=0;z<lt.count;z++){const K=z*D;b===!0&&(l.fromBufferAttribute(lt,z),I[ht+K+0]=l.x,I[ht+K+1]=l.y,I[ht+K+2]=l.z,I[ht+K+3]=0),R===!0&&(l.fromBufferAttribute(rt,z),I[ht+K+4]=l.x,I[ht+K+5]=l.y,I[ht+K+6]=l.z,I[ht+K+7]=0),y===!0&&(l.fromBufferAttribute(gt,z),I[ht+K+8]=l.x,I[ht+K+9]=l.y,I[ht+K+10]=l.z,I[ht+K+11]=gt.itemSize===4?l.w:1)}}x={count:v,texture:Z,size:new kt(B,V)},s.set(d,x),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const R=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function lb(o,t,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const m0=new On,_v=new h0(1,1),g0=new e0,_0=new Ly,v0=new l0,vv=[],xv=[],Sv=new Float32Array(16),yv=new Float32Array(9),Mv=new Float32Array(4);function Br(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=vv[l];if(u===void 0&&(u=new Float32Array(l),vv[l]=u),t!==0){s.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function hn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function dn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function $u(o,t){let i=xv[t];i===void 0&&(i=new Int32Array(t),xv[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function ub(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function cb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2fv(this.addr,t),dn(i,t)}}function fb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(hn(i,t))return;o.uniform3fv(this.addr,t),dn(i,t)}}function hb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4fv(this.addr,t),dn(i,t)}}function db(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(hn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,s))return;Mv.set(s),o.uniformMatrix2fv(this.addr,!1,Mv),dn(i,s)}}function pb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(hn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,s))return;yv.set(s),o.uniformMatrix3fv(this.addr,!1,yv),dn(i,s)}}function mb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(hn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,s))return;Sv.set(s),o.uniformMatrix4fv(this.addr,!1,Sv),dn(i,s)}}function gb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function _b(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2iv(this.addr,t),dn(i,t)}}function vb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3iv(this.addr,t),dn(i,t)}}function xb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4iv(this.addr,t),dn(i,t)}}function Sb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function yb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2uiv(this.addr,t),dn(i,t)}}function Mb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3uiv(this.addr,t),dn(i,t)}}function Eb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4uiv(this.addr,t),dn(i,t)}}function Tb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(_v.compareFunction=$v,u=_v):u=m0,i.setTexture2D(t||u,l)}function bb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||_0,l)}function Ab(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||v0,l)}function Rb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||g0,l)}function Cb(o){switch(o){case 5126:return ub;case 35664:return cb;case 35665:return fb;case 35666:return hb;case 35674:return db;case 35675:return pb;case 35676:return mb;case 5124:case 35670:return gb;case 35667:case 35671:return _b;case 35668:case 35672:return vb;case 35669:case 35673:return xb;case 5125:return Sb;case 36294:return yb;case 36295:return Mb;case 36296:return Eb;case 35678:case 36198:case 36298:case 36306:case 35682:return Tb;case 35679:case 36299:case 36307:return bb;case 35680:case 36300:case 36308:case 36293:return Ab;case 36289:case 36303:case 36311:case 36292:return Rb}}function wb(o,t){o.uniform1fv(this.addr,t)}function Db(o,t){const i=Br(t,this.size,2);o.uniform2fv(this.addr,i)}function Ub(o,t){const i=Br(t,this.size,3);o.uniform3fv(this.addr,i)}function Lb(o,t){const i=Br(t,this.size,4);o.uniform4fv(this.addr,i)}function Nb(o,t){const i=Br(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Ob(o,t){const i=Br(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Pb(o,t){const i=Br(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function zb(o,t){o.uniform1iv(this.addr,t)}function Bb(o,t){o.uniform2iv(this.addr,t)}function Ib(o,t){o.uniform3iv(this.addr,t)}function Fb(o,t){o.uniform4iv(this.addr,t)}function Hb(o,t){o.uniform1uiv(this.addr,t)}function Gb(o,t){o.uniform2uiv(this.addr,t)}function Vb(o,t){o.uniform3uiv(this.addr,t)}function kb(o,t){o.uniform4uiv(this.addr,t)}function Xb(o,t,i){const s=this.cache,l=t.length,u=$u(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||m0,u[h])}function Wb(o,t,i){const s=this.cache,l=t.length,u=$u(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||_0,u[h])}function Yb(o,t,i){const s=this.cache,l=t.length,u=$u(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||v0,u[h])}function qb(o,t,i){const s=this.cache,l=t.length,u=$u(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||g0,u[h])}function jb(o){switch(o){case 5126:return wb;case 35664:return Db;case 35665:return Ub;case 35666:return Lb;case 35674:return Nb;case 35675:return Ob;case 35676:return Pb;case 5124:case 35670:return zb;case 35667:case 35671:return Bb;case 35668:case 35672:return Ib;case 35669:case 35673:return Fb;case 5125:return Hb;case 36294:return Gb;case 36295:return Vb;case 36296:return kb;case 35678:case 36198:case 36298:case 36306:case 35682:return Xb;case 35679:case 36299:case 36307:return Wb;case 35680:case 36300:case 36308:case 36293:return Yb;case 36289:case 36303:case 36311:case 36292:return qb}}class Zb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Cb(i.type)}}class Kb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=jb(i.type)}}class Qb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const Fh=/(\w+)(\])?(\[|\.)?/g;function Ev(o,t){o.seq.push(t),o.map[t.id]=t}function Jb(o,t,i){const s=o.name,l=s.length;for(Fh.lastIndex=0;;){const u=Fh.exec(s),h=Fh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Ev(i,p===void 0?new Zb(d,o,t):new Kb(d,o,t));break}else{let v=i.map[d];v===void 0&&(v=new Qb(d),Ev(i,v)),i=v}}}class Vu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);Jb(u,h,this)}}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function Tv(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const $b=37297;let tA=0;function eA(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const bv=new se;function nA(o){Ae._getMatrix(bv,Ae.workingColorSpace,o);const t=`mat3( ${bv.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(o)){case Xu:return[t,"LinearTransferOETF"];case Pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Av(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+eA(o.getShaderSource(t),h)}else return l}function iA(o,t){const i=nA(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function aA(o,t){let i;switch(t){case ny:i="Linear";break;case iy:i="Reinhard";break;case ay:i="Cineon";break;case sy:i="ACESFilmic";break;case oy:i="AgX";break;case ly:i="Neutral";break;case ry:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Lu=new j;function sA(){Ae.getLuminanceCoefficients(Lu);const o=Lu.x.toFixed(4),t=Lu.y.toFixed(4),i=Lu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function oA(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function lA(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Go(o){return o!==""}function Rv(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cv(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const uA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nd(o){return o.replace(uA,fA)}const cA=new Map;function fA(o,t){let i=oe[t];if(i===void 0){const s=cA.get(t);if(s!==void 0)i=oe[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Nd(i)}const hA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wv(o){return o.replace(hA,dA)}function dA(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Dv(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function pA(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Hv?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===PS?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===aa&&(t="SHADOWMAP_TYPE_VSM"),t}function mA(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ur:case Lr:t="ENVMAP_TYPE_CUBE";break;case Ku:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gA(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Lr:t="ENVMAP_MODE_REFRACTION";break}return t}function _A(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Gv:t="ENVMAP_BLENDING_MULTIPLY";break;case ty:t="ENVMAP_BLENDING_MIX";break;case ey:t="ENVMAP_BLENDING_ADD";break}return t}function vA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function xA(o,t,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=pA(i),p=mA(i),g=gA(i),v=_A(i),x=vA(i),M=rA(i),b=oA(u),R=l.createProgram();let y,_,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Go).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Go).join(`
`),_.length>0&&(_+=`
`)):(y=[Dv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),_=[Dv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qa?"#define TONE_MAPPING":"",i.toneMapping!==qa?oe.tonemapping_pars_fragment:"",i.toneMapping!==qa?aA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,iA("linearToOutputTexel",i.outputColorSpace),sA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Go).join(`
`)),h=Nd(h),h=Rv(h,i),h=Cv(h,i),d=Nd(d),d=Rv(d,i),d=Cv(d,i),h=wv(h),d=wv(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===P_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===P_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=O+y+h,w=O+_+d,B=Tv(l,l.VERTEX_SHADER,N),V=Tv(l,l.FRAGMENT_SHADER,w);l.attachShader(R,B),l.attachShader(R,V),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function I(G){if(o.debug.checkShaderErrors){const lt=l.getProgramInfoLog(R).trim(),rt=l.getShaderInfoLog(B).trim(),gt=l.getShaderInfoLog(V).trim();let ht=!0,z=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(ht=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,B,V);else{const K=Av(l,B,"vertex"),Y=Av(l,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+lt+`
`+K+`
`+Y)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(rt===""||gt==="")&&(z=!1);z&&(G.diagnostics={runnable:ht,programLog:lt,vertexShader:{log:rt,prefix:y},fragmentShader:{log:gt,prefix:_}})}l.deleteShader(B),l.deleteShader(V),Z=new Vu(l,R),D=lA(l,R)}let Z;this.getUniforms=function(){return Z===void 0&&I(this),Z};let D;this.getAttributes=function(){return D===void 0&&I(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,$b)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=tA++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=B,this.fragmentShader=V,this}let SA=0;class yA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new MA(t),i.set(t,s)),s}}class MA{constructor(t){this.id=SA++,this.code=t,this.usedTimes=0}}function EA(o,t,i,s,l,u,h){const d=new n0,m=new yA,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){return p.add(D),D===0?"uv":`uv${D}`}function y(D,C,G,lt,rt){const gt=lt.fog,ht=rt.geometry,z=D.isMeshStandardMaterial?lt.environment:null,K=(D.isMeshStandardMaterial?i:t).get(D.envMap||z),Y=K&&K.mapping===Ku?K.image.height:null,Mt=b[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const U=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,tt=U!==void 0?U.length:0;let vt=0;ht.morphAttributes.position!==void 0&&(vt=1),ht.morphAttributes.normal!==void 0&&(vt=2),ht.morphAttributes.color!==void 0&&(vt=3);let St,J,dt,xt;if(Mt){const Ee=Di[Mt];St=Ee.vertexShader,J=Ee.fragmentShader}else St=D.vertexShader,J=D.fragmentShader,m.update(D),dt=m.getVertexShaderID(D),xt=m.getFragmentShaderID(D);const bt=o.getRenderTarget(),Nt=o.state.buffers.depth.getReversed(),re=rt.isInstancedMesh===!0,Kt=rt.isBatchedMesh===!0,Ge=!!D.map,Ie=!!D.matcap,ce=!!K,F=!!D.aoMap,Bn=!!D.lightMap,_e=!!D.bumpMap,ne=!!D.normalMap,Xt=!!D.displacementMap,De=!!D.emissiveMap,Ht=!!D.metalnessMap,L=!!D.roughnessMap,T=D.anisotropy>0,et=D.clearcoat>0,_t=D.dispersion>0,yt=D.iridescence>0,ct=D.sheen>0,zt=D.transmission>0,At=T&&!!D.anisotropyMap,Rt=et&&!!D.clearcoatMap,ve=et&&!!D.clearcoatNormalMap,Tt=et&&!!D.clearcoatRoughnessMap,It=yt&&!!D.iridescenceMap,jt=yt&&!!D.iridescenceThicknessMap,Qt=ct&&!!D.sheenColorMap,Ot=ct&&!!D.sheenRoughnessMap,le=!!D.specularMap,ee=!!D.specularColorMap,Ue=!!D.specularIntensityMap,k=zt&&!!D.transmissionMap,Ut=zt&&!!D.thicknessMap,ot=!!D.gradientMap,pt=!!D.alphaMap,Pt=D.alphaTest>0,Lt=!!D.alphaHash,ie=!!D.extensions;let Ve=qa;D.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Ve=o.toneMapping);const en={shaderID:Mt,shaderType:D.type,shaderName:D.name,vertexShader:St,fragmentShader:J,defines:D.defines,customVertexShaderID:dt,customFragmentShaderID:xt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Kt,batchingColor:Kt&&rt._colorsTexture!==null,instancing:re,instancingColor:re&&rt.instanceColor!==null,instancingMorph:re&&rt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:bt===null?o.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Nr,alphaToCoverage:!!D.alphaToCoverage,map:Ge,matcap:Ie,envMap:ce,envMapMode:ce&&K.mapping,envMapCubeUVHeight:Y,aoMap:F,lightMap:Bn,bumpMap:_e,normalMap:ne,displacementMap:x&&Xt,emissiveMap:De,normalMapObjectSpace:ne&&D.normalMapType===dy,normalMapTangentSpace:ne&&D.normalMapType===hy,metalnessMap:Ht,roughnessMap:L,anisotropy:T,anisotropyMap:At,clearcoat:et,clearcoatMap:Rt,clearcoatNormalMap:ve,clearcoatRoughnessMap:Tt,dispersion:_t,iridescence:yt,iridescenceMap:It,iridescenceThicknessMap:jt,sheen:ct,sheenColorMap:Qt,sheenRoughnessMap:Ot,specularMap:le,specularColorMap:ee,specularIntensityMap:Ue,transmission:zt,transmissionMap:k,thicknessMap:Ut,gradientMap:ot,opaque:D.transparent===!1&&D.blending===Cr&&D.alphaToCoverage===!1,alphaMap:pt,alphaTest:Pt,alphaHash:Lt,combine:D.combine,mapUv:Ge&&R(D.map.channel),aoMapUv:F&&R(D.aoMap.channel),lightMapUv:Bn&&R(D.lightMap.channel),bumpMapUv:_e&&R(D.bumpMap.channel),normalMapUv:ne&&R(D.normalMap.channel),displacementMapUv:Xt&&R(D.displacementMap.channel),emissiveMapUv:De&&R(D.emissiveMap.channel),metalnessMapUv:Ht&&R(D.metalnessMap.channel),roughnessMapUv:L&&R(D.roughnessMap.channel),anisotropyMapUv:At&&R(D.anisotropyMap.channel),clearcoatMapUv:Rt&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:ve&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:Qt&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&R(D.sheenRoughnessMap.channel),specularMapUv:le&&R(D.specularMap.channel),specularColorMapUv:ee&&R(D.specularColorMap.channel),specularIntensityMapUv:Ue&&R(D.specularIntensityMap.channel),transmissionMapUv:k&&R(D.transmissionMap.channel),thicknessMapUv:Ut&&R(D.thicknessMap.channel),alphaMapUv:pt&&R(D.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(ne||T),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!ht.attributes.uv&&(Ge||pt),fog:!!gt,useFog:D.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Nt,skinning:rt.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:vt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Ge&&D.map.isVideoTexture===!0&&Ae.getTransfer(D.map.colorSpace)===Pe,decodeVideoTextureEmissive:De&&D.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(D.emissiveMap.colorSpace)===Pe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===sa,flipSided:D.side===Wn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ie&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&D.extensions.multiDraw===!0||Kt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return en.vertexUv1s=p.has(1),en.vertexUv2s=p.has(2),en.vertexUv3s=p.has(3),p.clear(),en}function _(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)C.push(G),C.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(O(C,D),N(C,D),C.push(o.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function O(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function N(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function w(D){const C=b[D.type];let G;if(C){const lt=Di[C];G=Yu.clone(lt.uniforms)}else G=D.uniforms;return G}function B(D,C){let G;for(let lt=0,rt=g.length;lt<rt;lt++){const gt=g[lt];if(gt.cacheKey===C){G=gt,++G.usedTimes;break}}return G===void 0&&(G=new xA(o,C,D,u),g.push(G)),G}function V(D){if(--D.usedTimes===0){const C=g.indexOf(D);g[C]=g[g.length-1],g.pop(),D.destroy()}}function I(D){m.remove(D)}function Z(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:w,acquireProgram:B,releaseProgram:V,releaseShaderCache:I,programs:g,dispose:Z}}function TA(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function bA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Uv(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Lv(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function h(v,x,M,b,R,y){let _=o[t];return _===void 0?(_={id:v.id,object:v,geometry:x,material:M,groupOrder:b,renderOrder:v.renderOrder,z:R,group:y},o[t]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=M,_.groupOrder=b,_.renderOrder=v.renderOrder,_.z=R,_.group=y),t++,_}function d(v,x,M,b,R,y){const _=h(v,x,M,b,R,y);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(v,x,M,b,R,y){const _=h(v,x,M,b,R,y);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||bA),s.length>1&&s.sort(x||Uv),l.length>1&&l.sort(x||Uv)}function g(){for(let v=t,x=o.length;v<x;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function AA(){let o=new WeakMap;function t(s,l){const u=o.get(s);let h;return u===void 0?(h=new Lv,o.set(s,[h])):l>=u.length?(h=new Lv,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function RA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new j,color:new ge};break;case"SpotLight":i={position:new j,direction:new j,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new j,color:new ge,distance:0,decay:0};break;case"HemisphereLight":i={direction:new j,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":i={color:new ge,position:new j,halfWidth:new j,halfHeight:new j};break}return o[t.id]=i,i}}}function CA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let wA=0;function DA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function UA(o){const t=new RA,i=CA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new j);const l=new j,u=new Qe,h=new Qe;function d(p){let g=0,v=0,x=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let M=0,b=0,R=0,y=0,_=0,O=0,N=0,w=0,B=0,V=0,I=0;p.sort(DA);for(let D=0,C=p.length;D<C;D++){const G=p[D],lt=G.color,rt=G.intensity,gt=G.distance,ht=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=lt.r*rt,v+=lt.g*rt,x+=lt.b*rt;else if(G.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(G.sh.coefficients[z],rt);I++}else if(G.isDirectionalLight){const z=t.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const K=G.shadow,Y=i.get(G);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,s.directionalShadow[M]=Y,s.directionalShadowMap[M]=ht,s.directionalShadowMatrix[M]=G.shadow.matrix,O++}s.directional[M]=z,M++}else if(G.isSpotLight){const z=t.get(G);z.position.setFromMatrixPosition(G.matrixWorld),z.color.copy(lt).multiplyScalar(rt),z.distance=gt,z.coneCos=Math.cos(G.angle),z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),z.decay=G.decay,s.spot[R]=z;const K=G.shadow;if(G.map&&(s.spotLightMap[B]=G.map,B++,K.updateMatrices(G),G.castShadow&&V++),s.spotLightMatrix[R]=K.matrix,G.castShadow){const Y=i.get(G);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,s.spotShadow[R]=Y,s.spotShadowMap[R]=ht,w++}R++}else if(G.isRectAreaLight){const z=t.get(G);z.color.copy(lt).multiplyScalar(rt),z.halfWidth.set(G.width*.5,0,0),z.halfHeight.set(0,G.height*.5,0),s.rectArea[y]=z,y++}else if(G.isPointLight){const z=t.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),z.distance=G.distance,z.decay=G.decay,G.castShadow){const K=G.shadow,Y=i.get(G);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,s.pointShadow[b]=Y,s.pointShadowMap[b]=ht,s.pointShadowMatrix[b]=G.shadow.matrix,N++}s.point[b]=z,b++}else if(G.isHemisphereLight){const z=t.get(G);z.skyColor.copy(G.color).multiplyScalar(rt),z.groundColor.copy(G.groundColor).multiplyScalar(rt),s.hemi[_]=z,_++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Dt.LTC_FLOAT_1,s.rectAreaLTC2=Dt.LTC_FLOAT_2):(s.rectAreaLTC1=Dt.LTC_HALF_1,s.rectAreaLTC2=Dt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=x;const Z=s.hash;(Z.directionalLength!==M||Z.pointLength!==b||Z.spotLength!==R||Z.rectAreaLength!==y||Z.hemiLength!==_||Z.numDirectionalShadows!==O||Z.numPointShadows!==N||Z.numSpotShadows!==w||Z.numSpotMaps!==B||Z.numLightProbes!==I)&&(s.directional.length=M,s.spot.length=R,s.rectArea.length=y,s.point.length=b,s.hemi.length=_,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=w+B-V,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=V,s.numLightProbes=I,Z.directionalLength=M,Z.pointLength=b,Z.spotLength=R,Z.rectAreaLength=y,Z.hemiLength=_,Z.numDirectionalShadows=O,Z.numPointShadows=N,Z.numSpotShadows=w,Z.numSpotMaps=B,Z.numLightProbes=I,s.version=wA++)}function m(p,g){let v=0,x=0,M=0,b=0,R=0;const y=g.matrixWorldInverse;for(let _=0,O=p.length;_<O;_++){const N=p[_];if(N.isDirectionalLight){const w=s.directional[v];w.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),v++}else if(N.isSpotLight){const w=s.spot[M];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),M++}else if(N.isRectAreaLight){const w=s.rectArea[b];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(y),h.identity(),u.copy(N.matrixWorld),u.premultiply(y),h.extractRotation(u),w.halfWidth.set(N.width*.5,0,0),w.halfHeight.set(0,N.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),b++}else if(N.isPointLight){const w=s.point[x];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(y),x++}else if(N.isHemisphereLight){const w=s.hemi[R];w.direction.setFromMatrixPosition(N.matrixWorld),w.direction.transformDirection(y),R++}}}return{setup:d,setupView:m,state:s}}function Nv(o){const t=new UA(o),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function u(g){i.push(g)}function h(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function LA(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new Nv(o),t.set(l,[d])):u>=h.length?(d=new Nv(o),h.push(d)):d=h[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const NA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function PA(o,t,i){let s=new c0;const l=new kt,u=new kt,h=new tn,d=new eM({depthPacking:fy}),m=new nM,p={},g=i.maxTextureSize,v={[Za]:Wn,[Wn]:Za,[sa]:sa},x=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:NA,fragmentShader:OA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const b=new di;b.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ni(b,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hv;let _=this.type;this.render=function(V,I,Z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||V.length===0)return;const D=o.getRenderTarget(),C=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),lt=o.state;lt.setBlending(la),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const rt=_!==aa&&this.type===aa,gt=_===aa&&this.type!==aa;for(let ht=0,z=V.length;ht<z;ht++){const K=V[ht],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const Mt=Y.getFrameExtents();if(l.multiply(Mt),u.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/Mt.x),l.x=u.x*Mt.x,Y.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/Mt.y),l.y=u.y*Mt.y,Y.mapSize.y=u.y)),Y.map===null||rt===!0||gt===!0){const tt=this.type!==aa?{minFilter:yi,magFilter:yi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Mi(l.x,l.y,tt),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const U=Y.getViewportCount();for(let tt=0;tt<U;tt++){const vt=Y.getViewport(tt);h.set(u.x*vt.x,u.y*vt.y,u.x*vt.z,u.y*vt.w),lt.viewport(h),Y.updateMatrices(K,tt),s=Y.getFrustum(),w(I,Z,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===aa&&O(Y,Z),Y.needsUpdate=!1}_=this.type,y.needsUpdate=!1,o.setRenderTarget(D,C,G)};function O(V,I){const Z=t.update(R);x.defines.VSM_SAMPLES!==V.blurSamples&&(x.defines.VSM_SAMPLES=V.blurSamples,M.defines.VSM_SAMPLES=V.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new Mi(l.x,l.y)),x.uniforms.shadow_pass.value=V.map.texture,x.uniforms.resolution.value=V.mapSize,x.uniforms.radius.value=V.radius,o.setRenderTarget(V.mapPass),o.clear(),o.renderBufferDirect(I,null,Z,x,R,null),M.uniforms.shadow_pass.value=V.mapPass.texture,M.uniforms.resolution.value=V.mapSize,M.uniforms.radius.value=V.radius,o.setRenderTarget(V.map),o.clear(),o.renderBufferDirect(I,null,Z,M,R,null)}function N(V,I,Z,D){let C=null;const G=Z.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(G!==void 0)C=G;else if(C=Z.isPointLight===!0?m:d,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const lt=C.uuid,rt=I.uuid;let gt=p[lt];gt===void 0&&(gt={},p[lt]=gt);let ht=gt[rt];ht===void 0&&(ht=C.clone(),gt[rt]=ht,I.addEventListener("dispose",B)),C=ht}if(C.visible=I.visible,C.wireframe=I.wireframe,D===aa?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:v[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,Z.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const lt=o.properties.get(C);lt.light=Z}return C}function w(V,I,Z,D,C){if(V.visible===!1)return;if(V.layers.test(I.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&C===aa)&&(!V.frustumCulled||s.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,V.matrixWorld);const rt=t.update(V),gt=V.material;if(Array.isArray(gt)){const ht=rt.groups;for(let z=0,K=ht.length;z<K;z++){const Y=ht[z],Mt=gt[Y.materialIndex];if(Mt&&Mt.visible){const U=N(V,Mt,D,C);V.onBeforeShadow(o,V,I,Z,rt,U,Y),o.renderBufferDirect(Z,null,rt,U,V,Y),V.onAfterShadow(o,V,I,Z,rt,U,Y)}}}else if(gt.visible){const ht=N(V,gt,D,C);V.onBeforeShadow(o,V,I,Z,rt,ht,null),o.renderBufferDirect(Z,null,rt,ht,V,null),V.onAfterShadow(o,V,I,Z,rt,ht,null)}}const lt=V.children;for(let rt=0,gt=lt.length;rt<gt;rt++)w(lt[rt],I,Z,D,C)}function B(V){V.target.removeEventListener("dispose",B);for(const Z in p){const D=p[Z],C=V.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const zA={[qh]:jh,[Zh]:Jh,[Kh]:$h,[Dr]:Qh,[jh]:qh,[Jh]:Zh,[$h]:Kh,[Qh]:Dr};function BA(o,t){function i(){let k=!1;const Ut=new tn;let ot=null;const pt=new tn(0,0,0,0);return{setMask:function(Pt){ot!==Pt&&!k&&(o.colorMask(Pt,Pt,Pt,Pt),ot=Pt)},setLocked:function(Pt){k=Pt},setClear:function(Pt,Lt,ie,Ve,en){en===!0&&(Pt*=Ve,Lt*=Ve,ie*=Ve),Ut.set(Pt,Lt,ie,Ve),pt.equals(Ut)===!1&&(o.clearColor(Pt,Lt,ie,Ve),pt.copy(Ut))},reset:function(){k=!1,ot=null,pt.set(-1,0,0,0)}}}function s(){let k=!1,Ut=!1,ot=null,pt=null,Pt=null;return{setReversed:function(Lt){if(Ut!==Lt){const ie=t.get("EXT_clip_control");Lt?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT),Ut=Lt;const Ve=Pt;Pt=null,this.setClear(Ve)}},getReversed:function(){return Ut},setTest:function(Lt){Lt?bt(o.DEPTH_TEST):Nt(o.DEPTH_TEST)},setMask:function(Lt){ot!==Lt&&!k&&(o.depthMask(Lt),ot=Lt)},setFunc:function(Lt){if(Ut&&(Lt=zA[Lt]),pt!==Lt){switch(Lt){case qh:o.depthFunc(o.NEVER);break;case jh:o.depthFunc(o.ALWAYS);break;case Zh:o.depthFunc(o.LESS);break;case Dr:o.depthFunc(o.LEQUAL);break;case Kh:o.depthFunc(o.EQUAL);break;case Qh:o.depthFunc(o.GEQUAL);break;case Jh:o.depthFunc(o.GREATER);break;case $h:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}pt=Lt}},setLocked:function(Lt){k=Lt},setClear:function(Lt){Pt!==Lt&&(Ut&&(Lt=1-Lt),o.clearDepth(Lt),Pt=Lt)},reset:function(){k=!1,ot=null,pt=null,Pt=null,Ut=!1}}}function l(){let k=!1,Ut=null,ot=null,pt=null,Pt=null,Lt=null,ie=null,Ve=null,en=null;return{setTest:function(Ee){k||(Ee?bt(o.STENCIL_TEST):Nt(o.STENCIL_TEST))},setMask:function(Ee){Ut!==Ee&&!k&&(o.stencilMask(Ee),Ut=Ee)},setFunc:function(Ee,Yn,pn){(ot!==Ee||pt!==Yn||Pt!==pn)&&(o.stencilFunc(Ee,Yn,pn),ot=Ee,pt=Yn,Pt=pn)},setOp:function(Ee,Yn,pn){(Lt!==Ee||ie!==Yn||Ve!==pn)&&(o.stencilOp(Ee,Yn,pn),Lt=Ee,ie=Yn,Ve=pn)},setLocked:function(Ee){k=Ee},setClear:function(Ee){en!==Ee&&(o.clearStencil(Ee),en=Ee)},reset:function(){k=!1,Ut=null,ot=null,pt=null,Pt=null,Lt=null,ie=null,Ve=null,en=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,M=[],b=null,R=!1,y=null,_=null,O=null,N=null,w=null,B=null,V=null,I=new ge(0,0,0),Z=0,D=!1,C=null,G=null,lt=null,rt=null,gt=null;const ht=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,K=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=K>=2);let Mt=null,U={};const tt=o.getParameter(o.SCISSOR_BOX),vt=o.getParameter(o.VIEWPORT),St=new tn().fromArray(tt),J=new tn().fromArray(vt);function dt(k,Ut,ot,pt){const Pt=new Uint8Array(4),Lt=o.createTexture();o.bindTexture(k,Lt),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ie=0;ie<ot;ie++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Ut,0,o.RGBA,1,1,pt,0,o.RGBA,o.UNSIGNED_BYTE,Pt):o.texImage2D(Ut+ie,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Pt);return Lt}const xt={};xt[o.TEXTURE_2D]=dt(o.TEXTURE_2D,o.TEXTURE_2D,1),xt[o.TEXTURE_CUBE_MAP]=dt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[o.TEXTURE_2D_ARRAY]=dt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),xt[o.TEXTURE_3D]=dt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),bt(o.DEPTH_TEST),h.setFunc(Dr),_e(!1),ne(U_),bt(o.CULL_FACE),F(la);function bt(k){g[k]!==!0&&(o.enable(k),g[k]=!0)}function Nt(k){g[k]!==!1&&(o.disable(k),g[k]=!1)}function re(k,Ut){return v[k]!==Ut?(o.bindFramebuffer(k,Ut),v[k]=Ut,k===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ut),k===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Kt(k,Ut){let ot=M,pt=!1;if(k){ot=x.get(Ut),ot===void 0&&(ot=[],x.set(Ut,ot));const Pt=k.textures;if(ot.length!==Pt.length||ot[0]!==o.COLOR_ATTACHMENT0){for(let Lt=0,ie=Pt.length;Lt<ie;Lt++)ot[Lt]=o.COLOR_ATTACHMENT0+Lt;ot.length=Pt.length,pt=!0}}else ot[0]!==o.BACK&&(ot[0]=o.BACK,pt=!0);pt&&o.drawBuffers(ot)}function Ge(k){return b!==k?(o.useProgram(k),b=k,!0):!1}const Ie={[Ms]:o.FUNC_ADD,[BS]:o.FUNC_SUBTRACT,[IS]:o.FUNC_REVERSE_SUBTRACT};Ie[FS]=o.MIN,Ie[HS]=o.MAX;const ce={[GS]:o.ZERO,[VS]:o.ONE,[kS]:o.SRC_COLOR,[Wh]:o.SRC_ALPHA,[ZS]:o.SRC_ALPHA_SATURATE,[qS]:o.DST_COLOR,[WS]:o.DST_ALPHA,[XS]:o.ONE_MINUS_SRC_COLOR,[Yh]:o.ONE_MINUS_SRC_ALPHA,[jS]:o.ONE_MINUS_DST_COLOR,[YS]:o.ONE_MINUS_DST_ALPHA,[KS]:o.CONSTANT_COLOR,[QS]:o.ONE_MINUS_CONSTANT_COLOR,[JS]:o.CONSTANT_ALPHA,[$S]:o.ONE_MINUS_CONSTANT_ALPHA};function F(k,Ut,ot,pt,Pt,Lt,ie,Ve,en,Ee){if(k===la){R===!0&&(Nt(o.BLEND),R=!1);return}if(R===!1&&(bt(o.BLEND),R=!0),k!==zS){if(k!==y||Ee!==D){if((_!==Ms||w!==Ms)&&(o.blendEquation(o.FUNC_ADD),_=Ms,w=Ms),Ee)switch(k){case Cr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Xh:o.blendFunc(o.ONE,o.ONE);break;case L_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case N_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Cr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Xh:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case L_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case N_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}O=null,N=null,B=null,V=null,I.set(0,0,0),Z=0,y=k,D=Ee}return}Pt=Pt||Ut,Lt=Lt||ot,ie=ie||pt,(Ut!==_||Pt!==w)&&(o.blendEquationSeparate(Ie[Ut],Ie[Pt]),_=Ut,w=Pt),(ot!==O||pt!==N||Lt!==B||ie!==V)&&(o.blendFuncSeparate(ce[ot],ce[pt],ce[Lt],ce[ie]),O=ot,N=pt,B=Lt,V=ie),(Ve.equals(I)===!1||en!==Z)&&(o.blendColor(Ve.r,Ve.g,Ve.b,en),I.copy(Ve),Z=en),y=k,D=!1}function Bn(k,Ut){k.side===sa?Nt(o.CULL_FACE):bt(o.CULL_FACE);let ot=k.side===Wn;Ut&&(ot=!ot),_e(ot),k.blending===Cr&&k.transparent===!1?F(la):F(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const pt=k.stencilWrite;d.setTest(pt),pt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),De(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?bt(o.SAMPLE_ALPHA_TO_COVERAGE):Nt(o.SAMPLE_ALPHA_TO_COVERAGE)}function _e(k){C!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),C=k)}function ne(k){k!==NS?(bt(o.CULL_FACE),k!==G&&(k===U_?o.cullFace(o.BACK):k===OS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Nt(o.CULL_FACE),G=k}function Xt(k){k!==lt&&(z&&o.lineWidth(k),lt=k)}function De(k,Ut,ot){k?(bt(o.POLYGON_OFFSET_FILL),(rt!==Ut||gt!==ot)&&(o.polygonOffset(Ut,ot),rt=Ut,gt=ot)):Nt(o.POLYGON_OFFSET_FILL)}function Ht(k){k?bt(o.SCISSOR_TEST):Nt(o.SCISSOR_TEST)}function L(k){k===void 0&&(k=o.TEXTURE0+ht-1),Mt!==k&&(o.activeTexture(k),Mt=k)}function T(k,Ut,ot){ot===void 0&&(Mt===null?ot=o.TEXTURE0+ht-1:ot=Mt);let pt=U[ot];pt===void 0&&(pt={type:void 0,texture:void 0},U[ot]=pt),(pt.type!==k||pt.texture!==Ut)&&(Mt!==ot&&(o.activeTexture(ot),Mt=ot),o.bindTexture(k,Ut||xt[k]),pt.type=k,pt.texture=Ut)}function et(){const k=U[Mt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function _t(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function yt(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ct(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function zt(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function At(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Tt(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function jt(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Qt(k){St.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),St.copy(k))}function Ot(k){J.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),J.copy(k))}function le(k,Ut){let ot=p.get(Ut);ot===void 0&&(ot=new WeakMap,p.set(Ut,ot));let pt=ot.get(k);pt===void 0&&(pt=o.getUniformBlockIndex(Ut,k.name),ot.set(k,pt))}function ee(k,Ut){const pt=p.get(Ut).get(k);m.get(Ut)!==pt&&(o.uniformBlockBinding(Ut,pt,k.__bindingPointIndex),m.set(Ut,pt))}function Ue(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},Mt=null,U={},v={},x=new WeakMap,M=[],b=null,R=!1,y=null,_=null,O=null,N=null,w=null,B=null,V=null,I=new ge(0,0,0),Z=0,D=!1,C=null,G=null,lt=null,rt=null,gt=null,St.set(0,0,o.canvas.width,o.canvas.height),J.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:bt,disable:Nt,bindFramebuffer:re,drawBuffers:Kt,useProgram:Ge,setBlending:F,setMaterial:Bn,setFlipSided:_e,setCullFace:ne,setLineWidth:Xt,setPolygonOffset:De,setScissorTest:Ht,activeTexture:L,bindTexture:T,unbindTexture:et,compressedTexImage2D:_t,compressedTexImage3D:yt,texImage2D:It,texImage3D:jt,updateUBOMapping:le,uniformBlockBinding:ee,texStorage2D:ve,texStorage3D:Tt,texSubImage2D:ct,texSubImage3D:zt,compressedTexSubImage2D:At,compressedTexSubImage3D:Rt,scissor:Qt,viewport:Ot,reset:Ue}}function IA(o,t,i,s,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new kt,g=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,T){return M?new OffscreenCanvas(L,T):Yo("canvas")}function R(L,T,et){let _t=1;const yt=Ht(L);if((yt.width>et||yt.height>et)&&(_t=et/Math.max(yt.width,yt.height)),_t<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ct=Math.floor(_t*yt.width),zt=Math.floor(_t*yt.height);v===void 0&&(v=b(ct,zt));const At=T?b(ct,zt):v;return At.width=ct,At.height=zt,At.getContext("2d").drawImage(L,0,0,ct,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ct+"x"+zt+")."),At}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),L;return L}function y(L){return L.generateMipmaps}function _(L){o.generateMipmap(L)}function O(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(L,T,et,_t,yt=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ct=T;if(T===o.RED&&(et===o.FLOAT&&(ct=o.R32F),et===o.HALF_FLOAT&&(ct=o.R16F),et===o.UNSIGNED_BYTE&&(ct=o.R8)),T===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(ct=o.R8UI),et===o.UNSIGNED_SHORT&&(ct=o.R16UI),et===o.UNSIGNED_INT&&(ct=o.R32UI),et===o.BYTE&&(ct=o.R8I),et===o.SHORT&&(ct=o.R16I),et===o.INT&&(ct=o.R32I)),T===o.RG&&(et===o.FLOAT&&(ct=o.RG32F),et===o.HALF_FLOAT&&(ct=o.RG16F),et===o.UNSIGNED_BYTE&&(ct=o.RG8)),T===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(ct=o.RG8UI),et===o.UNSIGNED_SHORT&&(ct=o.RG16UI),et===o.UNSIGNED_INT&&(ct=o.RG32UI),et===o.BYTE&&(ct=o.RG8I),et===o.SHORT&&(ct=o.RG16I),et===o.INT&&(ct=o.RG32I)),T===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(ct=o.RGB8UI),et===o.UNSIGNED_SHORT&&(ct=o.RGB16UI),et===o.UNSIGNED_INT&&(ct=o.RGB32UI),et===o.BYTE&&(ct=o.RGB8I),et===o.SHORT&&(ct=o.RGB16I),et===o.INT&&(ct=o.RGB32I)),T===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(ct=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(ct=o.RGBA16UI),et===o.UNSIGNED_INT&&(ct=o.RGBA32UI),et===o.BYTE&&(ct=o.RGBA8I),et===o.SHORT&&(ct=o.RGBA16I),et===o.INT&&(ct=o.RGBA32I)),T===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(ct=o.RGB9_E5),T===o.RGBA){const zt=yt?Xu:Ae.getTransfer(_t);et===o.FLOAT&&(ct=o.RGBA32F),et===o.HALF_FLOAT&&(ct=o.RGBA16F),et===o.UNSIGNED_BYTE&&(ct=zt===Pe?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(ct=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(ct=o.RGB5_A1)}return(ct===o.R16F||ct===o.R32F||ct===o.RG16F||ct===o.RG32F||ct===o.RGBA16F||ct===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function w(L,T){let et;return L?T===null||T===As||T===ko?et=o.DEPTH24_STENCIL8:T===ra?et=o.DEPTH32F_STENCIL8:T===Vo&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===As||T===ko?et=o.DEPTH_COMPONENT24:T===ra?et=o.DEPTH_COMPONENT32F:T===Vo&&(et=o.DEPTH_COMPONENT16),et}function B(L,T){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==yi&&L.minFilter!==Li?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function V(L){const T=L.target;T.removeEventListener("dispose",V),Z(T),T.isVideoTexture&&g.delete(T)}function I(L){const T=L.target;T.removeEventListener("dispose",I),C(T)}function Z(L){const T=s.get(L);if(T.__webglInit===void 0)return;const et=L.source,_t=x.get(et);if(_t){const yt=_t[T.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&D(L),Object.keys(_t).length===0&&x.delete(et)}s.remove(L)}function D(L){const T=s.get(L);o.deleteTexture(T.__webglTexture);const et=L.source,_t=x.get(et);delete _t[T.__cacheKey],h.memory.textures--}function C(L){const T=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(T.__webglFramebuffer[_t]))for(let yt=0;yt<T.__webglFramebuffer[_t].length;yt++)o.deleteFramebuffer(T.__webglFramebuffer[_t][yt]);else o.deleteFramebuffer(T.__webglFramebuffer[_t]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[_t])}else{if(Array.isArray(T.__webglFramebuffer))for(let _t=0;_t<T.__webglFramebuffer.length;_t++)o.deleteFramebuffer(T.__webglFramebuffer[_t]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let _t=0;_t<T.__webglColorRenderbuffer.length;_t++)T.__webglColorRenderbuffer[_t]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[_t]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const et=L.textures;for(let _t=0,yt=et.length;_t<yt;_t++){const ct=s.get(et[_t]);ct.__webglTexture&&(o.deleteTexture(ct.__webglTexture),h.memory.textures--),s.remove(et[_t])}s.remove(L)}let G=0;function lt(){G=0}function rt(){const L=G;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),G+=1,L}function gt(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function ht(L,T){const et=s.get(L);if(L.isVideoTexture&&Xt(L),L.isRenderTargetTexture===!1&&L.version>0&&et.__version!==L.version){const _t=L.image;if(_t===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(et,L,T);return}}i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+T)}function z(L,T){const et=s.get(L);if(L.version>0&&et.__version!==L.version){J(et,L,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+T)}function K(L,T){const et=s.get(L);if(L.version>0&&et.__version!==L.version){J(et,L,T);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+T)}function Y(L,T){const et=s.get(L);if(L.version>0&&et.__version!==L.version){dt(et,L,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+T)}const Mt={[nd]:o.REPEAT,[Ts]:o.CLAMP_TO_EDGE,[id]:o.MIRRORED_REPEAT},U={[yi]:o.NEAREST,[uy]:o.NEAREST_MIPMAP_NEAREST,[ru]:o.NEAREST_MIPMAP_LINEAR,[Li]:o.LINEAR,[lh]:o.LINEAR_MIPMAP_NEAREST,[bs]:o.LINEAR_MIPMAP_LINEAR},tt={[py]:o.NEVER,[Sy]:o.ALWAYS,[my]:o.LESS,[$v]:o.LEQUAL,[gy]:o.EQUAL,[xy]:o.GEQUAL,[_y]:o.GREATER,[vy]:o.NOTEQUAL};function vt(L,T){if(T.type===ra&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Li||T.magFilter===lh||T.magFilter===ru||T.magFilter===bs||T.minFilter===Li||T.minFilter===lh||T.minFilter===ru||T.minFilter===bs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,Mt[T.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,Mt[T.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,Mt[T.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,U[T.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,U[T.minFilter]),T.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,tt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===yi||T.minFilter!==ru&&T.minFilter!==bs||T.type===ra&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");o.texParameterf(L,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function St(L,T){let et=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",V));const _t=T.source;let yt=x.get(_t);yt===void 0&&(yt={},x.set(_t,yt));const ct=gt(T);if(ct!==L.__cacheKey){yt[ct]===void 0&&(yt[ct]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),yt[ct].usedTimes++;const zt=yt[L.__cacheKey];zt!==void 0&&(yt[L.__cacheKey].usedTimes--,zt.usedTimes===0&&D(T)),L.__cacheKey=ct,L.__webglTexture=yt[ct].texture}return et}function J(L,T,et){let _t=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(_t=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(_t=o.TEXTURE_3D);const yt=St(L,T),ct=T.source;i.bindTexture(_t,L.__webglTexture,o.TEXTURE0+et);const zt=s.get(ct);if(ct.version!==zt.__version||yt===!0){i.activeTexture(o.TEXTURE0+et);const At=Ae.getPrimaries(Ae.workingColorSpace),Rt=T.colorSpace===Ya?null:Ae.getPrimaries(T.colorSpace),ve=T.colorSpace===Ya||At===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Tt=R(T.image,!1,l.maxTextureSize);Tt=De(T,Tt);const It=u.convert(T.format,T.colorSpace),jt=u.convert(T.type);let Qt=N(T.internalFormat,It,jt,T.colorSpace,T.isVideoTexture);vt(_t,T);let Ot;const le=T.mipmaps,ee=T.isVideoTexture!==!0,Ue=zt.__version===void 0||yt===!0,k=ct.dataReady,Ut=B(T,Tt);if(T.isDepthTexture)Qt=w(T.format===Wo,T.type),Ue&&(ee?i.texStorage2D(o.TEXTURE_2D,1,Qt,Tt.width,Tt.height):i.texImage2D(o.TEXTURE_2D,0,Qt,Tt.width,Tt.height,0,It,jt,null));else if(T.isDataTexture)if(le.length>0){ee&&Ue&&i.texStorage2D(o.TEXTURE_2D,Ut,Qt,le[0].width,le[0].height);for(let ot=0,pt=le.length;ot<pt;ot++)Ot=le[ot],ee?k&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,Ot.width,Ot.height,It,jt,Ot.data):i.texImage2D(o.TEXTURE_2D,ot,Qt,Ot.width,Ot.height,0,It,jt,Ot.data);T.generateMipmaps=!1}else ee?(Ue&&i.texStorage2D(o.TEXTURE_2D,Ut,Qt,Tt.width,Tt.height),k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Tt.width,Tt.height,It,jt,Tt.data)):i.texImage2D(o.TEXTURE_2D,0,Qt,Tt.width,Tt.height,0,It,jt,Tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ee&&Ue&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ut,Qt,le[0].width,le[0].height,Tt.depth);for(let ot=0,pt=le.length;ot<pt;ot++)if(Ot=le[ot],T.format!==Si)if(It!==null)if(ee){if(k)if(T.layerUpdates.size>0){const Pt=uv(Ot.width,Ot.height,T.format,T.type);for(const Lt of T.layerUpdates){const ie=Ot.data.subarray(Lt*Pt/Ot.data.BYTES_PER_ELEMENT,(Lt+1)*Pt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,Lt,Ot.width,Ot.height,1,It,ie)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,Ot.width,Ot.height,Tt.depth,It,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ot,Qt,Ot.width,Ot.height,Tt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?k&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,Ot.width,Ot.height,Tt.depth,It,jt,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ot,Qt,Ot.width,Ot.height,Tt.depth,0,It,jt,Ot.data)}else{ee&&Ue&&i.texStorage2D(o.TEXTURE_2D,Ut,Qt,le[0].width,le[0].height);for(let ot=0,pt=le.length;ot<pt;ot++)Ot=le[ot],T.format!==Si?It!==null?ee?k&&i.compressedTexSubImage2D(o.TEXTURE_2D,ot,0,0,Ot.width,Ot.height,It,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,ot,Qt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?k&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,Ot.width,Ot.height,It,jt,Ot.data):i.texImage2D(o.TEXTURE_2D,ot,Qt,Ot.width,Ot.height,0,It,jt,Ot.data)}else if(T.isDataArrayTexture)if(ee){if(Ue&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ut,Qt,Tt.width,Tt.height,Tt.depth),k)if(T.layerUpdates.size>0){const ot=uv(Tt.width,Tt.height,T.format,T.type);for(const pt of T.layerUpdates){const Pt=Tt.data.subarray(pt*ot/Tt.data.BYTES_PER_ELEMENT,(pt+1)*ot/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,pt,Tt.width,Tt.height,1,It,jt,Pt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,It,jt,Tt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Qt,Tt.width,Tt.height,Tt.depth,0,It,jt,Tt.data);else if(T.isData3DTexture)ee?(Ue&&i.texStorage3D(o.TEXTURE_3D,Ut,Qt,Tt.width,Tt.height,Tt.depth),k&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,It,jt,Tt.data)):i.texImage3D(o.TEXTURE_3D,0,Qt,Tt.width,Tt.height,Tt.depth,0,It,jt,Tt.data);else if(T.isFramebufferTexture){if(Ue)if(ee)i.texStorage2D(o.TEXTURE_2D,Ut,Qt,Tt.width,Tt.height);else{let ot=Tt.width,pt=Tt.height;for(let Pt=0;Pt<Ut;Pt++)i.texImage2D(o.TEXTURE_2D,Pt,Qt,ot,pt,0,It,jt,null),ot>>=1,pt>>=1}}else if(le.length>0){if(ee&&Ue){const ot=Ht(le[0]);i.texStorage2D(o.TEXTURE_2D,Ut,Qt,ot.width,ot.height)}for(let ot=0,pt=le.length;ot<pt;ot++)Ot=le[ot],ee?k&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,It,jt,Ot):i.texImage2D(o.TEXTURE_2D,ot,Qt,It,jt,Ot);T.generateMipmaps=!1}else if(ee){if(Ue){const ot=Ht(Tt);i.texStorage2D(o.TEXTURE_2D,Ut,Qt,ot.width,ot.height)}k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,It,jt,Tt)}else i.texImage2D(o.TEXTURE_2D,0,Qt,It,jt,Tt);y(T)&&_(_t),zt.__version=ct.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function dt(L,T,et){if(T.image.length!==6)return;const _t=St(L,T),yt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+et);const ct=s.get(yt);if(yt.version!==ct.__version||_t===!0){i.activeTexture(o.TEXTURE0+et);const zt=Ae.getPrimaries(Ae.workingColorSpace),At=T.colorSpace===Ya?null:Ae.getPrimaries(T.colorSpace),Rt=T.colorSpace===Ya||zt===At?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const ve=T.isCompressedTexture||T.image[0].isCompressedTexture,Tt=T.image[0]&&T.image[0].isDataTexture,It=[];for(let pt=0;pt<6;pt++)!ve&&!Tt?It[pt]=R(T.image[pt],!0,l.maxCubemapSize):It[pt]=Tt?T.image[pt].image:T.image[pt],It[pt]=De(T,It[pt]);const jt=It[0],Qt=u.convert(T.format,T.colorSpace),Ot=u.convert(T.type),le=N(T.internalFormat,Qt,Ot,T.colorSpace),ee=T.isVideoTexture!==!0,Ue=ct.__version===void 0||_t===!0,k=yt.dataReady;let Ut=B(T,jt);vt(o.TEXTURE_CUBE_MAP,T);let ot;if(ve){ee&&Ue&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ut,le,jt.width,jt.height);for(let pt=0;pt<6;pt++){ot=It[pt].mipmaps;for(let Pt=0;Pt<ot.length;Pt++){const Lt=ot[Pt];T.format!==Si?Qt!==null?ee?k&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Pt,0,0,Lt.width,Lt.height,Qt,Lt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Pt,le,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Pt,0,0,Lt.width,Lt.height,Qt,Ot,Lt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Pt,le,Lt.width,Lt.height,0,Qt,Ot,Lt.data)}}}else{if(ot=T.mipmaps,ee&&Ue){ot.length>0&&Ut++;const pt=Ht(It[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ut,le,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(Tt){ee?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,It[pt].width,It[pt].height,Qt,Ot,It[pt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,le,It[pt].width,It[pt].height,0,Qt,Ot,It[pt].data);for(let Pt=0;Pt<ot.length;Pt++){const ie=ot[Pt].image[pt].image;ee?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Pt+1,0,0,ie.width,ie.height,Qt,Ot,ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Pt+1,le,ie.width,ie.height,0,Qt,Ot,ie.data)}}else{ee?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Qt,Ot,It[pt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,le,Qt,Ot,It[pt]);for(let Pt=0;Pt<ot.length;Pt++){const Lt=ot[Pt];ee?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Pt+1,0,0,Qt,Ot,Lt.image[pt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Pt+1,le,Qt,Ot,Lt.image[pt])}}}y(T)&&_(o.TEXTURE_CUBE_MAP),ct.__version=yt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function xt(L,T,et,_t,yt,ct){const zt=u.convert(et.format,et.colorSpace),At=u.convert(et.type),Rt=N(et.internalFormat,zt,At,et.colorSpace),ve=s.get(T),Tt=s.get(et);if(Tt.__renderTarget=T,!ve.__hasExternalTextures){const It=Math.max(1,T.width>>ct),jt=Math.max(1,T.height>>ct);yt===o.TEXTURE_3D||yt===o.TEXTURE_2D_ARRAY?i.texImage3D(yt,ct,Rt,It,jt,T.depth,0,zt,At,null):i.texImage2D(yt,ct,Rt,It,jt,0,zt,At,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),ne(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_t,yt,Tt.__webglTexture,0,_e(T)):(yt===o.TEXTURE_2D||yt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_t,yt,Tt.__webglTexture,ct),i.bindFramebuffer(o.FRAMEBUFFER,null)}function bt(L,T,et){if(o.bindRenderbuffer(o.RENDERBUFFER,L),T.depthBuffer){const _t=T.depthTexture,yt=_t&&_t.isDepthTexture?_t.type:null,ct=w(T.stencilBuffer,yt),zt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=_e(T);ne(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,At,ct,T.width,T.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,At,ct,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ct,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,zt,o.RENDERBUFFER,L)}else{const _t=T.textures;for(let yt=0;yt<_t.length;yt++){const ct=_t[yt],zt=u.convert(ct.format,ct.colorSpace),At=u.convert(ct.type),Rt=N(ct.internalFormat,zt,At,ct.colorSpace),ve=_e(T);et&&ne(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ve,Rt,T.width,T.height):ne(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ve,Rt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Rt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Nt(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _t=s.get(T.depthTexture);_t.__renderTarget=T,(!_t.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ht(T.depthTexture,0);const yt=_t.__webglTexture,ct=_e(T);if(T.depthTexture.format===Xo)ne(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0);else if(T.depthTexture.format===Wo)ne(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function re(L){const T=s.get(L),et=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const _t=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),_t){const yt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,_t.removeEventListener("dispose",yt)};_t.addEventListener("dispose",yt),T.__depthDisposeCallback=yt}T.__boundDepthTexture=_t}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");Nt(T.__webglFramebuffer,L)}else if(et){T.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[_t]),T.__webglDepthbuffer[_t]===void 0)T.__webglDepthbuffer[_t]=o.createRenderbuffer(),bt(T.__webglDepthbuffer[_t],L,!1);else{const yt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=T.__webglDepthbuffer[_t];o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,ct)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),bt(T.__webglDepthbuffer,L,!1);else{const _t=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,yt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,yt),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,yt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Kt(L,T,et){const _t=s.get(L);T!==void 0&&xt(_t.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&re(L)}function Ge(L){const T=L.texture,et=s.get(L),_t=s.get(T);L.addEventListener("dispose",I);const yt=L.textures,ct=L.isWebGLCubeRenderTarget===!0,zt=yt.length>1;if(zt||(_t.__webglTexture===void 0&&(_t.__webglTexture=o.createTexture()),_t.__version=T.version,h.memory.textures++),ct){et.__webglFramebuffer=[];for(let At=0;At<6;At++)if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer[At]=[];for(let Rt=0;Rt<T.mipmaps.length;Rt++)et.__webglFramebuffer[At][Rt]=o.createFramebuffer()}else et.__webglFramebuffer[At]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer=[];for(let At=0;At<T.mipmaps.length;At++)et.__webglFramebuffer[At]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(zt)for(let At=0,Rt=yt.length;At<Rt;At++){const ve=s.get(yt[At]);ve.__webglTexture===void 0&&(ve.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&ne(L)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let At=0;At<yt.length;At++){const Rt=yt[At];et.__webglColorRenderbuffer[At]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[At]);const ve=u.convert(Rt.format,Rt.colorSpace),Tt=u.convert(Rt.type),It=N(Rt.internalFormat,ve,Tt,Rt.colorSpace,L.isXRRenderTarget===!0),jt=_e(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,jt,It,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+At,o.RENDERBUFFER,et.__webglColorRenderbuffer[At])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),bt(et.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ct){i.bindTexture(o.TEXTURE_CUBE_MAP,_t.__webglTexture),vt(o.TEXTURE_CUBE_MAP,T);for(let At=0;At<6;At++)if(T.mipmaps&&T.mipmaps.length>0)for(let Rt=0;Rt<T.mipmaps.length;Rt++)xt(et.__webglFramebuffer[At][Rt],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,Rt);else xt(et.__webglFramebuffer[At],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);y(T)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(zt){for(let At=0,Rt=yt.length;At<Rt;At++){const ve=yt[At],Tt=s.get(ve);i.bindTexture(o.TEXTURE_2D,Tt.__webglTexture),vt(o.TEXTURE_2D,ve),xt(et.__webglFramebuffer,L,ve,o.COLOR_ATTACHMENT0+At,o.TEXTURE_2D,0),y(ve)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let At=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(At=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(At,_t.__webglTexture),vt(At,T),T.mipmaps&&T.mipmaps.length>0)for(let Rt=0;Rt<T.mipmaps.length;Rt++)xt(et.__webglFramebuffer[Rt],L,T,o.COLOR_ATTACHMENT0,At,Rt);else xt(et.__webglFramebuffer,L,T,o.COLOR_ATTACHMENT0,At,0);y(T)&&_(At),i.unbindTexture()}L.depthBuffer&&re(L)}function Ie(L){const T=L.textures;for(let et=0,_t=T.length;et<_t;et++){const yt=T[et];if(y(yt)){const ct=O(L),zt=s.get(yt).__webglTexture;i.bindTexture(ct,zt),_(ct),i.unbindTexture()}}}const ce=[],F=[];function Bn(L){if(L.samples>0){if(ne(L)===!1){const T=L.textures,et=L.width,_t=L.height;let yt=o.COLOR_BUFFER_BIT;const ct=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,zt=s.get(L),At=T.length>1;if(At)for(let Rt=0;Rt<T.length;Rt++)i.bindFramebuffer(o.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Rt=0;Rt<T.length;Rt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(yt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(yt|=o.STENCIL_BUFFER_BIT)),At){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,zt.__webglColorRenderbuffer[Rt]);const ve=s.get(T[Rt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ve,0)}o.blitFramebuffer(0,0,et,_t,0,0,et,_t,yt,o.NEAREST),m===!0&&(ce.length=0,F.length=0,ce.push(o.COLOR_ATTACHMENT0+Rt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ce.push(ct),F.push(ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,F)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ce))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),At)for(let Rt=0;Rt<T.length;Rt++){i.bindFramebuffer(o.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,zt.__webglColorRenderbuffer[Rt]);const ve=s.get(T[Rt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.TEXTURE_2D,ve,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const T=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function _e(L){return Math.min(l.maxSamples,L.samples)}function ne(L){const T=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Xt(L){const T=h.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function De(L,T){const et=L.colorSpace,_t=L.format,yt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||et!==Nr&&et!==Ya&&(Ae.getTransfer(et)===Pe?(_t!==Si||yt!==fa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),T}function Ht(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=lt,this.setTexture2D=ht,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=Kt,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=Bn,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=ne}function FA(o,t){function i(s,l=Ya){let u;const h=Ae.getTransfer(l);if(s===fa)return o.UNSIGNED_BYTE;if(s===Bd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Id)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Wv)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===kv)return o.BYTE;if(s===Xv)return o.SHORT;if(s===Vo)return o.UNSIGNED_SHORT;if(s===zd)return o.INT;if(s===As)return o.UNSIGNED_INT;if(s===ra)return o.FLOAT;if(s===ua)return o.HALF_FLOAT;if(s===Yv)return o.ALPHA;if(s===qv)return o.RGB;if(s===Si)return o.RGBA;if(s===jv)return o.LUMINANCE;if(s===Zv)return o.LUMINANCE_ALPHA;if(s===Xo)return o.DEPTH_COMPONENT;if(s===Wo)return o.DEPTH_STENCIL;if(s===Kv)return o.RED;if(s===Fd)return o.RED_INTEGER;if(s===Qv)return o.RG;if(s===Hd)return o.RG_INTEGER;if(s===Gd)return o.RGBA_INTEGER;if(s===Pu||s===zu||s===Bu||s===Iu)if(h===Pe)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Pu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===zu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Bu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Iu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Pu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===zu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Bu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Iu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ad||s===sd||s===rd||s===od)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===ad)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===sd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===rd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===od)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ld||s===ud||s===cd)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===ld||s===ud)return h===Pe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===cd)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===fd||s===hd||s===dd||s===pd||s===md||s===gd||s===_d||s===vd||s===xd||s===Sd||s===yd||s===Md||s===Ed||s===Td)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===fd)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===hd)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===dd)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===pd)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===md)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gd)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_d)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vd)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xd)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Sd)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===yd)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Md)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ed)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Td)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Fu||s===bd||s===Ad)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===Fu)return h===Pe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===bd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ad)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Jv||s===Rd||s===Cd||s===wd)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Fu)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Rd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Cd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ko?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const HA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class VA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new On,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Xn({vertexShader:HA,fragmentShader:GA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ni(new Ju(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kA extends Cs{constructor(t,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,v=null,x=null,M=null,b=null;const R=new VA,y=i.getContextAttributes();let _=null,O=null;const N=[],w=[],B=new kt;let V=null;const I=new fi;I.viewport=new tn;const Z=new fi;Z.viewport=new tn;const D=[I,Z],C=new rM;let G=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let dt=N[J];return dt===void 0&&(dt=new wh,N[J]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(J){let dt=N[J];return dt===void 0&&(dt=new wh,N[J]=dt),dt.getGripSpace()},this.getHand=function(J){let dt=N[J];return dt===void 0&&(dt=new wh,N[J]=dt),dt.getHandSpace()};function rt(J){const dt=w.indexOf(J.inputSource);if(dt===-1)return;const xt=N[dt];xt!==void 0&&(xt.update(J.inputSource,J.frame,p||h),xt.dispatchEvent({type:J.type,data:J.inputSource}))}function gt(){l.removeEventListener("select",rt),l.removeEventListener("selectstart",rt),l.removeEventListener("selectend",rt),l.removeEventListener("squeeze",rt),l.removeEventListener("squeezestart",rt),l.removeEventListener("squeezeend",rt),l.removeEventListener("end",gt),l.removeEventListener("inputsourceschange",ht);for(let J=0;J<N.length;J++){const dt=w[J];dt!==null&&(w[J]=null,N[J].disconnect(dt))}G=null,lt=null,R.reset(),t.setRenderTarget(_),M=null,x=null,v=null,l=null,O=null,St.stop(),s.isPresenting=!1,t.setPixelRatio(V),t.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){u=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",rt),l.addEventListener("selectstart",rt),l.addEventListener("selectend",rt),l.addEventListener("squeeze",rt),l.addEventListener("squeezestart",rt),l.addEventListener("squeezeend",rt),l.addEventListener("end",gt),l.addEventListener("inputsourceschange",ht),y.xrCompatible!==!0&&await i.makeXRCompatible(),V=t.getPixelRatio(),t.getSize(B),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,bt=null,Nt=null;y.depth&&(Nt=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xt=y.stencil?Wo:Xo,bt=y.stencil?ko:As);const re={colorFormat:i.RGBA8,depthFormat:Nt,scaleFactor:u};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(re),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),O=new Mi(x.textureWidth,x.textureHeight,{format:Si,type:fa,depthTexture:new h0(x.textureWidth,x.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const xt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,xt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),O=new Mi(M.framebufferWidth,M.framebufferHeight,{format:Si,type:fa,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),St.setContext(l),St.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function ht(J){for(let dt=0;dt<J.removed.length;dt++){const xt=J.removed[dt],bt=w.indexOf(xt);bt>=0&&(w[bt]=null,N[bt].disconnect(xt))}for(let dt=0;dt<J.added.length;dt++){const xt=J.added[dt];let bt=w.indexOf(xt);if(bt===-1){for(let re=0;re<N.length;re++)if(re>=w.length){w.push(xt),bt=re;break}else if(w[re]===null){w[re]=xt,bt=re;break}if(bt===-1)break}const Nt=N[bt];Nt&&Nt.connect(xt)}}const z=new j,K=new j;function Y(J,dt,xt){z.setFromMatrixPosition(dt.matrixWorld),K.setFromMatrixPosition(xt.matrixWorld);const bt=z.distanceTo(K),Nt=dt.projectionMatrix.elements,re=xt.projectionMatrix.elements,Kt=Nt[14]/(Nt[10]-1),Ge=Nt[14]/(Nt[10]+1),Ie=(Nt[9]+1)/Nt[5],ce=(Nt[9]-1)/Nt[5],F=(Nt[8]-1)/Nt[0],Bn=(re[8]+1)/re[0],_e=Kt*F,ne=Kt*Bn,Xt=bt/(-F+Bn),De=Xt*-F;if(dt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(De),J.translateZ(Xt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Nt[10]===-1)J.projectionMatrix.copy(dt.projectionMatrix),J.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Ht=Kt+Xt,L=Ge+Xt,T=_e-De,et=ne+(bt-De),_t=Ie*Ge/L*Ht,yt=ce*Ge/L*Ht;J.projectionMatrix.makePerspective(T,et,_t,yt,Ht,L),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Mt(J,dt){dt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(dt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let dt=J.near,xt=J.far;R.texture!==null&&(R.depthNear>0&&(dt=R.depthNear),R.depthFar>0&&(xt=R.depthFar)),C.near=Z.near=I.near=dt,C.far=Z.far=I.far=xt,(G!==C.near||lt!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),G=C.near,lt=C.far),I.layers.mask=J.layers.mask|2,Z.layers.mask=J.layers.mask|4,C.layers.mask=I.layers.mask|Z.layers.mask;const bt=J.parent,Nt=C.cameras;Mt(C,bt);for(let re=0;re<Nt.length;re++)Mt(Nt[re],bt);Nt.length===2?Y(C,I,Z):C.projectionMatrix.copy(I.projectionMatrix),U(J,C,bt)};function U(J,dt,xt){xt===null?J.matrix.copy(dt.matrixWorld):(J.matrix.copy(xt.matrixWorld),J.matrix.invert(),J.matrix.multiply(dt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(dt.projectionMatrix),J.projectionMatrixInverse.copy(dt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ud*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(J){m=J,x!==null&&(x.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(C)};let tt=null;function vt(J,dt){if(g=dt.getViewerPose(p||h),b=dt,g!==null){const xt=g.views;M!==null&&(t.setRenderTargetFramebuffer(O,M.framebuffer),t.setRenderTarget(O));let bt=!1;xt.length!==C.cameras.length&&(C.cameras.length=0,bt=!0);for(let Kt=0;Kt<xt.length;Kt++){const Ge=xt[Kt];let Ie=null;if(M!==null)Ie=M.getViewport(Ge);else{const F=v.getViewSubImage(x,Ge);Ie=F.viewport,Kt===0&&(t.setRenderTargetTextures(O,F.colorTexture,F.depthStencilTexture),t.setRenderTarget(O))}let ce=D[Kt];ce===void 0&&(ce=new fi,ce.layers.enable(Kt),ce.viewport=new tn,D[Kt]=ce),ce.matrix.fromArray(Ge.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(Ge.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Kt===0&&(C.matrix.copy(ce.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),bt===!0&&C.cameras.push(ce)}const Nt=l.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Kt=v.getDepthInformation(xt[0]);Kt&&Kt.isValid&&Kt.texture&&R.init(t,Kt,l.renderState)}}for(let xt=0;xt<N.length;xt++){const bt=w[xt],Nt=N[xt];bt!==null&&Nt!==void 0&&Nt.update(bt,dt,p||h)}tt&&tt(J,dt),dt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:dt}),b=null}const St=new p0;St.setAnimationLoop(vt),this.setAnimationLoop=function(J){tt=J},this.dispose=function(){}}}const Ss=new ha,XA=new Qe;function WA(o,t){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function s(y,_){_.color.getRGB(y.fogColor.value,r0(o)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,O,N,w){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),v(y,_)):_.isMeshPhongMaterial?(u(y,_),g(y,_)):_.isMeshStandardMaterial?(u(y,_),x(y,_),_.isMeshPhysicalMaterial&&M(y,_,w)):_.isMeshMatcapMaterial?(u(y,_),b(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),R(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,O,N):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Wn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Wn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const O=t.get(_),N=O.envMap,w=O.envMapRotation;N&&(y.envMap.value=N,Ss.copy(w),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),y.envMapRotation.value.setFromMatrix4(XA.makeRotationFromEuler(Ss)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,O,N){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*O,y.scale.value=N*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,O){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Wn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,_){_.matcap&&(y.matcap.value=_.matcap)}function R(y,_){const O=t.get(_).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function YA(o,t,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,N){const w=N.program;s.uniformBlockBinding(O,w)}function p(O,N){let w=l[O.id];w===void 0&&(b(O),w=g(O),l[O.id]=w,O.addEventListener("dispose",y));const B=N.program;s.updateUBOMapping(O,B);const V=t.render.frame;u[O.id]!==V&&(x(O),u[O.id]=V)}function g(O){const N=v();O.__bindingPointIndex=N;const w=o.createBuffer(),B=O.__size,V=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,B,V),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,w),w}function v(){for(let O=0;O<d;O++)if(h.indexOf(O)===-1)return h.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(O){const N=l[O.id],w=O.uniforms,B=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let V=0,I=w.length;V<I;V++){const Z=Array.isArray(w[V])?w[V]:[w[V]];for(let D=0,C=Z.length;D<C;D++){const G=Z[D];if(M(G,V,D,B)===!0){const lt=G.__offset,rt=Array.isArray(G.value)?G.value:[G.value];let gt=0;for(let ht=0;ht<rt.length;ht++){const z=rt[ht],K=R(z);typeof z=="number"||typeof z=="boolean"?(G.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,lt+gt,G.__data)):z.isMatrix3?(G.__data[0]=z.elements[0],G.__data[1]=z.elements[1],G.__data[2]=z.elements[2],G.__data[3]=0,G.__data[4]=z.elements[3],G.__data[5]=z.elements[4],G.__data[6]=z.elements[5],G.__data[7]=0,G.__data[8]=z.elements[6],G.__data[9]=z.elements[7],G.__data[10]=z.elements[8],G.__data[11]=0):(z.toArray(G.__data,gt),gt+=K.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,lt,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(O,N,w,B){const V=O.value,I=N+"_"+w;if(B[I]===void 0)return typeof V=="number"||typeof V=="boolean"?B[I]=V:B[I]=V.clone(),!0;{const Z=B[I];if(typeof V=="number"||typeof V=="boolean"){if(Z!==V)return B[I]=V,!0}else if(Z.equals(V)===!1)return Z.copy(V),!0}return!1}function b(O){const N=O.uniforms;let w=0;const B=16;for(let I=0,Z=N.length;I<Z;I++){const D=Array.isArray(N[I])?N[I]:[N[I]];for(let C=0,G=D.length;C<G;C++){const lt=D[C],rt=Array.isArray(lt.value)?lt.value:[lt.value];for(let gt=0,ht=rt.length;gt<ht;gt++){const z=rt[gt],K=R(z),Y=w%B,Mt=Y%K.boundary,U=Y+Mt;w+=Mt,U!==0&&B-U<K.storage&&(w+=B-U),lt.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=w,w+=K.storage}}}const V=w%B;return V>0&&(w+=B-V),O.__size=w,O.__cache={},this}function R(O){const N={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(N.boundary=4,N.storage=4):O.isVector2?(N.boundary=8,N.storage=8):O.isVector3||O.isColor?(N.boundary=16,N.storage=12):O.isVector4?(N.boundary=16,N.storage=16):O.isMatrix3?(N.boundary=48,N.storage=48):O.isMatrix4?(N.boundary=64,N.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),N}function y(O){const N=O.target;N.removeEventListener("dispose",y);const w=h.indexOf(N.__bindingPointIndex);h.splice(w,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function _(){for(const O in l)o.deleteBuffer(l[O]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class qA{constructor(t={}){const{canvas:i=Ey(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),R=new Int32Array(4);let y=null,_=null;const O=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let B=!1;this._outputColorSpace=ci;let V=0,I=0,Z=null,D=-1,C=null;const G=new tn,lt=new tn;let rt=null;const gt=new ge(0);let ht=0,z=i.width,K=i.height,Y=1,Mt=null,U=null;const tt=new tn(0,0,z,K),vt=new tn(0,0,z,K);let St=!1;const J=new c0;let dt=!1,xt=!1;const bt=new Qe,Nt=new Qe,re=new j,Kt=new tn,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function ce(){return Z===null?Y:1}let F=s;function Bn(A,W){return i.getContext(A,W)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Pd}`),i.addEventListener("webglcontextlost",pt,!1),i.addEventListener("webglcontextrestored",Pt,!1),i.addEventListener("webglcontextcreationerror",Lt,!1),F===null){const W="webgl2";if(F=Bn(W,A),F===null)throw Bn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let _e,ne,Xt,De,Ht,L,T,et,_t,yt,ct,zt,At,Rt,ve,Tt,It,jt,Qt,Ot,le,ee,Ue,k;function Ut(){_e=new ib(F),_e.init(),ee=new FA(F,_e),ne=new KT(F,_e,t,ee),Xt=new BA(F,_e),ne.reverseDepthBuffer&&x&&Xt.buffers.depth.setReversed(!0),De=new rb(F),Ht=new TA,L=new IA(F,_e,Xt,Ht,ne,ee,De),T=new JT(w),et=new nb(w),_t=new hM(F),Ue=new jT(F,_t),yt=new ab(F,_t,De,Ue),ct=new lb(F,yt,_t,De),Qt=new ob(F,ne,L),Tt=new QT(Ht),zt=new EA(w,T,et,_e,ne,Ue,Tt),At=new WA(w,Ht),Rt=new AA,ve=new LA(_e),jt=new qT(w,T,et,Xt,ct,M,m),It=new PA(w,ct,ne),k=new YA(F,De,ne,Xt),Ot=new ZT(F,_e,De),le=new sb(F,_e,De),De.programs=zt.programs,w.capabilities=ne,w.extensions=_e,w.properties=Ht,w.renderLists=Rt,w.shadowMap=It,w.state=Xt,w.info=De}Ut();const ot=new kA(w,F);this.xr=ot,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=_e.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=_e.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(z,K,!1))},this.getSize=function(A){return A.set(z,K)},this.setSize=function(A,W,at=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,K=W,i.width=Math.floor(A*Y),i.height=Math.floor(W*Y),at===!0&&(i.style.width=A+"px",i.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(z*Y,K*Y).floor()},this.setDrawingBufferSize=function(A,W,at){z=A,K=W,Y=at,i.width=Math.floor(A*at),i.height=Math.floor(W*at),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(G)},this.getViewport=function(A){return A.copy(tt)},this.setViewport=function(A,W,at,st){A.isVector4?tt.set(A.x,A.y,A.z,A.w):tt.set(A,W,at,st),Xt.viewport(G.copy(tt).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(vt)},this.setScissor=function(A,W,at,st){A.isVector4?vt.set(A.x,A.y,A.z,A.w):vt.set(A,W,at,st),Xt.scissor(lt.copy(vt).multiplyScalar(Y).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(A){Xt.setScissorTest(St=A)},this.setOpaqueSort=function(A){Mt=A},this.setTransparentSort=function(A){U=A},this.getClearColor=function(A){return A.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,at=!0){let st=0;if(A){let q=!1;if(Z!==null){const Et=Z.texture.format;q=Et===Gd||Et===Hd||Et===Fd}if(q){const Et=Z.texture.type,Ct=Et===fa||Et===As||Et===Vo||Et===ko||Et===Bd||Et===Id,wt=jt.getClearColor(),Bt=jt.getClearAlpha(),$t=wt.r,Yt=wt.g,Vt=wt.b;Ct?(b[0]=$t,b[1]=Yt,b[2]=Vt,b[3]=Bt,F.clearBufferuiv(F.COLOR,0,b)):(R[0]=$t,R[1]=Yt,R[2]=Vt,R[3]=Bt,F.clearBufferiv(F.COLOR,0,R))}else st|=F.COLOR_BUFFER_BIT}W&&(st|=F.DEPTH_BUFFER_BIT),at&&(st|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",pt,!1),i.removeEventListener("webglcontextrestored",Pt,!1),i.removeEventListener("webglcontextcreationerror",Lt,!1),jt.dispose(),Rt.dispose(),ve.dispose(),Ht.dispose(),T.dispose(),et.dispose(),ct.dispose(),Ue.dispose(),k.dispose(),zt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",on),ot.removeEventListener("sessionend",Sn),In.stop()};function pt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const A=De.autoReset,W=It.enabled,at=It.autoUpdate,st=It.needsUpdate,q=It.type;Ut(),De.autoReset=A,It.enabled=W,It.autoUpdate=at,It.needsUpdate=st,It.type=q}function Lt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ie(A){const W=A.target;W.removeEventListener("dispose",ie),Ve(W)}function Ve(A){en(A),Ht.remove(A)}function en(A){const W=Ht.get(A).programs;W!==void 0&&(W.forEach(function(at){zt.releaseProgram(at)}),A.isShaderMaterial&&zt.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,at,st,q,Et){W===null&&(W=Ge);const Ct=q.isMesh&&q.matrixWorld.determinant()<0,wt=Ja(A,W,at,st,q);Xt.setMaterial(st,Ct);let Bt=at.index,$t=1;if(st.wireframe===!0){if(Bt=yt.getWireframeAttribute(at),Bt===void 0)return;$t=2}const Yt=at.drawRange,Vt=at.attributes.position;let he=Yt.start*$t,Te=(Yt.start+Yt.count)*$t;Et!==null&&(he=Math.max(he,Et.start*$t),Te=Math.min(Te,(Et.start+Et.count)*$t)),Bt!==null?(he=Math.max(he,0),Te=Math.min(Te,Bt.count)):Vt!=null&&(he=Math.max(he,0),Te=Math.min(Te,Vt.count));const Ye=Te-he;if(Ye<0||Ye===1/0)return;Ue.setup(q,st,wt,at,Bt);let xe,Se=Ot;if(Bt!==null&&(xe=_t.get(Bt),Se=le,Se.setIndex(xe)),q.isMesh)st.wireframe===!0?(Xt.setLineWidth(st.wireframeLinewidth*ce()),Se.setMode(F.LINES)):Se.setMode(F.TRIANGLES);else if(q.isLine){let qt=st.linewidth;qt===void 0&&(qt=1),Xt.setLineWidth(qt*ce()),q.isLineSegments?Se.setMode(F.LINES):q.isLineLoop?Se.setMode(F.LINE_LOOP):Se.setMode(F.LINE_STRIP)}else q.isPoints?Se.setMode(F.POINTS):q.isSprite&&Se.setMode(F.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Gu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Se.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(_e.get("WEBGL_multi_draw"))Se.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const qt=q._multiDrawStarts,je=q._multiDrawCounts,Me=q._multiDrawCount,bn=Bt?_t.get(Bt).bytesPerElement:1,ga=Ht.get(st).currentProgram.getUniforms();for(let ke=0;ke<Me;ke++)ga.setValue(F,"_gl_DrawID",ke),Se.render(qt[ke]/bn,je[ke])}else if(q.isInstancedMesh)Se.renderInstances(he,Ye,q.count);else if(at.isInstancedBufferGeometry){const qt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,je=Math.min(at.instanceCount,qt);Se.renderInstances(he,Ye,je)}else Se.render(he,Ye)};function Ee(A,W,at){A.transparent===!0&&A.side===sa&&A.forceSinglePass===!1?(A.side=Wn,A.needsUpdate=!0,pa(A,W,at),A.side=Za,A.needsUpdate=!0,pa(A,W,at),A.side=sa):pa(A,W,at)}this.compile=function(A,W,at=null){at===null&&(at=A),_=ve.get(at),_.init(W),N.push(_),at.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),A!==at&&A.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),_.setupLights();const st=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Et=q.material;if(Et)if(Array.isArray(Et))for(let Ct=0;Ct<Et.length;Ct++){const wt=Et[Ct];Ee(wt,at,q),st.add(wt)}else Ee(Et,at,q),st.add(Et)}),_=N.pop(),st},this.compileAsync=function(A,W,at=null){const st=this.compile(A,W,at);return new Promise(q=>{function Et(){if(st.forEach(function(Ct){Ht.get(Ct).currentProgram.isReady()&&st.delete(Ct)}),st.size===0){q(A);return}setTimeout(Et,10)}_e.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Yn=null;function pn(A){Yn&&Yn(A)}function on(){In.stop()}function Sn(){In.start()}const In=new p0;In.setAnimationLoop(pn),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(A){Yn=A,ot.setAnimationLoop(A),A===null?In.stop():In.start()},ot.addEventListener("sessionstart",on),ot.addEventListener("sessionend",Sn),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(W),W=ot.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,W,Z),_=ve.get(A,N.length),_.init(W),N.push(_),Nt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),J.setFromProjectionMatrix(Nt),xt=this.localClippingEnabled,dt=Tt.init(this.clippingPlanes,xt),y=Rt.get(A,O.length),y.init(),O.push(y),ot.enabled===!0&&ot.isPresenting===!0){const Et=w.xr.getDepthSensingMesh();Et!==null&&Ka(Et,W,-1/0,w.sortObjects)}Ka(A,W,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(Mt,U),Ie=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Ie&&jt.addToRenderList(y,A),this.info.render.frame++,dt===!0&&Tt.beginShadows();const at=_.state.shadowsArray;It.render(at,A,W),dt===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=y.opaque,q=y.transmissive;if(_.setupLights(),W.isArrayCamera){const Et=W.cameras;if(q.length>0)for(let Ct=0,wt=Et.length;Ct<wt;Ct++){const Bt=Et[Ct];Qo(st,q,A,Bt)}Ie&&jt.render(A);for(let Ct=0,wt=Et.length;Ct<wt;Ct++){const Bt=Et[Ct];Ko(y,A,Bt,Bt.viewport)}}else q.length>0&&Qo(st,q,A,W),Ie&&jt.render(A),Ko(y,A,W);Z!==null&&I===0&&(L.updateMultisampleRenderTarget(Z),L.updateRenderTargetMipmap(Z)),A.isScene===!0&&A.onAfterRender(w,A,W),Ue.resetDefaultState(),D=-1,C=null,N.pop(),N.length>0?(_=N[N.length-1],dt===!0&&Tt.setGlobalState(w.clippingPlanes,_.state.camera)):_=null,O.pop(),O.length>0?y=O[O.length-1]:y=null};function Ka(A,W,at,st){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||J.intersectsSprite(A)){st&&Kt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Nt);const Ct=ct.update(A),wt=A.material;wt.visible&&y.push(A,Ct,wt,at,Kt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||J.intersectsObject(A))){const Ct=ct.update(A),wt=A.material;if(st&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Kt.copy(A.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Kt.copy(Ct.boundingSphere.center)),Kt.applyMatrix4(A.matrixWorld).applyMatrix4(Nt)),Array.isArray(wt)){const Bt=Ct.groups;for(let $t=0,Yt=Bt.length;$t<Yt;$t++){const Vt=Bt[$t],he=wt[Vt.materialIndex];he&&he.visible&&y.push(A,Ct,he,at,Kt.z,Vt)}}else wt.visible&&y.push(A,Ct,wt,at,Kt.z,null)}}const Et=A.children;for(let Ct=0,wt=Et.length;Ct<wt;Ct++)Ka(Et[Ct],W,at,st)}function Ko(A,W,at,st){const q=A.opaque,Et=A.transmissive,Ct=A.transparent;_.setupLightsView(at),dt===!0&&Tt.setGlobalState(w.clippingPlanes,at),st&&Xt.viewport(G.copy(st)),q.length>0&&Qa(q,W,at),Et.length>0&&Qa(Et,W,at),Ct.length>0&&Qa(Ct,W,at),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function Qo(A,W,at,st){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[st.id]===void 0&&(_.state.transmissionRenderTarget[st.id]=new Mi(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float")?ua:fa,minFilter:bs,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const Et=_.state.transmissionRenderTarget[st.id],Ct=st.viewport||G;Et.setSize(Ct.z*w.transmissionResolutionScale,Ct.w*w.transmissionResolutionScale);const wt=w.getRenderTarget();w.setRenderTarget(Et),w.getClearColor(gt),ht=w.getClearAlpha(),ht<1&&w.setClearColor(16777215,.5),w.clear(),Ie&&jt.render(at);const Bt=w.toneMapping;w.toneMapping=qa;const $t=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),_.setupLightsView(st),dt===!0&&Tt.setGlobalState(w.clippingPlanes,st),Qa(A,at,st),L.updateMultisampleRenderTarget(Et),L.updateRenderTargetMipmap(Et),_e.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Vt=0,he=W.length;Vt<he;Vt++){const Te=W[Vt],Ye=Te.object,xe=Te.geometry,Se=Te.material,qt=Te.group;if(Se.side===sa&&Ye.layers.test(st.layers)){const je=Se.side;Se.side=Wn,Se.needsUpdate=!0,da(Ye,at,st,xe,Se,qt),Se.side=je,Se.needsUpdate=!0,Yt=!0}}Yt===!0&&(L.updateMultisampleRenderTarget(Et),L.updateRenderTargetMipmap(Et))}w.setRenderTarget(wt),w.setClearColor(gt,ht),$t!==void 0&&(st.viewport=$t),w.toneMapping=Bt}function Qa(A,W,at){const st=W.isScene===!0?W.overrideMaterial:null;for(let q=0,Et=A.length;q<Et;q++){const Ct=A[q],wt=Ct.object,Bt=Ct.geometry,$t=Ct.group;let Yt=Ct.material;Yt.allowOverride===!0&&st!==null&&(Yt=st),wt.layers.test(at.layers)&&da(wt,W,at,Bt,Yt,$t)}}function da(A,W,at,st,q,Et){A.onBeforeRender(w,W,at,st,q,Et),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(w,W,at,st,A,Et),q.transparent===!0&&q.side===sa&&q.forceSinglePass===!1?(q.side=Wn,q.needsUpdate=!0,w.renderBufferDirect(at,W,st,q,A,Et),q.side=Za,q.needsUpdate=!0,w.renderBufferDirect(at,W,st,q,A,Et),q.side=sa):w.renderBufferDirect(at,W,st,q,A,Et),A.onAfterRender(w,W,at,st,q,Et)}function pa(A,W,at){W.isScene!==!0&&(W=Ge);const st=Ht.get(A),q=_.state.lights,Et=_.state.shadowsArray,Ct=q.state.version,wt=zt.getParameters(A,q.state,Et,W,at),Bt=zt.getProgramCacheKey(wt);let $t=st.programs;st.environment=A.isMeshStandardMaterial?W.environment:null,st.fog=W.fog,st.envMap=(A.isMeshStandardMaterial?et:T).get(A.envMap||st.environment),st.envMapRotation=st.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,$t===void 0&&(A.addEventListener("dispose",ie),$t=new Map,st.programs=$t);let Yt=$t.get(Bt);if(Yt!==void 0){if(st.currentProgram===Yt&&st.lightsStateVersion===Ct)return Pi(A,wt),Yt}else wt.uniforms=zt.getUniforms(A),A.onBeforeCompile(wt,w),Yt=zt.acquireProgram(wt,Bt),$t.set(Bt,Yt),st.uniforms=wt.uniforms;const Vt=st.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Vt.clippingPlanes=Tt.uniform),Pi(A,wt),st.needsLights=nn(A),st.lightsStateVersion=Ct,st.needsLights&&(Vt.ambientLightColor.value=q.state.ambient,Vt.lightProbe.value=q.state.probe,Vt.directionalLights.value=q.state.directional,Vt.directionalLightShadows.value=q.state.directionalShadow,Vt.spotLights.value=q.state.spot,Vt.spotLightShadows.value=q.state.spotShadow,Vt.rectAreaLights.value=q.state.rectArea,Vt.ltc_1.value=q.state.rectAreaLTC1,Vt.ltc_2.value=q.state.rectAreaLTC2,Vt.pointLights.value=q.state.point,Vt.pointLightShadows.value=q.state.pointShadow,Vt.hemisphereLights.value=q.state.hemi,Vt.directionalShadowMap.value=q.state.directionalShadowMap,Vt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Vt.spotShadowMap.value=q.state.spotShadowMap,Vt.spotLightMatrix.value=q.state.spotLightMatrix,Vt.spotLightMap.value=q.state.spotLightMap,Vt.pointShadowMap.value=q.state.pointShadowMap,Vt.pointShadowMatrix.value=q.state.pointShadowMatrix),st.currentProgram=Yt,st.uniformsList=null,Yt}function Oi(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Vu.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Pi(A,W){const at=Ht.get(A);at.outputColorSpace=W.outputColorSpace,at.batching=W.batching,at.batchingColor=W.batchingColor,at.instancing=W.instancing,at.instancingColor=W.instancingColor,at.instancingMorph=W.instancingMorph,at.skinning=W.skinning,at.morphTargets=W.morphTargets,at.morphNormals=W.morphNormals,at.morphColors=W.morphColors,at.morphTargetsCount=W.morphTargetsCount,at.numClippingPlanes=W.numClippingPlanes,at.numIntersection=W.numClipIntersection,at.vertexAlphas=W.vertexAlphas,at.vertexTangents=W.vertexTangents,at.toneMapping=W.toneMapping}function Ja(A,W,at,st,q){W.isScene!==!0&&(W=Ge),L.resetTextureUnits();const Et=W.fog,Ct=st.isMeshStandardMaterial?W.environment:null,wt=Z===null?w.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Nr,Bt=(st.isMeshStandardMaterial?et:T).get(st.envMap||Ct),$t=st.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Yt=!!at.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Vt=!!at.morphAttributes.position,he=!!at.morphAttributes.normal,Te=!!at.morphAttributes.color;let Ye=qa;st.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ye=w.toneMapping);const xe=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Se=xe!==void 0?xe.length:0,qt=Ht.get(st),je=_.state.lights;if(dt===!0&&(xt===!0||A!==C)){const mn=A===C&&st.id===D;Tt.setState(st,A,mn)}let Me=!1;st.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==je.state.version||qt.outputColorSpace!==wt||q.isBatchedMesh&&qt.batching===!1||!q.isBatchedMesh&&qt.batching===!0||q.isBatchedMesh&&qt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&qt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&qt.instancing===!1||!q.isInstancedMesh&&qt.instancing===!0||q.isSkinnedMesh&&qt.skinning===!1||!q.isSkinnedMesh&&qt.skinning===!0||q.isInstancedMesh&&qt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&qt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&qt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&qt.instancingMorph===!1&&q.morphTexture!==null||qt.envMap!==Bt||st.fog===!0&&qt.fog!==Et||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==Tt.numPlanes||qt.numIntersection!==Tt.numIntersection)||qt.vertexAlphas!==$t||qt.vertexTangents!==Yt||qt.morphTargets!==Vt||qt.morphNormals!==he||qt.morphColors!==Te||qt.toneMapping!==Ye||qt.morphTargetsCount!==Se)&&(Me=!0):(Me=!0,qt.__version=st.version);let bn=qt.currentProgram;Me===!0&&(bn=pa(st,W,q));let ga=!1,ke=!1,Bi=!1;const Fe=bn.getUniforms(),An=qt.uniforms;if(Xt.useProgram(bn.program)&&(ga=!0,ke=!0,Bi=!0),st.id!==D&&(D=st.id,ke=!0),ga||C!==A){Xt.buffers.depth.getReversed()?(bt.copy(A.projectionMatrix),by(bt),Ay(bt),Fe.setValue(F,"projectionMatrix",bt)):Fe.setValue(F,"projectionMatrix",A.projectionMatrix),Fe.setValue(F,"viewMatrix",A.matrixWorldInverse);const yn=Fe.map.cameraPosition;yn!==void 0&&yn.setValue(F,re.setFromMatrixPosition(A.matrixWorld)),ne.logarithmicDepthBuffer&&Fe.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Fe.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,ke=!0,Bi=!0)}if(q.isSkinnedMesh){Fe.setOptional(F,q,"bindMatrix"),Fe.setOptional(F,q,"bindMatrixInverse");const mn=q.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Fe.setValue(F,"boneTexture",mn.boneTexture,L))}q.isBatchedMesh&&(Fe.setOptional(F,q,"batchingTexture"),Fe.setValue(F,"batchingTexture",q._matricesTexture,L),Fe.setOptional(F,q,"batchingIdTexture"),Fe.setValue(F,"batchingIdTexture",q._indirectTexture,L),Fe.setOptional(F,q,"batchingColorTexture"),q._colorsTexture!==null&&Fe.setValue(F,"batchingColorTexture",q._colorsTexture,L));const ln=at.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Qt.update(q,at,bn),(ke||qt.receiveShadow!==q.receiveShadow)&&(qt.receiveShadow=q.receiveShadow,Fe.setValue(F,"receiveShadow",q.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(An.envMap.value=Bt,An.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&W.environment!==null&&(An.envMapIntensity.value=W.environmentIntensity),ke&&(Fe.setValue(F,"toneMappingExposure",w.toneMappingExposure),qt.needsLights&&ma(An,Bi),Et&&st.fog===!0&&At.refreshFogUniforms(An,Et),At.refreshMaterialUniforms(An,st,Y,K,_.state.transmissionRenderTarget[A.id]),Vu.upload(F,Oi(qt),An,L)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Vu.upload(F,Oi(qt),An,L),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Fe.setValue(F,"center",q.center),Fe.setValue(F,"modelViewMatrix",q.modelViewMatrix),Fe.setValue(F,"normalMatrix",q.normalMatrix),Fe.setValue(F,"modelMatrix",q.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const mn=st.uniformsGroups;for(let yn=0,Ti=mn.length;yn<Ti;yn++){const Ii=mn[yn];k.update(Ii,bn),k.bind(Ii,bn)}}return bn}function ma(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function nn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(A,W,at){const st=Ht.get(A);st.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),Ht.get(A.texture).__webglTexture=W,Ht.get(A.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:at,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const at=Ht.get(A);at.__webglFramebuffer=W,at.__useDefaultFramebuffer=W===void 0};const Jo=F.createFramebuffer();this.setRenderTarget=function(A,W=0,at=0){Z=A,V=W,I=at;let st=!0,q=null,Et=!1,Ct=!1;if(A){const Bt=Ht.get(A);if(Bt.__useDefaultFramebuffer!==void 0)Xt.bindFramebuffer(F.FRAMEBUFFER,null),st=!1;else if(Bt.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(Bt.__hasExternalTextures)L.rebindTextures(A,Ht.get(A.texture).__webglTexture,Ht.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Vt=A.depthTexture;if(Bt.__boundDepthTexture!==Vt){if(Vt!==null&&Ht.has(Vt)&&(A.width!==Vt.image.width||A.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const $t=A.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Ct=!0);const Yt=Ht.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Yt[W])?q=Yt[W][at]:q=Yt[W],Et=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?q=Ht.get(A).__webglMultisampledFramebuffer:Array.isArray(Yt)?q=Yt[at]:q=Yt,G.copy(A.viewport),lt.copy(A.scissor),rt=A.scissorTest}else G.copy(tt).multiplyScalar(Y).floor(),lt.copy(vt).multiplyScalar(Y).floor(),rt=St;if(at!==0&&(q=Jo),Xt.bindFramebuffer(F.FRAMEBUFFER,q)&&st&&Xt.drawBuffers(A,q),Xt.viewport(G),Xt.scissor(lt),Xt.setScissorTest(rt),Et){const Bt=Ht.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,Bt.__webglTexture,at)}else if(Ct){const Bt=Ht.get(A.texture),$t=W;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Bt.__webglTexture,at,$t)}else if(A!==null&&at!==0){const Bt=Ht.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Bt.__webglTexture,at)}D=-1},this.readRenderTargetPixels=function(A,W,at,st,q,Et,Ct){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct]),wt){Xt.bindFramebuffer(F.FRAMEBUFFER,wt);try{const Bt=A.texture,$t=Bt.format,Yt=Bt.type;if(!ne.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-st&&at>=0&&at<=A.height-q&&F.readPixels(W,at,st,q,ee.convert($t),ee.convert(Yt),Et)}finally{const Bt=Z!==null?Ht.get(Z).__webglFramebuffer:null;Xt.bindFramebuffer(F.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(A,W,at,st,q,Et,Ct){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct]),wt)if(W>=0&&W<=A.width-st&&at>=0&&at<=A.height-q){Xt.bindFramebuffer(F.FRAMEBUFFER,wt);const Bt=A.texture,$t=Bt.format,Yt=Bt.type;if(!ne.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Vt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Vt),F.bufferData(F.PIXEL_PACK_BUFFER,Et.byteLength,F.STREAM_READ),F.readPixels(W,at,st,q,ee.convert($t),ee.convert(Yt),0);const he=Z!==null?Ht.get(Z).__webglFramebuffer:null;Xt.bindFramebuffer(F.FRAMEBUFFER,he);const Te=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Ty(F,Te,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Vt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Et),F.deleteBuffer(Vt),F.deleteSync(Te),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,at=0){const st=Math.pow(2,-at),q=Math.floor(A.image.width*st),Et=Math.floor(A.image.height*st),Ct=W!==null?W.x:0,wt=W!==null?W.y:0;L.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,at,0,0,Ct,wt,q,Et),Xt.unbindTexture()};const $o=F.createFramebuffer(),zi=F.createFramebuffer();this.copyTextureToTexture=function(A,W,at=null,st=null,q=0,Et=null){Et===null&&(q!==0?(Gu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=q,q=0):Et=0);let Ct,wt,Bt,$t,Yt,Vt,he,Te,Ye;const xe=A.isCompressedTexture?A.mipmaps[Et]:A.image;if(at!==null)Ct=at.max.x-at.min.x,wt=at.max.y-at.min.y,Bt=at.isBox3?at.max.z-at.min.z:1,$t=at.min.x,Yt=at.min.y,Vt=at.isBox3?at.min.z:0;else{const ln=Math.pow(2,-q);Ct=Math.floor(xe.width*ln),wt=Math.floor(xe.height*ln),A.isDataArrayTexture?Bt=xe.depth:A.isData3DTexture?Bt=Math.floor(xe.depth*ln):Bt=1,$t=0,Yt=0,Vt=0}st!==null?(he=st.x,Te=st.y,Ye=st.z):(he=0,Te=0,Ye=0);const Se=ee.convert(W.format),qt=ee.convert(W.type);let je;W.isData3DTexture?(L.setTexture3D(W,0),je=F.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(L.setTexture2DArray(W,0),je=F.TEXTURE_2D_ARRAY):(L.setTexture2D(W,0),je=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const Me=F.getParameter(F.UNPACK_ROW_LENGTH),bn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ga=F.getParameter(F.UNPACK_SKIP_PIXELS),ke=F.getParameter(F.UNPACK_SKIP_ROWS),Bi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,xe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,$t),F.pixelStorei(F.UNPACK_SKIP_ROWS,Yt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Vt);const Fe=A.isDataArrayTexture||A.isData3DTexture,An=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const ln=Ht.get(A),mn=Ht.get(W),yn=Ht.get(ln.__renderTarget),Ti=Ht.get(mn.__renderTarget);Xt.bindFramebuffer(F.READ_FRAMEBUFFER,yn.__webglFramebuffer),Xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Ii=0;Ii<Bt;Ii++)Fe&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.get(A).__webglTexture,q,Vt+Ii),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.get(W).__webglTexture,Et,Ye+Ii)),F.blitFramebuffer($t,Yt,Ct,wt,he,Te,Ct,wt,F.DEPTH_BUFFER_BIT,F.NEAREST);Xt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||Ht.has(A)){const ln=Ht.get(A),mn=Ht.get(W);Xt.bindFramebuffer(F.READ_FRAMEBUFFER,$o),Xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,zi);for(let yn=0;yn<Bt;yn++)Fe?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ln.__webglTexture,q,Vt+yn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ln.__webglTexture,q),An?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,mn.__webglTexture,Et,Ye+yn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,mn.__webglTexture,Et),q!==0?F.blitFramebuffer($t,Yt,Ct,wt,he,Te,Ct,wt,F.COLOR_BUFFER_BIT,F.NEAREST):An?F.copyTexSubImage3D(je,Et,he,Te,Ye+yn,$t,Yt,Ct,wt):F.copyTexSubImage2D(je,Et,he,Te,$t,Yt,Ct,wt);Xt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else An?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(je,Et,he,Te,Ye,Ct,wt,Bt,Se,qt,xe.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(je,Et,he,Te,Ye,Ct,wt,Bt,Se,xe.data):F.texSubImage3D(je,Et,he,Te,Ye,Ct,wt,Bt,Se,qt,xe):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Et,he,Te,Ct,wt,Se,qt,xe.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Et,he,Te,xe.width,xe.height,Se,xe.data):F.texSubImage2D(F.TEXTURE_2D,Et,he,Te,Ct,wt,Se,qt,xe);F.pixelStorei(F.UNPACK_ROW_LENGTH,Me),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,bn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ga),F.pixelStorei(F.UNPACK_SKIP_ROWS,ke),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Bi),Et===0&&W.generateMipmaps&&F.generateMipmap(je),Xt.unbindTexture()},this.copyTextureToTexture3D=function(A,W,at=null,st=null,q=0){return Gu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,at,st,q)},this.initRenderTarget=function(A){Ht.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),Xt.unbindTexture()},this.resetState=function(){V=0,I=0,Z=null,Xt.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ae._getUnpackColorSpace()}}const Ov={type:"change"},jd={type:"start"},x0={type:"end"},Nu=new kd,Pv=new Wa,jA=Math.cos(70*My.DEG2RAD),fn=new j,kn=2*Math.PI,Be={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Hh=1e-6;class ZA extends cM{constructor(t,i=null){super(t,i),this.state=Be.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rr.ROTATE,MIDDLE:Rr.DOLLY,RIGHT:Rr.PAN},this.touches={ONE:br.ROTATE,TWO:br.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new Rs,this._lastTargetPosition=new j,this._quat=new Rs().setFromUnitVectors(t.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new lv,this._sphericalDelta=new lv,this._scale=1,this._panOffset=new j,this._rotateStart=new kt,this._rotateEnd=new kt,this._rotateDelta=new kt,this._panStart=new kt,this._panEnd=new kt,this._panDelta=new kt,this._dollyStart=new kt,this._dollyEnd=new kt,this._dollyDelta=new kt,this._dollyDirection=new j,this._mouse=new kt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=QA.bind(this),this._onPointerDown=KA.bind(this),this._onPointerUp=JA.bind(this),this._onContextMenu=s1.bind(this),this._onMouseWheel=e1.bind(this),this._onKeyDown=n1.bind(this),this._onTouchStart=i1.bind(this),this._onTouchMove=a1.bind(this),this._onMouseDown=$A.bind(this),this._onMouseMove=t1.bind(this),this._interceptControlDown=r1.bind(this),this._interceptControlUp=o1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ov),this.update(),this.state=Be.NONE}update(t=null){const i=this.object.position;fn.copy(i).sub(this.target),fn.applyQuaternion(this._quat),this._spherical.setFromVector3(fn),this.autoRotate&&this.state===Be.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=kn:s>Math.PI&&(s-=kn),l<-Math.PI?l+=kn:l>Math.PI&&(l-=kn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(fn.setFromSpherical(this._spherical),fn.applyQuaternion(this._quatInverse),i.copy(this.target).add(fn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=fn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new j(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new j(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=fn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Nu.origin.copy(this.object.position),Nu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Nu.direction))<jA?this.object.lookAt(this.target):(Pv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Nu.intersectPlane(Pv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>Hh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Hh||this._lastTargetPosition.distanceToSquared(this.target)>Hh?(this.dispatchEvent(Ov),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?kn/60*this.autoRotateSpeed*t:kn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){fn.setFromMatrixColumn(i,0),fn.multiplyScalar(-t),this._panOffset.add(fn)}_panUp(t,i){this.screenSpacePanning===!0?fn.setFromMatrixColumn(i,1):(fn.setFromMatrixColumn(i,0),fn.crossVectors(this.object.up,fn)),fn.multiplyScalar(t),this._panOffset.add(fn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;fn.copy(l).sub(this.target);let u=fn.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),u=.5*(t.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new kt,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function KA(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function QA(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function JA(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(x0),this.state=Be.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function $A(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Rr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Be.DOLLY;break;case Rr.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Be.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Be.ROTATE}break;case Rr.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Be.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Be.PAN}break;default:this.state=Be.NONE}this.state!==Be.NONE&&this.dispatchEvent(jd)}function t1(o){switch(this.state){case Be.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Be.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Be.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function e1(o){this.enabled===!1||this.enableZoom===!1||this.state!==Be.NONE||(o.preventDefault(),this.dispatchEvent(jd),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(x0))}function n1(o){this.enabled!==!1&&this._handleKeyDown(o)}function i1(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case br.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Be.TOUCH_ROTATE;break;case br.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Be.TOUCH_PAN;break;default:this.state=Be.NONE}break;case 2:switch(this.touches.TWO){case br.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Be.TOUCH_DOLLY_PAN;break;case br.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Be.TOUCH_DOLLY_ROTATE;break;default:this.state=Be.NONE}break;default:this.state=Be.NONE}this.state!==Be.NONE&&this.dispatchEvent(jd)}function a1(o){switch(this._trackPointer(o),this.state){case Be.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Be.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Be.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Be.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Be.NONE}}function s1(o){this.enabled!==!1&&o.preventDefault()}function r1(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function o1(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Zo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const l1=new d0(-1,1,1,-1,0,1);class u1 extends di{constructor(){super(),this.setAttribute("position",new zn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new zn([0,2,0,0,2,0],2))}}const c1=new u1;class S0{constructor(t){this._mesh=new Ni(c1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,l1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}const ku={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class f1 extends Zo{constructor(t,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,t instanceof Xn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Yu.clone(t.uniforms),this.material=new Xn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new S0(this.material)}render(t,i,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class zv extends Zo{constructor(t,i){super(),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,i,s){const l=t.getContext(),u=t.state;u.buffers.color.setMask(!1),u.buffers.depth.setMask(!1),u.buffers.color.setLocked(!0),u.buffers.depth.setLocked(!0);let h,d;this.inverse?(h=0,d=1):(h=1,d=0),u.buffers.stencil.setTest(!0),u.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),u.buffers.stencil.setFunc(l.ALWAYS,h,4294967295),u.buffers.stencil.setClear(d),u.buffers.stencil.setLocked(!0),t.setRenderTarget(s),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),u.buffers.color.setLocked(!1),u.buffers.depth.setLocked(!1),u.buffers.color.setMask(!0),u.buffers.depth.setMask(!0),u.buffers.stencil.setLocked(!1),u.buffers.stencil.setFunc(l.EQUAL,1,4294967295),u.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),u.buffers.stencil.setLocked(!0)}}class h1 extends Zo{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class d1{constructor(t,i){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),i===void 0){const s=t.getSize(new kt);this._width=s.width,this._height=s.height,i=new Mi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ua}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new f1(ku),this.copyPass.material.blending=la,this.clock=new oM}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const i=this.passes.indexOf(t);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(t){for(let i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const i=this.renderer.getRenderTarget();let s=!1;for(let l=0,u=this.passes.length;l<u;l++){const h=this.passes[l];if(h.enabled!==!1){if(h.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),h.render(this.renderer,this.writeBuffer,this.readBuffer,t,s),h.needsSwap){if(s){const d=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),m.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}zv!==void 0&&(h instanceof zv?s=!0:h instanceof h1&&(s=!1))}}this.renderer.setRenderTarget(i)}reset(t){if(t===void 0){const i=this.renderer.getSize(new kt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,i){this._width=t,this._height=i;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let u=0;u<this.passes.length;u++)this.passes[u].setSize(s,l)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class p1 extends Zo{constructor(t,i,s=null,l=null,u=null){super(),this.scene=t,this.camera=i,this.overrideMaterial=s,this.clearColor=l,this.clearAlpha=u,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ge}render(t,i,s){const l=t.autoClear;t.autoClear=!1;let u,h;this.overrideMaterial!==null&&(h=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(u=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(u),this.overrideMaterial!==null&&(this.scene.overrideMaterial=h),t.autoClear=l}}const m1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ge(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Pr extends Zo{constructor(t,i=1,s,l){super(),this.strength=i,this.radius=s,this.threshold=l,this.resolution=t!==void 0?new kt(t.x,t.y):new kt(256,256),this.clearColor=new ge(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let u=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);this.renderTargetBright=new Mi(u,h,{type:ua}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const v=new Mi(u,h,{type:ua});v.texture.name="UnrealBloomPass.h"+g,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const x=new Mi(u,h,{type:ua});x.texture.name="UnrealBloomPass.v"+g,x.texture.generateMipmaps=!1,this.renderTargetsVertical.push(x),u=Math.round(u/2),h=Math.round(h/2)}const d=m1;this.highPassUniforms=Yu.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Xn({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const m=[3,5,7,9,11];u=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new kt(1/u,1/h),u=Math.round(u/2),h=Math.round(h/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Yu.clone(ku.uniforms),this.blendMaterial=new Xn({uniforms:this.copyUniforms,vertexShader:ku.vertexShader,fragmentShader:ku.fragmentShader,blending:Xh,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ge,this._oldClearAlpha=1,this._basic=new Xd,this._fsQuad=new S0(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,i){let s=Math.round(t/2),l=Math.round(i/2);this.renderTargetBright.setSize(s,l);for(let u=0;u<this.nMips;u++)this.renderTargetsHorizontal[u].setSize(s,l),this.renderTargetsVertical[u].setSize(s,l),this.separableBlurMaterials[u].uniforms.invSize.value=new kt(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2)}render(t,i,s,l,u){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const h=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),u&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let d=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[m].uniforms.direction.value=Pr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[m]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=Pr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[m]),t.clear(),this._fsQuad.render(t),d=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,u&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(s),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=h}_getSeparableBlurMaterial(t){const i=[];for(let s=0;s<t;s++)i.push(.39894*Math.exp(-.5*s*s/(t*t))/t);return new Xn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new kt(.5,.5)},direction:{value:new kt(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new Xn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Pr.BlurDirectionX=new kt(1,0);Pr.BlurDirectionY=new kt(0,1);const Gh=1e3,Vh=5,g1=33,_1=33,v1=5,x1=.25,Bv=100,S1=50,y1=200,M1=100,E1=3,Iv=2,T1=100,b1=100,A1=.2;let Ou=[];const Tr={percentage:[76.45,12.1,7.6,3,.6,.13],color:[16764015,16765601,16774378,16316415,13293567,11190271],size:[.7,.7,1.15,1.48,2,2.5,3.5]};function R1(){const o=kh.useRef(null);return kh.useEffect(()=>{const t=new Ky,i=new fi(75,window.innerWidth/window.innerHeight,.1,5e3),s=new qA;s.setSize(window.innerWidth,window.innerHeight),s.setAnimationLoop(_),o.current&&o.current.appendChild(s.domElement);const l=new p1(t,i),u=new Pr(new kt(window.innerWidth,window.innerHeight),1.5,.4,.85);u.threshold=0,u.strength=3,u.radius=0;const h=new d1(s);h.setSize(window.innerWidth,window.innerHeight),h.renderToScreen=!0,h.addPass(l),h.addPass(u);const d=new ZA(i,s.domElement);d.target.set(0,0,0),d.update(),i.position.z=1e3,i.position.y=-300,new uM(5),new lM(100,50).rotateX(Math.PI/2);function p(O=0,N=1){let w=1-Math.random(),B=Math.random();return Math.sqrt(-2*Math.log(w))*Math.cos(2*Math.PI*B)*N+O}function g(){let O=Math.random()*100,N=Tr.percentage;for(let w=0;w<N.length;w++)if(O-=N[w],O<0)return w;return 0}function v(O,N){let B=O.distanceTo(i.position)/250*Tr.size[N];return B=Math.min(Math.max(x1,B),v1),new j(B,B,B)}function x(O,N,w,B){let V=Math.sqrt(O**2+N**2),I=B;return I+=O>0?Math.atan(N/O):Math.atan(N/O)+Math.PI,I+=V/Bv*E1,new j(V*Math.cos(I),V*Math.sin(I),w)}const M=new rv().load("sprite120.png"),b=Tr.color.map(O=>new Ld({map:M,color:O}));window.addEventListener("resize",R,!1);function R(){i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)}for(let O=0;O<Gh/4;O++){let N=new j(p(0,g1),p(0,_1),p(0,Vh));const w={};w.type=g(),w.mesh=new Uh(b[w.type]),w.mesh.scale.multiplyScalar(Tr.size[w.type]),w.mesh.position.copy(N),t.add(w.mesh),Ou.push(w)}for(let O=0;O<Gh/4;O++){let N=new j(p(0,T1),p(0,b1),p(0,Vh));const w={};w.type=g(),w.mesh=new Uh(b[w.type]),w.mesh.scale.multiplyScalar(Tr.size[w.type]),w.mesh.position.copy(N),t.add(w.mesh),Ou.push(w)}for(let O=0;O<Iv;O++)for(let N=0;N<Gh/4;N++){let w=x(p(y1,Bv),p(M1,S1),p(0,Vh),O*2*Math.PI/Iv);const B={};B.type=g(),B.mesh=new Uh(b[B.type]),B.mesh.scale.multiplyScalar(Tr.size[B.type]),B.mesh.position.copy(w),t.add(B.mesh),Ou.push(B)}const y=new rv().load("feathered60.png");new Ld({map:y,color:33535,opacity:A1,depthTest:!1,depthWrite:!1});function _(){s.render(t,i),h.render(),Ou.forEach(O=>{O.mesh.scale.copy(v(O.mesh.position,O.type))}),t.rotation.x=-.4,t.rotation.y=.3,t.rotation.z-=.001}},[]),Wt.jsx("div",{ref:o,className:"-z-1"})}function C1(){return Wt.jsxs("section",{className:"h-screen min-h-80 flex flex-col items-center mt-5",children:[Wt.jsx("h1",{className:"mt-30 font-bold text-2xl md:text-4xl text-center mb-5",children:"Hi, I'm Gavin"}),Wt.jsx("p",{className:"max-w-xl text-md/loose text-center",children:"I am a full-stack developer who aims to create web applications with innovative ideas and great user experience."}),Wt.jsx(R1,{})]})}const w1=[{id:1,name:"About",link:"#aboutSection"},{id:2,name:"Experience",link:"#experienceSection"},{id:3,name:"Projects",link:"#projectSection"}],D1=[{id:1,title:"Higer Diploma In Mechanical Engineering",time:"2018 - 2020",description:"Graduated from Tsing Yi HKIVE.",imgPath:" "},{id:2,title:"WorldSkills 2022 Mobile Robotics Competition",time:"2020 - 2022",description:"Representing Hong Kong and compete against 17 countries, getting Medallion for Excellence in the competition.",imgPath:"worldskills2.jpg"},{id:3,title:"Software Quality Assurance Training",time:"2024 - 2025",description:"",imgPath:" "},{id:4,title:"Junior Full-Stack Bootcamp",time:"2025 - Present",description:"",imgPath:" "}],U1=[{id:1,name:"HTML",imgPath:"html.png"},{id:2,name:"CSS",imgPath:"css.png"},{id:3,name:"JavaScript",imgPath:"javascript.png"},{id:4,name:"React",imgPath:"reactjs.png"},{id:5,name:"NodeJs",imgPath:"nodejs.png"},{id:6,name:"TailWind",imgPath:"tailwind.png"},{id:7,name:"ExpressJs",imgPath:"expressJs.png"}],L1=[{id:1,name:"3D Interactive Piano",imgPath:"projectPiano.png",description:"A 3D Piano with animations and sound built with three js, blender and web audio api, which can be played with keyboard and mouse."},{id:2,name:"MTR Web Application",imgPath:"mtr.png",description:"A web application which fetches real time data from MTR and shows arrival time of the train."},{id:3,name:"KMB Web Application",imgPath:"kmb.png",description:"Another web application that fetches KMB data and show infomations to the user, such as bus arrival time, bus stop infomation."},{id:4,name:"BJJ Database Web Application (Work in progress...)",imgPath:"bjjweb.png",description:"My first full-stack web application that is built with react and firebase. It is a platform for visitors to learn about Brazilian JiuJitsu"}];function N1(){return Wt.jsxs("section",{className:"flex flex-col items-center gap-5 px-5 w-full mt-20",children:[Wt.jsx("h1",{className:"text-3xl md:text-5xl font-bold text-center mb-10 mt-10 text-green-400",children:"Tech Stack"}),Wt.jsx("ul",{className:"grid grid-cols-3 md:grid-cols-4 gap-5",children:U1.map(o=>Wt.jsxs("li",{className:"w-full flex flex-col items-center",children:[Wt.jsx("img",{src:o.imgPath,className:"object-scale-down w-30"}),Wt.jsx("div",{className:"text-sm mt-2",children:o.name})]},o.id))})]})}function O1({id:o,name:t,description:i,imgPath:s}){return Wt.jsxs("div",{className:"border-2 border-yellow-300 w-full min-w-60 max-w-100 rounded-xl overflow-hidden mx-auto",children:[Wt.jsx("img",{src:s}),Wt.jsx("h1",{className:"text-center text-lg mt-5 px-5 font-bold",children:t}),Wt.jsx("p",{className:"p-3 text-xs/normal ml-4",children:i})]})}function P1(){return Wt.jsxs("section",{id:"projectSection",className:"w-full mt-20",children:[Wt.jsx("h1",{className:"text-3xl md:text-5xl font-bold mt-10 text-center text-yellow-300",children:"Projects"}),Wt.jsx("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10",children:L1.map(o=>Wt.jsx(O1,{name:o.name,imgPath:o.imgPath,description:o.description},o.id))})]})}function Fv({onClick:o}){return Wt.jsx("ul",{className:"flex flex-col gap-4 m-7 md:m-0 md:flex-row text-neutral-400 font-bold text-lg",children:w1.map(t=>Wt.jsx("li",{children:Wt.jsx("a",{onClick:o,href:t.link,className:"cursor-pointer hover:text-white transition-colors",children:t.name})},t.id))})}function z1(){const[o,t]=kh.useState(!1);function i(){t(s=>!s)}return Wt.jsxs("header",{className:"fixed flex flex-col justify-center top-0 w-full min-w-70 z-50 bg-black",children:[Wt.jsxs("div",{className:"max-w-7xl w-full p-5 flex justify-between",children:[Wt.jsxs("div",{className:"flex items-center gap-5",children:[Wt.jsx("a",{href:"/portfolio/",className:"text-neutral-400 text-lg font-bold hover:text-white transition-colors",children:"Gavin Lui"}),Wt.jsx("a",{href:"https://github.com/kakitgavin",target:"_blank",children:Wt.jsx("img",{src:"github.png",className:"w-10"})})]}),Wt.jsx("button",{onClick:i,className:"md:hidden cursor-pointer",children:Wt.jsx("img",{src:o?"close.svg":"hamburger-menu.svg",className:"w-5 h-5 mx-2"})}),Wt.jsx("nav",{className:"md:flex hidden",children:Wt.jsx(Fv,{})})]}),Wt.jsx("nav",{className:`bg-white/10 w-full overflow-hidden self-start ${o?"max-h-screen":"max-h-0"} md:hidden`,children:Wt.jsx(Fv,{onClick:i})})]})}function B1(){return Wt.jsx("section",{id:"aboutSection",className:"flex flex-col items-center gap-5 px-5 w-full",children:Wt.jsxs("div",{children:[Wt.jsx("h1",{className:"text-3xl md:text-5xl font-bold text-center mb-10 mt-10 text-blue-500",children:"About Me"}),Wt.jsx("p",{className:"text-sm/loose max-w-xl mb-5",children:"After competing in the WorldSkills 2022 Mobile Robotics, I found my passion in software development while creating games with c++. Currently inspired to become a full-stack developer who can build creative web-applications and provide innovative solutions to real life situations."})]})})}function I1(){return Wt.jsxs("section",{id:"experienceSection",className:"flex flex-col w-full mt-20",children:[Wt.jsx("h1",{className:"text-2xl md:text-4xl/snug font-bold mt-10 mx-auto text-center text-pink-500",children:"Experience and Educations"}),Wt.jsx("ul",{className:"mx-auto",children:D1.map(o=>Wt.jsxs("li",{className:"p-5 m-10 max-w-xl rounded-xl border-3 border-pink-500/20",children:[Wt.jsx("h1",{className:"text-lg mb-2 rounded-sm",children:o.title}),Wt.jsx("div",{className:"font-light text-xs mb-5",children:o.time}),Wt.jsx("img",{className:"object-scale-down w-3/4 mx-auto mb-6 rounded-2xl",src:o.imgPath}),Wt.jsx("div",{className:"text-sm/loose w-full",children:o.description})]},o.id))})]})}function F1(){return Wt.jsxs("main",{className:"max-w-7xl min-w-70 mx-auto",children:[Wt.jsx(z1,{}),Wt.jsx(C1,{}),Wt.jsx(B1,{}),Wt.jsx(N1,{}),Wt.jsx(I1,{}),Wt.jsx(P1,{})]})}LS.createRoot(document.getElementById("root")).render(Wt.jsx(F1,{}));
