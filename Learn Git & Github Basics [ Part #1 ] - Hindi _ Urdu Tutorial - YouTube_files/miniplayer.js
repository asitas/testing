(function(g){var window=this;var Y3=function(a){g.XB.call(this,{C:"div",G:"ytp-miniplayer-ui"});this.player=a;this.H=!1;this.F=this.A=this.l=void 0;this.K(a,"minimized",this.II);this.K(a,"onStateChange",this.JL)},Z3=function(a){g.eK.call(this,a);
this.g=new Y3(this.player);this.g.hide();g.SJ(this.player,this.g.element,4);a.app.F.g&&(this.load(),g.K(a.getRootNode(),"ytp-player-minimized",!0))};
g.r(Y3,g.XB);g.h=Y3.prototype;
g.h.show=function(){this.l=new g.xo(this.bF,null,this);this.l.start();if(!this.H){this.D=new g.rV(this.player,this);g.G(this,this.D);g.SJ(this.player,this.D.element,4);this.D.A=.6;this.O=new g.vU(this.player);g.G(this,this.O);this.B=new g.S({C:"div",G:"ytp-miniplayer-scrim"});g.G(this,this.B);this.B.g(this.element);this.K(this.B.element,"click",this.Cy);var a=new g.S({C:"button",W:["ytp-miniplayer-close-button","ytp-button"],L:{"aria-label":"Close"},J:[g.QO()]});g.G(this,a);a.g(this.B.element);this.K(a.element,
"click",this.Yw);this.u=new g.S({C:"div",G:"ytp-miniplayer-controls"});g.G(this,this.u);this.u.g(this.B.element);this.K(this.u.element,"click",this.Cy);var b=new g.S({C:"div",G:"ytp-miniplayer-button-container"});g.G(this,b);b.g(this.u.element);a=new g.S({C:"div",G:"ytp-miniplayer-play-button-container"});g.G(this,a);a.g(this.u.element);var c=new g.S({C:"div",G:"ytp-miniplayer-button-container"});g.G(this,c);c.g(this.u.element);this.N=new g.yS(this.player,this,!1);g.G(this,this.N);this.N.g(b.element);
b=new g.vS(this.player,this);g.G(this,b);b.g(a.element);this.I=new g.yS(this.player,this,!0);g.G(this,this.I);this.I.g(c.element);this.F=new g.PT(this.player,this);g.G(this,this.F);this.F.g(this.B.element);this.A=new g.ES(this.player,this);g.G(this,this.A);g.SJ(this.player,this.A.element,4);this.o=new g.S({C:"div",G:"ytp-miniplayer-buttons"});g.G(this,this.o);g.SJ(this.player,this.o.element,4);this.o.hide();a=new g.S({C:"button",W:["ytp-miniplayer-close-button","ytp-button"],L:{"aria-label":"Close"},
J:[g.QO()]});g.G(this,a);a.g(this.o.element);this.K(a.element,"click",this.Yw);a=new g.S({C:"button",W:["ytp-miniplayer-replay-button","ytp-button"],L:{"aria-label":"Close"},J:[g.cP()]});g.G(this,a);a.g(this.o.element);this.K(a.element,"click",this.JJ);this.K(this.player,"presentingplayerstatechange",this.cF);this.K(this.player,"appresize",this.qb);this.K(this.player,"fullscreentoggled",this.qb);this.qb();this.H=!0}0!=this.player.getPlayerState()&&g.XB.prototype.show.call(this);this.A.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.l&&(this.l.dispose(),this.l=void 0);g.XB.prototype.hide.call(this);this.player.app.F.g||(this.H&&this.A.hide(),this.player.loadModule("annotations_module"))};
g.h.R=function(){this.l&&(this.l.dispose(),this.l=void 0);g.XB.prototype.R.call(this)};
g.h.Yw=function(){this.player.stopVideo();this.player.la("onCloseMiniplayer")};
g.h.JJ=function(){this.player.playVideo()};
g.h.Cy=function(a){if(a.target==this.B.element||a.target==this.u.element)g.P(g.V(this.player).experiments,"kevlar_miniplayer_scrim_pause")?2==this.player.getPlayerState()?this.player.playVideo():this.player.pauseVideo():this.player.la("onExpandMiniplayer")};
g.h.II=function(){g.K(this.player.getRootNode(),"ytp-player-minimized",this.player.app.F.g);this.player.app.F.g&&0==this.player.getPlayerState()?this.o.show():this.o.hide()};
g.h.bF=function(){this.A.md();this.F.md();this.l&&this.l.start()};
g.h.cF=function(a){g.U(a.state,32)&&this.D.hide()};
g.h.qb=function(){var a=this.A,b=g.CJ(this.player).getPlayerSize().width;a.La=0;a.A=b;a.D=!1;g.GS(a)};
g.h.JL=function(a){this.player.app.F.g&&(0==a?(this.hide(),this.o.show()):(this.show(),this.o.hide()))};
g.h.fb=function(){return this.D};
g.h.wc=function(){return!1};
g.h.Rh=function(){return!1};
g.h.Sh=function(){return!1};
g.h.Iz=function(){};
g.h.ej=function(){};
g.h.wl=function(){};
g.h.Dm=function(){return null};
g.h.Lq=function(){return new g.vh(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.Zm=function(a,b,c,d,e){a.style.left="";a.style.top="";a.style.bottom="";d=g.ai(a);var f=g.CJ(this.player).getPlayerSize().width;b&&["ytp-prev-button","ytp-next-button"].some(function(a){return g.po(b,a)})?(c=12,a.style.top=12+(e||0)+"px"):(c-=d.width/2,a.style.bottom=25+(e||0)+"px");
a.style.left=g.Cd(c,0,f-d.width)+"px"};
g.h.showControls=function(){};
g.h.Mq=function(){};
g.h.Ch=function(){};g.r(Z3,g.eK);Z3.prototype.init=function(){};
Z3.prototype.load=function(){this.player.hideControls();this.g.show()};
Z3.prototype.unload=function(){this.player.showControls();this.g.hide()};g.rU.miniplayer=Z3;})(_yt_player);
