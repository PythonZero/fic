(this["webpackJsonpcontentful-static-react"]=this["webpackJsonpcontentful-static-react"]||[]).push([[0],{227:function(e,t,a){e.exports=a.p+"static/media/mosque.db66fa20.jpg"},239:function(e,t,a){e.exports=a(532)},244:function(e,t,a){},508:function(e,t,a){},532:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(40),c=(a(244),a(25)),o=a(26),l=a(31),s=a(29),m=a(65),u=a(16),p=a.n(u),d=a(41),f=a(51),g=a(89),b=a.n(g),h=a(230),E=function(){return Object(h.a)({space:"tc2ugf5w1e0f",accessToken:"8Tci5yT8Capjv8BtAaGCnIO69zuaMWQpucvbpO6WNVo"})},v=function(){var e=Object(d.a)(p.a.mark((function e(t,a){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getEntries({"sys.id[in]":a});case 2:return n=e.sent,r=n.items[0],e.abrupt("return",j(r));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),y=function(){var e=Object(d.a)(p.a.mark((function e(t){var a,n,r,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getContentTypes();case 2:return a=e.sent,e.next=5,a.items.find((function(e){return"Blog Post"===e.name}));case 5:return n=e.sent,r=n.sys.id,e.next=9,t.getEntries({content_type:r,order:"-fields.publishDate"});case 9:return i=e.sent,e.abrupt("return",O(i.items));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){return{id:e.sys.id,title:e.fields.title,date:e.fields.publishDate,description:e.fields.description,imageUrl:e.fields.image.fields.file.url,imageTitle:e.fields.image.fields.title,featured:!!e.fields.featured,body:e.fields.body}},O=function(e){return e.map((function(e){return j(e)}))},x=function(e){return e.filter((function(e){return e.featured}))},k=a(221),w=a.n(k),C=a(222),N=a.n(C),T=a(49),F=a.n(T),B=a(539),S=a(552),P=a(554),M=a(553),I=a(551),A=(a(508),N()((function(e){return{root:{padding:e.spacing(6,6),marginTop:e.spacing(6)},card:{display:"flex"},markdown:Object(f.a)(Object(f.a)({},e.typography.body2),{},{padding:e.spacing(2,0)})}}))),D=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentWillMount=Object(d.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=E(),e.next=3,v(t,n.props.match.params.id);case 3:a=e.sent,n.setState({post:a});case 5:case"end":return e.stop()}}),e)}))),n.state={data:null},n}return Object(o.a)(a,[{key:"render",value:function(){var e,t,a,i,c,o;this.state.post&&(e=this.state.post.title,t=(o=this.state.post.body)?w()({createElement:n.createElement,elements:{}})(o).tree:null,a=this.state.post.description,i=this.state.post.imageUrl,c=this.state.post.imageTitle);var l=this.props.classes;return r.a.createElement(I.a,{item:!0,xs:12,className:l.markdown},r.a.createElement(b.a,{title:e}),r.a.createElement(S.a,{className:l.card},r.a.createElement(M.a,null,r.a.createElement(B.a,{gutterBottom:!0,component:"h2",variant:"h5"},e),r.a.createElement(B.a,{variant:"subtitle1",color:"textSecondary"},a),r.a.createElement(P.a,{component:"img",image:i,title:c}),r.a.createElement(B.a,{variant:"subtitle1",paragraph:!0},t))))}}]),a}(n.Component),W=F()(A)(D),U=a(555),G=a(560),z=a(559),J=a(556),L=a(558),R=a(226),q=a.n(R),Q=a(557),V="pythonzero.github.io"===window.location.hostname,X=V?"/fic/":"/",Y=V?"/fic/post":"/post",_=Object(U.a)((function(e){return{toolbar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbarTitle:{flex:1},toolbarSecondary:{justifyContent:"space-between",overflowX:"auto"},toolbarLink:{padding:e.spacing(1),flexShrink:0}}}));function H(e){var t=_(),a=e.sections,n=e.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{className:t.toolbar},r.a.createElement(B.a,{component:"h2",variant:"h5",color:"inherit",align:"center",noWrap:!0,className:t.toolbarTitle},r.a.createElement(Q.a,{color:"inherit",href:X},n)),r.a.createElement(L.a,null,r.a.createElement(q.a,null))),r.a.createElement(J.a,{component:"nav",variant:"dense",className:t.toolbarSecondary},a.map((function(e){return r.a.createElement(Q.a,{color:"inherit",noWrap:!0,key:e.title,variant:"body2",href:e.url,className:t.toolbarLink},e.title)}))))}function K(){return r.a.createElement(B.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(Q.a,{color:"inherit",href:"https://material-ui.com/"},"Fine Islamic Centre")," ",(new Date).getFullYear(),".")}var Z=Object(U.a)((function(e){return{footer:{padding:e.spacing(6,0)}}}));function $(e){var t=Z(),a=e.description,n=e.title;return r.a.createElement("footer",{className:t.footer},r.a.createElement(z.a,{maxWidth:"lg"},r.a.createElement(B.a,{variant:"h6",align:"center",gutterBottom:!0},n),r.a.createElement(B.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},a),r.a.createElement(K,null)))}var ee=Object(U.a)((function(e){return{mainGrid:{marginTop:e.spacing(3)}}})),te=[{title:"Prayer Times",url:X},{title:"Mosque",url:X},{title:"FAQs",url:X},{title:"Contact",url:X}],ae=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={posts:[],featuredPosts:[]},e}return Object(o.a)(a,[{key:"render",value:function(){this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,null),r.a.createElement(z.a,{maxWidth:"lg"},r.a.createElement(H,{title:"Fine Islamic Centre",sections:te,link:""}),r.a.createElement("main",null,this.props.children)),r.a.createElement($,{title:"Fine Islamic Centre (FIC)",description:"Company Number: 12852476"}))}}]),a}(n.Component),ne=F()(ee)(ae),re=a(229),ie=a.n(re),ce=a(228),oe=a.n(ce),le=a(88),se=a(538),me=Object(U.a)((function(e){return{mainFeaturedPost:{position:"relative",backgroundColor:e.palette.grey[800],color:e.palette.common.white,marginBottom:e.spacing(4),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},overlay:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.3)"},mainFeaturedPostContent:Object(le.a)({position:"relative",padding:e.spacing(3)},e.breakpoints.up("md"),{padding:e.spacing(6),paddingRight:0})}}));function ue(e){var t=me(),a=e.post;return r.a.createElement(se.a,{className:t.mainFeaturedPost,style:{backgroundImage:"url(".concat(a.image,")")}},r.a.createElement("img",{style:{display:"none"},src:a.image,alt:a.imageText}),r.a.createElement("div",{className:t.overlay}),r.a.createElement(I.a,{container:!0},r.a.createElement(I.a,{item:!0,md:6},r.a.createElement("div",{className:t.mainFeaturedPostContent},r.a.createElement(B.a,{component:"h1",variant:"h3",color:"inherit",gutterBottom:!0},a.title),r.a.createElement(B.a,{variant:"h5",color:"inherit",paragraph:!0},a.description.split("\n").map((function(e,t){return r.a.createElement("div",{key:t},e)})))))))}var pe=a(561),de=a(563),fe=Object(U.a)({card:{display:"flex"},cardDetails:{flex:1},cardMedia:{width:160}});function ge(e){var t,a,n=fe(),i=e.post;return r.a.createElement(I.a,{item:!0,xs:12,md:6},r.a.createElement(pe.a,{component:"a",href:"".concat(Y,"/").concat(i.id,"/")},r.a.createElement(S.a,{className:n.card},r.a.createElement("div",{className:n.cardDetails},r.a.createElement(M.a,null,r.a.createElement(B.a,{component:"h2",variant:"h5"},i.title),r.a.createElement(B.a,{variant:"subtitle1",color:"textSecondary"},i.date),r.a.createElement(B.a,{variant:"subtitle1",paragraph:!0},(t=i.description,a=(a=100)||100,t.length<a?t:t.slice(0,a-3)+"...")),r.a.createElement(B.a,{variant:"subtitle1",color:"primary"},"Continue reading..."))),r.a.createElement(de.a,{xsDown:!0},r.a.createElement(P.a,{className:n.cardMedia,image:i.imageUrl,title:i.imageTitle})))))}var be=a(562),he=Object(U.a)((function(e){return{card:{display:"flex"},cardDetails:{flex:1},cardMedia:{width:200},mobileCardMedia:{height:140},markdown:Object(f.a)(Object(f.a)({},e.typography.body2),{},{padding:e.spacing(2,0)})}}));function Ee(e){var t=he(),a=e.post;return r.a.createElement(I.a,{item:!0,xs:12,className:t.markdown},r.a.createElement(pe.a,{component:"a",href:"".concat(Y,"/").concat(a.id,"/")},r.a.createElement(de.a,{mdUp:!0},r.a.createElement(P.a,{className:t.mobileCardMedia,image:a.imageUrl,title:"Contemplative Reptile"})),r.a.createElement(S.a,{className:t.card},r.a.createElement(de.a,{smDown:!0},r.a.createElement(P.a,{className:t.cardMedia,image:a.imageUrl,title:a.imageTitle})),r.a.createElement("div",{className:t.cardDetails},r.a.createElement(M.a,null,r.a.createElement(B.a,{gutterBottom:!0,component:"h2",variant:"h5"},a.title),r.a.createElement(B.a,{variant:"subtitle1",color:"textSecondary"},a.date),r.a.createElement(B.a,{variant:"subtitle1",paragraph:!0},a.description),r.a.createElement(B.a,{variant:"subtitle1",color:"primary"},"Continue reading..."))))))}function ve(e){var t=e.posts,a=e.title;return r.a.createElement(I.a,{item:!0,xs:12,md:8},r.a.createElement(B.a,{variant:"h6",gutterBottom:!0},a),r.a.createElement(be.a,null),t.map((function(e){return r.a.createElement(Ee,{key:e.id,post:e})})),r.a.createElement(be.a,null))}var ye=Object(U.a)((function(e){return{sidebarAboutBox:{padding:e.spacing(2),backgroundColor:e.palette.grey[200]},sidebarSection:{marginTop:e.spacing(3)}}}));function je(e){var t=ye(),a=(e.archives,e.description),n=e.social,i=e.title;return r.a.createElement(I.a,{item:!0,xs:12,md:4},r.a.createElement(se.a,{elevation:0,className:t.sidebarAboutBox},r.a.createElement(B.a,{variant:"h6",gutterBottom:!0},i),r.a.createElement(B.a,null,a)),r.a.createElement(B.a,{variant:"h6",gutterBottom:!0,className:t.sidebarSection},"Social"),n.map((function(e){return r.a.createElement(Q.a,{display:"block",variant:"body1",href:e.url,key:e},r.a.createElement(I.a,{container:!0,direction:"row",spacing:1,alignItems:"center"},r.a.createElement(I.a,{item:!0},r.a.createElement(e.icon,null)),r.a.createElement(I.a,{item:!0},e.name)))})))}var Oe=a(227),xe=a.n(Oe),ke=Object(U.a)((function(e){return{mainGrid:{marginTop:e.spacing(3)}}})),we={title:"Prayer Times",description:"Fajr:\nDhuhr:\nAsr:\nMaghrib:\nIsha:\n",image:xe.a,imgText:"main image description"},Ce={title:"About",description:"Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",archives:[{title:"March 2020",url:X},{title:"February 2020",url:X},{title:"January 2020",url:X}],social:[{name:"Twitter",icon:oe.a,url:X},{name:"Facebook",icon:ie.a,url:X}]},Ne=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={posts:[],featuredPosts:[]},e.componentWillMount=Object(d.a)(p.a.mark((function t(){var a,n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=E(),t.next=3,y(a);case 3:n=t.sent,r=x(n),e.setState({posts:n,featuredPosts:r});case 6:case"end":return t.stop()}}),t)}))),e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(ue,{post:we}),r.a.createElement(I.a,{container:!0,spacing:4},this.state.featuredPosts&&this.state.featuredPosts.slice(0,2).map((function(e){return r.a.createElement(ge,{key:e.id,post:e})}))),r.a.createElement(I.a,{container:!0,spacing:5,className:e.mainGrid},r.a.createElement(ve,{title:"Latest news",posts:this.state.posts}),r.a.createElement(je,{title:Ce.title,description:Ce.description,archives:Ce.archives,social:Ce.social})))}}]),a}(n.Component),Te=F()(ke)(Ne),Fe=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(ne,null,r.a.createElement(b.a,{title:"FIC - Fine Islamic Centre"}),r.a.createElement(m.c,null,r.a.createElement(m.b,{path:"".concat(Y,"/:id"),component:W}),r.a.createElement(m.b,{path:X,component:Te})))))}}]),a}(n.Component),Be=document.getElementById("root");Be.hasChildNodes()?Object(i.hydrate)(r.a.createElement(Fe,null),Be):Object(i.render)(r.a.createElement(Fe,null),Be)}},[[239,1,2]]]);
//# sourceMappingURL=main.9685f916.chunk.js.map