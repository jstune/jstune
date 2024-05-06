import{W as x}from"./UtilityNavbar-CEiPLCTg.js";import _ from"./TemplateSidemenu-DcxUiyDq.js";import{_ as y,c as C,w as S,r as $,o as n,b as t,d as I,v as D,e as N,t as l,f as k,g as B,F as T}from"./index-DSz0qxqj.js";const j={components:{WrapperPage:x,TemplateSidemenu:_},inject:["menus","io"],props:["renderer"],data:()=>({service:"docker_services_networks",items:null,current:null,search:""}),async created(){await this.getItems()},methods:{async getItems(){var s;try{const e={};this.items&&(e.$limit=(s=this.items)==null?void 0:s.limit),this.search&&(e.$or=[{address:{$like:`%${this.search}%`}},{docker_network_id:{$like:`%${this.search}%`}},{docker_service_id:{$like:`%${this.search}%`}}]),this.items=await this.io.service(this.service).find({query:e})}catch(e){this.items=null,console.error(e)}},next(){this.items&&(this.items.skip+=this.items.limit)},previous(){this.items&&(this.items.skip-=this.items.limit)}}},P={class:"flex h-full flex-col md:flex-row"},A={class:"flex-col flex w-full md:w-1/2"},F=t("h2",{class:"font-light text-lg p-4 max-w-full"}," Docker Services Networks ",-1),K={class:"flex px-4"},V={class:"px-4 pt-4 md:hidden flex"},W={class:"text-sm justify-items-center content-center text-center grow"},q={class:"px-4 pt-4 grow"},E=["onClick"],L={class:"p-4 hidden md:flex"},M={class:"text-sm justify-items-center content-center text-center grow"},U={class:"grow p-4"},z=t("h2",{class:"font-light text-lg max-w-full"}," Details & Actions ",-1);function G(s,e,b,H,J,r){const w=$("TemplateSidemenu");return n(),C(w,{title:"Applications",renderer:b.renderer},{default:S(()=>{var o,a,d,m,c,h,u,p,g,f,v;return[t("div",P,[t("div",A,[F,t("div",K,[I(t("input",{"onUpdate:modelValue":e[0]||(e[0]=i=>s.search=i),placeholder:"Search",onKeypress:e[1]||(e[1]=N((...i)=>r.getItems&&r.getItems(...i),["enter"])),class:"rounded-l bg-slate-50 grow p-2"},null,544),[[D,s.search]]),t("button",{onClick:e[2]||(e[2]=(...i)=>r.getItems&&r.getItems(...i)),class:"hover:bg-slate-200 font-extralight rounded-r p-2 bg-slate-100"}," Search ")]),t("div",V,[t("button",{class:"p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100",disabled:"!items?.skip",onClick:e[3]||(e[3]=i=>r.previous())}," Previous "),t("div",W,l(((o=s.items)==null?void 0:o.skip)+1)+" - "+l(((a=s.items)==null?void 0:a.skip)+((m=(d=s.items)==null?void 0:d.data)==null?void 0:m.length))+" of "+l((c=s.items)==null?void 0:c.total),1),t("button",{class:"p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100",disabled:"!items || (items?.skip + items?.data?.length) >= items?.data?.length",onClick:e[4]||(e[4]=i=>r.next())}," Next ")]),t("div",q,[(n(!0),k(T,null,B((h=s.items)==null?void 0:h.data,i=>(n(),k("button",{onClick:O=>s.current=i,class:"rounded hover:bg-slate-200 font-extralight mb-1 text-left w-full bg-slate-50 py-1 px-2"},l(i.address),9,E))),256))]),t("div",L,[t("button",{class:"p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100",disabled:"!items?.skip",onClick:e[5]||(e[5]=i=>r.previous())}," Previous "),t("div",M,l(((u=s.items)==null?void 0:u.skip)+1)+" - "+l(((p=s.items)==null?void 0:p.skip)+((f=(g=s.items)==null?void 0:g.data)==null?void 0:f.length))+" of "+l((v=s.items)==null?void 0:v.total),1),t("button",{class:"p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100",disabled:"!items || (items?.skip + items?.data?.length) >= items?.data?.length",onClick:e[6]||(e[6]=i=>r.next())}," Next ")])]),t("div",U,[z,t("pre",null,"				"+l(s.current)+`
				`,1)])])]}),_:1},8,["renderer"])}const Y=y(j,[["render",G]]);export{Y as default};