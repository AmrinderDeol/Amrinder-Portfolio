document.getElementById("year").textContent=new Date().getFullYear();
const bar=document.querySelector(".progress");
window.addEventListener("scroll",()=>{const h=document.documentElement.scrollHeight-innerHeight;bar.style.width=(scrollY/h*100)+"%"});
const els=document.querySelectorAll(".project-head,.avery-title,.editorial-copy,.physical-title,.b2b-copy,.manifesto h2,.timeline article,.capabilities>div");
els.forEach(e=>e.classList.add("reveal"));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
els.forEach(e=>io.observe(e));
document.querySelectorAll(".stage img").forEach((img,i)=>window.addEventListener("scroll",()=>{if(innerWidth>900){const r=document.querySelector(".stage").getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)img.style.translate=`0 ${((innerHeight-r.top)*(.015+i*.004)).toFixed(1)}px`}}));