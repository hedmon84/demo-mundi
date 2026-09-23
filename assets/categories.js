(()=>{
const toggle=document.getElementById('categoryToggle'),panel=document.getElementById('categoryDropdown');
function close(restore=false){panel.hidden=true;toggle.setAttribute('aria-expanded','false');if(restore)toggle.focus();}
toggle.addEventListener('click',()=>{const open=panel.hidden;panel.hidden=!open;toggle.setAttribute('aria-expanded',String(open));});
document.getElementById('closeCategories').addEventListener('click',()=>close(true));
document.addEventListener('click',e=>{if(!panel.contains(e.target)&&!toggle.contains(e.target))close();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden)close(true);if(e.key==='Escape'&&document.getElementById('mobmenu').classList.contains('on')){document.getElementById('mobmenu').classList.remove('on');document.getElementById('burger').focus();}});
document.addEventListener('focusin',e=>{if(!panel.hidden&&!panel.contains(e.target)&&!toggle.contains(e.target))close();});
matchMedia('(max-width:860px)').addEventListener('change',()=>close());
document.querySelectorAll('.category-group').forEach(d=>d.addEventListener('toggle',()=>{if(d.open){d.parentElement.querySelectorAll('.category-group').forEach(other=>{if(other!==d)other.open=false;});}}));
})();
