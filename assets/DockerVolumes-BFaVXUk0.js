import{W as w}from"./UtilityNavbar-6gcwC9oc.js";import y from"./TemplateSidemenu-BDnvRG4v.js";import{_,c as C,w as I,r as S,o as r,b as t,d as D,v as B,l as T,t as n,f as b,g as V,F as j}from"./index-IS7rY9yO.js";import"./SectionHero-B940UzSg.js";const N={components:{WrapperPage:w,TemplateSidemenu:y},inject:["menus","io"],props:["renderer"],data:()=>({service:"docker_volumes",items:null,current:null,search:""}),async created(){await this.getItems()},methods:{async getItems(){var s;try{const e={};this.items&&(e.$limit=(s=this.items)==null?void 0:s.limit),this.search&&(e.name={$like:`%${this.search}%`}),this.items=await this.io.service(this.service).find({query:e})}catch(e){this.items=null,console.error(e)}},next(){this.items&&(this.items.skip+=this.items.limit)},previous(){this.items&&(this.items.skip-=this.items.limit)}}},P={class:"flex h-full flex-col md:flex-row"},$={class:"flex-col flex w-full md:w-1/2"},A=t("h2",{class:"font-light text-lg p-4 max-w-full"}," Docker Volumes ",-1),F={class:"flex px-4"},K={class:"px-4 pt-4 md:hidden flex"},W={class:"text-sm justify-items-center content-center text-center grow"},q={class:"px-4 pt-4 grow"},E=["onClick"],L={class:"p-4 hidden md:flex"},M={class:"text-sm justify-items-center content-center text-center grow"},U={class:"grow p-4"},z=t("h2",{class:"font-light text-lg max-w-full"}," Details & Actions ",-1);function G(s,e,k,H,J,l){const x=S("TemplateSidemenu");return r(),C(x,{title:"Applications",renderer:k.renderer},{default:I(()=>{var o,a,d,m,c,u,h,p,g,f,v;return[t("div",P,[t("div",$,[A,t("div",F,[D(t("input",{"onUpdate:modelValue":e[0]||(e[0]=i=>s.search=i),placeholder:"Search",onKeypress:e[1]||(e[1]=T((...i)=>l.getItems&&l.getItems(...i),["enter"])),class:"rounded-l bg-slate-50 grow p-2"},null,544),[[B,s.search]]),t("button",{onClick:e[2]||(e[2]=(...i)=>l.getItems&&l.getItems(...i)),class:"hover:bg-slate-200 font-extralight rounded-r p-2 bg-slate-100"}," Search ")]),t("div",K,[t("button",{class:"p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100",disabled:"!items?.skip",onClick:e[3]||(e[3]=i=>l.previous())}," Previous "),t("div",W,n(((o=s.items)==null?void 0:o.skip)+1)+" - "+n(((a=s.items)==null?void 0:a.skip)+((m=(d=s.items)==null?void 0:d.data)==null?void 0:m.length))+" of "+n((c=s.items)==null?void 0:c.total),1),t("button",{class:"p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100",disabled:"!items || (items?.skip + items?.data?.length) >= items?.data?.length",onClick:e[4]||(e[4]=i=>l.next())}," Next ")]),t("div",q,[(r(!0),b(j,null,V((u=s.items)==null?void 0:u.data,i=>(r(),b("button",{onClick:O=>s.current=i,class:"rounded hover:bg-slate-200 font-extralight mb-1 text-left w-full bg-slate-50 py-1 px-2"},n(i.name),9,E))),256))]),t("div",L,[t("button",{class:"p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100",disabled:"!items?.skip",onClick:e[5]||(e[5]=i=>l.previous())}," Previous "),t("div",M,n(((h=s.items)==null?void 0:h.skip)+1)+" - "+n(((p=s.items)==null?void 0:p.skip)+((f=(g=s.items)==null?void 0:g.data)==null?void 0:f.length))+" of "+n((v=s.items)==null?void 0:v.total),1),t("button",{class:"p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100",disabled:"!items || (items?.skip + items?.data?.length) >= items?.data?.length",onClick:e[6]||(e[6]=i=>l.next())}," Next ")])]),t("div",U,[z,t("pre",null,"				"+n(s.current)+`
				`,1)])])]}),_:1},8,["renderer"])}const Z=_(N,[["render",G]]);export{Z as default};
