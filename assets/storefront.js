/* Manual, touch and keyboard carousels. No automatic rotation. */
const campaigns = [
  {k:'minisplit',tag:'FRESCURA QUE SE SIENTE',title:'Más fresco.<br>Más en casa.',text:'Aires inverter para disfrutar cada espacio.',cta:'Ver aire'},
  {k:'vitrina40',tag:'REFRIGERACIÓN A TU MEDIDA',title:'Grandes ideas.<br>Bien frescas.',text:'Equipá tu negocio con refrigeración americana.',cta:'Ver vitrina'},
  {k:'camaMat',tag:'TU DESCANSO EMPIEZA AQUÍ',title:'Tu lugar<br>para recargar.',text:'Camas y colchones para tus mejores noches.',cta:'Ver cama'},
  {k:'ropero',tag:'ESPACIO PARA LO QUE QUERÉS',title:'Un hogar<br>más tuyo.',text:'Muebles que van con vos y con tu espacio.',cta:'Ver mueble'}
];
const track=document.getElementById('campaigns');
track.innerHTML=campaigns.map((c,i)=>`<article class="campaign" role="group" aria-roledescription="diapositiva" aria-label="${i+1} de ${campaigns.length}"><span class="eyebrow">${c.tag}</span><h2>${c.title}</h2><p>${c.text}</p><img src="${img(c.k)}" alt="${P[c.k].n}" ${i>1?'loading="lazy"':'fetchpriority="high"'}><div class="campaign-foot"><div class="campaign-price"><small>${P[c.k].m} · ${P[c.k].cond==='semi'?'Americano revisado':'Nuevo'}</small><strong>${L(P[c.k].p)}</strong></div><button onclick="verProducto('${c.k}')">${c.cta} ↗</button></div></article>`).join('');
document.getElementById('discovery').innerHTML=[
 {k:'minisplit',tag:'Para tu hogar',title:'Climatización',href:'#ofertas'},
 {k:'vitrina46',tag:'Para emprender',title:'Refrigeración',href:'#negocio'},
 {k:'camaMat',tag:'Para descansar',title:'Camas y colchones',href:'#categorias'},
 {k:'ropero',tag:'Para renovar',title:'Muebles y más',href:'#categorias'}
].map(c=>`<a class="discover-card" href="${c.href}"><div><small>${c.tag}</small><b>${c.title}</b><span>Explorar →</span></div><img src="${img(c.k)}" alt="" loading="lazy"></a>`).join('');
const dots=document.getElementById('campaignDots');
dots.innerHTML=campaigns.map((_,i)=>`<button aria-label="Ir a promoción ${i+1}" aria-current="${i===0}" data-slide="${i}"></button>`).join('');
const motion=()=>matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth';
function slideTo(i){track.scrollTo({left:Math.min(track.scrollWidth-track.clientWidth,track.children[i].offsetLeft-track.children[0].offsetLeft),behavior:motion()});}
dots.addEventListener('click',e=>{const b=e.target.closest('[data-slide]');if(b)slideTo(Number(b.dataset.slide));});
document.querySelectorAll('[data-track]').forEach(b=>b.addEventListener('click',()=>{const t=document.getElementById(b.dataset.track);t.scrollBy({left:Number(b.dataset.dir)*(t.children[0].getBoundingClientRect().width+16),behavior:motion()});}));
function syncSlider(t){const max=t.scrollWidth-t.clientWidth;document.querySelectorAll(`[data-track="${t.id}"]`).forEach(b=>b.disabled=Number(b.dataset.dir)<0?t.scrollLeft<2:t.scrollLeft>=max-2);if(t===track){let i=Math.round(t.scrollLeft/(t.children[0].getBoundingClientRect().width+16));if(t.scrollLeft>=max-2)i=campaigns.length-1;dots.querySelectorAll('button').forEach((b,j)=>b.setAttribute('aria-current',String(j===i)));document.getElementById('campaignStatus').textContent=`0${i+1} / 0${campaigns.length}`;}}
[track,document.getElementById('gridOfertas')].forEach(t=>{t.addEventListener('scroll',()=>syncSlider(t),{passive:true});t.addEventListener('keydown',e=>{if(e.target!==t||!['ArrowLeft','ArrowRight'].includes(e.key))return;e.preventDefault();t.scrollBy({left:(e.key==='ArrowRight'?1:-1)*(t.children[0].getBoundingClientRect().width+16),behavior:motion()});});new ResizeObserver(()=>syncSlider(t)).observe(t);syncSlider(t);});
/* Rotate every six seconds, respecting motion preferences and reader control. */
(()=>{
const shell=track.closest('.campaign-shell'),bottom=document.querySelector('.slider-bottom');
const control=document.createElement('button');control.className='slider-playback';control.type='button';control.setAttribute('aria-label','Pausar movimiento automático');bottom.insertBefore(control,bottom.firstChild);
const reduced=matchMedia('(prefers-reduced-motion: reduce)');let paused=reduced.matches,hover=false,focused=false,timer;
function render(){control.textContent=paused?'▶ Reanudar':'Ⅱ Pausar';control.setAttribute('aria-label',paused?'Reanudar movimiento automático':'Pausar movimiento automático');track.setAttribute('aria-live',paused?'polite':'off');document.getElementById('campaignStatus').setAttribute('aria-live',paused?'polite':'off');}
function schedule(){clearInterval(timer);render();if(paused||hover||focused||document.hidden)return;timer=setInterval(()=>{if(document.getElementById('home').classList.contains('hide')||!visible)return;const max=track.scrollWidth-track.clientWidth;if(track.scrollLeft>=max-2)slideTo(0);else track.scrollBy({left:track.children[0].getBoundingClientRect().width+16,behavior:motion()});},6000);}
let visible=true;new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;},{threshold:.2}).observe(track);
control.addEventListener('click',()=>{paused=!paused;schedule();});shell.addEventListener('mouseenter',()=>{hover=true;schedule();});shell.addEventListener('mouseleave',()=>{hover=false;schedule();});
shell.addEventListener('focusin',()=>{focused=true;schedule();});shell.addEventListener('focusout',e=>{if(!shell.contains(e.relatedTarget)){focused=false;schedule();}});
function manual(){paused=true;schedule();}shell.addEventListener('pointerdown',manual);shell.addEventListener('keydown',manual);dots.addEventListener('click',manual);document.addEventListener('visibilitychange',schedule);reduced.addEventListener('change',()=>{paused=reduced.matches;schedule();});schedule();
})();
