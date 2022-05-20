import{o as f,c as v,a as l,r as h,u as R,b as $,d as n,e as E,f as H,i as j,g as z,w as F,h as B,j as I,n as y,t as P,F as D,k as O,v as U,l as C,m as W,_ as Y,p as Z,q,s as T,x as J,y as G,z as K,A as Q,B as X,C as _,D as b,E as ee,G as M,H as V,I as N,J as te,K as se,L as oe,M as w,N as ne,O as ae,P as le,Q as ie,R as A,S as re,T as ce,U as ue,V as de,W as pe,X as _e,Y as fe,Z as me,$ as ve,a0 as he,a1 as ge,a2 as xe}from"./index.ce9cd7e8.js";import ye from"./DrawingControls.d5a3046c.js";const we={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ke=l("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),$e=[ke];function Se(s,o){return f(),v("svg",we,$e)}var Ce={name:"carbon-renew",render:Se};const Te={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},be=l("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Me=l("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),Ve=[be,Me];function Ne(s,o){return f(),v("svg",Te,Ve)}var Ae={name:"carbon-time",render:Ne},He="/talks/assets/logo-title-horizontal.96c3c915.png";function je(){const s=h(Date.now()),o=R({interval:1e3}),r=$(()=>{const a=(o.value-s.value)/1e3,c=Math.floor(a%60).toString().padStart(2,"0");return`${Math.floor(a/60).toString().padStart(2,"0")}:${c}`});function i(){s.value=o.value}return{timer:r,resetTimer:i}}function ze(s){if(s==null)return{info:h(),update:async()=>{}};const o=`/@slidev/slide/${s}.json`,{data:r,execute:i}=E(o).json().get();return i(),{info:r,update:async c=>await fetch(o,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(c)}).then(p=>p.json())}}const k={};function Be(s){function o(r){const i=`${r}`;return k[i]||(k[i]=ze(r)),k[i]}return{info:$(()=>o(n(s)).info.value),update:async(r,i)=>{const a=o(i!=null?i:n(s)),c=await a.update(r);return c&&(a.info.value=c),c}}}const Pe=["innerHTML"],De=["textContent"],Le=["placeholder"],Re=H({name:"NoteEditor",props:{class:{default:""},placeholder:{default:"No notes for this slide"}},setup(s){const o=s;j(z);const{info:r,update:i}=Be(C),a=h("");let c;const{ignoreUpdates:p}=F(a,t=>{const e=C.value;clearTimeout(c),c=setTimeout(()=>{i({raw:null,note:t},e)},500)});B(r,t=>{clearTimeout(c),p(()=>{a.value=(t==null?void 0:t.note)||""})},{immediate:!0,flush:"sync"});const m=h(),u=h(!1);async function g(t){var e,d,x;((e=t==null?void 0:t.target)==null?void 0:e.tagName)!=="A"&&(u.value=!0,(d=m.value)==null||d.focus(),await W(),(x=m.value)==null||x.focus())}return I(m,()=>{u.value=!1}),(t,e)=>{var d,x;return!u.value&&a.value?(f(),v(D,{key:0},[(d=n(r))!=null&&d.notesHTML?(f(),v("div",{key:0,class:y(["prose overflow-auto outline-none",o.class]),onClick:g,innerHTML:(x=n(r))==null?void 0:x.notesHTML},null,10,Pe)):(f(),v("div",{key:1,class:y(["prose overflow-auto outline-none",o.class]),onClick:g,textContent:P(a.value)},null,10,De))],64)):O((f(),v("textarea",{key:1,ref_key:"input",ref:m,"onUpdate:modelValue":e[0]||(e[0]=S=>a.value=S),class:y(["prose resize-none overflow-auto outline-none bg-transparent block",o.class]),placeholder:s.placeholder,onFocus:e[1]||(e[1]=S=>u.value=!0)},null,42,Le)),[[U,a.value]])}}});const L=s=>(le("data-v-301ca596"),s=s(),ie(),s),Ee={class:"bg-main h-full slidev-presenter"},Fe={class:"grid-container"},Ie={class:"grid-section top flex"},Oe=L(()=>l("img",{src:He,class:"h-14 ml-2 py-2 my-auto"},null,-1)),Ue=L(()=>l("div",{class:"flex-auto"},null,-1)),We={class:"text-2xl pl-2 pr-6 my-auto"},Ye={class:"grid-section next flex flex-col p-4"},Ze={class:"grid-section note overflow-auto"},qe={class:"grid-section bottom"},Je={class:"progress-bar"},Ge=H({name:"Presenter",setup(s){j(z);const o=h();Z(),q(o);const r=T.titleTemplate.replace("%s",T.title||"Slidev");J({title:`Presenter - ${r}`});const{timer:i,resetTimer:a}=je(),c=h([]),p=$(()=>A.value<re.value?{route:ce.value,clicks:A.value+1}:ue.value?{route:de.value,clicks:0}:null);return G(()=>{const m=o.value.querySelector("#slide-content"),u=K(Q()),g=X();B(()=>{if(!g.value||_e.value||!fe.value)return;const t=m.getBoundingClientRect(),e=(u.x-t.left)/t.width*100,d=(u.y-t.top)/t.height*100;if(!(e<0||e>100||d<0||d>100))return{x:e,y:d}},t=>{pe.cursor=t})}),(m,u)=>{const g=Ae,t=Ce;return f(),v(D,null,[l("div",Ee,[l("div",Fe,[l("div",Ie,[Oe,Ue,l("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:u[0]||(u[0]=(...e)=>n(a)&&n(a)(...e))},[_(g,{class:"absolute"}),_(t,{class:"absolute opacity-0"})]),l("div",We,P(n(i)),1)]),l("div",{ref_key:"main",ref:o,class:"grid-section main flex flex-col p-4",style:b(n(ee))},[_(V,{key:"main",class:"h-full w-full"},{default:M(()=>[_(me)]),_:1})],4),l("div",Ye,[n(p)?(f(),N(V,{key:"next",class:"h-full w-full"},{default:M(()=>{var e;return[_(n(he),{is:(e=n(p).route)==null?void 0:e.component,"clicks-elements":c.value,"onUpdate:clicks-elements":u[1]||(u[1]=d=>c.value=d),clicks:n(p).clicks,"clicks-disabled":!1,class:y(n(ve)(n(p).route)),route:n(p).route},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):te("v-if",!0)]),l("div",Ze,[_(Re,{class:"w-full h-full p-4 overflow-auto"})]),l("div",qe,[_(ge,{persist:!0})]),(f(),N(ye,{key:0}))]),l("div",Je,[l("div",{class:"progress h-2px bg-primary transition-all",style:b({width:`${(n(se)-1)/(n(oe)-1)*100}%`})},null,4)])]),_(xe),_(ae,{modelValue:n(w),"onUpdate:modelValue":u[2]||(u[2]=e=>ne(w)?w.value=e:null)},null,8,["modelValue"])],64)}}});var Xe=Y(Ge,[["__scopeId","data-v-301ca596"]]);export{Xe as default};
