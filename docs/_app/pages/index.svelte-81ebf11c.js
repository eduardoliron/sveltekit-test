import{Q,R as ee,S as X,i as Y,s as Z,e as b,G as V,k as R,t as $,c as y,a as v,H as q,d as f,m as C,h as N,b as n,f as W,g as H,K as o,T as z,j as F,E as L,U as te,L as se,w as re,V as oe,x as ae,I as ne,y as le,q as ie,o as ce,B as de}from"../chunks/index-1f44558d.js";import{w as ue}from"../chunks/index-3590d08e.js";function J(t){return Object.prototype.toString.call(t)==="[object Date]"}function K(t,s,e,a){if(typeof e=="number"||J(e)){const l=a-e,r=(e-s)/(t.dt||1/60),d=t.opts.stiffness*l,i=t.opts.damping*r,u=(d-i)*t.inv_mass,m=(r+u)*t.dt;return Math.abs(m)<t.opts.precision&&Math.abs(l)<t.opts.precision?a:(t.settled=!1,J(e)?new Date(e.getTime()+m):e+m)}else{if(Array.isArray(e))return e.map((l,r)=>K(t,s[r],e[r],a[r]));if(typeof e=="object"){const l={};for(const r in e)l[r]=K(t,s[r],e[r],a[r]);return l}else throw new Error(`Cannot spring ${typeof e} values`)}}function fe(t,s={}){const e=ue(t),{stiffness:a=.15,damping:l=.8,precision:r=.01}=s;let d,i,u,m=t,k=t,M=1,x=0,E=!1;function w(p,h={}){k=p;const S=u={};if(t==null||h.hard||T.stiffness>=1&&T.damping>=1)return E=!0,d=Q(),m=p,e.set(t=k),Promise.resolve();if(h.soft){const _=h.soft===!0?.5:+h.soft;x=1/(_*60),M=0}return i||(d=Q(),E=!1,i=ee(_=>{if(E)return E=!1,i=null,!1;M=Math.min(M+x,1);const I={inv_mass:M,opts:T,settled:!0,dt:(_-d)*60/1e3},c=K(I,m,t,k);return d=_,m=t,e.set(t=c),I.settled&&(i=null),!I.settled})),new Promise(_=>{i.promise.then(()=>{S===u&&_()})})}const T={set:w,update:(p,h)=>w(p(k,t),h),subscribe:e.subscribe,stiffness:a,damping:l,precision:r};return T}function pe(t){let s,e,a,l,r,d,i,u,m=Math.floor(t[1]+1)+"",k,M,x,E=Math.floor(t[1])+"",w,T,p,h,S,_,I;return{c(){s=b("div"),e=b("button"),a=V("svg"),l=V("path"),r=R(),d=b("div"),i=b("div"),u=b("strong"),k=$(m),M=R(),x=b("strong"),w=$(E),T=R(),p=b("button"),h=V("svg"),S=V("path"),this.h()},l(c){s=y(c,"DIV",{class:!0});var g=v(s);e=y(g,"BUTTON",{"aria-label":!0,class:!0});var j=v(e);a=q(j,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var O=v(a);l=q(O,"path",{d:!0,class:!0}),v(l).forEach(f),O.forEach(f),j.forEach(f),r=C(g),d=y(g,"DIV",{class:!0});var G=v(d);i=y(G,"DIV",{class:!0,style:!0});var B=v(i);u=y(B,"STRONG",{class:!0,"aria-hidden":!0});var D=v(u);k=N(D,m),D.forEach(f),M=C(B),x=y(B,"STRONG",{class:!0});var U=v(x);w=N(U,E),U.forEach(f),B.forEach(f),G.forEach(f),T=C(g),p=y(g,"BUTTON",{"aria-label":!0,class:!0});var P=v(p);h=q(P,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var A=v(h);S=q(A,"path",{d:!0,class:!0}),v(S).forEach(f),A.forEach(f),P.forEach(f),g.forEach(f),this.h()},h(){n(l,"d","M0,0.5 L1,0.5"),n(l,"class","svelte-sx9eo4"),n(a,"aria-hidden","true"),n(a,"viewBox","0 0 1 1"),n(a,"class","svelte-sx9eo4"),n(e,"aria-label","Decrease the counter by one"),n(e,"class","svelte-sx9eo4"),n(u,"class","hidden svelte-sx9eo4"),n(u,"aria-hidden","true"),n(x,"class","svelte-sx9eo4"),n(i,"class","counter-digits svelte-sx9eo4"),W(i,"transform","translate(0, "+100*t[2]+"%)"),n(d,"class","counter-viewport svelte-sx9eo4"),n(S,"d","M0,0.5 L1,0.5 M0.5,0 L0.5,1"),n(S,"class","svelte-sx9eo4"),n(h,"aria-hidden","true"),n(h,"viewBox","0 0 1 1"),n(h,"class","svelte-sx9eo4"),n(p,"aria-label","Increase the counter by one"),n(p,"class","svelte-sx9eo4"),n(s,"class","counter svelte-sx9eo4")},m(c,g){H(c,s,g),o(s,e),o(e,a),o(a,l),o(s,r),o(s,d),o(d,i),o(i,u),o(u,k),o(i,M),o(i,x),o(x,w),o(s,T),o(s,p),o(p,h),o(h,S),_||(I=[z(e,"click",t[4]),z(p,"click",t[5])],_=!0)},p(c,[g]){g&2&&m!==(m=Math.floor(c[1]+1)+"")&&F(k,m),g&2&&E!==(E=Math.floor(c[1])+"")&&F(w,E),g&4&&W(i,"transform","translate(0, "+100*c[2]+"%)")},i:L,o:L,d(c){c&&f(s),_=!1,te(I)}}}function he(t,s){return(t%s+s)%s}function me(t,s,e){let a,l,r=0;const d=fe();se(t,d,m=>e(1,l=m));const i=()=>e(0,r-=1),u=()=>e(0,r+=1);return t.$$.update=()=>{t.$$.dirty&1&&d.set(r),t.$$.dirty&2&&e(2,a=he(l,1))},[r,l,a,d,i,u]}class _e extends X{constructor(s){super(),Y(this,s,me,pe,Z,{})}}function ve(t){let s,e,a,l,r,d,i,u,m,k,M,x,E,w,T,p,h,S,_,I;return _=new _e({}),{c(){s=R(),e=b("section"),a=b("h1"),l=b("div"),r=b("picture"),d=b("source"),i=R(),u=b("img"),k=$(`

		to your new`),M=b("br"),x=$("SvelteKit app"),E=R(),w=b("h2"),T=$("try editing "),p=b("strong"),h=$("src/routes/index.svelte"),S=R(),re(_.$$.fragment),this.h()},l(c){oe('[data-svelte="svelte-1anpopb"]',document.head).forEach(f),s=C(c),e=y(c,"SECTION",{class:!0});var j=v(e);a=y(j,"H1",{class:!0});var O=v(a);l=y(O,"DIV",{class:!0});var G=v(l);r=y(G,"PICTURE",{});var B=v(r);d=y(B,"SOURCE",{srcset:!0,type:!0}),i=C(B),u=y(B,"IMG",{src:!0,alt:!0,class:!0}),B.forEach(f),G.forEach(f),k=N(O,`

		to your new`),M=y(O,"BR",{}),x=N(O,"SvelteKit app"),O.forEach(f),E=C(j),w=y(j,"H2",{});var D=v(w);T=N(D,"try editing "),p=y(D,"STRONG",{});var U=v(p);h=N(U,"src/routes/index.svelte"),U.forEach(f),D.forEach(f),S=C(j),ae(_.$$.fragment,j),j.forEach(f),this.h()},h(){document.title="Home",n(d,"srcset","svelte-welcome.webp"),n(d,"type","image/webp"),ne(u.src,m="svelte-welcome.png")||n(u,"src",m),n(u,"alt","Welcome"),n(u,"class","svelte-mjk9ig"),n(l,"class","welcome svelte-mjk9ig"),n(a,"class","svelte-mjk9ig"),n(e,"class","svelte-mjk9ig")},m(c,g){H(c,s,g),H(c,e,g),o(e,a),o(a,l),o(l,r),o(r,d),o(r,i),o(r,u),o(a,k),o(a,M),o(a,x),o(e,E),o(e,w),o(w,T),o(w,p),o(p,h),o(e,S),le(_,e,null),I=!0},p:L,i(c){I||(ie(_.$$.fragment,c),I=!0)},o(c){ce(_.$$.fragment,c),I=!1},d(c){c&&f(s),c&&f(e),de(_)}}}const ye=!0;class Ee extends X{constructor(s){super(),Y(this,s,null,ve,Z,{})}}export{Ee as default,ye as prerender};
