(this.webpackJsonpsimple_stage_manager=this.webpackJsonpsimple_stage_manager||[]).push([[0],{126:function(t,e,n){},127:function(t,e,n){},140:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=140},152:function(t,e,n){},154:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=n(56),c=n.n(r),s=(n(126),n.p,n(127),n(116)),o=n(15),u=n(190),l=n(7),h=n(8),j=n(10),b=n(9),p=n(14),d=n(23),g=n(12),O=n(173);function f(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))}var v=Object(O.a)({colors:{gray:{200:"#111"}},radii:{none:"0",sm:"0",base:"0",md:"0",lg:"0",xl:"0","2xl":"0","3xl":"0",full:"9999px"},components:{Button:{variants:{outline:{borderLeft:0,borderRight:0,borderBottom:0,backgroundColor:"#FFF7"}}}}});var x={createPanel:function(t){var e=f(),n={type:"youtube",title:"New Youtube Effect",url:"",hidden:!1,key:e,deleted:!1,volume:1,timestamp:Date.now()};t.get("ui").get(e).put(n,console.log)},activateEffect:function(t,e){var n=t.get("ui").get(e.key);t.get("activefx").get("activefx"+e.key).put({type:"youtube",stopped:!1,startTime:Date.now(),key:e.key,uiRef:n,deleted:!1,title:e.title,url:e.url,hidden:e.hidden,volume:e.volume,timestamp:Date.now()})},stopEffect:function(t){t.get("stopped").put(!0)}},y=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).gunBase=t.gun,a.state={gunData:{}},a._gunListener=null,a._unmounted=!1,a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.gunBase.on((function(e,n,a,i){t._gunListener=i,t._unmounted?t._gunListener.off():t.setState(Object(p.a)(Object(p.a)({},t.state),{},{gunData:e}))}))}},{key:"componentWillUnmount",value:function(){var t;this._unmounted=!0,null===(t=this._gunListener)||void 0===t||t.off()}}]),n}(i.a.Component),m=n(184),k=n(176),w=n(195),D=n(180),C=n(191),B=n(193),M=n(1),R=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state.test=!1,a.inputRef=i.a.createRef(),a.state.inputCache="",a}return Object(h.a)(n,[{key:"currentlyFocused",value:function(){return document.activeElement===this.inputRef.current}},{key:"componentDidUpdate",value:function(){this.currentlyFocused()&&(this.inputRef.current.selectionStart=this.inputRef.current.selectionEnd=this.cursor)}},{key:"render",value:function(){var t=this;return null==this.state.gunData?null:Object(M.jsx)(B.a,Object(p.a)(Object(p.a)({textOverflow:"ellipsis",ref:this.inputRef,onFocus:function(){return t.setState({test:!t.state.test,inputCache:t.state.gunData[t.props.gunProperty]})},onChange:function(e){t.cursor=e.target.selectionStart,t.state.inputCache=e.target.value,t.props.gun.get(t.props.gunProperty).put(e.target.value)}},this.props),{},{value:this.currentlyFocused()?this.state.inputCache:this.state.gunData[this.props.gunProperty]}))}}]),n}(y),F=n(177),S=n(178);var P=function(t){return Object(M.jsxs)(k.a,Object(p.a)(Object(p.a)({position:"relative"},t),{},{shadow:"md",borderWidth:"1px",height:"100%",children:[null==t.onClose?null:Object(M.jsx)(F.a,{position:"absolute",top:"0",right:"0",onClick:t.onClose}),Object(M.jsx)(S.a,{p:2,as:"h5",size:"xs",children:t.heading}),t.children]}))},E=n(181),I=n(192),U=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state.test=!1,a.inputRef=i.a.createRef(),a}return Object(h.a)(n,[{key:"render",value:function(){var t=this;return null==this.state.gunData?null:Object(M.jsxs)(w.a,{w:"100%",px:2,spacing:.5,children:[Object(M.jsx)(D.a,{w:"100%",children:this.props.title}),Object(M.jsx)(k.a,{align:"right",children:Object(M.jsx)(E.a,{children:Object(M.jsx)(I.a,{size:"lg",ref:this.inputRef,isChecked:this.state.gunData[this.props.gunProperty],onChange:function(e){t.props.gun.get(t.props.gunProperty).put(t.inputRef.current.checked)}})})})]})}}]),n}(y),z=n(188),L=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state.test=!1,a.sliderRef=i.a.createRef(),a.throttledGunUpdate=Object(d.throttle)((function(t){a.props.gun.get(a.props.gunProperty).put(parseFloat(t))}),50),a}return Object(h.a)(n,[{key:"render",value:function(){var t=this;return null==this.state.gunData?null:Object(M.jsxs)(w.b,{px:2,w:"100%",children:[Object(M.jsx)(D.a,{w:"100%",children:this.props.title}),Object(M.jsxs)(z.a,{ref:this.sliderRef,min:0,max:1,step:.01,value:this.state.gunData[this.props.gunProperty],focusThumbOnChange:!1,onChange:function(e){t.sliderRef.current.value=e,t.throttledGunUpdate(e)},children:[Object(M.jsx)(z.d,{bg:"gray.500",children:Object(M.jsx)(z.b,{})}),Object(M.jsx)(z.c,{bg:"gray.400"})]})]})}}]),n}(y),_=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).rootGunBase=t.gunBase,a.play=a.play.bind(Object(g.a)(a)),a.deleteMe=a.deleteMe.bind(Object(g.a)(a)),a}return Object(h.a)(n,[{key:"play",value:function(){x.activateEffect(this.rootGunBase,this.state.gunData)}},{key:"deleteMe",value:function(){this.gunBase.put(null)}},{key:"render",value:function(){return this.state.gunData?Object(M.jsx)(m.b,{rowSpan:2,colSpan:1,children:Object(M.jsxs)(P,{onClose:this.deleteMe,bg:"blue.50",heading:"Youtube:",position:"relative",pb:"10",children:[Object(M.jsxs)(k.a,{px:3,pb:2,children:[Object(M.jsx)(R,{mb:3,size:"lg",fontSize:"1em",overflow:"wrap",placeholder:"Title",fontWeight:"bold",gun:this.props.gun,gunProperty:"title"}),Object(M.jsxs)(w.b,{spacing:3.5,align:"stretch",children:[Object(M.jsxs)(k.a,{children:[Object(M.jsx)(D.a,{size:"xs",children:"Youtube URL"}),Object(M.jsx)(R,{title:"url",size:"xs",gun:this.props.gun,gunProperty:"url"})]}),Object(M.jsx)(U,{title:"Hidden During Play",gun:this.props.gun,gunProperty:"hidden"}),Object(M.jsx)(L,{title:"Starting Volume",gun:this.props.gun,gunProperty:"volume"})]})]}),Object(M.jsx)(C.a,{position:"absolute",bottom:"0",variant:"outline",w:"100%",borderRadius:"0",onClick:this.play,children:"Play"})]})}):null}}]),n}(y),A=n(4),G=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t))._gunCache={},a.extraState={},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.gunBase.map().on((function(e,n,a,i){t._gunListener=i,t._gunCache=Object(p.a)(Object(p.a)({},t._gunCache),{},Object(A.a)({},n,e)),t.setState(Object(p.a)(Object(p.a)({},t.state),{},{gunData:t._gunCache}))}))}}]),n}(y);var W={createPanel:function(t){var e=f(),n={type:"overlay",title:"New Overlay Effect",url:"",hidden:!1,clickthrough:!1,key:e,deleted:!1,timestamp:Date.now()};t.get("ui").get(e).put(n,console.log)},activateEffect:function(t,e){var n=t.get("ui").get(e.key);t.get("activefx").get("activefx"+e.key).put({type:"overlay",key:e.key,uiRef:n,deleted:!1,title:e.title,url:e.url,clickthrough:e.clickthrough,hidden:e.hidden,timestamp:Date.now()})},stopEffect:function(t){t.get("deleted").put(!0)}},T=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).rootGunBase=t.gunBase,a.activate=a.activate.bind(Object(g.a)(a)),a.deleteMe=a.deleteMe.bind(Object(g.a)(a)),a}return Object(h.a)(n,[{key:"activate",value:function(){W.activateEffect(this.rootGunBase,this.state.gunData)}},{key:"deleteMe",value:function(){this.gunBase.put(null)}},{key:"render",value:function(){return this.state.gunData?Object(M.jsx)(m.b,{rowSpan:2,colSpan:1,children:Object(M.jsxs)(P,{onClose:this.deleteMe,bg:"red.50",heading:"URL Overlay:",position:"relative",pb:"10",children:[Object(M.jsxs)(k.a,{px:3,pb:2,children:[Object(M.jsx)(R,{mb:3,size:"lg",fontSize:"1em",overflow:"wrap",placeholder:"Title",fontWeight:"bold",gun:this.props.gun,gunProperty:"title"}),Object(M.jsxs)(w.b,{spacing:3.5,align:"stretch",children:[Object(M.jsxs)(k.a,{children:[Object(M.jsx)(D.a,{size:"xs",children:"Overlay URL"}),Object(M.jsx)(R,{title:"url",size:"xs",gun:this.props.gun,gunProperty:"url"})]}),Object(M.jsx)(U,{title:"Users can click through",gun:this.props.gun,gunProperty:"clickthrough"}),Object(M.jsx)(U,{title:"Hidden while activated",gun:this.props.gun,gunProperty:"hidden"})]})]}),Object(M.jsx)(C.a,{position:"absolute",bottom:"0",variant:"outline",w:"100%",borderRadius:"0",onClick:this.activate,children:"Activate"})]})}):null}}]),n}(y);var H={createPanel:function(t){var e=f(),n={type:"fade",title:"New Fade Effect",key:e,deleted:!1,timestamp:Date.now()};t.get("ui").get(e).put(n,console.log)},activateEffect:function(t,e){t.get("ui").get(e.key),t.get("activefx").get("activefx"+e.key).put({type:"fade",key:e.key,deleted:!1,title:e.title,timestamp:Date.now()})},stopEffect:function(t){t.get("deleted").put(!0)}},N=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).rootGunBase=t.gunBase,a.activate=a.activate.bind(Object(g.a)(a)),a.deleteMe=a.deleteMe.bind(Object(g.a)(a)),a}return Object(h.a)(n,[{key:"activate",value:function(){H.activateEffect(this.rootGunBase,this.state.gunData)}},{key:"deleteMe",value:function(){this.gunBase.put(null)}},{key:"render",value:function(){return this.state.gunData?Object(M.jsxs)(P,{onClose:this.deleteMe,bg:"green.50",heading:"Fade Out:",position:"relative",children:[Object(M.jsx)(k.a,{px:3,pb:10,children:Object(M.jsx)(R,{mb:3,size:"lg",fontSize:"1em",placeholder:"Title",fontWeight:"bold",gun:this.props.gun,gunProperty:"title"})}),Object(M.jsx)(C.a,{position:"absolute",bottom:"0",variant:"outline",w:"100%",borderRadius:"0",onClick:this.activate,children:"Activate"})]}):null}}]),n}(y);var Y={createPanel:function(t){var e=f(),n={type:"shake",title:"New Shake Effect",key:e,deleted:!1,duration:3,strength:1,timestamp:Date.now()};t.get("ui").get(e).put(n,console.log)},activateEffect:function(t,e){t.get("activefx").get("activefx"+e.key).put({type:"shake",startTime:Date.now(),key:e.key,deleted:!1,title:e.title,duration:e.duration,strength:e.strength,timestamp:Date.now()})},stopEffect:function(t){t.get("deleted").put(!0)}},V=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state.test=!1,a.inputRef=i.a.createRef(),a.state.inputCache="",a}return Object(h.a)(n,[{key:"currentlyFocused",value:function(){return document.activeElement===this.inputRef.current}},{key:"componentDidUpdate",value:function(){this.currentlyFocused()&&(this.inputRef.current.selectionStart=this.inputRef.current.selectionEnd=this.cursor)}},{key:"render",value:function(){var t=this;return null==this.state.gunData?null:Object(M.jsxs)(w.a,{w:"100%",px:2,spacing:.5,children:[Object(M.jsx)(D.a,{children:this.props.title}),Object(M.jsx)(B.a,{size:"xs",value:document.activeElement===this.inputRef.current?this.state.inputCache:this.state.gunData[this.props.gunProperty],step:.2,ref:this.inputRef,textAlign:"right",onFocus:function(){return t.setState({test:!t.state.test,inputCache:t.state.gunData[t.props.gunProperty]})},onChange:function(e){t.cursor=e.target.selectionStart,t.state.inputCache=e.target.value,isNaN(parseFloat(e.target.value))||t.props.gun.get(t.props.gunProperty).put(parseFloat(e.target.value))}})]})}}]),n}(y),J=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).rootGunBase=t.gunBase,a.activate=a.activate.bind(Object(g.a)(a)),a.deleteMe=a.deleteMe.bind(Object(g.a)(a)),a}return Object(h.a)(n,[{key:"activate",value:function(){Y.activateEffect(this.rootGunBase,this.state.gunData)}},{key:"deleteMe",value:function(){this.gunBase.put(null)}},{key:"render",value:function(){return this.state.gunData?Object(M.jsx)(m.b,{rowSpan:2,colSpan:1,children:Object(M.jsxs)(P,{onClose:this.deleteMe,bg:"orange.50",heading:"Shake:",position:"relative",pb:"10",children:[Object(M.jsxs)(k.a,{px:3,pb:2,children:[Object(M.jsx)(R,{mb:3,size:"lg",fontSize:"1em",placeholder:"Title",fontWeight:"bold",gun:this.props.gun,gunProperty:"title"}),Object(M.jsxs)(w.b,{spacing:5,align:"stretch",children:[Object(M.jsx)(V,{title:"duration",gun:this.props.gun,gunProperty:"duration"}),Object(M.jsx)(V,{title:"strength",gun:this.props.gun,gunProperty:"strength"})]})]}),Object(M.jsx)(C.a,{position:"absolute",bottom:"0",variant:"outline",w:"100%",borderRadius:"0",onClick:this.activate,children:"Activate"})]})}):null}}]),n}(y);var X={createPanel:function(t){var e=f(),n={type:"miro-hide",title:"New Miro Hide Controls Effect",key:e,deleted:!1,timestamp:Date.now()};t.get("ui").get(e).put(n,console.log)},activateEffect:function(t,e){t.get("activefx").get("activefx"+e.key).put({type:"miro-hide",startTime:Date.now(),key:e.key,deleted:!1,title:e.title,timestamp:Date.now()})},stopEffect:function(t){t.get("deleted").put(!0)}},q=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).rootGunBase=t.gunBase,a.activate=a.activate.bind(Object(g.a)(a)),a.deleteMe=a.deleteMe.bind(Object(g.a)(a)),a}return Object(h.a)(n,[{key:"activate",value:function(){X.activateEffect(this.rootGunBase,this.state.gunData)}},{key:"deleteMe",value:function(){this.gunBase.put(null)}},{key:"render",value:function(){return this.state.gunData?Object(M.jsxs)(P,{onClose:this.deleteMe,bg:"green.50",heading:"Hide Miro Controls:",position:"relative",children:[Object(M.jsx)(k.a,{px:3,pb:10,children:Object(M.jsx)(R,{mb:3,size:"lg",fontSize:"1em",placeholder:"Title",fontWeight:"bold",gun:this.props.gun,gunProperty:"title"})}),Object(M.jsx)(C.a,{position:"absolute",bottom:"0",variant:"outline",w:"100%",borderRadius:"0",onClick:this.activate,children:"Activate"})]}):null}}]),n}(y),K=n(187),Q=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).rootGunBase=t.gunBase,a}return Object(h.a)(n,[{key:"render",value:function(){var t=this;return Object(M.jsxs)(k.a,{bg:"none",h:"100vh",position:"relative",children:[Object(M.jsx)(S.a,{fontSize:"5em",color:"#FFF9",position:"absolute",bottom:"3",right:"6",textAlign:"right",children:"control panels"}),Object(M.jsx)(k.a,{w:"100%",h:"100%",p:5,overflow:"scroll",children:Object(M.jsxs)(m.a,{templateColumns:{base:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(3, 1fr)",xl:"repeat(4, 1fr)"},gap:4,children:[Object(M.jsx)(P,{p:4,color:"#FFFC",borderColor:"white",heading:"simple stage manager",bg:"#9F7AAFAA",children:Object(M.jsx)(k.a,{p:3,children:Object(M.jsx)(E.a,{children:Object(M.jsxs)(K.a,{children:[Object(M.jsx)(C.a,{variant:"unstyled",border:"1px",p:"0",children:Object(M.jsx)(K.b,{w:"100%",h:"100%",p:"4",children:"Create new panel"})}),Object(M.jsxs)(K.e,{color:"black",children:[Object(M.jsx)(K.d,{onClick:function(){return x.createPanel(t.rootGunBase)},children:"Youtube"}),Object(M.jsx)(K.d,{onClick:function(){return W.createPanel(t.rootGunBase)},children:"URL Overlay"}),Object(M.jsx)(K.c,{}),Object(M.jsx)(K.d,{onClick:function(){return H.createPanel(t.rootGunBase)},children:"Fade"}),Object(M.jsx)(K.d,{onClick:function(){return Y.createPanel(t.rootGunBase)},children:"Shake"}),Object(M.jsx)(K.d,{onClick:function(){return X.createPanel(t.rootGunBase)},children:"Hide Miro Controls"})]})]})})})}),Object(d.map)(Object(d.sortBy)(this.state.gunData,(function(t){return null===t||void 0===t?void 0:t.timestamp})),(function(e){if(null!==e&&!0!==e.deleted){var n=e.key,a={key:n,gun:t.gunBase.get(n),gunBase:t.rootGunBase};switch(e.type){case"youtube":return Object(M.jsx)(_,Object(p.a)({},a));case"overlay":return Object(M.jsx)(T,Object(p.a)({},a));case"fade":return Object(M.jsx)(N,Object(p.a)({},a));case"shake":return Object(M.jsx)(J,Object(p.a)({},a));case"miro-hide":return Object(M.jsx)(q,Object(p.a)({},a))}}}))]})})]})}}]),n}(G),Z=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).stop=a.stop.bind(Object(g.a)(a)),a}return Object(h.a)(n,[{key:"stop",value:function(){x.stopEffect(this.gunBase)}},{key:"render",value:function(){return this.state.gunData.stopped?null:Object(M.jsx)(m.b,{rowSpan:2,colSpan:1,children:Object(M.jsxs)(P,{bg:"blue.100",heading:this.state.gunData.title,pb:"10",children:[Object(M.jsxs)(w.b,{w:"100%",h:"100%",p:"1",children:[Object(M.jsx)(L,{title:"Volume",gun:this.props.gun,gunProperty:"volume"}),Object(M.jsx)(U,{title:"Hidden",gun:this.props.gun,gunProperty:"hidden"})]}),Object(M.jsx)(C.a,{position:"absolute",bottom:"0",variant:"outline",w:"100%",borderRadius:"0",onClick:this.stop,children:"Stop"})]})})}}]),n}(y),$=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).stop=a.stop.bind(Object(g.a)(a)),a}return Object(h.a)(n,[{key:"stop",value:function(){W.stopEffect(this.gunBase)}},{key:"render",value:function(){return Object(M.jsx)(P,{bg:"red.100",heading:this.state.gunData.title,pb:"10",children:Object(M.jsx)(C.a,{position:"absolute",bottom:"0",variant:"outline",w:"100%",borderRadius:"0",onClick:this.stop,children:"Deactivate"})})}}]),n}(y),tt=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).stop=a.stop.bind(Object(g.a)(a)),a}return Object(h.a)(n,[{key:"stop",value:function(){H.stopEffect(this.gunBase)}},{key:"render",value:function(){return Object(M.jsx)(P,{bg:"green.100",heading:this.state.gunData.title,pb:"10",children:Object(M.jsx)(C.a,{position:"absolute",bottom:"0",variant:"outline",w:"100%",borderRadius:"0",onClick:this.stop,children:"Deactivate"})})}}]),n}(y),et=n(31),nt=n(24),at=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state.time=new Date,a.stop=a.stop.bind(Object(g.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this;Object(et.a)(Object(nt.a)(n.prototype),"componentDidMount",this).call(this),this.update=setInterval((function(){t.setState({time:new Date})}),16)}},{key:"componentWillUnmount",value:function(){Object(et.a)(Object(nt.a)(n.prototype),"componentWillUnmount",this).call(this),clearInterval(this.update)}},{key:"stop",value:function(){Y.stopEffect(this.gunBase)}},{key:"render",value:function(){return Date.now()-100>this.state.gunData.startTime+1e3*this.state.gunData.duration?null:Object(M.jsx)(P,{bg:"orange.100",heading:this.state.gunData.title,pb:"10",children:Object(M.jsx)(C.a,{position:"absolute",bottom:"0",variant:"outline",w:"100%",borderRadius:"0",onClick:this.stop,children:"Deactivate"})})}}]),n}(y),it=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).stop=a.stop.bind(Object(g.a)(a)),a}return Object(h.a)(n,[{key:"stop",value:function(){X.stopEffect(this.gunBase)}},{key:"render",value:function(){return Object(M.jsx)(P,{bg:"green.100",heading:this.state.gunData.title,pb:"10",children:Object(M.jsx)(C.a,{position:"absolute",bottom:"0",variant:"outline",w:"100%",borderRadius:"0",onClick:this.stop,children:"Deactivate"})})}}]),n}(y),rt=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var t=this;return Object(M.jsxs)(k.a,{p:4,pt:0,w:{base:"300px",lg:"400px"},bg:"#FFF9",position:"relative",h:"100%",children:[Object(M.jsx)(S.a,{fontSize:"3em",color:"#D0C5D0",position:"absolute",bottom:"3",left:"3",verticalAlign:"bottom",children:"active effects"}),Object(M.jsx)(k.a,{h:"100%",overflow:"scroll",children:Object(M.jsx)(m.a,{templateColumns:{base:"repeat(1, 1fr)",lg:"repeat(2, 1fr)"},gap:4,children:Object(d.map)(Object(d.sortBy)(this.state.gunData,(function(t){return t.timestamp})),(function(e){if(null!==e&&!0!==e.deleted){var n="activefx"+e.key,a={key:n,gun:t.gunBase.get(n)};switch(e.type){case"youtube":return Object(M.jsx)(Z,Object(p.a)({},a));case"overlay":return Object(M.jsx)($,Object(p.a)({},a));case"fade":return Object(M.jsx)(tt,Object(p.a)({},a));case"shake":return Object(M.jsx)(at,Object(p.a)({},a));case"miro-hide":return Object(M.jsx)(it,Object(p.a)({},a))}return null}}))})})]})}}]),n}(G),ct=rt,st=n(185),ot=n(189),ut=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){Object(et.a)(Object(nt.a)(n.prototype),"componentDidMount",this).call(this),this.toast=Object(ot.a)({theme:v})}},{key:"render",value:function(){var t=this;return Object(M.jsx)(k.a,{bg:"#FFF9",maxH:"200px",w:"100%",p:"4",children:Object(M.jsx)(P,{bg:"#9F7AAFAA",borderColor:"white",color:"#FFFC",heading:"viewer info: ",w:"100%",h:"100%",children:Object(M.jsxs)(w.b,{p:"3",pt:"0",children:[Object(M.jsxs)(k.a,{w:"100%",onClick:function(e){navigator.clipboard.writeText("https://aaron.work/ssm#/v/"+t.props.roomId),t.toast({title:"URL copied to clipboard",description:"Distribute this URL to users to have them join your experience.",status:"success",duration:9e3,isClosable:!0,position:"top-right"}),e.preventDefault()},children:[Object(M.jsx)(D.a,{children:"Viewer URL:"}),Object(M.jsx)(B.a,{display:"inline-block",overflow:"ellipsis",whiteSpace:"nowrap",size:"xs",bg:"#0005",pointerEvents:"none",value:"https://aaron.work/ssm#/v/"+this.props.roomId})]}),Object(M.jsxs)(k.a,{w:"100%",children:[Object(M.jsx)(D.a,{size:"xs",children:"Base URL"}),Object(M.jsx)(R,{title:"url",size:"xs",gun:this.props.gun,gunProperty:"url"})]})]})})})}}]),n}(y),lt=Object(o.g)(ut),ht=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).roomId=a.props.match.params.room_id,null==a.roomId?a.gunBase=t.gun:a.gunBase=t.gun.get(a.roomId),a}return Object(h.a)(n,[{key:"render",value:function(){return Object(M.jsx)(M.Fragment,{children:Object(M.jsx)(k.a,{minW:"100vw",minH:"100vh",bg:"#D0C5D0",children:Object(M.jsxs)(st.a,{minH:"100vh",children:[Object(M.jsx)(k.a,{width:"100%",height:"100%",children:Object(M.jsx)(Q,{gun:this.gunBase.get("ui"),gunBase:this.gunBase})}),Object(M.jsxs)(w.b,{h:"100vh",spacing:0,children:[Object(M.jsx)(lt,{roomId:this.roomId,gun:this.gunBase}),Object(M.jsx)(ct,{gun:this.gunBase.get("activefx")})]})]})})})}}]),n}(i.a.Component),jt=Object(o.g)(ht),bt=n(88),pt=n.n(bt),dt=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(M.jsx)("iframe",Object(p.a)({style:{zIndex:this.props.hidden?-1e4:0,height:"100%",width:"100%",position:"absolute",pointerEvents:this.props.pointerEvents}},this.props))}}]),n}(i.a.Component),gt=dt,Ot=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return this.state.gunData?Object(M.jsx)(gt,{pointerEvents:"auto",src:this.state.gunData.url}):null}}]),n}(y),ft=Ot,vt=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(d.map)(Object(d.sortBy)(this.state.gunData,(function(t){return t.timestamp})),(function(t){if(null!==t&&!0!==t.deleted&&"overlay"==t.type)return Object(M.jsx)(gt,{pointerEvents:t.clickthrough?"none":"auto",hidden:t.hidden,src:t.url})}))}}]),n}(G),xt=vt,yt=n(110),mt=n(113),kt=(n(152),function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).ytMap={},a.state.videoLoaded=!1,a}return Object(h.a)(n,[{key:"render",value:function(){var t=this;return Object(M.jsxs)(M.Fragment,{children:[";",Object(d.map)(Object(d.sortBy)(this.state.gunData,(function(t){return t.timestamp})),(function(e){if(null!==e&&!0!==e.deleted&&"youtube"==e.type&&!0!==e.stopped&&e.url&&""!=e.url)return null!=t.ytMap[e.key]&&t.ytMap[e.key].setVolume(Math.floor(100*e.volume)),Object(M.jsxs)(k.a,{w:"100vw",h:"100vh",position:e.hidden?null:"fixed",top:"0",left:"0",children:[e.hidden||null==t.ytMap[e.key]?null:Object(M.jsx)(k.a,{bg:"black",w:"100%",h:"100%",onClick:function(t){t.preventDefault()}}),Object(M.jsx)(yt.a,{containerClassName:e.hidden?"bingus":"ytPlayer",opts:{width:"100%",height:"100%",playerVars:{autoplay:1,controls:0}},videoId:Object(mt.a)(e.url).id,onReady:function(n){t.ytMap[e.key]=n.target,t.setState(Object(p.a)(Object(p.a)({},t.gunData),{},{videoLoaded:!t.state.videoLoaded}))}},e.key)]},"box"+e.key);null!=t.ytMap[e.key]&&(t.ytMap[e.key]=null)}))]})}}]),n}(G)),wt=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state.fadeActive=!1,a.state.opacity=0,a.interval=null,a}return Object(h.a)(n,[{key:"calculateOpacity",value:function(){if(this.state){var t=!1;Object(d.map)(this.state.gunData,(function(e){null!==e&&!0!==e.deleted&&"fade"==e.type&&(t=!0)}));var e=((t?1:0)+4*this.state.opacity)/5;this.setState({fadeActive:t,opacity:e,gunData:this.state.gunData})}}},{key:"componentDidMount",value:function(){var t=this;Object(et.a)(Object(nt.a)(n.prototype),"componentDidMount",this).call(this),setInterval((function(){return t.calculateOpacity()}),30)}},{key:"componentWillUnmount",value:function(){Object(et.a)(Object(nt.a)(n.prototype),"componentWillUnmount",this).call(this),this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){var t=this;return Object(M.jsx)(k.a,{w:"100vw",h:"100vh",opacity:this.state.opacity,style:{background:"#000"},position:"absolute",left:"0",top:"0",zIndex:"100",pointerEvents:this.state.fadeActive?"auto":"none",onClick:function(e){return t.state.fadeActive?e.preventDefault():null}})}}]),n}(G),Dt=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state.shake=0,a.interval=null,a}return Object(h.a)(n,[{key:"calculateShake",value:function(){if(this.state){var t=0;Object(d.map)(this.state.gunData,(function(e){if(null!==e&&!0!==e.deleted&&"shake"==e.type&&null!=e.duration&&null!=e.strength&&null!=e.timestamp){var n=e.duration,a=(n-Math.min(n,Math.max(0,(Date.now()-e.timestamp+300)/1e3)))/n*e.strength;t+=a}})),this.setState({shake:t,gunData:this.state.gunData})}}},{key:"componentDidMount",value:function(){var t=this;Object(et.a)(Object(nt.a)(n.prototype),"componentDidMount",this).call(this),setInterval((function(){return t.calculateShake()}),30)}},{key:"componentWillUnmount",value:function(){Object(et.a)(Object(nt.a)(n.prototype),"componentWillUnmount",this).call(this),this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){var t=Math.random()*Math.PI*2;return Object(M.jsx)(k.a,{width:"100%",height:"100%",overflow:"hidden",children:Object(M.jsx)(k.a,{width:"100%",height:"100%",transform:"auto",rotate:(t-Math.PI)*Math.min(10,this.state.shake)/10,translateX:Math.cos(t)*this.state.shake+"px",translateY:Math.sin(t)*this.state.shake+"px",children:this.props.children})})}}]),n}(G),Ct=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state.shake=0,a.interval=null,a}return Object(h.a)(n,[{key:"calculateShake",value:function(){if(this.state){this.setState({shake:0,gunData:this.state.gunData})}}},{key:"componentDidMount",value:function(){var t=this;Object(et.a)(Object(nt.a)(n.prototype),"componentDidMount",this).call(this),setInterval((function(){return t.calculateShake()}),30)}},{key:"componentWillUnmount",value:function(){Object(et.a)(Object(nt.a)(n.prototype),"componentWillUnmount",this).call(this),this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){var t=!1;return Object(d.map)(this.state.gunData,(function(e){null!==e&&!0!==e.deleted&&"miro-hide"==e.type&&(t=!0)})),Object(M.jsx)(k.a,{width:"100%",height:"100%",overflow:"hidden",children:Object(M.jsx)(k.a,Object(p.a)(Object(p.a)({},t?{position:"absolute",width:"210vw",height:"130vh",top:"-30vh",left:"-50vw"}:{}),{},{children:this.props.children}))})}}]),n}(G),Bt=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).roomId=a.props.match.params.room_id,null==a.roomId?a.gunBase=t.gun:a.gunBase=t.gun.get(a.roomId),a.state={overlayDismissed:!1},a}return Object(h.a)(n,[{key:"render",value:function(){var t=this;return Object(M.jsxs)(M.Fragment,{children:[this.state.overlayDismissed?null:Object(M.jsx)(k.a,{bg:"black",color:"white",zIndex:"1000",position:"absolute",top:"0",left:"0",width:"100vw",height:"100vh",onClick:function(){t.setState({overlayDismissed:!0})},children:Object(M.jsx)(E.a,{width:"100vw",height:"100vh",children:Object(M.jsx)(S.a,{children:"click to begin"})})}),Object(M.jsx)(Ct,{gun:this.gunBase.get("activefx"),children:Object(M.jsx)(Dt,{gun:this.gunBase.get("activefx"),children:Object(M.jsxs)(k.a,{minW:"100vw",minH:"100vh",w:"100%",h:"100%",children:[Object(M.jsx)(ft,{w:"100%",h:"100%",gun:this.gunBase}),Object(M.jsx)(xt,{gun:this.gunBase.get("activefx")}),Object(M.jsx)(kt,{gun:this.gunBase.get("activefx")}),Object(M.jsx)(wt,{gun:this.gunBase.get("activefx")})]})})})]})}}]),n}(i.a.Component),Mt=Object(o.g)(Bt);var Rt=function(t){var e=Object(a.useRef)(null),n=Object(a.useRef)(null),i=Object(o.f)();return Object(M.jsx)(M.Fragment,{children:Object(M.jsx)(k.a,{minW:"100vw",minH:"100vh",bg:"#D0C5D0",children:Object(M.jsx)(E.a,{width:"100vw",height:"100vh",children:Object(M.jsx)(k.a,{w:"300px",minH:"300px",bg:"gray.100",position:"relative",children:Object(M.jsxs)(P,{heading:"simple stage manager",children:[Object(M.jsxs)(w.b,{p:"5",pb:"2",children:[Object(M.jsxs)(k.a,{children:[Object(M.jsx)(D.a,{mb:"3",children:"Enter an instance ID below, or leave it blank to generate a random one."}),Object(M.jsx)(B.a,{ref:e,placeholder:"Instance ID"})]}),Object(M.jsxs)(k.a,{children:[Object(M.jsx)(D.a,{my:"3",children:"Enter the base URL for the experience below. You can also set this later in the top right corner of the Manager screen."}),Object(M.jsx)(B.a,{mb:"3",ref:n,placeholder:"Base URL"})]}),Object(M.jsx)(D.a,{children:"Remember to copy the viewer URL and send it to your audience!"})]}),Object(M.jsx)(k.a,{h:"10",children:Object(M.jsx)(C.a,{position:"absolute",bottom:"0",variant:"outline",w:"100%",borderRadius:"0",onClick:function(){var a=e.current.value,r=n.current.value;""==a&&(a="xxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))),""!=r&&t.gun.get(a).put({url:r}),i.push("/manager/"+a)},mt:"10",bg:"white",children:"Let's get started!"})})]})})})})})};n(153);var Ft=pt()({peers:["https://aarondotwork-gun-server.herokuapp.com/gun"]}).get("simple_stage_manager");var St=function(){return Object(M.jsx)(s.a,{children:Object(M.jsx)(u.a,{theme:v,children:Object(M.jsx)("div",{children:Object(M.jsxs)(o.c,{children:[Object(M.jsx)(o.a,{path:"/manager/:room_id",children:Object(M.jsx)(jt,{gun:Ft})}),Object(M.jsx)(o.a,{path:"/manager",children:Object(M.jsx)(jt,{gun:Ft})}),Object(M.jsx)(o.a,{path:"/v/:room_id",children:Object(M.jsx)(Mt,{gun:Ft})}),Object(M.jsx)(o.a,{path:"/",children:Object(M.jsx)(Rt,{gun:Ft})})]})})})})},Pt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,196)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,c=e.getTTFB;n(t),a(t),i(t),r(t),c(t)}))};c.a.render(Object(M.jsx)(i.a.StrictMode,{children:Object(M.jsx)(St,{})}),document.getElementById("root")),Pt()}},[[154,1,2]]]);
//# sourceMappingURL=main.bcab3551.chunk.js.map