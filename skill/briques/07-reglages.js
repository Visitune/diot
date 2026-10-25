/* ---------- réglages (coller le MAPPING donné par Copilot) ---------- */
function parseMapping(txt){
 let t=txt.trim().replace(/^```[a-z]*\s*/i,'').replace(/```\s*$/,'').trim().replace(/^(const|let|var)\s+MAPPING\s*=\s*/,'').replace(/;\s*$/,'').trim();
 if(t[0]!=='{')throw new Error('Le texte doit commencer par « const MAPPING={ » ou « { ».');
 return new Function('return ('+t+')')()}
function applyMapping(o){
 Object.keys(MAPPING).forEach(k=>delete MAPPING[k]);Object.assign(MAPPING,JSON.parse(JSON.stringify(MAPPING_DEFAUT)),o||{});
 document.documentElement.style.setProperty('--accent',MAPPING.accent);$('#ttl').textContent=MAPPING.title;document.title=MAPPING.title;
 if(S.cur)load(MAPPING.sheet&&S.sheets[MAPPING.sheet]?MAPPING.sheet:S.cur);else render()}
function openSettings(){
 const d=document.createElement('div');d.id='modal';d.style.cssText='position:fixed;inset:0;background:#0008;z-index:20;display:flex;align-items:center;justify-content:center;padding:16px';
 d.innerHTML=`<div class="card" style="max-width:640px;width:100%"><h2>Réglages</h2><p style="color:var(--mute);margin:0 0 8px">Collez ici le texte « const MAPPING={ ... } » donné par Copilot, puis cliquez sur Appliquer. Laissez vide si tout s'affiche déjà correctement.</p>
 <textarea id="mapt" style="width:100%;min-height:200px;font-family:monospace;font-size:12px;background:var(--card);color:var(--ink);border:1px solid var(--line);border-radius:8px" placeholder="const MAPPING={ ... };"></textarea>
 <p id="maperr" style="color:var(--nc);margin:6px 0;min-height:1.2em"></p>
 <button class="pri" id="mapok">Appliquer</button> <button id="maprs">Revenir aux réglages automatiques</button> <button id="mapx">Fermer</button></div>`;
 document.body.appendChild(d);
 $('#mapx').onclick=()=>d.remove();
 $('#mapok').onclick=()=>{try{const o=parseMapping($('#mapt').value);if(!o||typeof o!=='object')throw new Error('Réglage invalide.');
  try{localStorage.setItem('mapping',JSON.stringify(o))}catch(e){}applyMapping(o);d.remove()}catch(e){$('#maperr').textContent='Erreur : '+e.message+' — renvoyez ce message à Copilot et demandez le bloc corrigé.'}};
 $('#maprs').onclick=()=>{try{localStorage.removeItem('mapping')}catch(e){}applyMapping(null);d.remove()}}
