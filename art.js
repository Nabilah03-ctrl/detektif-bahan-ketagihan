/* Original inline vector game objects; environment and character art in assets/. */
window.icon = function(name,cls='') {
 const p={
  search:'<circle cx="27" cy="26" r="17" fill="#14C8F5"/><path d="m40 39 15 16" stroke-width="12"/><path d="m40 39 15 16" stroke="#FFB800" stroke-width="6"/><path d="M17 26a10 10 0 0 1 10-10" stroke="white"/>',
  star:'<path d="m32 5 8 17 19 3-14 14 3 20-16-9-17 9 4-20L5 25l19-3Z" fill="#FFD600"/><path d="m29 16-5 13-10 1" stroke="#fff5ad"/>',
  heart:'<path d="M32 56S4 38 4 21C4 4 26 2 32 17 39 2 60 4 60 21 60 38 32 56 32 56Z" fill="#EF3340"/><path d="M13 23c-1-6 4-9 8-8" stroke="#ffb5b9"/>',
  key:'<circle cx="21" cy="22" r="15" fill="#FFD600"/><circle cx="21" cy="22" r="5" fill="#fff5b1"/><path d="m31 34 22 22 7-7-6-6-6 2 1-8-10-9" fill="#FFB800"/>',
  lock:'<path d="M18 29V18a14 14 0 0 1 28 0v11" fill="none" stroke-width="7"/><rect x="10" y="27" width="44" height="31" rx="8" fill="#FFB800"/><circle cx="32" cy="40" r="5" fill="#101F46"/><path d="M32 42v8"/>',
  clock:'<circle cx="32" cy="35" r="24" fill="#fff"/><path d="M25 4h14M32 4v7m0 9v16l10 6"/><path d="m49 14 5-5"/>',
  sound:'<path d="M7 25h12L33 12v40L19 39H7Z" fill="#FFD600"/><path d="M42 22q14 10 0 20m7-29q23 19 0 38" fill="none"/>',
  mute:'<path d="M7 25h12L33 12v40L19 39H7Z" fill="#fff"/><path d="m43 24 15 16m0-16L43 40" stroke="#EF3340"/>',
  arrow:'<path d="M8 32h46M36 14l18 18-18 18" fill="none" stroke-width="7"/>',
  back:'<path d="M56 32H10m18-18L10 32l18 18" fill="none" stroke-width="7"/>',
  check:'<path d="m12 32 13 14 27-30" fill="none" stroke="#12B76A" stroke-width="9"/>',
  cross:'<path d="m16 16 32 32m0-32L16 48" fill="none" stroke="#EF3340" stroke-width="9"/>',
  map:'<path d="m4 14 18-7 20 7 18-7v43l-18 7-20-7-18 7Z" fill="#FFD600"/><path d="M22 7v43m20-36v43" stroke="#d69313"/><path d="M12 38c4-23 24 9 40-11" stroke="#EF3340" stroke-dasharray="4 5" fill="none"/>',
  folder:'<path d="M4 17V9h23l7 8h26v40H4Z" fill="#FFB800"/><path d="M4 23h56v34H4Z" fill="#FFD600"/><path d="M15 35h23m-23 9h32" stroke="#a66900"/>',
  shield:'<path d="m32 4 25 10v19Q54 51 32 61 10 51 7 33V14Z" fill="#1746C8"/><path d="m19 31 9 10 18-22" fill="none" stroke="#FFD600" stroke-width="6"/>',
  bolt:'<path d="M36 3 9 37h20l-3 24 29-37H36Z" fill="#FFD600"/>',
  print:'<path d="M17 25V6h30v19" fill="#fff"/><rect x="6" y="22" width="52" height="28" rx="6" fill="#14C8F5"/><path d="M17 39h30v20H17Z" fill="#fff"/><path d="M24 46h16m-16 6h12"/><circle cx="49" cy="31" r="2" fill="#12B76A"/>',
  download:'<path d="M32 5v33m-13-12 13 13 13-13M8 42v14h48V42" fill="none" stroke-width="6"/>',
  gear:'<path d="m26 4 12 0 2 9 8 5 9-2 6 10-7 7v9l-8 9-9-1-7 9-10-5v-9l-8-6-9 2-4-12 8-6v-9l10-6 7 4Z" fill="#14C8F5"/><circle cx="32" cy="31" r="10" fill="white"/>',
  footprint:'<ellipse cx="25" cy="21" rx="11" ry="18" transform="rotate(22 25 21)" fill="#FFB800"/><path d="m14 42 19 6-3 12-20-6Z" fill="#FFB800"/>',
  fingerprint:'<path d="M8 33C3 1 57-5 57 28M15 37C6 6 49 3 50 28c1 12-3 23-8 30M22 37C13 15 41 12 42 29c2 13-2 20-7 28M29 35c-7-13 6-17 6-4s-2 22-10 28M13 44l7 11M5 41l7 15" fill="none" stroke="#14C8F5"/>',
  book:'<path d="M10 6h44v52H10Z" fill="#F43F93"/><path d="M18 6v52m8-36h20m-20 9h16" stroke="#fff"/>',
  home:'<path d="m4 28 28-23 28 23H50v30H14V28Z" fill="#FFB800"/><path d="M26 58V37h13v21" fill="#1746C8"/>'
 };
 return `<svg class="icon ${cls}" viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke="#101F46" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">${p[name]||p.search}</svg>`;
};
window.badgeArt = function(n=0) {return `<svg class="badge-art badge-${n}" viewBox="0 0 200 220" aria-hidden="true"><defs><linearGradient id="g${n}" x2=".8" y2="1"><stop stop-color="#fff184"/><stop offset=".5" stop-color="#FFD600"/><stop offset="1" stop-color="#FF8A00"/></linearGradient></defs><path d="m56 140-16 69 41-15 19 22 12-71m32-5 16 69-41-15-19 22-12-71" fill="${['#1746C8','#7b36d4','#EF3340'][n%3]}" stroke="#101F46" stroke-width="5"/><path d="m100 5 22 14 26-1 12 24 23 13-1 26 13 23-14 22 1 26-24 12-13 23-26-1-23 13-22-14-26 1-12-24-23-13 1-26L5 104l14-22-1-26 24-12 13-23 26 1Z" fill="url(#g${n})" stroke="#101F46" stroke-width="5"/><circle cx="100" cy="103" r="63" fill="#101F46" stroke="#fff184" stroke-width="5"/><path d="m100 55 14 29 32 5-23 22 5 32-28-15-28 15 5-32-23-22 32-5Z" fill="#FFD600"/><path d="m89 83-7 12-11 2" stroke="white" fill="none" stroke-width="4" stroke-linecap="round"/></svg>`;};
window.evidenceArt = function(kind) {
 if(kind==='three') return `<div class="three-evidence">${['tobacco','alcohol','drugs'].map(evidenceArt).join('')}</div>`;
 if(['search','shield'].includes(kind))return `<div class="hero-icon">${icon(kind)}</div>`;
 if(kind==='safe')return `<div class="safe-art"><img src="./assets/aina.png" alt="Izz menunjukkan tindakan selamat"><span>TIDAK!</span>${icon('shield')}</div>`;
 const data={tobacco:{title:'JAUHI TEMBAKAU',color:'#EF3340',shape:'<path d="M25 62h68v15H25Z" fill="white"/><path d="M78 62h15v15H78Z" fill="#FFB800"/><path d="M40 52c-10-9 10-12 0-22m17 21c-10-9 10-12 0-22" fill="none" stroke="#101F46" stroke-width="4"/><circle cx="60" cy="60" r="46" fill="none" stroke="#EF3340" stroke-width="10"/><path d="m28 28 65 65" stroke="#EF3340" stroke-width="10"/>'},alcohol:{title:'MINUMAN BERALKOHOL',color:'#FF7112',shape:'<path d="m60 10 51 90H9Z" fill="#FFD600" stroke="#101F46" stroke-width="5"/><path d="M60 40v26" stroke="#101F46" stroke-width="9" stroke-linecap="round"/><circle cx="60" cy="82" r="5" fill="#101F46"/>'},drugs:{title:'DADAH',color:'#7b36d4',shape:'<path d="m38 10 44 0 28 28v44l-28 28H38L10 82V38Z" fill="#EF3340" stroke="#101F46" stroke-width="5"/><path d="m41 40 39 40m0-40L41 80" stroke="white" stroke-width="10" stroke-linecap="round"/>'}}[kind];
 if(!data)return `<div class="hero-icon">${icon('folder')}</div>`;
 return `<div class="evidence-sign" style="--sign:${data.color}"><svg viewBox="0 0 120 120" role="img" aria-label="${data.title}">${data.shape}</svg><strong>${data.title}</strong><small>${kind==='tobacco'?'DILARANG MEROKOK':kind==='alcohol'?'KATAKAN TIDAK':'BAHAN TERLARANG'}</small></div>`;
};
window.doorArt = function(n) {return `<div class="mystery-door door-${n}" aria-label="Pintu misteri ${n+1}"><div class="door-rays"></div><div class="door-frame"><div class="door-panel"><div class="door-number">0${n+1}</div><div class="door-window">${icon(n===2?'shield':'fingerprint')}</div><div class="door-moulding"></div><span class="door-handle"></span><div class="door-lock">${icon('lock')}</div><i class="door-rivet r1"></i><i class="door-rivet r2"></i><i class="door-rivet r3"></i><i class="door-rivet r4"></i></div></div><div class="door-step"></div></div>`;};
window.chestArt = function() {return `<div class="treasure"><div class="treasure-glow"></div><svg viewBox="0 0 320 260" aria-label="Peti harta karun emas"><g stroke="#101F46" stroke-width="7" stroke-linejoin="round"><path d="M45 125h235v100H45Z" fill="#FF7112"/><path d="M61 142h202v67H61Z" fill="#ad4e11"/><path d="M45 138h235v20H45Zm35 0h24v87H80Zm141 0h24v87h-24Z" fill="#FFD600"/><g class="chest-lid"><path d="M45 125V85q0-65 60-65h114q61 0 61 65v40Z" fill="#FFB800"/><path d="M61 109V85q0-49 44-49h114q45 0 45 49v24Z" fill="#FF7112"/><path d="M85 23v100m151-100v100" stroke="#FFD600" stroke-width="20"/><path d="M45 112h235v25H45Z" fill="#FFD600"/></g><rect x="139" y="127" width="47" height="48" rx="8" fill="#FFD600"/><circle cx="162" cy="148" r="6" fill="#101F46"/><path d="M162 148v12"/></g></svg>${icon('star','treasure-star ts1')}${icon('star','treasure-star ts2')}${icon('star','treasure-star ts3')}</div>`;};
