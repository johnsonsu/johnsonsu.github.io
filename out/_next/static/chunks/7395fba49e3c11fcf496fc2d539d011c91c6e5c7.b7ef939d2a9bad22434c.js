(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"5Yp1":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("8Kt/"),i=n.n(a);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=n("YFqc"),f=n.n(c),s=n("nOHt"),l=o.a.createElement;function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h={display:"flex",marginRight:"1em"},m={textDecoration:"none",padding:"0.2em 0.4em",fontSize:"1.2em",color:"#666"},v={color:"#333"},y=function(e){var t=e.href,n=e.title,r=Object(s.useRouter)(),o="/"===t&&r.pathname===t||"/"!==t&&r.pathname.startsWith(t);return l("div",{style:h},l(f.a,{href:t,as:t},l("a",{style:p(p({},m),o?v:{})},n)))},g=o.a.createElement,b={display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",backgroundColor:"#f2f2f2",padding:"1em",borderRadius:"0.4em",boxShadow:"0px 0px 30px 0px rgba(100, 100, 100, 0.5)"},w={display:"flex",alignItems:"center",justifyContent:"center",marginRight:"1em",borderRadius:"1.5em",height:"2em",width:"2em",fontSize:"1.4em",backgroundColor:"#fefefe"},x={display:"flex",flexDirection:"row",alignItems:"center"},M={marginLeft:"0.8em",filter:"invert(14%) sepia(0%) saturate(3%) hue-rotate(189deg) brightness(100%) contrast(84%)"},O=["\ud83e\uddbe","\ud83c\udfb8","\ud83e\udd26\ud83c\udffb\u200d\u2642\ufe0f","\ud83e\udd2f","\ud83d\ude80","\ud83e\udd29","\ud83e\udd13","\ud83d\udc11","\ud83c\udf63","\ud83c\udfae","\ud83d\uddfa"],j=function(){return g("div",{style:b},g("div",{style:x},g("div",{style:w},O[Math.floor(Math.random()*O.length)]),g(y,{href:"/",title:"About"}),g(y,{href:"/blog",title:"Blog"})),g("div",{style:x},g("a",{style:M,href:"https://github.com/johnsonsu"},g("img",{src:"/github.svg",height:"24em"})),g("a",{style:M,href:"https://www.linkedin.com/in/johnsonsu"},g("img",{src:"/linkedin.svg",height:"24em"}))))},k=o.a.createElement,_={display:"flex",flexDirection:"column",padding:"0.5em",maxWidth:"800px",margin:"auto"};t.a=function(e){var t=e.children,n=e.title;return k("div",null,k(i.a,null,k("title",null,n),k("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width",key:"viewport"})),k("div",{style:_},k(j,null),t))}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,c=d.length;u<c;u++){var f=d[u];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var s=o.props[f],l=r[f]||new Set;l.has(s)?a=!1:(l.add(s),r[f]=l)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),u=n("a1gu"),c=n("Nsbk");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),l=function(e){i(n,e);var t=f(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=l},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a,i=o(n("q1tI")),u=n("elyg"),c=n("nOHt"),f=new Map,s=window.IntersectionObserver,l={};var d=function(e,t){var n=a||(s?a=new s((function(e){e.forEach((function(e){if(f.has(e.target)){var t=f.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),f.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),f.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}f.delete(e)}):function(){}};function p(e,t,n,r){(0,u.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),l[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=i.default.useState(),o=r(n,2),a=o[0],f=o[1],h=(0,c.useRouter)(),m=h&&h.pathname||"/",v=i.default.useMemo((function(){var t=(0,u.resolveHref)(m,e.href);return{href:t,as:e.as?(0,u.resolveHref)(m,e.as):t}}),[m,e.href,e.as]),y=v.href,g=v.as;i.default.useEffect((function(){if(t&&s&&a&&a.tagName&&(0,u.isLocalURL)(y)&&!l[y+"%"+g])return d(a,(function(){p(h,y,g)}))}),[t,a,y,g,h]);var b=e.children,w=e.replace,x=e.shallow,M=e.scroll;"string"===typeof b&&(b=i.default.createElement("a",null,b));var O=i.Children.only(b),j={ref:function(e){e&&f(e),O&&"object"===typeof O&&O.ref&&("function"===typeof O.ref?O.ref(e):"object"===typeof O.ref&&(O.ref.current=e))},onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,y,g,w,x,M)}};return t&&(j.onMouseEnter=function(e){(0,u.isLocalURL)(y)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),p(h,y,g,{priority:!0}))}),(e.passHref||"a"===O.type&&!("href"in O.props))&&(j.href=(0,u.addBasePath)(g)),i.default.cloneElement(O,j)};t.default=h},ifKK:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r).a.createElement,a={display:"flex",flexDirection:"column",backgroundColor:"#f2f2f2",padding:"2rem",marginTop:"2rem",borderRadius:"0.4rem",boxShadow:"0px 0px 30px 0px rgba(100, 100, 100, 0.4)"};t.a=function(e){var t=e.children;return o("div",{style:a},t)}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o}}]);