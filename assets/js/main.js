const toggle=document.getElementById("menuToggle");
const menu=document.getElementById("menu");
if(toggle&&menu){toggle.addEventListener("click",()=>{const o=menu.classList.toggle("open");toggle.setAttribute("aria-expanded",String(o));});}

document.querySelectorAll('.has-sub > a').forEach((link)=>{
  link.addEventListener('click',(e)=>{
    if(window.innerWidth<=980){
      e.preventDefault();
      link.parentElement.classList.toggle('open');
    }
  });
});
