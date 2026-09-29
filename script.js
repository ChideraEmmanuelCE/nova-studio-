const menuButton=document.querySelector('.menu-toggle');const mobileMenu=document.querySelector('.mobile-menu');
if(menuButton){menuButton.addEventListener('click',()=>{const open=mobileMenu.classList.toggle('open');menuButton.setAttribute('aria-expanded',open);mobileMenu.setAttribute('aria-hidden',!open)});}
document.querySelectorAll('.mobile-menu a').forEach(a=>a.addEventListener('click',()=>{mobileMenu.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');mobileMenu?.setAttribute('aria-hidden','true')}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
