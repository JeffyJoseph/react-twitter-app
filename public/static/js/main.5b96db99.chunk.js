(this.webpackJsonptwitterlike=this.webpackJsonptwitterlike||[]).push([[0],{28:function(e,t,a){e.exports=a(62)},33:function(e,t,a){},51:function(e,t,a){},54:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),i=a.n(c),l=(a(33),a(20)),o=a(21),s=a(26),d=a(25),u=a(27),m=a(4),g=a(7),p=a(3),f=a(22),b=a.n(f),v=(a(51),function(e){var t=Object(n.useRef)();return r.a.createElement("div",null,r.a.createElement("div",{className:"ui fluid search"},r.a.createElement("div",{className:"ui icon input"},r.a.createElement("input",{className:"prompt",type:"text",ref:t,name:"filterValue",placeholder:"Search Tweet..."}),r.a.createElement("span",{className:"pointer",onClick:function(a){return e.onchange(t)}},r.a.createElement("i",{className:"search icon"}))),r.a.createElement("div",{className:"results"})))}),E=a(23),h=a.n(E),O=function(e){var t=e.url?e.url:"https://picsum.photos/200";return r.a.createElement("div",{className:"content"},r.a.createElement("img",{className:"ui avatar image",alt:"img",src:t}),r.a.createElement("span",null," ",e.name," "),"  ",r.a.createElement("span",{style:{float:"right"}}," ",r.a.createElement(h.a,{fromNow:!0},e.date),"  "),r.a.createElement("div",{className:"description"},e.text))},j=(a(54),function(e,t){return Object(u.a)({userSelect:"none",padding:16,margin:"0 0 ".concat(8,"px 0"),borderRadius:"5px",background:e?"#e6d7c3":"white"},t)}),N=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),l=Object(m.a)(i,2),o=l[0],s=l[1],d=Object(n.useState)("React"),u=Object(m.a)(d,2),f=u[0],E=u[1],h=Object(n.useState)([]),N=Object(m.a)(h,2),w=(N[0],N[1]);Object(n.useEffect)((function(){var e=0===f.length?"React":f;b.a.get("http://localhost:5000/twitter",{params:{searchQuery:e,count:5}}).then((function(e){var t=e.data.statuses,a=JSON.parse(localStorage.getItem("selected"));x(t,a)}))}),[f]),Object(n.useEffect)((function(){o&&o.length>0&&localStorage.setItem("selected",JSON.stringify(o))}),[o]);var x=function(e,t){var a=Object(g.a)(e);e&&e.length>0&&t&&t.length>0&&e.forEach((function(e){t.forEach((function(t){e.id===t.id&&a.splice(e.index,1)}))})),c(a),w(a);var n=JSON.parse(localStorage.getItem("selected"));s(n)},y=function(e){return"retrived"===e?a:o};return r.a.createElement("div",null,r.a.createElement(v,{className:"search",onchange:function(e){E(e.current.value)}}),r.a.createElement(p.a,{onDragEnd:function(e){var t=e.source,a=e.destination;if(a&&"saved"===a.droppableId){a.droppableId="saved";var n=function(e,t,a,n){null==e&&(e=[]),null==t&&(t=[]);var r=Object(g.a)(e),c=Object(g.a)(t),i=r.splice(a.index,1),l=Object(m.a)(i,1)[0];c.splice(n.index,0,l);var o={};return o[a.droppableId]=r,o[n.droppableId]=c,o}(y(t.droppableId),y(a.droppableId),t,a);c(n.retrived),s(n.saved)}}},r.a.createElement("div",{className:"container"},r.a.createElement(p.c,{className:"tweet",droppableId:"retrived"},(function(e,t){return r.a.createElement("div",{ref:e.innerRef,style:(t.isDraggingOver,{background:"#e6d7c3",padding:8,borderRadius:"5px"})},a.map((function(e,t){return r.a.createElement(p.b,{key:e.id,draggableId:e.id.toString(),index:t},(function(t,a){return r.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:j(a.isDragging,t.draggableProps.style)}),r.a.createElement(O,{name:e.user.name,text:e.text,date:e.created_at,url:e.user.profile_background_image_url_https}))}))})),e.placeholder)})),r.a.createElement(p.c,{droppableId:"saved"},(function(e,t){return r.a.createElement("div",{ref:e.innerRef,style:(t.isDraggingOver,{background:"#e6d7c3",padding:8,borderRadius:"5px"})},o&&o.map((function(e,t){return r.a.createElement(p.b,{isDragDisabled:!0,key:e.id,draggableId:e.id.toString(),index:t},(function(t,a){return r.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:j(a.isDragging,t.draggableProps.style)}),r.a.createElement(O,{name:e.user.name,text:e.text,date:e.created_at,url:e.user.profile_background_image_url_https}))}))})),e.placeholder)})))))},w=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(N,null)}}]),a}(n.Component);a(61);var x=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"ui container "},r.a.createElement("h2",{className:"ui dividing header"}," Tweet Saver"),r.a.createElement(w,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.5b96db99.chunk.js.map