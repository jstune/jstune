import{W as g}from"./UtilityNavbar-CWGxmJad.js";import y from"./TemplateDefault-D3Kgiriu.js";import{S as U}from"./SectionHero-C_6iJc_B.js";import{_ as V,c as C,w as p,r as b,o as l,a as m,b as e,e as o,v as d,f as k,g as n,h as u,F as h,t as x}from"./index-D3W76SEB.js";const S={inject:["menus","io"],props:["renderer"],components:{WrapperPage:g,TemplateDefault:y,SectionHero:U},data:()=>({items:null,dnsProvidersSupported:[],service:"dns_providers",create:{name:"",provider_key:"",key:"",secret:"",base_url:""}}),async created(){try{this.resetCreate(),await this.getItems(),await this.getDNSProvidersSupported()}catch{}},methods:{async getItems(){this.items=await this.io.service(this.service).find({query:{}})},async getDNSProvidersSupported(){this.dnsProvidersSupported=await this.io.service("dns_providers_supported").find()},async createItem(){try{await this.io.service(this.service).create(this.create),await this.getItems(),this.resetCreate()}catch(s){console.error(s),alert(s.message)}},async updateItem(s){try{const r=await this.io.service(this.service).update(s.id,s);for(const i of Object.keys(s))s[i]=r[i]}catch(r){console.error(r),alert(r.message)}},async removeItem(s){try{await this.io.service(this.service).remove(s.id),await this.getItems()}catch(r){console.error(r),alert(r.message)}},resetCreate(){this.create={name:"",provider_key:"",key:"",secret:"",base_url:""}}}},z=e("h1",{class:"font-thin text-xl lg:text-3xl xl:pl-6 w-full text-center uppercase"}," DNS Providers ",-1),P={class:"relative overflow-auto w-full"},I={class:"flex-row-reverse flex"},D={class:"overflow-auto shadow-sm my-8"},M={class:"border-collapse table-auto w-full text-sm"},B=e("thead",null,[e("tr",null,[e("th",{class:"border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"}," ID "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Name "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Provider Key "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Key / Token "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Secret "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Base URL "),e("th",{class:"whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Created at "),e("th",{class:"whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Updated at "),e("th",{class:"border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-center"}," Publish "),e("th",{class:"border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-center"}," Remove ")])],-1),N={class:"bg-white dark:bg-slate-800"},H=e("td",{class:"text-ellipsis overflow-hidden border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"},null,-1),A={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},T={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},L=["value"],W={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},R={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},j={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},F=e("td",{class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},[e("input",{class:"shadow"})],-1),K=e("td",{class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},[e("input",{class:"shadow"})],-1),q={class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},E=e("path",{"fill-rule":"evenodd",d:"M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z","clip-rule":"evenodd"},null,-1),O=e("path",{d:"M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"},null,-1),G=[E,O],J=e("td",{class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700"},[e("path",{"fill-rule":"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z","clip-rule":"evenodd"})])],-1),Q={class:"text-ellipsis overflow-hidden border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"},X={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},Y=["onUpdate:modelValue"],Z={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},$=["onUpdate:modelValue"],ee=["value"],te={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},se=["onUpdate:modelValue"],re={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},ae=["onUpdate:modelValue"],oe={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},le=["onUpdate:modelValue"],de={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},ne=["onUpdate:modelValue"],ce={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},ie=["onUpdate:modelValue"],pe={class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},be=["onClick"],ue=e("path",{"fill-rule":"evenodd",d:"M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z","clip-rule":"evenodd"},null,-1),he=e("path",{d:"M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"},null,-1),xe=[ue,he],_e={class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},me=["onClick"],ke=e("path",{"fill-rule":"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z","clip-rule":"evenodd"},null,-1),ve=[ke];function we(s,r,i,fe,ge,c){const v=b("SectionHero"),w=b("WrapperPage"),f=b("TemplateDefault");return l(),C(f,{title:"DNS Providers",renderer:i.renderer},{default:p(()=>[m(v,null,{default:p(()=>[z]),_:1}),m(w,{class:"max-w-screen-2xl p-6"},{default:p(()=>{var _;return[e("div",P,[e("div",I,[e("button",{class:"rounded p-2 bg-slate-200",onClick:r[0]||(r[0]=(...t)=>c.getItems&&c.getItems(...t))}," Reload ")]),e("div",D,[e("table",M,[B,e("tbody",N,[e("tr",null,[H,e("td",A,[o(e("input",{"onUpdate:modelValue":r[1]||(r[1]=t=>s.create.name=t),class:"shadow"},null,512),[[d,s.create.name]])]),e("td",T,[o(e("select",{"onUpdate:modelValue":r[2]||(r[2]=t=>s.create.provider_key=t),class:"h-5 w-40 shadow"},[(l(!0),n(h,null,u(s.dnsProvidersSupported,t=>(l(),n("option",{value:t},x(t),9,L))),256))],512),[[k,s.create.provider_key]])]),e("td",W,[o(e("input",{"onUpdate:modelValue":r[3]||(r[3]=t=>s.create.key=t),class:"shadow"},null,512),[[d,s.create.key]])]),e("td",R,[o(e("input",{"onUpdate:modelValue":r[4]||(r[4]=t=>s.create.secret=t),class:"shadow"},null,512),[[d,s.create.secret]])]),e("td",j,[o(e("input",{"onUpdate:modelValue":r[5]||(r[5]=t=>s.create.base_url=t),class:"shadow"},null,512),[[d,s.create.base_url]])]),F,K,e("td",q,[(l(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700",onClick:r[6]||(r[6]=(...t)=>c.createItem&&c.createItem(...t))},G))]),J]),(l(!0),n(h,null,u((_=s.items)==null?void 0:_.data,t=>(l(),n("tr",null,[e("td",Q,x(t.id),1),e("td",X,[o(e("input",{class:"shadow","onUpdate:modelValue":a=>t.name=a},null,8,Y),[[d,t.name]])]),e("td",Z,[o(e("select",{"onUpdate:modelValue":a=>t.provider_key=a,class:"h-5 w-40 shadow"},[(l(!0),n(h,null,u(s.dnsProvidersSupported,a=>(l(),n("option",{value:a},x(a),9,ee))),256))],8,$),[[k,t.provider_key]])]),e("td",te,[o(e("input",{class:"shadow","onUpdate:modelValue":a=>t.key=a},null,8,se),[[d,t.key]])]),e("td",re,[o(e("input",{class:"shadow","onUpdate:modelValue":a=>t.secret=a},null,8,ae),[[d,t.secret]])]),e("td",oe,[o(e("input",{class:"shadow","onUpdate:modelValue":a=>t.base_url=a},null,8,le),[[d,t.base_url]])]),e("td",de,[o(e("input",{class:"shadow","onUpdate:modelValue":a=>t.created_at=a},null,8,ne),[[d,t.created_at]])]),e("td",ce,[o(e("input",{class:"shadow","onUpdate:modelValue":a=>t.updated_at=a},null,8,ie),[[d,t.updated_at]])]),e("td",pe,[(l(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700",onClick:a=>c.updateItem(t)},xe,8,be))]),e("td",_e,[(l(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700",onClick:a=>c.removeItem(t)},ve,8,me))])]))),256))])])])])]}),_:1})]),_:1},8,["renderer"])}const Se=V(S,[["render",we]]);export{Se as default};
