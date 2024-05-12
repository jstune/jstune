import{T as d}from"./TemplateSetup-uwalHaXH.js";import{_ as p,c as u,w as g,r as c,o as f,d as n,e as a,v as l,b as o,l as m,t as h}from"./index-m8PO5z8G.js";import"./UtilityNavbar-CfWenth8.js";import"./TemplateDefault-C1Q78xwR.js";const w={inject:["io"],components:{TemplateSetup:d},data:()=>({config:{token:"",ip:"",port:"",role:"worker"},loading:!1}),async created(){await this.connect()},methods:{async connect(){this.loading=!0;const e=await this.io.service("setup").get("swarm");this.resolve(e)},async setup(e=!1){this.loading=!0;let t=await this.io.service("setup").update("swarm",{...this.config,create:e});this.resolve(t)},async resolve(e){e&&!e.ready?(this.config=e.config,this.config.role||(this.config.role="worker")):this.$router.push("/login"),this.loading=!1}}},b=o("h2",{class:"mb-2"}," Connect to swarm ",-1),v=o("option",{value:"worker"},"Worker",-1),k=o("option",{value:"manager"},"Manager",-1),y=[v,k],x=["disabled"],S=["disabled"],T={class:"mt-2"};function C(e,t,V,$,U,i){const r=c("TemplateSetup");return f(),u(r,null,{default:g(()=>[b,n(),a(o("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>e.config.ip=s),class:"mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full",placeholder:"IP:"},null,512),[[l,e.config.ip]]),n(),a(o("input",{"onUpdate:modelValue":t[1]||(t[1]=s=>e.config.port=s),class:"mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full",placeholder:"Port:"},null,512),[[l,e.config.port]]),a(o("input",{"onUpdate:modelValue":t[2]||(t[2]=s=>e.config.token=s),class:"mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full",placeholder:"Token:"},null,512),[[l,e.config.token]]),n(),a(o("select",{"onUpdate:modelValue":t[3]||(t[3]=s=>e.config.role=s),class:"mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"},y,512),[[m,e.config.role]]),n(),o("button",{onClick:t[4]||(t[4]=s=>i.setup()),disabled:e.loading,class:"hover:bg-fuchsia-950 mt-2 rounded-lg bg-fuchsia-900 w-full p-3",title:"Install using already running database instance"}," Connect to existing swarm ",8,x),n(),o("button",{onClick:t[5]||(t[5]=s=>i.setup(!0)),disabled:e.loading,class:"hover:bg-fuchsia-950 mt-4 rounded-lg bg-fuchsia-900 w-full p-3",title:"Install using already running database instance"}," Create a new swarm ",8,S),o("h2",T," Loading: "+h(e.loading),1)]),_:1})}const D=p(w,[["render",C]]);export{D as default};