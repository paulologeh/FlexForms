(this["webpackJsonppanel-app"]=this["webpackJsonppanel-app"]||[]).push([[0],{205:function(e,t,a){e.exports=a(353)},210:function(e,t,a){},212:function(e,t,a){},353:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(41),c=(a(210),a(211),a(173)),r=a(174),i=a(194),u=a(192),m=a(372),s=(a(212),a(20)),E=a(370),p=a(371),v=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),o=a[0],c=a[1];console.log(e.canvasTools);return Object(n.useEffect)((function(){!function(){var t=[];for(var a in e.canvasTools)t.push(l.a.createElement(e.canvasTools[a],null));c(t)}()}),[e]),l.a.createElement(E.a,{padded:!0},l.a.createElement(p.a,{as:"h2"},"Canvas"),o)},d=a(363),f=a(364),b=a(367),h=a(366),j=function(){return l.a.createElement(E.a,{secondary:!0,padded:!0},l.a.createElement(d.a,null,l.a.createElement(p.a,{as:"h5"},"Items Panel"),l.a.createElement("label",null,"ID"),l.a.createElement(f.a,{fluid:!0,type:"text",size:"small"}),l.a.createElement("label",null,"Label"),l.a.createElement(f.a,{fluid:!0,type:"text",size:"small"}),l.a.createElement("label",null,"Tooltip"),l.a.createElement(f.a,{fluid:!0,type:"text",size:"small"}),l.a.createElement("label",null,"Help Box"),l.a.createElement(b.a,null," ",l.a.createElement(h.a,null)," "),l.a.createElement("label",null,"Conditions"),l.a.createElement(E.a,null,l.a.createElement("p",null,l.a.createElement("i",null,"Example: Enable if ID1 == true")))))},O=a(369),y=a(368),g=a(355),k=a(27),w=function(e){var t=e.initValue,a=Object(n.useState)(t),o=Object(s.a)(a,2),c=o[0],r=o[1];return l.a.createElement(f.a,{type:"datetime-local",onChange:function(e,t){var a=Object(k.a)({},c);a.value=e.value,r(a)}})},C=function(e){var t=e.initValue,a=Object(n.useState)(t),o=Object(s.a)(a,2),c=o[0],r=o[1];return l.a.createElement(f.a,{type:"time",onChange:function(e,t){var a=Object(k.a)({},c);a.value=e.value,r(a)}})},T=function(e){return l.a.createElement(g.a,null)},x=a(354),S=function(e){var t=e.initValue,a=Object(n.useState)(t),o=Object(s.a)(a,2),c=o[0],r=o[1];return l.a.createElement(x.a,{onClick:function(){r(!c)}})},V=a(365),I=[{icon:"calendar alternate outline",tool:"date-time",component:w},{icon:"dot circle outline",tool:"radio",component:function(e){var t=e.initValue,a=Object(n.useState)(t),o=Object(s.a)(a,2),c=o[0],r=o[1];return l.a.createElement(V.a,{onClick:function(){r(!c)}})}},{icon:"check square outline",tool:"checkbox",component:S},{icon:"text cursor",tool:"text",component:function(e){var t=e.initValue,a=Object(n.useState)(t),o=Object(s.a)(a,2),c=o[0],r=o[1];return l.a.createElement(f.a,{type:"text",onChange:function(e,t){var a=Object(k.a)({},c);a.value=e.value,r(a)}})}},{icon:"keyboard outline",tool:"digit input",component:function(e){var t={increment:e.increment,value:e.initValue},a=Object(n.useState)(t),o=Object(s.a)(a,2),c=o[0],r=o[1];return l.a.createElement(f.a,{type:"number",onChange:function(e,t){var a=Object(k.a)({},c);a.value=e.value,r(a)}})}},{icon:"align justify",tool:"list"},{icon:"clone outline",tool:"panel"}],z=[{icon:"clock outline",tool:"time",component:C},{icon:"ellipsis vertical",tool:"radio-group"},{icon:"tasks",tool:"checkbox-list"},{icon:"font",tool:"text-area",component:function(e){var t=e.initValue,a=Object(n.useState)(t),o=Object(s.a)(a,2),c=o[0],r=o[1];return l.a.createElement(b.a,null,l.a.createElement(h.a,{onChange:function(e,t){var a=Object(k.a)({},c);a.value=e.value,r(a)}}))}},{icon:"sliders horizontal",tool:"slider"},{icon:"dropdown",tool:"dropdown"},{icon:"square outline",tool:"button",component:T}],R=function(e){var t=function(t,a){var n;console.log("Clicked "+a.icon),n=a.component,e.callbackTool(n)};return l.a.createElement(E.a,{secondary:!0,padded:!0},l.a.createElement(p.a,{as:"h5"},"Tools"),l.a.createElement(m.a,{celled:!0,columns:2},l.a.createElement(m.a.Row,null,l.a.createElement(m.a.Column,null,l.a.createElement(O.a,null,I.map((function(e,a){return l.a.createElement(O.a.Item,{key:a},l.a.createElement(y.a,{content:e.tool,trigger:l.a.createElement(g.a,{component:e.component,icon:e.icon,key:a,onClick:t})}))})))),l.a.createElement(m.a.Column,null,l.a.createElement(O.a,null,z.map((function(e,a){return l.a.createElement(O.a.Item,{key:a},l.a.createElement(y.a,{content:e.tool,trigger:l.a.createElement(g.a,{component:e.component,icon:e.icon,key:a,onClick:t})}))})))))))},A={width:"120vmin",height:"150vmin"},B={width:"35vmin"};function D(e){return void 0===e||null===e}var q=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={canvasTools:[]},e.getSelectedTool=function(t){if(!D(t)){var a=Array.from(e.state.canvasTools);a.push(t),e.setState({canvasTools:a})}},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){console.clear()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(m.a,{columns:2,padded:!0},l.a.createElement(m.a.Row,null,l.a.createElement(m.a.Column,{style:B},l.a.createElement(m.a.Row,{stretched:!0},l.a.createElement(R,{callbackTool:this.getSelectedTool})),l.a.createElement("br",null),l.a.createElement(m.a.Row,{stretched:!0},l.a.createElement(j,null))),l.a.createElement(m.a.Column,{stretched:!0,style:A},l.a.createElement(v,{canvasTools:this.state.canvasTools})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(o.render)(l.a.createElement(l.a.StrictMode,null,l.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[205,1,2]]]);
//# sourceMappingURL=main.a490d0c0.chunk.js.map