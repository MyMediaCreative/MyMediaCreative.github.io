(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[694],{8285:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ideas/love",function(){return r(6047)}])},8951:function(){"use strict"},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],s=!0,i=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);s=!0);}catch(l){i=!0,o=l}finally{try{s||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,s=(a=r(7294))&&a.__esModule?a:{default:a},i=r(6273),l=r(387),h=r(7190);var u={};function c(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=l.useRouter(),a=s.default.useMemo((function(){var t=o(i.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?i.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),d=a.href,f=a.as,m=e.children,b=e.replace,p=e.shallow,y=e.scroll,g=e.locale;"string"===typeof m&&(m=s.default.createElement("a",null,m));var x=(t=s.default.Children.only(m))&&"object"===typeof t&&t.ref,j=o(h.useIntersection({rootMargin:"200px"}),2),v=j[0],w=j[1],k=s.default.useCallback((function(e){v(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,v]);s.default.useEffect((function(){var e=w&&r&&i.isLocalURL(d),t="undefined"!==typeof g?g:n&&n.locale,o=u[d+"%"+f+(t?"%"+t:"")];e&&!o&&c(n,d,f,{locale:t})}),[f,d,w,g,r,n]);var I={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,s,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:l,scroll:s}))}(e,n,d,f,b,p,y,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&c(n,d,f,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var T="undefined"!==typeof g?g:n&&n.locale,E=n&&n.isLocaleDomain&&i.getDomainLocale(f,T,n&&n.locales,n&&n.domainLocales);I.href=E||i.addBasePath(i.addLocale(f,T,n&&n.defaultLocale))}return s.default.cloneElement(t,I)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],s=!0,i=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);s=!0);}catch(l){i=!0,o=l}finally{try{s||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!i,u=a.useRef(),c=o(a.useState(!1),2),d=c[0],f=c[1],m=o(a.useState(t?t.current:null),2),b=m[0],p=m[1],y=a.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||d||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=h.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=l.get(n):(t=l.get(r),h.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,s=n.elements;return s.set(e,t),a.observe(e),function(){if(s.delete(e),a.unobserve(e),0===s.size){a.disconnect(),l.delete(o);var t=h.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&h.splice(t,1)}}}(e,(function(e){return e&&f(e)}),{root:b,rootMargin:r}))}),[n,b,r,d]);return a.useEffect((function(){if(!i&&!d){var e=s.requestIdleCallback((function(){return f(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&p(t.current)}),[t]),[y,d]};var a=r(7294),s=r(9311),i="undefined"!==typeof IntersectionObserver;var l=new Map,h=[]},6047:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=(r(7294),r(2750));r(8951);t.default=function(){var e={image:"https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_100//v1645637892/about/Tristan_mlgotz.png",name:"Tristan"},t={name:"Making meaningful things with people you love.",excerpt:"When I was a kid I spent most of my time playing imaginary games.",author:e,content:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["When I was a kid I spent most of my time playing imaginary games.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"I\u2019d spend, my mother claims, 5\u20136 hours a day pretending to be a knight, or a wizard, or The Doctor from Doctor Who.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"I spent a lot of time doing that by myself, for sure. But I spent even more time doing it with a very close-knit group of best friends.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"We were a real swashbuckling crew: Mako, my brother, and the kid-from-down-the-street that I haven\u2019t spoken to in more than 10 years. We\u2019d spend every free moment building and inhabiting these imaginary worlds.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"These guys were my first team. The first time I got to experience the true elation of a great creative partnership.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"My creative partnerships.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Meeting people who complete me creatively is one of life\u2019s greatest treasures. So, I want to tell you about 4 of the most life-changing creative partnerships I\u2019ve ever had.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"SPOILER: If you\u2019re reading this, I\u2019m going to ask you to do something at the end of the article. Reach out to the people you love who you\u2019ve made meaningful things with. Tell them how much you care about them, and how impressed you are by their brilliance.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Ok, now onto the thing."]}),(0,n.jsxs)("p",{children:["Tony Wang.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Tony showed up to the first meeting I ever held when I became an editor at the school paper. He was attentive. Quiet, even. I stopped him and his friend outside the room after the meeting, asked him what he was into, and told him that this would be a great chance to develop his skills and make a difference.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"I was sure he would come back.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"He did not\u2026at least for a while.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"About a year later he did show up again. I still haven\u2019t asked what possessed him to come back after a year of straight ghosting me.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"He applied for a staff position at the paper. The Editor in Chief and Creative Director didn\u2019t want to hire him at first \u2014 but I insisted. My logic? We don\u2019t have to pay staff at the student paper, so why not take him?",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"That was September 2018. Three years later he\u2019s one of my best friends, my most frequent creative collaborator, and one of the most brilliant thinkers I\u2019ve ever met.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"It took us about 8\u20139 months of working together before we exchanged more than 5 sentences in a row. I thought he was an enigma. A quiet, mysterious, person who didn\u2019t jive well with my big personality.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"I learned how truly wrong I saw him do live standup comedy. I kept relearning how wrong I was \u2014 through asking him to join My Media, asking him to be the Creative Director, and ultimately seeing him flourish as a leader in the last year.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"I learned about an entirely different Tony Wang:",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"He\u2019s extroverted, hilarious, and deeply interesting. He\u2019s the single most curious person that I have ever met. He is the definition of grit, hard work, and commitment.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"He catches every little mistake that I don\u2019t. He takes big, random, ideas \u2014 and renders them intelligible for audiences. He has a commitment to craft and perfection like nobody else.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"That\u2019s Tony. One of my greatest creative partners."]}),(0,n.jsxs)("p",{children:["Wyeth Robertson.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"I didn\u2019t know Wyeth Robertson very well in June of 2016. I knew he had released a rap album, I knew who he was friends with, and I had shot one of his films in the 10th grade.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"So when we were sitting beside each other watching our high-school\u2019s annual music showcase and he said: \u201cYou and I are gonna be up there together next year bro\u201d, I shrugged and gave him a real \u201cOk bro, whatever you say\u201d kind of response.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"He was right though.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"4 months later, we started to jam after school with a couple of friends. 4 years later we\u2019ve put out 3 records together with the Neighbourhood Watch.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"I can\u2019t tell if Wyeth had a master plan all along, or if he\u2019s just privy to the ebs and flows of divine intervention.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"He\u2019s the kind of person who makes you feel like at least one of those things is true at all times.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Wyeth is the most empathetic person I\u2019ve ever met. He\u2019s also one of the smartest. He reminds me constantly what actually matters about life: people not outcomes. He is my favourite mental sparring partner. He inspires me to live by a genuine moral compass.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Thank you for the music that we\u2019ve made together. There is nothing like the spark of creative energy that we get in that jam room. Let\u2019s keep it alive for as long as humanly possible \u2014 it\u2019s the kind of joy + love that life is (probably) all about."]}),(0,n.jsxs)("p",{children:["Ella Roy.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"I met Ella Roy in a political science conference. She was doodling in her notebooks instead of, y\u2019know, taking notes.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"I thought that kind of flagrant disregard for academic authority was pretty cool in an Arthur Fonzarelli-an type way \u2014 so I decided to introduce myself.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"We walked back from the political science class a couple of times talking until she mentioned that she liked graphic design. I told her about My Media, which we had just launched a couple weeks back.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Without having seen anything she\u2019d done, I asked her to be part of a campaign.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"This will go down in my life as the single best instance of absolutely blind decision-making I have ever been a part of.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"She was brilliant. She rose our level of capability to a whole other level. I was blown away and excited.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"In the next year we worked together closely, constantly.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"I consistently list her as one of the most talented people I\u2019ve ever met. She is probably the person who is best at challenging me in my life (I react defensively usually, because I genuinely care about her opinion).",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"I feel lucky to work together every day. To many more."]}),(0,n.jsxs)("p",{children:["Ethan Surman.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"The story of how I met this guy is pretty simple. I walked upstairs, having just been interrupted by my grandma.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"I held him in my arms for 5 minutes \u2014 and then asked if I could go back to watching \u201cBlue\u2019s Clues\u201d (1996\u20132006).",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"I have never disappeared into something like songwriting with Ethan. He\u2019s my brother, my best friend, and my forever creative partner.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"There\u2019s not much more to say about this one. I love this man, and the things we make together.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"SO!",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"That was a couple hours spent writing about the people I love making things with the most in the world.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"It was soul-nourishing I can tell you that.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"I\u2019m a little burnt out from it to be fair \u2014 it was a write-it-in-one-go kind of thing. Gonna go eat some squash soup I made last night (for Mako, of all people!).",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Tell your creative partners how much you appreciate them. It will, hopefully, be soul-nourishing.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]})]})};return(0,n.jsx)(o.Ar,{navBlack:!0,navActive:"ideas",children:(0,n.jsxs)("div",{className:"blog-content",children:[(0,n.jsx)("a",{href:"/ideas",className:"back-arrow-link",children:"Ideas"}),(0,n.jsx)(o.LZ,{h:"16px"}),(0,n.jsx)("h3",{children:t.name}),(0,n.jsx)(o.LZ,{h:"16px"}),(0,n.jsxs)("div",{className:"blog-author",children:[(0,n.jsx)("div",{children:(0,n.jsx)("img",{src:e.image})}),(0,n.jsx)("h6",{children:t.author.name}),"\xa0\xa0\xa0\xa0\xa0",(0,n.jsx)("h6",{children:"January 2022"})]}),(0,n.jsx)(o.LZ,{h:"50px"}),(0,n.jsx)("img",{src:"https://res.cloudinary.com/mymediacreative/image/upload/v1645693934/blog-placeholder_csxpbc.png"}),(0,n.jsx)(o.LZ,{h:"30px"}),(0,n.jsx)("div",{className:"blog-text",children:t.content}),(0,n.jsx)(o.LZ,{h:"60px"})]})})}},1664:function(e,t,r){e.exports=r(8418)},1163:function(e,t,r){e.exports=r(387)}},function(e){e.O(0,[750,774,888,179],(function(){return t=8285,e(e.s=t);var t}));var t=e.O();_N_E=t}]);