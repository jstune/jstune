import{T as p}from"./TemplateSetup-2Lfr8Yyl.js";import{_ as r,c as u,w as c,r as m,o as h,d as f,e as a,v as n,b as o,t as g}from"./index-D_xPZ3M1.js";import"./UtilityNavbar-1R74y5Lk.js";import"./TemplateDefault-BB2f3Q65.js";const b={inject:["io"],components:{TemplateSetup:p},data:()=>({config:{leaderIP:"",appURL:"",adminHost:""},loading:!1}),async created(){await this.connect(),this.config.leaderIP=this.getIP()},methods:{async connect(){this.loading=!0;const t=await this.io.service("setup").get("host");this.resolve(t)},async setup(){this.loading=!0;let t=await this.io.service("setup").update("host",{...this.config});this.resolve(t)},async resolve(t){console.log("res",t),t&&!t.ready||this.$router.push("/login"),this.loading=!1},getIP(){const t=location.hostname;return/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(t)?t:""}}},v=o("h2",{class:"mb-2"}," Setup Host ",-1),w=["disabled"],I={class:"mt-2"};function P(t,e,l,y,S,i){const d=m("TemplateSetup");return h(),u(d,null,{default:c(()=>[v,f(),a(o("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>t.config.leaderIP=s),class:"mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full",placeholder:"Leader IP: 127.0.0.1"},null,512),[[n,t.config.leaderIP]]),a(o("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>t.config.appURL=s),class:"mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full",placeholder:"API hostname: http://localhost"},null,512),[[n,t.config.appURL]]),a(o("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>t.config.adminHost=s),class:"mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full",placeholder:"Admin url: http://admin.localhost"},null,512),[[n,t.config.adminHost]]),o("button",{onClick:e[3]||(e[3]=s=>i.setup()),disabled:t.loading,class:"hover:bg-fuchsia-950 mt-4 rounded-lg bg-fuchsia-900 w-full p-3",title:"Setup host"}," Submit ",8,w),o("h2",I," Loading: "+g(t.loading),1)]),_:1})}const H=r(b,[["render",P]]);export{H as default};