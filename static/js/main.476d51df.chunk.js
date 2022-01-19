(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{121:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),a=n(27),r=n.n(a),i=n(18),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,141)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),a(e),r(e)}))},d=n(14),l=n(21),u=n(19),p=n(22),j=n(139),b=n(138),O=n(81),f=n.n(O),h=n(65),m=n.n(h),v=n(77),x="APP/LOADING",y="TODO/CREATE_TODO_ITEM",g="TODO/DELETE_TODO_ITEM",C="TODO/CHANGE_TODO_ITEM_CHECKBOX";function T(e){return{type:x,payload:e}}function D(e){return{type:y,payload:e}}var N,k=n(3),w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).btnDeleteHandler=function(t){t.preventDefault(),e.props.deleteTodoItem(e.props.props)},e.checkboxHandler=function(t){e.props.changeTodoItemCheckbox(e.props.props,t.target.checked)},e.render=function(){return Object(k.jsxs)("div",{className:"todo-item",children:[Object(k.jsxs)("div",{className:"container",children:[Object(k.jsxs)("div",{className:"title",children:[Object(k.jsx)(j.a,{defaultChecked:e.props.props.isDone,onChange:e.checkboxHandler}),Object(k.jsx)("span",{className:"label",children:e.props.props.title})]}),Object(k.jsx)("div",{className:"description",children:e.props.props.description})]}),Object(k.jsx)(b.a,{color:"secondary",size:"small",className:"btn-delete",onClick:e.btnDeleteHandler,children:Object(k.jsx)(f.a,{className:"icon icon-delete-item"})})]})},e}return n}(o.a.Component),I={deleteTodoItem:function(e){return{type:g,payload:e}},changeTodoItemCheckbox:function(e,t){return{type:C,payload:{item:e,isChecked:t}}}},E=Object(i.b)(null,I)(w),H=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).renderItems=function(){return p.a.map(e.props.todos,(function(e,t){return Object(k.jsx)(E,{props:e},t)}))},e.render=function(){return Object(k.jsx)("div",{className:"todo-list",children:e.renderItems()})},e}return n}(o.a.Component),A=Object(i.b)((function(e){return e.todoReducer}))(H),F=n(10),L=n(25),S=n(66),_=n.n(S),R=n(83),B=n.n(R),M=n(82),P=n.n(M),G=n(140),J=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={title:""},e.btnSaveHandler=function(t){console.log(Object(L.a)(e)),t.preventDefault(),e.props.createTodoItem({title:e.state.title,description:"without descr",isDone:!1}),e.setState({title:""})},e.btnFetchHandler=function(t){e.props.fetchTodos()},e.iputChangeHandler=function(t){e.setState((function(e){return Object(F.a)(Object(F.a)({},e),{title:t.target.value})}))},e.render=function(){return Object(k.jsxs)("form",{className:"new-todo-form",onSubmit:e.btnSaveHandler,children:[Object(k.jsx)(G.a,{className:"new-todo-form-input",type:"text",placeholder:"Enter a name of new todo item...",onChange:e.iputChangeHandler,value:e.state.title}),Object(k.jsxs)("div",{className:"button-block",children:[Object(k.jsxs)(_.a,{variant:"contained",className:"btn-save",onClick:e.btnSaveHandler,children:["Save",Object(k.jsx)(P.a,{className:"icon post-add-icon"})]}),Object(k.jsxs)(_.a,{variant:"contained",className:"btn-fetch",onClick:e.btnFetchHandler,children:["Fetch",Object(k.jsx)(B.a,{className:"icon cloud-download-icon"})]})]})]})},e}return n}(o.a.Component),z={createTodoItem:D,fetchTodos:function(){return function(){var e=Object(v.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(T(!0)),e.next=3,setTimeout((function(){fetch("https://jsonplaceholder.typicode.com/todos?_limit=50").then((function(e){return e.json()})).then((function(e){p.a.forEach(p.a.map(e,(function(e){return{title:e.title,description:"Fetched todo from jsonplaceholder",isDone:e.completed}})),(function(e){t(D(e))}))})).catch((function(e){return t(T(!1))})).finally((function(){return t(T(!1))}))}),3e3);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},K=Object(i.b)(null,z)(J),W=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).render=function(){return e.props.isLoading?Object(k.jsxs)("div",{className:"lds-ring",children:[Object(k.jsx)("div",{}),Object(k.jsx)("div",{}),Object(k.jsx)("div",{}),Object(k.jsx)("div",{})]}):Object(k.jsx)(k.Fragment,{})},e}return n}(o.a.Component),X=Object(i.b)((function(e){return{isLoading:e.todoReducer.isLoading}}))(W),q=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).render=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(X,{}),Object(k.jsx)("h1",{children:"TODO React Application"}),Object(k.jsx)(K,{}),Object(k.jsx)(A,{})]})},e}return n}(o.a.Component),Q=n(36),U=n(84),V=n(85),Y=n(86),Z=n.n(Y),$=n(20),ee={todos:[{title:"Milk",description:"Need to buy milk",isDone:!1},{title:"Bread",description:"Need to buy bread",isDone:!1},{title:"Butter",description:"Need to buy a butter",isDone:!1},{title:"Cheese",description:"Need to buy a cheese",isDone:!1}],isLoading:!1},te=function(e,t){return Object(F.a)(Object(F.a)({},e),{},{isLoading:t})},ne=function(e,t){return Object(F.a)(Object(F.a)({},e),{},{todos:[].concat(Object($.a)(e.todos),[t])})},ce=function(e,t){var n=p.a.find(e.todos,t),c=p.a.filter(e.todos,(function(e){return e!==n}));return Object(F.a)(Object(F.a)({},e),{},{todos:c})},oe=function(e,t){var n=p.a.findIndex(e.todos,t.item),c=p.a.map(e.todos,(function(e,c){return c===n&&(e.isDone=t.isChecked),e}));return Object(F.a)(Object(F.a)({},e),{},{todos:c})},ae=Object(Q.combineReducers)({todoReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return te(e,t.payload);case y:return ne(e,t.payload);case g:return ce(e,t.payload);case C:return oe(e,t.payload);default:return e}}}),re=[V.a,Z.a],ie=(N={},Object(Q.createStore)(ae,N,Object(U.composeWithDevTools)(Q.applyMiddleware.apply(void 0,re)))),se=(n(121),Object(k.jsx)(i.a,{store:ie,children:Object(k.jsx)(q,{})}));r.a.render(se,document.getElementById("core")),s()}},[[122,1,2]]]);
//# sourceMappingURL=main.476d51df.chunk.js.map