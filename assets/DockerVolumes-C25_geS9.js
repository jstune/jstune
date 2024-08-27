import{W as V}from"./UtilityNavbar-CPK8asTt.js";import N from"./TemplateSidemenu-DXoWc3Dv.js";import{_ as P,c as $,w as A,r as F,o as n,b as s,e as K,v as W,j as q,t as o,g as B,h as E,F as L}from"./index-v3aTFAR_.js";import"./SectionHero-BHWSfye5.js";const M={components:{WrapperPage:V,TemplateSidemenu:N},inject:["menus","io"],props:["renderer"],data:()=>({service:"docker_volumes",items:null,current:null,search:""}),async created(){await this.getItems()},methods:{async getItems(){var e;try{const t={};this.items&&(t.$limit=(e=this.items)==null?void 0:e.limit),this.search&&(t.name={$like:`%${this.search}%`}),this.items=await this.io.service(this.service).find({query:t})}catch(t){this.items=null,console.error(t)}},next(){this.items&&(this.items.skip+=this.items.limit)},previous(){this.items&&(this.items.skip-=this.items.limit)}}},U={class:"flex h-full flex-col md:flex-row"},z={class:"flex-col flex w-full md:w-1/2 flex-shrink-0"},G=s("h2",{class:"font-light text-lg p-4 max-w-full"}," Volumes ",-1),H={class:"flex px-4"},J={class:"px-4 pt-4 md:hidden flex"},O=["disabled"],Q={class:"text-sm justify-items-center content-center text-center grow"},R=["disabled"],X={class:"px-4 pt-4 grow"},Y=["onClick"],Z={class:"p-4 hidden md:flex"},ee=["disabled"],te={class:"text-sm justify-items-center content-center text-center grow"},se=["disabled"],ie={class:"grow p-4 overflow-auto"},le=s("h2",{class:"font-light text-lg max-w-full"}," Details & Actions ",-1);function oe(e,t,D,ne,re,l){const T=F("TemplateSidemenu");return n(),$(T,{title:"Applications",renderer:D.renderer},{default:A(()=>{var r,a,d,m,h,u,p,c,f,g,v,b,k,w,x,y,C,_,I,S,j;return[s("div",U,[s("div",z,[G,s("div",H,[K(s("input",{"onUpdate:modelValue":t[0]||(t[0]=i=>e.search=i),placeholder:"Search",onKeypress:t[1]||(t[1]=q((...i)=>l.getItems&&l.getItems(...i),["enter"])),class:"rounded-l bg-slate-50 grow p-2"},null,544),[[W,e.search]]),s("button",{onClick:t[2]||(t[2]=(...i)=>l.getItems&&l.getItems(...i)),class:"hover:bg-slate-200 font-extralight rounded-r p-2 bg-slate-100"}," Search ")]),s("div",J,[s("button",{class:"p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100",disabled:!((r=e.items)!=null&&r.skip),onClick:t[3]||(t[3]=i=>l.previous())}," Previous ",8,O),s("div",Q,o(((a=e.items)==null?void 0:a.skip)+1)+" - "+o(((d=e.items)==null?void 0:d.skip)+((h=(m=e.items)==null?void 0:m.data)==null?void 0:h.length))+" of "+o((u=e.items)==null?void 0:u.total),1),s("button",{class:"p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100",disabled:!e.items||((p=e.items)==null?void 0:p.skip)+((f=(c=e.items)==null?void 0:c.data)==null?void 0:f.length)>=((g=e.items)==null?void 0:g.total),onClick:t[4]||(t[4]=i=>l.next())}," Next ",8,R)]),s("div",X,[(n(!0),B(L,null,E((v=e.items)==null?void 0:v.data,i=>(n(),B("button",{onClick:ae=>e.current=i,class:"rounded hover:bg-slate-200 font-extralight mb-1 text-left w-full bg-slate-50 py-1 px-2"},o(i.name),9,Y))),256))]),s("div",Z,[s("button",{class:"p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100",disabled:!((b=e.items)!=null&&b.skip),onClick:t[5]||(t[5]=i=>l.previous())}," Previous ",8,ee),s("div",te,o(((k=e.items)==null?void 0:k.skip)+1)+" - "+o(((w=e.items)==null?void 0:w.skip)+((y=(x=e.items)==null?void 0:x.data)==null?void 0:y.length))+" of "+o((C=e.items)==null?void 0:C.total),1),s("button",{class:"p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100",disabled:!e.items||((_=e.items)==null?void 0:_.skip)+((S=(I=e.items)==null?void 0:I.data)==null?void 0:S.length)>=((j=e.items)==null?void 0:j.total),onClick:t[6]||(t[6]=i=>l.next())}," Next ",8,se)])]),s("div",ie,[le,s("pre",null,"				"+o(e.current)+`
				`,1)])])]}),_:1},8,["renderer"])}const pe=P(M,[["render",oe]]);export{pe as default};
