(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[232],{6071:function(e,n,t){"use strict";var r=t(3038),a=t(862);n.default=void 0;var o=a(t(7294)),c=t(1689),i=t(2441),l=t(5749),s={};function u(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,i.useRouter)(),a=t&&t.pathname||"/",f=o.default.useMemo((function(){var n=(0,c.resolveHref)(a,e.href,!0),t=r(n,2),o=t[0],i=t[1];return{href:o,as:e.as?(0,c.resolveHref)(a,e.as):i||o}}),[a,e.href,e.as]),d=f.href,p=f.as,v=e.children,_=e.replace,g=e.shallow,h=e.scroll,m=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var b=o.Children.only(v),y=b&&"object"===typeof b&&b.ref,N=(0,l.useIntersection)({rootMargin:"200px"}),k=r(N,2),x=k[0],E=k[1],w=o.default.useCallback((function(e){x(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,x]);(0,o.useEffect)((function(){var e=E&&n&&(0,c.isLocalURL)(d),r="undefined"!==typeof m?m:t&&t.locale,a=s[d+"%"+p+(r?"%"+r:"")];e&&!a&&u(t,d,p,{locale:r})}),[p,d,E,m,n,t]);var L={ref:w,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,o,i,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),n[a?"replace":"push"](t,r,{shallow:o,locale:l,scroll:i}))}(e,t,d,p,_,g,h,m)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),u(t,d,p,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var j="undefined"!==typeof m?m:t&&t.locale,M=t&&t.isLocaleDomain&&(0,c.getDomainLocale)(p,j,t&&t.locales,t&&t.domainLocales);L.href=M||(0,c.addBasePath)((0,c.addLocale)(p,j,t&&t.defaultLocale))}return o.default.cloneElement(b,L)};n.default=f},5749:function(e,n,t){"use strict";var r=t(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,l=(0,a.useRef)(),s=(0,a.useState)(!1),u=r(s,2),f=u[0],d=u[1],p=(0,a.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),t||f||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,o=r.observer,c=r.elements;return c.set(e,n),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),i.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,a.useEffect)((function(){if(!c&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[p,f]};var a=t(7294),o=t(8391),c="undefined"!==typeof IntersectionObserver;var i=new Map},9979:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return i},default:function(){return l}});var r=t(5893),a=t(3301),o=t.n(a),c=t(1664),i=!0;function l(e){var n=e.blog;return console.log(n),(0,r.jsxs)("main",{className:o().main,children:[(0,r.jsx)("h1",{className:o().title,children:n.title}),(0,r.jsxs)("p",{className:o().date,children:[n.updatedAt.slice(0,10).replace(/-/g,"/"),(0,r.jsx)("span",{className:o().category,children:n.category.name})]}),(0,r.jsx)("div",{className:o().image,children:(0,r.jsx)("img",{src:n.image.url})}),(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:"".concat(n.content)},className:o().post}),(0,r.jsx)(c.default,{href:"/",children:(0,r.jsx)("div",{className:o().button,children:(0,r.jsx)("a",{className:o().back,children:"to Index"})})})]})}},5490:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news/[id]",function(){return t(9979)}])},3301:function(e){e.exports={main:"Single_main__3TZdQ",title:"Single_title__1OeBY",date:"Single_date__Dpgdq",category:"Single_category__wW0Rn",image:"Single_image__2mYSk",button:"Single_button__3nHuH",back:"Single_back__Oj1A5"}},1664:function(e,n,t){e.exports=t(6071)}},function(e){e.O(0,[774,351],(function(){return n=5490,e(e.s=n);var n}));var n=e.O();_N_E=n}]);