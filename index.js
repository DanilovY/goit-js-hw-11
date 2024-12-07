import{i as c,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const u=r=>{const i=`https://pixabay.com/api/?${new URLSearchParams({key:"47498478-5b3c5ee421281cd3bcc4956d2",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(i).then(l=>{if(!l.ok)throw new Error(l.status);return l.json()})},m=r=>r.map(e=>`<li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}" />
                <ul class="img-info-list">
                    <li class="img-info-item">
                        <p class="info-title">Likes</p>
                        <p class="info-value">${e.likes}</p>
                    </li>
                    <li class="img-info-item">
                        <p class="info-title">Views</p>
                       <p class="info-value">${e.views}</p>
                    </li>
                    <li class="img-info-item">
                        <p class="info-title">Comments</p>
                        <p class="info-value">${e.comments}</p>
                    </li>
                    <li class="img-info-item">
                        <p class="info-title">Downloads</p>
                        <p class="info-value">${e.downloads}</p>
                    </li>
                </ul>
            </a>
        </li>`).join("");c.settings({position:"topRight",maxWidth:"430px"});const p=document.querySelector(".form"),o=document.querySelector(".loader");o.style.display="none";const a=document.querySelector(".gallery-list"),d=new f(".gallery-item .gallery-link",{captionsData:"alt"});p.addEventListener("submit",y);function y(r){r.preventDefault();const e=r.target.elements.input.value.trim();if(e===""){o.style.display="none",c.warning({message:"The field is empty!"});return}else o.style.display="block";u(e).then(i=>{if(i.total===0)throw a.innerHTML="",new Error;return o.style.display="none",i.hits}).then(i=>{a.innerHTML="",o.style.display="none",a.innerHTML=m(i),d.refresh()}).catch(()=>{o.style.display="none",c.error({iconColor:"#ffffff",messageColor:"#ffffff",progressBarColor:"#ffffff",message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{r.target.elements.input.value=""})}
//# sourceMappingURL=index.js.map
