import{W as w}from"./UtilityNavbar-6gcwC9oc.js";import _ from"./TemplateSidemenu-BDnvRG4v.js";import{_ as y,c as C,w as I,r as S,o,b as t,d as $,v as D,l as B,t as r,f as b,g as T,F as j}from"./index-IS7rY9yO.js";import"./SectionHero-B940UzSg.js";const N={components:{WrapperPage:w,TemplateSidemenu:_},inject:["menus","io"],props:["renderer"],data:()=>({service:"docker_images",items:null,current:null,search:""}),async created(){await this.getItems()},methods:{async getItems(){var s;try{const e={};this.items&&(e.$limit=(s=this.items)==null?void 0:s.limit),this.search&&(e.$or=[{repo_tags:{$like:`%${this.search}%`}},{repo_digests:{$like:`%${this.search}%`}}]),this.items=await this.io.service(this.service).find({query:e})}catch(e){this.items=null,console.error(e)}},next(){this.items&&(this.items.skip+=this.items.limit)},previous(){this.items&&(this.items.skip-=this.items.limit)}}},P={class:"flex h-full flex-col md:flex-row"},A={class:"flex-col flex w-full md:w-1/2"},F=t("h2",{class:"font-light text-lg p-4 max-w-full"}," Docker Image ",-1),K={class:"flex px-4"},V={class:"px-4 pt-4 md:hidden flex"},W={class:"text-sm justify-items-center content-center text-center grow"},q={class:"px-4 pt-4 grow"},E=["onClick"],L={class:"p-4 hidden md:flex"},M={class:"text-sm justify-items-center content-center text-center grow"},U={class:"grow p-4"},z=t("h2",{class:"font-light text-lg max-w-full"}," Details & Actions ",-1);function G(s,e,k,H,J,l){const x=S("TemplateSidemenu");return o(),C(x,{title:"Applications",renderer:k.renderer},{default:I(()=>{var n,a,d,m,c,h,p,g,u,f,v;return[t("div",P,[t("div",A,[F,t("div",K,[$(t("input",{"onUpdate:modelValue":e[0]||(e[0]=i=>s.search=i),placeholder:"Search",onKeypress:e[1]||(e[1]=B((...i)=>l.getItems&&l.getItems(...i),["enter"])),class:"rounded-l bg-slate-50 grow p-2"},null,544),[[D,s.search]]),t("button",{onClick:e[2]||(e[2]=(...i)=>l.getItems&&l.getItems(...i)),class:"hover:bg-slate-200 font-extralight rounded-r p-2 bg-slate-100"}," Search ")]),t("div",V,[t("button",{class:"p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100",disabled:"!items?.skip",onClick:e[3]||(e[3]=i=>l.previous())}," Previous "),t("div",W,r(((n=s.items)==null?void 0:n.skip)+1)+" - "+r(((a=s.items)==null?void 0:a.skip)+((m=(d=s.items)==null?void 0:d.data)==null?void 0:m.length))+" of "+r((c=s.items)==null?void 0:c.total),1),t("button",{class:"p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100",disabled:"!items || (items?.skip + items?.data?.length) >= items?.data?.length",onClick:e[4]||(e[4]=i=>l.next())}," Next ")]),t("div",q,[(o(!0),b(j,null,T((h=s.items)==null?void 0:h.data,i=>(o(),b("button",{onClick:O=>s.current=i,class:"rounded hover:bg-slate-200 font-extralight mb-1 text-left w-full bg-slate-50 py-1 px-2"},r(i.repo_tags||i.repo_digests),9,E))),256))]),t("div",L,[t("button",{class:"p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100",disabled:"!items?.skip",onClick:e[5]||(e[5]=i=>l.previous())}," Previous "),t("div",M,r(((p=s.items)==null?void 0:p.skip)+1)+" - "+r(((g=s.items)==null?void 0:g.skip)+((f=(u=s.items)==null?void 0:u.data)==null?void 0:f.length))+" of "+r((v=s.items)==null?void 0:v.total),1),t("button",{class:"p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100",disabled:"!items || (items?.skip + items?.data?.length) >= items?.data?.length",onClick:e[6]||(e[6]=i=>l.next())}," Next ")])]),t("div",U,[z,t("pre",null,"				"+r(s.current)+`
				`,1)])])]}),_:1},8,["renderer"])}const Z=y(N,[["render",G]]);export{Z as default};
