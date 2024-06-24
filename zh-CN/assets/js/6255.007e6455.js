"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[6255],{56255:(e,t,l)=>{l.d(t,{diagram:()=>f});var a=l(54706),n=l(64218),o=l(45625),i=l(85322),s=l(87936);l(27484),l(17967),l(27856),l(41644),l(39354);const d=e=>i.e.sanitizeText(e,(0,i.c)());let r={dividerMargin:10,padding:5,textHeight:10,curve:void 0};const c=function(e,t,l,a,n){const o=Object.keys(e);i.l.info("keys:",o),i.l.info(e),o.filter((t=>e[t].parent==n)).forEach((function(l){var o,s;const r=e[l],c=r.cssClasses.join(" "),p="",b="",f=r.label??r.id,u={labelStyle:p,shape:"class_box",labelText:d(f),classData:r,rx:0,ry:0,class:c,style:b,id:r.id,domId:r.domId,tooltip:a.db.getTooltip(r.id,n)||"",haveCallback:r.haveCallback,link:r.link,width:"group"===r.type?500:void 0,type:r.type,padding:(null==(o=(0,i.c)().flowchart)?void 0:o.padding)??(null==(s=(0,i.c)().class)?void 0:s.padding)};t.setNode(r.id,u),n&&t.setParent(r.id,n),i.l.info("setNode",u)}))};function p(e){let t;switch(e){case 0:t="aggregation";break;case 1:t="extension";break;case 2:t="composition";break;case 3:t="dependency";break;case 4:t="lollipop";break;default:t="none"}return t}const b={setConf:function(e){r={...r,...e}},draw:async function(e,t,l,a){i.l.info("Drawing class - ",t);const b=(0,i.c)().flowchart??(0,i.c)().class,f=(0,i.c)().securityLevel;i.l.info("config:",b);const u=(null==b?void 0:b.nodeSpacing)??50,g=(null==b?void 0:b.rankSpacing)??50,y=new o.k({multigraph:!0,compound:!0}).setGraph({rankdir:a.db.getDirection(),nodesep:u,ranksep:g,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}})),h=a.db.getNamespaces(),v=a.db.getClasses(),w=a.db.getRelations(),k=a.db.getNotes();let x;i.l.info(w),function(e,t,l,a){const n=Object.keys(e);i.l.info("keys:",n),i.l.info(e),n.forEach((function(n){var o,s;const r=e[n],p={shape:"rect",id:r.id,domId:r.domId,labelText:d(r.id),labelStyle:"",style:"fill: none; stroke: black",padding:(null==(o=(0,i.c)().flowchart)?void 0:o.padding)??(null==(s=(0,i.c)().class)?void 0:s.padding)};t.setNode(r.id,p),c(r.classes,t,l,a,r.id),i.l.info("setNode",p)}))}(h,y,t,a),c(v,y,t,a),function(e,t){const l=(0,i.c)().flowchart;let a=0;e.forEach((function(e){var o;a++;const s={classes:"relation",pattern:1==e.relation.lineType?"dashed":"solid",id:"id"+a,arrowhead:"arrow_open"===e.type?"none":"normal",startLabelRight:"none"===e.relationTitle1?"":e.relationTitle1,endLabelLeft:"none"===e.relationTitle2?"":e.relationTitle2,arrowTypeStart:p(e.relation.type1),arrowTypeEnd:p(e.relation.type2),style:"fill:none",labelStyle:"",curve:(0,i.n)(null==l?void 0:l.curve,n.c_6)};if(i.l.info(s,e),void 0!==e.style){const t=(0,i.k)(e.style);s.style=t.style,s.labelStyle=t.labelStyle}e.text=e.title,void 0===e.text?void 0!==e.style&&(s.arrowheadStyle="fill: #333"):(s.arrowheadStyle="fill: #333",s.labelpos="c",(null==(o=(0,i.c)().flowchart)?void 0:o.htmlLabels)??(0,i.c)().htmlLabels?(s.labelType="html",s.label='<span class="edgeLabel">'+e.text+"</span>"):(s.labelType="text",s.label=e.text.replace(i.e.lineBreakRegex,"\n"),void 0===e.style&&(s.style=s.style||"stroke: #333; stroke-width: 1.5px;fill:none"),s.labelStyle=s.labelStyle.replace("color:","fill:"))),t.setEdge(e.id1,e.id2,s,a)}))}(w,y),function(e,t,l,a){i.l.info(e),e.forEach((function(e,o){var s,c;const p=e,b="",f="",u=p.text,g={labelStyle:b,shape:"note",labelText:d(u),noteData:p,rx:0,ry:0,class:"",style:f,id:p.id,domId:p.id,tooltip:"",type:"note",padding:(null==(s=(0,i.c)().flowchart)?void 0:s.padding)??(null==(c=(0,i.c)().class)?void 0:c.padding)};if(t.setNode(p.id,g),i.l.info("setNode",g),!p.class||!(p.class in a))return;const y=l+o,h={id:`edgeNote${y}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:(0,i.n)(r.curve,n.c_6)};t.setEdge(p.id,p.class,h,y)}))}(k,y,w.length+1,v),"sandbox"===f&&(x=(0,n.Ys)("#i"+t));const m="sandbox"===f?(0,n.Ys)(x.nodes()[0].contentDocument.body):(0,n.Ys)("body"),T=m.select(`[id="${t}"]`),S=m.select("#"+t+" g");if(await(0,s.r)(S,y,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",t),i.u.insertTitle(T,"classTitleText",(null==b?void 0:b.titleTopMargin)??5,a.db.getDiagramTitle()),(0,i.o)(y,T,null==b?void 0:b.diagramPadding,null==b?void 0:b.useMaxWidth),!(null==b?void 0:b.htmlLabels)){const e="sandbox"===f?x.nodes()[0].contentDocument:document,l=e.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const t of l){const l=t.getBBox(),a=e.createElementNS("http://www.w3.org/2000/svg","rect");a.setAttribute("rx",0),a.setAttribute("ry",0),a.setAttribute("width",l.width),a.setAttribute("height",l.height),t.insertBefore(a,t.firstChild)}}}},f={parser:a.p,db:a.d,renderer:b,styles:a.s,init:e=>{e.class||(e.class={}),e.class.arrowMarkerAbsolute=e.arrowMarkerAbsolute,a.d.clear()}}}}]);