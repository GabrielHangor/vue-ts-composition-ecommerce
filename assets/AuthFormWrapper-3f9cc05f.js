import{d as P,f,u as D,g as E,b as u,c as g,h as t,i,w as x,_ as k,j as a,k as R,t as L,e as N,l as S,m as I,r as W,T as A,n as H,p as Y,q as O}from"./index-aa0aad6b.js";import{_ as b}from"./BaseInput.vue_vue_type_script_setup_true_lang-35a18b74.js";import{r as V,e as T,c as M,m as j,u as B,s as q}from"./index.esm-0da6d498.js";import"./browser-ponyfill-10e9505f.js";const z="/vue-ts-composition-ecommerce/google-auth-icon.svg",J="/vue-ts-composition-ecommerce/github-auth-icon.svg",K=["onSubmit"],Q=t("h2",{class:"text-center text-[22px] font-bold"},"Sign in",-1),X={class:"flex flex-col gap-2"},Z=t("div",{class:"flex items-center justify-center gap-5"},[t("img",{class:"h-[24px] w-[24px]",src:z,alt:"Google"}),t("span",null,"Sign in with Google")],-1),ee=t("div",{class:"flex items-center justify-center gap-5"},[t("img",{class:"h-[24px] w-[24px]",src:J,alt:"Github"}),t("span",null,"Sign in with Github")],-1),se=t("div",{class:"border-b"},null,-1),oe={key:0,class:"block text-center text-sm text-error"},te=P({__name:"LoginForm",emits:["display-sign-up-form","display-restore-password-form","hide-modal"],setup(C,{emit:d}){const s=f(""),e=f(""),p=()=>d("display-sign-up-form"),r=()=>d("display-restore-password-form"),{isLoading:m,error:n,signIn:_,signInWithOAuth:F}=D(),h=async()=>{await o.value.$validate()&&(await _({email:s.value,password:e.value}),n.value||d("hide-modal"))},c=async w=>{await F(w)},v=E(()=>({login:{required:V,email:T},password:{required:V,password_validation:M.withMessage("Minimum 6 symbols length",j(6))}})),o=B(v,{login:s,password:e},{$autoDirty:!0});return(w,l)=>{var y,$;return u(),g("form",{onClick:l[4]||(l[4]=S(()=>{},["stop"])),onSubmit:S(h,["prevent"]),class:"mx-3 flex w-full flex-col gap-5 rounded-xl bg-white p-5 md:mx-0 md:max-w-sm"},[Q,t("div",X,[i(k,{type:"button",variant:"transparent",onClick:l[0]||(l[0]=U=>c("google"))},{default:x(()=>[Z]),_:1}),i(k,{type:"button",variant:"transparent",onClick:l[1]||(l[1]=U=>c("github"))},{default:x(()=>[ee]),_:1})]),se,i(b,{modelValue:s.value,"onUpdate:modelValue":l[2]||(l[2]=U=>s.value=U),label:"Email address",error:(y=a(o).login.$errors[0])==null?void 0:y.$message},null,8,["modelValue","error"]),i(b,{modelValue:e.value,"onUpdate:modelValue":l[3]||(l[3]=U=>e.value=U),type:"password",label:"Your Password",error:($=a(o).password.$errors[0])==null?void 0:$.$message},null,8,["modelValue","error"]),i(k,{type:"submit",variant:"primary",loading:a(m)},{default:x(()=>[R("Sign in")]),_:1},8,["loading"]),a(n)?(u(),g("span",oe,L(a(n)),1)):N("",!0),t("p",{role:"button",class:"text-center text-sm text-base-gray underline",onClick:r}," Forgot your password? "),t("p",{role:"button",class:"text-center text-sm text-base-gray underline",onClick:p}," Don't have an account? Sign up ")],40,K)}}}),ae=["onSubmit"],re=t("h2",{class:"text-center text-[22px] font-bold"},"Sign up",-1),ne={key:0,class:"block text-center text-sm text-error"},le=P({__name:"SignupForm",emits:["display-sign-in-form","hide-modal"],setup(C,{emit:d}){const s=f(""),e=f(""),p=f(""),r=()=>d("display-sign-in-form"),{isLoading:m,error:n,signUp:_}=D(),F=async()=>{await c.value.$validate()&&(await _({email:s.value,password:e.value}),n.value||d("hide-modal"))},h=E(()=>({login:{required:V,email:T},confirmedPassword:{required:V,confirmed_password_validation:M.withMessage("Passwords do not match",q(e))},password:{required:V,password_validation:M.withMessage("Minimum 6 symbols length",j(6))}})),c=B(h,{login:s,password:e,confirmedPassword:p},{$autoDirty:!0});return(v,o)=>{var w,l,y;return u(),g("form",{onClick:o[3]||(o[3]=S(()=>{},["stop"])),onSubmit:S(F,["prevent"]),class:"mx-3 flex w-full flex-col gap-5 rounded-xl bg-white p-5 md:mx-0 md:max-w-sm"},[re,i(b,{modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=$=>s.value=$),label:"Email address",error:(w=a(c).login.$errors[0])==null?void 0:w.$message},null,8,["modelValue","error"]),i(b,{type:"password",modelValue:e.value,"onUpdate:modelValue":o[1]||(o[1]=$=>e.value=$),label:"Your Password",error:(l=a(c).password.$errors[0])==null?void 0:l.$message},null,8,["modelValue","error"]),i(b,{modelValue:p.value,"onUpdate:modelValue":o[2]||(o[2]=$=>p.value=$),type:"password",label:"Confirm Password",error:(y=a(c).confirmedPassword.$errors[0])==null?void 0:y.$message},null,8,["modelValue","error"]),i(k,{type:"submit",variant:"primary",loading:a(m)},{default:x(()=>[R("Sign up")]),_:1},8,["loading"]),a(n)?(u(),g("span",ne,L(a(n)),1)):N("",!0),t("p",{role:"button",class:"text-center text-sm text-base-gray underline",onClick:r}," Sign in ")],40,ae)}}}),G="/vue-ts-composition-ecommerce/success-icon.svg",ie=P({__name:"BaseAdjustableHeightWrapper",setup(C){const d=f("0"),s=r=>{const{height:m}=getComputedStyle(r);r.style.height=d.value,setTimeout(()=>{r.style.height=m})},e=r=>r.style.height="auto",p=r=>d.value=getComputedStyle(r).height;return(r,m)=>(u(),I(A,{name:"height",mode:"out-in",onBeforeLeave:p,onEnter:s,onAfterEnter:e},{default:x(()=>[W(r.$slots,"default")]),_:3}))}}),de=["onSubmit"],ue={key:0,class:"flex w-full flex-col gap-5"},me=t("h2",{class:"text-center text-[22px] font-bold"},"Restore password",-1),pe={key:0,class:"block text-center text-sm text-error"},ce={key:1,class:"flex w-full flex-col gap-5"},ge=t("img",{class:"mx-auto w-[100px]",src:G,alt:"Success"},null,-1),fe={class:"text-center"},we={class:"font-bold"},_e=P({__name:"RestorePasswordForm",emits:["display-sign-up-form"],setup(C,{emit:d}){const s=f(""),e=f(!1),p=()=>d("display-sign-up-form"),{isLoading:r,error:m,sendPasswordResetLink:n}=D(),_=async()=>{await h.value.$validate()&&(await n(s.value),e.value=!0)},F=E(()=>({login:{required:V,email:T}})),h=B(F,{login:s},{$autoDirty:!0});return(c,v)=>(u(),g("form",{onClick:v[1]||(v[1]=S(()=>{},["stop"])),onSubmit:S(_,["prevent"]),class:"mx-3 w-full rounded-xl bg-white p-5 md:mx-0 md:max-w-sm"},[i(A,{name:"fade",mode:"out-in"},{default:x(()=>{var o;return[e.value?(u(),g("section",ce,[ge,t("p",fe,[R(" Confirmation link successfully sent to "),t("span",we,L(s.value),1)])])):(u(),g("section",ue,[me,i(b,{modelValue:s.value,"onUpdate:modelValue":v[0]||(v[0]=w=>s.value=w),label:"Email address",error:(o=a(h).login.$errors[0])==null?void 0:o.$message},null,8,["modelValue","error"]),i(k,{type:"submit",variant:"primary",loading:a(r)},{default:x(()=>[R("Restore password")]),_:1},8,["loading"]),a(m)?(u(),g("span",pe,L(a(m)),1)):N("",!0),t("p",{role:"button",class:"text-center text-sm text-base-gray underline",onClick:p}," Sign up ")]))]}),_:1})],40,de))}}),ve=["onSubmit"],xe={key:0,class:"flex w-full flex-col gap-5"},ye=t("h2",{class:"text-center text-[22px] font-bold"},"Update password",-1),he={key:0,class:"block text-center text-sm text-error"},$e={key:1,class:"flex w-full flex-col gap-5"},be=t("img",{class:"mx-auto w-[100px]",src:G,alt:"Success"},null,-1),Ve=t("p",{class:"text-center"},"Password successfully changed",-1),Se=[be,Ve],Fe=P({__name:"UpdatePasswordForm",emits:["hide-modal"],setup(C,{emit:d}){const s=f(""),e=f(""),p=f(!1),{isLoading:r,error:m,updatePassword:n}=D(),_=H(),F=async()=>{await c.value.$validate()&&(await n(s.value),m.value||(p.value=!0,await _.replace({query:{}}),setTimeout(()=>d("hide-modal"),5e3)))},h=E(()=>({confirmedPassword:{required:V,confirmed_password_validation:M.withMessage("Passwords do not match",q(s))},password:{required:V,password_validation:M.withMessage("Minimum 6 symbols length",j(6))}})),c=B(h,{password:s,confirmedPassword:e},{$autoDirty:!0});return(v,o)=>(u(),g("form",{onClick:o[2]||(o[2]=S(()=>{},["stop"])),onSubmit:S(F,["prevent"]),class:"mx-3 w-full rounded-xl bg-white p-5 md:mx-0 md:max-w-sm"},[i(A,{name:"fade",mode:"out-in"},{default:x(()=>{var w,l;return[p.value?(u(),g("section",$e,Se)):(u(),g("section",xe,[ye,i(b,{type:"password",modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=y=>s.value=y),label:"New Password",error:(w=a(c).password.$errors[0])==null?void 0:w.$message},null,8,["modelValue","error"]),i(b,{modelValue:e.value,"onUpdate:modelValue":o[1]||(o[1]=y=>e.value=y),type:"password",label:"Confirm Password",error:(l=a(c).confirmedPassword.$errors[0])==null?void 0:l.$message},null,8,["modelValue","error"]),i(k,{type:"submit",variant:"primary",loading:a(r)},{default:x(()=>[R("Update password")]),_:1},8,["loading"]),a(m)?(u(),g("span",he,L(a(m)),1)):N("",!0)]))]}),_:1})],40,ve))}}),Re=P({__name:"AuthFormWrapper",emits:["hide-modal"],setup(C,{emit:d}){const s={LoginForm:te,SignupForm:le,RestorePasswordForm:_e,UpdatePasswordForm:Fe},e=f("LoginForm");Y().query.update_password&&(e.value="UpdatePasswordForm");const r=()=>d("hide-modal");return(m,n)=>(u(),I(ie,null,{default:x(()=>[(u(),I(O(s[e.value]),{key:e.value,onDisplaySignUpForm:n[0]||(n[0]=_=>e.value="SignupForm"),onDisplaySignInForm:n[1]||(n[1]=_=>e.value="LoginForm"),onDisplayRestorePasswordForm:n[2]||(n[2]=_=>e.value="RestorePasswordForm"),onHideModal:r},null,32))]),_:1}))}});export{Re as default};