(this["webpackJsonpcat-app"]=this["webpackJsonpcat-app"]||[]).push([[0],{101:function(t,e,a){"use strict";a.r(e);var c=a(0),s=a.n(c),n=a(9),i=a.n(n),l=(a(69),a(56)),d=a(57),r=a(64),h=a(63),o=a(26),j=a.n(o),m=a(109),b=a(62),p=a(108),x=a(61),u=(a(76),a.p+"static/media/hat1.db02a224.png"),g=a.p+"static/media/hat2.5ae6f999.png",f=a.p+"static/media/hat3.d7454e4c.png",O=a.p+"static/media/hat4.d8d60fae.png",y=a.p+"static/media/hat5.c0d98e09.png",v=a.p+"static/media/hat6.256c2d6e.png",S=a.p+"static/media/hat7.97ea3aa9.png",_=a.p+"static/media/hat8.8b120aae.png",N=a.p+"static/media/hat9.5bceb309.png",k=a.p+"static/media/hat10.95762d7e.png",I=a.p+"static/media/hat11.8618ef5c.png",w=a.p+"static/media/hat12.dd9388c8.png",D=a.p+"static/media/hat13.7b06c3dc.png",K=a.p+"static/media/hat14.02d0a576.png",C=a.p+"static/media/hat15.71874220.png",H=a.p+"static/media/hat16.b29fe5e3.png",z=a.p+"static/media/hat17.5be73f1f.png",M=a.p+"static/media/hat18.a1efb3d2.png",B=a.p+"static/media/hat19.140160dc.png",Z=a.p+"static/media/hat20.4536799c.png",F=a.p+"static/media/cat1.6c6d5376.png",P=a.p+"static/media/cat2.ef663286.png",T=a.p+"static/media/cat3.402490de.png",E=a.p+"static/media/cat4.1cca2430.png",J=a.p+"static/media/cat5.023485ba.png",L=a.p+"static/media/cat6.d5636fe5.png",V=a.p+"static/media/cat7.2dd67c5e.png",R=a.p+"static/media/cat8.76d777e6.png",W=a.p+"static/media/cat9.bef93d39.png",X=a.p+"static/media/cat10.86f7c197.png",Y=a.p+"static/media/cat11.f66f1763.png",q=a.p+"static/media/cat12.2ccd948c.png",A=a.p+"static/media/cat13.59d86982.png",G=a.p+"static/media/cat14.9e33310d.png",Q=a.p+"static/media/cat15.0aaa5a59.png",U=a.p+"static/media/cat16.452165f0.png",$=a.p+"static/media/cat17.d6634859.png",tt=a.p+"static/media/cat18.9cd6332a.png",et=a.p+"static/media/cat19.088250f6.png",at=a.p+"static/media/cat20.e1fc0941.png",ct=a.p+"static/media/bg1.08d35e20.png",st=a.p+"static/media/bg2.914dd0d7.png",nt=a.p+"static/media/bg3.1ab06097.png",it=a.p+"static/media/bg4.a2993274.png",lt=a.p+"static/media/bg5.407b6ced.png",dt=a.p+"static/media/bg6.678a9142.png",rt=a.p+"static/media/bg7.d7745f1f.png",ht=a.p+"static/media/bg8.3a0cf5fb.png",ot=a.p+"static/media/bg9.96409748.png",jt=a.p+"static/media/bg10.3601e7ab.png",mt=(a(77),a(78),a(1)),bt=function(t){Object(r.a)(a,t);var e=Object(h.a)(a);function a(t){var c;return Object(l.a)(this,a),(c=e.call(this,t)).z=10,c.state={hat_1:u,hat_2:g,hat_3:f,hat_4:O,cat_1:F,cat_2:P,cat_3:T,cat_4:E,bg:"url("+ct+")",slideDark:!0,carouselIndex:0,positionX:0,positionY:0},c}return Object(d.a)(a,[{key:"changeZ",value:function(t){this.z+=1,document.getElementById(t.currentTarget.id).style.zIndex=this.z,console.log(document.getElementById(t.currentTarget.id).style.zIndex)}},{key:"switchHatSet",value:function(t){switch(t){case"1":this.setState({hat_1:u,hat_2:g,hat_3:f,hat_4:O});break;case"2":this.setState({hat_1:y,hat_2:v,hat_3:S,hat_4:_});break;case"3":this.setState({hat_1:N,hat_2:k,hat_3:I,hat_4:w});break;case"4":this.setState({hat_1:D,hat_2:K,hat_3:C,hat_4:H});break;case"5":this.setState({hat_1:z,hat_2:M,hat_3:B,hat_4:Z})}}},{key:"switchCatSet",value:function(t){switch(t){case"1":this.setState({cat_1:F,cat_2:P,cat_3:T,cat_4:E});break;case"2":this.setState({cat_1:J,cat_2:L,cat_3:V,cat_4:R});break;case"3":this.setState({cat_1:W,cat_2:X,cat_3:Y,cat_4:q});break;case"4":this.setState({cat_1:A,cat_2:G,cat_3:Q,cat_4:U});break;case"5":this.setState({cat_1:$,cat_2:tt,cat_3:et,cat_4:at})}}},{key:"switchBackground",value:function(t){switch(t){case"1":this.setState({bg:"url("+ct+")",slideDark:!0});break;case"2":this.setState({bg:"url("+st+")",slideDark:!0});break;case"3":this.setState({bg:"url("+nt+")",slideDark:!1});break;case"4":this.setState({bg:"url("+it+")",slideDark:!0});break;case"5":this.setState({bg:"url("+lt+")",slideDark:!1});break;case"6":this.setState({bg:"url("+dt+")",slideDark:!0});break;case"7":this.setState({bg:"url("+rt+")",slideDark:!0});break;case"8":this.setState({bg:"url("+ht+")",slideDark:!1});break;case"9":this.setState({bg:"url("+ot+")",slideDark:!0});break;case"10":this.setState({bg:"url("+jt+")",slideDark:!1})}}},{key:"randomize",value:function(){var t=Math.floor(4*Math.random());console.log(t),this.switchHatSet(String(Math.floor(5*Math.random())+1)),this.switchCatSet(String(Math.floor(5*Math.random())+1)),this.switchBackground(String(Math.floor(10*Math.random())+1)),this.setState({carouselIndex:t})}},{key:"handleSelect",value:function(t,e){console.log(t),this.setState({carouselIndex:t})}},{key:"reset",value:function(){this.setState({hat_1:u,hat_2:g,hat_3:f,hat_4:O,cat_1:F,cat_2:P,cat_3:T,cat_4:E,bg:"url("+ct+")",slideDark:!0,carouselIndex:0})}},{key:"render",value:function(){var t=this;return Object(mt.jsxs)("div",{className:"main",style:{backgroundImage:this.state.bg},children:[Object(mt.jsxs)("div",{className:"container title-container",children:[Object(mt.jsx)("h1",{className:"title text-center",children:"Cat Hat"}),Object(mt.jsx)("h2",{className:"title text-center",children:Object(mt.jsx)("i",{children:"Place the hats on the cats!"})})]}),Object(mt.jsx)("div",{className:"container hat-cat-container",children:Object(mt.jsxs)("div",{className:"row",children:[Object(mt.jsx)("div",{className:"col-xxl",children:Object(mt.jsx)("div",{className:"container hat-container",children:Object(mt.jsxs)("div",{className:"row row-cols-1 row-cols-md-2",children:[Object(mt.jsx)("div",{className:"col hat-col d-flex justify-content-center",children:Object(mt.jsx)(j.a,{position:null,scale:1,onStart:this.handleStart,onDrag:this.handleDrag,onStop:this.handleStop,onMouseDown:function(e){t.changeZ(e)},children:Object(mt.jsx)("div",{className:"box handle",id:"box1",children:Object(mt.jsx)("div",{className:"",children:Object(mt.jsx)("img",{className:"hat",src:this.state.hat_1,alt:"Hat"})})})})}),Object(mt.jsx)("div",{className:"col hat-col d-flex justify-content-center",children:Object(mt.jsx)(j.a,{position:null,scale:1,onStart:this.handleStart,onDrag:this.handleDrag,onStop:this.handleStop,onMouseDown:function(e){t.changeZ(e)},children:Object(mt.jsx)("div",{className:"box handle",id:"box2",children:Object(mt.jsx)("div",{className:"",children:Object(mt.jsx)("img",{className:"hat",src:this.state.hat_2,alt:"Hat"})})})})}),Object(mt.jsx)("div",{className:"col hat-col d-flex justify-content-center",children:Object(mt.jsx)(j.a,{position:null,scale:1,onStart:this.handleStart,onDrag:this.handleDrag,onStop:this.handleStop,onMouseDown:function(e){t.changeZ(e)},children:Object(mt.jsx)("div",{className:"box handle",id:"box3",children:Object(mt.jsx)("div",{className:"",children:Object(mt.jsx)("img",{className:"hat",src:this.state.hat_3,alt:"Hat"})})})})}),Object(mt.jsx)("div",{className:"col hat-col d-flex justify-content-center",children:Object(mt.jsx)(j.a,{position:null,scale:1,onStart:this.handleStart,onDrag:this.handleDrag,onStop:this.handleStop,onMouseDown:function(e){t.changeZ(e)},children:Object(mt.jsx)("div",{className:"box handle",id:"box4",children:Object(mt.jsx)("div",{className:"",children:Object(mt.jsx)("img",{className:"hat",src:this.state.hat_4,alt:"Hat"})})})})})]})})}),Object(mt.jsx)("div",{className:"col-xxl",children:Object(mt.jsxs)(m.a,{interval:null,variant:this.state.slideDark?"dark":"",activeIndex:this.state.carouselIndex,onSelect:function(e,a){t.handleSelect(e,a)},slide:!1,children:[Object(mt.jsx)(m.a.Item,{children:Object(mt.jsx)("img",{className:"cat d-block w-100",src:this.state.cat_1,alt:"cat1"})}),Object(mt.jsx)(m.a.Item,{children:Object(mt.jsx)("img",{className:"cat d-block w-100",src:this.state.cat_2,alt:"cat2"})}),Object(mt.jsx)(m.a.Item,{children:Object(mt.jsx)("img",{className:"cat d-block w-100",src:this.state.cat_3,alt:"cat3"})}),Object(mt.jsx)(m.a.Item,{children:Object(mt.jsx)("img",{className:"cat d-block w-100",src:this.state.cat_4,alt:"cat4"})})]})})]})}),Object(mt.jsx)("div",{className:"container select-container d-flex justify-content-center",children:Object(mt.jsxs)("div",{className:"row row-cols-1 row-cols-md-3",children:[Object(mt.jsx)("div",{className:"col d-flex justify-content-center",children:Object(mt.jsx)(b.a,{onSelect:function(e,a){t.switchHatSet(e)},children:Object(mt.jsxs)(p.a,{id:"dropdown-basic-button",title:"Hat Sets",className:"menu select-button",menuVariant:"dark",variant:"secondary",size:"lg",drop:"up",children:[Object(mt.jsx)(b.a.Item,{eventKey:"1",className:"d-flex justify-content-center",children:"Hat Set 1"}),Object(mt.jsx)(b.a.Item,{eventKey:"2",className:"d-flex justify-content-center",children:"Hat Set 2"}),Object(mt.jsx)(b.a.Item,{eventKey:"3",className:"d-flex justify-content-center",children:"Hat Set 3"}),Object(mt.jsx)(b.a.Item,{eventKey:"4",className:"d-flex justify-content-center",children:"Hat Set 4"}),Object(mt.jsx)(b.a.Item,{eventKey:"5",className:"d-flex justify-content-center",children:"Hat Set 5"})]})})}),Object(mt.jsx)("div",{className:"menu col d-flex justify-content-center",children:Object(mt.jsx)(b.a,{onSelect:function(e,a){t.switchCatSet(e)},children:Object(mt.jsxs)(p.a,{id:"dropdown-basic-button",title:"Cat Sets",className:"select-button",menuVariant:"dark",variant:"secondary",size:"lg",drop:"up",children:[Object(mt.jsx)(b.a.Item,{eventKey:"1",className:"d-flex justify-content-center",children:"Cat Set 1"}),Object(mt.jsx)(b.a.Item,{eventKey:"2",className:"d-flex justify-content-center",children:"Cat Set 2"}),Object(mt.jsx)(b.a.Item,{eventKey:"3",className:"d-flex justify-content-center",children:"Cat Set 3"}),Object(mt.jsx)(b.a.Item,{eventKey:"4",className:"d-flex justify-content-center",children:"Cat Set 4"}),Object(mt.jsx)(b.a.Item,{eventKey:"5",className:"d-flex justify-content-center",children:"Cat Set 5"})]})})}),Object(mt.jsx)("div",{className:"menu col d-flex justify-content-center",children:Object(mt.jsx)(b.a,{onSelect:function(e,a){t.switchBackground(e)},children:Object(mt.jsxs)(p.a,{id:"dropdown-basic-button",title:"Backgrounds",className:"select-button",menuVariant:"dark",variant:"secondary",size:"lg",drop:"up",children:[Object(mt.jsx)(b.a.Item,{eventKey:"1",className:"d-flex justify-content-center",children:"Home"}),Object(mt.jsx)(b.a.Item,{eventKey:"2",className:"d-flex justify-content-center",children:"Party"}),Object(mt.jsx)(b.a.Item,{eventKey:"3",className:"d-flex justify-content-center",children:"Library"}),Object(mt.jsx)(b.a.Item,{eventKey:"4",className:"d-flex justify-content-center",children:"Space"}),Object(mt.jsx)(b.a.Item,{eventKey:"5",className:"d-flex justify-content-center",children:"Outdoors"}),Object(mt.jsx)(b.a.Item,{eventKey:"6",className:"d-flex justify-content-center",children:"Joker"}),Object(mt.jsx)(b.a.Item,{eventKey:"7",className:"d-flex justify-content-center",children:"Desert"}),Object(mt.jsx)(b.a.Item,{eventKey:"8",className:"d-flex justify-content-center",children:"McDonalds"}),Object(mt.jsx)(b.a.Item,{eventKey:"9",className:"d-flex justify-content-center",children:"Cyberpunk"}),Object(mt.jsx)(b.a.Item,{eventKey:"10",className:"d-flex justify-content-center",children:"Western"})]})})}),Object(mt.jsx)("div",{className:"menu col d-flex justify-content-center",children:Object(mt.jsx)(x.a,{className:"random-button",variant:"secondary",size:"lg",onClick:function(e){t.randomize()},children:"Randomize"})}),Object(mt.jsx)("div",{className:"menu col d-flex justify-content-center",children:Object(mt.jsx)(x.a,{className:"reset-button",variant:"secondary",size:"lg",onClick:function(e){t.reset()},children:"Reset"})})]})})]})}}]),a}(s.a.Component),pt=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,110)).then((function(e){var a=e.getCLS,c=e.getFID,s=e.getFCP,n=e.getLCP,i=e.getTTFB;a(t),c(t),s(t),n(t),i(t)}))};i.a.render(Object(mt.jsx)(bt,{}),document.getElementById("root")),pt()},69:function(t,e,a){},76:function(t,e,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.9de4874e.chunk.js.map