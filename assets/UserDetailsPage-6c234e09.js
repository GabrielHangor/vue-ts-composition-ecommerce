import{d as E,u as T,g as q,f as A,h as R,b as Z,c as G,i as r,j as s,k as d,w as H,l as I,_ as J,m as K}from"./index-4dd5360d.js";import{u as O,_ as o,r as u,e as Q,c as W,m as X,b as S}from"./index.esm-0a1416dd.js";import"./browser-ponyfill-10e9505f.js";const Y={class:"container"},ee=["onSubmit"],ae=r("h2",{class:"font-semibold"},"Personal information",-1),le={class:"grid gap-3 md:grid-cols-2"},se=r("h2",{class:"font-semibold"},"Contact information",-1),te={class:"grid gap-3 md:grid-cols-2"},oe=r("h2",{class:"font-semibold"},"Address",-1),re={class:"grid gap-3 md:grid-cols-2"},ie={class:"flex flex-col items-center justify-center pt-3"},pe=E({__name:"UserDetailsPage",setup(de){var p,c,v,f,V,g,_,b,y,N,$,U,h,C,w,x;const{user:t,error:n,isLoading:B,updateUserData:L}=T(),m=q(),e=A({email:((c=(p=t.value)==null?void 0:p.user_metadata)==null?void 0:c.email)||"",phone:((f=(v=t.value)==null?void 0:v.user_metadata)==null?void 0:f.phone)||"",firstName:((g=(V=t.value)==null?void 0:V.user_metadata)==null?void 0:g.firstName)||"",lastName:((b=(_=t.value)==null?void 0:_.user_metadata)==null?void 0:b.lastName)||"",country:((N=(y=t.value)==null?void 0:y.user_metadata)==null?void 0:N.country)||"",city:((U=($=t.value)==null?void 0:$.user_metadata)==null?void 0:U.city)||"",zipCode:((C=(h=t.value)==null?void 0:h.user_metadata)==null?void 0:C.zipCode)||"",street:((x=(w=t.value)==null?void 0:w.user_metadata)==null?void 0:x.street)||""}),M=async()=>{await i.value.$validate()&&(await L(e.value),n.value?m.error(n.value||"Unknown error"):m.success("User information updated"),i.value.$reset())},P=R(()=>({email:{required:u,email:Q},phone:{required:u,phone_validation:W.withMessage("Minimum 6 digits",X(6))},firstName:{required:u,alpha:S},lastName:{required:u,alpha:S},country:{},city:{},zipCode:{},street:{}})),i=O(P,e,{$autoDirty:!0});return(j,a)=>{var z,D,k,F;return Z(),G("div",Y,[r("form",{class:"grid w-full gap-5 rounded-xl bg-orange-base/5 p-5",onSubmit:K(M,["prevent"])},[ae,r("section",le,[s(o,{modelValue:e.value.firstName,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value.firstName=l),label:"First name",error:(z=d(i).firstName.$errors[0])==null?void 0:z.$message},null,8,["modelValue","error"]),s(o,{modelValue:e.value.lastName,"onUpdate:modelValue":a[1]||(a[1]=l=>e.value.lastName=l),label:"Last name",error:(D=d(i).lastName.$errors[0])==null?void 0:D.$message},null,8,["modelValue","error"])]),se,r("section",te,[s(o,{modelValue:e.value.email,"onUpdate:modelValue":a[2]||(a[2]=l=>e.value.email=l),label:"Email",error:(k=d(i).email.$errors[0])==null?void 0:k.$message},null,8,["modelValue","error"]),s(o,{type:"number",modelValue:e.value.phone,"onUpdate:modelValue":a[3]||(a[3]=l=>e.value.phone=l),label:"Phone",error:(F=d(i).phone.$errors[0])==null?void 0:F.$message},null,8,["modelValue","error"])]),oe,r("section",re,[s(o,{modelValue:e.value.country,"onUpdate:modelValue":a[4]||(a[4]=l=>e.value.country=l),label:"Country"},null,8,["modelValue"]),s(o,{modelValue:e.value.city,"onUpdate:modelValue":a[5]||(a[5]=l=>e.value.city=l),label:"City"},null,8,["modelValue"]),s(o,{modelValue:e.value.zipCode,"onUpdate:modelValue":a[6]||(a[6]=l=>e.value.zipCode=l),label:"Zip code"},null,8,["modelValue"]),s(o,{modelValue:e.value.street,"onUpdate:modelValue":a[7]||(a[7]=l=>e.value.street=l),label:"Street address"},null,8,["modelValue"])]),r("div",ie,[s(J,{loading:d(B),"is-disabled":!d(i).$anyDirty,class:"md:w-1/4"},{default:H(()=>[I(" Submit changes ")]),_:1},8,["loading","is-disabled"])])],40,ee)])}}});export{pe as default};