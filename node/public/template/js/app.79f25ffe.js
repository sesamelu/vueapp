(function(t){function e(e){for(var a,r,o=e[0],c=e[1],u=e[2],l=0,d=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},i={app:0},s=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d22c713":"a11ab670","chunk-58661c76":"ea6b33cd","chunk-7feccd75":"7289767b"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-58661c76":1,"chunk-7feccd75":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-2d22c713":"31d6cfe0","chunk-58661c76":"94f9931c","chunk-7feccd75":"7694545c"}[t]+".css",i=c.p+a,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===a||l===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[t],f.parentNode.removeChild(f),n(s)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}i[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"0471":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home__list"},[n("ul",t._l(t.listData,(function(e){return n("li",{key:e._id},[n("router-link",{attrs:{to:"/detail/"+e._id+"?dataName="+t.dataName}},[n("img",{attrs:{src:t.server.baseUrl+e.detail.detailbanner[0].pic}}),n("div",{staticClass:"canshu"},[n("p",[t._v(t._s(e.title))]),n("p",{staticClass:"price"},[t._v(t._s(t._f("fillzero")(e.price)))]),n("p",[t._v("销量:"),n("span",[t._v(t._s(t._f("data")(e.sales)))])])])]),n("div",{staticClass:"car_icon"},[n("a",{attrs:{href:"javascript:;"},on:{click:function(n){return t.ADD_ITEM(e)}}},[n("img",{attrs:{src:"/img/footer03b.png"}})])])],1)})),0)])},r=[],i=n("2f62"),s=(n("8add"),{props:["listData","dataName"],methods:Object(i["b"])(["ADD_ITEM"])}),o=s,c=(n("477a"),n("2877")),u=Object(c["a"])(o,a,r,!1,null,"0684423e",null);e["a"]=u.exports},"1f09":function(t,e,n){},"206e":function(t,e,n){"use strict";var a=n("f63a"),r=n.n(a);r.a},"338f":function(t,e,n){},4224:function(t,e){t.exports={baseUrl:"http://144.34.198.192:3000"}},4740:function(t,e,n){"use strict";var a=n("338f"),r=n.n(a);r.a},"477a":function(t,e,n){"use strict";var a=n("99e2"),r=n.n(a);r.a},5143:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Loading",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.bLoading,expression:"$store.state.bLoading"}]}),n("Header",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.bHeader,expression:"$store.state.bHeader"}]}),n("keep-alive",[n("router-view")],1),n("Footer",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.bFooter,expression:"$store.state.bFooter"}]})],1)},i=[],s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-top"},[n("header",{staticClass:"cc"},[n("div",{staticClass:"search"},[n("input",{staticClass:"txt",attrs:{type:"text"}})])]),n("div",{staticClass:"header"})])}],c=(n("fc60"),n("2877")),u={},l=Object(c["a"])(u,s,o,!1,null,"14e09d78",null),d=l.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-bottom"},[n("div",{staticClass:"footer"}),n("footer",[n("ul",[n("router-link",{attrs:{to:"/home","active-class":"active",tag:"li"}},[n("i",{staticClass:"i1"}),n("span",[t._v("首页")])]),n("router-link",{attrs:{to:"/classify","active-class":"active",tag:"li"}},[n("i",{staticClass:"i2"}),n("span",[t._v("分类")])]),n("router-link",{attrs:{to:"/shopcar","active-class":"active",tag:"li"}},[n("i",{staticClass:"i3"}),n("span",[t._v("购物车")])]),n("router-link",{attrs:{to:"/user","active-class":"active",tag:"li"}},[n("i",{staticClass:"i4"}),n("span",[t._v("我的")])])],1)])])},p=[],v=(n("b9bb"),{}),m=Object(c["a"])(v,f,p,!1,null,"7da58a11",null),h=m.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"preloader_6"}},[n("span"),n("span"),n("span"),n("span")])}],_=(n("eb8a"),{}),E=Object(c["a"])(_,b,g,!1,null,"75080efb",null),w=E.exports,y=n("6e87"),O=(n("456d"),n("ac6a"),function(t){return t+"件"}),x=function(t){return"￥"+t},C={data:O,fillzero:x};Object.keys(C).forEach((function(t){a["a"].filter(t,C[t])}));var k={data:function(){return{}},mounted:function(){},methods:{checkPath:function(t){/home|classify|shopcar|\//.test(t)&&(this.$store.dispatch(y["m"],!0),this.$store.dispatch(y["l"],!0)),/user/.test(t)&&(this.$store.dispatch(y["m"],!1),this.$store.dispatch(y["l"],!0)),/detail|reg|login/.test(t)&&(this.$store.dispatch(y["m"],!1),this.$store.dispatch(y["l"],!1))}},watch:{$route:{handler:function(t,e){this.checkPath(t.path)},immediate:!0,deep:!0}},name:"app",components:{Header:d,Footer:h,Loading:w}},j=k,T=(n("034f"),Object(c["a"])(j,r,i,!1,null,null,null)),$=T.exports,D=(n("bfc7"),n("5143"),n("8e6e"),n("bd86")),L=n("8c4f"),A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Slider",{attrs:{"banner-data":this.$store.state.banner,"data-name":"banner"}}),n("List",{attrs:{"list-data":this.$store.state.home,"data-name":"home"}})],1)},P=[],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner"},[n("ul",t._l(t.bannerData,(function(e){return n("router-link",{key:e._id,attrs:{to:"/detail/"+e._id+"?dataName="+t.dataName,tag:"li"}},[n("img",{attrs:{src:t.server.baseUrl+e.banner,alt:""}}),n("div",{staticClass:"text-box"},[n("h2",[t._v(t._s(e.sub_title))])])])})),1)])},I=[],M=n("1157"),S=n.n(M);n("c5f6");function H(t,e){var n=function(){},a=function(t){setTimeout(t||n,0)},r={addEventListener:!!window.addEventListener,touch:"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,transitions:function(t){var e=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var n in e)if(void 0!==t.style[e[n]])return!0;return!1}(document.createElement("swipe"))};if(t){var i,s,o,c,u=t.children[0];e=e||{};var l=parseInt(e.startSlide,10)||0,d=e.speed||300;e.continuous=void 0===e.continuous||e.continuous;var f,p,v=e.auto||0,m={},h={},b={handleEvent:function(t){switch(t.type){case"touchstart":this.start(t);break;case"touchmove":this.move(t);break;case"touchend":a(this.end(t));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":a(this.transitionEnd(t));break;case"resize":a(g);break}e.stopPropagation&&t.stopPropagation()},start:function(t){var e=t.touches[0];m={x:e.pageX,y:e.pageY,time:+new Date},p=void 0,h={},u.addEventListener("touchmove",this,!1),u.addEventListener("touchend",this,!1)},move:function(t){if(!(t.touches.length>1||t.scale&&1!==t.scale)){e.disableScroll&&t.preventDefault();var n=t.touches[0];h={x:n.pageX-m.x,y:n.pageY-m.y},"undefined"==typeof p&&(p=!!(p||Math.abs(h.x)<Math.abs(h.y))),p||(t.preventDefault(),j(),e.continuous?(x(w(l-1),h.x+s[w(l-1)],0),x(l,h.x+s[l],0),x(w(l+1),h.x+s[w(l+1)],0)):(h.x=h.x/(!l&&h.x>0||l==i.length-1&&h.x<0?Math.abs(h.x)/o+1:1),x(l-1,h.x+s[l-1],0),x(l,h.x+s[l],0),x(l+1,h.x+s[l+1],0)))}},end:function(t){var n=+new Date-m.time,a=Number(n)<250&&Math.abs(h.x)>20||Math.abs(h.x)>o/2,r=!l&&h.x>0||l==i.length-1&&h.x<0;e.continuous&&(r=!1);var c=h.x<0;p||(a&&!r?(c?(e.continuous?(O(w(l-1),-o,0),O(w(l+2),o,0)):O(l-1,-o,0),O(l,s[l]-o,d),O(w(l+1),s[w(l+1)]-o,d),l=w(l+1)):(e.continuous?(O(w(l+1),o,0),O(w(l-2),-o,0)):O(l+1,o,0),O(l,s[l]+o,d),O(w(l-1),s[w(l-1)]+o,d),l=w(l-1)),e.callback&&e.callback(l,i[l])):e.continuous?(O(w(l-1),-o,d),O(l,0,d),O(w(l+1),o,d)):(O(l-1,-o,d),O(l,0,d),O(l+1,o,d))),u.removeEventListener("touchmove",b,!1),u.removeEventListener("touchend",b,!1)},transitionEnd:function(t){parseInt(t.target.getAttribute("data-index"),10)==l&&(v&&k(),e.transitionEnd&&e.transitionEnd.call(t,l,i[l]))}};return g(),v&&k(),r.addEventListener?(r.touch&&u.addEventListener("touchstart",b,!1),r.transitions&&(u.addEventListener("webkitTransitionEnd",b,!1),u.addEventListener("msTransitionEnd",b,!1),u.addEventListener("oTransitionEnd",b,!1),u.addEventListener("otransitionend",b,!1),u.addEventListener("transitionend",b,!1)),window.addEventListener("resize",b,!1)):window.onresize=function(){g()},{setup:function(){g()},slide:function(t,e){j(),y(t,e)},prev:function(){j(),_()},next:function(){j(),E()},stop:function(){j()},getPos:function(){return l},getNumSlides:function(){return c},kill:function(){j(),u.style.width="",u.style.left="";var t=i.length;while(t--){var e=i[t];e.style.width="",e.style.left="",r.transitions&&x(t,0,0)}r.addEventListener?(u.removeEventListener("touchstart",b,!1),u.removeEventListener("webkitTransitionEnd",b,!1),u.removeEventListener("msTransitionEnd",b,!1),u.removeEventListener("oTransitionEnd",b,!1),u.removeEventListener("otransitionend",b,!1),u.removeEventListener("transitionend",b,!1),window.removeEventListener("resize",b,!1)):window.onresize=null}}}function g(){i=u.children,c=i.length,i.length<2&&(e.continuous=!1),r.transitions&&e.continuous&&i.length<3&&(u.appendChild(i[0].cloneNode(!0)),u.appendChild(u.children[1].cloneNode(!0)),i=u.children),s=new Array(i.length),o=t.getBoundingClientRect().width||t.offsetWidth,u.style.width=i.length*o+"px";var n=i.length;while(n--){var a=i[n];a.style.width=o+"px",a.setAttribute("data-index",n),r.transitions&&(a.style.left=n*-o+"px",O(n,l>n?-o:l<n?o:0,0))}e.continuous&&r.transitions&&(O(w(l-1),-o,0),O(w(l+1),o,0)),r.transitions||(u.style.left=l*-o+"px"),t.style.visibility="visible"}function _(){e.continuous?y(l-1):l&&y(l-1)}function E(){e.continuous?y(l+1):l<i.length-1&&y(l+1)}function w(t){return(i.length+t%i.length)%i.length}function y(t,n){if(l!=t){if(r.transitions){var c=Math.abs(l-t)/(l-t);if(e.continuous){var u=c;c=-s[w(t)]/o,c!==u&&(t=-c*i.length+t)}var f=Math.abs(l-t)-1;while(f--)O(w((t>l?t:l)-f-1),o*c,0);t=w(t),O(l,o*c,n||d),O(t,0,n||d),e.continuous&&O(w(t-c),-o*c,0)}else t=w(t),C(l*-o,t*-o,n||d);l=t,a(e.callback&&e.callback(l,i[l]))}}function O(t,e,n){x(t,e,n),s[t]=e}function x(t,e,n){var a=i[t],r=a&&a.style;r&&(r.webkitTransitionDuration=r.MozTransitionDuration=r.msTransitionDuration=r.OTransitionDuration=r.transitionDuration=n+"ms",r.webkitTransform="translate("+e+"px,0)translateZ(0)",r.msTransform=r.MozTransform=r.OTransform="translateX("+e+"px)")}function C(t,n,a){if(a)var r=+new Date,s=setInterval((function(){var o=+new Date-r;if(o>a)return u.style.left=n+"px",v&&k(),e.transitionEnd&&e.transitionEnd.call(event,l,i[l]),void clearInterval(s);u.style.left=(n-t)*(Math.floor(o/a*100)/100)+t+"px"}),4);else u.style.left=n+"px"}function k(){f=setTimeout(E,v)}function j(){v=0,clearTimeout(f)}}var U,z=H,R={props:["bannerData","dataName"],updated:function(){new z(S()(".banner")[0],{auto:2e3,continuous:!0,stopPropation:!0,callback:function(t,e){S()(".banner ol li").removeClass("active"),S()(".banner ol li").eq(t).addClass("active")}})}},B=R,F=(n("e285"),Object(c["a"])(B,N,I,!1,null,"1dbda146",null)),W=F.exports,q=n("0471"),V={data:function(){return{}},components:{Slider:W,List:q["a"]},activated:function(){this.$store.dispatch("UPDATE_HOME"),this.$store.dispatch("UPDATE_BANNER")}},K=V,G=Object(c["a"])(K,A,P,!1,null,null,null),Y=G.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail"},[t._m(0),n("div",{staticClass:"header"}),t.$store.state.detail.detail?n("div",{staticClass:"banner"},[n("ul",t._l(t.$store.state.detail.detail.detailbanner,(function(e,a){return n("li",{key:a},[n("img",{attrs:{src:t.server.baseUrl+e.pic,alt:""}})])})),0)]):t._e(),t.$store.state.detail.detail?n("div",{staticClass:"detail-content"},[n("p",{staticClass:"title"},[t._v(t._s(t.$store.state.detail.title))]),n("p",{staticClass:"price"},[t._v(t._s(t._f("fillzero")(t.$store.state.detail.price)))]),n("div",{staticClass:"fright"},[n("span",[t._v("运费:"),n("i",[t._v(t._s(t._f("fillzero")(t.$store.state.detail.freight)))])]),t._m(1),n("span",[t._v("销量:"),n("i",[t._v(t._s(t._f("data")(t.$store.state.detail.sales)))])])])]):t._e(),n("div",{staticClass:"footer"}),n("footer",[n("div",{staticClass:"kefubox"},[n("ul",[t._m(2),n("router-link",{attrs:{to:"/shopcar",tag:"li"}},[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"i3"}),n("span",[t._v("购物车")])])]),n("router-link",{attrs:{to:"/home",tag:"li"}},[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"i4"}),n("span",[t._v("店铺")])])])],1)]),n("div",{staticClass:"buybox"},[n("input",{staticClass:"addcar",attrs:{type:"button",value:"加入购物车"},on:{click:function(e){return t.add(t.$store.state.detail)}}}),n("input",{staticClass:"imbuy",attrs:{type:"button",value:"立即购买"}})])])])},X=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("a",{attrs:{href:"javascript:window.history.go(-1)"}},[t._v("<")]),n("span",[t._v("产品详情")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t._v("剩余:"),n("i",[t._v("2000")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"i2"}),n("span",[t._v("客服")])])])}],Z=(n("2f62"),n("8add")),Q={activated:function(){var t=this.$route.params.id,e=this.$route.query.dataName;this.$store.dispatch("UPDATE_DETAIL",{dataName:e,id:t})},deactivated:function(){this.$store.dispatch("DEL_DETAIL",{})},updated:function(){new z(S()(".banner")[0],{auto:2e3,continuous:!0,stopPropation:!0,callback:function(t,e){S()(".banner ol li").removeClass("active"),S()(".banner ol li").eq(t).addClass("active")}})},methods:{add:function(t){1==Z["a"].state.user.err?this.$router.push("/login"):this.$store.dispatch("ADD_ITEM",t)}}},tt=Q,et=(n("206e"),Object(c["a"])(tt,J,X,!1,null,"ce488476",null)),nt=et.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"reg"},[t._m(0),n("div",{staticClass:"header"}),n("div",{attrs:{id:"register"}},[n("form",[n("label",[t._v("手机号：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"txt",attrs:{type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),n("label",[t._v("密码：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"pw",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("label",[t._v(" 昵称：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.nikename,expression:"nikename"}],staticClass:"txt1",attrs:{type:"text"},domProps:{value:t.nikename},on:{input:function(e){e.target.composing||(t.nikename=e.target.value)}}}),n("label",[t._v(" 上传头像：")]),n("input",{attrs:{type:"file",enctyoe:"multipart/form-data",name:"icon",id:"file"}}),n("p",[t._v(t._s(t.mess))]),n("router-link",{attrs:{to:"/reg",tag:"li"}},[n("input",{staticClass:"reg-reg",attrs:{type:"button",value:"注册"},on:{click:t.reg}})]),n("router-link",{attrs:{to:"/login",tag:"li"}},[n("input",{staticClass:"reg-login",attrs:{type:"button",value:"已经有账号了？请登录"}})])],1)])])},rt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("a",{attrs:{href:"javascript:window.history.go(-1)"}},[t._v("<")]),n("span",[t._v("注册")])])}],it={data:function(){return{username:"",password:"",nikename:"",mess:""}},methods:{reg:function(){var t=this,e=document.getElementById("file"),n=new FormData;n.append("username",this.username),n.append("password",this.password),n.append("nikename",this.nikename),n.append("icon",e.files[0]),axios({url:"/api/reg",method:"post",data:n}).then((function(e){1==e.data.err?t.mess=e.data.msg:t.$router.push("/login")}))}}},st=it,ot=(n("7d51"),Object(c["a"])(st,at,rt,!1,null,"4942577f",null)),ct=ot.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[t._m(0),n("div",{staticClass:"header"}),n("div",{attrs:{id:"register"}},[n("form",[n("label",[t._v("手机号：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"txt",attrs:{type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),n("label",[t._v("密码：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"pw",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.save,expression:"save"}],staticClass:"check",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.save)?t._i(t.save,null)>-1:t.save},on:{change:function(e){var n=t.save,a=e.target,r=!!a.checked;if(Array.isArray(n)){var i=null,s=t._i(n,i);a.checked?s<0&&(t.save=n.concat([i])):s>-1&&(t.save=n.slice(0,s).concat(n.slice(s+1)))}else t.save=r}}}),t._v("记住密码")]),n("p",[t._v(t._s(t.mess))]),n("router-link",{attrs:{to:"/login",tag:"li"}},[n("input",{staticClass:"login-login",attrs:{type:"button",value:"登录"},on:{click:t.login}})]),n("router-link",{attrs:{to:"/reg",tag:"li"}},[n("input",{staticClass:"login-reg",attrs:{type:"button",value:"注册"}})])],1)])])},lt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("a",{attrs:{href:"javascript:window.history.go(-1)"}},[t._v("<")]),n("span",[t._v("登录")])])}],dt={data:function(){return{username:"",password:"",save:"",mess:""}},methods:{login:function(){var t=this;this.$store.dispatch("CHECK_USER",{username:this.username,password:this.password,save:this.save}).then((function(e){0==e.err?t.$router.push("/user"):t.mess=e.msg}))}}},ft=dt,pt=(n("4740"),Object(c["a"])(ft,ut,lt,!1,null,"6990cd9e",null)),vt=pt.exports,mt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ht=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"error"},[n("h3",[t._v("404")])])}],bt={},gt=Object(c["a"])(bt,mt,ht,!1,null,null,null),_t=gt.exports;function Et(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function wt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Et(n,!0).forEach((function(e){Object(D["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Et(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}a["a"].use(L["a"]);var yt=function(){return n.e("chunk-2d22c713").then(n.bind(null,"f2f7"))},Ot=function(){return n.e("chunk-7feccd75").then(n.bind(null,"b102"))},xt=[{path:"/home",component:Y},{path:"/classify",component:yt},{path:"/shopcar",component:Ot},{path:"/user",component:function(t){return n.e("chunk-58661c76").then(function(){var e=[n("1a62")];t.apply(null,e)}.bind(this)).catch(n.oe)}},(U={name:"detail",path:"/detail/:id",component:nt},Object(D["a"])(U,"name","detail"),Object(D["a"])(U,"props",(function(t){return wt({id:t.params.id},t.query)})),U),{path:"/reg",component:ct},{path:"/login",component:vt},{path:"/",component:Y},{path:"*",component:_t}],Ct=new L["a"]({routes:xt,scrollBehavior:function(t,e,n){return{x:0,y:0}}}),kt=n("bc3a"),jt=n.n(kt);jt.a.defaults.withCredentials=!0,jt.a.interceptors.request.use((function(t){return Z["a"].dispatch("VIEW_LOADING",!0),t}),(function(t){return Promise.reject(t)})),jt.a.interceptors.response.use((function(t){return Z["a"].dispatch("VIEW_LOADING",!1),t}),(function(t){return Promise.reject(t)})),a["a"].prototype.$axios=jt.a,window.axios=jt.a,a["a"].config.productionTip=!1,a["a"].prototype.server=n("4224");var Tt=window.localStorage.getItem("user"),$t=JSON.parse(Tt);Tt&&Z["a"].commit("CHECK_USER",$t),new a["a"]({data:{},render:function(t){return t($)},router:Ct,store:Z["a"]}).$mount("#app")},"64a9":function(t,e,n){},"6e87":function(t,e,n){"use strict";n.d(e,"n",(function(){return a})),n.d(e,"m",(function(){return r})),n.d(e,"l",(function(){return i})),n.d(e,"k",(function(){return s})),n.d(e,"i",(function(){return o})),n.d(e,"h",(function(){return c})),n.d(e,"j",(function(){return u})),n.d(e,"d",(function(){return l})),n.d(e,"a",(function(){return d})),n.d(e,"g",(function(){return f})),n.d(e,"b",(function(){return p})),n.d(e,"c",(function(){return v})),n.d(e,"e",(function(){return m})),n.d(e,"f",(function(){return h}));var a="VIEW_LOADING",r="VIEW_HEADER",i="VIEW_FOOTER",s="UPDATE_HOME",o="UPDATE_CLASSIFY",c="UPDATE_BANNER",u="UPDATE_DETAIL",l="CHECK_USER",d="ADD_ITEM",f="REMOVE_ITEM",p="CHANGE_ITEM",v="CHECK_ITEM",m="CLEAR_BUYCAR",h="DEL_DETAIL"},"7d51":function(t,e,n){"use strict";var a=n("e16c"),r=n.n(a);r.a},"8add":function(t,e,n){"use strict";var a,r,i=n("2b0e"),s=n("2f62"),o=n("bd86"),c=(n("ac6a"),n("75fc")),u=n("6e87"),l=(a={},Object(o["a"])(a,u["n"],(function(t,e){t.state;var n=t.commit;n(u["n"],e)})),Object(o["a"])(a,u["m"],(function(t,e){t.state;var n=t.commit;n(u["m"],e)})),Object(o["a"])(a,u["l"],(function(t,e){t.state;var n=t.commit;n(u["l"],e)})),Object(o["a"])(a,u["k"],(function(t,e){t.state;var n=t.commit;axios({url:"/api/home",params:{_page:1,_limit:8}}).then((function(t){return n(u["k"],t.data.data)}))})),Object(o["a"])(a,u["i"],(function(t,e){t.state;var n=t.commit;axios({url:"/api/classify",params:{_page:1,_limit:10}}).then((function(t){return n(u["i"],t.data.data)}))})),Object(o["a"])(a,u["h"],(function(t,e){t.state;var n=t.commit;axios({url:"/api/banner",params:{_page:1,_limit:2}}).then((function(t){return n(u["h"],t.data.data)}))})),Object(o["a"])(a,u["j"],(function(t,e){t.state;var n=t.commit,a=e.dataName,r=e.id;axios({url:"/api/".concat(a,"/").concat(r)}).then((function(t){n(u["j"],t.data.data)}))})),Object(o["a"])(a,u["f"],(function(t,e){t.state;var n=t.commit;n(u["f"],{})})),Object(o["a"])(a,u["d"],(function(t,e){t.state;var n=t.commit,a=e.username,r=e.password,i=e.save;return axios({url:"/api/login",data:{username:a,password:r,save:i},method:"post"}).then((function(t){return n(u["d"],t.data),window.localStorage.setItem("user",JSON.stringify(t.data)),{err:t.data.err,msg:t.data.msg}}))})),Object(o["a"])(a,u["a"],(function(t,e){var n=t.state,a=t.commit,r=Object(c["a"])(n.user.data.goods),i=!1;r.forEach((function(t,n){t._id==e._id&&(t.count++,i=!0)})),i||(e.count=1,r.push(e)),a("ADD_ITEM",r)})),Object(o["a"])(a,u["b"],(function(t,e){var n=t.state,a=t.commit;n.user.data.goods.forEach((function(t,n){t._id==e._id&&(t.count+=e.count,t.count<1&&(t.count=1))})),a("CHANGE_ITEM",Object(c["a"])(n.user.data.goods))})),Object(o["a"])(a,u["g"],(function(t,e){var n=t.state,a=t.commit;n.user.data.goods.forEach((function(t,a){t._id==e._id&&(n.user.data.goods.splice(a,1),t.check=!1)})),a("REMOVE_ITEM",Object(c["a"])(n.user.data.goods))})),Object(o["a"])(a,u["c"],(function(t,e){var n=t.state,a=t.commit,r=Object(c["a"])(n.user.data.goods);r.forEach((function(t,n){t.check=1!=e})),a("CHECK_ITEM",r)})),Object(o["a"])(a,u["e"],(function(t){t.state;var e=t.commit;e("CLEAR_BUYCAR",[])})),a),d=(r={},Object(o["a"])(r,u["n"],(function(t,e){return t.bLoading=e})),Object(o["a"])(r,u["m"],(function(t,e){return t.bHeader=e})),Object(o["a"])(r,u["l"],(function(t,e){return t.bFooter=e})),Object(o["a"])(r,u["k"],(function(t,e){return t.home=e})),Object(o["a"])(r,u["h"],(function(t,e){return t.banner=e})),Object(o["a"])(r,u["i"],(function(t,e){return t.classify=e})),Object(o["a"])(r,u["j"],(function(t,e){return t.detail=e})),Object(o["a"])(r,u["d"],(function(t,e){return t.user=e})),Object(o["a"])(r,u["a"],(function(t,e){return t.user.data.goods=e})),Object(o["a"])(r,u["g"],(function(t,e){return t.user.data.goods=e})),Object(o["a"])(r,u["b"],(function(t,e){return t.user.data.goods=e})),Object(o["a"])(r,u["c"],(function(t,e){return t.user.data.goods=e})),Object(o["a"])(r,u["e"],(function(t,e){return t.user.data.goods=e})),Object(o["a"])(r,u["f"],(function(t,e){return t.detail=e})),r),f={bLoading:!1,bHeader:!0,bFooter:!0,home:[],banner:[],classify:[],user:{err:1,msg:"未登录",data:{good:[]}},detail:{},goods:[]},p=n("94d5"),v=n.n(p);i["a"].use(s["a"]);e["a"]=new s["a"].Store({actions:l,mutations:d,state:f,getters:v.a})},"8d44":function(t,e,n){},"94d5":function(t,e){},"99e2":function(t,e,n){},b9bb:function(t,e,n){"use strict";var a=n("d244"),r=n.n(a);r.a},bfc7:function(t,e){(function(t,e){var n=t.documentElement,a="orientationchange"in window?"orientationchange":"resize",r=function(){var t=n.clientWidth;t>=750&&(t=750),t&&(n.style.fontSize=t/750*100+"px")};t.addEventListener&&(e.addEventListener(a,r,!1),t.addEventListener("DOMContentLoaded",r,!1))})(document,window)},d244:function(t,e,n){},e16c:function(t,e,n){},e285:function(t,e,n){"use strict";var a=n("f8f3"),r=n.n(a);r.a},eb8a:function(t,e,n){"use strict";var a=n("1f09"),r=n.n(a);r.a},f63a:function(t,e,n){},f8f3:function(t,e,n){},fc60:function(t,e,n){"use strict";var a=n("8d44"),r=n.n(a);r.a}});
//# sourceMappingURL=app.79f25ffe.js.map