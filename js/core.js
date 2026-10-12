'use strict';
const $=id=>document.getElementById(id), NS='http://www.w3.org/2000/svg';
const groups=['land','country','river','road','rail','border','city'], labels={land:'Terres',country:'Pays',river:'Fleuves',road:'Routes',rail:'Voies ferrées',border:'Frontières maritimes',city:'Villes'};
const colors={land:'#a6c68e',country:'#e1ba80',river:'#377db8',road:'#f8f7f0',rail:'#464e58',border:'#26658f',city:'#263d48'};
let state={objects:[],visibility:Object.fromEntries(groups.map(g=>[g,true])),mode:'physical',nextId:1},history=[],future=[],tool='select',selected=null,points=[],drawing=false,mouse=null,drag=null;
let view={x:0,y:0,w:1200,h:650};const clone=o=>JSON.parse(JSON.stringify(o));
function snapshot(){history.push(clone(state));if(history.length>80)history.shift();future=[]}
function updateStatus(s){$('status').textContent=s}
function setTool(t){tool=t;points=[];drawing=false;selected=null;document.querySelectorAll('[data-tool]').forEach(b=>b.classList.toggle('active',b.dataset.tool===t));render();$('hint').textContent={select:'Clique pour sélectionner, fais glisser pour déplacer. En mode sélection, déplace aussi les sommets.',land:'Clique pour placer les points du contour. Double-clic pour fermer.',country:'Dessine un pays point par point. Double-clic pour terminer.',free:'Maintiens le clic et trace librement; relâche pour fermer.',line:'Clique pour poser des points, double-clic pour terminer.',city:'Clique pour poser une ville ou un lieu.',pan:'Glisse pour te déplacer. Molette pour zoomer.'}[t]}
function point(e){const p=$('map').createSVGPoint();p.x=e.clientX;p.y=e.clientY;return p.matrixTransform($('map').getScreenCTM().inverse())}
function svg(tag,attr,parent){const n=document.createElementNS(NS,tag);Object.entries(attr||{}).forEach(([k,v])=>n.setAttribute(k,String(v)));parent.appendChild(n);return n}
const coords=p=>p.map(z=>z.map(n=>Math.round(n*10)/10).join(',')).join(' ');
function stroke(t){return t==='river'?'#2f87c8':t==='rail'?'#3f454e':t==='border'?'#2f6e95':'#eaeaea'}
