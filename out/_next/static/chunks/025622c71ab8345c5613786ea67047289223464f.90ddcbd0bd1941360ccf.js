(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),i=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery;return n||o&&(void 0!==i&&i)}t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))}},"5Yp1":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("8Kt/"),a=n.n(i);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=n("YFqc"),l=n.n(c),s=n("nOHt"),f=o.a.createElement;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h={display:"flex",marginRight:"1em"},v={textDecoration:"none",padding:"0.2em 0.4em"},m={fontWeight:"600",color:"#333"},y=function(e){var t=e.href,n=e.title,r=Object(s.useRouter)();return console.log("router",r),f("div",{style:h},f(l.a,{href:t,as:t},f("a",{style:d({},v,{},r.pathname.startsWith(t)?m:{})},n)))},g=o.a.createElement,b={display:"flex",flexDirection:"row",alignItems:"center",backgroundColor:"#f2f2f2",padding:"1em",borderRadius:"0.4em",boxShadow:"0px 0px 30px 0px rgba(100, 100, 100, 0.5)"},w={display:"flex",alignItems:"center",justifyContent:"center",marginRight:"1em",borderRadius:"1.5em",height:"2em",width:"2em",fontSize:"1.4em",backgroundColor:"#fefefe"},O=["\ud83e\uddbe","\ud83c\udfb8","\ud83e\udd26\ud83c\udffb\u200d\u2642\ufe0f","\ud83e\udd2f","\ud83d\ude80","\ud83e\udd29","\ud83e\udd13","\ud83d\udc11","\ud83c\udf63","\ud83c\udfae","\ud83d\uddfa"],k=function(){return g("div",{style:b},g("div",{style:w},O[Math.floor(Math.random()*O.length)]),g(y,{href:"/about",title:"About"}),g(y,{href:"/post",title:"Blog"}))},j=o.a.createElement,C={padding:"1em"};t.a=function(e){var t=e.children,n=e.title;return j("div",null,j(a.a,null,j("title",null,n),j("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width",key:"viewport"})),j("div",{style:C},j(k,null),t))}},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),i=r(n("Xuae")),a=n("lwAK"),u=n("FYa8"),c=n("/0+H");function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=l;var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(s,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?i=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var u=0,c=f.length;u<c;u++){var l=f[u];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var s=o.props[l],p=r[l]||new Set;p.has(s)?i=!1:(p.add(s),r[l]=p)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var d=i.default();function h(e){var t=e.children;return o.default.createElement(a.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:c.isInAmpMode(e)},t)}))}))}h.rewind=d.rewind,t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),o=n("a1gu"),i=n("Nsbk"),a=n("PJYZ"),u=n("W8MJ"),c=n("7W2i"),l=n("RIqP");Object.defineProperty(t,"__esModule",{value:!0});var s=n("q1tI"),f=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(l){function s(e){var u;return r(this,s),u=o(this,i(s).call(this,e)),f&&(t.add(a(u)),n(a(u))),u}return c(s,l),u(s,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),u(s,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),s}(s.Component)}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("a1gu"),a=n("Nsbk"),u=n("7W2i"),c=n("TqRt"),l=n("284h");t.__esModule=!0,t.default=void 0;var s,f=l(n("q1tI")),p=n("QmWs"),d=n("g/15"),h=c(n("nOHt"));function v(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var m=new Map,y=window.IntersectionObserver,g={};function b(){return s||(y?s=new y((function(e){e.forEach((function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(e.target),m.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var w=function(e){function t(e){var n;return r(this,t),(n=i(this,a(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var a=e(o,i);return t=o,n=i,r=a,a}}((function(e,t){return{href:v(e),as:t?v(t):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),a=i.href,u=i.as;if(function(e){var t=(0,p.parse)(e,!1,!0),n=(0,p.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var c=window.location.pathname;a=(0,p.resolve)(c,a),u=u?(0,p.resolve)(c,u):a,e.preventDefault();var l=n.props.scroll;null==l&&(l=u.indexOf("#")<0),h.default[n.props.replace?"replace":"push"](a,u,{shallow:n.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return u(t,e),o(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,p.resolve)(e,n);return[o,r?(0,p.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),g[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=b();return n?(n.observe(e),m.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}m.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();h.default.prefetch(t[0],t[1],e).catch((function(e){0})),g[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=f.default.createElement("a",null,t));var i=f.Children.only(t),a={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),f.default.cloneElement(i,a)}}]),t}(f.Component);t.default=w},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.AmpStateContext=o.createContext({})}}]);