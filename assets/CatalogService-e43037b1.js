import{a0 as f}from"./index-48af4c27.js";const T=6,m=["carType","model","capacity","babySeat","transmission","videoRecorder","deposit"],w={carType:"Car Type",model:"Model",capacity:"Capacity",babySeat:"Baby Seat",transmission:"Transmission",videoRecorder:"Video Recorder",deposit:"Deposit"},V=o=>new Promise(e=>{setTimeout(()=>e(),o)}),v=(o,e)=>{let t;return typeof o=="number"&&(t=Number(e)),typeof o=="string"&&(t=e),typeof o=="boolean"&&(t=e==="true"),t},R=(o,e,t)=>{let i;return(...s)=>{t.value||(clearTimeout(i),i=setTimeout(()=>o(...s),e))}},b=o=>{const e=["babySeat","capacity","carType","deposit","model","transmission","videoRecorder"],t={};return o.forEach(i=>{const{rentalCost:r,...s}=i;typeof r=="number"&&e.forEach(c=>{const a=s[c];t[c]||(t[c]={}),(!t[c][a]||r<t[c][a])&&(t[c][a]=r)})}),t},C=(o,e)=>{const t={};for(const i of o){const r=i[e];t[r]=(t[r]||0)+1}return t},B=()=>{const o=window.scrollY,t=(0-o)/20;let i=0;const r=()=>{i++,window.scrollTo(0,o+i*t),i<20&&window.requestAnimationFrame(r)};window.requestAnimationFrame(r)};class l{static buildAllVehiclesQuery(e){let t=f.from("Vehicles").select("*",{count:"estimated"}).order(`${e.sortBy}`,{ascending:e.sortOrderASC}).range(e.offset,e.limit);return e.location&&(t=t.eq("city",e.location)),e.priceRange.minPrice&&(t=t.gt("rentalCost",e.priceRange.minPrice)),e.priceRange.maxPrice&&(t=t.lt("rentalCost",e.priceRange.maxPrice)),e.carTypes.length&&(t=t.in("carType",e.carTypes)),e.carModels.length&&(t=t.in("model",e.carModels)),e.carCapacities.length&&(t=t.in("capacity",e.carCapacities)),e.carTransmission.length&&(t=t.in("transmission",e.carTransmission)),e.carDeposit.length&&(t=t.in("deposit",e.carDeposit)),e.carVideoRecorder.length&&(t=t.in("videoRecorder",e.carVideoRecorder)),e.carBabySeat.length&&(t=t.in("babySeat",e.carBabySeat)),t}static buildVehicleByIdQuery(e){return f.from("Vehicles").select("*").eq("id",e)}static buildPriceRangeQuery(){return f.from("Vehicles").select("rentalCost")}static buildVehiclesCountQuery({location:e,priceRange:t}){let i=f.from("Vehicles").select("carType, model, capacity, transmission,  babySeat, videoRecorder, deposit, rentalCost");return e&&(i=i.eq("city",e)),t.minPrice&&(i=i.gt("rentalCost",t.minPrice)),t.maxPrice&&(i=i.lt("rentalCost",t.maxPrice)),i}}function u(o,e,t){const i=t.value,r=5*1024*1024,s="cacheable-",c=6048e5;return t.value=async function(...a){const g=`${s}${e}:${JSON.stringify(a)}`;localStorage.length&&decodeURIComponent(JSON.stringify(localStorage)).length>=r&&Object.keys(localStorage).filter(n=>n.startsWith(s)).forEach(n=>localStorage.removeItem(n));const h=localStorage.getItem(g);if(h){const n=JSON.parse(h);if(Date.now()-n.timestamp<c)return n.result;localStorage.removeItem(g)}try{const n=await i.apply(this,a);return n.error||localStorage.setItem(g,JSON.stringify({result:n,timestamp:Date.now()})),n}catch(n){throw console.error(`Error while executing "${e}" with arguments ${a}: ${n}`),n}},t}var P=Object.defineProperty,S=Object.getOwnPropertyDescriptor,d=(o,e,t,i)=>{for(var r=i>1?void 0:i?S(e,t):e,s=o.length-1,c;s>=0;s--)(c=o[s])&&(r=(i?c(e,t,r):c(r))||r);return i&&r&&P(e,t,r),r};class y{static async getAllVehicles(e){return l.buildAllVehiclesQuery(e)}static async getVehicleById(e){return l.buildVehicleByIdQuery(e)}static async getPriceRange(){const{data:e}=await l.buildPriceRangeQuery();return e?(e==null||e.sort((t,i)=>t.rentalCost-i.rentalCost),{minPrice:Number(e[0].rentalCost.toFixed()),maxPrice:Number(e[(e==null?void 0:e.length)-1].rentalCost.toFixed())}):{minPrice:1,maxPrice:101}}static async getVehiclesCountGroupedByFilterType(e){const{data:t}=await l.buildVehiclesCountQuery(e);if(!t)return null;const i={};return m.forEach(r=>i[r]=C(t,r)),i}static async getMinRentalCostGroupedByFilterType(e){const{data:t}=await l.buildVehiclesCountQuery(e);return t!=null&&t.length?b(t):null}}d([u],y,"getAllVehicles",1);d([u],y,"getVehicleById",1);d([u],y,"getPriceRange",1);d([u],y,"getVehiclesCountGroupedByFilterType",1);d([u],y,"getMinRentalCostGroupedByFilterType",1);export{y as C,T as V,m as a,R as b,V as d,w as f,v as g,B as s};
