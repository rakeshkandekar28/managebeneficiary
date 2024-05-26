(this["webpackJsonpbank-beneficiary"]=this["webpackJsonpbank-beneficiary"]||[]).push([[0],{167:function(e,t,n){},175:function(e,t,n){},180:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(48),a=n.n(c),i=n(119),s=n(22),l=(n(166),n(167),n(4)),o=n(3),j=n(67),u=n(157),d=n(64),b=n(13),h=n.n(b),O=n(27),p="CREATE_BENEFICIARY",m="RETRIEVE_BENEFICIARY",f="UPDATE_BENEFICIARY",x="DELETE_BENEFICIARY",v="DELETE_ALL_BENEFICIARY",y=n(2),N=function(e){var t,n,c,a,i,s,b,m=e.setShowAddComp,x=e.selectedBeneficiary,v=e.setselectedBeneficiary,N=Object(u.a)(),g=N.register,E=N.formState.errors,k=N.handleSubmit,A=N.reset,B=N.setValue,w=Object(j.b)(),F=Object(j.c)((function(e){return e.beneficiary}));Object(r.useEffect)((function(){C(x)}),[x]);var C=function(e){e&&Object.entries(e).forEach((function(e){var t=Object(o.a)(e,2),n=t[0],r=t[1];return B(n,r)}))};return Object(y.jsx)("div",{className:"submit-form",children:Object(y.jsxs)("form",{children:[Object(y.jsxs)("div",{className:"form-group",children:[Object(y.jsx)("label",{htmlFor:"title",children:"Name"}),Object(y.jsx)("input",Object(l.a)(Object(l.a)({className:"form-control"},g("name",{required:!0,pattern:/^[a-zA-Z ]+$/})),{},{"aria-invalid":E.name?"true":"false"})),"required"===(null===(t=E.name)||void 0===t?void 0:t.type)&&Object(y.jsx)("p",{role:"alert",className:"error",children:"name is required"}),"pattern"===(null===(n=E.name)||void 0===n?void 0:n.type)&&Object(y.jsx)("p",{role:"alert",className:"error",children:"Allow Only String"})]}),Object(y.jsxs)("div",{className:"form-group",children:[Object(y.jsx)("label",{htmlFor:"title",children:"Account Number"}),Object(y.jsx)("input",Object(l.a)(Object(l.a)({className:"form-control"},g("acnumber",{required:!0,pattern:/^[0-9]+$/})),{},{"aria-invalid":E.acnumber?"true":"false"})),"required"===(null===(c=E.acnumber)||void 0===c?void 0:c.type)&&Object(y.jsx)("p",{role:"alert",className:"error",children:"Account Number is required"}),"pattern"===(null===(a=E.acnumber)||void 0===a?void 0:a.type)&&Object(y.jsx)("p",{role:"alert",className:"error",children:"Allow Only Numbers"})]}),Object(y.jsxs)("div",{className:"form-group",children:[Object(y.jsx)("label",{htmlFor:"title",children:"Bank Name"}),Object(y.jsx)("input",Object(l.a)(Object(l.a)({className:"form-control"},g("bankname",{required:!0,pattern:/^[a-zA-Z ]+$/})),{},{"aria-invalid":E.bankname?"true":"false"})),"required"===(null===(i=E.bankname)||void 0===i?void 0:i.type)&&Object(y.jsx)("p",{role:"alert",className:"error",children:"Bank Name is required"}),"pattern"===(null===(s=E.bankname)||void 0===s?void 0:s.type)&&Object(y.jsx)("p",{role:"alert",className:"error",children:"Allow Only String"})]}),Object(y.jsxs)("div",{className:"form-group",children:[Object(y.jsx)("label",{htmlFor:"title",children:"Select Account Type"}),Object(y.jsxs)("select",Object(l.a)(Object(l.a)({className:"form-control"},g("actype",{required:!0})),{},{"aria-invalid":E.actype?"true":"false",children:[Object(y.jsx)("option",{value:"",children:"Select Account Type"}),Object(y.jsx)("option",{value:"saving",children:"Saving"}),Object(y.jsx)("option",{value:"current",children:"Current"}),Object(y.jsx)("option",{value:"other",children:"other"})]})),"required"===(null===(b=E.actype)||void 0===b?void 0:b.type)&&Object(y.jsx)("p",{role:"alert",className:"error",children:"Account Type is required"})]}),Object(y.jsx)("div",{className:"text-right",children:Object(y.jsx)(d.a,{type:"submit",className:"btn btn-success",onClick:k((function(e){if(x){var t=[];F.map((function(n){console.log(n),n.id===e.id?t.push(e):t.push(n)})),w(function(e){return function(){var t=Object(O.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:f,payload:e}),t.abrupt("return",Promise.resolve(e));case 5:return t.prev=5,t.t0=t.catch(0),t.abrupt("return",Promise.reject(t.t0));case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}()}(t)).then((function(e){A(),v(null),m(!1)})).catch((function(e){console.log(e)}))}else{var n=Object(l.a)(Object(l.a)({},e),{},{id:F.length+1||1});w(function(e){return function(){var t=Object(O.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:p,payload:e}),t.abrupt("return",Promise.resolve(e));case 5:return t.prev=5,t.t0=t.catch(0),t.abrupt("return",Promise.reject(t.t0));case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}()}(n)).then((function(e){A(),m(!1)})).catch((function(e){console.log(e)}))}})),children:x?"Update":"Submit"})})]})})},g=n(185),E=(n(175),n(184)),k=function(e){var t=e.visibleModal,n=e.setVisibleModal,r=e.selectedViewBeneficiary;return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(E.a,{title:"",open:t,onCancel:function(){return n(!1)},footer:null,children:[Object(y.jsxs)("p",{children:[Object(y.jsx)("strong",{children:"Name:"})," ",r.name]}),Object(y.jsxs)("p",{children:[Object(y.jsx)("strong",{children:"Account Number:"})," ",r.acnumber]}),Object(y.jsxs)("p",{children:[Object(y.jsx)("strong",{children:"Bank Name:"})," ",r.bankname]}),Object(y.jsxs)("p",{children:[Object(y.jsx)("strong",{children:"Accont Type:"})," ",r.actype]})]})})},A=function(e){var t=Object(r.useState)(!1),n=Object(o.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)(null),s=Object(o.a)(i,2),l=s[0],u=s[1],b=e.getBeneficiaryDetails,p=Object(j.c)((function(e){return e.beneficiary})),m=Object(j.b)(),f=function(e,t,n){var r;e.stopPropagation(),m((r=t.id,function(){var e=Object(O.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:x,payload:{id:r}}),e.abrupt("return",Promise.resolve(r));case 5:return e.prev=5,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",Promise.reject(e.t0));case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}())).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{className:"list row",children:Object(y.jsxs)("div",{className:"col-md-12",children:[Object(y.jsx)("h4",{children:"Beneficiary List"}),Object(y.jsxs)("table",{children:[Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"Name"}),Object(y.jsx)("th",{children:"Actions"})]}),p&&p.length?Object(y.jsx)(y.Fragment,{children:p.map((function(e,t){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:e.name}),Object(y.jsx)("td",{children:Object(y.jsxs)("div",{className:"actionwrapper",children:[Object(y.jsx)(d.a,{onClick:function(t){return function(e,t){e.stopPropagation(),a(!0),u(t)}(t,e)},className:"viewaction",children:"View"}),Object(y.jsx)(g.a,{title:"Edit the Beneficiary",description:"Are you sure to Edit this Beneficiary?",onConfirm:function(t){return function(e,t,n){e.stopPropagation(),b(t)}(t,e)},okText:"Yes",cancelText:"No",children:Object(y.jsx)(d.a,{className:"editaction",children:"Edit"})}),Object(y.jsx)(g.a,{title:"Delete the Beneficiary",description:"Are you sure to delete this Beneficiary?",onConfirm:function(t){return f(t,e)},okText:"Yes",cancelText:"No",children:Object(y.jsx)(d.a,{danger:!0,className:"deleteaction",children:"Delete"})})]})})]},t)}))}):Object(y.jsx)("td",{className:"text-center",colSpan:2,children:"No Data Found"})]})]})}),c&&Object(y.jsx)(k,{visibleModal:c,setVisibleModal:a,selectedViewBeneficiary:l})]})},B=function(e){var t=Object(r.useState)(!1),n=Object(o.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)(null),s=Object(o.a)(i,2),l=s[0],j=s[1];return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{className:"text-center",children:c?Object(y.jsx)(d.a,{onClick:function(){return a(!1)},children:"Back to Manage"}):Object(y.jsx)(d.a,{onClick:function(){return j(null),void a(!0)},children:"Add Beneficiary"})}),c?Object(y.jsx)(N,{setShowAddComp:a,selectedBeneficiary:l,setselectedBeneficiary:j}):Object(y.jsx)(A,{getBeneficiaryDetails:function(e){j(e),a(!0)}})]})},w=function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",{className:"text-center",children:"404 Page Not Found"})})};var F=function(e){return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(i.a,{children:[Object(y.jsxs)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:[Object(y.jsx)("a",{href:"/",className:"navbar-brand",children:"Home"}),Object(y.jsx)("div",{className:"navbar-nav mr-auto",children:Object(y.jsx)("li",{className:"nav-item",children:Object(y.jsx)(i.b,{to:"/manage",className:"nav-link",children:"Manage beneficiary"})})})]}),Object(y.jsx)("div",{className:"container mt-3",children:Object(y.jsxs)(s.c,{children:[Object(y.jsx)(s.a,{exact:!0,path:["/"]}),Object(y.jsx)(s.a,{path:"/add",component:N}),Object(y.jsx)(s.a,{path:"/manage",component:B}),Object(y.jsx)(s.a,{path:"*",component:w})]})})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,187)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},S=n(152),T=n(42),I=n(153),P=n(154),q=n(20),D=[],R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case p:return[].concat(Object(q.a)(e),[r]);case m:case f:return r;case x:return e.filter((function(e){return e.id!==r.id}));case v:return[];default:return e}},L=Object(T.combineReducers)({beneficiary:R}),M=n(132),V=n(155),Y={key:"root",storage:n.n(V).a},_=Object(M.a)(Y,L),$=[P.a],z=Object(T.createStore)(_,{},Object(I.composeWithDevTools)(T.applyMiddleware.apply(void 0,$))),J=Object(M.b)(z);a.a.render(Object(y.jsx)(j.a,{store:z,children:Object(y.jsx)(S.a,{loading:null,persistor:J,children:Object(y.jsx)(F,{})})}),document.getElementById("root")),C()}},[[180,1,2]]]);
//# sourceMappingURL=main.72aa7a9c.chunk.js.map