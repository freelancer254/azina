import{Q as m}from"./QSpinnerFacebook.21668d5f.js";import{Q as f,a as r,b as y}from"./QStepper.fa10e10f.js";import{_ as h,a3 as g,r as b,n,p as a,q as t,t as i,a9 as k,s,ac as d,a6 as c,u as o,v}from"./index.b0cb1583.js";import{Q as p}from"./touch.0cddd61c.js";import{Q as _}from"./QPage.bc06de85.js";import{u as q}from"./azinaStore.fc91a3c0.js";import"./QSlideTransition.288aa76a.js";import"./use-panel.bcec9473.js";import"./selection.ecf08415.js";import"./axios.1cbaea31.js";const C=g({setup(){return{azinaStore:q(),step:b(1)}}}),S={class:"q-pa-xs row justify-center"},w={key:0,class:"q-gutter-md row"},Q={class:"q-pa-xs row justify-center"},z={class:"col-12 col-md-10 q-pt-xl q-mt-xl q-px-md"},B=i("br",null,null,-1),V=i("br",null,null,-1),x=i("br",null,null,-1),D=i("br",null,null,-1);function A(e,l,$,N,P,I){return n(),a(_,null,{default:t(()=>[i("div",S,[e.azinaStore.showSpinner?(n(),k("div",w,[s(m,{color:"indigo",size:"4em"})])):d("",!0)]),i("div",Q,[i("div",z,[s(y,{modelValue:e.step,"onUpdate:modelValue":l[2]||(l[2]=u=>e.step=u),ref:"stepper",color:"secondary",animated:""},{navigation:t(()=>[s(f,null,{default:t(()=>[e.step<6?(n(),a(c,{key:0,outline:"","no-caps":"",onClick:l[0]||(l[0]=u=>e.$refs.stepper.next()),color:"indigo",label:"Continue"})):d("",!0),e.step===6?(n(),a(c,{key:1,outline:"","no-caps":"",onClick:e.azinaStore.verifyAccount,color:"indigo",label:"Submit"},null,8,["onClick"])):d("",!0),e.step>1?(n(),a(c,{key:2,flat:"",color:"secondary",onClick:l[1]||(l[1]=u=>e.$refs.stepper.previous()),label:"Back",class:"q-ml-sm"})):d("",!0)]),_:1})]),message:t(()=>[e.step===1?(n(),a(p,{key:0,class:"bg-indigo-8 text-white q-px-lg"},{default:t(()=>[o(" For demo purposes : No real KYC info is required. ")]),_:1})):e.step===2?(n(),a(p,{key:1,class:"bg-orange-8 text-white q-px-lg"},{default:t(()=>[o(" Basic Information ")]),_:1})):e.step===3?(n(),a(p,{key:2,class:"bg-green-8 text-white q-px-lg"},{default:t(()=>[o(" Contact Details ")]),_:1})):e.step===4?(n(),a(p,{key:3,class:"bg-blue-8 text-white q-px-lg"},{default:t(()=>[o(" Add Payment Methods ")]),_:1})):e.step===5?(n(),a(p,{key:4,class:"bg-purple-8 text-white q-px-lg"},{default:t(()=>[o(" Upload KYC Documents ")]),_:1})):(n(),a(p,{key:5,class:"bg-blue-8 text-white q-px-lg"},{default:t(()=>[o(" Verify Account: "+v(e.azinaStore.userAccount),1)]),_:1}))]),default:t(()=>[s(r,{name:1,title:"Azina Verification",icon:"settings",done:e.step>1,style:{"min-height":"200px"}},{default:t(()=>[o(" Azina requires users to complete KYC to enjoy Azina services."),B,o(" If you already completed the verification process, switch to the verified account."),V,o(" For demo purposes, you can instantly verify the currently connected account. ")]),_:1},8,["done"]),s(r,{disable:"",name:2,title:"Basic Infomation",caption:"As they appear on your ID",icon:"perm_identity",done:e.step>2,style:{"min-height":"200px"}},{default:t(()=>[o(" Personal Details ")]),_:1},8,["done"]),s(r,{disable:"",name:3,title:"Contact Details",icon:"phone",done:e.step>3,style:{"min-height":"200px"}},{default:t(()=>[o(" Contact Details ")]),_:1},8,["done"]),s(r,{disable:"",name:4,title:"Payment Methods",icon:"account_balance",done:e.step>4,style:{"min-height":"200px"}},{default:t(()=>[o(" Payment Methods ")]),_:1},8,["done"]),s(r,{disable:"",name:5,title:"Document Upload",icon:"upload_file",done:e.step>5,style:{"min-height":"200px"}},{default:t(()=>[o(" Upload KYC Docs ")]),_:1},8,["done"]),s(r,{name:6,title:"Submit",icon:"check",style:{"min-height":"200px"}},{default:t(()=>[o(" By Clicking Submit, your current connected account will be verified."),x,o(" This might take a few seconds."),D]),_:1})]),_:1},8,["modelValue"])])])]),_:1})}var J=h(C,[["render",A]]);export{J as default};
