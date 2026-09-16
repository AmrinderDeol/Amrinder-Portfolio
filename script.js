document.getElementById("year").textContent = new Date().getFullYear();
const obs = new IntersectionObserver(entries => entries.forEach(e => {
  if(e.isIntersecting){e.target.animate([{opacity:0,transform:"translateY(18px)"},{opacity:1,transform:"translateY(0)"}],{duration:600,easing:"ease-out",fill:"both"});obs.unobserve(e.target)}
}),{threshold:.08});
document.querySelectorAll(".card,.timeline article,.skill-grid>div,.credential-grid>div").forEach(el=>obs.observe(el));