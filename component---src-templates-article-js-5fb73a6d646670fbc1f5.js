(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"A2+M":function(t,e,n){var r=n("X8hv");t.exports={MDXRenderer:r}},GoyQ:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},J9Se:function(t,e,n){var r=n("KxBF"),o=n("Sxd8");t.exports=function(t,e,n){var c=null==t?0:t.length;return c?(e=n||void 0===e?1:o(e),r(t,0,(e=c-e)<0?0:e)):[]}},Sxd8:function(t,e,n){var r=n("ZCgT");t.exports=function(t){var e=r(t),n=e%1;return e==e?n?e-n:e:0}},VRlk:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return d}));var r=n("KQm4"),o=n("txSG"),c=n("izhR"),i=n("q1tI"),a=n.n(i),u=n("Aw06"),s=n("A2+M"),p=n("Bl7J"),f=n("J9Se"),l=n.n(f),b=(n("Vz84"),n("mtgc")),y=n("ZMKu");n("qKvR");n("ayyV");e.default=function(t){var e=t.data.mdx,n=e.fields,i=n.slug,f=n.github,d=e.frontmatter.showToc,O=a.a.useState(!1),m=O[0],v=O[1],x=l()(l()(i.split("/").reduce((function(t,e,n){return[].concat(Object(r.a)(t),[{name:e,to:t[n-1]?(t[n-1].to+"/"+e).replace("//","/"):e}])}),[]))),g=e.frontmatter.description||e.excerpt;return Object(o.c)(p.a,{title:e.frontmatter.title,description:g,github:f,timeToRead:e.timeToRead,categories:e.frontmatter.categories,slug:e.fields.slug,showToc:d,tocData:e.tableOfContents},x.length>1&&Object(o.c)("nav",{sx:{mt:[3,4]}},x.map((function(t,e){return t.to===i?null:Object(o.c)("span",{sx:{display:"inline-block",m:0,paddingRight:"5px"},key:t.name},e!==x.length?Object(o.c)(u.a,{to:t.to},t.name):t.name,Object(o.c)("span",{sx:{opacity:.3}},t.name&&e!==x.length&&" / "))}))),Object(o.c)(c.e,{sx:{justifyContent:"space-between",mb:4}},e.frontmatter.title&&Object(o.c)("h1",{sx:{fontSize:[5,5,6],lineHeight:"normal",letterSpacing:"normal",mt:x.length>1?1:[4,5],mb:0}},e.frontmatter.title),d&&Object(o.c)(b.a,{isVisibleToc:m,setIsVisibleToc:v})),Object(o.c)("div",{sx:{"h1:first-of-type":{mt:[3,5]}}},Object(o.c)(y.a,null,d&&m&&Object(o.c)(y.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},sx:{position:"fixed",zIndex:5,overflowY:"auto",width:"100%",height:"100%",top:[60,80],left:0,background:"white",p:3,pb:5,display:["block","block","none"]}},Object(o.c)(y.b.div,{initial:{top:25},animate:{top:0},exit:{top:25},sx:{width:"100%",position:"relative"}},Object(o.c)(b.b,{data:e.tableOfContents,hideTitle:!0,pageTitle:e.frontmatter.title,slug:e.fields.slug,sx:{top:4,p:0,opacity:1,fontSize:"17px"},setState:v})))),Object(o.c)(s.MDXRenderer,null,e.body)))};var d="1750862189"},X8hv:function(t,e,n){var r=n("sXyB"),o=n("RIqP"),c=n("lSNA"),i=n("8OQS");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var s=n("q1tI"),p=n("7ljp").mdx,f=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.children,c=i(t,["scope","children"]),a=f(e),l=s.useMemo((function(){if(!n)return null;var t=u({React:s,mdx:p},a),e=Object.keys(t),c=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(o(e),[""+n])).apply(void 0,[{}].concat(o(c)))}),[n,e]);return s.createElement(l,u({},c))}},ZCgT:function(t,e,n){var r=n("tLB3");t.exports=function(t){return t?(t=r(t))===1/0||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}},ayyV:function(t,e,n){},b48C:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},sXyB:function(t,e,n){var r=n("SksO"),o=n("b48C");function c(e,n,i){return o()?t.exports=c=Reflect.construct:t.exports=c=function(t,e,n){var o=[null];o.push.apply(o,e);var c=new(Function.bind.apply(t,o));return n&&r(c,n.prototype),c},c.apply(null,arguments)}t.exports=c},tLB3:function(t,e,n){var r=n("GoyQ"),o=n("/9aa"),c=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,s=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return NaN;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(c,"");var n=a.test(t);return n||u.test(t)?s(t.slice(2),n?2:8):i.test(t)?NaN:+t}}}]);
//# sourceMappingURL=component---src-templates-article-js-5fb73a6d646670fbc1f5.js.map