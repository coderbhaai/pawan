(self.webpackChunkreward=self.webpackChunkreward||[]).push([[5185],{7228:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}},3646:(e,t,a)=>{var n=a(7228);e.exports=function(e){if(Array.isArray(e))return n(e)}},6860:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:(e,t,a)=>{var n=a(3646),l=a(6860),r=a(379),c=a(8206);e.exports=function(e){return n(e)||l(e)||r(e)||c()}},379:(e,t,a)=>{var n=a(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}},5185:(e,t,a)=>{"use strict";var n=a(7294),l=a(3935),r=a(319),c=a.n(r),s=a(7757),o=a.n(s),i=a(8926),m=a.n(i),u=a(4575),d=a.n(u),p=a(3913),h=a.n(p),g=a(1506),f=a.n(g),E=a(2205),y=a.n(E),v=a(8585),N=a.n(v),b=a(9754),C=a.n(b),S=a(9713),w=a.n(S),O=a(3362),x=a(262),I=a(664),_=a(7217),k=a(2122),D=a(9756),T=a(5697),A=a.n(T),M=a(4184),L=a.n(M),B=a(3663),P={tag:B.iC,wrapTag:B.iC,toggle:A().func,className:A().string,cssModule:A().object,children:A().node,closeAriaLabel:A().string,charCode:A().oneOfType([A().string,A().number]),close:A().object},q=function(e){var t,a=e.className,l=e.cssModule,r=e.children,c=e.toggle,s=e.tag,o=e.wrapTag,i=e.closeAriaLabel,m=e.charCode,u=e.close,d=(0,D.Z)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),p=(0,B.mx)(L()(a,"modal-header"),l);if(!u&&c){var h="number"==typeof m?String.fromCharCode(m):m;t=n.createElement("button",{type:"button",onClick:c,className:(0,B.mx)("close",l),"aria-label":i},n.createElement("span",{"aria-hidden":"true"},h))}return n.createElement(o,(0,k.Z)({},d,{className:p}),n.createElement(s,{className:(0,B.mx)("modal-title",l)},r),u||t)};q.propTypes=P,q.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215};const R=q;var Z={tag:B.iC,className:A().string,cssModule:A().object},j=function(e){var t=e.className,a=e.cssModule,l=e.tag,r=(0,D.Z)(e,["className","cssModule","tag"]),c=(0,B.mx)(L()(t,"modal-body"),a);return n.createElement(l,(0,k.Z)({},r,{className:c}))};j.propTypes=Z,j.defaultProps={tag:"div"};const F=j;var H=a(9669),U=a.n(H),K=a(7150);var G=a(5813);const V=function(e){y()(r,e);var t,a,l=(t=r,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=C()(t);if(a){var l=C()(this).constructor;e=Reflect.construct(n,arguments,l)}else e=n.apply(this,arguments);return N()(this,e)});function r(e){var t;return d()(this,r),t=l.call(this,e),w()(f()(t),"callApi",m()(o().mark((function e(){var a,n,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/admin/fetchCategory");case 2:return a=e.sent,e.next=5,a.json();case 5:if(n=e.sent,200===a.status){e.next=8;break}throw Error(n.message);case 8:l=[],n.data.filter((function(e){return"Category"==e.type})).forEach((function(e){l.push({text:e.name,value:e.id})})),t.setState({data:n.data,catOptions:l,loading:!1},(function(){return t.setDuplicate()}));case 11:case"end":return e.stop()}}),e)})))),w()(f()(t),"onChange",(function(e){t.setState(w()({},e.target.name,e.target.value))})),w()(f()(t),"handleClick",(function(e){t.setState({currentPage:Number(e.target.id)})})),w()(f()(t),"changeitemsPerPage",(function(e){t.setState({itemsPerPage:e.target.value})})),w()(f()(t),"searchSpace",(function(e){t.setState({search:e.target.value})})),w()(f()(t),"addModalOn",(function(){t.setState({addmodalIsOpen:!0})})),w()(f()(t),"uploadIcon",(function(e){t.setState({icon:e.target.files[0]})})),w()(f()(t),"uploadBanner",(function(e){t.setState({banner:e.target.files[0]})})),w()(f()(t),"setMinNum",function(){var e=m()(o().mark((function e(a){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.setMinNum(a);case 2:n=e.sent,t.setState({display_order:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),w()(f()(t),"catSelected",(function(e,a){var n=a.value;t.setState({selectedCat:n})})),w()(f()(t),"setDuplicate",m()(o().mark((function e(){var a,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],t.state.data.filter((function(e){return"Category"==e.type})).forEach((function(e){a.push(e.display_order)})),e.next=4,G.checkDuplicate(a);case 4:n=e.sent,t.setState({duplicate:n.dup});case 6:case"end":return e.stop()}}),e)})))),w()(f()(t),"resetData",(function(){t.setState({addmodalIsOpen:!1,editmodalIsOpen:!1,type:"",name:"",url:"",title:"",icon:null,oldIconName:null,status:"",display_order:"",banner:null,previewBanner:null,oldBannerName:null,selectedId:"",selectedCat:"",category:""}),window.scrollTo(0,0)})),w()(f()(t),"addSubmit",(function(e){e.preventDefault();var a=new FormData;a.append("type",t.state.type),a.append("name",t.state.name),a.append("category",t.state.selectedCat),a.append("url",t.state.url.replace(/ /g,"-")),a.append("title",t.state.title),a.append("icon",t.state.icon),a.append("status",t.state.status),a.append("display_order",t.state.display_order),a.append("banner",t.state.banner),U().post("/admin/addCategory",a).catch((function(e){return G.printError(e)})).then((function(e){e.data.success&&t.setState({data:[].concat(c()(t.state.data),[e.data.data])},(function(){return t.setDuplicate()})),"Category"==e.data.data.type&&(t.state.catOptions.push({text:e.data.data.name,value:e.data.data.id}),t.setState({catOptions:t.state.catOptions})),G.callSwal(e.data.message)})),t.resetData()})),w()(f()(t),"editModalOn",(function(e){t.setState({editmodalIsOpen:!0,selectedId:e.id,type:e.type,name:e.name,url:e.url,title:e.title,status:e.status,display_order:e.display_order,oldIconName:e.icon,oldBannerName:e.banner,category:e.category,oldCategory:e.category,selectedCat:e.category})})),w()(f()(t),"updateSubmit",(function(e){e.preventDefault();var a=new FormData;a.append("id",t.state.selectedId),a.append("type",t.state.type),a.append("name",t.state.name),a.append("category",t.state.selectedCat),a.append("url",t.state.url.replace(/ /g,"-")),a.append("title",t.state.title),a.append("icon",t.state.icon),a.append("status",t.state.status),a.append("display_order",t.state.display_order),a.append("banner",t.state.banner),a.append("oldIconName",t.state.oldIconName),a.append("oldBannerName",t.state.oldBannerName),U().post("/admin/updateCategory",a).catch((function(e){return G.printError(e)})).then((function(e){e.data.success&&t.setState({data:t.state.data.map((function(t){return t.id===parseInt(e.data.data.id)?t=e.data.data:t}))},(function(){return t.setDuplicate()})),G.callSwal(e.data.message)})),t.resetData()})),w()(f()(t),"changeStatus",(function(e,a){if(1==a)var n=0;else n=1;var l={id:e,status:n};U().post("/admin/changeCategoryStatus",l).then((function(e){e.data.success&&t.setState({data:t.state.data.map((function(t){return t.id===parseInt(e.data.data.id)?t=e.data.data:t}))}),G.callSwal(e.data.message)})).catch((function(e){return G.printError(e)}))})),t.state={addmodalIsOpen:!1,editmodalIsOpen:!1,catOptions:[],selectedCat:"",data:[],type:"",name:"",url:"",title:"",icon:null,oldIconName:null,status:"",display_order:"",banner:null,previewBanner:null,oldBannerName:null,selectedId:"",search:"",currentPage:1,itemsPerPage:100,loading:!0,duplicate:[],category:"",oldCategory:""},t}return h()(r,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),this.callApi()}},{key:"render",value:function(){for(var e=this,t=this.state,a=t.currentPage,l=t.itemsPerPage,r=a*l,c=r-l,s=this.state.data.filter((function(t){return null==e.state.search||t.name.toLowerCase().includes(e.state.search.toLowerCase())||t.title.toLowerCase().includes(e.state.search.toLowerCase())?t:void 0})).slice(c,r).map((function(t,a){return n.createElement("tr",{key:a},n.createElement("td",null,a+1),n.createElement("td",null,t.type),n.createElement("td",null,t.name,n.createElement("br",null),t.url),n.createElement("td",null,n.createElement("img",{src:"/images/category/icon/"+t.icon,className:"tableImg"})),n.createElement("td",null,t.display_order),n.createElement("td",null,n.createElement("div",{className:"onoffswitch"},n.createElement("input",{type:"checkbox",name:"category",className:"onoffswitch-checkbox",id:"Switch-"+t.url,onChange:function(a){return e.changeStatus(t.id,a.target.value)},value:t.status,checked:1==t.status}),n.createElement("label",{className:"onoffswitch-label",htmlFor:"Switch-"+t.url},n.createElement("span",{className:"onoffswitch-inner"}),n.createElement("span",{className:"onoffswitch-switch"})))),n.createElement("td",{className:"editIcon text-center"},n.createElement("img",{src:"/images/icons/edit.svg",alt:"Edit Icon",onClick:function(){return e.editModalOn(t)}})))})),o=[],i=1;i<=Math.ceil(this.state.data.length/l);i++)o.push(i);var m=o.map((function(t){return a==t?n.createElement("li",{key:t,id:t,onClick:e.handleClick,className:"active"}," ",t):n.createElement("li",{key:t,id:t,onClick:e.handleClick}," ",t)}));return n.createElement(n.Fragment,null,n.createElement(O.Z,null),n.createElement("div",{className:"container-fluid admin"},n.createElement("div",{className:"row"},n.createElement(I.Z,null),n.createElement("div",{className:"col-sm-10"},n.createElement("h2",{className:"heading"},"Admin ( Category )"),n.createElement("div",{className:"btn-pag"},n.createElement("div",{className:"perPage"},n.createElement("div",null,n.createElement("label",null,"Add Category here"),n.createElement("button",{className:"casleyBtn",onClick:this.addModalOn},"Add Category")),n.createElement("div",null,n.createElement("label",null,"Items per page"),n.createElement("select",{className:"form-control",required:!0,value:l,onChange:function(t){return e.changeitemsPerPage(t)}},n.createElement("option",null,l),n.createElement("option",{value:"10"},"10"),n.createElement("option",{value:"25"},"25"),n.createElement("option",{value:"50"},"50"),n.createElement("option",{value:"100"},"100")))),n.createElement("div",{className:"search"},n.createElement("div",{className:"noFlex searchInput"},n.createElement("label",null,"Search Here"),n.createElement("input",{type:"text",placeholder:"Search here",className:"form-control",onChange:function(t){return e.searchSpace(t)}})),n.createElement("div",{className:"noFlex"},n.createElement("label",null,"Page Numbers"),n.createElement("ul",{className:"page-numbers"},m," ")))),this.state.duplicate.length?n.createElement("p",null,n.createElement("strong",null,"Note: ")," Duplicate display orders in the list at order ",this.state.duplicate.map((function(t,a){return n.createElement("strong",{key:a}," ",t," ",a<e.state.duplicate.length-1?", ":null)}))," "):null,n.createElement("table",{className:"table table-hover table-responsive"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("td",null,"Sl no."),n.createElement("td",null,"Type"),n.createElement("td",null,"Name | URL"),n.createElement("td",null,"Icon"),n.createElement("td",null,"Order"),n.createElement("td",null,"Status"),n.createElement("td",null,"Edit"))),n.createElement("tbody",null,this.state.loading?n.createElement("tr",{className:"loading"},n.createElement("td",{colSpan:"8",className:"text-center"},n.createElement("img",{src:"/images/icons/loading.gif"}))):s))))),n.createElement(x.Z,null),n.createElement(_.Z,{isOpen:this.state.addmodalIsOpen,className:"adminModal"},n.createElement(R,null," Add Meta Tags Here "),n.createElement("div",{className:"closeModal",onClick:this.resetData},"X"),n.createElement(F,null,n.createElement("form",{encType:"multipart/form-data",onSubmit:this.addSubmit},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-sm-3"},n.createElement("label",null,"Type"),n.createElement("select",{className:"form-control",name:"type",required:!0,value:this.state.type,onChange:this.onChange},n.createElement("option",{value:""},"Select Type"),n.createElement("option",{value:"Category"},"Category"),n.createElement("option",{value:"SubCategory"},"Sub Category"))),"SubCategory"==this.state.type?n.createElement(n.Fragment,null,n.createElement("div",{className:"col-sm-3 compare label-down"},n.createElement("label",null,"Select Category"),n.createElement(K.Z,{placeholder:"Select Category",fluid:!0,search:!0,selection:!0,onChange:this.catSelected,options:this.state.catOptions,required:!0})),n.createElement("div",{className:"col-sm-3"},n.createElement("label",null,"Sub Category Name"),n.createElement("input",{className:"form-control",type:"text",placeholder:"Name of sub category",name:"name",required:!0,value:this.state.name,onChange:this.onChange}))):n.createElement("div",{className:"col-sm-6"},n.createElement("label",null,"Category Name"),n.createElement("input",{className:"form-control",type:"text",placeholder:"Name of category",name:"name",required:!0,value:this.state.name,onChange:this.onChange})),n.createElement("div",{className:"col-sm-3"},n.createElement("label",null,"URL"),n.createElement("input",{className:"form-control",type:"text",placeholder:"URL of Page",name:"url",required:!0,value:this.state.url,onChange:this.onChange})),n.createElement("div",{className:"col-sm-4"},n.createElement("label",null,"Icon"),n.createElement("input",{className:"form-control",type:"file",onChange:this.uploadIcon,required:!0})),n.createElement("div",{className:"col-sm-4"},n.createElement("label",null,"Banner"),n.createElement("input",{className:"form-control",type:"file",onChange:this.uploadBanner,required:!0})),n.createElement("div",{className:"col-sm-4"},n.createElement("label",null,"Display Order"),n.createElement("input",{type:"number",onKeyDown:function(e){return"e"===e.key&&e.preventDefault()},min:1,className:"form-control",name:"display_order",value:this.state.display_order,onChange:this.setMinNum,placeholder:"Display Order",required:!0})),n.createElement("div",{className:"col-sm-12"},n.createElement("label",null,"Title"),n.createElement("textarea",{className:"form-control",type:"text",placeholder:"Add Title Here",name:"title",required:!0,value:this.state.title,onChange:this.onChange}))),n.createElement("div",{className:"my-div"},n.createElement("button",{className:"casleyBtn",type:"submit"},"Submit"))))),n.createElement(_.Z,{isOpen:this.state.editmodalIsOpen,className:"adminModal"},n.createElement(R,null," Update Meta Tags here "),n.createElement("div",{className:"closeModal",onClick:this.resetData},"X"),n.createElement(F,null,n.createElement("form",{className:"modal-form",encType:"multipart/form-data",onSubmit:this.updateSubmit},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-sm-3"},n.createElement("label",null,"Type"),n.createElement("select",{className:"form-control",name:"type",required:!0,value:this.state.type,readOnly:!0},n.createElement("option",{value:""},"Select Type"),n.createElement("option",{value:"Category"},"Category"),n.createElement("option",{value:"SubCategory"},"Sub Category"))),"SubCategory"==this.state.type?n.createElement(n.Fragment,null,n.createElement("div",{className:"col-sm-3 compare label-down"},n.createElement("label",null,"Selected Category -  ",this.state.data.filter((function(t){return t.id==e.state.oldCategory})).map((function(e,t){return n.createElement("span",{style:{margin:0}},e.name)}))," "),n.createElement(K.Z,{placeholder:"Select Category",fluid:!0,search:!0,selection:!0,onChange:this.catSelected,options:this.state.catOptions,required:!0})),n.createElement("div",{className:"col-sm-3"},n.createElement("label",null,"Sub Category Name"),n.createElement("input",{className:"form-control",type:"text",placeholder:"Name of sub category",name:"name",required:!0,value:this.state.name,onChange:this.onChange}))):n.createElement("div",{className:"col-sm-6"},n.createElement("label",null,"Category Name"),n.createElement("input",{className:"form-control",type:"text",placeholder:"Name of category",name:"name",required:!0,value:this.state.name,onChange:this.onChange})),n.createElement("div",{className:"col-sm-3"},n.createElement("label",null,"URL"),n.createElement("input",{className:"form-control",type:"text",placeholder:"URL of Page",name:"url",required:!0,value:this.state.url,onChange:this.onChange})),n.createElement("div",{className:"col-sm-4"},n.createElement("label",null,"Icon"),n.createElement("input",{className:"form-control",type:"file",onChange:this.uploadIcon}),this.state.oldIconName?n.createElement("img",{src:"/images/category/icon/"+this.state.oldIconName,className:"img-fluid tableImg"}):null),n.createElement("div",{className:"col-sm-4"},n.createElement("label",null,"Banner"),n.createElement("input",{className:"form-control",type:"file",onChange:this.uploadBanner}),this.state.oldBannerName?n.createElement("img",{src:"/images/category/banner/"+this.state.oldBannerName,className:"img-fluid tableImg"}):null),n.createElement("div",{className:"col-sm-4"},n.createElement("label",null,"Display Order"),n.createElement("input",{type:"number",onKeyDown:function(e){return"e"===e.key&&e.preventDefault()},min:1,className:"form-control",name:"display_order",value:this.state.display_order,onChange:this.setMinNum,placeholder:"Display Order",required:!0})),n.createElement("div",{className:"col-sm-12"},n.createElement("label",null,"Title"),n.createElement("textarea",{className:"form-control",type:"text",placeholder:"Add Title Here",name:"title",required:!0,value:this.state.title,onChange:this.onChange}))),n.createElement("div",{className:"my-div"},n.createElement("button",{className:"casleyBtn",type:"submit"},"Submit",n.createElement("span",null)))))))}}]),r}(n.Component);(0,l.render)(n.createElement(V,null),document.getElementById("root"))},3935:(e,t,a)=>{"use strict";!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=a(4448)}}]);