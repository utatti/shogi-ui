'use strict';(function(E){function m(a){const b={},c={};for(const d in a){const f=a[d];Array.isArray(f)?(b[d]=f[n.m],c[d]=f[n.j]):(b[d]=f,c[d]=f)}return[b,c]}function t(a,b){const c=g("div",{"class":e.a+" "+e.o});var d=b.sente?n.m:n.j;b=g("svg",p.root[d]);b.appendChild(g("polygon",p.a[d]));b.appendChild(g("polygon",p.C[d]));d=g("text",p.D[d]);d.textContent=a;b.appendChild(d);c.appendChild(b);return c}function k(a,b){return a.querySelector(`[data-suji="${b.suji}"][data-dan="${b.dan}"]`)}function u(a){a.classList.add(e.b)}
function v(a){a.classList.remove(e.b)}function w(a){return a.classList.contains(e.b)}function q(a,b){return l(k(a,b))}function l(a){return a.querySelector("."+e.a)||null}function x(a){a.classList.add(e.c)}function y(a){a.classList.remove(e.c)}function z(a){return a.classList.contains(e.c)}function A(a,b){a=k(a,b);(b=l(a))&&a.removeChild(b)}function B(a){return a.textContent.trim()}function r(a){return(a=l(a))&&B(a)}function g(a,b={}){a=F.has(a)?document.createElementNS("http://www.w3.org/2000/svg",
a):document.createElement(a);for(const c in b)a.setAttribute(c,b[c]);return a}const e={o:"shogi__square",s:"shogi__board",u:"shogi__board__content",H:"shogi__suji_text_row",G:"shogi__suji_text",i:"shogi__dan_text",B:"shogi__dan_row",v:"shogi__board__dot",A:"shogi__cell",b:"shogi__cell--highlighted",a:"shogi__koma",c:"shogi__koma--selected",F:"shogi__mochigomas",l:"shogi__mochigomas--gote",f:"shogi__mochigoma",h:"shogi__mochigoma__koma",g:"shogi__mochigoma__count"},n={m:0,j:1},p={root:m({viewBox:"0 0 250 250"}),
a:m({points:["125,0 195,30 235,238 15,238 55,30","125,238 195,208 235,0 15,0 55,208"],fill:"rgb(221,190,138)"}),C:m({points:["15,238 235,238 232,250 18,250","125,238 195,208 192,220 125,250 58,220 55,208"],fill:"rgb(133,111,83)"}),D:m({"text-anchor":"middle","dominant-baseline":"middle","font-size":"120px",x:"125",y:["145","93"],transform:["","rotate(180,125,93)"]})},F=new Set(["svg","polygon","text"]),G="\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341".split("");E.Shogi={komaTypes:"\u738b\u7389\u98db\u9f8d\u89d2\u99ac\u91d1\u9280\u5168\u6842\u572d\u9999\u674f\u6b69\u3068".split(""),
komaDiv:t,boardDiv:function(){const a=g("div",{"class":e.s+" "+e.o}),b=g("div",{"class":e.u});a.appendChild(b);var c=g("div",{"class":e.H});for(var d=9;1<=d;d--){var f=g("div",{"class":e.G});f.textContent=d;c.appendChild(f)}c.appendChild(g("div",{"class":e.i}));b.appendChild(c);for(c=1;9>=c;c++){d=g("div",{"class":e.B});for(f=9;1<=f;f--){if(!(3!=f&&6!=f||3!=c&&6!=c)){var h=g("div",{"class":e.v});d.appendChild(h)}h=g("div",{"class":e.A});h.dataset.suji=f;h.dataset.dan=c;d.appendChild(h)}f=g("div",
{"class":e.i});h=g("span");h.textContent=G[c-1];f.appendChild(h);d.appendChild(f);b.appendChild(d)}return a},mochigomasDiv:function(){const a=g("div",{"class":e.F});for(let b=0;7>b;b++){const c=g("div",{"class":e.f});c.appendChild(g("div",{"class":e.h}));c.appendChild(g("div",{"class":e.g}));a.appendChild(c)}return a},cellAt:k,cellPosition:function(a){return{suji:parseInt(a.dataset.suji,10),dan:parseInt(a.dataset.dan,10)}},highlightCell:u,unhighlightCell:v,highlightCellAt:function(a,b){u(k(a,b))},
unhighlightCellAt:function(a,b){v(k(a,b))},cellHighlighted:w,cellHighlightedAt:function(a,b){return w(k(a,b))},komaAt:q,komaIn:l,selectKoma:x,unselectKoma:y,komaSelected:z,selectKomaAt:function(a,b){(a=q(a,b))&&x(a)},unselectKomaAt:function(a,b){(a=q(a,b))&&y(a)},komaSelectedAt:function(a,b){return(a=q(a,b))&&z(a)},putKomaAt:function(a,b,c){A(a,c);k(a,c).appendChild(b)},removeKomaAt:A,komaType:B,komaTypeAt:function(a,b){return r(k(a,b))},komaTypeIn:r,setMochigomas:function(a,b,c){c.sente?a.classList.remove(e.l):
a.classList.add(e.l);a=a.querySelectorAll("."+e.f);for(let f=0;7>f;f++){var d=a[f];const h=d.querySelector("."+e.h);d=d.querySelector("."+e.g);const C=l(h);C&&h.removeChild(C);d.textContent="";const {type:D,count:H}=b[f]||{};D&&(h.appendChild(t(D,c)),d.textContent=H)}},getMochigomas:function(a){a=a.querySelectorAll("."+e.f);const b=[];for(let f=0;7>f;f++){var c=a[f],d=c.querySelector("."+e.g);c=r(c.querySelector("."+e.h));d=parseInt(d.textContent,10);c&&(b[f]={type:c,count:d})}return b}}})("object"==
typeof globalThis?globalThis:window);
