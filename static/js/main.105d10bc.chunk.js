(this["webpackJsonpstudents-task-tracker"]=this["webpackJsonpstudents-task-tracker"]||[]).push([[0],{109:function(e,t,n){e.exports=n(189)},114:function(e,t,n){},115:function(e,t,n){},189:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(27),s=n.n(o),u=(n(114),n(115),n(23)),c=n(3),i=n(57),l=n(8),d=n(191),m=n(80),k={display:"flex"},T=Object(c.a)({},k,{alignItems:"center"}),E=Object(c.a)({},T,{justifyContent:"center"}),b=Object(c.a)({},T,{justifyContent:"space-around"}),f=Object(c.a)({},E,{height:"80vh"}),g=Object(c.a)({},k,{flexFlow:"column"}),v=Object(c.a)({},g,{alignItems:"center"}),h=Object(c.a)({},v,{justifyContent:"center"}),S=(Object(c.a)({},v,{justifyContent:"space-around"}),Object(c.a)({},h,{minHeight:"80vh"})),p=function(e){var t=e.name,n=e.studentSetNameCallback,a=e.goToSessionCallback,o=e.error,s=e.loading;return r.a.createElement("div",{style:S},!!o&&r.a.createElement("div",{style:{color:"red"}},o),s&&r.a.createElement("div",{style:{color:"orange"}},"Loading..."),r.a.createElement(d.a,{placeholder:"Name Surname",value:t,onChange:function(e){return n(e.currentTarget.value)},style:{width:"400px",margin:"20px"},disabled:s}),r.a.createElement(m.a,{onClick:a,disabled:s,type:"primary"},"Go to session"))},C=n(6),N=function(e){return{type:"STUDENT/LOADING",loading:e}},O=function(e,t,n,a){return{type:"STUDENT/SUCCESS",studentToken:e,taskCount:n,name:t,currentTaskNumber:a}},y=function(e){return{type:"STUDENT/ERROR",error:e}},j=function(e){return{type:"STUDENT/SET_NAME",name:e}},w=n(20),R=n.n(w),x=n(55),U=n.n(x),_="https://pacific-lake-87230.herokuapp.com",D=U.a.create({baseURL:_}),M=function(e,t){return D.post("/student",{name:e,sessionToken:t})},I=function(e,t,n,a){return D.put("/student",{name:n,sessionToken:t,studentToken:e,currentTaskNumber:a})},L=function(e,t,n){document.cookie="".concat(e,"=").concat(t,";max-age=").concat(n,";path=/")},A=function(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},G=function(){return function(e,t){var n,a,r,o,s,u;return R.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(n=t().student,a=n.name,r=n.currentTaskNumber,o=A("sessionToken"),s=A("studentToken"),e(N(!0)),c.prev=4,o){c.next=7;break}throw{message:"no sessionToken"};case 7:if(s){c.next=9;break}throw{message:"no studentToken"};case 9:return c.next=11,R.a.awrap(I(s,o,a,r));case 11:(u=c.sent).data.error?(u.data.taskCount&&e(O(s,a,u.data.taskCount,r)),"bad sessionToken"!==u.data.error&&"session is finished"!==u.data.error&&"session don't have student with your studentToken"!==u.data.error||(L("studentToken","",-1e3),L("sessionToken","",-1e3)),e(y(u.data.error))):(e(O(s,u.data.name,u.data.taskCount,u.data.currentTaskNumber)),console.log("Student updateStudent Success!",u)),c.next=19;break;case 15:c.prev=15,c.t0=c.catch(4),e(y(c.t0.message)),console.log("Student updateStudent Error!",c.t0);case 19:case"end":return c.stop()}}),null,null,[[4,15]])}},B=function(e){var t=e.sessionToken,n=Object(C.c)((function(e){return e.student})),o=Object(C.b)();Object(a.useEffect)((function(){t&&(L("sessionToken",t,604800),o(function(e){return{type:"STUDENT/SET_SESSION_TOKEN",sessionToken:e}}(t)))}),[]);return A("studentToken")?r.a.createElement(l.a,{to:re}):r.a.createElement(p,{name:n.name,error:n.error,loading:n.loading,studentSetNameCallback:function(e){o(j(e))},goToSessionCallback:function(){o((function(e,t){var n,a,r;return R.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(n=t().student.name,a=A("sessionToken"),e(N(!0)),o.prev=3,a){o.next=7;break}throw alert("sessionToken: "+a),{message:"no sessionToken"};case 7:return o.next=9,R.a.awrap(M(n,a));case 9:(r=o.sent).data.error?("bad sessionToken"!==r.data.error&&"session is finished"!==r.data.error||(alert("token error"),L("studentToken","",-1e3),L("sessionToken","",-1e3)),e(y(r.data.error))):(console.log("studentToken:",r.data.studentToken),L("studentToken",r.data.studentToken,604800),e(O(r.data.studentToken,r.data.name,r.data.taskCount,r.data.currentTaskNumber)),console.log("Student goToSession Success!",r)),o.next=17;break;case 13:o.prev=13,o.t0=o.catch(3),e(y(o.t0.message)),console.log("Student goToSession Error!",o.t0);case 17:case"end":return o.stop()}}),null,null,[[3,13]])}))}})},K=n(192),W=function(e){var t=e.name,n=e.taskCount,a=e.currentTaskNumber,o=e.error,s=e.loading,u=e.studentSetNameCallback,c=e.studentSetCurrentTaskNumberCallback,i=e.updateStudentCallback;return r.a.createElement("div",{style:S},!!o&&r.a.createElement("div",{style:{color:"red"}},o),s&&r.a.createElement("div",{style:{color:"orange"}},"Loading..."),r.a.createElement(d.a,{placeholder:"Name Surname",value:t,onChange:function(e){return u(e.currentTarget.value)},onBlur:i,style:{width:"400px",margin:"20px"},disabled:s}),r.a.createElement(K.a,{min:0,max:n,value:a,onChange:function(e){return c(e||0)},disabled:s}))},$=function(){var e=Object(C.c)((function(e){return e.student})),t=Object(C.b)();Object(a.useEffect)((function(){t(G())}),[]);var n=function(){t(G())};return A("studentToken")?r.a.createElement(W,{name:e.name,taskCount:e.taskCount,currentTaskNumber:e.currentTaskNumber,error:e.error,loading:e.loading,studentSetNameCallback:function(e){t(j(e))},studentSetCurrentTaskNumberCallback:function(e){t(function(e){return{type:"STUDENT/SET_CURRENT_TASK_NUMBER",currentTaskNumber:e}}(e)),n()},updateStudentCallback:n}):r.a.createElement("div",{style:f},"You don't have studentToken!")},F=function(e){var t=e.taskCount,n=e.error,a=e.loading,o=e.mentorSetTaskCountCallback,s=e.startSessionCallback;return r.a.createElement("div",{style:S},!!n&&r.a.createElement("div",{style:{color:"red"}},n),a&&r.a.createElement("div",{style:{color:"orange"}},"Loading..."),r.a.createElement("div",{style:E},r.a.createElement(K.a,{min:0,value:t,onChange:function(e){return o(e||0)},style:{margin:"20px"},disabled:a}),r.a.createElement(m.a,{type:"primary",onClick:s,disabled:a},"START")))},H=function(e){return{type:"MENTOR/LOADING",loading:e}},J=function(e){return{type:"MENTOR/ERROR",error:e}},Y=U.a.create({baseURL:_}),q=function(e){return Y.post("/session",{taskCount:e})},Z=function(e){return Y.get("/session?authorToken="+e)},z=function(){return function(e,t){var n,a;return R.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=A("authorToken"),e(H(!0)),t.prev=2,n){t.next=5;break}throw{message:"no authorToken"};case 5:return t.next=7,R.a.awrap(Z(n));case 7:(a=t.sent).data.error?("bad authorToken"!==a.data.error&&"session is finished"!==a.data.error||(L("authorToken","",-1e3),L("sessionToken","",-1e3)),e(J(a.data.error))):(L("sessionToken",a.data.sessionToken,604800),e((r=a.data.sessionToken,o=a.data.taskCount,s=a.data.students,{type:"MENTOR/GET_STUDENTS_SUCCESS",sessionToken:r,taskCount:o,students:s})),console.log("Mentor Get students Success!",a)),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(2),e(J(t.t0.message)),console.log("Mentor Get students Error!",t.t0);case 15:case"end":return t.stop()}var r,o,s}),null,null,[[2,11]])}},P=function(){var e=Object(C.c)((function(e){return e.session})),t=Object(C.b)();return A("authorToken")?r.a.createElement(l.a,{to:se}):r.a.createElement(F,{taskCount:e.taskCount,mentorSetTaskCountCallback:function(e){t(function(e){return{type:"MENTOR/SET_TOTAL_COUNT",taskCount:e}}(e))},startSessionCallback:function(){t((function(e,t){var n,a;return R.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t().session.taskCount,e(H(!0)),r.prev=2,r.next=5,R.a.awrap(q(n));case 5:(a=r.sent).data.error?e(J(a.data.error)):(L("sessionToken",a.data.sessionToken,604800),L("authorToken",a.data.authorToken,604800),e((o=a.data.sessionToken,s=a.data.authorToken,{type:"MENTOR/SUCCESS",sessionToken:o,authorToken:s})),console.log("Mentor Start Success!",a)),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(2),e(J(r.t0.message)),console.log("Mentor Start Error!",r.t0);case 13:case"end":return r.stop()}var o,s}),null,null,[[2,9]])}))},error:e.error,loading:e.loading})},Q=n(190),V=function(e){var t=e.taskCount,n=e.currentTaskNumber,a=e.minCount,o=e.name,s=Math.floor(n/t*100),u=t===n?"lime":n===a?"red":"blue";return r.a.createElement("div",{style:Object(c.a)({},E,{width:"80vw",justifyContent:"space-between"})},r.a.createElement("span",{style:{margin:"10px"}},o),r.a.createElement("div",{style:{width:"50vw"}},r.a.createElement(Q.a,{strokeLinecap:"square",percent:s,format:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r.a.createElement("div",null,n,"/",t," (",s,"%)")},strokeColor:u,strokeWidth:4})))},X=function(e){var t=e.error,n=e.loading,a=e.taskCount,o=e.students,s=o.reduce((function(e,t){return t.currentTaskNumber<e?t.currentTaskNumber:e}),a);return r.a.createElement("div",{style:v},!!t&&r.a.createElement("div",{style:{color:"red"}},t),n&&r.a.createElement("div",{style:{color:"orange"}},"Loading..."),o.map((function(e){return r.a.createElement(V,{name:e.name,taskCount:a,currentTaskNumber:e.currentTaskNumber,minCount:s})})))},ee=function(){var e=Object(C.c)((function(e){return e.session})),t=Object(C.b)();return Object(a.useEffect)((function(){t(z());var e=setInterval((function(){t(z())}),3e4);return function(){return clearInterval(e)}}),[]),r.a.createElement(X,{error:e.error,loading:e.loading,taskCount:e.taskCount,students:e.students})},te=function(e){var t=e.taskCount,n=e.link,a=e.logout;return r.a.createElement("div",{style:S},n,r.a.createElement("div",{style:Object(c.a)({},b,{width:"100vw"})},r.a.createElement(K.a,{min:0,value:t,style:{margin:"20px"}}),r.a.createElement(m.a,{type:"primary",onClick:a},"FINISH SESSION")),r.a.createElement(ee,null))},ne=function(){var e=Object(C.c)((function(e){return e.session})),t=(Object(C.b)(),Object(a.useState)(!1)),n=Object(i.a)(t,2),o=n[0],s=n[1];if(!A("authorToken"))return r.a.createElement(l.a,{to:oe});var u=A("sessionToken"),c="http://IgnatZakalinsky.github.io/students-task-tracker/#"+ae+"/"+u;return r.a.createElement(te,{taskCount:e.taskCount,link:c,logout:function(){L("authorToken","",-1e3),L("sessionToken","",-1e3),s(!o)}})},ae="/student-login",re="/student-select",oe="/mentor-start",se="/mentor-session",ue=function(){return r.a.createElement("div",null,r.a.createElement(l.b,{exact:!0,path:"/",render:function(){return r.a.createElement(l.a,{to:oe})}}),r.a.createElement(l.b,{path:ae+"/:sessionToken",render:function(e){return r.a.createElement(B,{sessionToken:e.match.params.sessionToken})}}),r.a.createElement(l.b,{path:ae,exact:!0,render:function(){return r.a.createElement("div",{style:f},"You don't have sessionToken in URL!")}}),r.a.createElement(l.b,{path:re,render:function(){return r.a.createElement($,null)}}),r.a.createElement(l.b,{path:oe,render:function(){return r.a.createElement(P,null)}}),r.a.createElement(l.b,{path:se,render:function(){return r.a.createElement(ne,null)}}),r.a.createElement(l.b,{path:"/test-mentor-diagram-container",render:function(){return r.a.createElement(ee,null)}}))},ce=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],o=t[1];return r.a.createElement("div",{style:Object(c.a)({},b,{height:"10vh",backgroundColor:"#cccccc"})},r.a.createElement(m.a,{onClick:function(){return o(!n)}},n?"hide dev header":"show dev header"),n&&r.a.createElement(u.b,{to:ae},"studentLogin"),n&&r.a.createElement(u.b,{to:re},"studentSelect"),n&&r.a.createElement(u.b,{to:oe},"mentorStart"),n&&r.a.createElement(u.b,{to:se},"mentorSession"),n&&r.a.createElement(u.b,{to:"/test-mentor-diagram-container"},"mentorDiagram"))},ie=function(){return r.a.createElement("div",null,r.a.createElement(ce,null),r.a.createElement(ue,null))},le=n(42),de=n(107),me={name:"",sessionToken:"",studentToken:"",taskCount:0,currentTaskNumber:0,loading:!1,error:""},ke={taskCount:7,sessionToken:"",authorToken:"",loading:!1,error:"",students:[]},Te=Object(le.c)({student:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"STUDENT/LOADING":return Object(c.a)({},e,{loading:t.loading,error:""});case"STUDENT/SUCCESS":return Object(c.a)({},e,{loading:!1,error:"",studentToken:t.studentToken,taskCount:t.taskCount,name:t.name,currentTaskNumber:t.currentTaskNumber});case"STUDENT/ERROR":return Object(c.a)({},e,{loading:!1,error:t.error});case"STUDENT/SET_NAME":return Object(c.a)({},e,{name:t.name,loading:!1,error:""});case"STUDENT/SET_CURRENT_TASK_NUMBER":return Object(c.a)({},e,{currentTaskNumber:t.currentTaskNumber,loading:!1,error:""});case"STUDENT/SET_SESSION_TOKEN":return Object(c.a)({},e,{sessionToken:t.sessionToken,loading:!1,error:""});default:return e}},session:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MENTOR/SET_TOTAL_COUNT":return Object(c.a)({},e,{loading:!1,error:"",taskCount:t.taskCount});case"MENTOR/LOADING":return Object(c.a)({},e,{loading:t.loading,error:""});case"MENTOR/SUCCESS":return Object(c.a)({},e,{loading:!1,error:"",authorToken:t.authorToken,sessionToken:t.sessionToken});case"MENTOR/GET_STUDENTS_SUCCESS":return Object(c.a)({},e,{loading:!1,error:"",sessionToken:t.sessionToken,taskCount:t.taskCount,students:t.students});case"MENTOR/ERROR":return Object(c.a)({},e,{loading:!1,error:t.error});default:return e}}}),Ee=Object(le.d)(Te,Object(le.a)(de.a)),be=Ee;window.store=Ee;n(188);var fe=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,null,r.a.createElement(C.a,{store:be},r.a.createElement(ie,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[109,1,2]]]);
//# sourceMappingURL=main.105d10bc.chunk.js.map