(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0jh0":function(e,n){e.exports=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},"1RYp":function(e,n,t){var r=t("QU3x"),o=t("FlY1");e.exports=Object.keys||function(e){return r(e,o)}},"48MS":function(e,n,t){var r=t("bmrq");e.exports=Array.isArray||function(e){return"Array"==r(e)}},"5AIy":function(e,n,t){"use strict";t.r(n);t("bNlK"),t("LOWo");var r=t("9Hrx"),o=t("q1tI"),i=t.n(o),a=t("8k0H"),c=t("QmZb"),u=t("vOnD"),l=t("QS3V"),d=t("SXSQ"),s=(t("A3CJ"),t("XTLl")),f=Object(u.d)(["0%{content:'';}33%{content:'.';}67%{content:'..';}100%{content:'...';}"]),p=u.c.div.withConfig({displayName:"Image__Text",componentId:"dqrs7o-0"})(["margin:",";font-size:1em;"],s.d.padding.container),m=Object(u.c)(p).withConfig({displayName:"Image__LoadingText",componentId:"dqrs7o-1"})(["&::before{content:'Loading';}&::after{content:'';animation:"," 1s ease infinite alternate;}"],f),h=t("7bsl"),b=Object(u.b)(["margin:0.25em;font-size:1rem;font-weight:normal;"]),v=Object(u.b)(["position:absolute;left:0;top:0;width:100%;min-height:100%;"]),g=u.c.div.withConfig({displayName:"YouTubeVideo__VideoWrapper",componentId:"sc-7hva8-0"})(["display:inline-block;align-items:center;margin:",";width:",";max-width:calc(100vw - ("," * 4));"],s.d.padding.container,s.d.width.player,s.d.padding.container),y=Object(u.c)(l.c).withConfig({displayName:"YouTubeVideo__VideoContainer",componentId:"sc-7hva8-1"})(["position:relative;padding:0;width:100%;padding-top:","%;"],56.25),w=u.c.div.withConfig({displayName:"YouTubeVideo__InfoContainer",componentId:"sc-7hva8-2"})(["",";display:inline-flex;flex-direction:column;justify-content:center;align-items:center;"],v),O=Object(u.c)(m).withConfig({displayName:"YouTubeVideo__LoadingText",componentId:"sc-7hva8-3"})(["",";"],b),j=u.c.p.withConfig({displayName:"YouTubeVideo__ErrorText",componentId:"sc-7hva8-4"})(["margin:0;font-size:",";font-weight:bold;&::before{",";content:'Video could not be loaded';display:block;}"],s.c.sizes[14],b),C=u.c.div.withConfig({displayName:"YouTubeVideo__VideoThumbnailContainer",componentId:"sc-7hva8-5"})(["position:absolute;top:0;left:0;display:flex;justify-content:center;align-items:center;width:100%;height:100%;will-change:contents;"]),x=Object(u.c)(d.a).withConfig({displayName:"YouTubeVideo__PlayIcon",componentId:"sc-7hva8-6"})(["pointer-events:none;position:absolute;width:25%;fill:",";opacity:",";"],s.a.secondary,s.f.primary),S=u.c.input.attrs({type:"image"}).withConfig({displayName:"YouTubeVideo__VideoThumbnail",componentId:"sc-7hva8-7"})(["",";cursor:pointer;top:auto;left:auto;filter:brightness(",");",";will-change:filter,transform;&:hover{filter:brightness(",") ",";transform:",";}"],v,s.f.secondary,s.h.set("filter","transform"),s.f.primary,s.b.blurScale.blur,s.b.blurScale.scale),E=u.c.iframe.attrs({frameBorder:0,allowFullScreen:!0}).withConfig({displayName:"YouTubeVideo__VideoEmbed",componentId:"sc-7hva8-8"})(["",";",";height:100%;"],v,(function(e){return"background: url("+e.thumbnail+") center/cover no-repeat;"})),I=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))||this).state={play:!1},n.playVideo=function(){return n.setState({play:!0})},n.renderLoading=function(){return i.a.createElement(w,null,i.a.createElement(O,null))},n.renderError=function(){return i.a.createElement(w,null,i.a.createElement(j,null,""+n.props.error))},n.renderThumbnail=function(){var e=n.props.video,t=e.title,r=e.thumbnail;return i.a.createElement(C,null,i.a.createElement(S,{hidden:n.state.play,src:r,alt:t,title:t,onClick:n.playVideo}),i.a.createElement(x,null,Object(h.a)("play")))},n.renderVideo=function(){var e=n.props.video,t=e.title,r=e.thumbnail,o=e.content,a=n.state.play?1:0;return i.a.createElement(E,{title:t,thumbnail:r,src:o+"?autoplay="+a})},n.renderContent=function(){var e=n.props,t=e.isLoading,r=e.video;return t?n.renderLoading():null!==r?i.a.createElement("div",null,n.state.play?n.renderVideo():n.renderThumbnail()):n.renderError()},n.render=function(){return i.a.createElement(g,n.props,i.a.createElement(y,null,n.renderContent()))},n}return Object(r.a)(n,e),n}(o.Component);I.defaultProps={video:null,error:null};var _=I,P=(t("RUBk"),t("J77C")),T=P.social,L=P.metadata.label,k="https://www.youtube.com/feeds/videos.xml?channel_id=",A="https://www.youtube.com/embed/",V=function(e){var n=document.createElement("a");return n.href=e,n.pathname.split("/").pop()},N=function(){return T.find((function(e){return"youtube"===e.id})).links.map((function(e){return V(e)}))},Y=function(){var e=["https://cors-anywhere.herokuapp.com/","https://cors.io/?"];return N().map((function(e){return""+k+e})).map((function(n){return fetch(""+e[0]+n)}))},D=function(e){return e.text().then((function(e){return function(e){return Array.from(e.getElementsByTagName("entry")).map((function(e){var n=e.children;return Array.from(n).find((function(e){return"media:group"===e.tagName}))})).map((function(e){var n=e.children;return Array.from(n).reduce((function(e,n){var t;return Object.assign({},e,((t={})[n.localName]=n,t))}),{})})).map((function(e){var n=e.title,t=e.content,r=e.thumbnail,o=V(t.attributes.url.textContent);return{id:o,title:n.textContent,thumbnail:r.attributes.url.textContent,content:""+A+o}}))}((new DOMParser).parseFromString(e,"application/xml").documentElement)}))},z=function(){return Y().map((function(e){return e.then((function(e){return D(e).then((function(e){return e.filter((function(e){return e.title.includes(L)}))}))}))}))},Q=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))||this).state={isLoading:!0,videos:null,error:null},n.componentDidMount=function(){n.mounted=!0,Promise.all(z()).then((function(e){var t=e.flat();n.setStateIfMounted({isLoading:!1,videos:t})})).catch((function(e){n.setStateIfMounted({isLoading:!1,error:e})}))},n.componentWillUnmount=function(){n.mounted=!1},n.setStateIfMounted=function(e){n.mounted&&n.setState(e)},n.mounted=!1,n.render=function(){var e=n.state,t=e.isLoading,r=e.videos,o=e.error;return i.a.createElement(c.a,null,null===r?i.a.createElement(_,n.state):r.map((function(e){var n=e.id,r=e.title,a=e.thumbnail,c=e.content,u={isLoading:t,error:o,video:{title:r,thumbnail:a,content:c}};return i.a.createElement(_,Object.assign({key:n},u))})))},n}return Object(r.a)(n,e),n}(o.Component);n.default=function(e){var n=e.children,t=e.location;return i.a.createElement(a.a,{children:n,location:t},i.a.createElement(Q,null))}},"86Yh":function(e,n,t){var r=t("ckLD"),o=t("48MS"),i=t("QD2z")("species");e.exports=function(e,n){var t;return o(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!o(t.prototype)?r(t)&&null===(t=t[i])&&(t=void 0):t=void 0),new(void 0===t?Array:t)(0===n?0:n)}},A3CJ:function(e,n,t){t("RUBk"),function(e,n,t,r){"use strict";function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n,t=1;t<arguments.length;t++)n=null==arguments[t]?{}:arguments[t],t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}function a(e){var n=e.srcList,r=e.imgPromise,o=void 0===r?u({decode:!0}):r,a=e.useSuspense,c=void 0===a||a,p=t.useState(!0)[1],m=l(d(n)),h=m.join("");if(s[h]||(s[h]={promise:f(m,o),cache:"pending",error:null}),s[h].promise.then((function(e){s[h]=i(i({},s[h]),{},{cache:"resolved",src:e}),c||p(!1)})).catch((function(e){s[h]=i(i({},s[h]),{},{cache:"rejected",error:e}),c||p(!1)})),"resolved"===s[h].cache)return{src:s[h].src,isLoading:!1,error:null};if("rejected"===s[h].cache){if(c)throw s[h].error;return{isLoading:!1,error:s[h].error,src:void 0}}if(c)throw s[h].promise;return{isLoading:!0,src:void 0,error:null}}n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;var c="default"in t?t.default:t;r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r;var u=function(e){var n=e.decode,t=e.crossOrigin,r=void 0===t?"":t;return function(e){return new Promise((function(t,o){var i=new Image;r&&(i.crossOrigin=r),i.onload=function(){void 0===n||n?i.decode().then(t).catch(o):t()},i.onerror=o,i.src=e}))}},l=function(e){return e.filter((function(e){return e}))},d=function(e){return Array.isArray(e)?e:[e]},s={},f=function(e,n){var t=!1;return new Promise((function(r,o){var i=function(e){return n(e).then((function(){t=!0,r(e)}))};e.reduce((function(e,n){return e.catch((function(){if(!t)return i(n)}))}),i(e.shift())).catch(o)}))},p=function(e){return e};e.Img=function(e){var t=e.decode,r=e.src,o=void 0===r?[]:r,i=e.loader,l=void 0===i?null:i,d=e.unloader,s=void 0===d?null:d,f=e.container,m=void 0===f?p:f,h=e.loaderContainer,b=void 0===h?p:h,v=e.unloaderContainer,g=void 0===v?p:v,y=e.imgPromise,w=e.crossorigin,O=e.useSuspense,j=void 0!==O&&O,C=n(e,["decode","src","loader","unloader","container","loaderContainer","unloaderContainer","imgPromise","crossorigin","useSuspense"]),x=a({srcList:o,imgPromise:y=y||u({decode:!(void 0!==t)||t,crossOrigin:w}),useSuspense:j}),S=x.src,E=x.isLoading;return S?m(c.createElement("img",Object.assign({src:S},C))):!j&&E?b(l):!j&&s?g(s):null},e.useImage=a,Object.defineProperty(e,"__esModule",{value:!0})}(n,t("uDP2"),t("q1tI"),t("0jh0"))},AAQS:function(e,n,t){"use strict";var r=t("48MS"),o=t("WD+B"),i=t("ehR5"),a=function(e,n,t,c,u,l,d,s){for(var f,p=u,m=0,h=!!d&&i(d,s,3);m<c;){if(m in t){if(f=h?h(t[m],m,n):t[m],l>0&&r(f))p=a(e,n,f,o(f.length),p,l-1)-1;else{if(p>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[p]=f}p++}m++}return p};e.exports=a},Km5v:function(e,n,t){var r,o=t("m/aQ"),i=t("OKd1"),a=t("FlY1"),c=t("HIFH"),u=t("gbZP"),l=t("C2zU"),d=t("uFM1"),s=d("IE_PROTO"),f=function(){},p=function(e){return"<script>"+e+"<\/script>"},m=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(o){}var e,n;m=r?function(e){e.write(p("")),e.close();var n=e.parentWindow.Object;return e=null,n}(r):((n=l("iframe")).style.display="none",u.appendChild(n),n.src=String("javascript:"),(e=n.contentWindow.document).open(),e.write(p("document.F=Object")),e.close(),e.F);for(var t=a.length;t--;)delete m.prototype[a[t]];return m()};c[s]=!0,e.exports=Object.create||function(e,n){var t;return null!==e?(f.prototype=o(e),t=new f,f.prototype=null,t[s]=e):t=m(),void 0===n?t:i(t,n)}},LOWo:function(e,n,t){t("uKph")("flat")},OKd1:function(e,n,t){var r=t("IvzW"),o=t("jekk"),i=t("m/aQ"),a=t("1RYp");e.exports=r?Object.defineProperties:function(e,n){i(e);for(var t,r=a(n),c=r.length,u=0;c>u;)o.f(e,t=r[u++],n[t]);return e}},OaLt:function(e,n,t){var r=t("JhOX");e.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},QD2z:function(e,n,t){var r=t("REpN"),o=t("8deY"),i=t("34EK"),a=t("F8ZZ"),c=t("OaLt"),u=t("TuXZ"),l=o("wks"),d=r.Symbol,s=u?d:d&&d.withoutSetter||a;e.exports=function(e){return i(l,e)||(c&&i(d,e)?l[e]=d[e]:l[e]=s("Symbol."+e)),l[e]}},QS3V:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return a}));var r=t("vOnD"),o=t("XTLl"),i=r.c.h3.withConfig({displayName:"Card__Title",componentId:"sc-1xqnb31-0"})(["margin:","em 0;font-size:",";font-weight:bold;text-shadow:0 "," ",";opacity:",";"],.25,o.c.sizes[18],o.d.unit,o.a.primary,o.f.primary),a=r.c.p.withConfig({displayName:"Card__Info",componentId:"sc-1xqnb31-1"})(["margin:0;font-size:",";font-weight:normal;opacity:",";"],o.c.sizes[14],o.f.secondary),c=r.c.div.withConfig({displayName:"Card",componentId:"sc-1xqnb31-2"})(["position:relative;display:inline-block;overflow:hidden;padding:",";border-radius:",";background:",";"," ",";&:hover{","}"],o.d.padding.container,o.d.border.card,o.a.secondary,o.g.box[2],o.h.set("box-shadow"),o.g.box[4]);n.c=c},TuXZ:function(e,n,t){var r=t("OaLt");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},bNlK:function(e,n,t){"use strict";var r=t("ZS3K"),o=t("AAQS"),i=t("17+C"),a=t("WD+B"),c=t("gQbX"),u=t("86Yh");r({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,n=i(this),t=a(n.length),r=u(n,0);return r.length=o(r,n,n,t,0,void 0===e?1:c(e)),r}})},ehR5:function(e,n,t){var r=t("wTlq");e.exports=function(e,n,t){if(r(e),void 0===n)return e;switch(t){case 0:return function(){return e.call(n)};case 1:return function(t){return e.call(n,t)};case 2:return function(t,r){return e.call(n,t,r)};case 3:return function(t,r,o){return e.call(n,t,r,o)}}return function(){return e.apply(n,arguments)}}},gbZP:function(e,n,t){var r=t("jdR/");e.exports=r("document","documentElement")},uKph:function(e,n,t){var r=t("QD2z"),o=t("Km5v"),i=t("jekk"),a=r("unscopables"),c=Array.prototype;null==c[a]&&i.f(c,a,{configurable:!0,value:o(null)}),e.exports=function(e){c[a][e]=!0}}}]);
//# sourceMappingURL=component---src-pages-videos-js-2e1d029a5c3f6bf789b5.js.map