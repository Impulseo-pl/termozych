(function(){var t=document.querySelector('.kl-toggle'),m=document.querySelector('.kl-menu');if(!t||!m)return;
function set(o){m.classList.toggle('open',o);document.body.classList.toggle('menu-open',o);t.setAttribute('aria-expanded',o?'true':'false');t.querySelector('b').textContent=o?'Zamknij':'Menu'}
t.addEventListener('click',function(){set(!m.classList.contains('open'))});
m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){set(false)})});
document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)})})();
