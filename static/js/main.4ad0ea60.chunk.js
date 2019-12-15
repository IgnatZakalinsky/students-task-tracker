(this["webpackJsonpstudents-task-tracker"]=this["webpackJsonpstudents-task-tracker"]||[]).push([[0],{109:function(e,t,n){e.exports=n(189)},114:function(e,t,n){},115:function(e,t,n){},189:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(27),s=n.n(o),c=(n(114),n(115),n(23)),u=n(3),l=n(107),i=n(8),d=n(191),m=n(79),k={display:"flex"},E=Object(u.a)({},k,{alignItems:"center"}),T=Object(u.a)({},E,{justifyContent:"center"}),b=Object(u.a)({},E,{justifyContent:"space-around"}),f=Object(u.a)({},T,{height:"80vh"}),g=Object(u.a)({},k,{flexFlow:"column"}),S=Object(u.a)({},g,{alignItems:"center"}),v=Object(u.a)({},S,{justifyContent:"center"}),p=(Object(u.a)({},S,{justifyContent:"space-around"}),Object(u.a)({},v,{minHeight:"80vh"})),C=function(e){var t=e.name,n=e.studentSetNameCallback,r=e.goToSessionCallback,o=e.error,s=e.loading;return a.a.createElement("div",{style:p},!!o&&a.a.createElement("div",{style:{color:"red"}},o),s&&a.a.createElement("div",{style:{color:"orange"}},"Loading..."),a.a.createElement(d.a,{placeholder:"Name Surname",value:t,onChange:function(e){return n(e.currentTarget.value)},style:{width:"400px",margin:"20px"},disabled:s}),a.a.createElement(m.a,{onClick:r,disabled:s,type:"primary"},"Go to session"))},h=n(6),O=function(e){return{type:"STUDENT/LOADING",loading:e}},N=function(e,t){return{type:"STUDENT/SUCCESS",studentToken:e,taskCount:t}},y=function(e){return{type:"STUDENT/ERROR",error:e}},j=function(e){return{type:"STUDENT/SET_NAME",name:e}},w=n(20),R=n.n(w),U=n(55),x=n.n(U),_="https://pacific-lake-87230.herokuapp.com",D=x.a.create({baseURL:_}),M=function(e,t){return D.post("/student",{name:e,sessionToken:t})},I=function(e,t,n,r){return D.put("/student",{name:n,sessionToken:t,studentToken:e,currentTaskNumber:r})},L=function(e){var t=e.sessionToken,n=Object(h.c)((function(e){return e.student})),o=Object(h.b)();Object(r.useEffect)((function(){console.log("sessionToken:",t),t&&o(function(e){return{type:"STUDENT/SET_SESSION_TOKEN",sessionToken:e}}(t))}),[]);return n.studentToken?a.a.createElement(i.a,{to:ee}):a.a.createElement(C,{name:n.name,error:n.error,loading:n.loading,studentSetNameCallback:function(e){o(j(e))},goToSessionCallback:function(){o((function(e,t){var n,r,a,o;return R.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return n=t().student,r=n.name,a=n.sessionToken,e(O(!0)),s.prev=2,s.next=5,R.a.awrap(M(r,a));case 5:(o=s.sent).data.error?e(y(o.data.error)):(e(N(o.data.studentToken,o.data.taskCount)),console.log("Student goToSession Success!",o)),s.next=13;break;case 9:s.prev=9,s.t0=s.catch(2),e(y(s.t0.message)),console.log("Student goToSession Error!",s.t0);case 13:case"end":return s.stop()}}),null,null,[[2,9]])}))}})},A=n(192),G=function(e){var t=e.name,n=e.taskCount,r=e.currentTaskNumber,o=e.error,s=e.loading,c=e.studentSetNameCallback,u=e.studentSetCurrentTaskNumberCallback,l=e.updateStudentCallback;return a.a.createElement("div",{style:p},!!o&&a.a.createElement("div",{style:{color:"red"}},o),s&&a.a.createElement("div",{style:{color:"orange"}},"Loading..."),a.a.createElement(d.a,{placeholder:"Name Surname",value:t,onChange:function(e){return c(e.currentTarget.value)},onBlur:l,style:{width:"400px",margin:"20px"},disabled:s}),a.a.createElement(A.a,{min:0,max:n,value:r,onChange:function(e){return u(e||0)},disabled:s}))},B=function(){var e=Object(h.c)((function(e){return e.student})),t=Object(h.b)(),n=function(){t((function(e,t){var n,r,a,o,s,c;return R.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return n=t().student,r=n.name,a=n.sessionToken,o=n.studentToken,s=n.currentTaskNumber,e(O(!0)),u.prev=2,u.next=5,R.a.awrap(I(o,a,r,s));case 5:(c=u.sent).data.error?(c.data.taskCount&&e(N(o,c.data.taskCount)),e(y(c.data.error))):(e(N(o,c.data.taskCount)),console.log("Student updateStudent Success!",c)),u.next=13;break;case 9:u.prev=9,u.t0=u.catch(2),e(y(u.t0.message)),console.log("Student updateStudent Error!",u.t0);case 13:case"end":return u.stop()}}),null,null,[[2,9]])}))};return e.studentToken?a.a.createElement(G,{name:e.name,taskCount:e.taskCount,currentTaskNumber:e.currentTaskNumber,error:e.error,loading:e.loading,studentSetNameCallback:function(e){t(j(e))},studentSetCurrentTaskNumberCallback:function(e){t(function(e){return{type:"STUDENT/SET_CURRENT_TASK_NUMBER",currentTaskNumber:e}}(e)),n()},updateStudentCallback:n}):a.a.createElement("div",{style:f},"You don't have studentToken!")},K=function(e){var t=e.taskCount,n=e.error,r=e.loading,o=e.mentorSetTaskCountCallback,s=e.startSessionCallback;return a.a.createElement("div",{style:p},!!n&&a.a.createElement("div",{style:{color:"red"}},n),r&&a.a.createElement("div",{style:{color:"orange"}},"Loading..."),a.a.createElement("div",{style:T},a.a.createElement(A.a,{min:0,value:t,onChange:function(e){return o(e||0)},style:{margin:"20px"},disabled:r}),a.a.createElement(m.a,{type:"primary",onClick:s,disabled:r},"START")))},W=function(e){return{type:"MENTOR/LOADING",loading:e}},F=function(e){return{type:"MENTOR/ERROR",error:e}},H=x.a.create({baseURL:_}),J=function(e){return H.post("/session",{taskCount:e})},Y=function(e){return H.get("/session?authorToken="+e)},q=function(){var e=Object(h.c)((function(e){return e.session})),t=Object(h.b)();return e.authorToken?a.a.createElement(i.a,{to:ne}):a.a.createElement(K,{taskCount:e.taskCount,mentorSetTaskCountCallback:function(e){t(function(e){return{type:"MENTOR/SET_TOTAL_COUNT",taskCount:e}}(e))},startSessionCallback:function(){t((function(e,t){var n,r;return R.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return n=t().session.taskCount,e(W(!0)),a.prev=2,a.next=5,R.a.awrap(J(n));case 5:(r=a.sent).data.error?e(F(r.data.error)):(e((o=r.data.sessionToken,s=r.data.authorToken,{type:"MENTOR/SUCCESS",sessionToken:o,authorToken:s})),console.log("Mentor Start Success!",r)),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(2),e(F(a.t0.message)),console.log("Mentor Start Error!",a.t0);case 13:case"end":return a.stop()}var o,s}),null,null,[[2,9]])}))},error:e.error,loading:e.loading})},Z=n(190),$=function(e){var t=e.taskCount,n=e.currentTaskNumber,r=e.minCount,o=e.name,s=Math.floor(n/t*100),c=t===n?"lime":n===r?"red":"blue";return a.a.createElement("div",{style:Object(u.a)({},T,{width:"80vw",justifyContent:"space-between"})},a.a.createElement("span",{style:{margin:"10px"}},o),a.a.createElement("div",{style:{width:"50vw"}},a.a.createElement(Z.a,{strokeLinecap:"square",percent:s,format:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a.a.createElement("div",null,n,"/",t," (",s,"%)")},strokeColor:c,strokeWidth:4})))},z=function(e){var t=e.error,n=e.loading,r=e.taskCount,o=e.students,s=o.reduce((function(e,t){return t.currentTaskNumber<e?t.currentTaskNumber:e}),r);return a.a.createElement("div",{style:S},!!t&&a.a.createElement("div",{style:{color:"red"}},t),n&&a.a.createElement("div",{style:{color:"orange"}},"Loading..."),o.map((function(e){return a.a.createElement($,{name:e.name,taskCount:r,currentTaskNumber:e.currentTaskNumber,minCount:s})})))},P=function(){var e=Object(h.c)((function(e){return e.session})),t=Object(h.b)();return Object(r.useEffect)((function(){var e=setInterval((function(){t((function(e,t){var n,r;return R.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return n=t().session.authorToken,e(W(!0)),a.prev=2,a.next=5,R.a.awrap(Y(n));case 5:(r=a.sent).data.error?e(F(r.data.error)):(e((o=r.data.sessionToken,s=r.data.taskCount,c=r.data.students,{type:"MENTOR/GET_STUDENTS_SUCCESS",sessionToken:o,taskCount:s,students:c})),console.log("Mentor Get students Success!",r)),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(2),e(F(a.t0.message)),console.log("Mentor Get students Error!",a.t0);case 13:case"end":return a.stop()}var o,s,c}),null,null,[[2,9]])}))}),1e4);return function(){return clearInterval(e)}}),[]),a.a.createElement(z,{error:e.error,loading:e.loading,taskCount:e.taskCount,students:e.students})},Q=function(e){var t=e.taskCount,n=e.link;return a.a.createElement("div",{style:p},n,a.a.createElement("div",{style:Object(u.a)({},b,{width:"100vw"})},a.a.createElement(A.a,{min:0,value:t,style:{margin:"20px"}}),a.a.createElement(m.a,{type:"primary"},"FINISH SESSION")),a.a.createElement(P,null))},V=function(){var e=Object(h.c)((function(e){return e.session})),t=(Object(h.b)(),"http://IgnatZakalinsky.github.io/students-task-tracker/#"+X+"/"+e.sessionToken);return e.authorToken?a.a.createElement(Q,{taskCount:e.taskCount,link:t}):a.a.createElement(i.a,{to:te})},X="/student-login",ee="/student-select",te="/mentor-start",ne="/mentor-session",re=function(){return a.a.createElement("div",null,a.a.createElement(i.b,{exact:!0,path:"/",render:function(){return a.a.createElement(i.a,{to:te})}}),a.a.createElement(i.b,{path:X+"/:sessionToken",render:function(e){return a.a.createElement(L,{sessionToken:e.match.params.sessionToken})}}),a.a.createElement(i.b,{path:X,exact:!0,render:function(){return a.a.createElement("div",{style:f},"You don't have sessionToken!")}}),a.a.createElement(i.b,{path:ee,render:function(){return a.a.createElement(B,null)}}),a.a.createElement(i.b,{path:te,render:function(){return a.a.createElement(q,null)}}),a.a.createElement(i.b,{path:ne,render:function(){return a.a.createElement(V,null)}}),a.a.createElement(i.b,{path:"/test-mentor-diagram-container",render:function(){return a.a.createElement(P,null)}}))},ae=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],o=t[1];return a.a.createElement("div",{style:Object(u.a)({},b,{height:"10vh",backgroundColor:"#cccccc"})},a.a.createElement(m.a,{onClick:function(){return o(!n)}},n?"hide dev header":"show dev header"),n&&a.a.createElement(c.b,{to:X},"studentLogin"),n&&a.a.createElement(c.b,{to:ee},"studentSelect"),n&&a.a.createElement(c.b,{to:te},"mentorStart"),n&&a.a.createElement(c.b,{to:ne},"mentorSession"),n&&a.a.createElement(c.b,{to:"/test-mentor-diagram-container"},"mentorDiagram"))},oe=function(){return a.a.createElement("div",null,a.a.createElement(ae,null),a.a.createElement(re,null))},se=n(42),ce=n(106),ue={name:"",sessionToken:"",studentToken:"",taskCount:0,currentTaskNumber:0,loading:!1,error:""},le={taskCount:7,sessionToken:"",authorToken:"",loading:!1,error:"",students:[]},ie=Object(se.c)({student:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"STUDENT/LOADING":return Object(u.a)({},e,{loading:t.loading,error:""});case"STUDENT/SUCCESS":return Object(u.a)({},e,{loading:!1,error:"",studentToken:t.studentToken,taskCount:t.taskCount});case"STUDENT/ERROR":return Object(u.a)({},e,{loading:!1,error:t.error});case"STUDENT/SET_NAME":return Object(u.a)({},e,{name:t.name,loading:!1,error:""});case"STUDENT/SET_CURRENT_TASK_NUMBER":return Object(u.a)({},e,{currentTaskNumber:t.currentTaskNumber,loading:!1,error:""});case"STUDENT/SET_SESSION_TOKEN":return Object(u.a)({},e,{sessionToken:t.sessionToken,loading:!1,error:""});default:return e}},session:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MENTOR/SET_TOTAL_COUNT":return Object(u.a)({},e,{loading:!1,error:"",taskCount:t.taskCount});case"MENTOR/LOADING":return Object(u.a)({},e,{loading:t.loading,error:""});case"MENTOR/SUCCESS":return Object(u.a)({},e,{loading:!1,error:"",authorToken:t.authorToken,sessionToken:t.sessionToken});case"MENTOR/GET_STUDENTS_SUCCESS":return Object(u.a)({},e,{loading:!1,error:"",sessionToken:t.sessionToken,taskCount:t.taskCount,students:t.students});case"MENTOR/ERROR":return Object(u.a)({},e,{loading:!1,error:t.error});default:return e}}}),de=Object(se.d)(ie,Object(se.a)(ce.a)),me=de;window.store=de;n(188);var ke=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(c.a,null,a.a.createElement(h.a,{store:me},a.a.createElement(oe,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[109,1,2]]]);
//# sourceMappingURL=main.4ad0ea60.chunk.js.map