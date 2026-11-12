import {icon,escapeHTML} from "./ui.js";
import {CATEGORY_GUIDES,GUIDE_KICKERS} from "../content/category-guides.js";

export function guideSlider(category){
  const slides=CATEGORY_GUIDES[category];
  if(!slides)return "";
  const total=slides.length;
  return `<section class="section guide" data-guide aria-label="Mwongozo wa ${escapeHTML(category)}">
    <div class="section-head"><div><h2>Mwongozo: ${escapeHTML(category)}</h2><p>Slides ${total} zinazoelezea kundi hili</p></div><span class="small muted" data-guide-count>1 / ${total}</span></div>
    <div class="guide-track" data-guide-track tabindex="0">
      ${slides.map(([title,body],i)=>`<article class="guide-slide" aria-roledescription="slide" aria-label="${i+1} ya ${total}"><span class="guide-kicker">${i+1}. ${escapeHTML(GUIDE_KICKERS[i]||"")}</span><h3>${escapeHTML(title)}</h3><p>${escapeHTML(body)}</p></article>`).join("")}
    </div>
    <div class="guide-controls">
      <button class="icon-btn" data-guide-prev aria-label="Slide iliyopita">${icon("chevron-left",18)}</button>
      <div class="guide-dots">${slides.map((_,i)=>`<button class="guide-dot${i===0?" active":""}" data-guide-dot="${i}" aria-label="Slide ${i+1}"></button>`).join("")}</div>
      <button class="icon-btn" data-guide-next aria-label="Slide inayofuata">${icon("chevron-right",18)}</button>
    </div>
  </section>`;
}

export function bindGuideSliders(root=document){
  root.querySelectorAll("[data-guide]").forEach(guide=>{
    const track=guide.querySelector("[data-guide-track]");
    const dots=[...guide.querySelectorAll("[data-guide-dot]")];
    const count=guide.querySelector("[data-guide-count]");
    const total=dots.length;
    const width=()=>track.clientWidth||1;
    const index=()=>Math.max(0,Math.min(total-1,Math.round(track.scrollLeft/width())));
    const goTo=i=>track.scrollTo({left:Math.max(0,Math.min(total-1,i))*width(),behavior:"smooth"});
    const sync=()=>{const i=index();dots.forEach((d,n)=>d.classList.toggle("active",n===i));if(count)count.textContent=`${i+1} / ${total}`;};
    track.addEventListener("scroll",()=>requestAnimationFrame(sync),{passive:true});
    guide.querySelector("[data-guide-prev]").addEventListener("click",()=>goTo(index()-1));
    guide.querySelector("[data-guide-next]").addEventListener("click",()=>goTo(index()+1));
    dots.forEach(d=>d.addEventListener("click",()=>goTo(Number(d.dataset.guideDot))));
    track.addEventListener("keydown",e=>{if(e.key==="ArrowRight")goTo(index()+1);if(e.key==="ArrowLeft")goTo(index()-1);});
  });
}
