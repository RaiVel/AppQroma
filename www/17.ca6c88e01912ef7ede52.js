(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"8cDG":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=function(){return function(){}}(),e=u("pMnS"),r=u("oBZk"),i=u("ZZ/e"),s=u("Ip0R"),c=u("gIcY"),a=u("mrSG"),b=u("RyzD"),p=function(){function l(l,n,u){this.alertController=l,this.restService=n,this.FireAuth=u,this.productos=[],this.premios=[],this.list_producto=[1,2,3,4,5],this.list_premio=[91,92,93]}return l.prototype.ngOnInit=function(){this.getUser()},l.prototype.getProductos=function(l){var n=this;this.productos=[],this.list_producto.forEach(function(u){var t=null,o=null,e=null;n.restService.getProduct(u).subscribe(function(u){for(var r=0;r<u.length;r++)u[r].cod_cliente===l.cod_cliente?t=r:u[r].cod_cliente===l.socio?o=r:"Todos"===u[r].cod_cliente&&(e=r);null!==t?n.productos.push(u[t]):null!==o?n.productos.push(u[o]):null!==e&&n.productos.push(u[e])},function(l){console.error(l)})})},l.prototype.getPremios=function(l){var n,u=this;this.premios=[],"Oro"===l.socio?n=this.list_premio[0]:"Plata"===l.socio?n=this.list_premio[1]:"Bronce"===l.socio&&(n=this.list_premio[2]),this.restService.getPrize(n).subscribe(function(l){u.premios=l},function(l){console.error(l)})},l.prototype.getUser=function(){var l=this;this.FireAuth.authState.subscribe(function(n){return l.restService.getUser(n.email.split("@")[0]).subscribe(function(n){l.user=n,l.getProductos(l.user),l.getPremios(l.user)},function(l){console.error(l)}),n.uid})},l.prototype.getPremio=function(l){this.premioAlert(l)},l.prototype.getAcumular=function(l){this.acumularAlert(l)},l.prototype.premioAlert=function(l){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(n){switch(n.label){case 0:return this.user.puntos>l.pruntos?[4,this.alertController.create({header:"Canjear "+l.premio,message:"Si tienes los puntos necesarios",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(l){console.log("Cancelo")}},{text:"Canjear",handler:function(){console.log("Canjear producto")}}]})]:[3,3];case 1:return[4,n.sent().present()];case 2:return n.sent(),[3,6];case 3:return[4,this.alertController.create({header:"Canjear "+l.premio,message:"No tienes los puntos necesarios",buttons:["Okay"]})];case 4:return[4,n.sent().present()];case 5:n.sent(),n.label=6;case 6:return[2]}})})},l.prototype.acumularAlert=function(l){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(n){switch(n.label){case 0:return[4,this.alertController.create({header:"Comprar "+l.nombre_producto,subHeader:"El producto acumula "+l.puntos+" puntos",message:"Acercarse a la tienda mas cercana para acumular los puntos",buttons:["Okay"]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})})},l}(),h=u("ZBkt"),g=t.mb({encapsulation:0,styles:[[""]],data:{}});function d(l){return t.Db(0,[(l()(),t.ob(0,0,null,null,10,"ion-header",[],null,null,null,r.C,r.h)),t.nb(1,49152,null,0,i.z,[t.h,t.k],null,null),(l()(),t.ob(2,0,null,0,8,"ion-toolbar",[],null,null,null,r.P,r.u)),t.nb(3,49152,null,0,i.zb,[t.h,t.k],null,null),(l()(),t.ob(4,0,null,0,6,"ion-grid",[],null,null,null,r.B,r.g)),t.nb(5,49152,null,0,i.y,[t.h,t.k],null,null),(l()(),t.ob(6,0,null,0,4,"ion-row",[["justify-content-center",""]],null,null,null,r.J,r.o)),t.nb(7,49152,null,0,i.gb,[t.h,t.k],null,null),(l()(),t.ob(8,0,null,0,1,"span",[["class","top"]],null,null,null,null,null)),(l()(),t.Cb(9,null,["Categor\xeda ",""])),(l()(),t.ob(10,0,null,0,0,"img",[["class","cat"],["height","20px"],["id","categoria"],["width","20px"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){var u=n.component;l(n,9,0,u.user.socio),l(n,10,0,t.qb(1,"assets/icon/",u.user.socio,".svg"))})}function f(l){return t.Db(0,[(l()(),t.ob(0,0,null,null,11,"ion-card",[["class","card_fondo"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.getAcumular(l.context.$implicit)&&t),t},r.y,r.c)),t.nb(1,49152,null,0,i.k,[t.h,t.k],null,null),(l()(),t.ob(2,0,null,0,8,"ion-item",[["class","back"],["lines","none"],["width","auto"]],null,null,null,r.F,r.k)),t.nb(3,49152,null,0,i.F,[t.h,t.k],{lines:[0,"lines"]},null),(l()(),t.ob(4,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,r.w,r.b)),t.nb(5,49152,null,0,i.e,[t.h,t.k],null,null),(l()(),t.ob(6,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.ob(7,0,null,0,1,"b",[["class","boscuro"]],null,null,null,null,null)),(l()(),t.Cb(8,null,["",""])),(l()(),t.ob(9,0,null,0,1,"b",[["class","bgrande_premio"],["slot","end"]],null,null,null,null,null)),(l()(),t.Cb(10,null,["","ptos"])),(l()(),t.ob(11,0,null,0,0,"img",[["height","70px"],["src","assets/icon/fondo_acumular.png"]],null,null,null,null,null))],function(l,n){l(n,3,0,"none")},function(l,n){l(n,6,0,t.qb(1,"",n.context.$implicit.Link,"")),l(n,8,0,n.context.$implicit.nombre_producto),l(n,10,0,n.context.$implicit.puntos)})}function m(l){return t.Db(0,[(l()(),t.ob(0,0,null,null,3,"ion-list",[],null,null,null,r.H,r.m)),t.nb(1,49152,null,0,i.M,[t.h,t.k],null,null),(l()(),t.fb(16777216,null,0,1,null,f)),t.nb(3,278528,null,0,s.h,[t.N,t.K,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,3,0,n.component.productos)},null)}function C(l){return t.Db(0,[(l()(),t.ob(0,0,null,null,11,"ion-card",[["class","card_fondo"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.getPremio(l.context.$implicit)&&t),t},r.y,r.c)),t.nb(1,49152,null,0,i.k,[t.h,t.k],null,null),(l()(),t.ob(2,0,null,0,8,"ion-item",[["class","back"],["lines","none"],["width","auto"]],null,null,null,r.F,r.k)),t.nb(3,49152,null,0,i.F,[t.h,t.k],{lines:[0,"lines"]},null),(l()(),t.ob(4,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,r.w,r.b)),t.nb(5,49152,null,0,i.e,[t.h,t.k],null,null),(l()(),t.ob(6,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.ob(7,0,null,0,1,"b",[["class","boscuro"]],null,null,null,null,null)),(l()(),t.Cb(8,null,["",""])),(l()(),t.ob(9,0,null,0,1,"b",[["class","bgrande_premio"],["slot","end"]],null,null,null,null,null)),(l()(),t.Cb(10,null,["","ptos"])),(l()(),t.ob(11,0,null,0,0,"img",[["height","70px"],["src","assets/icon/fondo_premio.png"]],null,null,null,null,null))],function(l,n){l(n,3,0,"none")},function(l,n){l(n,6,0,t.qb(1,"",n.context.$implicit.link,"")),l(n,8,0,n.context.$implicit.premio),l(n,10,0,n.context.$implicit.pruntos)})}function k(l){return t.Db(0,[(l()(),t.ob(0,0,null,null,3,"ion-list",[],null,null,null,r.H,r.m)),t.nb(1,49152,null,0,i.M,[t.h,t.k],null,null),(l()(),t.fb(16777216,null,0,1,null,C)),t.nb(3,278528,null,0,s.h,[t.N,t.K,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,3,0,n.component.premios)},null)}function v(l){return t.Db(0,[(l()(),t.ob(0,0,null,null,33,"ion-content",[],null,null,null,r.A,r.f)),t.nb(1,49152,null,0,i.s,[t.h,t.k],null,null),(l()(),t.ob(2,0,null,0,4,"p",[["class","normal"]],null,null,null,null,null)),(l()(),t.ob(3,0,null,null,1,"b",[["class","txt_pri"]],null,null,null,null,null)),(l()(),t.Cb(-1,null,["Qroma "])),(l()(),t.ob(5,0,null,null,1,"b",[["class","txt_sec"]],null,null,null,null,null)),(l()(),t.Cb(-1,null,["Puntos"])),(l()(),t.ob(7,0,null,0,2,"p",[["class","grande"]],null,null,null,null,null)),(l()(),t.ob(8,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Cb(9,null,[""," "])),(l()(),t.ob(10,0,null,0,17,"div",[],null,null,null,null,null)),(l()(),t.ob(11,0,null,null,16,"ion-segment",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var o=!0,e=l.component;return"ionBlur"===n&&(o=!1!==t.yb(l,13)._handleBlurEvent()&&o),"ionChange"===n&&(o=!1!==t.yb(l,13)._handleChangeEvent(u.target.value)&&o),"ngModelChange"===n&&(o=!1!==(e.puntos=u)&&o),o},r.L,r.p)),t.nb(12,49152,null,0,i.ib,[t.h,t.k],null,null),t.nb(13,16384,null,0,i.Hb,[t.k],null,null),t.zb(1024,null,c.c,function(l){return[l]},[i.Hb]),t.nb(15,671744,null,0,c.f,[[8,null],[8,null],[8,null],[6,c.c]],{model:[0,"model"]},{update:"ngModelChange"}),t.zb(2048,null,c.d,null,[c.f]),t.nb(17,16384,null,0,c.e,[[4,c.d]],null,null),(l()(),t.ob(18,0,null,0,4,"ion-segment-button",[["value","acumular"]],null,null,null,r.K,r.q)),t.nb(19,49152,null,0,i.jb,[t.h,t.k],{value:[0,"value"]},null),(l()(),t.ob(20,0,null,0,2,"ion-label",[],null,null,null,r.G,r.l)),t.nb(21,49152,null,0,i.L,[t.h,t.k],null,null),(l()(),t.Cb(-1,0,["Acumular"])),(l()(),t.ob(23,0,null,0,4,"ion-segment-button",[["value","canjear"]],null,null,null,r.K,r.q)),t.nb(24,49152,null,0,i.jb,[t.h,t.k],{value:[0,"value"]},null),(l()(),t.ob(25,0,null,0,2,"ion-label",[],null,null,null,r.G,r.l)),t.nb(26,49152,null,0,i.L,[t.h,t.k],null,null),(l()(),t.Cb(-1,0,["Canjear"])),(l()(),t.ob(28,0,null,0,5,"div",[],null,null,null,null,null)),t.nb(29,16384,null,0,s.l,[],{ngSwitch:[0,"ngSwitch"]},null),(l()(),t.fb(16777216,null,null,1,null,m)),t.nb(31,16384,null,0,s.n,[t.N,t.K,s.l],null,null),(l()(),t.fb(16777216,null,null,1,null,k)),t.nb(33,278528,null,0,s.m,[t.N,t.K,s.l],{ngSwitchCase:[0,"ngSwitchCase"]},null)],function(l,n){var u=n.component;l(n,15,0,u.puntos),l(n,19,0,"acumular"),l(n,24,0,"canjear"),l(n,29,0,u.puntos),l(n,33,0,"canjear")},function(l,n){l(n,9,0,n.component.user.puntos),l(n,11,0,t.yb(n,17).ngClassUntouched,t.yb(n,17).ngClassTouched,t.yb(n,17).ngClassPristine,t.yb(n,17).ngClassDirty,t.yb(n,17).ngClassValid,t.yb(n,17).ngClassInvalid,t.yb(n,17).ngClassPending)})}function w(l){return t.Db(0,[(l()(),t.fb(16777216,null,null,1,null,d)),t.nb(1,16384,null,0,s.i,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,v)),t.nb(3,16384,null,0,s.i,[t.N,t.K],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,1,0,u.user),l(n,3,0,u.user)},null)}function _(l){return t.Db(0,[(l()(),t.ob(0,0,null,null,1,"app-tab2",[],null,null,null,w,g)),t.nb(1,114688,null,0,p,[i.a,b.a,h.a],null,null)],function(l,n){l(n,1,0)},null)}var y=t.kb("app-tab2",p,_,{},{},[]),x=u("ZYCi");u.d(n,"Tab2PageModuleNgFactory",function(){return j});var j=t.lb(o,[],function(l){return t.vb([t.wb(512,t.j,t.ab,[[8,[e.a,y]],[3,t.j],t.x]),t.wb(4608,s.k,s.j,[t.u,[2,s.t]]),t.wb(4608,i.b,i.b,[t.z,t.g]),t.wb(4608,i.Db,i.Db,[i.b,t.j,t.q,s.c]),t.wb(4608,i.Gb,i.Gb,[i.b,t.j,t.q,s.c]),t.wb(4608,c.i,c.i,[]),t.wb(1073742336,s.b,s.b,[]),t.wb(1073742336,i.Bb,i.Bb,[]),t.wb(1073742336,c.h,c.h,[]),t.wb(1073742336,c.a,c.a,[]),t.wb(1073742336,x.n,x.n,[[2,x.t],[2,x.m]]),t.wb(1073742336,o,o,[]),t.wb(1024,x.k,function(){return[[{path:"",component:p}]]},[])])})}}]);