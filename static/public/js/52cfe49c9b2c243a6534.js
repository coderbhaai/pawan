(self.webpackChunkreward=self.webpackChunkreward||[]).push([[3739],{7228:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}},3646:(e,t,a)=>{var n=a(7228);e.exports=function(e){if(Array.isArray(e))return n(e)}},6860:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:(e,t,a)=>{var n=a(3646),r=a(6860),l=a(379),s=a(8206);e.exports=function(e){return n(e)||r(e)||l(e)||s()}},379:(e,t,a)=>{var n=a(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}},3739:(e,t,a)=>{"use strict";var n=a(7294),r=a(3935),l=a(319),s=a.n(l),c=a(7757),i=a.n(c),o=a(8926),m=a.n(o),d=a(4575),u=a.n(d),p=a(3913),h=a.n(p),v=a(1506),f=a.n(v),E=a(2205),g=a.n(E),y=a(8585),b=a.n(y),C=a(9754),x=a.n(C),N=a(9713),w=a.n(N),S=a(3362),k=a(262);const M=function(e){g()(l,e);var t,a,r=(t=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=x()(t);if(a){var r=x()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return b()(this,e)});function l(e){var t;return u()(this,l),(t=r.call(this,e)).state={active:"",user:[]},t}return h()(l,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),"undefined"!=typeof Storage&&this.setState({user:JSON.parse(localStorage.getItem("user"))||[]}),this.setState({active:window.location.pathname}),"/admin/admin"===window.location.pathname&&this.setState({active:"/admin/users"}),"/admin/addBlog"===window.location.pathname&&this.setState({active:"/admin/blogs"}),"updateBlog"===window.location.pathname.split("/")[2]&&this.setState({active:"/admin/blogs"}),"/admin/createStore"===window.location.pathname&&this.setState({active:"/admin/adminStore"}),"updateStore"===window.location.pathname.split("/")[2]&&this.setState({active:"/admin/adminStore"})}},{key:"render",value:function(){var e=this;return n.createElement("div",{className:"col-sm-2 adminSidebar"},this.state.user.role?n.createElement("ul",null,"Admin"===this.state.user.role?[{url:"/admin/users",text:"Users",active:"/admin/users"},{url:"/admin/basics",text:"Basics",active:"/admin/basics"},{url:"/admin/meta",text:"Meta",active:"/admin/meta"},{url:"/admin/blogs",text:"Blogs",active:"/admin/blogs"},{url:"/admin/blogmeta",text:"Blog Meta",active:"/admin/blogmeta"},{url:"/admin/comments",text:"Comments",active:"/admin/comments"},{url:"/admin/contacts",text:"Contact",active:"/admin/contacts"},{url:"/admin/adminStore",text:"adminStore",active:"/admin/adminStore"},{url:"/admin/adminCategory",text:"adminCategory",active:"/admin/adminCategory"},{url:"/admin/adminCoupon",text:"adminCoupon",active:"/admin/adminCoupon"},{url:"/admin/adminDeal",text:"adminDeal",active:"/admin/adminDeal"},{url:"/admin/adminCashback",text:"adminCashback",active:"/admin/adminCashback"},{url:"/admin/leaderboard",text:"leaderboard",active:"/admin/leaderboard"},{url:"/admin/advertisement",text:"Advertisement",active:"/admin/advertisement"},{url:"/admin/questionBank",text:"QuestionBank",active:"/admin/questionBank"},{url:"/admin/survey",text:"Survey",active:"/admin/survey"},{url:"/admin/survey-response",text:"Survey Response",active:"/admin/survey-response"},{url:"/admin/cashback",text:"Cashback",active:"/admin/cashback"},{url:"/admin/career",text:"Career",active:"/admin/career"},{url:"/admin/job-applications",text:"Resume",active:"/admin/job-applications"}].map((function(t,a){return n.createElement("li",{key:a},n.createElement("a",{href:t.url,className:e.state.active===t.active?"active":null},t.text))})):"User"===this.state.user.role?[{url:"/user/refer-and-earn",text:"Refer & Earn",active:"/user/refer-and-earn"},{url:"/user/your-surveys",text:"Your Surveys",active:"/user/your-surveys"},{url:"/user/cashback-history",text:"Cashback History",active:"/user/cashback-history"}].map((function(t,a){return n.createElement("li",{key:a},n.createElement("a",{href:t.url,className:e.state.active===t.active?"active":null},t.text))})):null):null)}}]),l}(n.Component);var O=a(7217),A=a(2122),D=a(9756),T=a(5697),L=a.n(T),P=a(4184),R=a.n(P),_=a(3663),I={tag:_.iC,wrapTag:_.iC,toggle:L().func,className:L().string,cssModule:L().object,children:L().node,closeAriaLabel:L().string,charCode:L().oneOfType([L().string,L().number]),close:L().object},B=function(e){var t,a=e.className,r=e.cssModule,l=e.children,s=e.toggle,c=e.tag,i=e.wrapTag,o=e.closeAriaLabel,m=e.charCode,d=e.close,u=(0,D.Z)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),p=(0,_.mx)(R()(a,"modal-header"),r);if(!d&&s){var h="number"==typeof m?String.fromCharCode(m):m;t=n.createElement("button",{type:"button",onClick:s,className:(0,_.mx)("close",r),"aria-label":o},n.createElement("span",{"aria-hidden":"true"},h))}return n.createElement(i,(0,A.Z)({},u,{className:p}),n.createElement(c,{className:(0,_.mx)("modal-title",r)},l),d||t)};B.propTypes=I,B.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215};const q=B;var j={tag:_.iC,className:L().string,cssModule:L().object},U=function(e){var t=e.className,a=e.cssModule,r=e.tag,l=(0,D.Z)(e,["className","cssModule","tag"]),s=(0,_.mx)(R()(t,"modal-body"),a);return n.createElement(r,(0,A.Z)({},l,{className:s}))};U.propTypes=j,U.defaultProps={tag:"div"};const H=U;var K=a(9669),Z=a.n(K);var V=a(5813);const F=function(e){g()(l,e);var t,a,r=(t=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=x()(t);if(a){var r=x()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return b()(this,e)});function l(e){var t;return u()(this,l),t=r.call(this,e),w()(f()(t),"onChange",(function(e){t.setState(w()({},e.target.name,e.target.value))})),w()(f()(t),"handleClick",(function(e){t.setState({currentPage:Number(e.target.id)})})),w()(f()(t),"changeitemsPerPage",(function(e){t.setState({itemsPerPage:e.target.value})})),w()(f()(t),"searchSpace",(function(e){t.setState({search:e.target.value})})),w()(f()(t),"addModalOn",(function(){t.setState({addmodalIsOpen:!0})})),w()(f()(t),"callApi",m()(i().mark((function e(){var a,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/admin/AdminMetas");case 2:return a=e.sent,e.next=5,a.json();case 5:if(n=e.sent,200===a.status){e.next=8;break}throw Error(n.message);case 8:t.setState({metas:n.data,loading:!1});case 9:case"end":return e.stop()}}),e)})))),w()(f()(t),"resetData",(function(){t.setState({addmodalIsOpen:!1,editmodalIsOpen:!1,url:"",title:"",description:"",keyword:"",selectedMeta:""}),window.scrollTo(0,0)})),w()(f()(t),"addMeta",(function(e){e.preventDefault();var a={url:t.state.url,title:t.state.title,description:t.state.description,keyword:t.state.keyword};Z().post("/admin/addMeta",a).catch((function(e){return V.printError(e)})).then((function(e){e.data.success&&t.setState({metas:[].concat(s()(t.state.metas),[e.data.data])}),V.callSwal(e.data.message)})),t.resetData()})),w()(f()(t),"editModalOn",(function(e){t.setState({editmodalIsOpen:!0,url:e.url,title:e.title,description:e.description,keyword:e.keyword,selectedMeta:e.id})})),w()(f()(t),"updateMeta",(function(e){e.preventDefault();var a={id:t.state.selectedMeta,url:t.state.url,title:t.state.title,description:t.state.description,keyword:t.state.keyword};Z().post("/admin/updateMeta",a).catch((function(e){return V.printError(e)})).then((function(e){e.data.success&&t.setState({metas:t.state.metas.map((function(t){return t.id===parseInt(e.data.data.id)?t=e.data.data:t}))}),V.callSwal(e.data.message)})),t.resetData()})),t.state={addmodalIsOpen:!1,editmodalIsOpen:!1,metas:[],url:"",title:"",description:"",keyword:"",selectedMeta:"",newMeta:"",search:"",currentPage:1,itemsPerPage:100,loading:!0},t}return h()(l,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),this.callApi()}},{key:"render",value:function(){for(var e=this,t=this.state,a=t.currentPage,r=t.itemsPerPage,l=a*r,s=l-r,c=this.state.metas.filter((function(t){return null==e.state.search||t.url.toLowerCase().includes(e.state.search.toLowerCase())||t.title.toLowerCase().includes(e.state.search.toLowerCase())?t:void 0})).slice(s,l).map((function(t,a){return n.createElement("tr",{key:a},n.createElement("td",null,a+1),n.createElement("td",null,t.url),n.createElement("td",null,"Title: ",t.title,n.createElement("br",null),"Description: ",t.description,n.createElement("br",null),"Keyword: ",t.keyword,n.createElement("br",null)),n.createElement("td",{className:"editIcon text-center"},n.createElement("img",{src:"/images/icons/edit.svg",alt:"Edit Icon",onClick:function(){return e.editModalOn(t)}})))})),i=[],o=1;o<=Math.ceil(this.state.metas.length/r);o++)i.push(o);var m=i.map((function(t){return a==t?n.createElement("li",{key:t,id:t,onClick:e.handleClick,className:"active"}," ",t):n.createElement("li",{key:t,id:t,onClick:e.handleClick}," ",t)}));return n.createElement(n.Fragment,null,n.createElement(S.Z,null),n.createElement("div",{className:"container-fluid admin"},n.createElement("div",{className:"row"},n.createElement(M,null),n.createElement("div",{className:"col-sm-10"},n.createElement("h2",{className:"heading"},"Admin ( Metas )"),n.createElement("div",{className:"btn-pag"},n.createElement("div",{className:"perPage"},n.createElement("div",null,n.createElement("label",null,"Add Meta here"),n.createElement("button",{className:"casleyBtn",onClick:this.addModalOn},"Add Meta")),n.createElement("div",null,n.createElement("label",null,"Videos per page"),n.createElement("select",{className:"form-control",required:!0,value:r,onChange:function(t){return e.changeitemsPerPage(t)}},n.createElement("option",null,r),n.createElement("option",{value:"10"},"10"),n.createElement("option",{value:"25"},"25"),n.createElement("option",{value:"50"},"50"),n.createElement("option",{value:"100"},"100")))),n.createElement("div",{className:"search"},n.createElement("div",{className:"noFlex searchInput"},n.createElement("label",null,"Search Here"),n.createElement("input",{type:"text",placeholder:"Search here",className:"form-control",onChange:function(t){return e.searchSpace(t)}})),n.createElement("div",{className:"noFlex"},n.createElement("label",null,"Page Numbers"),n.createElement("ul",{className:"page-numbers"},m," ")))),n.createElement("table",{className:"table table-hover table-responsive"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("td",null,"Sl no."),n.createElement("td",null,"URL"),n.createElement("td",null,"Meta"),n.createElement("td",null,"Edit"))),n.createElement("tbody",null,this.state.loading?n.createElement("tr",{className:"loading"},n.createElement("td",{colSpan:"4",className:"text-center"},n.createElement("img",{src:"/images/icons/loading.gif"}))):c))))),n.createElement(k.Z,null),n.createElement(O.Z,{isOpen:this.state.addmodalIsOpen,className:"adminModal"},n.createElement(q,null," Add Meta Tags Here "),n.createElement("div",{className:"closeModal",onClick:this.resetData},"X"),n.createElement(H,null,n.createElement("form",{encType:"multipart/form-data",onSubmit:this.addMeta},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-sm-6"},n.createElement("label",null,"URL"),n.createElement("input",{className:"form-control",type:"text",placeholder:"URL of Page",name:"url",required:!0,value:this.state.url,onChange:this.onChange})),n.createElement("div",{className:"col-sm-6"},n.createElement("label",null,"Title"),n.createElement("textarea",{className:"form-control",type:"text",placeholder:"Add Title Here",name:"title",required:!0,value:this.state.title,onChange:this.onChange})),n.createElement("div",{className:"col-sm-6"},n.createElement("label",null,"Description"),n.createElement("textarea",{className:"form-control",type:"text",placeholder:"Add Description",name:"description",required:!0,value:this.state.description,onChange:this.onChange})),n.createElement("div",{className:"col-sm-6"},n.createElement("label",null,"Keywords"),n.createElement("textarea",{className:"form-control",type:"text",placeholder:"Add Keywords",name:"keyword",required:!0,value:this.state.keyword,onChange:this.onChange}))),n.createElement("div",{className:"my-div"},n.createElement("button",{className:"casleyBtn",type:"submit"},"Submit",n.createElement("span",null)))))),n.createElement(O.Z,{isOpen:this.state.editmodalIsOpen,className:"adminModal"},n.createElement(q,null," Update Meta Tags here "),n.createElement("div",{className:"closeModal",onClick:this.resetData},"X"),n.createElement(H,null,n.createElement("form",{className:"modal-form",encType:"multipart/form-data",onSubmit:this.updateMeta},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-sm-6"},n.createElement("label",null,"URL"),n.createElement("input",{className:"form-control",type:"text",placeholder:"URL of Page",name:"url",required:!0,value:this.state.url,onChange:this.onChange})),n.createElement("div",{className:"col-sm-6"},n.createElement("label",null,"Title"),n.createElement("textarea",{className:"form-control",type:"text",placeholder:"Add Title Here",name:"title",required:!0,value:this.state.title,onChange:this.onChange})),n.createElement("div",{className:"col-sm-6"},n.createElement("label",null,"Description"),n.createElement("textarea",{className:"form-control",type:"text",placeholder:"Add Description",name:"description",required:!0,value:this.state.description,onChange:this.onChange})),n.createElement("div",{className:"col-sm-6"},n.createElement("label",null,"Keywords"),n.createElement("textarea",{className:"form-control",type:"text",placeholder:"Add Keywords",name:"keyword",required:!0,value:this.state.keyword,onChange:this.onChange}))),n.createElement("div",{className:"my-div"},n.createElement("button",{className:"casleyBtn",type:"submit"},"Submit",n.createElement("span",null)))))))}}]),l}(n.Component);(0,r.render)(n.createElement(F,null),document.getElementById("root"))},5697:(e,t,a)=>{e.exports=a(2703)()},3935:(e,t,a)=>{"use strict";!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=a(4448)},7294:(e,t,a)=>{"use strict";e.exports=a(2408)}}]);