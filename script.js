document.getElementById('year').textContent=new Date().getFullYear();
const glow=document.querySelector(".cursor-glow");if(glow){window.addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"})}
const cards=document.querySelectorAll(".case");cards.forEach(c=>c.classList.add("v2-hidden"));const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("v2-show");observer.unobserve(entry.target)}}),{threshold:.12});cards.forEach(c=>observer.observe(c));
