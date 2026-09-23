/* Coordinates for Villanueva/Choloma are illustrative demo points.
   SPS uses the coordinates linked from the official Mundiofertas website.
   Leaflet is accessed on window to avoid the existing currency formatter L. */
(()=>{
const el=document.getElementById('storeMap');
if(!window.L){el.innerHTML='<p class="map-fallback">El mapa no está disponible. Usá los enlaces de las tiendas para encontrar cómo llegar.</p>';return;}
el.replaceChildren();
const leaflet=window.L;
const map=leaflet.map(el,{scrollWheelZoom:false}).setView([15.48,-88.01],10);
leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);
const stores=[{id:'villanueva',name:'Villanueva',coords:[15.325,-87.997],note:'Ubicación aproximada · demo'},{id:'sps',name:'San Pedro Sula',coords:[15.5010363,-88.0290113],note:'Bo. El Benque · 7 calle y 8 avenida'},{id:'choloma',name:'Choloma',coords:[15.614,-87.953],note:'Ubicación aproximada · demo'}];
const markers={};stores.forEach(s=>{markers[s.id]=leaflet.marker(s.coords,{icon:leaflet.divIcon({className:'mundi-marker',html:'<span class="mundi-pin"></span>',iconSize:[30,38],iconAnchor:[15,34]}),title:'Mundi Ofertas · '+s.name,alt:'Ubicación de '+s.name}).addTo(map).bindPopup('<b>Mundi Ofertas · '+s.name+'</b>'+s.note);});
map.fitBounds(stores.map(s=>s.coords),{padding:[40,40]});
document.querySelectorAll('[data-store]').forEach(b=>b.addEventListener('click',()=>{const s=stores.find(s=>s.id===b.dataset.store);map.setView(s.coords,13,{animate:!matchMedia('(prefers-reduced-motion: reduce)').matches});markers[s.id].openPopup();}));
new ResizeObserver(()=>map.invalidateSize()).observe(el);
})();
