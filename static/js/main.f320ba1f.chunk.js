(this["webpackJsonpflex-forms"]=this["webpackJsonpflex-forms"]||[]).push([[0],{224:function(e,t,a){e.exports=a(383)},229:function(e,t,a){},231:function(e,t,a){},383:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(47),r=a.n(o),c=(a(229),a(230),a(72)),i=a(73),s=a(79),u=a(77),m=a(403),p=a(404),d=a(402),b=a(393),f=a(39),v=a(399),h=a(405),g=(a(231),a(44)),E=a.n(g),y=a(74),x=a(213),k=a(15),O=a(19),j=Object(n.createContext)(),C={selectedTool:"",array:[{id:"test",label:"test_label",tooltip:"test_tooltip",helpbox:"test_helpbox",conditions:[{state:{disable:!0,value:!1,hide:!1},id:"test2",operator:"equals",to:"false"},{state:{disable:!1,value:!1,hide:!0},id:"test3",operator:"equals",to:"true"}]}]};function D(e){var t=Object(n.useState)(C),a=Object(k.a)(t,2),o=a[0],r=a[1];return l.a.createElement(j.Provider,{value:[o,r]},e.children)}function w(e){return void 0===e||null===e}function T(e){var t=document.createElement("canvas").getContext("2d");t.font="14px Lato";var a=t.measureText(e).width;return Math.ceil(a+7.93+5)}var S=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).updateStorePosition=function(){var e=Object(k.a)(n.context,2),t=e[0],a=e[1],l=t;for(var o in l.array)if(l.array[o].id===n.props.targetId){l.array[o].pos=n.state.pos,a(l);break}},n.onMouseDown=function(e){if(0===e.button){var t=n.myRef.current.offsetLeft,a=n.myRef.current.offsetTop;n.setState({dragging:!0,rel:{x:e.pageX-t,y:e.pageY-a}})}},n.onMouseUp=function(e){n.setState({dragging:!1}),e.stopPropagation(),e.preventDefault()},n.onMouseMove=function(e){n.state.dragging&&(n.setState({pos:{x:e.pageX-n.state.rel.x,y:e.pageY-n.state.rel.y}}),e.stopPropagation(),e.preventDefault())},n.myRef=l.a.createRef(),n.state={pos:n.props.initialPos,dragging:!1,rel:null},n}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){this.state.dragging&&!t.dragging?(document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mouseup",this.onMouseUp),this.updateStorePosition()):!this.state.dragging&&t.dragging&&(document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mouseup",this.onMouseUp),this.updateStorePosition())}},{key:"render",value:function(){return l.a.createElement("span",{ref:this.myRef,onMouseDown:this.onMouseDown,style:{position:"absolute",left:this.state.pos.x+"px",top:this.state.pos.y+"px"}},this.props.children)}}]),a}(n.Component);S.contextType=j;var I=S,F={id:"",label:"",tooltip:"",helpbox:"",conditions:[]},R=0,L=function(e,t,a){var n=JSON.parse(JSON.stringify(t));n.selectedTool=e,a(n)},P=function(e,t){for(var a in t.array)if(!w(t.array[a].id)&&e===t.array[a].id)return t.array[a];return null},z=function(e,t,a){var n=Object(O.a)({},t);if(!w(e)){var l=Object.keys(e);for(var o in l)"id"!==l[o]&&"conditions"!==l[o]&&(n[l[o]]=e[l[o]]);a(n)}},M={selectedTool:"",array:[{id:"test",label:"test_label",tooltip:"test_tooltip",helpbox:"test_helpbox",conditions:[{state:{disable:!0,value:!1,hide:!1},id:"test2",operator:"equals",to:"false"},{state:{disable:!1,value:!1,hide:!0},id:"test3",operator:"equals",to:"true"}]}]},N=function(e){var t=Object(n.useState)([]),a=Object(k.a)(t,2),o=a[0],r=a[1],c=Object(n.useContext)(j),i=Object(k.a)(c,2),s=i[0],u=i[1];Object(n.useEffect)((function(){d()}),[e.canvasTool]);var d=function(){if(!w(e.canvasTool)){var t=Object(x.a)(o),a="Tool"+ ++R,n={id:a,key:R,tool:e.canvasTool.tool.name,onToolClick:L,getComponentPropsById:P,setComponentState:z};!function(e){var t=Object(O.a)({},F);t.id=e.id,t.tool=e.tool;var a=Object(O.a)({},s);a.array.push(t),u(a)}(n);var c=l.a.createElement(e.canvasTool.tool,n,null);t.push(l.a.createElement(I,{initialPos:{x:.38*Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.documentElement.clientWidth),y:.3*Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.documentElement.clientHeight)},key:R,targetId:a},c)),r(t)}};Object(n.useEffect)((function(){b()}),[e.clear]);var b=function(){e.clear&&(r([]),f(!1),e.callbackCleared(!0),R=0)},f=function(e,t){if(e){var a=JSON.parse(JSON.stringify(s));a.array=a.array.filter((function(e){return e.id!==t})),u(a)}else u(M)};Object(n.useEffect)((function(){v()}),[e.toolToDelete]);var v=function(){w(e.toolToDelete)||(r(o.filter((function(t){return t.props.children.props.id!==e.toolToDelete}))),f(!0,e.toolToDelete),e.callbackDeleted(!0))};Object(n.useEffect)((function(){(function(){var e=Object(y.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[e.publish]);var h=function(){var t=Object(y.a)(E.a.mark((function t(){var a,n,l,o;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!w(e.publish)&&!1!==e.publish){t.next=2;break}return t.abrupt("return");case 2:return(a=Object(O.a)({},s)).array=a.array.filter((function(e){return"test"!==e.id})),delete a.selectedTool,n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)},t.next=8,fetch("/api/publishForm",n);case 8:return l=t.sent,t.next=11,l.json();case 11:o=t.sent,console.log(o);case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return l.a.createElement(m.a,{padded:!0},l.a.createElement(p.a,{as:"h2"},"Canvas"),l.a.createElement("div",{id:"current-canvas"},o))},V=a(394),W=a(397),q=a(396),B=a(385),_={id:"",label:"",tooltip:"",helpbox:"",conditions:["",""]},J=function(e){var t=Object(n.useContext)(j),a=Object(k.a)(t,2),o=a[0],r=a[1],c=Object(n.useState)(_),i=Object(k.a)(c,2),s=i[0],u=i[1];Object(n.useEffect)((function(){d()}),[o]);var d=function(){for(var e in o.array)if(!w(o.array[e].id)&&o.array[e].id===o.selectedTool){u(o.array[e]);break}},f=function(e,t){var a=Object(O.a)({},s);a[e]=t,u(a),function(e,t){if(!w(s.id)){var a=JSON.parse(JSON.stringify(o));for(var n in a.array)if(!w(a.array[n].id)&&a.array[n].id===s.id){a.array[n][e]=t,r(a);break}}}(e,t)},v={label:function(e,t){f("label",t.value)},tooltip:function(e,t){f("tooltip",t.value)},helpbox:function(e,t){f("helpbox",t.value)},conditions:function(){}};return l.a.createElement(m.a,{secondary:!0,padded:!0},l.a.createElement(b.a,null,l.a.createElement(p.a,{as:"h5"},"Items Panel"),l.a.createElement("p",null,"ID: ",s.id),l.a.createElement("label",null,"Label"),l.a.createElement(V.a,{fluid:!0,type:"text",size:"small",value:s.label,onChange:v.label}),l.a.createElement("label",null,"Tooltip"),l.a.createElement(V.a,{fluid:!0,type:"text",size:"small",value:s.tooltip,onChange:v.tooltip}),l.a.createElement("label",null,"Help Box"),l.a.createElement(W.a,null," ",l.a.createElement(q.a,{value:s.helpbox,onChange:v.helpbox})," "),l.a.createElement("label",null,"Conditions"),l.a.createElement(m.a,null,l.a.createElement("p",null,l.a.createElement("i",null,"Example: Enable if ID1 == true")),JSON.stringify(s.conditions),l.a.createElement("p",null,l.a.createElement("i",null,"Not yet implemented"))),l.a.createElement(B.a,{onClick:function(){e.callbackToolToDelete(s.id)},negative:!0,size:"tiny"},"Delete Tool")))},A=a(400),H=a(398),U=function(e){var t={label:"",helpbox:"",value:e.initValue?e.initValue:""},a=Object(n.useState)(t),o=Object(k.a)(a,2),r=o[0],c=o[1],i=Object(n.useContext)(j),s=Object(k.a)(i,2),u=s[0],m=s[1];Object(n.useEffect)((function(){p()}),[u]);var p=function(){var t=e.getComponentPropsById(e.id,u);e.setComponentState(t,r,c)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(H.a,{content:r.tooltip,mouseEnterDelay:500,mouseLeaveDelay:0,on:"hover",trigger:l.a.createElement("label",{style:{padding:"1vmin"}},r.label)}),l.a.createElement(V.a,{style:{maxWidth:"160px"},type:"datetime-local",onChange:function(e,t){var a=Object(O.a)({},r);a.value=t.value,c(a)},onClick:function(){e.onToolClick(e.id,u,m)},value:r.value}),""!==r.helpbox?l.a.createElement(H.a,{content:r.helpbox,mouseEnterDelay:500,mouseLeaveDelay:0,on:"click",trigger:l.a.createElement(f.a,{name:"help circle",size:"small"})}):null)},X=function(e){var t={label:"",helpbox:"",value:e.initValue?e.initValue:""},a=Object(n.useState)(t),o=Object(k.a)(a,2),r=o[0],c=o[1],i=Object(n.useContext)(j),s=Object(k.a)(i,2),u=s[0],m=s[1];Object(n.useEffect)((function(){p()}),[u]);var p=function(){var t=e.getComponentPropsById(e.id,u);e.setComponentState(t,r,c)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(H.a,{content:r.tooltip,mouseEnterDelay:500,mouseLeaveDelay:0,on:"hover",trigger:l.a.createElement("label",{style:{padding:"1vmin"}},r.label)}),l.a.createElement(V.a,{style:{maxWidth:"100px"},type:"time",onClick:function(){e.onToolClick(e.id,u,m)},onChange:function(e,t){var a=Object(O.a)({},r);a.value=t.value,c(a)},value:r.value}),""!==r.helpbox?l.a.createElement(H.a,{content:r.helpbox,mouseEnterDelay:500,mouseLeaveDelay:0,on:"click",trigger:l.a.createElement(f.a,{name:"help circle",size:"small"})}):null)},Y=a(384),G=function(e){var t={label:"",helpbox:"",value:!!e.initValue&&e.initValue},a=Object(n.useState)(t),o=Object(k.a)(a,2),r=o[0],c=o[1],i=Object(n.useContext)(j),s=Object(k.a)(i,2),u=s[0],m=s[1];Object(n.useEffect)((function(){p()}),[u]);var p=function(){var t=e.getComponentPropsById(e.id,u);e.setComponentState(t,r,c)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(H.a,{content:r.tooltip,mouseEnterDelay:500,mouseLeaveDelay:0,on:"hover",trigger:l.a.createElement("label",{style:{padding:"1vmin"}},r.label)}),l.a.createElement(Y.a,{onClick:function(){var t=Object(O.a)({},r);t.value=!t.value,c(t),e.onToolClick(e.id,u,m)},checked:r.value}),""!==r.helpbox?l.a.createElement(H.a,{content:r.helpbox,mouseEnterDelay:500,mouseLeaveDelay:0,on:"click",trigger:l.a.createElement(f.a,{name:"help circle",size:"small"})}):null)},$=a(395),K=function(e){var t={label:"",helpbox:"",value:!!e.initValue&&e.initValue},a=Object(n.useState)(t),o=Object(k.a)(a,2),r=o[0],c=o[1],i=Object(n.useContext)(j),s=Object(k.a)(i,2),u=s[0],m=s[1];Object(n.useEffect)((function(){p()}),[u]);var p=function(){var t=e.getComponentPropsById(e.id,u);e.setComponentState(t,r,c)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(H.a,{content:r.tooltip,mouseEnterDelay:500,mouseLeaveDelay:0,on:"hover",trigger:l.a.createElement("label",{style:{padding:"1vmin"}},r.label)}),l.a.createElement($.a,{onClick:function(){var t=Object(O.a)({},r);t.value=!t.value,c(t),e.onToolClick(e.id,u,m)},checked:r.value}),""!==r.helpbox?l.a.createElement(H.a,{content:r.helpbox,mouseEnterDelay:500,mouseLeaveDelay:0,on:"click",trigger:l.a.createElement(f.a,{name:"help circle",size:"small"})}):null)},Q=function(e){var t={label:"",helpbox:"",value:e.initValue?e.initValue:""},a=Object(n.useState)(t),o=Object(k.a)(a,2),r=o[0],c=o[1],i=Object(n.useContext)(j),s=Object(k.a)(i,2),u=s[0],m=s[1];Object(n.useEffect)((function(){p()}),[u]);var p=function(){var t=e.getComponentPropsById(e.id,u);e.setComponentState(t,r,c)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(H.a,{content:r.tooltip,mouseEnterDelay:500,mouseLeaveDelay:0,on:"hover",trigger:l.a.createElement("label",{style:{padding:"1vmin"}},r.label)}),l.a.createElement(V.a,{type:"text",onClick:function(){e.onToolClick(e.id,u,m)},onChange:function(e,t){var a=Object(O.a)({},r);a.value=t.value,c(a)},value:r.value}),""!==r.helpbox?l.a.createElement(H.a,{content:r.helpbox,mouseEnterDelay:500,mouseLeaveDelay:0,on:"click",trigger:l.a.createElement(f.a,{name:"help circle",size:"small"})}):null)},Z=function(e){var t={label:"",helpbox:"",value:e.initValue?e.initValue:""},a=Object(n.useState)(t),o=Object(k.a)(a,2),r=o[0],c=o[1],i=Object(n.useContext)(j),s=Object(k.a)(i,2),u=s[0],m=s[1];Object(n.useEffect)((function(){p()}),[u]);var p=function(){var t=e.getComponentPropsById(e.id,u);e.setComponentState(t,r,c)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(H.a,{content:r.tooltip,mouseEnterDelay:500,mouseLeaveDelay:0,on:"hover",trigger:l.a.createElement("label",{style:{padding:"1vmin"}},r.label)}),l.a.createElement(W.a,null,l.a.createElement(q.a,{style:{maxWidth:"200px"},onChange:function(e,t){var a=Object(O.a)({},r);a.value=t.value,c(a)},onClick:function(){e.onToolClick(e.id,u,m)},value:r.value})),""!==r.helpbox?l.a.createElement(H.a,{content:r.helpbox,mouseEnterDelay:500,mouseLeaveDelay:0,on:"click",trigger:l.a.createElement(f.a,{name:"help circle",size:"small"})}):null)},ee=function(e){var t={label:"",helpbox:"",value:e.initValue?e.initValue:""},a=Object(n.useState)(t),o=Object(k.a)(a,2),r=o[0],c=o[1],i=Object(n.useContext)(j),s=Object(k.a)(i,2),u=s[0],m=s[1];Object(n.useEffect)((function(){p()}),[u]);var p=function(){var t=e.getComponentPropsById(e.id,u);e.setComponentState(t,r,c)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(H.a,{content:r.tooltip,mouseEnterDelay:500,mouseLeaveDelay:0,on:"hover",trigger:l.a.createElement("label",{style:{padding:"1vmin"}},r.label)}),l.a.createElement(V.a,{style:{maxWidth:"100px"},type:"number",onChange:function(e,t){var a=Object(O.a)({},r);a.value=t.value,c(a)},onClick:function(){e.onToolClick(e.id,u,m)},value:r.value}),""!==r.helpbox?l.a.createElement(H.a,{content:r.helpbox,mouseEnterDelay:500,mouseLeaveDelay:0,on:"click",trigger:l.a.createElement(f.a,{name:"help circle",size:"small"})}):null)},te=a(78),ae={label:"label"},ne=[{icon:"calendar alternate outline",tool:"date-time",component:U},{icon:"dot circle outline",tool:"radio",component:K},{icon:"check square outline",tool:"checkbox",component:G},{icon:"text cursor",tool:"text",component:Q},{icon:"keyboard outline",tool:"digit input",component:ee},{icon:"align justify",tool:"list"},{icon:"clone outline",tool:"panel"}],le=[{icon:"clock outline",tool:"time",component:X},{icon:"ellipsis vertical",tool:"radio-group"},{icon:"tasks",tool:"checkbox-list"},{icon:"font",tool:"text-area",component:Z},{icon:"heading",tool:"static-label",component:function(e){var t=Object(n.useState)(ae),a=Object(k.a)(t,2),o=a[0],r=a[1],c=Object(n.useContext)(j),i=Object(k.a)(c,2),s=i[0],u=i[1];Object(n.useEffect)((function(){m()}),[s]);var m=function(){var t=e.getComponentPropsById(e.id,s);e.setComponentState(t,o,r)};return l.a.createElement(te.a,{onClick:function(){e.onToolClick(e.id,s,u)}},o.label)}},{icon:"dropdown",tool:"dropdown"},{icon:"square outline",tool:"layout"}],oe=["align justify","clone outline","tasks","dropdown","ellipsis vertical","square outline"],re=function(e){var t=function(t,a){var n;oe.includes(a.icon)&&alert("Feature Coming Soon"),n=a.component,e.callbackTool(n)};return l.a.createElement(m.a,{secondary:!0,padded:!0},l.a.createElement(p.a,{as:"h5"},"Tools"),l.a.createElement(h.a,{celled:!0,columns:2},l.a.createElement(h.a.Row,null,l.a.createElement(h.a.Column,null,l.a.createElement(A.a,null,ne.map((function(e,a){return l.a.createElement(A.a.Item,{key:a},l.a.createElement(H.a,{content:e.tool,trigger:l.a.createElement(B.a,{component:e.component,icon:e.icon,key:a,onClick:t})}))})))),l.a.createElement(h.a.Column,null,l.a.createElement(A.a,null,le.map((function(e,a){return l.a.createElement(A.a.Item,{key:a},l.a.createElement(H.a,{content:e.tool,trigger:l.a.createElement(B.a,{component:e.component,icon:e.icon,key:a,onClick:t})}))})))))))},ce=a(401),ie=function(){return l.a.createElement(h.a,{textAlign:"center",style:{height:"100vh"},verticalAlign:"middle"},l.a.createElement(h.a.Column,{style:{maxWidth:450}},l.a.createElement(p.a,{as:"h2",color:"teal",textAlign:"center"},"Log-in to your account"),l.a.createElement(W.a,{size:"large"},l.a.createElement(m.a,{stacked:!0},l.a.createElement(W.a.Input,{fluid:!0,icon:"user",iconPosition:"left",placeholder:"E-mail address"}),l.a.createElement(W.a.Input,{fluid:!0,icon:"lock",iconPosition:"left",placeholder:"Password",type:"password"}),l.a.createElement(B.a,{color:"teal",fluid:!0,size:"large"},"Login"))),l.a.createElement(ce.a,null,"New to us? ",l.a.createElement("a",{href:"/sample-form"},"Sign Up"))))},se=a(133),ue=a(18);function me(e){return console.log(e),{element:function(e){switch(e){case"DateTime":case"Time":case"DigitalInput":case"Text":return V.a;case"Checkbox2":return Y.a;case"Radio":return $.a;case"Textarea":return q.a;case"Label":return te.a;default:return"p"}}(e.tool),props:function(e){var t=e.tool,a={};"Time"===t?(a.type="time",a.style={maxWidth:"100px"}):"DateTime"===t?(a.type="datetime-local",a.style={maxWidth:"160px"}):"DigitalInput"===t?(a.type="number",a.style={maxWidth:"100px"}):"Text"===t?a.type="text":"Textarea"===t?a.style={maxWidth:"200px"}:"Radio"===t||"Checkbox2"===t?a.label=e.label:"Label"===t&&(a.children=[l.a.createElement("p",null,e.label)]);"style"in a||(a.style={});return a.style.position="absolute",a.style.left=e.pos.x+"px",a.style.top=e.pos.y+"px",a}(e)}}var pe=function(e){var t=e.match,a=Object(n.useState)(null),o=Object(k.a)(a,2),r=o[0],c=o[1],i=t.params.id;Object(n.useEffect)((function(){s()}),[i]);var s=function(){var e=Object(y.a)(E.a.mark((function e(){var a,n,l,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/forms/".concat(t.params.id));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,void 0!==(l=n.data.settings)&&(console.log(l),o=u(l.array),c(o),console.log("Processed form"));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(e){var t=[];for(var a in e){var n=me(e[a]);n.props.key=a;var o=l.a.createElement(n.element,n.props,n.props.children);if(e[a].label&&e[a].tooltip&&"Radio"!==e[a].tool&&"Checkbox2"!==e[a].tool&&"Label"!==e[a].tool){var r=T(e[a].label),c=l.a.createElement(H.a,{key:a+"_condiment",content:e[a].tooltip,mouseEnterDelay:500,mouseLeaveDelay:0,on:"hover",trigger:l.a.createElement("label",{style:{padding:"1vmin",position:"absolute",left:e[a].pos.x-r+"px",top:e[a].pos.y+"px"}},e[a].label)});t.push(c)}else if(e[a].label&&"Radio"!==e[a].tool&&"Checkbox2"!==e[a].tool&&"Label"!==e[a].tool){var i=T(e[a].label);t.push(l.a.createElement("label",{key:a+"_label",style:{padding:"1vmin",position:"absolute",left:e[a].pos.x-i+"px",top:e[a].pos.y+"px"}},e[a].label))}if("Radio"===e[a].tool||"Checkbox2"===e[a].tool||"Label"===e[a].tool)if(e[a].tooltip){var s=l.a.createElement(H.a,{key:a+"_condiment",content:e[a].tooltip,mouseEnterDelay:500,mouseLeaveDelay:0,on:"hover",trigger:o});t.push(s)}else t.push(o);else t.push(o)}return t};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"menu-header"},l.a.createElement(d.a,{fixed:"top",color:"green",inverted:!0},l.a.createElement(b.a,null,l.a.createElement(d.a.Item,{as:"a",header:!0,color:"green"},"FlexForms"),l.a.createElement(d.a.Item,null,"Form Viewer"),l.a.createElement(d.a.Item,null,"Form ID: ",i),l.a.createElement(d.a.Item,null,l.a.createElement(B.a,{fluid:!0},"Submit"))))),l.a.createElement("div",{className:"App"},l.a.createElement(b.a,null,r)))},de={flexGrow:1,height:"100%"},be={width:"200px"};var fe=function(){return l.a.createElement(m.a,{compact:!0,secondary:!0,color:"green"},l.a.createElement(p.a,{as:"h1",color:"green"},"FlexForms"),l.a.createElement(p.a,{color:"green"},"Using a Mobile Device"),l.a.createElement("p",null,"Hi there,"),l.a.createElement("p",null,"I see you are using a mobile device"),l.a.createElement("p",null,"This application is not suitable for mobile devices. Please use a computer"),l.a.createElement("p",null,"Thanks!"))},ve=function(){return l.a.createElement(m.a,{secondary:!0,color:"green"},l.a.createElement(p.a,{as:"h1",color:"green"},"Sorry Page Not Found!"),l.a.createElement("p",null,"It looks like that page does not exist"))},he=function(e){var t=function(){alert("Feature Coming Soon")};return l.a.createElement(d.a,{fixed:"top",color:"green",inverted:!0},l.a.createElement(b.a,null,l.a.createElement(d.a.Item,{as:"a",header:!0,color:"green"},"FlexForms"),l.a.createElement(d.a.Item,{as:"a",onClick:function(){window.location.reload(!1)}},l.a.createElement(f.a,{name:"home"}),"Home"),l.a.createElement(v.a,{item:!0,simple:!0,text:"Templates"},l.a.createElement(v.a.Menu,null,l.a.createElement(v.a.Item,null,l.a.createElement(se.b,{to:"/FlexForms/sample-form",style:{color:"black"}},"Sample Form")),l.a.createElement(v.a.Item,{onClick:t},"Load Templates"))),l.a.createElement(v.a,{item:!0,simple:!0,text:"Options"},l.a.createElement(v.a.Menu,null,l.a.createElement(v.a.Item,{onClick:t},"Save"),l.a.createElement(v.a.Item,{onClick:function(){e.callbackClear(!0)}},"Clear Canvas"),l.a.createElement(v.a.Item,{onClick:function(){e.callbackPublishForm(!0)}},"Publish Form"))),l.a.createElement(d.a.Item,null,"Version 1.0 "),l.a.createElement(d.a.Item,null,"Server Status: ",w(e.page)?"Currently Unvailable":e.page)))},ge=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={canvasTool:null,clear:!1,toolToDelete:null,data:null,publish:!1},e.getSelectedTool=function(t){w(t)?console.log("ERROR! -> Tool not recognised"):e.setState({canvasTool:{tool:t}})},e.callbackPublishForm=function(t){w(t)?console.log("ERROR! -> Failed to publish"):t&&(console.log("Publishing"),e.setState({publish:!0}))},e.callbackClear=function(t){w(t)?console.log("ERROR! -> Did not clear canvas"):t&&(console.log("Clearing canvas"),e.setState({clear:!0}))},e.callbackCleared=function(t){w(t)?console.log("ERROR! -> Clear failed"):t&&(e.setState({clear:!1}),console.log("Canvas cleared"))},e.callbackToolToDelete=function(t){w(t)?console.log("ERROR! -> Did not delete tool"):(console.log("Deleting "+t),e.setState({toolToDelete:t}))},e.callbackDeleted=function(t){w(t)?console.log("ERROR! -> Delete failed"):(e.setState({toolToDelete:null}),console.log("Deleted"))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){console.clear()}},{key:"render",value:function(){return function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw(n|u)|c55\/|capi|ccwa|cdm|cell|chtm|cldc|cmd|co(mp|nd)|craw|da(it|ll|ng)|dbte|dcs|devi|dica|dmob|do(c|p)o|ds(12|d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(|_)|g1 u|g560|gene|gf5|gmo|go(\.w|od)|gr(ad|un)|haie|hcit|hd(m|p|t)|hei|hi(pt|ta)|hp( i|ip)|hsc|ht(c(| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i(20|go|ma)|i230|iac( ||\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|[a-w])|libw|lynx|m1w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|mcr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|([1-8]|c))|phil|pire|pl(ay|uc)|pn2|po(ck|rt|se)|prox|psio|ptg|qaa|qc(07|12|21|32|60|[2-7]|i)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h|oo|p)|sdk\/|se(c(|0|1)|47|mc|nd|ri)|sgh|shar|sie(|m)|sk0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h|v|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl|tdg|tel(i|m)|tim|tmo|to(pl|sh)|ts(70|m|m3|m5)|tx9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas|your|zeto|zte/i.test(e.substr(0,4)))&&(t=!0),t}()?l.a.createElement(fe,null):l.a.createElement(D,null,l.a.createElement("div",null,l.a.createElement("div",{className:"menu-header"},l.a.createElement(he,{callbackClear:this.callbackClear,page:this.state.data,callbackPublishForm:this.callbackPublishForm})),l.a.createElement("div",{className:"App"},l.a.createElement(h.a,{columns:2,padded:!0},l.a.createElement(h.a.Row,null,l.a.createElement(h.a.Column,{style:be},l.a.createElement(h.a.Row,{stretched:!0},l.a.createElement(re,{callbackTool:this.getSelectedTool})),l.a.createElement("br",null),l.a.createElement(h.a.Row,{stretched:!0},l.a.createElement(J,{callbackToolToDelete:this.callbackToolToDelete}))),l.a.createElement(h.a.Column,{stretched:!0,style:de},l.a.createElement(N,{canvasTool:this.state.canvasTool,clear:this.state.clear,callbackCleared:this.callbackCleared,toolToDelete:this.state.toolToDelete,callbackDeleted:this.callbackDeleted,publish:this.state.publish})))))))}}]),a}(n.Component),Ee=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(se.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(ue.c,null,l.a.createElement(ue.a,{path:"/FlexForms/",component:ge,exact:!0}),l.a.createElement(ue.a,{path:"/FlexForms/sample-form",component:ie,exact:!0}),l.a.createElement(ue.a,{path:"/FlexForms/api/forms/:id",component:pe,exact:!0}),l.a.createElement(ue.a,{component:ve}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[224,1,2]]]);
//# sourceMappingURL=main.f320ba1f.chunk.js.map