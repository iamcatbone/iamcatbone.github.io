(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{175:function(t,e,a){"use strict";a.r(e),a.d(e,"default",function(){return p}),a.d(e,"pageQuery",function(){return u});var n=a(298),r=a(0),i=a.n(r),o=a(182),l=a(193),c=a(191),s=o.a.div.withConfig({displayName:"blogTemplate__BlogBodyWrapper",componentId:"sc-1iw0vk6-0"})(["min-width:1400px;padding-left:200px;padding-right:200px;"]);function p(t){var e=t.data.markdownRemark,a=e.frontmatter,r=e.html;return i.a.createElement(l.a,null,i.a.createElement(c.a,{title:a.title}),a.banner&&i.a.createElement("img",{src:a.banner,alt:a.title,style:{width:"100%",height:450,objectFit:"cover"}}),i.a.createElement(s,null,i.a.createElement(n.a,{variant:"h4",gutterBottom:!0},a.title),i.a.createElement(n.a,{variant:"h6",gutterBottom:!0,style:{color:"#bdbdbd"}},a.date),i.a.createElement(n.a,{variant:"subtitle1",gutterBottom:!0},a.desc),i.a.createElement("br",null),i.a.createElement(n.a,{variant:"subtitle1",gutterBottom:!0,className:"blog-post-content",dangerouslySetInnerHTML:{__html:r}})))}var u="632457220"},186:function(t,e,a){var n;t.exports=(n=a(190))&&n.default||n},189:function(t){t.exports={data:{site:{siteMetadata:{title:"Margaret Wong",routes:[{title:"Home",buttons:[{title:null,path:"/"}]},{title:"Designs",buttons:[{title:"UI UX Design works",path:"/ui-ux-design"},{title:"Graphic Design works",path:"/graphic-design"}]},{title:"Illustrations",buttons:[{title:"My Illustrations",path:"/illustrations"}]},{title:"Sketches",buttons:[{title:"My Sketches",path:"/"}]}]}}}}},190:function(t,e,a){"use strict";a.r(e);a(22);var n=a(0),r=a.n(n),i=a(11),o=a.n(i),l=a(85),c=function(t){var e=t.location,a=t.pageResources;return a?r.a.createElement(l.a,Object.assign({location:e,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=c},191:function(t,e,a){"use strict";var n=a(192),r=a(0),i=a.n(r),o=a(11),l=a.n(o),c=a(202),s=a.n(c);function p(t){var e=t.description,a=t.lang,r=t.meta,o=t.title,l=n.data.site,c=e||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(r)})}p.defaultProps={lang:"en",meta:[],description:""},p.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},e.a=p},192:function(t){t.exports={data:{site:{siteMetadata:{title:"Margaret Wong",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},193:function(t,e,a){"use strict";var n=a(189),r=a(0),i=a.n(r),o=a(11),l=a.n(o),c=a(182),s=a(298),p=(a(22),a(296)),u=a(297),m=a(295),d=a(58),g=a.n(d);a(186),i.a.createContext({});l.a.object,l.a.string.isRequired,l.a.func,l.a.func;var h=a(293),f=a(300),b=Object(c.a)(h.a).withConfig({displayName:"headerMenu__MenuButton",componentId:"sc-27zt0t-0"})(["height:110px;padding-left:15px !important;padding-right:15px !important;"]),y=Object(c.a)(g.a).withConfig({displayName:"headerMenu__MenuLink",componentId:"sc-27zt0t-1"})(["color:black !important;text-decoration:none !important;"]),E=function(t){var e=t.buttons,a=t.title,n=i.a.useState(null),r=n[0],o=n[1],l=function(){o(null)};return 1===e.length?i.a.createElement(y,{to:e[0].path},i.a.createElement(b,null,a)):[i.a.createElement(b,{key:"button","aria-controls":"menu","aria-haspopup":"true",onClick:function(t){o(t.currentTarget)}},a),i.a.createElement(f.a,{id:"menu",key:"menu",anchorEl:r,keepMounted:!0,open:Boolean(r),onClose:l,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},e.map(function(t,e){var a=t.title,n=t.path;return i.a.createElement("div",{key:e},i.a.createElement(y,{to:n},i.a.createElement(b,{onClick:l,fullWidth:!0},a)))}))]},v=Object(c.a)(m.a).withConfig({displayName:"header__AppToolbar",componentId:"sc-31ozxh-0"})(["height:110px;background-color:white;"]),w=c.a.div.withConfig({displayName:"header__AppToolbarIcon",componentId:"sc-31ozxh-1"})(["flex-grow:1;color:black;text-decoration:none;"]),x=c.a.img.withConfig({displayName:"header__AppToolbarIconImage",componentId:"sc-31ozxh-2"})(["margin-bottom:0 !important;"]),k=c.a.div.withConfig({displayName:"header__MenuButtonWrapper",componentId:"sc-31ozxh-3"})(["margin-right:55px;"]),M=function(t){var e=t.menus;return i.a.createElement(p.a,{position:"static"},i.a.createElement(u.a,null,i.a.createElement(v,null,i.a.createElement(w,null,i.a.createElement(g.a,{to:"/"},i.a.createElement(x,{src:"/header.png",alt:"home"}))),i.a.createElement(k,null,e.map(function(t,e){return i.a.createElement(E,Object.assign({key:e},t))})))))};M.propTypes={siteTitle:l.a.string},M.defaultProps={siteTitle:""};var _=M,I=(a(201),c.a.footer.withConfig({displayName:"layout__Footer",componentId:"ii2kc2-0"})(["height:89px;text-align:center;padding-top:29px;text-transform:none;"])),T=function(t){var e=t.children,a=n.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(_,{menus:a.site.siteMetadata.routes}),i.a.createElement("div",{style:{margin:"0 auto",paddingTop:0}},i.a.createElement("main",null,e),i.a.createElement(I,null,i.a.createElement(s.a,{variant:"h6"},(new Date).getFullYear()," Margaret Wong. All rights reserved."))))};T.propTypes={children:l.a.node.isRequired};e.a=T}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-720b06e2d23a7bda0d1a.js.map