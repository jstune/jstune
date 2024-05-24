import{W as p}from"./UtilityNavbar-1R74y5Lk.js";import m from"./TemplateDefault-BB2f3Q65.js";import{S as f}from"./SectionHero-CWYrQfvD.js";import{_ as h,c as x,w as r,r as l,o as _,a as i,b as e,t as w}from"./index-D_xPZ3M1.js";const y={components:{WrapperPage:p,TemplateDefault:m,SectionHero:f},inject:["io"],props:["renderer"],data:()=>({address:""}),async created(){try{await this.inspectLeader()}catch{}},methods:{async inspectLeader(){var a;const t=await this.io.service("state").get();if(t.leaderIP)this.address=t.leaderIP;else{const s=await this.io.service("docker_nodes").find({query:{leader:!0}}),o=(a=s==null?void 0:s.data)==null?void 0:a[0];o&&(this.address=o.address)}},async update(){if(!confirm("Are you sure you want to update jstune?"))return!1;await this.io.service("exec").patch("update"),alert("jstune will automtically be restarted after update is completed")},async updateNPM(){if(!confirm("Are you sure you want to update packages?"))return!1;await this.io.service("exec").patch("update-npm"),alert("jstune will automtically be restarted after update is completed")},async updateUI(){if(!confirm("Are you sure you want to update admin ui?"))return!1;await this.io.service("exec").patch("update-ui"),location.reload()},async reboot(){if(!confirm("Are you sure you want to reboot?"))return!1;await this.io.service("exec").patch("reboot"),setTimeout(()=>{location.reload()},3e3)}}},b=e("h1",{class:"font-thin text-xl lg:text-3xl xl:pl-6 w-full text-center"}," Monitor ",-1),g={class:"flex-col max-w-md place-self-center mt-8 mb-24 w-full flex md:max-w-4xl"},v=e("h1",{class:"px-4 mb-2 mt-6 font-medium text-3xl w-full"}," Important monitoring statistics should be added here ",-1),P={class:"px-4 mb-4 mt-2 font-medium text-xl w-full"},k=e("div",{class:"mt-6 relative mb-16 flex-col md:flex-row flex w-full"},[e("div",{class:"h-64 w-full p-4 rounded bg-slate-50"}),e("div",{class:"-mb-6 bg-slate-100 -bottom-5 absolute h-0.5 left-2 right-2"})],-1),S=e("input",{class:"p-4 my-4 bg-slate-50 rounded"},null,-1);function j(t,a,s,o,A,n){const c=l("SectionHero"),d=l("WrapperPage"),u=l("TemplateDefault");return _(),x(u,{renderer:s.renderer},{default:r(()=>[i(c,null,{default:r(()=>[b]),_:1}),i(d,{class:"flex-col"},{default:r(()=>[e("div",g,[v,e("h1",P," Leader node address: "+w(t.address),1),k,S,e("button",{class:"p-4 rounded bg-slate-200",onClick:a[0]||(a[0]=D=>n.update())}," Go ")])]),_:1})]),_:1},8,["renderer"])}const C=h(y,[["render",j]]);export{C as default};