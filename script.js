const menuBtn=document.querySelector('.menu-btn');
const mobileNav=document.querySelector('.mobile-nav');
if(menuBtn&&mobileNav){menuBtn.addEventListener('click',()=>{mobileNav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',mobileNav.classList.contains('open'))})}
const topBtn=document.querySelector('.backtop');
if(topBtn){topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}))}
