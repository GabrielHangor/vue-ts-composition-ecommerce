import{d as V,f as h,h as C,b as u,c as f,i as t,r as X,t as E,v as B,x,j as P,w as F,k as m,J as j,P as q,e as I,T as re,Q as Z,R as Fe,A as Be,S as ce,U as fe,V as he,O as ee,z as w,n as O,l as D,_ as Y,m as Se,W as be,N as Me,X as Te,Y as Oe,G as ye,K as Re,p as Le,q as De,Z as Ae,$ as ne}from"./index-48af4c27.js";import{a as Ue,u as Ie,c as de,_ as me}from"./index.esm-cb25b060.js";import{V as W,f as je,a as qe,d as Ne,C as Q,g as Ee,b as Ge,s as ze}from"./CatalogService-e43037b1.js";import"./browser-ponyfill-10e9505f.js";const We="/vue-ts-composition-ecommerce/map-pin.svg",Ye={class:"relative block"},He={class:"absolute inset-y-0 left-0 flex items-center pl-4"},Je=t("img",{src:We,alt:"Map Pin"},null,-1),Ke={key:0,src:Ue,alt:"Cross"},Qe=["value"],Xe={key:0,class:"absolute z-10 mt-2 max-h-[30vh] w-full overflow-y-auto overflow-x-hidden rounded-[10px] bg-white shadow-inputBase"},Ze=["onMousedown"],et={class:"pl-[52px]"},tt={key:1,class:"absolute z-10 mt-2 flex h-[56px] w-full items-center overflow-y-auto overflow-x-hidden rounded-[10px] bg-white text-gray-500 shadow-inputBase"},st=t("li",{class:"py-2 transition first-of-type:rounded-t-[10px] first-of-type:rounded-b-none last-of-type:rounded-t-none last-of-type:rounded-b-[10px]"},[t("span",{class:"pl-[52px]"},"Nothing is found...")],-1),at=[st],ot={class:"mt-1 text-xs text-error"},pe=V({__name:"BaseAutocomplete",props:{listData:{type:Array},modelValue:{type:String,required:!0},label:{type:String,required:!0},error:{type:String}},emits:["update:modelValue"],setup(e,{emit:r}){const s=e,a=h({focused:!1,touched:!1}),o=C(()=>{var n;return(n=s.listData)==null?void 0:n.filter(p=>p.toLowerCase().includes(s.modelValue.toLowerCase()))}),d=n=>{a.value.touched=!0,r("update:modelValue",n)},i=n=>{a.value.touched=!0,r("update:modelValue",n)},g=()=>{r("update:modelValue","")},l=()=>a.value.focused=!0,v=()=>a.value.focused=!1;return(n,p)=>(u(),f("div",null,[t("div",Ye,[t("span",He,[X(n.$slots,"icon-left",{},()=>[Je])]),t("span",{class:"absolute inset-y-0 right-0 flex cursor-pointer items-center pr-4",onClick:g},[X(n.$slots,"icon-right",{},()=>[e.modelValue?(u(),f("img",Ke)):I("",!0)])]),t("input",E({name:"input",value:e.modelValue,onInput:p[0]||(p[0]=c=>d(c.target.value)),onFocus:l,onBlur:v},n.$attrs,{placeholder:"1",class:["peer block h-12 w-full rounded-[10px] px-[52px] pt-5 font-medium text-gray-600 placeholder-transparent shadow-inputBase transition duration-300 ease-in-out placeholder-shown:pt-0 focus:outline-none",{"border-[1px] border-error text-error":e.error}]}),null,16,Qe),t("label",{for:"input",class:B(["pointer-text pointer-events-none absolute top-1 pl-[52px] text-xs font-normal text-gray-600 transition-all peer-placeholder-shown:top-[12px] peer-placeholder-shown:text-base peer-placeholder-shown:font-medium",{"text-error":e.error}])},x(e.label),3),P(re,{name:"fade",mode:"out-in"},{default:F(()=>{var c,b;return[a.value.focused&&((c=m(o))!=null&&c.length)?(u(),f("ul",Xe,[(u(!0),f(j,null,q(m(o),y=>(u(),f("li",{class:"cursor-pointer py-2 transition first-of-type:rounded-t-[10px] first-of-type:rounded-b-none last-of-type:rounded-t-none last-of-type:rounded-b-[10px] hover:font-semibold",key:y,onMousedown:R=>i(y)},[t("span",et,x(y),1)],40,Ze))),128))])):a.value.focused&&!((b=m(o))!=null&&b.length)?(u(),f("ul",tt,at)):I("",!0)]}),_:1})]),t("span",ot,x(e.error),1)]))}}),lt="/vue-ts-composition-ecommerce/checkbox-checked-img.svg",it=["title","for"],nt=["id","value"],rt={class:"absolute top-[3px] right-[0.5rem] z-10 w-6",src:lt,alt:"checked-icon"},ct=t("span",{class:"absolute right-[0.5rem] h-4 w-3 bg-inherit"},null,-1),ut={class:"line-clamp-1"},xe=V({__name:"BaseCheckBox",props:{modelValue:{type:[Array,Boolean]},inputBgClass:null,value:null,label:null,id:null},emits:["update:modelValue"],setup(e,{emit:r}){const s=e,a=C({get(){return s.modelValue},set(d){d&&r("update:modelValue",d)}}),o=C(()=>Array.isArray(s.modelValue)&&s.value?s.modelValue.includes(s.value):s.modelValue);return(d,i)=>(u(),f("label",{title:e.label,class:B(["relative flex h-full cursor-pointer items-center",{"font-semibold":m(o)}]),for:e.id},[t("div",{class:B(["relative",e.inputBgClass])},[Z(t("input",{class:"form-checkbox my-1 mr-3 cursor-pointer rounded border p-3 text-transparent checked:border-gray-800 checked:hover:border-gray-800 focus:ring-0 focus:ring-offset-0 checked:focus:border-gray-800",id:e.id,type:"checkbox","onUpdate:modelValue":i[0]||(i[0]=g=>Be(a)?a.value=g:null),value:e.value},null,8,nt),[[Fe,m(a)]]),P(re,{name:"fade"},{default:F(()=>[Z(t("img",rt,null,512),[[ce,m(o)]])]),_:1}),ct],2),t("span",ut,x(e.label),1)],10,it))}}),dt="/vue-ts-composition-ecommerce/calendar.svg",mt=e=>(fe("data-v-cd9733f6"),e=e(),he(),e),pt={class:"flex w-full flex-col"},gt={class:"relative w-full"},vt=mt(()=>t("span",{class:"absolute inset-y-0 left-0 flex items-center pl-4"},[t("img",{src:dt,alt:"Calendar Icon"})],-1)),ft=["src"],ht=["value","min"],bt={class:"mt-1 text-xs text-error"},yt=V({__name:"BaseDatePicker",props:{modelValue:{type:String,required:!0},label:{type:String,required:!0},error:{type:String}},emits:["update:modelValue"],setup(e,{emit:r}){const s=e,a="/vue-ts-composition-ecommerce/",o=h(),d=new Date().toISOString().slice(0,10),i=h({focused:!1}),g=C(()=>s.modelValue?"/delete-icon.svg":"dropdown-arrow.svg"),l=c=>r("update:modelValue",c),v=()=>{o.value.showPicker(),i.value.focused=!0},n=()=>i.value.focused=!1,p=()=>{s.modelValue&&r("update:modelValue","")};return(c,b)=>(u(),f("div",pt,[t("div",gt,[vt,t("span",{class:B(["absolute inset-y-0 right-0 flex items-center px-3 transition",{"rotate-180":i.value.focused&&!s.modelValue}]),onMousedown:p},[t("img",{src:`${m(a)}${m(g)}`,alt:"Cross"},null,8,ft)],34),t("input",{ref_key:"datePicker",ref:o,type:"date",name:"input",value:e.modelValue,min:m(d),onInput:b[0]||(b[0]=y=>l(y.target.value)),onFocus:v,onBlur:n,placeholder:"1",class:B([{"border-[1px] border-error text-error":e.error},"h-12 cursor-text w-full min-w-[95%] rounded-[10px] bg-white px-[52px] pt-5 font-medium text-gray-600 placeholder-transparent shadow-inputBase transition duration-300 ease-in-out focus:outline-none"])},null,42,ht),t("label",{for:"input",class:B([{"text-error":e.error},"pointer-text pointer-events-none absolute top-1 pl-[52px] text-xs font-normal text-gray-600 transition-all peer-placeholder-shown:top-[12px] peer-placeholder-shown:text-base peer-placeholder-shown:font-medium"])},x(e.label),3)]),t("span",bt,x(e.error),1)]))}});const ge=ee(yt,[["__scopeId","data-v-cd9733f6"]]),xt="/vue-ts-composition-ecommerce/clock.svg",Pt=e=>(fe("data-v-8550e742"),e=e(),he(),e),_t={class:"relative block"},$t=Pt(()=>t("span",{class:"absolute inset-y-0 left-0 flex items-center pl-4"},[t("img",{src:xt,alt:"Clock Icon"})],-1)),kt=["src"],Ct=["value"],wt={class:"mt-1 text-xs text-error"},Vt=V({__name:"BaseTimePicker",props:{modelValue:{type:String,required:!0},label:{type:String,required:!0},error:{type:String}},emits:["update:modelValue"],setup(e,{emit:r}){const s=e,a="/vue-ts-composition-ecommerce/",o=h({focused:!1}),d=C(()=>s.modelValue?"/delete-icon.svg":"/dropdown-arrow.svg"),i=h(),g=p=>r("update:modelValue",p),l=()=>{var p;(p=i==null?void 0:i.value)==null||p.showPicker(),o.value.focused=!0},v=()=>o.value.focused=!1,n=()=>{s.modelValue&&r("update:modelValue","")};return(p,c)=>(u(),f("div",null,[t("div",_t,[$t,t("span",{class:B(["absolute inset-y-0 right-0 flex items-center px-3 transition",{"rotate-180":o.value.focused&&!s.modelValue}]),onMousedown:n},[t("img",{src:`${m(a)}${m(d)}`,alt:"Cross"},null,8,kt)],34),t("input",E({ref_key:"timePicker",ref:i,type:"time",name:"input",value:e.modelValue,onInput:c[0]||(c[0]=b=>g(b.target.value)),onFocus:l,onBlur:v},p.$attrs,{class:[{"border-[1px] border-error text-error":e.error},"peer block h-12 w-full min-w-[95%] cursor-text rounded-[10px] bg-white pl-[52px] pt-5 font-medium text-gray-600 placeholder-transparent shadow-inputBase transition duration-300 ease-in-out placeholder-shown:pt-0 focus:outline-none"],placeholder:"1"}),null,16,Ct),t("label",{for:"input",class:B([{"text-error":e.error},"pointer-text pointer-events-none absolute top-1 pl-[52px] text-xs font-normal text-gray-600 transition-all peer-placeholder-shown:top-[12px] peer-placeholder-shown:text-base peer-placeholder-shown:font-medium"])},x(e.label),3)]),t("span",wt,x(e.error),1)]))}});const ve=ee(Vt,[["__scopeId","data-v-8550e742"]]),Ft={key:0,class:"bg-orange-base/5 py-8"},Bt=["onSubmit"],St={class:"container order-2 mx-auto grid items-center gap-4 px-4 pt-10 pb-8 md:order-1 md:grid-cols-2"},Mt={class:"h-full"},Tt={class:"grid h-full gap-4 lg:grid-cols-2"},Ot={class:"grid h-full gap-4 lg:grid-cols-2"},Rt={class:"container mx-auto flex justify-center pb-10"},Lt=V({__name:"LocationAndTimeForm",props:{isLoading:{type:Boolean,default:!1},activeLocationFilters:{type:Object}},emits:["updateLocationFilters"],setup(e,{expose:r,emit:s}){var c;const a=e,o=["New York","Los Angeles","Chicago","Houston","Philadelphia","Phoenix","San Antonio","San Diego","Dallas","San Jose","Austin","Jacksonville","San Francisco","Indianapolis","Columbus","Fort Worth","Charlotte","Seattle","Denver","El Paso","Detroit","Washington","Boston","Memphis","Nashville","Portland, Ore.","Oklahoma City","Las Vegas","Baltimore","Louisville","Milwaukee","Albuquerque","Tucson","Fresno","Sacramento","Kansas City, Mo.","Long Beach","Mesa","Atlanta","Colorado Springs","Virginia Beach","Raleigh","Omaha","Miami","Oakland","Minneapolis","Tulsa","Wichita","New Orleans","Arlington, Texas",""],d=window.innerWidth>=768,i=h(!1),g=b=>o.includes(b),l=h({pickupFrom:((c=a.activeLocationFilters)==null?void 0:c.pickupFrom)||"",dropOff:"",pickupDate:"",pickupTime:"",dropOffDate:"",dropOffTime:""});r({formValues:l}),w(l,b=>{i.value||(l.value.dropOff=b.pickupFrom)},{deep:!0});const v=async()=>{await p.value.$validate()&&s("updateLocationFilters",l.value)},n=C(()=>({pickupFrom:{location_validation:de.withMessage("Select a city from the list",g)},dropOff:{location_validation:de.withMessage("Select a city from the list",g)}})),p=Ie(n,l,{$autoDirty:!0});return(b,y)=>(u(),O(be,{"initial-visibility":d},{controls:F(({toggleVisibility:R,isTransitioning:T,isVisible:A})=>[!d&&!A?(u(),f("section",Ft,[P(Y,{class:"mx-auto block","is-disabled":T,onClick:R},{default:F(()=>[D(" Choose Location ")]),_:2},1032,["is-disabled","onClick"])])):I("",!0)]),default:F(({isVisible:R})=>{var T,A;return[R?(u(),f("form",{key:0,onSubmit:Se(v,["prevent"]),class:"h-fit bg-orange-base/5"},[t("div",St,[P(pe,{modelValue:l.value.pickupFrom,"onUpdate:modelValue":y[0]||(y[0]=$=>l.value.pickupFrom=$),label:"Pick up from","list-data":o,error:(T=m(p).pickupFrom.$errors[0])==null?void 0:T.$message},null,8,["modelValue","error"]),t("div",Mt,[i.value?(u(),O(pe,{key:0,modelValue:l.value.dropOff,"onUpdate:modelValue":y[1]||(y[1]=$=>l.value.dropOff=$),label:"Drop-off","list-data":o,error:(A=m(p).dropOff.$errors[0])==null?void 0:A.$message},null,8,["modelValue","error"])):(u(),O(xe,{key:1,modelValue:i.value,"onUpdate:modelValue":y[2]||(y[2]=$=>i.value=$),onChange:y[3]||(y[3]=$=>l.value.dropOff=""),"input-bg-class":"bg-transparent",label:"Return to different location",id:"1"},null,8,["modelValue"]))]),t("div",Tt,[P(ge,{modelValue:l.value.pickupDate,"onUpdate:modelValue":y[4]||(y[4]=$=>l.value.pickupDate=$),label:"Pick up date"},null,8,["modelValue"]),P(ve,{modelValue:l.value.pickupTime,"onUpdate:modelValue":y[5]||(y[5]=$=>l.value.pickupTime=$),label:"Pick up time"},null,8,["modelValue"])]),t("div",Ot,[P(ge,{modelValue:l.value.dropOffDate,"onUpdate:modelValue":y[6]||(y[6]=$=>l.value.dropOffDate=$),label:"Drop-off date"},null,8,["modelValue"]),P(ve,{modelValue:l.value.dropOffTime,"onUpdate:modelValue":y[7]||(y[7]=$=>l.value.dropOffTime=$),label:"Drop off time"},null,8,["modelValue"])])]),t("div",Rt,[P(Y,{loading:e.isLoading,class:"w-[272px]"},{default:F(()=>[D("Search")]),_:1},8,["loading"])])],40,Bt)):I("",!0)]}),_:1}))}}),Dt="/vue-ts-composition-ecommerce/filters-icon.svg",At=["disabled","value"],Ut=["value"],It=["value"],jt=V({__name:"BaseSelect",props:{selectOptions:{type:Object,required:!0},modelValue:{type:String},isLoading:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:r}){const s=a=>r("update:modelValue",a);return(a,o)=>(u(),f("select",{disabled:e.isLoading,class:B(["cursor-pointer appearance-none px-2 focus:outline-none",{"cursor-progress":e.isLoading}]),value:e.modelValue,onInput:o[0]||(o[0]=d=>s(d.target.value))},[t("option",{value:e.selectOptions.baseOption.value},x(e.selectOptions.baseOption.name),9,Ut),(u(!0),f(j,null,q(e.selectOptions.options,d=>(u(),f("option",{key:d.value,value:d.value},x(d.name),9,It))),128))],42,At))}}),qt={class:"flex justify-between pb-6"},Nt=t("img",{class:"md:hidden",src:Dt,alt:"Filters-icon mobile"},null,-1),Et=[Nt],Gt={class:"flex items-center gap-4"},zt={class:"cursor-pointer"},Wt=["src"],Yt=V({__name:"CarsCatalogHeading",props:{isLoading:{type:Boolean},sortOrderASC:{type:Boolean},sortBy:{type:String}},emits:["toggle-sort-order","updateSortType","openMobileFilters"],setup(e,{emit:r}){const s=e,a="/vue-ts-composition-ecommerce/",o={baseOption:{value:"rentalCost",name:"Sort by price"},options:[{value:"releaseYear",name:"Sort by year"},{value:"deposit",name:"Sort by deposit"}]},d=C(()=>s.sortOrderASC?"/sort-up.svg":"/sort-down.svg"),i=()=>{s.isLoading||r("toggle-sort-order")};return(g,l)=>(u(),f("div",qt,[t("div",{onClick:l[0]||(l[0]=v=>g.$emit("openMobileFilters"))},Et),t("div",Gt,[P(jt,{isLoading:e.isLoading,modelValue:e.sortBy,"onUpdate:modelValue":l[1]||(l[1]=v=>g.$emit("updateSortType",v)),selectOptions:o},null,8,["isLoading","modelValue"]),t("span",zt,[t("img",{src:`${m(a)}${m(d)}`,alt:"Sort by icon",onClick:i},null,8,Wt)])])]))}}),Ht="/vue-ts-composition-ecommerce/Icon-wallet.svg",Jt="/vue-ts-composition-ecommerce/Icon-door.svg",Kt="/vue-ts-composition-ecommerce/Icon-seats.svg",Qt="/vue-ts-composition-ecommerce/Icon-stearing-wheel.svg",Xt={class:"rounded-[10px] p-3 shadow-inputBase"},Zt={class:"flex items-center gap-3 border-b pb-3 md:flex-col md:items-stretch md:gap-0 md:border-b-0 md:pb-0"},es={class:"basis-1/2 rounded-[10px] md:basis-auto md:bg-car-bg"},ts=["src"],ss={class:"flex basis-1/2 flex-col items-start justify-center md:block md:basis-auto"},as={class:"inline-block rounded border py-[2.5px] px-1 text-[10px] font-medium text-gray-400 md:mt-4"},os={class:"pt-1 text-[12px] font-semibold text-base-gray sm:pt-4 sm:text-[22px]"},ls={class:"flex items-center justify-between py-2 md:border-b md:py-4"},is={class:"text-sm text-orange-base sm:text-base"},ns={class:"text-base font-semibold sm:text-[25px]"},rs=t("span",{class:"text-xs"}," / day",-1),cs={class:"hidden text-base text-base-gray md:block"},us={class:"flex items-center justify-between gap-2 pt-4 text-[12px] font-semibold text-gray-400 sm:pb-8 sm:text-base md:gap-0"},ds={class:"flex basis-1/4 items-center justify-center rounded bg-car-bg py-[6.5px] md:hidden md:basis-auto md:bg-transparent md:py-0"},ms=t("img",{class:"h-[17px] pr-2",src:Ht,alt:"Doors icon"},null,-1),ps=t("div",{class:"flex basis-1/4 items-center justify-center rounded bg-car-bg py-[6.5px] md:basis-auto md:bg-transparent md:py-0"},[t("img",{class:"h-[17px] pr-2",src:Jt,alt:"Doors icon"}),D(" 4 "),t("span",{class:"hidden pl-1 md:block"},"doors")],-1),gs={class:"flex basis-1/4 items-center justify-center rounded bg-car-bg py-[6.5px] md:basis-auto md:bg-transparent md:py-0"},vs=t("img",{class:"h-[17px] pr-2",src:Kt,alt:"Seats icon"},null,-1),fs=t("span",{class:"hidden pl-1 md:block"},"seats",-1),hs={class:"flex basis-1/4 items-center justify-center rounded bg-car-bg py-[6.5px] md:basis-auto md:bg-transparent md:py-0"},bs=t("img",{class:"h-[17px] pr-2",src:Qt,alt:"Transmission icon"},null,-1),ys={class:"pl-1"},xs=V({__name:"CarCard",props:{vehicle:{type:Object,required:!0}},setup(e){const r="/vue-ts-composition-ecommerce/";return(s,a)=>{const o=Me("router-link");return u(),f("div",Xt,[t("div",Zt,[t("div",es,[t("img",{class:"mx-auto",src:`${m(r)}${e.vehicle.imgPath}`,alt:"Car"},null,8,ts)]),t("div",ss,[t("span",as,x(e.vehicle.releaseYear),1),t("h2",os,x(e.vehicle.model),1),t("div",ls,[t("div",is,[D(" From "),t("span",ns,"$"+x(e.vehicle.rentalCost),1),rs]),t("div",cs,"Deposit "+x(e.vehicle.deposit)+"$",1)])])]),t("div",null,[t("div",us,[t("div",ds,[ms,D(" "+x(e.vehicle.deposit)+"$ ",1)]),ps,t("div",gs,[vs,D(" "+x(e.vehicle.capacity)+" ",1),fs]),t("div",hs,[bs,t("span",ys,x(e.vehicle.transmission),1)])]),P(o,{to:`/catalog/${e.vehicle.id}`},{default:F(()=>[P(Y,{class:"hidden w-full sm:block"},{default:F(()=>[D("Rent now")]),_:1})]),_:1},8,["to"])])])}}}),Ps={class:"mb-10 grid gap-4 lg:grid-cols-2"},_s=V({__name:"VehicleCardsSection",props:{vehicles:{type:Array,required:!0}},setup(e){return(r,s)=>(u(),f("section",Ps,[(u(!0),f(j,null,q(e.vehicles,a=>(u(),O(xs,{key:a.id,vehicle:a},null,8,["vehicle"]))),128))]))}}),$s={class:"mt-4 flex justify-center text-base-gray"},ks=["onClick"],Cs=V({__name:"BasePaginator",props:{totalEntities:null,entitiesPerPage:null,maxVisibleButtons:null,currentPage:null,paginationButtonClass:null},emits:["changeCurrentPage"],setup(e,{emit:r}){const s=e,a=C(()=>Math.ceil(s.totalEntities/s.entitiesPerPage)),o=l=>{l<1||l>a.value||l===s.currentPage||r("changeCurrentPage",l)},d=C(()=>s.currentPage===1?1:s.currentPage===a.value?a.value-s.maxVisibleButtons+1:s.currentPage-1),i=C(()=>Math.min(d.value+s.maxVisibleButtons-1,a.value)),g=C(()=>{const l=[];for(let v=d.value;v<=i.value;v+=1)v!==0&&l.push({name:v,isDisabled:v===s.currentPage});return l});return(l,v)=>(u(),f("section",$s,[t("span",{class:B(["cursor-pointer p-[14px]",[e.paginationButtonClass,{"font-bold text-orange-base":e.currentPage===1}]]),onClick:v[0]||(v[0]=n=>o(1))}," First ",2),(u(!0),f(j,null,q(m(g),n=>(u(),f("span",{class:B(["cursor-pointer p-[14px]",[e.paginationButtonClass,{"font-bold text-orange-base":e.currentPage===n.name,"cursor-not-allowed":n.isDisabled}]]),key:n.name,onClick:p=>o(n.name)},x(n.name),11,ks))),128)),t("span",{class:B(["cursor-pointer p-[14px]",[e.paginationButtonClass,{"font-bold text-orange-base":e.currentPage===m(a)}]]),onClick:v[1]||(v[1]=n=>o(m(a)))}," Last ",2)]))}}),ws={},Vs={class:"mb-10 grid gap-4 lg:grid-cols-2"},Fs=Te('<div class="flex items-center gap-4 md:flex-col md:items-stretch"><div class="mb-4 flex h-[110px] basis-1/2 items-center justify-center rounded bg-gray-300 dark:bg-gray-700 sm:h-[180px] md:h-48 md:basis-auto"></div><div class="flex h-full basis-1/2 flex-col md:basis-auto"><div class="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div><div class="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div><div class="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div><div class="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div><div class="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div><div class="h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div></div></div><div class="border-b border-b-gray-200 sm:mb-3 sm:mt-7"></div><div class="py-2 sm:py-4"><div class="flex h-7 gap-2"><div class="flex w-full basis-1/3 rounded bg-gray-200"></div><div class="flex w-full basis-1/3 rounded bg-gray-200"></div><div class="flex w-full basis-1/3 rounded bg-gray-200"></div></div></div><div class="hidden h-12 rounded bg-gray-200 sm:block"></div><span class="sr-only">Loading...</span>',5),Bs=[Fs];function Ss(e,r){return u(),f("section",Vs,[(u(!0),f(j,null,q([...Array(6).keys()],(s,a)=>(u(),f("div",{key:a,role:"status",class:"w-full animate-pulse rounded-[10px] border-gray-200 p-4 shadow-inputBase dark:border-gray-700 md:h-[505px]"},Bs))),128))])}const Ms=ee(ws,[["render",Ss]]),Ts={class:"col-span-12 mb-4 md:col-span-8 md:col-start-6 lg:col-span-9 lg:col-start-5"},Os={key:1,class:"p-10 text-center text-5xl"},Rs={key:2,class:"p-10 text-center text-5xl"},Ls=V({__name:"CarsCatalog",props:{vehicles:{type:Array,required:!0},carsTotal:{type:Number,required:!0},currentPage:{type:Number,required:!0},isLoading:{type:Boolean},sortOrderASC:{type:Boolean},sortBy:{type:String},error:{type:String}},emits:["appendPage"],setup(e,{emit:r}){const s=e,a=C(()=>s.currentPage===Math.ceil(s.carsTotal/W)),o=()=>r("appendPage");return(d,i)=>(u(),f("section",Ts,[P(Yt,E(d.$attrs,{"sort-by":e.sortBy,"sort-order-a-s-c":e.sortOrderASC,"is-loading":e.isLoading}),null,16,["sort-by","sort-order-a-s-c","is-loading"]),P(re,{name:"fade",mode:"out-in"},{default:F(()=>[e.isLoading?(u(),O(Ms,{key:0})):e.error?(u(),f("h1",Os,"Something went wrong... "+x(e.error),1)):e.vehicles.length?(u(),O(_s,{key:3,vehicles:e.vehicles},null,8,["vehicles"])):(u(),f("h1",Rs,"Nothing was found"))]),_:1}),e.vehicles.length&&!e.error?(u(),O(Y,{key:0,"is-disabled":m(a),loading:e.isLoading,variant:"transparent",class:"w-full",onClick:o},{default:F(()=>[D(" Show more ")]),_:1},8,["is-disabled","loading"])):I("",!0),e.vehicles.length&&!e.error?(u(),O(Cs,E({key:1,"max-visible-buttons":3,"current-page":e.currentPage,"total-entities":e.carsTotal,"entities-per-page":m(W)},d.$attrs),null,16,["current-page","total-entities","entities-per-page"])):I("",!0)]))}}),Ds="/vue-ts-composition-ecommerce/burger-closed.svg",As={class:"relative"},Us=["min","max","value","title","disabled"],Is=["min","max","title","value","disabled"],js=V({__name:"BaseRangeSlider",props:{minPrice:null,maxPrice:null,sliderMinValue:null,sliderMaxValue:null,minGap:null,isLoading:{type:Boolean}},emits:["update:minPrice","update:maxPrice"],setup(e,{emit:r}){const s=e,a=i=>r("update:minPrice",i);w(()=>s.minPrice,i=>{!i||!s.maxPrice||s.maxPrice-i<=s.minGap&&r("update:minPrice",s.maxPrice-s.minGap)});const o=i=>r("update:maxPrice",i);w(()=>s.maxPrice,i=>{i===0&&r("update:maxPrice",null),!(!i||!s.minPrice)&&i-s.minPrice<=s.minGap&&r("update:maxPrice",s.minPrice+s.minGap)});const d=C(()=>{const i=s.minPrice||0,g=s.maxPrice||0,l=(i-s.sliderMinValue)/(s.sliderMaxValue-s.sliderMinValue)*100,v=(g-s.sliderMinValue)/(s.sliderMaxValue-s.sliderMinValue)*100;return`linear-gradient(to right, #8F8F8F ${l}% , #E85638 ${l}% , #E85638 ${v}%, #8F8F8F ${v}%)`});return(i,g)=>(u(),f("div",As,[t("div",{class:"slider-track",style:Oe({background:m(d)})},null,4),t("input",{type:"range",min:e.sliderMinValue,max:e.sliderMaxValue,value:e.minPrice,title:e.minPrice,disabled:e.isLoading,onInput:g[0]||(g[0]=l=>a(l.target.value))},null,40,Us),t("input",{type:"range",min:e.sliderMinValue,max:e.sliderMaxValue,title:e.maxPrice,value:e.maxPrice,disabled:e.isLoading,onInput:g[1]||(g[1]=l=>o(l.target.value))},null,40,Is)]))}});const qs={class:"mb-8"},Ns=t("h2",{class:"mb-[20px] font-semibold text-gray-600"},"Rent price (per day)",-1),Es={class:"flex items-center"},Gs=t("span",{class:"px-1"},"-",-1),zs={class:"flex flex-col py-6"},Ws=V({__name:"PriceRangeFilter",props:{isLoading:{type:Boolean,default:!1},initialPriceBoundaries:{type:Object,required:!0},priceRange:{type:Object}},emits:["updatePriceRange"],setup(e,{expose:r,emit:s}){var v,n;const a=e,o=h(((v=a.priceRange)==null?void 0:v.minPrice)||a.initialPriceBoundaries.minPrice),d=h(((n=a.priceRange)==null?void 0:n.maxPrice)||a.initialPriceBoundaries.maxPrice);r({minPrice:o,maxPrice:d});const i=m(a.initialPriceBoundaries.minPrice),g=m(a.initialPriceBoundaries.maxPrice),l=C(()=>({minPrice:o.value,maxPrice:d.value}));return w([o,d],()=>s("updatePriceRange",l.value)),(p,c)=>(u(),f("section",qs,[Ns,t("div",Es,[P(me,{disabled:e.isLoading,type:"number",label:"From",modelValue:o.value,"onUpdate:modelValue":c[0]||(c[0]=b=>o.value=b),modelModifiers:{number:!0}},null,8,["disabled","modelValue"]),Gs,P(me,{disabled:e.isLoading,type:"number",label:"To",modelValue:d.value,"onUpdate:modelValue":c[1]||(c[1]=b=>d.value=b),modelModifiers:{number:!0}},null,8,["disabled","modelValue"])]),t("div",zs,[P(js,{minPrice:o.value,"onUpdate:minPrice":c[2]||(c[2]=b=>o.value=b),minPriceModifiers:{number:!0},maxPrice:d.value,"onUpdate:maxPrice":c[3]||(c[3]=b=>d.value=b),maxPriceModifiers:{number:!0},"min-gap":5,"slider-min-value":m(i),"slider-max-value":m(g),"is-loading":e.isLoading},null,8,["minPrice","maxPrice","slider-min-value","slider-max-value","is-loading"])])]))}}),Ys=["onClick"],Hs={class:"flex"},Js=t("h2",null,"From",-1),Ks=["src"],Qs={class:"flex flex-col gap-2"},Xs={class:"flex items-center"},Zs={class:"ml-1 text-[13px] text-gray-400"},ea=V({__name:"CarCollapsibleFilter",props:{vehiclesCountFilter:null,vehiclesMinRentalCostByFilter:null,filterType:null},setup(e,{expose:r,emit:s}){const a=e,o="/vue-ts-composition-ecommerce/",d=l=>`update${l.charAt(0).toUpperCase()+l.slice(1)}Filters`,i=l=>a.filterType==="babySeat"||a.filterType=="videoRecorder"?l==="true"?"Yes":"No":l,g=h([]);return r({activeCarFilters:g}),w(g,()=>s(d(a.filterType),g.value)),(l,v)=>(u(),O(be,{class:"mb-8 w-full","initial-visibility":!0},{controls:F(({toggleVisibility:n,isVisible:p})=>[t("div",{class:"mb-[20px] flex justify-between font-semibold text-gray-600",role:"button",onClick:n},[t("h2",null,x(m(je)[e.filterType]),1),t("div",Hs,[Js,t("img",{class:B(["ml-4 transition duration-500",{"rotate-180":p}]),src:`${m(o)}dropdown-arrow.svg`,alt:"Cross"},null,10,Ks)])],8,Ys)]),default:F(({isVisible:n})=>[Z(t("div",null,[t("section",Qs,[(u(!0),f(j,null,q(e.vehiclesCountFilter,(p,c)=>{var b;return u(),f("div",{class:"flex items-center justify-between",key:c},[t("div",Xs,[P(xe,{id:`${e.filterType}${c}`,modelValue:g.value,"onUpdate:modelValue":v[0]||(v[0]=y=>g.value=y),label:i(c),value:c,"input-bg-class":"bg-white"},null,8,["id","modelValue","label","value"]),t("span",Zs," ("+x(p||0)+") ",1)]),t("p",null,"$"+x(((b=e.vehiclesMinRentalCostByFilter)==null?void 0:b[c])||0),1)])}),128))])],512),[[ce,n]])]),_:1}))}}),ta={class:"absolute z-10 h-full w-full cursor-wait backdrop-grayscale"},sa=V({__name:"CarsCatalogFilters",props:{isOpen:{type:Boolean},isLoading:{type:Boolean},initialPriceBoundaries:null,priceRange:null,vehiclesCountByFilter:null,minRentalCostByFilter:null},emits:["resetFilters","disableWatchers"],setup(e,{emit:r}){const s=e,a=h(),o=h(),d=async()=>{var n,p,c;r("disableWatchers"),await ye(),a.value&&(a.value.minPrice=(n=s.initialPriceBoundaries)==null?void 0:n.minPrice,a.value.maxPrice=(p=s.initialPriceBoundaries)==null?void 0:p.maxPrice),(c=o.value)==null||c.forEach(b=>b.activeCarFilters.length=0),r("resetFilters")},i=C(()=>{var n;return(n=o.value)==null?void 0:n.find(p=>p.activeCarFilters.length!==0)}),g=C(()=>{const{minPrice:n,maxPrice:p}=s.priceRange,{minPrice:c,maxPrice:b}=s.initialPriceBoundaries;return n!==c||p!==b}),l=C(()=>[g.value,i.value]),v=C(()=>!l.value.find(n=>n));return(n,p)=>(u(),f("aside",{class:B(["md:z-1 fixed top-0 left-0 z-10 flex h-fit min-h-[100vh] w-full flex-col items-center overflow-hidden overflow-y-auto bg-white p-5 transition-[opacity] duration-300 ease-in md:pointer-events-auto md:relative md:col-span-4 md:w-auto md:overflow-y-hidden md:p-1 md:opacity-100 lg:col-span-3",e.isOpen?"pointer-events-auto opacity-100":"pointer-events-none opacity-0"])},[Z(t("div",ta,null,512),[[ce,e.isLoading]]),t("img",{onClick:p[0]||(p[0]=c=>n.$emit("closeMobileFilters")),class:"absolute top-0 right-0 p-4 md:hidden",src:Ds,alt:"Burger close icon"}),e.initialPriceBoundaries.minPrice?(u(),O(Ws,E({key:0,ref_key:"priceRangeFilter",ref:a,"initial-price-boundaries":e.initialPriceBoundaries,"price-range":e.priceRange,"is-loading":e.isLoading},n.$attrs),null,16,["initial-price-boundaries","price-range","is-loading"])):I("",!0),e.vehiclesCountByFilter&&e.minRentalCostByFilter?(u(!0),f(j,{key:1},q(m(qe),c=>(u(),O(ea,E({key:c},n.$attrs,{ref_for:!0,ref_key:"collapsibleFilters",ref:o,"vehicles-count-filter":e.vehiclesCountByFilter[c],"vehicles-min-rental-cost-by-filter":e.minRentalCostByFilter[c],"filter-type":c}),null,16,["vehicles-count-filter","vehicles-min-rental-cost-by-filter","filter-type"]))),128)):I("",!0),P(Y,{onClick:d,variant:"transparent",class:"mb-10 w-full md:mb-0","is-disabled":m(v)},{default:F(()=>[D(" Reset ")]),_:1},8,["is-disabled"])],2))}}),aa={},oa={class:"container relative order-3 mx-auto grid h-full grid-cols-12 px-4"};function la(e,r){return u(),f("section",oa,[X(e.$slots,"filters"),X(e.$slots,"cars")])}const ia=ee(aa,[["render",la]]),na={class:"container order-1 mx-auto px-4 md:order-2"},ra={class:"py-3 text-2xl font-bold text-gray-600 md:py-10 md:text-3xl"},ca={class:"text-sm font-semibold text-gray-400 md:text-base"},ua=V({__name:"PageHeading",props:{heading:{type:String,required:!0},carsTotal:{type:Number,required:!0}},setup(e){return(r,s)=>(u(),f("div",na,[t("h1",ra,[D(x(e.heading)+" ",1),t("span",ca,"("+x(e.carsTotal)+")",1)])]))}}),da=({currentPage:e,sortOrderASC:r,sortBy:s,activeLocationFilters:a,priceRange:o,activeCarTypeFilters:d,activeCarModelFilters:i,activeCarCapacityFilters:g,activeCarTransmissionFilters:l,activeCarDepositFilters:v,activeCarBabySeatFilters:n,activeCarVideoRecorderFilters:p})=>{const c=h([]),b=h(0),y=h(null),R=h(!0),T=h({minPrice:null,maxPrice:null}),A=h(null),$=h(null),H=C(()=>({offset:e.value*W-W,limit:e.value*W-1})),N=async({append:k}={append:!1})=>{try{y.value=null,R.value=!0,await Ne(500);const{data:M,count:G,error:U}=await Q.getAllVehicles({sortBy:s.value,sortOrderASC:r.value,offset:H.value.offset,limit:H.value.limit,location:a.value.pickupFrom,priceRange:o.value,carTypes:d.value,carModels:i.value,carCapacities:g.value,carTransmission:l.value,carDeposit:v.value,carBabySeat:n.value,carVideoRecorder:p.value});if(M&&!k&&(c.value=M),M&&k&&c.value.push(...M),(G||G===0)&&(b.value=G),U)throw new Error("Nothing was found...")}catch(M){console.error(M),M instanceof Error&&(y.value=M.message)}finally{R.value=!1}},te=async()=>{const{minPrice:k,maxPrice:M}=await Q.getPriceRange();T.value={minPrice:k,maxPrice:M}},L=async()=>{A.value=await Q.getVehiclesCountGroupedByFilterType({priceRange:o.value,location:a.value.pickupFrom})},J=async()=>{$.value=await Q.getMinRentalCostGroupedByFilterType({priceRange:o.value,location:a.value.pickupFrom})};return Re(async()=>await Promise.all([N(),te(),L(),J()])),{vehicles:c,vehiclesCount:b,errorMessage:y,isLoading:R,fetchVehicles:N,fetchVehiclesCount:L,fetchMinRentalCostByFilterType:J,initialPriceBoundaries:T,vehiclesCountGroupedByFilterType:A,minRentalCostGroupedByFilterType:$}},ma=e=>{const r=Le(),s=De();for(const a in s.query)e[a]&&(e[a].value=Ee(e[a].value,s.query[a]));w(Object.values(e),()=>{const a={};for(const o in e)e[o].value!==""&&e[o].value&&(a[o]=e[o].value);r.push({query:a})},{deep:!0})},pa={class:"flex h-full w-full flex-col"},ba=V({__name:"CatalogPage",setup(e){const r=h(!1),s=()=>o.value=!0,a=async()=>{i.value.pickupFrom="",d.value&&(d.value.formValues.pickupFrom=""),Object.assign(L.value,{minPrice:oe.value.minPrice,maxPrice:oe.value.maxPrice}),await ye(),await Promise.all([S(),le(),ie()]),o.value=!1,ze()},o=h(!1),d=h(),i=h({pickupFrom:""}),g=_=>{Object.assign(i.value,_)};w(i,()=>{o.value||(console.log("location watcher trigger"),k.value=1,Promise.all([S(),le(),ie()]))},{deep:!0});const l=h([]),v=_=>l.value=_;w(l,()=>{o.value||(console.log("car types watcher trigger"),k.value=1,S())});const n=h([]),p=_=>n.value=_;w(n,()=>{o.value||(console.log("car models watcher trigger"),k.value=1,S())});const c=h([]),b=_=>c.value=_;w(c,()=>{o.value||(console.log("car capacity watcher trigger"),k.value=1,S())});const y=h([]),R=_=>y.value=_;w(y,()=>{o.value||(console.log("car transmission watcher trigger"),k.value=1,S())});const T=h([]),A=_=>T.value=_;w(T,()=>{o.value||(console.log("car deposit watcher trigger"),k.value=1,S())});const $=h([]),H=_=>$.value=_;w($,()=>{o.value||(console.log("car baby seat watcher trigger"),k.value=1,S())});const N=h([]),te=_=>N.value=_;w(N,()=>{o.value||(console.log("car video recorder watcher trigger"),k.value=1,S())});const L=h({minPrice:0,maxPrice:0}),J=Ge(_=>Object.assign(L.value,_),500,o);w(L,()=>{o.value||(console.log("price range watcher trigger"),k.value=1,Promise.all([S(),le(),ie()]))},{deep:!0});const k=h(1),M=()=>{se.value=!0,k.value+=1},G=_=>k.value=_;w(k,()=>{if(console.log("page trigger"),se.value){S({append:!0}),se.value=!1;return}S()});const U=h(!0),z=h("rentalCost"),Pe=()=>U.value=!U.value,_e=_=>z.value=_;w([z,U],()=>S());const se=h(!1);Ae(r);const{vehicles:$e,vehiclesCount:ue,isLoading:ae,errorMessage:ke,initialPriceBoundaries:oe,vehiclesCountGroupedByFilterType:Ce,minRentalCostGroupedByFilterType:we,fetchVehicles:S,fetchVehiclesCount:le,fetchMinRentalCostByFilterType:ie}=da({currentPage:k,sortOrderASC:U,sortBy:z,activeLocationFilters:i,priceRange:L,activeCarTypeFilters:l,activeCarModelFilters:n,activeCarCapacityFilters:c,activeCarTransmissionFilters:y,activeCarDepositFilters:T,activeCarBabySeatFilters:$,activeCarVideoRecorderFilters:N});return ma({page:k,sortOrderASC:U,sortBy:z,location:ne(i.value,"pickupFrom"),minPrice:ne(L.value,"minPrice"),maxPrice:ne(L.value,"maxPrice")}),(_,K)=>(u(),f("div",pa,[P(Lt,{ref_key:"locationAndTimeForm",ref:d,"active-location-filters":i.value,"is-loading":m(ae),onUpdateLocationFilters:g},null,8,["active-location-filters","is-loading"]),P(ua,{heading:"Our cars","cars-total":m(ue)},null,8,["cars-total"]),P(ia,null,{filters:F(()=>[P(sa,{"initial-price-boundaries":m(oe),"price-range":L.value,"is-open":r.value,"is-loading":m(ae),"vehicles-count-by-filter":m(Ce),"min-rental-cost-by-filter":m(we),onDisableWatchers:s,onResetFilters:a,onCloseMobileFilters:K[0]||(K[0]=Ve=>r.value=!1),onUpdatePriceRange:m(J),onUpdateCarTypeFilters:v,onUpdateModelFilters:p,onUpdateCapacityFilters:b,onUpdateTransmissionFilters:R,onUpdateDepositFilters:A,onUpdateVideoRecorderFilters:te,onUpdateBabySeatFilters:H},null,8,["initial-price-boundaries","price-range","is-open","is-loading","vehicles-count-by-filter","min-rental-cost-by-filter","onUpdatePriceRange"])]),cars:F(()=>[P(Ls,{"sort-by":z.value,vehicles:m($e),error:m(ke),"is-loading":m(ae),"current-page":k.value,"cars-total":m(ue),"sort-order-a-s-c":U.value,onAppendPage:M,onUpdateSortType:_e,onToggleSortOrder:Pe,onChangeCurrentPage:G,onOpenMobileFilters:K[1]||(K[1]=Ve=>r.value=!0)},null,8,["sort-by","vehicles","error","is-loading","current-page","cars-total","sort-order-a-s-c"])]),_:1})]))}});export{ba as default};
