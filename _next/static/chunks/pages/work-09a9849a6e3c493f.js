(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[337],{6971:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/work",function(){return n(564)}])},1306:function(e,r,n){"use strict";var i=n(5893);n(7294),n(1664);r.Z=function(e){var r=e.proj;return(0,i.jsxs)("div",{className:"work-card",style:{backgroundImage:"url(".concat(r.img,")")},children:[(0,i.jsx)("h4",{children:r.name}),(0,i.jsx)("h6",{children:r.tag}),(0,i.jsx)("a",{href:"/work/"+r.link,className:"work-card-link"})]})}},8418:function(e,r,n){"use strict";function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,i=new Array(r);n<r;n++)i[n]=e[n];return i}function t(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,t,a=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(i=n.next()).done)&&(a.push(i.value),!r||a.length!==r);o=!0);}catch(l){s=!0,t=l}finally{try{o||null==n.return||n.return()}finally{if(s)throw t}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return i(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var a,o=(a=n(7294))&&a.__esModule?a:{default:a},s=n(6273),l=n(387),c=n(7190);var u={};function d(e,r,n,i){if(e&&s.isLocalURL(r)){e.prefetch(r,n,i).catch((function(e){0}));var t=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;u[r+"%"+n+(t?"%"+t:"")]=!0}}var m=function(e){var r,n=!1!==e.prefetch,i=l.useRouter(),a=o.default.useMemo((function(){var r=t(s.resolveHref(i,e.href,!0),2),n=r[0],a=r[1];return{href:n,as:e.as?s.resolveHref(i,e.as):a||n}}),[i,e.href,e.as]),m=a.href,g=a.as,f=e.children,h=e.replace,p=e.shallow,v=e.scroll,y=e.locale;"string"===typeof f&&(f=o.default.createElement("a",null,f));var b=(r=o.default.Children.only(f))&&"object"===typeof r&&r.ref,j=t(c.useIntersection({rootMargin:"200px"}),2),x=j[0],w=j[1],_=o.default.useCallback((function(e){x(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,x]);o.default.useEffect((function(){var e=w&&n&&s.isLocalURL(m),r="undefined"!==typeof y?y:i&&i.locale,t=u[m+"%"+g+(r?"%"+r:"")];e&&!t&&d(i,m,g,{locale:r})}),[g,m,w,y,n,i]);var k={ref:_,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,n,i,t,a,o,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(n))&&(e.preventDefault(),r[t?"replace":"push"](n,i,{shallow:a,locale:l,scroll:o}))}(e,i,m,g,h,p,v,y)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),s.isLocalURL(m)&&d(i,m,g,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var E="undefined"!==typeof y?y:i&&i.locale,N=i&&i.isLocaleDomain&&s.getDomainLocale(g,E,i&&i.locales,i&&i.domainLocales);k.href=N||s.addBasePath(s.addLocale(g,E,i&&i.defaultLocale))}return o.default.cloneElement(r,k)};r.default=m},7190:function(e,r,n){"use strict";function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,i=new Array(r);n<r;n++)i[n]=e[n];return i}function t(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,t,a=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(i=n.next()).done)&&(a.push(i.value),!r||a.length!==r);o=!0);}catch(l){s=!0,t=l}finally{try{o||null==n.return||n.return()}finally{if(s)throw t}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return i(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,n=e.rootMargin,i=e.disabled||!s,u=a.useRef(),d=t(a.useState(!1),2),m=d[0],g=d[1],f=t(a.useState(r?r.current:null),2),h=f[0],p=f[1],v=a.useCallback((function(e){u.current&&(u.current(),u.current=void 0),i||m||e&&e.tagName&&(u.current=function(e,r,n){var i=function(e){var r,n={root:e.root||null,margin:e.rootMargin||""},i=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));i?r=l.get(i):(r=l.get(n),c.push(n));if(r)return r;var t=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=t.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return l.set(n,r={id:n,observer:a,elements:t}),r}(n),t=i.id,a=i.observer,o=i.elements;return o.set(e,r),a.observe(e),function(){if(o.delete(e),a.unobserve(e),0===o.size){a.disconnect(),l.delete(t);var r=c.findIndex((function(e){return e.root===t.root&&e.margin===t.margin}));r>-1&&c.splice(r,1)}}}(e,(function(e){return e&&g(e)}),{root:h,rootMargin:n}))}),[i,h,n,m]);return a.useEffect((function(){if(!s&&!m){var e=o.requestIdleCallback((function(){return g(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[m]),a.useEffect((function(){r&&p(r.current)}),[r]),[v,m]};var a=n(7294),o=n(9311),s="undefined"!==typeof IntersectionObserver;var l=new Map,c=[]},564:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return s}});var i=n(5893),t=(n(7294),n(2750)),a=n(1306),o=(n(1664),function(e){var r="/work/"+e.ext;return(0,i.jsxs)("div",{className:"highlight-card",children:[(0,i.jsx)("a",{href:r,children:(0,i.jsx)("div",{children:(0,i.jsx)("img",{src:e.img})})}),(0,i.jsxs)("div",{children:[e.blurb,(0,i.jsx)("a",{href:r,className:"arrow-link",children:(0,i.jsx)("em",{children:"View project"})})]})]})});var s=function(e){e=null!==e?e:function(e){throw e}(new TypeError("Cannot destructure undefined"));var r={mada:{img:"https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_1000/v1645638116/work/MADA_v1_bn37vi.png",link:"mada",blurb:(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("h5",{children:["Raising $2 million to ",(0,i.jsx)("br",{}),"fight hunger with ",(0,i.jsx)("em",{className:"dorange",children:"MADA."})]})})},sh:{img:"https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_1000/v1645638115/work/SH_v1_bmrlpn.png",link:"sh",blurb:(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("h5",{children:["Making innovation feel safe",(0,i.jsx)("br",{})," for young parents with the ",(0,i.jsx)("br",{}),(0,i.jsx)("em",{className:"dorange",children:"Montreal Children\u2019s Hospital."})]})})},seize:{img:"https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_1000/v1645638115/work/SEIZE_v1_wazmkl.png",link:"seize",blurb:(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("h5",{children:["Activating 4000+ students to ",(0,i.jsx)("br",{}),"fund a new economy with ",(0,i.jsx)("em",{className:"dorange",children:"SEIZE."})]})})},aisb:{img:"https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_1000/v1645638115/work/AisB_v1_naf9gb.png",link:"aisb",blurb:(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("h5",{children:["Educating and mobilizing young",(0,i.jsx)("br",{})," voters with ",(0,i.jsx)("em",{className:"dorange",children:"Apathy is Boring."})]})})},infaque:{img:"https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_1000/v1645638115/work/Infaque_v1_rdysby.png",link:"infaque",blurb:(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("h5",{children:["Bringing giving into the 21st",(0,i.jsx)("br",{})," century with ",(0,i.jsx)("em",{className:"dorange",children:"Inf\u0101que."})]})})},yic:{img:"https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_1000/v1645638115/work/YIC_v1_gy4chm.png",link:"yic",blurb:(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("h5",{children:["Getting 600+ young",(0,i.jsx)("br",{})," entrepreneurs to pitch their ",(0,i.jsx)("br",{}),"big idea with ",(0,i.jsx)("em",{className:"dorange",children:"InvestEco"})," and",(0,i.jsx)("br",{})," ",(0,i.jsx)("em",{className:"dorange",children:"Renewal Funds."})]})})},cera:{name:"CERA",img:"https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_700/v1645733959/work/grid/CERA_Header_xyiid0.png",link:"cera",tag:"Video"},psystem:{name:"Psystem",img:"https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_700/v1645638142/work/grid/Psystem_Header_aiwhko.png",link:"psystem",tag:"Branding"},mcconnell:{name:"McConnell",img:"https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_700/v1645638141/work/grid/McConnell_Header_qe5lva.png",link:"mcconnell",tag:"Video"},chasm:{name:"CHASM",img:"https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_700/v1645638141/work/grid/CHASM_Header_ghro3j.png",link:"chasm",tag:"Website"},ECTHP:{name:"The Hunger Project",img:"https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_700/v1645733960/work/grid/EthicalCoach_Header_ufw90l.png",link:"ECTHP",tag:"Graphic Design"},nofish:{name:"NoFish",img:"https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_700/v1645733960/work/grid/NoFish_Header_umrpak.png",link:"nofish",tag:"Campaign Strategy"},pop:{name:"POP Montreal",img:"https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_700/v1645733960/work/grid/POP_Header_qcj5gl.png",link:"pop",tag:"Video"},ippnwc:{name:"IPPNWC",img:"https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_700/v1645733960/work/grid/IPPNWC_Header_fse62a.png",link:"ippnwc",tag:"Campaign Strategy"},indigirecruit:{name:"IndigIrecruit",img:"https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_700/v1645733960/work/grid/IndigIrecruit_Header_pnxibt.png",link:"indigirecruit",tag:"Brand"}};return(0,i.jsxs)(t.Ar,{navBlack:!0,navActive:"work",children:[(0,i.jsxs)("div",{className:"work-head midline",children:[(0,i.jsxs)("div",{className:"midline-title",children:[(0,i.jsx)("svg",{className:"circ",width:"200",height:"200",viewBox:"0 0 200 200",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("circle",{cx:"100",cy:"100",r:"100",fill:"#E26E4B"})}),(0,i.jsxs)("h1",{children:["Our work is tied together with ",(0,i.jsx)("em",{className:"dorange",children:"passion"})," and ",(0,i.jsx)("em",{className:"dorange",children:"care."})]})]}),(0,i.jsx)("div",{className:"midline-line",children:" "}),(0,i.jsx)("div",{className:"midline-subtitle",children:(0,i.jsxs)("h5",{children:["You put your heart into making your ",(0,i.jsx)("br",{})," communities, and the world, better. ",(0,i.jsx)("br",{}),"\u2028\u2028You deserve to work with people who ",(0,i.jsx)("br",{})," ",(0,i.jsx)("span",{className:"dorange",children:" do the same."})]})})]}),(0,i.jsxs)("div",{className:"work-highlight",children:[(0,i.jsx)(o,{img:r.mada.img,ext:r.mada.link,blurb:r.mada.blurb}),(0,i.jsx)(o,{img:r.sh.img,ext:r.sh.link,blurb:r.sh.blurb}),(0,i.jsx)(o,{img:r.seize.img,ext:r.seize.link,blurb:r.seize.blurb}),(0,i.jsx)(o,{img:r.aisb.img,ext:r.aisb.link,blurb:r.aisb.blurb}),(0,i.jsx)(o,{img:r.infaque.img,ext:r.infaque.link,blurb:r.infaque.blurb}),(0,i.jsx)(o,{img:r.yic.img,ext:r.yic.link,blurb:r.yic.blurb})]}),(0,i.jsxs)("div",{className:"full-width",children:[(0,i.jsxs)("div",{className:"work-grid",children:[(0,i.jsx)(a.Z,{proj:r.cera}),(0,i.jsx)(a.Z,{proj:r.psystem}),(0,i.jsx)(a.Z,{proj:r.mcconnell}),(0,i.jsx)(a.Z,{proj:r.chasm}),(0,i.jsx)(a.Z,{proj:r.ECTHP}),(0,i.jsx)(a.Z,{proj:r.nofish}),(0,i.jsx)(a.Z,{proj:r.pop}),(0,i.jsx)(a.Z,{proj:r.ippnwc}),(0,i.jsx)(a.Z,{proj:r.indigirecruit})]}),(0,i.jsx)(t.LZ,{h:"80px"})]})]})}},1664:function(e,r,n){e.exports=n(8418)},1163:function(e,r,n){e.exports=n(387)}},function(e){e.O(0,[750,774,888,179],(function(){return r=6971,e(e.s=r);var r}));var r=e.O();_N_E=r}]);