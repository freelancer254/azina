import{Q as T,a as A}from"./QLayout.40ea9515.js";import{Q as $,a as P,b as N}from"./QResizeObserver.a555e470.js";import{c as D,i as O,e as p,r as g,a as j,d as i,w as d,o as M,h as U,f as y,g as E,l as G,_ as K,j as Y,k as J,m as W,n as X,p as Z,q as h,s as m,t as s,u as x,v as B,x as ee,y as te}from"./index.e2b2824f.js";import{u as ae}from"./azinaStore.f9809ea1.js";import{u as oe,a as ne,b as re}from"./aggregatorV3InterfaceABI.d3372860.js";import{a as le,b as I}from"./axios.d41ce410.js";var se=D({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:f,emit:v}){const{proxy:{$q:n}}=E(),t=O(G,p);if(t===p)return console.error("QFooter needs to be child of QLayout"),p;const u=g(parseInt(e.heightHint,10)),r=g(!0),w=g(j.value===!0||t.isContainer.value===!0?0:window.innerHeight),_=i(()=>e.reveal===!0||t.view.value.indexOf("F")>-1||n.platform.is.ios&&t.isContainer.value===!0),z=i(()=>t.isContainer.value===!0?t.containerHeight.value:w.value),C=i(()=>{if(e.modelValue!==!0)return 0;if(_.value===!0)return r.value===!0?u.value:0;const a=t.scroll.value.position+z.value+u.value-t.height.value;return a>0?a:0}),V=i(()=>e.modelValue!==!0||_.value===!0&&r.value!==!0),L=i(()=>e.modelValue===!0&&V.value===!0&&e.reveal===!0),Q=i(()=>"q-footer q-layout__section--marginal "+(_.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(V.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(_.value!==!0?" hidden":""):"")),S=i(()=>{const a=t.rows.value.bottom,o={};return a[0]==="l"&&t.left.space===!0&&(o[n.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),a[2]==="r"&&t.right.space===!0&&(o[n.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),o});function l(a,o){t.update("footer",a,o)}function c(a,o){a.value!==o&&(a.value=o)}function q({height:a}){c(u,a),l("size",a)}function F(){if(e.reveal!==!0)return;const{direction:a,position:o,inflectionPoint:H}=t.scroll.value;c(r,a==="up"||o-H<100||t.height.value-z.value-o-u.value<300)}function R(a){L.value===!0&&c(r,!0),v("focusin",a)}d(()=>e.modelValue,a=>{l("space",a),c(r,!0),t.animate()}),d(C,a=>{l("offset",a)}),d(()=>e.reveal,a=>{a===!1&&c(r,e.modelValue)}),d(r,a=>{t.animate(),v("reveal",a)}),d([u,t.scroll,t.height],F),d(()=>n.screen.height,a=>{t.isContainer.value!==!0&&c(w,a)});const k={};return t.instances.footer=k,e.modelValue===!0&&l("size",u.value),l("space",e.modelValue),l("offset",C.value),M(()=>{t.instances.footer===k&&(t.instances.footer=void 0,l("size",0),l("offset",0),l("space",!1))}),()=>{const a=U(f.default,[y($,{debounce:0,onResize:q})]);return e.elevated===!0&&a.push(y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),y("footer",{class:Q.value,style:S.value,onFocusin:R},a)}}});const ue={setup(){const e=ae(),f=g(""),v=le.get("/loanterms"),n=function(){I.all([v]).then(I.spread((...t)=>{e.loanTerms=t[0].data,e.selectedCurrency=t[0].data.currencies[0],e.selectedLoanDuration=t[0].data.duration[0],e.selectedCollateral=t[0].data.collateral[0],e.selectedInterestRate=t[0].data.interestrates[t[0].data.duration[0].toString()],e.allSupportedTokens=t[0].data.collateral}))};return Y(()=>{f.value=new Date().getFullYear(),e.verificationContract=oe,e.erc20ABI=ne,e.aggregatorABI=re,n(),e.connectAlchemy()}),J(()=>{e.stopListener()}),{azinaStore:e,year:f}}},b=e=>(ee("data-v-5a16cb76"),e=e(),te(),e),ie={class:"text-overline text-center text-dark gt-sm"},ce=b(()=>s("span",null,[s("a",{href:"https://github.com/freelancer254/azina",target:"_blank",class:"text-dark",style:{"text-decoration":"none"}}," Github"),x(" |")],-1)),de=b(()=>s("span",null,[s("a",{href:"https://www.buymeacoffee.com/freelancer254",target:"_blank",class:"text-dark",style:{"text-decoration":"none"}}," support@azina.online"),x(" |")],-1)),fe=b(()=>s("span",null,[s("a",{href:"https://twitter.com/roba_mutua",target:"_blank",class:"text-dark",style:{"text-decoration":"none"}}," Twitter")],-1)),ve={class:"text-overline text-center text-dark lt-md"};function he(e,f,v,n,t,u){const r=W("router-view");return X(),Z(T,{view:"hHh lpR fFf"},{default:h(()=>[m(A,null,{default:h(()=>[m(r)]),_:1}),m(se,{class:"section-2"},{default:h(()=>[m(P,null,{default:h(()=>[m(N,null,{default:h(()=>[s("div",ie,[x(" \xA9 azina.online "+B(n.year)+" |",1),ce,de,fe]),s("div",ve," \xA9 azina.online "+B(n.year),1)]),_:1})]),_:1})]),_:1})]),_:1})}var be=K(ue,[["render",he],["__scopeId","data-v-5a16cb76"]]);export{be as default};
