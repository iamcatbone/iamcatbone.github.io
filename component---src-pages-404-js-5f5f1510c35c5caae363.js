(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{205:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=a(224),o=a(222);e.default=function(){return i.a.createElement(r.a,null,i.a.createElement(o.a,{title:"404: Not found"}),i.a.createElement("h1",null,"NOT FOUND"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},216:function(t,e,a){"use strict";var n=a(0),i=a.n(n),r=a(12),o=a.n(r),l=a(69),c=a.n(l);a.d(e,"a",function(){return c.a});a(217),i.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},217:function(t,e,a){var n;t.exports=(n=a(221))&&n.default||n},219:function(t){t.exports={data:{site:{siteMetadata:{title:"Margaret Wong's Portfolio",routes:[{title:"Home",buttons:[{title:null,path:"/"}]},{title:"Designs",buttons:[{title:"UI UX Design works",path:"/ui-ux-design"},{title:"Graphic Design works",path:"/graphic-design"}]},{title:"Illustrations",buttons:[{title:"My Illustrations",path:"/illustrations"}]},{title:"Sketches",buttons:[{title:"My Sketches",path:"/sketches"}]}]}}}}},220:function(t){t.exports={data:{placeholderImage:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAA80lEQVQoz3WRTY9EQBCG/Xb/gQMHJxfiSjgQN/E9YuZA4uMuLuIieHe7Nj07K/ZJqrv6TVV1VbeAb87zxHEctPPznX+NuYsV+IHDi98Zh/v7vr8v4ZrAlmVZME0T4jjG8/nEf3RdR5amKfq+p7wrVDAMQ4iiCEmSyH88HpQwjiOqqsLr9UKe53AcB0VRQFEUeJ5Hfl3XKMsSwzD8FrRtG1EUwXVdWJYFVVURBAEMw4Asy/B9H0mSIMsymkTXddJYPCtsmiY0Tft5Qz4yY11XMgbrsGmaP+OwN2Ns24Z5nt9627Y0BXV4/TUOS/rU7uI+P4frXyIXC/wbAY6jAAAAAElFTkSuQmCC",width:214,height:80,src:"/static/5423b19887c6e1380d92f79a30b9afc3/12e55/header.png",srcSet:"/static/5423b19887c6e1380d92f79a30b9afc3/12e55/header.png 1x,\n/static/5423b19887c6e1380d92f79a30b9afc3/1d9f6/header.png 1.5x"}}}}}},221:function(t,e,a){"use strict";a.r(e);a(24);var n=a(0),i=a.n(n),r=a(12),o=a.n(r),l=a(98),c=function(t){var e=t.location,a=t.pageResources;return a?i.a.createElement(l.a,Object.assign({location:e,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=c},222:function(t,e,a){"use strict";var n=a(223),i=a(0),r=a.n(i),o=a(12),l=a.n(o),c=a(234),s=a.n(c);function u(t){var e=t.description,a=t.lang,i=t.meta,o=t.title,l=n.data.site,c=e||l.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(i)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},e.a=u},223:function(t){t.exports={data:{site:{siteMetadata:{title:"Margaret Wong's Portfolio",description:"A ui-ux designer's personal portfolio and website.",author:"Margaret Wong"}}}}},224:function(t,e,a){"use strict";var n=a(219),i=a(0),r=a.n(i),o=a(213),l=a(341),c=a(332),s=(a(24),a(227),a(220)),u=a(216),p=a(228),d=a.n(p),m=a(336),g=a(337),h=a(335),f=a(333),A=a(339),E=Object(o.a)(f.a).withConfig({displayName:"headerMenu__MenuButton",componentId:"sc-27zt0t-0"})(["height:70px;padding-left:15px !important;padding-right:15px !important;"]),b=Object(o.a)(u.a).withConfig({displayName:"headerMenu__MenuLink",componentId:"sc-27zt0t-1"})(["color:black !important;text-decoration:none !important;"]),w=function(t){var e=t.buttons,a=t.title,n=r.a.useState(null),i=n[0],o=n[1],l=function(){o(null)};return 1===e.length?r.a.createElement(b,{to:e[0].path},r.a.createElement(E,null,a)):[r.a.createElement(E,{key:"button","aria-controls":"menu","aria-haspopup":"true",onClick:function(t){o(t.currentTarget)}},a),r.a.createElement(A.a,{id:"menu",key:"menu",anchorEl:i,keepMounted:!0,open:Boolean(i),onClose:l,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},e.map(function(t,e){var a=t.title,n=t.path;return r.a.createElement("div",{key:e},r.a.createElement(b,{to:n},r.a.createElement(E,{onClick:l,fullWidth:!0},a)))}))]},x=Object(o.a)(h.a).withConfig({displayName:"header__AppToolbar",componentId:"sc-31ozxh-0"})(["height:70px;background-color:white;"]),y=o.a.div.withConfig({displayName:"header__AppToolbarIcon",componentId:"sc-31ozxh-1"})(["flex-grow:1;color:black;text-decoration:none;"]),M=o.a.div.withConfig({displayName:"header__MenuButtonWrapper",componentId:"sc-31ozxh-2"})(["margin-right:55px;"]),v=function(t){var e=t.menus,a=s.data;return r.a.createElement(m.a,{style:{paddingRight:"0px !important"},position:"fixed"},r.a.createElement(g.a,null,r.a.createElement(x,null,r.a.createElement(y,null,r.a.createElement(u.a,{to:"/"},r.a.createElement(d.a,{fixed:a.placeholderImage.childImageSharp.fixed}))),r.a.createElement(M,null,e.map(function(t,e){return r.a.createElement(w,Object.assign({key:e},t))})))))},k=(a(233),o.a.footer.withConfig({displayName:"layout__Footer",componentId:"ii2kc2-0"})(["height:120px;text-align:center;padding-top:49px;text-transform:none;"]));e.a=function(t){var e=t.children,a=n.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null),r.a.createElement(v,{menus:a.site.siteMetadata.routes}),r.a.createElement("div",{style:{margin:"0 auto",paddingTop:70}},r.a.createElement("main",null,e),r.a.createElement(k,null,r.a.createElement(c.a,{variant:"subtitle1"},(new Date).getFullYear()," Margaret Wong. All rights reserved."))))}}}]);
//# sourceMappingURL=component---src-pages-404-js-5f5f1510c35c5caae363.js.map