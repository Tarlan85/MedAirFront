"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[590],{7979:function(e,t,a){var n=a(2666);t.Z=function(){var e=(0,n.b)(),t=e.setRecipeList,a=e.setListRecipe,r=e.setFormValues,s=e.setVisitDataTable,i=e.setAnalisesDataTable;return{clearDataProfileTables:function(){r({Anket:{gender:"Female",alkogol:0,smoke:0},Potient:{},Morbi:{familyMembersList:[]},Vizit:{},treatmentRB:{},Analiz:{}}),s([]),t([]),a([]),i([])}}}},1320:function(e,t,a){var n=a(4942),r=a(5861),s=a(7757),i=a.n(s),c=a(2426),o=a.n(c),u=a(6871),l=a(4749),d=a(2666),m=a(7979);t.Z=function(){var e=(0,d.b)(),t=e.formValues,a=e.setRecipeList,s=e.setListRecipe,c=e.setFormValues,p=e.setVisitDataTable,f=e.setAnalisesDataTable,x=e.setSavedDrawingCanvas,h=e.setDescriptionsCanvas,b=e.setDataFamily,v=e.setDeseaseHistoryDynamicsList,Z=(0,u.s0)(),y=function(){var e=(0,r.Z)(i().mark((function e(t){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.Z)("vite/"+t,{},"get");case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(e){var t;if(null!==(t=e.data)&&void 0!==t&&t.familyMembersList)try{var a=[];e.data.familyMembersList.forEach((function(e){var t=e.familyMember,r=e.familyMemberInjury,s=e.familyMemberDied,i=e.familyMemberCurrentCancer,c=e.familyMemberDesc;a.push((0,n.Z)({},t,{trauma:r,dead:s,alive:i,description:c})),b(a)}))}catch(r){}},k=function(){var e=(0,r.Z)(i().mark((function e(a){var n,r,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.Z)("morby/"+a,{},"get");case 2:(n=e.sent)&&(t.Morbi=n.data,D(n),c(t),x(n.data.deseaseImagesList),null!==(r=n.data.deseaseImagesList)&&void 0!==r&&r.deseaseImageDesc&&(s=JSON.parse(n.data.deseaseImagesList.deseaseImageDesc),h(s)),v(n.data.deseaseHistoryDynamicsList));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,r.Z)(i().mark((function e(t){var a,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.Z)("visits/patientId/"+t,{},"get");case 2:a=e.sent;try{a.data[0]&&(n=a.data,p(n))}catch(r){console.log(r)}case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=(0,r.Z)(i().mark((function e(n){var r,o,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.Z)("treatment/"+n,{},"get");case 2:r=e.sent;try{r.data&&(t.treatmentRB=r.data,c(t),o=r.data.treatmentDynamics,u=r.data.recipeList,a(o),s(u))}catch(i){console.log(i)}case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=(0,r.Z)(i().mark((function e(t){var a,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.Z)("analyses/"+t,{},"get");case 2:a=e.sent;try{a.data[0]&&(n=a.data,f(n))}catch(r){console.log(r)}case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(e){try{Promise.all([y(e),k(e),g(e),j(e),I(e)])}catch(t){}},P=(0,m.Z)().clearDataProfileTables,N=function(){var e=(0,r.Z)(i().mark((function e(a){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(),e.prev=1,e.next=4,y(a.patientId);case 4:return n=e.sent,console.log(n.data),n.data.birthDate=n.data.birthDate?o()(n.data.birthDate):null,t.Anket=n.data,t.Potient=n.data,c(t),e.next=12,w(a.patientId);case 12:Z("/profile"),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}();return{onRowTable:N}}},1590:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(9439),r=a(2791),s=a(6106),i=a(9421),c=a(5597),o=a(2426),u=a.n(o),l=a(5861),d=a(7757),m=a.n(d),p=a(570),f=a(914),x=a(9389),h=a(7083),b=a(4749),v=a(7979),Z=a(184),y=function(e){var t=e.setdataSource,a=p.Z.useForm(),s=(0,n.Z)(a,1)[0],i=(0,r.useState)(!1),c=(0,n.Z)(i,2),o=c[0],u=c[1],d=(0,v.Z)().clearDataProfileTables,y=function(){var e=(0,l.Z)(m().mark((function e(){var a,n;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),d(),a=s.getFieldsValue(),e.prev=3,e.next=6,(0,b.Z)("search",a,"post");case 6:n=e.sent,t(n.data),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:return e.prev=13,u(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[3,10,13,16]])})));return function(){return e.apply(this,arguments)}}();return(0,Z.jsxs)(p.Z,{form:s,layout:"inline",children:[(0,Z.jsx)(f.Z,{sm:24,xs:24,md:12,xl:4,children:(0,Z.jsx)(p.Z.Item,{name:"patientId",label:"Patient \u2116",children:(0,Z.jsx)(x.Z,{placeholder:"Axtar..."})},"patientId")}),(0,Z.jsx)(f.Z,{sm:24,xs:24,md:12,xl:6,children:(0,Z.jsx)(p.Z.Item,{name:"patientName",label:"Name",children:(0,Z.jsx)(x.Z,{placeholder:"Axtar..."})},"patientName")}),(0,Z.jsx)(f.Z,{sm:24,xs:24,md:12,xl:6,children:(0,Z.jsx)(p.Z.Item,{name:"patientSurName",label:"Surename",children:(0,Z.jsx)(x.Z,{placeholder:"Axtar..."})},"patientSurName")}),(0,Z.jsx)(f.Z,{sm:24,xs:24,md:12,xl:6,children:(0,Z.jsx)(p.Z.Item,{name:"phoneNumber",label:"Phone number",children:(0,Z.jsx)(x.Z,{placeholder:"Axtar..."})},"phoneNumber")}),(0,Z.jsx)(f.Z,{sm:24,xs:24,md:12,xl:2,children:(0,Z.jsx)("button",{disabled:o,onClick:y,className:"new_button",children:o?(0,Z.jsx)(h.Z,{}):"Axtar"})})]})},D=(0,r.memo)(y),k=a(1320),g=function(){var e=(0,r.useState)([]),t=(0,n.Z)(e,2),a=t[0],o=t[1],l=[{title:"Name",dataIndex:"patientName",key:"patientName"},{title:"Surname",dataIndex:"patientSurName",key:"patientSurName"},{title:"Patronymic",dataIndex:"patientPatronymic",key:"patientPatronymic"},{title:"Birth date",dataIndex:"birthDate",key:"birthDate",render:function(e,t,a){return u()(e).format("DD-MM-YYYY")}},{title:"Birth Place",dataIndex:"birthPlace",key:"birthPlace"}],d=(0,k.Z)().onRowTable;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(D,{setdataSource:o}),(0,Z.jsx)(s.Z,{children:(0,Z.jsx)(c.Z,{locale:{emptyText:(0,Z.jsx)(i.Z,{image:i.Z.PRESENTED_IMAGE_SIMPLE,description:"Patient not found..."})},bordered:!0,className:"Table_Search",columns:l,dataSource:a,onRow:function(e,t){return{onClick:function(a){return d(e,t)}}}})})]})}},914:function(e,t,a){var n=a(9752);t.Z=n.Z}}]);
//# sourceMappingURL=590.120ff7f7.chunk.js.map