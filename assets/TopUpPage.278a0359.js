import{a as f,Q as V}from"./QMarkupTable.65e766be.js";import{Q as L}from"./QPage.bc06de85.js";import{_ as M,a3 as T,k as R,r as D,n as i,a9 as y,p,q as t,ac as m,ab as k,t as n,s as e,aa as x,a6 as u,u as l,v as o,a5 as _,a4 as S,O as v,a8 as w,a0 as C,ad as Q}from"./index.b0cb1583.js";import{Q as $}from"./QSpace.51d74a27.js";import{Q as g,b as r,a as d}from"./QItemLabel.ea3d41e9.js";import{Q as z}from"./QList.66580d34.js";import{Q as q}from"./QBtnDropdown.365bb999.js";import{Q as A,a as b,b as I}from"./QStepper.fa10e10f.js";import{Q as h}from"./touch.0cddd61c.js";import{C as U}from"./ClosePopup.4c83fa28.js";import{u as F}from"./azinaStore.fc91a3c0.js";import"./selection.ecf08415.js";import"./QSlideTransition.288aa76a.js";import"./use-panel.bcec9473.js";import"./axios.1cbaea31.js";const N=T({setup(){const a=F();return R(()=>{a.stopListener()}),{azinaStore:a,step:D(1)}}}),P={class:"q-pa-xs row justify-center"},j={class:"col-10 q-pt-xl q-mt-xl"},W={class:"q-pa-md"},Y={class:"text-left",style:{width:"150px"}},E={class:"text-right"},O={class:"text-right"},G={class:"text-right"},H={class:"text-right"},J={class:"text-right"},K={class:"text-left"},X={class:"text-right"},Z={class:"text-right"},ee={class:"text-right"},te={class:"text-right"},ae={class:"text-right"},le={class:"gt-md q-pa-xs row justify-center"},oe={key:0,class:"col-12 col-md-6 q-pt-xl q-mt-xl q-px-md"},ne={class:"row items-center no-wrap"},se={class:"text-center"},ie={class:"row items-center no-wrap"},de={class:"text-center"},re={key:1,class:"col-12 col-md-6 q-pt-xl q-mt-xl q-px-md text-dark"},pe={class:"lt-lg q-pa-xs row justify-center"},ue={key:0,class:"col-12 col-md-9 q-pt-md q-mt-xs q-px-md q-mb-md"},ce={class:"row items-center no-wrap"},me={class:"text-center"},fe={class:"row items-center no-wrap"},ge={class:"text-center"},ye={key:1,class:"col-12 col-md-6 q-pt-xl q-mt-xl q-px-md text-dark"};function he(a,c,be,ke,Se,ve){return i(),y(k,null,[!a.azinaStore.connected||!a.azinaStore.verified?(i(),p(L,{key:0},{default:t(()=>[n("div",P,[n("div",j,[n("div",W,[e(V,null,{default:t(()=>[n("thead",null,[n("tr",null,[n("th",Y,[e(f,{animation:"blink",type:"text"})]),n("th",E,[e(f,{animation:"blink",type:"text"})]),n("th",O,[e(f,{animation:"blink",type:"text"})]),n("th",G,[e(f,{animation:"blink",type:"text"})]),n("th",H,[e(f,{animation:"blink",type:"text"})]),n("th",J,[e(f,{animation:"blink",type:"text"})])])]),n("tbody",null,[(i(),y(k,null,x(5,s=>n("tr",{key:s},[n("td",K,[e(f,{animation:"blink",type:"text",width:"85px"})]),n("td",X,[e(f,{animation:"blink",type:"text",width:"50px"})]),n("td",Z,[e(f,{animation:"blink",type:"text",width:"35px"})]),n("td",ee,[e(f,{animation:"blink",type:"text",width:"65px"})]),n("td",te,[e(f,{animation:"blink",type:"text",width:"25px"})]),n("td",ae,[e(f,{animation:"blink",type:"text",width:"85px"})])])),64))])]),_:1})])])])]),_:1})):m("",!0),a.azinaStore.connected&&a.azinaStore.verified?(i(),p(L,{key:1},{default:t(()=>[n("div",le,[a.azinaStore.loans.active.length?(i(),y("div",oe,[e(I,{modelValue:a.step,"onUpdate:modelValue":c[3]||(c[3]=s=>a.step=s),ref:"stepper",color:"primary",animated:""},{navigation:t(()=>[e(A,null,{default:t(()=>[a.step===3&&a.azinaStore.topUpCollateralAmount>0?(i(),p(u,{key:0,onClick:a.azinaStore.topUpCollateral,color:"indigo",outline:"",label:"Submit"},null,8,["onClick"])):m("",!0),a.step===1||a.step===2&&a.azinaStore.topUpCollateralAmount>0?(i(),p(u,{key:1,onClick:c[1]||(c[1]=s=>a.$refs.stepper.next()),color:"indigo",outline:"",label:"Continue"})):m("",!0),a.step>1?(i(),p(u,{key:2,flat:"",color:"secondary",onClick:c[2]||(c[2]=s=>a.$refs.stepper.previous()),label:"Back",class:"q-ml-sm"})):m("",!0)]),_:1})]),message:t(()=>[a.step===1?(i(),p(h,{key:0,class:"bg-indigo text-white q-px-lg"},{default:t(()=>[l(" Managing Active Loan: "+o(a.azinaStore.selectedLoan.loanId),1)]),_:1})):a.step===2?(i(),p(h,{key:1,class:"bg-indigo text-white q-px-lg"},{default:t(()=>[l(" Wallet Balance: "+o(a.azinaStore.tokenBalances[a.azinaStore.selectedLoan.id])+" "+o(a.azinaStore.selectedLoan.symbol),1)]),_:1})):a.step===3?(i(),p(h,{key:2,class:"bg-indigo text-white q-px-lg"},{default:t(()=>[l(" A pop will appear in your wallet ")]),_:1})):m("",!0)]),default:t(()=>[e(b,{name:1,title:"Select Loan",icon:"payments",done:a.step>1,style:{"min-height":"200px"}},{default:t(()=>[e(_,{class:"section-1"},{default:t(()=>[e(S,null,{default:t(()=>[e(q,{split:"",color:"dark",flat:"","no-caps":""},{label:t(()=>[n("div",ne,[e(v,{left:"",name:`img:tokens/${a.azinaStore.selectedLoan.icon}`},null,8,["name"]),n("div",se,[e($),l(o(a.azinaStore.selectedLoan.loanId),1)])])]),default:t(()=>[(i(!0),y(k,null,x(a.azinaStore.loans.active,s=>(i(),p(z,{key:s.loanId},{default:t(()=>[C((i(),p(g,{clickable:"",onClick:B=>a.azinaStore.changeSelectedLoan(s)},{default:t(()=>[e(r,{avatar:""},{default:t(()=>[e(Q,{icon:`img:tokens/${s.icon}`,color:"white","text-color":"white"},null,8,["icon"])]),_:2},1024),e(r,null,{default:t(()=>[e(d,null,{default:t(()=>[l("Collateral: "+o(s.symbol),1)]),_:2},1024),e(d,{caption:""},{default:t(()=>[l("Loan Balance: "+o(s.balance)+" "+o(a.azinaStore.paymentMethods[s.paymentMethodId-1].symbol),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[U]])]),_:2},1024))),128))]),_:1})]),_:1}),e(S,null,{default:t(()=>[e(u,{style:{"pointer-events":"none"},icon:"details",size:"15px",flat:"",class:"text-dark q-ml-lg q-px-xl",rounded:"",color:"indigo",label:"Loan Details For Selected Loan","no-caps":""}),e(z,null,{default:t(()=>[e(g,null,{default:t(()=>[e(r,{avatar:""},{default:t(()=>[e(u,{style:{"pointer-events":"none"},icon:`img:countries/${a.azinaStore.paymentMethods[a.azinaStore.selectedLoan.paymentMethodId-1].currencyIcon}`,size:"15px",flat:"",class:"text-dark q-mr-xs",rounded:"",color:"indigo",label:"Loan Balance","no-caps":""},null,8,["icon"])]),_:1}),e(r,{side:""},{default:t(()=>[e(d,{class:"text-bold q-px-xl"},{default:t(()=>[l("Balance Remaining ")]),_:1}),e(d,{overline:"",class:"q-px-xl"},{default:t(()=>[l(o(parseInt(a.azinaStore.selectedLoan.balance).toLocaleString())+" "+o(a.azinaStore.paymentMethods[a.azinaStore.selectedLoan.paymentMethodId-1].symbol),1)]),_:1})]),_:1})]),_:1}),e(g,null,{default:t(()=>[e(r,{avatar:""},{default:t(()=>[e(u,{style:{"pointer-events":"none"},icon:"av_timer",size:"15px",flat:"",class:"text-dark q-mr-xs",rounded:"",color:"indigo",label:"Duration Remaining","no-caps":""})]),_:1}),e(r,{side:""},{default:t(()=>[e(d,{class:"text-bold q-px-sm"},{default:t(()=>[l("Time Remaining")]),_:1}),e(d,{overline:"",class:"q-px-sm"},{default:t(()=>[l(o(a.azinaStore.selectedLoan.countdown),1)]),_:1})]),_:1})]),_:1}),e(g,null,{default:t(()=>[e(r,{avatar:""},{default:t(()=>[e(u,{style:{"pointer-events":"none"},icon:`img:tokens/${a.azinaStore.selectedLoan.icon}`,size:"15px",flat:"",class:"text-dark q-mr-xs",rounded:"",color:"indigo",label:"Collateral Amount","no-caps":""},null,8,["icon"])]),_:1}),e(r,{side:""},{default:t(()=>[e(d,{class:"q-px-md text-bold"},{default:t(()=>[l("Collateral supplied")]),_:1}),e(d,{overline:"",class:"q-px-md"},{default:t(()=>[l(o(parseFloat(a.azinaStore.selectedLoan.collateralAmount/10**a.azinaStore.selectedLoan.decimals).toFixed(6))+" "+o(a.azinaStore.selectedLoan.symbol),1)]),_:1})]),_:1})]),_:1}),e(g,null,{default:t(()=>[e(r,{avatar:""},{default:t(()=>[e(u,{style:{"pointer-events":"none"},icon:"warning",size:"15px",flat:"",class:"text-dark q-mr-xs",rounded:"",color:"indigo",label:"Liquidation Risk","no-caps":""})]),_:1}),e(r,{side:""},{default:t(()=>[e(d,{class:"q-px-lg q-ml-xs text-bold"},{default:t(()=>[l("LTV")]),_:1}),e(d,{overline:"",class:"q-px-lg"},{default:t(()=>[l(o(a.azinaStore.selectedLoan.ltv)+"%",1)]),_:1})]),_:1}),e(r,{side:""},{default:t(()=>[e(d,{class:"text-bold q-px-xs"},{default:t(()=>[l("Liquidation Price")]),_:1}),e(d,{overline:"",class:"q-px-xs"},{default:t(()=>[l(o(a.azinaStore.selectedLoan.liquidationPrice)+" USD",1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["done"]),e(b,{name:2,title:"Top Up Amount",icon:"payments",done:a.step>2,style:{"min-height":"200px"}},{default:t(()=>[e(w,{outlined:"",modelValue:a.azinaStore.topUpCollateralAmount,"onUpdate:modelValue":c[0]||(c[0]=s=>a.azinaStore.topUpCollateralAmount=s),"label-color":"dark",label:"Collateral Amount","input-class":"text-dark text-bold text-h6",clearable:"","stack-label":"",dense:a.dense},{append:t(()=>[e(q,{split:"",color:"dark",style:{"pointer-events":"none"},flat:"","no-caps":""},{label:t(()=>[n("div",ie,[e(v,{left:"",name:`img:tokens/${a.azinaStore.selectedLoan.icon}`},null,8,["name"]),n("div",de,o(a.azinaStore.selectedLoan.symbol),1)])]),_:1})]),_:1},8,["modelValue","dense"])]),_:1},8,["done"]),e(b,{name:3,title:"Submit Transaction",icon:"assignment",style:{"min-height":"200px"}},{default:t(()=>[l(" Complete the transaction with your wallet. ")]),_:1})]),_:1},8,["modelValue"])])):m("",!0),a.azinaStore.loans.active.length?m("",!0):(i(),y("div",re,[e(h,{"inline-actions":"",rounded:"",class:"bg-white text-dark"},{action:t(()=>[e(u,{outline:"",align:"right",color:"indigo",to:"/request",label:"Request Loan Now"})]),default:t(()=>[l(" You currently don't have any active loans. ")]),_:1})]))]),n("div",pe,[a.azinaStore.loans.active.length?(i(),y("div",ue,[e(I,{modelValue:a.step,"onUpdate:modelValue":c[7]||(c[7]=s=>a.step=s),ref:"stepper",color:"primary",animated:""},{navigation:t(()=>[e(A,null,{default:t(()=>[a.step===3&&a.azinaStore.topUpCollateralAmount>0?(i(),p(u,{key:0,onClick:a.azinaStore.topUpCollateral,color:"indigo",outline:"",label:"Submit"},null,8,["onClick"])):m("",!0),a.step===1||a.step===2&&a.azinaStore.topUpCollateralAmount>0?(i(),p(u,{key:1,onClick:c[5]||(c[5]=s=>a.$refs.stepper.next()),color:"indigo",outline:"",label:"Continue"})):m("",!0),a.step>1?(i(),p(u,{key:2,flat:"",color:"secondary",onClick:c[6]||(c[6]=s=>a.$refs.stepper.previous()),label:"Back",class:"q-ml-sm"})):m("",!0)]),_:1})]),message:t(()=>[a.step===1?(i(),p(h,{key:0,class:"bg-indigo text-white q-px-lg"},{default:t(()=>[l(" Managing Active Loan: "+o(a.azinaStore.selectedLoan.loanId),1)]),_:1})):a.step===2?(i(),p(h,{key:1,class:"bg-indigo text-white q-px-lg"},{default:t(()=>[l(" Wallet Balance: "+o(a.azinaStore.tokenBalances[a.azinaStore.selectedLoan.id])+" "+o(a.azinaStore.selectedLoan.symbol),1)]),_:1})):a.step===3?(i(),p(h,{key:2,class:"bg-indigo text-white q-px-lg"},{default:t(()=>[l(" A pop will appear in your wallet ")]),_:1})):m("",!0)]),default:t(()=>[e(b,{name:1,title:"Select Loan",icon:"payments",done:a.step>1,style:{"min-height":"200px"}},{default:t(()=>[e(_,{class:"section-1"},{default:t(()=>[e(S,null,{default:t(()=>[e(q,{split:"",color:"dark",flat:"","no-caps":""},{label:t(()=>[n("div",ce,[e(v,{left:"",name:`img:tokens/${a.azinaStore.selectedLoan.icon}`},null,8,["name"]),n("div",me,[e($),l(o(a.azinaStore.selectedLoan.loanId),1)])])]),default:t(()=>[(i(!0),y(k,null,x(a.azinaStore.loans.active,s=>(i(),p(z,{key:s.loanId},{default:t(()=>[C((i(),p(g,{clickable:"",onClick:B=>a.azinaStore.changeSelectedLoan(s)},{default:t(()=>[e(r,{avatar:""},{default:t(()=>[e(Q,{icon:`img:tokens/${s.icon}`,color:"white","text-color":"white"},null,8,["icon"])]),_:2},1024),e(r,null,{default:t(()=>[e(d,null,{default:t(()=>[l("Collateral: "+o(s.symbol),1)]),_:2},1024),e(d,{caption:""},{default:t(()=>[l("Loan Balance: "+o(s.balance)+" "+o(a.azinaStore.paymentMethods[s.paymentMethodId-1].symbol),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[U]])]),_:2},1024))),128))]),_:1})]),_:1}),e(S,null,{default:t(()=>[e(u,{style:{"pointer-events":"none"},icon:"details",size:"15px",flat:"",class:"text-dark q-ml-lg q-px-xl",rounded:"",color:"indigo",label:"Loan Details For Selected Loan","no-caps":""}),e(z,null,{default:t(()=>[e(g,null,{default:t(()=>[e(r,{avatar:""},{default:t(()=>[e(u,{style:{"pointer-events":"none"},icon:`img:countries/${a.azinaStore.paymentMethods[a.azinaStore.selectedLoan.paymentMethodId-1].currencyIcon}`,size:"15px",flat:"",class:"text-dark q-mr-xs",rounded:"",color:"indigo",label:"Loan Balance","no-caps":""},null,8,["icon"])]),_:1}),e(r,{side:""},{default:t(()=>[e(d,{class:"text-bold q-px-xl"},{default:t(()=>[l("Balance Remaining ")]),_:1}),e(d,{overline:"",class:"q-px-xl"},{default:t(()=>[l(o(parseInt(a.azinaStore.selectedLoan.balance).toLocaleString())+" "+o(a.azinaStore.paymentMethods[a.azinaStore.selectedLoan.paymentMethodId-1].symbol),1)]),_:1})]),_:1})]),_:1}),e(g,null,{default:t(()=>[e(r,{avatar:""},{default:t(()=>[e(u,{style:{"pointer-events":"none"},icon:"av_timer",size:"15px",flat:"",class:"text-dark q-mr-xs",rounded:"",color:"indigo",label:"Duration Remaining","no-caps":""})]),_:1}),e(r,{side:""},{default:t(()=>[e(d,{class:"text-bold q-px-sm"},{default:t(()=>[l("Time Remaining")]),_:1}),e(d,{overline:"",class:"q-px-sm"},{default:t(()=>[l(o(a.azinaStore.selectedLoan.countdown),1)]),_:1})]),_:1})]),_:1}),e(g,null,{default:t(()=>[e(r,{avatar:""},{default:t(()=>[e(u,{style:{"pointer-events":"none"},icon:`img:tokens/${a.azinaStore.selectedLoan.icon}`,size:"15px",flat:"",class:"text-dark q-mr-xs",rounded:"",color:"indigo",label:"Collateral Amount","no-caps":""},null,8,["icon"])]),_:1}),e(r,{side:""},{default:t(()=>[e(d,{class:"q-px-md text-bold"},{default:t(()=>[l("Collateral supplied")]),_:1}),e(d,{overline:"",class:"q-px-md"},{default:t(()=>[l(o(parseFloat(a.azinaStore.selectedLoan.collateralAmount/10**a.azinaStore.selectedLoan.decimals).toFixed(6))+" "+o(a.azinaStore.selectedLoan.symbol),1)]),_:1})]),_:1})]),_:1}),e(g,null,{default:t(()=>[e(r,{avatar:""},{default:t(()=>[e(u,{style:{"pointer-events":"none"},icon:"warning",size:"15px",flat:"",class:"text-dark q-mr-xs",rounded:"",color:"indigo",label:"Liquidation Risk","no-caps":""})]),_:1}),e(r,{side:""},{default:t(()=>[e(d,{class:"q-px-lg q-ml-xs text-bold"},{default:t(()=>[l("LTV")]),_:1}),e(d,{overline:"",class:"q-px-lg"},{default:t(()=>[l(o(a.azinaStore.selectedLoan.ltv)+"%",1)]),_:1})]),_:1}),e(r,{side:""},{default:t(()=>[e(d,{class:"text-bold q-px-xs"},{default:t(()=>[l("Liquidation Price")]),_:1}),e(d,{overline:"",class:"q-px-xs"},{default:t(()=>[l(o(a.azinaStore.selectedLoan.liquidationPrice)+" USD",1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["done"]),e(b,{name:2,title:"Top Up Amount",icon:"payments",done:a.step>2,style:{"min-height":"200px"}},{default:t(()=>[e(w,{outlined:"",modelValue:a.azinaStore.topUpCollateralAmount,"onUpdate:modelValue":c[4]||(c[4]=s=>a.azinaStore.topUpCollateralAmount=s),"label-color":"dark",label:"Collateral Amount","input-class":"text-dark text-bold text-h6",clearable:"","stack-label":"",dense:a.dense},{append:t(()=>[e(q,{split:"",color:"dark",style:{"pointer-events":"none"},flat:"","no-caps":""},{label:t(()=>[n("div",fe,[e(v,{left:"",name:`img:tokens/${a.azinaStore.selectedLoan.icon}`},null,8,["name"]),n("div",ge,o(a.azinaStore.selectedLoan.symbol),1)])]),_:1})]),_:1},8,["modelValue","dense"])]),_:1},8,["done"]),e(b,{name:3,title:"Submit Transaction",icon:"assignment",style:{"min-height":"200px"}},{default:t(()=>[l(" Complete the transaction with your wallet. ")]),_:1})]),_:1},8,["modelValue"])])):m("",!0),a.azinaStore.loans.active.length?m("",!0):(i(),y("div",ye,[e(h,{"inline-actions":"",rounded:"",class:"bg-white text-dark"},{action:t(()=>[e(u,{outline:"",align:"right",color:"indigo",to:"/request",label:"Request Loan Now"})]),default:t(()=>[l(" You currently don't have any active loans. ")]),_:1})]))])]),_:1})):m("",!0)],64)}var Te=M(N,[["render",he]]);export{Te as default};
