const current=document.body.dataset.page;
document.querySelectorAll('[data-nav]').forEach(a=>{if(a.dataset.nav===current)a.classList.add('active')});
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
