(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{108:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(8),r=a.n(l),c=(a(77),a(139)),s=a(151),i=a(21),d=a(13),m=a(10),u=a(152),p=a(111),b=a(143),O=a(23),E=a.n(O);const g="https://chaoo-todo-app.herokuapp.com/api",h=()=>({headers:{"x-auth-token":localStorage.getItem("token")}});var T=a(7);const v=Object(c.a)({formStyle:{margin:"0px auto",padding:"30px",borderRadius:"9px",boxShadow:"0px 0px 12px -3px #000000",display:"flex",justifyContent:"space-between"},submitButton:{marginLeft:"20px"}});var S=e=>{let{todo:t,setTodo:a}=e;const n=v(),l=Object(m.b)();return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{noValidate:!0,autoComplete:"off",className:n.formStyle,onSubmit:e=>{if(e.preventDefault(),t._id){const e=t._id,a={name:t.name,isComplete:t.isComplete,date:t.date,author:t.author,uid:t.uid};l(((e,t)=>a=>{E.a.put("".concat(g,"/todos/").concat(t),e,h()).then(e=>{a({type:"UPDATE_TODO",todo:e})}).catch(e=>{var t;console.log(e),T.b.error(null===(t=e.response)||void 0===t?void 0:t.data,{position:T.b.POSITION.BOTTOM_RIGHT})})})(a,e))}else{const e={...t,date:new Date};l((e=>(t,a)=>{const n=a().auth.name,o=a().auth._id;E.a.post("".concat(g,"/todos"),{...e,author:n,uid:o},h()).then(e=>{t({type:"ADD_TODO",todo:e})}).catch(e=>{var t;console.log(e.response),T.b.error(null===(t=e.response)||void 0===t?void 0:t.data,{position:T.b.POSITION.BOTTOM_RIGHT})})})(e))}a({name:"",isComplete:!1})}},o.a.createElement(u.a,{id:"enter-todo",label:"enterToDo",variant:"outlined",autoFocus:!0,fullWidth:!0,value:t.name,onChange:e=>a({...t,name:e.target.value})}),o.a.createElement(p.a,{variant:"contained",color:"primary",className:n.submitButton,type:"submit"},o.a.createElement(b.a,null))))},f=a(144),_=a(145),y=a(146),I=a(147),x=a(148),N=a(63),j=a.n(N);const w=Object(c.a)({todoStyle:{margin:"20px auto",padding:"20px",border:"2px solid #bdbdbd",borderRadius:"9px",display:"flex",justifyContent:"space-between"},moreStyle:{color:"#8f8f8f"},isComplete:{color:"green"},checked:{textDecoration:"line-through"}});var D=e=>{let{todo:t,setTodo:a,todos:n}=e;const l=w(),r=Object(m.b)(),c=Object(m.c)(e=>e.auth),s=e=>{r((e=>t=>{E.a.delete("".concat(g,"/todos/").concat(e),h()).then(()=>{t({type:"DELETE_TODO",id:e})}).catch(e=>{var t;console.log(e),T.b.error(null===(t=e.response)||void 0===t?void 0:t.data,{position:T.b.POSITION.BOTTOM_RIGHT})})})(e))},i=e=>{r((e=>t=>{E.a.patch("".concat(g,"/todos/").concat(e),{},h()).then(e=>{t({type:"CHECK_TODO",todo:e})}).catch(e=>{var t;console.log(e),T.b.error(null===(t=e.response)||void 0===t?void 0:t.data,{position:T.b.POSITION.BOTTOM_RIGHT})})})(e))};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:l.todoStyle},o.a.createElement("div",null,t.isComplete?o.a.createElement(f.a,{variant:"subtitle1",className:l.checked},t.name):o.a.createElement(f.a,{variant:"subtitle1"},t.name),o.a.createElement(f.a,{variant:"body2",className:l.moreStyle},"Author: ",t.author),o.a.createElement(f.a,{variant:"body2",className:l.moreStyle},"Added: ",j()(t.date).fromNow())),o.a.createElement("div",null,c._id&&c._id===t.uid?o.a.createElement(_.a,{size:"small","aria-label":"outlined primary button group"},o.a.createElement(p.a,{onClick:()=>i(t._id)},t.isComplete?o.a.createElement(y.a,{className:l.isComplete}):o.a.createElement(y.a,{color:"action"})),o.a.createElement(p.a,{onClick:()=>(e=>{const t=n.find(t=>t._id===e);a({...t}),window.scrollTo({top:0,left:0,behavior:"smooth"})})(t._id)},o.a.createElement(I.a,{color:"primary"})),o.a.createElement(p.a,{onClick:()=>s(t._id)},o.a.createElement(x.a,{color:"secondary"}))):null)))};const k=Object(c.a)({todosStyle:{margin:"20px auto",padding:"20px",borderRadius:"9px",boxShadow:"0px 0px 12px -3px #000000"}});var C=e=>{let{todo:t,setTodo:a}=e;const l=Object(m.c)(e=>e.auth),r=Object(m.c)(e=>e.todos),c=k(),s=Object(m.b)();return Object(n.useEffect)(()=>{s(e=>{E.a.get("".concat(g,"/todos"),h()).then(t=>{e({type:"GET_TODOS",todos:t})}).catch(e=>{console.log(e)})})},[t._id,s]),l._id?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:c.todosStyle},o.a.createElement(f.a,{variant:"h5"}," ",r.length>0?"theTodos;":"noTodosYet;"," "),r&&r.map(e=>o.a.createElement(D,{todo:e,key:e._id,setTodo:a,todos:r})))):o.a.createElement(d.a,{to:"/signin"})};var G=()=>{const e=Object(m.c)(e=>e.auth),[t,a]=Object(n.useState)({name:"",isComplete:!1});return o.a.createElement(o.a.Fragment,null,e._id?o.a.createElement(o.a.Fragment,null,o.a.createElement(S,{todo:t,setTodo:a}),o.a.createElement(C,{todo:t,setTodo:a})):o.a.createElement(o.a.Fragment,null,o.a.createElement(C,{todo:t,setTodo:a})))};const R=Object(c.a)({formStyle:{margin:"0px auto",padding:"30px",borderRadius:"9px",boxShadow:"0px 0px 12px -3px #000000"},spacing:{marginTop:"20px"}});var B=()=>{const e=R(),t=Object(m.c)(e=>e.auth),a=Object(m.b)(),[l,r]=Object(n.useState)({email:"",password:""});return t._id?o.a.createElement(d.a,{to:"/"}):o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{noValidate:!0,autoComplete:"off",className:e.formStyle,onSubmit:e=>{var t,n;e.preventDefault(),a((t=l.email,n=l.password,e=>{E.a.post("".concat(g,"/signin"),{email:t,password:n}).then(t=>{localStorage.setItem("token",t.data),e({type:"SIGN_IN",token:t.data})}).catch(e=>{var t;console.log(e.response),T.b.error(null===(t=e.response)||void 0===t?void 0:t.data,{position:T.b.POSITION.BOTTOM_RIGHT})})})),r({email:"",password:""})}},o.a.createElement(f.a,{variant:"h5"},"signIn;"),o.a.createElement(u.a,{className:e.spacing,id:"enter-email",label:"enterEmail",variant:"outlined",fullWidth:!0,value:l.email,onChange:e=>r({...l,email:e.target.value})}),o.a.createElement(u.a,{className:e.spacing,id:"enter-password",type:"password",label:"enterPassword",variant:"outlined",fullWidth:!0,value:l.password,onChange:e=>r({...l,password:e.target.value})}),o.a.createElement(p.a,{variant:"contained",color:"primary",className:e.spacing,type:"submit"},"SignIn")))};const P=Object(c.a)({formStyle:{margin:"0px auto",padding:"30px",borderRadius:"9px",boxShadow:"0px 0px 12px -3px #000000"},spacing:{marginTop:"20px"}});var A=()=>{const e=P(),t=Object(m.c)(e=>e.auth),a=Object(m.b)(),[l,r]=Object(n.useState)({name:"",email:"",password:""});return t._id?o.a.createElement(d.a,{to:"/"}):o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{noValidate:!0,autoComplete:"off",className:e.formStyle,onSubmit:e=>{e.preventDefault(),a((e=>t=>{E.a.post("".concat(g,"/signup"),e).then(e=>{localStorage.setItem("token",e.data),t({type:"SIGN_UP",token:e.data})}).catch(e=>{var t;console.log(e.response),T.b.error(null===(t=e.response)||void 0===t?void 0:t.data,{position:T.b.POSITION.BOTTOM_RIGHT})})})(l)),r({name:"",email:"",password:""})}},o.a.createElement(f.a,{variant:"h5"},"signUp;"),o.a.createElement(u.a,{className:e.spacing,id:"enter-name",label:"enterName",variant:"outlined",fullWidth:!0,value:l.name,onChange:e=>r({...l,name:e.target.value})}),o.a.createElement(u.a,{className:e.spacing,id:"enter-email",label:"enterEmail",variant:"outlined",fullWidth:!0,value:l.email,onChange:e=>r({...l,email:e.target.value})}),o.a.createElement(u.a,{className:e.spacing,id:"enter-password",type:"password",label:"enterPassword",variant:"outlined",fullWidth:!0,value:l.password,onChange:e=>r({...l,password:e.target.value})}),o.a.createElement(p.a,{variant:"contained",color:"primary",className:e.spacing,type:"submit"},"SignUp")))},H=a(149),F=a(150);const M=Object(c.a)(e=>({root:{flexGrow:1},authButton:{right:e.spacing(2)},title:{flexGrow:1},linkStyle:{textDecoration:"none",color:"#fafafa"}}));var U=()=>{const e=M(),t=Object(d.g)(),a=Object(m.b)(),n=Object(m.c)(e=>e);console.log(n);const l=Object(m.c)(e=>e.auth);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:e.root},o.a.createElement(H.a,{position:"static",color:"primary"},o.a.createElement(F.a,null,o.a.createElement(f.a,{variant:"h4",className:e.title},o.a.createElement(i.b,{className:e.linkStyle,to:"/"},"toDoApp;")),l._id?o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{variant:"subtitle2",className:e.title},"Logged in as ",l.name),o.a.createElement(p.a,{edge:"end",color:"inherit",className:e.authButton,onClick:()=>(a(e=>{e({type:"CLEAR_TODOS"}),e({type:"SIGN_OUT"})}),void t.push("/signin"))},o.a.createElement(i.b,{className:e.linkStyle,to:"/"},"SignOut"))):o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{edge:"end",color:"inherit",className:e.authButton},o.a.createElement(i.b,{className:e.linkStyle,to:"/signin"},"SignIn")),o.a.createElement(p.a,{edge:"end",color:"inherit",className:e.authButton},o.a.createElement(i.b,{className:e.linkStyle,to:"/signup"},"SignUp")))))))};a(107);const W=Object(c.a)({contentStyle:{margin:"30px auto"}});var L=function(){const e=W(),t=Object(m.b)();return Object(n.useEffect)(()=>{t((e,t)=>{const a=t().auth.token;if(!a)return null;e({type:"USER_LOADED",token:a})})},[t]),o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,null,o.a.createElement(T.a,null),o.a.createElement(s.a,{maxWidth:"md"},o.a.createElement(U,null),o.a.createElement(s.a,{className:e.contentStyle,maxWidth:"sm"},o.a.createElement(d.d,null,o.a.createElement(d.b,{path:"/signin",component:B}),o.a.createElement(d.b,{path:"/signup",component:A}),o.a.createElement(d.b,{path:"/",component:G}))))))},V=a(36),J=a(65);var K=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TODOS":return t.todos.data;case"ADD_TODO":return T.b.success("A todo was added...",{position:T.b.POSITION.BOTTOM_RIGHT}),[t.todo.data,...e];case"UPDATE_TODO":return T.b.success("A todo was updated...",{position:T.b.POSITION.BOTTOM_RIGHT}),e.map(e=>e._id===t.todo.data._id?t.todo.data:e);case"CHECK_TODO":return T.b.success("A todo status was changed...",{position:T.b.POSITION.BOTTOM_RIGHT}),e.map(e=>e._id===t.todo.data._id?t.todo.data:e);case"DELETE_TODO":return T.b.success("A todo was deleted...",{position:T.b.POSITION.BOTTOM_RIGHT}),e.filter(e=>e._id!==t.id);case"CLEAR_TODOS":return[];default:return e}},z=a(64);const Y={token:localStorage.getItem("token"),name:null,email:null,_id:null};var q=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":case"SIGN_UP":case"USER_LOADED":Object(T.b)("Welcome...",{position:T.b.POSITION.BOTTOM_RIGHT});const a=Object(z.a)(t.token);return{...Y,token:t.token,name:a.name,email:a.email,_id:a._id};case"SIGN_OUT":return localStorage.removeItem("token"),Object(T.b)("Goodbye...",{position:T.b.POSITION.BOTTOM_RIGHT}),{token:null,name:null,email:null,_id:null};default:return e}};var Q=Object(V.b)({todos:K,auth:q});const X=Object(V.d)(Q,Object(V.c)(Object(V.a)(J.a)));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m.a,{store:X},o.a.createElement(L,null))),document.getElementById("root"))},72:function(e,t,a){e.exports=a(108)},77:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.3de7080e.chunk.js.map