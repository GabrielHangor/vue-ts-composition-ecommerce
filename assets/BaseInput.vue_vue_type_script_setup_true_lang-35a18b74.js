import{d as b,f as x,c as n,h as t,r,s as v,v as g,t as u,b as c,e as V}from"./index-aa0aad6b.js";const k="/vue-ts-composition-ecommerce/delete-icon.svg",y={class:"relative block"},B={class:"absolute inset-y-0 left-0 flex items-center pl-4"},w={key:0,src:k,alt:"Cross"},C=["value","disabled"],I={class:"mt-1 block text-center text-xs text-error"},N=b({__name:"BaseInput",props:{modelValue:null,label:null,error:null,disabled:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:l}){const d=e,s=x({focused:!1,touched:!1}),i=o=>{s.value.touched=!0,l("update:modelValue",o)},p=()=>{d.disabled||l("update:modelValue",null)},m=()=>s.value.focused=!0,f=()=>s.value.focused=!1;return(o,a)=>(c(),n("div",null,[t("div",y,[t("span",B,[r(o.$slots,"icon-left")]),t("span",{class:"absolute inset-y-0 right-0 flex cursor-pointer items-center pr-4",onClick:p},[r(o.$slots,"icon-right",{},()=>[e.modelValue?(c(),n("img",w)):V("",!0)])]),t("input",v({name:"input",value:e.modelValue,onInput:a[0]||(a[0]=h=>i(h.target.value)),onFocus:m,onBlur:f},o.$attrs,{placeholder:"1",class:["peer block h-12 w-full appearance-none rounded-[10px] px-4 pt-5 font-medium text-gray-600 placeholder-transparent shadow-inputBase transition duration-300 ease-in-out placeholder-shown:pt-0 focus:outline-none",{"border-[1px] border-error text-error":e.error}],disabled:e.disabled}),null,16,C),t("label",{for:"input",class:g(["pointer-text pointer-events-none absolute top-1 px-4 text-xs font-normal text-gray-600 transition-all peer-placeholder-shown:top-[12px] peer-placeholder-shown:text-base peer-placeholder-shown:font-medium",{"text-error":e.error}])},u(e.label),3)]),t("span",I,u(e.error),1)]))}});export{N as _,k as a};
