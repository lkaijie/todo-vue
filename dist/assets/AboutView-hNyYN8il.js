import{d as b,f,r as v,c as l,u as k,G as m,g as p,s as y,a as x,o as r,p as I,b as A,e as t,h as c,_ as U}from"./index-GQHv8lP6.js";const g=s=>(I("data-v-8a4c2b1c"),s=s(),A(),s),T={class:"about"},V=g(()=>t("h1",null,"About",-1)),C=g(()=>t("div",{class:"content"},[c(" This app requires sign in to work, currently only supports Oauth 2.0 for google logins, database and authentication implemented with "),t("span",null,"Firebase"),c(", built with "),t("span",null,"Vue"),c(" and "),t("span",null,"Typescript"),c(". ")],-1)),P={key:1,class:"logged-in"},B=b({__name:"AboutView",setup(s){const i=new f;var h=v(i.checkUserLoggedIn());async function w(){const u=new m;try{const n=await y(p(),u);console.log(n);const G=x(),a=p().currentUser;await i.checkUserExists(a==null?void 0:a.email).then(_=>{if(_===!0){console.log("About view, user already exists, logging in");const o=window.location.href.split("/");o.pop();const e=o.join("/");console.log(e),window.location.replace(e)}else i.createNewUser(a).then(o=>{console.log("about view, user does not exists, creating user"),console.log(o);const e=window.location.href.split("/");e.pop();const d=e.join("/");console.log(d),window.location.replace(d)}).catch(o=>{console.log("error creating user"),console.log(o)})})}catch(n){console.log("sign in error",n)}}return(u,n)=>(r(),l("div",T,[V,C,k(h)?(r(),l("div",P," You are logged in! Click on the Home Tab to view your Todos ")):(r(),l("button",{key:0,onClick:w,class:"login-button"}," Click here to login "))]))}}),N=U(B,[["__scopeId","data-v-8a4c2b1c"]]);export{N as default};