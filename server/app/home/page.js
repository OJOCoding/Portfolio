(()=>{var e={};e.id=620,e.ids=[620],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},2172:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>h,pages:()=>c,routeModule:()=>m,tree:()=>d});var o=r(260),s=r(8203),n=r(5155),i=r.n(n),a=r(7292),l={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let d=["",{children:["home",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,6851)),"C:\\Users\\20200\\Documents\\Portfolio\\portfolio\\src\\app\\home\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,2475))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,7603)),"C:\\Users\\20200\\Documents\\Portfolio\\portfolio\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,2475))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\20200\\Documents\\Portfolio\\portfolio\\src\\app\\home\\page.tsx"],h={require:r,loadChunk:()=>Promise.resolve()},m=new o.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/home/page",pathname:"/home",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},4461:(e,t,r)=>{Promise.resolve().then(r.bind(r,185)),Promise.resolve().then(r.bind(r,5837)),Promise.resolve().then(r.bind(r,2561)),Promise.resolve().then(r.bind(r,2795)),Promise.resolve().then(r.bind(r,1227)),Promise.resolve().then(r.t.bind(r,9607,23)),Promise.resolve().then(r.t.bind(r,1066,23)),Promise.resolve().then(r.bind(r,3001)),Promise.resolve().then(r.bind(r,7752))},8429:(e,t,r)=>{Promise.resolve().then(r.bind(r,9613)),Promise.resolve().then(r.bind(r,7761)),Promise.resolve().then(r.bind(r,3440)),Promise.resolve().then(r.bind(r,1323)),Promise.resolve().then(r.bind(r,8782)),Promise.resolve().then(r.t.bind(r,8531,23)),Promise.resolve().then(r.t.bind(r,1902,23)),Promise.resolve().then(r.bind(r,941)),Promise.resolve().then(r.bind(r,7876))},8886:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},2446:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,1284,23)),Promise.resolve().then(r.t.bind(r,7174,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},7784:(e,t,r)=>{Promise.resolve().then(r.bind(r,6851))},2632:(e,t,r)=>{Promise.resolve().then(r.bind(r,6095))},941:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});var o=r(8009),s=r(9334);let n=()=>{let e=(0,s.usePathname)();return(0,o.useEffect)(()=>{if("undefined"!=typeof document)switch(document.body.className="",e){case"/":document.body.classList.add("home");break;case"/about":document.body.classList.add("about");break;case"/projects":document.body.classList.add("projects");break;default:document.body.classList.add("default-page")}},[e]),null}},7876:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var o=r(5512),s=r(8009),n=r(5210),i=r(8784),a=r(1969);let l=()=>{let[e,t]=(0,s.useState)("light");return(0,s.useEffect)(()=>{let e=localStorage.getItem("theme")||"light";t(e),document.body.setAttribute("data-theme",e)},[]),(0,o.jsx)(n.A,{onClick:()=>{let r="light"===e?"dark":"light";t(r),document.body.setAttribute("data-theme",r),localStorage.setItem("theme",r)},"aria-label":"Toggle theme",style:{position:"fixed",bottom:"1rem",left:"1rem",backgroundColor:"var(--primary-bg)",color:"var(--primary-text)"},children:"light"===e?(0,o.jsx)(i.A,{}):(0,o.jsx)(a.A,{})})}},6095:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var o=r(5512),s=r(5729),n=r(8009),i=r(5103);r(1963);var a=r(2138);let l=()=>((0,n.useEffect)(()=>{document.querySelectorAll(".codedText").forEach(t=>{let r=t.innerHTML.split(""),o=[];r.forEach((t,r)=>o[r]=e()),t.onpointerover=()=>{let s=a.os.timeline(),n=0;s.fromTo(t,{innerHTML:o.join("")},{duration:r.length/10,ease:"power4.in",delay:.1,onUpdate:()=>{let i=Math.floor(s.progress()*r.length);if(n!==i){n=i,r.forEach((t,r)=>o[r]=e());let s=r.join("").substring(i,0),a=o.join("").substring(o.length-i,0);t.innerHTML=s+a}}})}});function e(){let e="abcdefghijklmnopqrstuvwxyz1234567890!@#$^&*()…\xe6_+-=;[]/~`",t=e[Math.floor(Math.random()*e.length)];return Math.random()>.5?t.toUpperCase():t}},[]),(0,o.jsxs)("main",{className:"home-container",children:[(0,o.jsxs)("div",{className:"title-container",children:[(0,o.jsx)("h1",{className:"codedText",children:"ONI LUCA"}),(0,o.jsx)("h3",{id:"text-effect",children:"Empowering People Through Thoughtful Design, Advancing Technology Through Innovative Development."})]}),(0,o.jsxs)("div",{className:"spline-container",children:[(0,o.jsx)(s.A,{onLoad:e=>e.setGlobalEvents(!0),scene:"https://prod.spline.design/0Vt4vZoLzFCc-dZI/scene.splinecode"}),(0,o.jsx)("div",{className:"bg-box"})]}),(0,o.jsx)(i.default,{className:"heart",src:"/Portfolio/Heart.png",alt:"EYE Illustration",width:300,height:300}),(0,o.jsx)("footer",{className:"footer",children:"\xa9 2025 Oni Luca | All Rights Reserved | I honestly don't know what to put here <3"})]}))},3001:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});let o=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\20200\\\\Documents\\\\Portfolio\\\\portfolio\\\\src\\\\app\\\\BodyClassManager.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\20200\\Documents\\Portfolio\\portfolio\\src\\app\\BodyClassManager.tsx","default")},7752:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});let o=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\20200\\\\Documents\\\\Portfolio\\\\portfolio\\\\src\\\\app\\\\ThemeSwitcher.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\20200\\Documents\\Portfolio\\portfolio\\src\\app\\ThemeSwitcher.tsx","default")},6851:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});let o=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\20200\\\\Documents\\\\Portfolio\\\\portfolio\\\\src\\\\app\\\\home\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\20200\\Documents\\Portfolio\\portfolio\\src\\app\\home\\page.tsx","default")},7603:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x,metadata:()=>v});var o=r(2740),s=r(6765),n=r.n(s);r(1135),r(6301);var i=r(2561),a=r(1227),l=r(2795),d=r(9607),c=r.n(d),h=r(5635);r(2032);var m=r(185),p=r(5837);let u=()=>(0,o.jsx)(i.default,{position:"static",color:"transparent",elevation:0,children:(0,o.jsx)(a.default,{className:"navbar-toolbar",children:(0,o.jsxs)(l.default,{component:"ul",className:"navbar-list",children:[(0,o.jsx)("li",{children:(0,o.jsxs)(c(),{href:"/about",className:"navbar-link","aria-label":"Who am I?",children:[(0,o.jsx)(m.default,{}),(0,o.jsx)("span",{children:"WHO AM I?"})]})}),(0,o.jsx)("li",{children:(0,o.jsx)(c(),{href:"/","aria-label":"Home",children:(0,o.jsx)(h.default,{src:"/Portfolio/OJO.png",alt:"Logo",width:80,height:48,className:"navbar-logo"})})}),(0,o.jsx)("li",{children:(0,o.jsxs)(c(),{href:"/projects",className:"navbar-link","aria-label":"What do I do?",children:[(0,o.jsx)(p.default,{}),(0,o.jsx)("span",{children:"WHAT DO I DO?"})]})})]})})});var f=r(7752),b=r(3001);let v={title:"Oni Luca",description:"A portfolio website for Oni Luca.",openGraph:{title:"Oni Luca",description:"A portfolio website for Oni Luca.",url:"https://yourwebsite.com",siteName:"Oni Luca",images:[{url:"/og-image.png",width:1200,height:630,alt:"Oni Luca's Portfolio"}],type:"website"},twitter:{card:"summary_large_image",title:"Oni Luca",description:"A portfolio website for Oni Luca.",images:["/og-image.png"]}};function x({children:e}){return(0,o.jsx)("html",{lang:"en",dir:"ltr",children:(0,o.jsxs)("body",{className:`${n().variable}`,children:[(0,o.jsx)(u,{}),(0,o.jsx)(f.default,{}),(0,o.jsx)(b.default,{}),e]})})}},2475:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var o=r(8077);let s=async e=>[{type:"image/x-icon",sizes:"96x96",url:(0,o.fillMetadataSegment)("/Portfolio",await e.params,"favicon.ico")+""}]},1135:()=>{},1963:()=>{},2032:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[638,135,411,710],()=>r(2172));module.exports=o})();