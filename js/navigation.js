function applyView(){$('map').setAttribute('viewBox',[view.x,view.y,view.w,view.h].join(' '))}
function zoom(f,x=view.x+view.w/2,y=view.y+view.h/2){const nw=Math.min(5000,Math.max(30,view.w*f)),nh=nw*650/1200;view.x=x-(x-view.x)*nw/view.w;view.y=y-(y-view.y)*nh/view.h;view.w=nw;view.h=nh;applyView()}
$('map').addEventListener('wheel',e=>{e.preventDefault();const p=point(e);zoom(e.deltaY>0?1.14:.88,p.x,p.y)},{passive:false});
$('zoomIn').onclick=()=>zoom(.8);$('zoomOut').onclick=()=>zoom(1.25);$('fit').onclick=()=>{view={x:0,y:0,w:1200,h:650};applyView()};
$('modePhysical').onclick=()=>setMode('physical');$('modePolitical').onclick=()=>setMode('political');function setMode(m){state.mode=m;$('modePhysical').classList.toggle('active',m==='physical');$('modePolitical').classList.toggle('active',m==='political');render()}
