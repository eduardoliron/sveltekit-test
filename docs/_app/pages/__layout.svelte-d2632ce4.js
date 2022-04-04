import{F as ne,S as re,i as oe,s as ie,e as u,k as I,G as V,t as D,c as f,a as c,d as l,m as H,H as x,h as N,I as ve,b as e,J as z,g as T,K as s,E as se,L as ue,M as fe,w as _e,x as de,y as he,N as pe,O as me,P as ge,q as ae,o as le,B as be}from"../chunks/index-1f44558d.js";const Ee=()=>{const o=ne("__svelte__");return{page:{subscribe:o.page.subscribe},navigating:{subscribe:o.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:o.navigating.subscribe}},session:o.session,updated:o.updated}},we={subscribe(o){return Ee().page.subscribe(o)}};var $e="/_app/assets/svelte-logo-87df40b8.svg";function qe(o){let a,d,i,n,m,w,p,_,q,S,v,b,r,t,h,$,g,B,F,A,L,G,P,y,M,R,O;return{c(){a=u("header"),d=u("div"),i=u("a"),n=u("img"),w=I(),p=u("nav"),_=V("svg"),q=V("path"),S=I(),v=u("ul"),b=u("li"),r=u("a"),t=D("Home"),h=I(),$=u("li"),g=u("a"),B=D("About"),F=I(),A=u("li"),L=u("a"),G=D("Todos"),P=I(),y=V("svg"),M=V("path"),R=I(),O=u("div"),this.h()},l(k){a=f(k,"HEADER",{class:!0});var E=c(a);d=f(E,"DIV",{class:!0});var Z=c(d);i=f(Z,"A",{href:!0,class:!0});var J=c(i);n=f(J,"IMG",{src:!0,alt:!0,class:!0}),J.forEach(l),Z.forEach(l),w=H(E),p=f(E,"NAV",{class:!0});var C=c(p);_=x(C,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var U=c(_);q=x(U,"path",{d:!0,class:!0}),c(q).forEach(l),U.forEach(l),S=H(C),v=f(C,"UL",{class:!0});var K=c(v);b=f(K,"LI",{class:!0});var j=c(b);r=f(j,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var Q=c(r);t=N(Q,"Home"),Q.forEach(l),j.forEach(l),h=H(K),$=f(K,"LI",{class:!0});var W=c($);g=f(W,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var X=c(g);B=N(X,"About"),X.forEach(l),W.forEach(l),F=H(K),A=f(K,"LI",{class:!0});var Y=c(A);L=f(Y,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var ee=c(L);G=N(ee,"Todos"),ee.forEach(l),Y.forEach(l),K.forEach(l),P=H(C),y=x(C,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var te=c(y);M=x(te,"path",{d:!0,class:!0}),c(M).forEach(l),te.forEach(l),C.forEach(l),R=H(E),O=f(E,"DIV",{class:!0});var ce=c(O);ce.forEach(l),E.forEach(l),this.h()},h(){ve(n.src,m=$e)||e(n,"src",m),e(n,"alt","SvelteKit"),e(n,"class","svelte-t2wq17"),e(i,"href","https://kit.svelte.dev"),e(i,"class","svelte-t2wq17"),e(d,"class","corner svelte-t2wq17"),e(q,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),e(q,"class","svelte-t2wq17"),e(_,"viewBox","0 0 2 3"),e(_,"aria-hidden","true"),e(_,"class","svelte-t2wq17"),e(r,"sveltekit:prefetch",""),e(r,"href","/"),e(r,"class","svelte-t2wq17"),e(b,"class","svelte-t2wq17"),z(b,"active",o[0].url.pathname==="/"),e(g,"sveltekit:prefetch",""),e(g,"href","/about"),e(g,"class","svelte-t2wq17"),e($,"class","svelte-t2wq17"),z($,"active",o[0].url.pathname==="/about"),e(L,"sveltekit:prefetch",""),e(L,"href","/todos"),e(L,"class","svelte-t2wq17"),e(A,"class","svelte-t2wq17"),z(A,"active",o[0].url.pathname==="/todos"),e(v,"class","svelte-t2wq17"),e(M,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),e(M,"class","svelte-t2wq17"),e(y,"viewBox","0 0 2 3"),e(y,"aria-hidden","true"),e(y,"class","svelte-t2wq17"),e(p,"class","svelte-t2wq17"),e(O,"class","corner svelte-t2wq17"),e(a,"class","svelte-t2wq17")},m(k,E){T(k,a,E),s(a,d),s(d,i),s(i,n),s(a,w),s(a,p),s(p,_),s(_,q),s(p,S),s(p,v),s(v,b),s(b,r),s(r,t),s(v,h),s(v,$),s($,g),s(g,B),s(v,F),s(v,A),s(A,L),s(L,G),s(p,P),s(p,y),s(y,M),s(a,R),s(a,O)},p(k,[E]){E&1&&z(b,"active",k[0].url.pathname==="/"),E&1&&z($,"active",k[0].url.pathname==="/about"),E&1&&z(A,"active",k[0].url.pathname==="/todos")},i:se,o:se,d(k){k&&l(a)}}}function ke(o,a,d){let i;return ue(o,we,n=>d(0,i=n)),[i]}class Ae extends re{constructor(a){super(),oe(this,a,ke,qe,ie,{})}}function Le(o){let a,d,i,n,m,w,p,_,q,S,v;a=new Ae({});const b=o[1].default,r=fe(b,o,o[0],null);return{c(){_e(a.$$.fragment),d=I(),i=u("main"),r&&r.c(),n=I(),m=u("footer"),w=u("p"),p=D("visit "),_=u("a"),q=D("kit.svelte.dev"),S=D(" to learn SvelteKit"),this.h()},l(t){de(a.$$.fragment,t),d=H(t),i=f(t,"MAIN",{class:!0});var h=c(i);r&&r.l(h),h.forEach(l),n=H(t),m=f(t,"FOOTER",{class:!0});var $=c(m);w=f($,"P",{});var g=c(w);p=N(g,"visit "),_=f(g,"A",{href:!0,class:!0});var B=c(_);q=N(B,"kit.svelte.dev"),B.forEach(l),S=N(g," to learn SvelteKit"),g.forEach(l),$.forEach(l),this.h()},h(){e(i,"class","svelte-1izrdc8"),e(_,"href","https://kit.svelte.dev"),e(_,"class","svelte-1izrdc8"),e(m,"class","svelte-1izrdc8")},m(t,h){he(a,t,h),T(t,d,h),T(t,i,h),r&&r.m(i,null),T(t,n,h),T(t,m,h),s(m,w),s(w,p),s(w,_),s(_,q),s(w,S),v=!0},p(t,[h]){r&&r.p&&(!v||h&1)&&pe(r,b,t,t[0],v?ge(b,t[0],h,null):me(t[0]),null)},i(t){v||(ae(a.$$.fragment,t),ae(r,t),v=!0)},o(t){le(a.$$.fragment,t),le(r,t),v=!1},d(t){be(a,t),t&&l(d),t&&l(i),r&&r.d(t),t&&l(n),t&&l(m)}}}function ye(o,a,d){let{$$slots:i={},$$scope:n}=a;return o.$$set=m=>{"$$scope"in m&&d(0,n=m.$$scope)},[n,i]}class He extends re{constructor(a){super(),oe(this,a,ye,Le,ie,{})}}export{He as default};
