import{d as x,u as z,f as S,c as k,h as d,i as t,w as B,j as D,_ as P,l as j,b as E,k as F}from"./index-aa0aad6b.js";import{_ as s}from"./BaseInput.vue_vue_type_script_setup_true_lang-35a18b74.js";import"./browser-ponyfill-10e9505f.js";const L={class:"container"},$=["onSubmit"],A=d("h2",{class:"font-semibold"},"Personal information",-1),M={class:"grid gap-3 md:grid-cols-2"},T=d("h2",{class:"font-semibold"},"Contact information",-1),Z={class:"grid gap-3 md:grid-cols-2"},q=d("h2",{class:"font-semibold"},"Address",-1),G={class:"grid gap-3 md:grid-cols-2"},H={class:"flex justify-center pt-3"},R=x({__name:"UserDetailsPage",setup(I){var u,n,m,i,r,p,v,V,f,_,c,g,b,y,U,N;const{user:o,isLoading:C,updateUserData:h}=z(),e=S({email:((n=(u=o.value)==null?void 0:u.user_metadata)==null?void 0:n.email)||"",phone:((i=(m=o.value)==null?void 0:m.user_metadata)==null?void 0:i.phone)||"",firstName:((p=(r=o.value)==null?void 0:r.user_metadata)==null?void 0:p.firstName)||"",lastName:((V=(v=o.value)==null?void 0:v.user_metadata)==null?void 0:V.lastName)||"",country:((_=(f=o.value)==null?void 0:f.user_metadata)==null?void 0:_.country)||"",city:((g=(c=o.value)==null?void 0:c.user_metadata)==null?void 0:g.city)||"",zipCode:((y=(b=o.value)==null?void 0:b.user_metadata)==null?void 0:y.zipCode)||"",street:((N=(U=o.value)==null?void 0:U.user_metadata)==null?void 0:N.street)||""}),w=async()=>{await h(e.value)};return(J,a)=>(E(),k("div",L,[d("form",{class:"grid w-full gap-5 rounded-xl bg-orange-base/5 p-5",onSubmit:j(w,["prevent"])},[A,d("section",M,[t(s,{modelValue:e.value.firstName,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value.firstName=l),label:"First name"},null,8,["modelValue"]),t(s,{modelValue:e.value.lastName,"onUpdate:modelValue":a[1]||(a[1]=l=>e.value.lastName=l),label:"Last name"},null,8,["modelValue"])]),T,d("section",Z,[t(s,{modelValue:e.value.email,"onUpdate:modelValue":a[2]||(a[2]=l=>e.value.email=l),label:"Email"},null,8,["modelValue"]),t(s,{modelValue:e.value.phone,"onUpdate:modelValue":a[3]||(a[3]=l=>e.value.phone=l),label:"Phone"},null,8,["modelValue"])]),q,d("section",G,[t(s,{modelValue:e.value.country,"onUpdate:modelValue":a[4]||(a[4]=l=>e.value.country=l),label:"Country"},null,8,["modelValue"]),t(s,{modelValue:e.value.city,"onUpdate:modelValue":a[5]||(a[5]=l=>e.value.city=l),label:"City"},null,8,["modelValue"]),t(s,{modelValue:e.value.zipCode,"onUpdate:modelValue":a[6]||(a[6]=l=>e.value.zipCode=l),label:"Zip code"},null,8,["modelValue"]),t(s,{modelValue:e.value.street,"onUpdate:modelValue":a[7]||(a[7]=l=>e.value.street=l),label:"Street address"},null,8,["modelValue"])]),d("div",H,[t(P,{loading:D(C),class:"md:w-1/4"},{default:B(()=>[F("Submit changes")]),_:1},8,["loading"])])],40,$)]))}});export{R as default};