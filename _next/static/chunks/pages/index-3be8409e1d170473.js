(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8341)}])},8418:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function s(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,s,i=[],a=!0,o=!1;try{for(n=n.call(e);!(a=(t=n.next()).done)&&(i.push(t.value),!r||i.length!==r);a=!0);}catch(l){o=!0,s=l}finally{try{a||null==n.return||n.return()}finally{if(o)throw s}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var i,a=(i=n(7294))&&i.__esModule?i:{default:i},o=n(6273),l=n(387),c=n(7190);var d={};function u(e,r,n,t){if(e&&o.isLocalURL(r)){e.prefetch(r,n,t).catch((function(e){0}));var s=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;d[r+"%"+n+(s?"%"+s:"")]=!0}}var h=function(e){var r,n=!1!==e.prefetch,t=l.useRouter(),i=a.default.useMemo((function(){var r=s(o.resolveHref(t,e.href,!0),2),n=r[0],i=r[1];return{href:n,as:e.as?o.resolveHref(t,e.as):i||n}}),[t,e.href,e.as]),h=i.href,m=i.as,f=e.children,p=e.replace,v=e.shallow,x=e.scroll,g=e.locale;"string"===typeof f&&(f=a.default.createElement("a",null,f));var j=(r=a.default.Children.only(f))&&"object"===typeof r&&r.ref,y=s(c.useIntersection({rootMargin:"200px"}),2),w=y[0],b=y[1],_=a.default.useCallback((function(e){w(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,w]);a.default.useEffect((function(){var e=b&&n&&o.isLocalURL(h),r="undefined"!==typeof g?g:t&&t.locale,s=d[h+"%"+m+(r?"%"+r:"")];e&&!s&&u(t,h,m,{locale:r})}),[m,h,b,g,n,t]);var N={ref:_,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,n,t,s,i,a,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(n))&&(e.preventDefault(),r[s?"replace":"push"](n,t,{shallow:i,locale:l,scroll:a}))}(e,t,h,m,p,v,x,g)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),o.isLocalURL(h)&&u(t,h,m,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var E="undefined"!==typeof g?g:t&&t.locale,k=t&&t.isLocaleDomain&&o.getDomainLocale(m,E,t&&t.locales,t&&t.domainLocales);N.href=k||o.addBasePath(o.addLocale(m,E,t&&t.defaultLocale))}return a.default.cloneElement(r,N)};r.default=h},7190:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function s(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,s,i=[],a=!0,o=!1;try{for(n=n.call(e);!(a=(t=n.next()).done)&&(i.push(t.value),!r||i.length!==r);a=!0);}catch(l){o=!0,s=l}finally{try{a||null==n.return||n.return()}finally{if(o)throw s}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,n=e.rootMargin,t=e.disabled||!o,d=i.useRef(),u=s(i.useState(!1),2),h=u[0],m=u[1],f=s(i.useState(r?r.current:null),2),p=f[0],v=f[1],x=i.useCallback((function(e){d.current&&(d.current(),d.current=void 0),t||h||e&&e.tagName&&(d.current=function(e,r,n){var t=function(e){var r,n={root:e.root||null,margin:e.rootMargin||""},t=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));t?r=l.get(t):(r=l.get(n),c.push(n));if(r)return r;var s=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var r=s.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return l.set(n,r={id:n,observer:i,elements:s}),r}(n),s=t.id,i=t.observer,a=t.elements;return a.set(e,r),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),l.delete(s);var r=c.findIndex((function(e){return e.root===s.root&&e.margin===s.margin}));r>-1&&c.splice(r,1)}}}(e,(function(e){return e&&m(e)}),{root:p,rootMargin:n}))}),[t,p,n,h]);return i.useEffect((function(){if(!o&&!h){var e=a.requestIdleCallback((function(){return m(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[h]),i.useEffect((function(){r&&v(r.current)}),[r]),[x,h]};var i=n(7294),a=n(9311),o="undefined"!==typeof IntersectionObserver;var l=new Map,c=[]},8341:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return o}});var t=n(5893),s=n(7294),i=n(2750),a=(n(1664),function(e){var r=e.proj,n=function(e){return e.classList.contains("home-wide")||(e=e.parentElement),e.classList.contains("home-wide")||(e=e.parentElement),e.classList.contains("home-wide")||(e=e.parentElement),e.classList.contains("home-wide")||(e=e.parentElement),e=e.children[0]};return(0,t.jsxs)("div",{className:"home-wide",onMouseOver:function(){var e=event.target.parentElement;(e=n(e)).play()},onMouseOut:function(){var e=event.target.parentElement;(e=n(e)).pause()},children:[(0,t.jsx)("video",{className:"wide-vid",width:"100%",muted:!0,loop:!0,playsInline:!0,children:(0,t.jsx)("source",{src:r.vid,type:"video/mp4"})}),(0,t.jsxs)("div",{className:"words",children:[(0,t.jsx)("svg",{width:"2.5%",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("circle",{cx:"12.5",cy:"12.5",r:"12.5",fill:"#E26E4B"})}),(0,t.jsx)("h3",{className:"h3s",children:r.title}),(0,t.jsxs)("p",{children:[r.desc," ",(0,t.jsx)("a",{className:"arrow-link",children:r.name})]})]})]})}),o=function(e){e.homepage;var r={name:"Infaque",title:(0,t.jsxs)(t.Fragment,{children:["Stories about the ",(0,t.jsxs)("em",{children:["better",(0,t.jsx)("br",{}),"futures"]})," you imagine..."]}),desc:(0,t.jsxs)(t.Fragment,{children:["Imagining a better way to",(0,t.jsx)("br",{})," donate with"]}),vid:"https://res.cloudinary.com/mymediacreative/video/upload/v1645638830/home/HOME_Infaque_V6_lihiut.mp4"},n={name:"MADA",title:(0,t.jsxs)(t.Fragment,{children:["...and the ",(0,t.jsx)("em",{children:"injustice"})," you",(0,t.jsx)("br",{})," want to end."]}),desc:(0,t.jsxs)(t.Fragment,{children:["Raising $2 million to fight",(0,t.jsx)("br",{})," hunger with"]}),vid:"https://res.cloudinary.com/mymediacreative/video/upload/v1645638830/home/HOME_MADA_V5_zdjtu2.mp4"},o={name:"Smart Hospital Project",title:(0,t.jsxs)(t.Fragment,{children:["Stories that ignite",(0,t.jsx)("br",{})," our ",(0,t.jsx)("em",{children:"passion"}),"..."]}),desc:(0,t.jsxs)(t.Fragment,{children:["Making innovation feel safe for parents",(0,t.jsx)("br",{})," with the"]}),vid:"https://res.cloudinary.com/mymediacreative/video/upload/v1645638830/home/HOME_SH_V6_cwyant.mp4"},l={name:"Apathy is Boring",title:(0,t.jsxs)(t.Fragment,{children:["...and awaken the",(0,t.jsx)("br",{})," ",(0,t.jsx)("em",{children:"activist"})," in all of us."]}),desc:(0,t.jsxs)(t.Fragment,{children:["Mobilizing young voters",(0,t.jsx)("br",{})," with"]}),vid:"https://res.cloudinary.com/mymediacreative/video/upload/v1645638830/home/HOME_AisB_V5_xc1at2.mp4"},c=0,d=(0,s.useRef)(),u=((0,s.useRef)(),{threshold:1});return(0,s.useEffect)((function(){new IntersectionObserver((function(e,r){e[0].isIntersecting&&0==c&&(document.getElementsByClassName("top-line")[0].style.width="100%",document.getElementsByClassName("bot-line")[0].style.width="100%",document.getElementsByClassName("lft-line")[0].style.height="100%",document.getElementsByClassName("rgt-line")[0].style.height="100%",c=1)}),u).observe(d.current)}),[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{id:"home-content",children:[(0,t.jsxs)("div",{className:"home-head",style:{backgroundImage:"url(https://res.cloudinary.com/mymediacreative/image/upload/v1645746958/home/Homepage_Load_Buffer_vycg56.png)"},children:[(0,t.jsx)(i.JL,{isBlack:!1,active:""}),(0,t.jsxs)("div",{className:"reg-w",children:[(0,t.jsxs)("h1",{children:["A creative agency ",(0,t.jsx)("br",{})," for ",(0,t.jsx)("em",{className:"dorange",children:"social change."})]}),(0,t.jsx)(i.LZ,{h:"30px"}),(0,t.jsx)("h5",{children:"Mobilizing people to create a just and livable future."})]}),(0,t.jsx)(i.LZ,{h:"140px"}),(0,t.jsx)("video",{width:"100%",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,children:(0,t.jsx)("source",{src:"https://res.cloudinary.com/mymediacreative/video/upload/v1645638831/home/HOME_Header_V5_lnve90.mp4",type:"video/mp4"})})]}),(0,t.jsxs)("div",{className:"home-stories grey-lines",children:[(0,t.jsx)("div",{className:"home-stories-text",children:(0,t.jsxs)("h1",{className:"xl",children:["As ",(0,t.jsx)("em",{className:"dorange",children:"changemakers,"}),(0,t.jsx)("br",{}),"there's power in ",(0,t.jsx)("br",{}),(0,t.jsx)("em",{className:"dorange",children:"your stories."})]})}),(0,t.jsx)("div",{className:"top-line"}),(0,t.jsx)("div",{ref:d,className:"bot-line"}),(0,t.jsx)("div",{className:"lft-line"}),(0,t.jsx)("div",{className:"rgt-line"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(a,{proj:r}),(0,t.jsx)(a,{proj:n}),(0,t.jsx)(a,{proj:o}),(0,t.jsx)(a,{proj:l})]}),(0,t.jsxs)("div",{className:"home-logos grey-lines",children:[(0,t.jsxs)("div",{className:"home-logos-text",children:[(0,t.jsxs)("h4",{children:["We\u2019ve been bringing stories like these to life with ",(0,t.jsx)("em",{className:"dorange",children:"nonprofits"}),",",(0,t.jsx)("br",{})," ",(0,t.jsx)("em",{className:"dorange",children:"foundations"}),", and ",(0,t.jsx)("em",{className:"dorange",children:"mission-driven businesses"})," for a while now\u2026"]}),(0,t.jsx)("div",{className:"logo-grid",children:(0,t.jsx)(t.Fragment,{children:["https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_500/v1645714339/home/logos/McConnell_fe8qdg.png","https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_500/v1645638200/home/logos/AisB_wrslkb.png","https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_500/v1645638200/home/logos/InvestEco_srdbhl.png","https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_500/v1645638201/home/logos/Renewal_Funds_hyffjd.png","https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_500/v1645714339/home/logos/CSI_t3uczg.png","https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_500/v1645638201/home/logos/POP_zdkpbh.png","https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_500/v1645638200/home/logos/Wellcome_uqc9v1.png","https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_500/v1645638200/home/logos/Jewish_General_nxmyg7.png"].map((function(e,r){return(0,t.jsx)("img",{src:e},r)}))})}),(0,t.jsxs)("h4",{children:["...and we've ",(0,t.jsx)("em",{className:"dorange",children:"learned"})," something."]})]}),(0,t.jsx)("div",{className:"lft-line"}),(0,t.jsx)("div",{className:"rgt-line"})]}),(0,t.jsxs)("div",{className:"home-blue-con bg-dblue",children:[(0,t.jsx)("div",{className:"top-line"}),(0,t.jsx)("div",{className:"bot-line"}),(0,t.jsx)("div",{className:"lft-line"}),(0,t.jsx)("div",{className:"rgt-line"}),(0,t.jsx)("div",{className:"end-line"}),(0,t.jsx)("div",{className:"toolkit-con",children:(0,t.jsxs)("div",{className:"home-toolkit",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("svg",{width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("circle",{cx:"12.5",cy:"12.5",r:"12.5",fill:"#E26E4B"})}),(0,t.jsxs)("h4",{className:"h4p",children:["Told with the right tools\u2014",(0,t.jsx)("br",{}),"these are the stories that ",(0,t.jsx)("br",{})," ",(0,t.jsx)("em",{className:"dorange",children:"mobilize people."})]}),(0,t.jsx)(i.LZ,{h:"50px"}),(0,t.jsx)("a",{href:"/services",className:"arrow-link",children:"Our Services"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h5",{children:"Our toolkit:"}),(0,t.jsx)("h3",{className:"h3s",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Campaigns"}),(0,t.jsx)("li",{children:"Brands"}),(0,t.jsx)("li",{children:"Content"}),(0,t.jsx)("li",{children:"Websites"}),(0,t.jsx)("li",{children:"Apps"})]})})]})]})}),(0,t.jsx)("div",{className:"home-results",children:(0,t.jsxs)("div",{className:"result-text",children:[(0,t.jsx)(i.LZ,{h:"80px"}),(0,t.jsxs)("h4",{className:"h4p",children:["Paired with a good strategy\u2014",(0,t.jsx)("br",{}),"they\u2019re the stories that ",(0,t.jsx)("em",{className:"dorange",children:"drive results."})]}),(0,t.jsx)("img",{src:"https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_1920/v1645763713/home/bg-mockups/Mock1_iln10n.png"}),(0,t.jsx)("a",{href:"/work",className:"arrow-link",children:"Case Studies"}),(0,t.jsx)(i.LZ,{h:"80px"})]})}),(0,t.jsx)("div",{className:"home-dots-con",children:(0,t.jsxs)("div",{className:"home-dots reg-w",children:[(0,t.jsxs)("h1",{children:["These are the stories ",(0,t.jsx)("br",{})," that ",(0,t.jsx)("em",{className:"dorange",children:"change the world."})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(i.LZ,{h:"30px"}),(0,t.jsxs)("h3",{children:["These are ",(0,t.jsx)("em",{className:"dorange",children:"your"})," stories."]}),(0,t.jsxs)("h4",{children:["We can ",(0,t.jsx)("em",{children:"help you"})," tell them."]}),(0,t.jsx)(i.LZ,{h:"30px"}),(0,t.jsx)("a",{href:"/contact",className:"arrow-link",children:"Reach out"})]}),(0,t.jsx)("div",{children:(0,t.jsxs)("svg",{width:"55%",viewBox:"0 0 294 322",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("circle",{cx:"221",cy:"73",r:"73",fill:"#E26E4B"}),(0,t.jsx)("circle",{cx:"199.5",cy:"259.5",r:"62.5",fill:"#E26E4B"}),(0,t.jsx)("circle",{cx:"36.5",cy:"169.5",r:"36.5",fill:"#E26E4B"})]})})]})})]})]}),(0,t.jsx)(i.$_,{})]})}},1664:function(e,r,n){e.exports=n(8418)},1163:function(e,r,n){e.exports=n(387)}},function(e){e.O(0,[750,774,888,179],(function(){return r=8581,e(e.s=r);var r}));var r=e.O();_N_E=r}]);