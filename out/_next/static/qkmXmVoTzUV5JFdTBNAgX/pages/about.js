(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"7W2i":function(t,e,n){var r=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},Juyh:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),i=n("w+Rh"),a=o.a.createElement;e.default=function(){return a(o.a.Fragment,null,a(i.default,null),a("div",null,"About"))}},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},YFqc:function(t,e,n){t.exports=n("cTJO")},a1gu:function(t,e,n){var r=n("cDf5"),o=n("PJYZ");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("a1gu"),a=n("Nsbk"),u=n("7W2i"),s=n("TqRt"),c=n("284h");e.__esModule=!0,e.default=void 0;var f,l=c(n("q1tI")),p=n("QmWs"),h=n("g/15"),v=s(n("nOHt"));function d(t){return t&&"object"===typeof t?(0,h.formatWithValidation)(t):t}var w=new Map,b=window.IntersectionObserver,y={};function g(){return f||(b?f=new b((function(t){t.forEach((function(t){if(w.has(t.target)){var e=w.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(f.unobserve(t.target),w.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var m=function(t){function e(t){var n;return r(this,e),(n=i(this,a(e).call(this,t))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(t){var e=null,n=null,r=null;return function(o,i){if(r&&o===e&&i===n)return r;var a=t(o,i);return e=o,n=i,r=a,a}}((function(t,e){return{href:d(t),as:e?d(e):e}})),n.linkClicked=function(t){var e=t.currentTarget,r=e.nodeName,o=e.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),a=i.href,u=i.as;if(function(t){var e=(0,p.parse)(t,!1,!0),n=(0,p.parse)((0,h.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(a)){var s=window.location.pathname;a=(0,p.resolve)(s,a),u=u?(0,p.resolve)(s,u):a,t.preventDefault();var c=n.props.scroll;null==c&&(c=u.indexOf("#")<0),v.default[n.props.replace?"replace":"push"](a,u,{shallow:n.props.shallow}).then((function(t){t&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==t.prefetch,n}return u(e,t),o(e,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,p.resolve)(t,n);return[o,r?(0,p.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&b&&t&&t.tagName&&(this.cleanUpListeners(),y[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=g();return n?(n.observe(t),w.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}w.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();v.default.prefetch(e[0],e[1],t).catch((function(t){0})),y[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=l.default.createElement("a",null,e));var i=l.Children.only(e),a={ref:function(e){t.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),l.default.cloneElement(i,a)}}]),e}(l.Component);e.default=m},rB5V:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("Juyh")}])},"w+Rh":function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),i=n("YFqc"),a=n.n(i),u=o.a.createElement;e.default=function(){return u(o.a.Fragment,null,u(a.a,{href:"/about",as:"/about"},u("a",null,"about"))," ",u(a.a,{href:"/blog",as:"/blog"},u("a",null,"blog")))}}},[["rB5V",0,1,2]]]);