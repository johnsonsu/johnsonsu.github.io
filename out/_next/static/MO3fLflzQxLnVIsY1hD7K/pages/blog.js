(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"5Yp1":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("YFqc"),a=n.n(i),s=o.a.createElement,u=function(e){var t=e.href,n=e.title;return s(a.a,{href:t,as:t},s("a",null,n))},l=o.a.createElement,c=function(){return l(o.a.Fragment,null,l(u,{href:"/about",title:"About"}),l(u,{href:"/blog",title:"Blog"}))},f=o.a.createElement,p={};t.a=function(e){var t=e.children;return f("div",{style:p},f(c,null),t)}},BR8T:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n("YbiN")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},YbiN:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return s}));var r=n("q1tI"),o=n.n(r),i=n("5Yp1"),a=o.a.createElement,s=!0;t.default=function(e){var t=e.posts;return a(i.a,null,a("h1",null,"Blog"),a("ul",null,t.map((function(e){var t=e.slice(0,-3);return a("li",{key:t},a("a",{href:"/post/".concat(t)},t))}))))}},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("a1gu"),a=n("Nsbk"),s=n("7W2i"),u=n("TqRt"),l=n("284h");t.__esModule=!0,t.default=void 0;var c,f=l(n("q1tI")),p=n("QmWs"),h=n("g/15"),v=u(n("nOHt"));function d(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var w=new Map,g=window.IntersectionObserver,m={};function y(){return c||(g?c=new g((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var b=function(e){function t(e){var n;return r(this,t),(n=i(this,a(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var a=e(o,i);return t=o,n=i,r=a,a}}((function(e,t){return{href:d(e),as:t?d(t):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),a=i.href,s=i.as;if(function(e){var t=(0,p.parse)(e,!1,!0),n=(0,p.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var u=window.location.pathname;a=(0,p.resolve)(u,a),s=s?(0,p.resolve)(u,s):a,e.preventDefault();var l=n.props.scroll;null==l&&(l=s.indexOf("#")<0),v.default[n.props.replace?"replace":"push"](a,s,{shallow:n.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return s(t,e),o(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,p.resolve)(e,n);return[o,r?(0,p.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),m[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=y();return n?(n.observe(e),w.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}w.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();v.default.prefetch(t[0],t[1],e).catch((function(e){0})),m[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=f.default.createElement("a",null,t));var i=f.Children.only(t),a={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),f.default.cloneElement(i,a)}}]),t}(f.Component);t.default=b}},[["BR8T",0,2,1]]]);