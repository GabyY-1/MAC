function travel(dir){const from=dir==='undo'?history:future,to=dir==='undo'?future:history;if(!from.length)return;to.push(clone(state));state=from.pop();selected=null;render()}
$('undo').onclick=()=>travel('undo');$('redo').onclick=()=>travel('redo');document.querySelectorAll('[data-tool]').forEach(b=>b.onclick=()=>setTool(b.dataset.tool));
