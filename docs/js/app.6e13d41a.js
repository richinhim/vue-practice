(function(){"use strict";var n={503:function(n,t,o){var e=o(963),r=o(252);const u=(0,r._)("h2",null,"3-34.컴포지션 API- Reusability",-1);function a(n,t,o,e,a,i){const l=(0,r.up)("TestComponent");return(0,r.wg)(),(0,r.iD)("div",null,[u,(0,r.Wm)(l)])}const i=(0,r._)("h2",null,"3-34.컴포지션 API- Reusability",-1),l=(0,r._)("hr",null,null,-1),c=(0,r._)("hr",null,null,-1),d=(0,r._)("hr",null,null,-1);function s(n,t,o,e,u,a){const s=(0,r.up)("ProductStatus"),f=(0,r.up)("FeeStatus"),v=(0,r.up)("SavingStatus");return(0,r.wg)(),(0,r.iD)(r.HY,null,[i,l,(0,r.Wm)(s),c,(0,r.Wm)(f),d,(0,r.Wm)(v)],64)}var f=o(577);function v(n,t,o,e,u,a){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("h2",null,"합산된 요금:"+(0,f.zw)(e.totalMoney),1),(0,r._)("div",null,[(0,r._)("button",{onClick:t[0]||(t[0]=n=>e.addMoney(50))},"50"),(0,r._)("button",{onClick:t[1]||(t[1]=n=>e.addMoney(100))},"100"),(0,r._)("button",{onClick:t[2]||(t[2]=n=>e.addMoney(150))},"150"),(0,r._)("button",{onClick:t[3]||(t[3]=n=>e.addMoney(200))},"200")])],64)}var p=o(262);function y(n=0){const t=(0,p.iH)(n);function o(n){t.value+=n}return{totalMoney:t,addMoney:o}}var h=y,M={name:"feeStatus",setup(){const{addMoney:n,totalMoney:t}=h();return{addMoney:n,totalMoney:t}},components:{},data(){return{}},methods:{}},m=o(744);const b=(0,m.Z)(M,[["render",v]]);var _=b;function k(n,t,o,e,u,a){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",null,[(0,r._)("h2",null,"전체 금액: "+(0,f.zw)(e.totalMoney),1)]),(0,r._)("div",null,[(0,r._)("button",{onClick:t[0]||(t[0]=n=>e.addMoney(100))},"100"),(0,r._)("button",{onClick:t[1]||(t[1]=n=>e.addMoney(200))},"200"),(0,r._)("button",{onClick:t[2]||(t[2]=n=>e.addMoney(300))},"300"),(0,r._)("button",{onClick:t[3]||(t[3]=n=>e.addMoney(400))},"400")])],64)}var w={name:"productStatus",setup(){const{addMoney:n,totalMoney:t}=h();return{addMoney:n,totalMoney:t}},components:{},data(){return{}},methods:{}};const C=(0,m.Z)(w,[["render",k]]);var g=C;function O(n,t,o,e,u,a){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("h2",null,"총 적금:"+(0,f.zw)(e.totalMoney),1),(0,r._)("div",null,[(0,r._)("button",{onClick:t[0]||(t[0]=n=>e.addMoney(1e3))},"1000"),(0,r._)("button",{onClick:t[1]||(t[1]=n=>e.addMoney(2e3))},"2000"),(0,r._)("button",{onClick:t[2]||(t[2]=n=>e.addMoney(1150))},"1150"),(0,r._)("button",{onClick:t[3]||(t[3]=n=>e.addMoney(2200))},"2200")])],64)}var S={name:"savingStatus",setup(){const{addMoney:n,totalMoney:t}=h(5e3);return{addMoney:n,totalMoney:t}},components:{},data(){return{}},methods:{}};const j=(0,m.Z)(S,[["render",O]]);var P=j,D={name:"TestComponent",components:{FeeStatus:_,ProductStatus:g,SavingStatus:P},methods:{},setup(){return{}}};const H=(0,m.Z)(D,[["render",s]]);var T=H,Z={name:"App",components:{TestComponent:T},data(){return{}},provide(){return{}},computed:{},watch:{},directives:{},methods:{}};const x=(0,m.Z)(Z,[["render",a]]);var W=x;(0,e.ri)(W).mount("#app")}},t={};function o(e){var r=t[e];if(void 0!==r)return r.exports;var u=t[e]={exports:{}};return n[e](u,u.exports,o),u.exports}o.m=n,function(){var n=[];o.O=function(t,e,r,u){if(!e){var a=1/0;for(d=0;d<n.length;d++){e=n[d][0],r=n[d][1],u=n[d][2];for(var i=!0,l=0;l<e.length;l++)(!1&u||a>=u)&&Object.keys(o.O).every((function(n){return o.O[n](e[l])}))?e.splice(l--,1):(i=!1,u<a&&(a=u));if(i){n.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}u=u||0;for(var d=n.length;d>0&&n[d-1][2]>u;d--)n[d]=n[d-1];n[d]=[e,r,u]}}(),function(){o.d=function(n,t){for(var e in t)o.o(t,e)&&!o.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};o.O.j=function(t){return 0===n[t]};var t=function(t,e){var r,u,a=e[0],i=e[1],l=e[2],c=0;if(a.some((function(t){return 0!==n[t]}))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(l)var d=l(o)}for(t&&t(e);c<a.length;c++)u=a[c],o.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return o.O(d)},e=self["webpackChunkvue_practice"]=self["webpackChunkvue_practice"]||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var e=o.O(void 0,[998],(function(){return o(503)}));e=o.O(e)})();
//# sourceMappingURL=app.6e13d41a.js.map