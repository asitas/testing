(function(g){var window=this;var F2=function(a,b,c){var d=b.na();g.K(a.element,"ytp-suggestion-set",!!d.videoId);var e=b.getPlaylistId();c=b.tc(c?c:"mqdefault.jpg");var f=b instanceof g.TA&&b.lengthSeconds?g.GP(b.lengthSeconds):null,k=!!e;e=k&&"RD"==(new g.ED(e.substr(0,2),e.substr(2))).type;var l=b instanceof g.TA?b.sa:null;d={title:b.title,author:b.author,author_and_views:d.shortViewCount?b.author+" \u2022 "+d.shortViewCount:b.author,aria_label:b.Ti||g.AN("Watch $TITLE",{TITLE:b.title}),duration:f,url:b.vj(),is_live:l,is_list:k,
is_mix:e,background:c?"background-image: url("+c+")":""};b instanceof g.GD&&(d.playlist_length=b.getLength());a.update(d)},G2=function(a,b){g.XB.call(this,{C:"div",
W:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.player=a;this.created=!1},H2=function(a){g.S.call(this,{C:"div",
W:["ytp-upnext","ytp-player-content"],L:{"aria-label":"{{aria_label}}"},J:[{C:"div",G:"ytp-cued-thumbnail-overlay-image",L:{style:"{{background}}"}},{C:"span",G:"ytp-upnext-top",J:[{C:"span",G:"ytp-upnext-header",U:"Up Next"},{C:"span",G:"ytp-upnext-title",U:"{{title}}"},{C:"span",G:"ytp-upnext-author",U:"{{author}}"}]},{C:"a",G:"ytp-upnext-autoplay-icon",L:{role:"button",href:"{{url}}","aria-label":"Play next video"},J:[{C:"svg",L:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},J:[{C:"circle",
G:"ytp-svg-autoplay-circle",L:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{C:"circle",G:"ytp-svg-autoplay-ring",L:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{C:"path",G:"ytp-svg-fill",L:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{C:"span",G:"ytp-upnext-bottom",J:[{C:"span",G:"ytp-upnext-cancel"},{C:"span",G:"ytp-upnext-paused",U:"Autoplay is paused"}]}]});
this.A=null;var b=this.i["ytp-upnext-cancel"];this.A=new g.S({C:"button",W:["ytp-upnext-cancel-button","ytp-button"],L:{tabindex:"0","aria-label":"Cancel autoplay"},U:"Cancel"});g.G(this,this.A);this.A.ca("click",this.qH,this);this.A.g(b);this.l=a;this.I=this.i["ytp-svg-autoplay-ring"];this.D=this.B=this.o=this.u=null;this.F=new g.L(this.rl,5E3,this);g.G(this,this.F);this.H=0;this.K(this.i["ytp-upnext-autoplay-icon"],"click",this.jJ);this.Xx();this.K(a,"autonavvisibility",this.Xx);this.K(a,"mdxnowautoplaying",
this.vI);this.K(a,"mdxautoplaycanceled",this.wI);this.K(a,"mdxautoplayupnext",this.tA);3==this.l.getPresentingPlayerType()&&(a=(a=g.DJ(g.xJ(this.l)))?a.wC():null)&&this.tA(a)},I2=function(a,b){if(!a.o){g.kq("a11y-announce","Up Next "+a.u.title);
a.H=g.O();a.o=new g.L((0,g.y)(a.uo,a,b),25);a.uo(b);var c=b||g.Q(g.V(a.l).experiments,"autoplay_time")||1E4;a.l.la("onAutonavCoundownStarted",c)}g.ro(a.element,"ytp-upnext-autoplay-paused")},K2=function(a){J2(a);
a.H=g.O();a.uo();g.J(a.element,"ytp-upnext-autoplay-paused")},J2=function(a){a.o&&(a.o.dispose(),a.o=null)},L2=function(a,b){b=void 0===b?!1:b;
if(g.P(g.V(a.l).experiments,"autonav_notifications")&&b&&window.Notification&&document.hasFocus){var c=Notification.permission;"default"==c?Notification.requestPermission():"granted"!=c||document.hasFocus()||(c=a.u.na(),a.rl(),a.B=new Notification("Up Next",{body:c.title,icon:c.tc()}),a.D=a.K(a.B,"click",a.bJ),a.F.start())}J2(a);a.l.nextVideo(!1,b)},M2=function(a){G2.call(this,a,"subscribecard-endscreen");
var b=a.getVideoData();this.l=new g.S({C:"div",G:"ytp-subscribe-card",J:[{C:"img",G:"ytp-author-image",L:{src:b.Jd}},{C:"div",G:"ytp-subscribe-card-right",J:[{C:"div",G:"ytp-author-name",U:b.author},{C:"div",G:"html5-subscribe-button-container"}]}]});g.G(this,this.l);this.l.g(this.element);this.o=new g.jV("Subscribe",null,"Unsubscribe",null,!0,!1,b.ph,b.subscribed,"trailer-endscreen",null,null,a);g.G(this,this.o);this.o.g(this.l.i["html5-subscribe-button-container"]);this.hide()},N2=function(a){var b=
g.V(a),c=g.Vw||g.Lh?{style:"will-change: opacity"}:void 0,d=b.i,e=["ytp-videowall-still"];
b.g&&e.push("ytp-videowall-show-text");g.S.call(this,{C:"a",W:e,L:{href:"{{url}}",target:d?b.u:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},J:[{C:"div",G:"ytp-videowall-still-image",L:{style:"{{background}}"}},{C:"span",G:"ytp-videowall-still-info",J:[{C:"span",G:"ytp-videowall-still-info-bg",J:[{C:"span",G:"ytp-videowall-still-info-content",L:c,J:[{C:"span",G:"ytp-videowall-still-info-title",U:"{{title}}"},{C:"span",G:"ytp-videowall-still-info-author",
U:"{{author_and_views}}"},{C:"span",G:"ytp-videowall-still-info-live",U:"Live"},{C:"span",G:"ytp-videowall-still-info-duration",U:"{{duration}}"}]}]}]},{C:"span",W:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],J:[{C:"span",G:"ytp-videowall-still-listlabel-icon"},"Playlist",{C:"span",G:"ytp-videowall-still-listlabel-length",J:[" (",{C:"span",U:"{{playlist_length}}"},")"]}]},{C:"span",W:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],J:[{C:"span",G:"ytp-videowall-still-listlabel-mix-icon"},
"Mix",{C:"span",G:"ytp-videowall-still-listlabel-length",U:" (50+)"}]}]});this.A=d;this.l=a;this.o=null;this.u=new g.bs(this);g.G(this,this.u);this.ca("click",this.D);this.ca("keypress",this.F);this.u.K(a,"videodatachange",this.B);g.V(a).D&&g.NK(a.app.O,this.element,this);this.B()},O2=function(a){g.VJ(a.l,a.element);
var b=a.o.na().videoId,c=a.o.getPlaylistId();g.tX(a.l.app,b,a.o.Yc,c,void 0,void 0,void 0)},P2=function(a){G2.call(this,a,"videowall-endscreen");
this.H=a;this.B=0;this.o=[];this.D=this.u=this.A=null;this.F=this.V=!1;this.O=null;this.ba=new g.bs(this);g.G(this,this.ba);this.I=new g.L(g.Wa(g.J,this.element,"ytp-show-tiles"),0);g.G(this,this.I);var b=new g.S({C:"button",W:["ytp-button","ytp-endscreen-previous"],L:{"aria-label":"Previous"},J:[g.LO()]});g.G(this,b);b.g(this.element);b.ca("click",this.TE,this);this.N=new g.SB({C:"div",G:"ytp-endscreen-content"});g.G(this,this.N);this.N.g(this.element);b=new g.S({C:"button",W:["ytp-button","ytp-endscreen-next"],
L:{"aria-label":"Next"},J:[g.MO()]});g.G(this,b);b.g(this.element);b.ca("click",this.SE,this);this.l=new H2(a);g.G(this,this.l);g.SJ(this.player,this.l.element,4);this.hide()},Q2=function(a){return g.TJ(a.player)&&a.Zt()&&!a.D},R2=function(a,b){return(0,g.D)(b.suggestions,function(b){b=g.nR(g.V(a.H),b);
g.G(a,b);return b})},S2=function(a){var b=a.He();
b!=a.V&&(a.V=b,a.player.M("autonavvisibility"))},U2=function(a){g.eK.call(this,a);
this.g=null;this.i=new g.bs(this);g.G(this,this.i);this.l=g.V(a);T2(a)?this.g=new P2(this.player):this.l.Ga?this.g=new M2(this.player):this.g=new G2(this.player);g.G(this,this.g);g.SJ(this.player,this.g.element,4);this.pz();this.i.K(a,"videodatachange",this.pz,this);this.i.K(a,g.DD("endscreen"),this.jE,this);this.i.K(a,"crx_endscreen",this.kE,this)},T2=function(a){a=g.V(a);
return a.Fa&&!a.Ga};
g.r(G2,g.XB);G2.prototype.create=function(){this.created=!0};
G2.prototype.destroy=function(){this.created=!1};
G2.prototype.Zt=function(){return!1};
G2.prototype.He=function(){return!1};g.r(H2,g.S);g.h=H2.prototype;g.h.rl=function(){this.B&&(this.F.stop(),this.Na(this.D),this.D=null,this.B.close(),this.B=null)};
g.h.Xx=function(){g.WB(this,this.l.He())};
g.h.bJ=function(){window.focus();this.rl()};
g.h.hide=function(){g.S.prototype.hide.call(this)};
g.h.uo=function(a){a=a||g.Q(g.V(this.l).experiments,"autoplay_time")||1E4;var b=Math.min(g.O()-this.H,a);a=Math.min(b/a,1);this.I.setAttribute("stroke-dashoffset",-211*(a+1));1<=a&&3!=this.l.getPresentingPlayerType()?L2(this,!0):this.o&&this.o.start()};
g.h.jJ=function(a){!g.oe(this.A.element,g.Rr(a))&&g.qR(a,this.l)&&L2(this)};
g.h.qH=function(){g.zJ(this.l,!0)};
g.h.vI=function(a){this.l.getPresentingPlayerType();this.show();I2(this,a)};
g.h.tA=function(a){this.l.getPresentingPlayerType();this.u&&this.u.na().videoId==a.na().videoId||(this.u=a,F2(this,a,"hqdefault.jpg"))};
g.h.wI=function(){this.l.getPresentingPlayerType();J2(this);this.hide()};
g.h.R=function(){J2(this);this.rl();g.S.prototype.R.call(this)};g.r(M2,G2);g.r(N2,g.S);N2.prototype.D=function(a){g.qR(a,this.l,this.A,this.o.Yc||void 0)&&O2(this)};
N2.prototype.F=function(a){switch(a.keyCode){case 13:case 32:g.Wr(a)||(O2(this),g.Vr(a))}};
N2.prototype.B=function(){var a=this.l.getVideoData(),b=g.V(this.l);this.A=a.Xb?!1:b.i};g.r(P2,G2);g.h=P2.prototype;g.h.create=function(){G2.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.A=R2(this,a),this.u=a);this.zf();this.ba.K(this.player,"appresize",this.zf);this.ba.K(this.player,"onVideoAreaChange",this.zf);this.ba.K(this.player,"videodatachange",this.UE);this.ba.K(this.player,"autonavchange",this.Jq);this.ba.K(this.player,"autonavcancel",this.RE);a=this.u.autonavState;a!=this.O&&this.Jq(a);this.ba.K(this.element,"transitionend",this.zK)};
g.h.destroy=function(){g.ds(this.ba);g.Cf(this.o);this.o=[];this.A=null;G2.prototype.destroy.call(this);g.ro(this.element,"ytp-show-tiles");this.I.stop();this.O=this.u.autonavState};
g.h.Zt=function(){return 1!=this.u.autonavState};
g.h.show=function(){G2.prototype.show.call(this);g.ro(this.element,"ytp-show-tiles");g.V(this.player).g?g.Bo(this.I):this.I.start();(this.F||this.D&&this.D!=this.u.clientPlaybackNonce)&&g.zJ(this.player,!1);Q2(this)?(S2(this),2==this.u.autonavState?g.P(g.V(this.player).experiments,"fast_autonav_in_background")&&3==this.player.getVisibilityState()?L2(this.l,!0):I2(this.l):3==this.u.autonavState&&K2(this.l)):(g.zJ(this.player,!0),S2(this))};
g.h.hide=function(){G2.prototype.hide.call(this);K2(this.l);S2(this)};
g.h.zK=function(a){g.Rr(a)==this.element&&this.zf()};
g.h.zf=function(){if(this.A&&this.A.length){g.J(this.element,"ytp-endscreen-paginate");var a=g.JJ(this.H,!0),b=g.lC(this.H);b&&(b=b.wc()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),k=Math.max(a.height/54,2),l=this.A.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<k);){var q=b/2,u=e/2,x=b<=f-2&&n>=u*m,C=e<=k-2&&n>=q*m;if((q+1)/u*d/c>c/(q/(u+1)*d)&&C)n-=q*m,e+=2;else if(x)n-=u*m,b+=2;else if(C)n-=q*m,e+=2;else break}d=
!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m*=c;n*=c;m*=g.Cd(a.width/m||1,1,1.21);n*=g.Cd(a.height/n||1,1,1.21);m=Math.floor(Math.min(a.width,m));n=Math.floor(Math.min(a.height,n));a=this.N.element;g.$h(a,m,n);g.Ih(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});c=this.l;f=this.A[0];c.u=f;F2(c,f,"hqdefault.jpg");g.K(this.element,"ytp-endscreen-takeover",Q2(this));S2(this);m+=4;n+=4;for(f=c=0;f<b;f++)for(k=0;k<e;k++)if(q=c,u=0,d&&f>=b-2&&k>=e-
2?u=1:0==k%2&&0==f%2&&(2>k&&2>f?0==k&&0==f&&(u=2):u=2),q=g.Dd(q+this.B,l),0!=u){x=this.o[c];x||(x=new N2(this.player),this.o[c]=x,a.appendChild(x.element));C=Math.floor(n*k/e);var F=Math.floor(m*f/b),H=Math.floor(n*(k+u)/e)-C-4,T=Math.floor(m*(f+u)/b)-F-4;g.Qh(x.element,F,C);g.$h(x.element,T,H);g.Ih(x.element,"transitionDelay",(k+f)/20+"s");g.K(x.element,"ytp-videowall-still-mini",1==u);g.K(x.element,"ytp-videowall-still-large",2<u);u=x;q=this.A[q];u.o!=q&&(u.o=q,F2(u,q,g.po(u.element,"ytp-videowall-still-large")?
"hqdefault.jpg":"mqdefault.jpg"),q=(q=q.Yc)&&q.itct)&&(x=u.l,g.V(x).D&&g.OK(x.app.O,u.element,q));c++}g.K(this.element,"ytp-endscreen-paginate",c<l);for(b=this.o.length-1;b>=c;b--)e=this.o[b],g.ke(e.element),g.Bf(e);this.o.length=c}};
g.h.UE=function(){var a=this.player.getVideoData();this.u!=a&&(this.B=0,this.A=R2(this,a),this.u=a,this.zf())};
g.h.SE=function(){this.B+=this.o.length;this.zf()};
g.h.TE=function(){this.B-=this.o.length;this.zf()};
g.h.uD=function(){return!!this.l.o};
g.h.Jq=function(a){1==a?(this.F=!1,this.D=this.u.clientPlaybackNonce,J2(this.l),this.Ea()&&this.zf()):(this.F=!0,this.Ea()&&Q2(this)&&(2==a?I2(this.l):3==a&&K2(this.l)))};
g.h.RE=function(a){if(a){for(a=0;a<this.o.length;a++)g.WJ(this.H,this.o[a].element,!0);this.Jq(1)}else this.D=null,this.F=!1;this.zf()};
g.h.He=function(){return this.Ea()&&Q2(this)};g.r(U2,g.eK);g.h=U2.prototype;g.h.wk=function(){var a=this.player.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!T2(this.player)||b;a=a.Hc;var c=g.UW(this.player.app);return b&&!a&&!c};
g.h.He=function(){return this.g.He()};
g.h.qD=function(){return this.He()?this.g.uD():!1};
g.h.R=function(){g.OJ(this.player,"endscreen");g.eK.prototype.R.call(this)};
g.h.load=function(){g.eK.prototype.load.call(this);this.g.show()};
g.h.unload=function(){g.eK.prototype.unload.call(this);this.g.hide();this.g.destroy()};
g.h.jE=function(a){this.wk()&&(this.g.created||this.g.create(),"load"==a.getId()&&this.load())};
g.h.kE=function(a){"load"==a.getId()&&this.loaded&&this.unload()};
g.h.pz=function(){g.OJ(this.player,"endscreen");var a=Math.max(1E3*(this.player.getVideoData().lengthSeconds-10),0);a=new g.AD(a,0x8000000000000,{id:"preload",namespace:"endscreen"});g.G(this,a);var b=new g.AD(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.G(this,b);g.LJ(this.player,[a,b])};g.rU.endscreen=U2;})(_yt_player);
