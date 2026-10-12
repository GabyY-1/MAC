function download(name,content,type){const blob=new Blob([content],{type}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),2000)}
function save(){try{localStorage.setItem('MAC_P1A_V01',JSON.stringify(state));updateStatus('Enregistré sur cet appareil')}catch{alert('Sauvegarde locale impossible. Exporte ton JSON.')}}$('save').onclick=save;
$('exportJson').onclick=()=>download('p1a-map.json',JSON.stringify({format:'MAC-P1A',version:1,state},null,2),'application/json');
$('importJson').onclick=()=>$('file').click();$('file').onchange=async e=>{const f=e.target.files[0];if(!f)return;try{const data=JSON.parse(await f.text()),s=data.state||data;if(!Array.isArray(s.objects))throw Error('Format non reconnu');snapshot();state=s;state.visibility||=Object.fromEntries(groups.map(g=>[g,true]));state.nextId||=Math.max(0,...s.objects.map(o=>o.id))+1;selected=null;render()}catch(err){alert('Import impossible : '+err.message)}e.target.value=''};
function exportMarkup(){const copy=$('map').cloneNode(true);copy.querySelector('#draft').replaceChildren();copy.setAttribute('xmlns',NS);copy.setAttribute('width','1200');copy.setAttribute('height','650');copy.setAttribute('viewBox','0 0 1200 650');return new XMLSerializer().serializeToString(copy)}
$('exportSvg').onclick=()=>download('p1a-map.svg',exportMarkup(),'image/svg+xml');
$('exportPng').onclick=()=>{const data=exportMarkup(),url=URL.createObjectURL(new Blob([data],{type:'image/svg+xml'})),im=new Image();im.onload=()=>{const canvas=document.createElement('canvas');canvas.width=2400;canvas.height=1300;canvas.getContext('2d').drawImage(im,0,0,2400,1300);canvas.toBlob(b=>{if(b){const a=document.createElement('a'),u=URL.createObjectURL(b);a.href=u;a.download='p1a-map.png';a.click();setTimeout(()=>URL.revokeObjectURL(u),2000)}URL.revokeObjectURL(url)},'image/png')};im.src=url};
$('reset').onclick=()=>{if(!confirm('Effacer la carte actuelle ? Pense à exporter une sauvegarde JSON.'))return;snapshot();state.objects=[];state.nextId=1;selected=null;render()};
try{const raw=localStorage.getItem('MAC_P1A_V01');if(raw){const s=JSON.parse(raw);if(Array.isArray(s.objects))state=s}}catch{}
$('newColor').value=colors.land;$('lineType').onchange=()=>{};setTool('select');render();

if(window.lucide)window.lucide.createIcons();
