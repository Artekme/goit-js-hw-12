import{a as h,S as v,i as L}from"./assets/vendor-550cebad.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function d(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=d(t);fetch(t.href,a)}})();async function m(e,s){const t="https://pixabay.com/api/"+"?key=43036012-df3a1e6422cb462a655402953",a={q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s},r={};return(await h.get(t,{params:a,headers:r})).data}let u=new v(".gallery a",{captionDelay:250,captionsData:"alt"});const w=document.querySelector(".gallery");function S(e){return`<li class="gallery-item">
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
</li>`}function b(e){return e.map(S).join("")}function y(e){const s=b(e);w.insertAdjacentHTML("beforeend",s),u.on("show.simplelightbox",function(){}),u.refresh()}const q=document.querySelector(".gallery"),P=document.querySelector(".search-form"),p=document.querySelector("input"),c=document.querySelector("#load-more");P.addEventListener("submit",$);c.addEventListener("click",x);const l=document.querySelector(".loader");let i="",o,f=0;const M=15;async function $(e){if(e.preventDefault(),q.innerHTML="",o=1,i=p.value.trim(),!i){L.show({title:"Warning",message:"Please enter a search query",position:"topRight",maxWidth:400});return}try{l.style.display="block";const s=await m(i,o);f=Math.ceil(s.totalHits/M),y(s.hits)}catch{}g(),l.style.display="none",p.value=""}async function x(){l.style.display="block",o+=1;try{const e=await m(i,o);y(e.hits)}catch{}g(),l.style.display="none"}function g(){o>=f?k():E()}function E(){c.style.display="block"}function k(){c.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
