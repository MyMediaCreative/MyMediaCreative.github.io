(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[312],{5942:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ideas/addiction",function(){return r(9757)}])},8951:function(){"use strict"},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(c){s=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,i=(a=r(7294))&&a.__esModule?a:{default:a},s=r(6273),c=r(387),u=r(7190);var l={};function f(e,t,r,n){if(e&&s.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),a=i.default.useMemo((function(){var t=o(s.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?s.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),d=a.href,h=a.as,g=e.children,m=e.replace,b=e.shallow,y=e.scroll,p=e.locale;"string"===typeof g&&(g=i.default.createElement("a",null,g));var v=(t=i.default.Children.only(g))&&"object"===typeof t&&t.ref,w=o(u.useIntersection({rootMargin:"200px"}),2),x=w[0],j=w[1],I=i.default.useCallback((function(e){x(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,x]);i.default.useEffect((function(){var e=j&&r&&s.isLocalURL(d),t="undefined"!==typeof p?p:n&&n.locale,o=l[d+"%"+h+(t?"%"+t:"")];e&&!o&&f(n,d,h,{locale:t})}),[h,d,j,p,r,n]);var k={ref:I,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,i,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:c,scroll:i}))}(e,n,d,h,m,b,y,p)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s.isLocalURL(d)&&f(n,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var _="undefined"!==typeof p?p:n&&n.locale,E=n&&n.isLocaleDomain&&s.getDomainLocale(h,_,n&&n.locales,n&&n.domainLocales);k.href=E||s.addBasePath(s.addLocale(h,_,n&&n.defaultLocale))}return i.default.cloneElement(t,k)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(c){s=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!s,l=a.useRef(),f=o(a.useState(!1),2),d=f[0],h=f[1],g=o(a.useState(t?t.current:null),2),m=g[0],b=g[1],y=a.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||d||e&&e.tagName&&(l.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=u.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=c.get(n):(t=c.get(r),u.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,i=n.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),c.delete(o);var t=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&u.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:m,rootMargin:r}))}),[n,m,r,d]);return a.useEffect((function(){if(!s&&!d){var e=i.requestIdleCallback((function(){return h(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&b(t.current)}),[t]),[y,d]};var a=r(7294),i=r(9311),s="undefined"!==typeof IntersectionObserver;var c=new Map,u=[]},9757:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=(r(7294),r(5292));r(8951);t.default=function(){var e={image:"https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_100//v1645637892/about/Tristan_mlgotz.png",name:"Tristan"},t={name:"Beating my addiction taught me brand strategy.",excerpt:"When I was 15 I smoked my first cigarette. I was outside the local convenience store, surrounded by like-minded peers...",author:e,seo:{title:"Beating my addiction taught me brand strategy",desc:"When I was 15 I smoked my first cigarette. I was outside the local convenience store, surrounded by like-minded peers..."},content:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("p",{children:["When I was 15 I smoked my first cigarette. I was outside the local convenience store, surrounded by like-minded peers. Within 5 minutes I was one wrong move away from vomiting all over the vinyl and linoleum flooring that my high school janitor had just recently buffed. I was queezy and light-headed. It was horrible.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"I thought to myself: \u201cWhy would anybody smoke cigarettes\u201d.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Cut to\u2026",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Two years later I was chain-smoking Canada\u2019s Marlboro Red knock offs at picnic bench after band practice. It was objectively disgusting, but subjectively very cool. I was going through 2 packs a week. I was hooked.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"But then\u2026",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"I started struggling at band practice. I was straining my voice on notes that had been seamless just a couple months prior. I sounded like a 12 year old Tom Waits (I was 18, mind you). We had just released our first record and we were ready to go in for a second one. I realized something:",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"If I wanted to make this record great, I had to stop smoking.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"So I quit cold turkey. I had a horrible cough for the following three months \u2014 but it wasn\u2019t the end of the world.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"I haven\u2019t gone back to cigarettes since.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"I beat my cigarette addiction because I had a why.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"I had a clear and vital vision for the future, which kept me committed through tough moments of craving.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Maybe even more importantly, I knew exactly which things I needed to stay committed to. I was able to draw an unbroken causal link between performing the how and achieving the why.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"That was my first run in with brand strategy.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Brand strategy is, in essence, the exercise of defining the why. Of painting a beautiful, enticing, and motivating picture of the future. It\u2019s the delineation of clear actions that one needs to take in order to realize that picture of the future. It\u2019s the story that keeps you chugging along even when things get tough.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"When I was craving cigarettes I imagined myself on-stage belting out the big notes that the first album had become so known for. I imagined the feeling of total comfort and confidence in the studio. I imagined the commendations of my friends after hearing my voice. I couldn\u2019t smoke, because I wanted all of that. It was a detailed, clear, picture.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Things are going to get hard for your business. So don\u2019t wait to define the why. Take the time to paint a beautiful, enticing, and clear picture of the future. Connect the how to the why with precision.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Only then will you achieve something as hard as quitting cigarettes, or building a business.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]})})};return(0,n.jsx)(o.Ar,{seo:t.seo,navBlack:!0,navActive:"ideas",children:(0,n.jsxs)("div",{className:"blog-content",children:[(0,n.jsx)("a",{href:"/ideas",className:"back-arrow-link",children:"Ideas"}),(0,n.jsx)(o.LZ,{h:"16px"}),(0,n.jsx)("h3",{children:t.name}),(0,n.jsx)(o.LZ,{h:"16px"}),(0,n.jsxs)("div",{className:"blog-author",children:[(0,n.jsx)("div",{children:(0,n.jsx)("img",{src:e.image})}),(0,n.jsx)("h6",{children:t.author.name}),"\xa0\xa0\xa0\xa0\xa0",(0,n.jsx)("h6",{children:"January 2022"})]}),(0,n.jsx)(o.LZ,{h:"50px"}),(0,n.jsx)("img",{src:"https://res.cloudinary.com/mymediacreative/image/upload/v1645693934/blog-placeholder_csxpbc.png"}),(0,n.jsx)(o.LZ,{h:"30px"}),(0,n.jsx)("div",{className:"blog-text",children:t.content}),(0,n.jsx)(o.LZ,{h:"60px"})]})})}},1664:function(e,t,r){e.exports=r(8418)},1163:function(e,t,r){e.exports=r(387)}},function(e){e.O(0,[292,774,888,179],(function(){return t=5942,e(e.s=t);var t}));var t=e.O();_N_E=t}]);