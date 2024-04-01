import{a as L,S as w,i}from"./assets/vendor-550cebad.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function u(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=u(t);fetch(t.href,r)}})();async function g(e,a){const t="https://pixabay.com/api/"+"?key=43036012-df3a1e6422cb462a655402953",r={q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:a},o={};return(await L.get(t,{params:r,headers:o})).data}let m=new w(".gallery a",{captionDelay:250,captionsData:"alt"});const S=document.querySelector(".gallery");function b(e){return`<li class="gallery-item">
<div class="image-card">
<a class="gallery-link" href="${e.largeImageURL}">
<img 
loading="lazy" 
class="gallery-image" 
src="${e.webformatURL}" 
alt="${e.tags}"/>

<div class="data-field">

<div class="img-data">
<h4 class="data-title">Likes</h4>
<p class="data-value">${e.likes}</p>
</div>

<div class="img-data">
<h4 class="data-title">Views</h4>
<p class="data-value">${e.views}</p>
</div>

<div class="img-data">
<h4 class="data-title">Comments</h4>
<p class="data-value">${e.comments}</p>
</div>

<div class="img-data">
<h4 class="data-title">Downloads</h4>
<p class="data-value">${e.downloads}</p>
</div>

</div>
</a>
</div>
</li>`}function P(e){return e.map(b).join("")}function y(e){const a=P(e);S.insertAdjacentHTML("beforeend",a),m.on("show.simplelightbox",function(){}),m.refresh()}const q=document.querySelector(".gallery"),x=document.querySelector(".search-form"),p=document.querySelector("input"),d=document.querySelector("#load-more");x.addEventListener("submit",E);d.addEventListener("click",M);const s=document.querySelector(".loader");let l="",n,h=0;const R=15;async function E(e){if(e.preventDefault(),q.innerHTML="",n=1,l=p.value.trim(),!l){v(),i.show({title:"Warning",message:"Please enter a search query",position:"topRight",maxWidth:400});return}try{s.style.display="block";const a=await g(l,n);if(a.totalHits===0){s.style.display="none",i.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:400});return}h=Math.ceil(a.totalHits/R),y(a.hits)}catch{s.style.display="none",i.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight",maxWidth:400})}f(),s.style.display="none",p.value=""}async function M(){s.style.display="block",n+=1;try{const e=await g(l,n);y(e.hits)}catch{s.style.display="none",i.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight",maxWidth:400})}$(),f(),s.style.display="none"}function f(){n>=h?(v(),i.warning({title:"Warning",message:"We're sorry, but you've reached the end of search results.",position:"topRight",maxWidth:400})):W()}function W(){d.style.display="block"}function v(){d.style.display="none"}function $(){const a=document.querySelector(".image-card").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
