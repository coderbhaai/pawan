(()=>{var e={6475:(e,t,a)=>{"use strict";var n=a(7294),l=a(3935),r=a(7757),c=a.n(r),s=a(8926),o=a.n(s),i=a(4575),m=a.n(i),u=a(3913),d=a.n(u),p=a(1506),f=a.n(p),h=a(2205),E=a.n(h),g=a(8585),v=a.n(g),b=a(9754),y=a.n(b),N=a(9713),C=a.n(N),w=a(3362),O=a(262),x=a(8667),_=a.n(x),S=a(5813);const k=function(){return n.createElement("section",{className:"brands"},n.createElement("div",{className:"container-fluid"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-sm-12 topNav"},n.createElement("h2",{className:"heading"},"Trusted Brands ",n.createElement("span",null,"we serve")),n.createElement(_(),S.params4,S.brands.map((function(e,t){return n.createElement("div",{key:t},n.createElement("img",{src:"/images/static/brands/"+e.img}))})))))))},D=function(){return n.createElement("section",{className:"newsletter"},n.createElement("div",null,n.createElement("h3",null,"Subscribe US and to avail more Offers"),n.createElement("p",null,"Save upt 90 % on things you love")),n.createElement("div",null,n.createElement("input",{className:"form-control",type:"email",placeholder:"Subscribe With Us"}),n.createElement("button",{className:"form-control kohei button"},"Subscribe")))};var T=a(7217),A=a(2122),I=a(9756),L=a(5697),M=a.n(L),j=a(4184),R=a.n(j),P=a(3663),B={tag:P.iC,wrapTag:P.iC,toggle:M().func,className:M().string,cssModule:M().object,children:M().node,closeAriaLabel:M().string,charCode:M().oneOfType([M().string,M().number]),close:M().object},Z=function(e){var t,a=e.className,l=e.cssModule,r=e.children,c=e.toggle,s=e.tag,o=e.wrapTag,i=e.closeAriaLabel,m=e.charCode,u=e.close,d=(0,I.Z)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),p=(0,P.mx)(R()(a,"modal-header"),l);if(!u&&c){var f="number"==typeof m?String.fromCharCode(m):m;t=n.createElement("button",{type:"button",onClick:c,className:(0,P.mx)("close",l),"aria-label":i},n.createElement("span",{"aria-hidden":"true"},f))}return n.createElement(o,(0,A.Z)({},d,{className:p}),n.createElement(s,{className:(0,P.mx)("modal-title",l)},r),u||t)};Z.propTypes=B,Z.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215};const q=Z;var H={tag:P.iC,className:M().string,cssModule:M().object},F=function(e){var t=e.className,a=e.cssModule,l=e.tag,r=(0,I.Z)(e,["className","cssModule","tag"]),c=(0,P.mx)(R()(t,"modal-body"),a);return n.createElement(l,(0,A.Z)({},r,{className:c}))};F.propTypes=H,F.defaultProps={tag:"div"};const G=F;var J=a(9669),K=a.n(J);var V=a(5813);const U=function(e){E()(r,e);var t,a,l=(t=r,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=y()(t);if(a){var l=y()(this).constructor;e=Reflect.construct(n,arguments,l)}else e=n.apply(this,arguments);return v()(this,e)});function r(e){var t;return m()(this,r),t=l.call(this,e),C()(f()(t),"callApi",o()(c().mark((function e(){var a,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/admin/adminCareer");case 2:return a=e.sent,e.next=5,a.json();case 5:if(n=e.sent,200===a.status){e.next=8;break}throw Error(n.message);case 8:t.setState({data:n.data});case 9:case"end":return e.stop()}}),e)})))),C()(f()(t),"onChange",(function(e){t.setState(C()({},e.target.name,e.target.value))})),C()(f()(t),"showDisplay",(function(e){t.setState({active:e})})),C()(f()(t),"hideDisplay",(function(){t.setState({active:null})})),C()(f()(t),"addModalOn",(function(e){t.setState({addmodalIsOpen:!0,careerId:e})})),C()(f()(t),"uploadImage",(function(e){t.setState({file:e.target.files[0]})})),C()(f()(t),"resetData",(function(){t.setState({addmodalIsOpen:!1,name:"",email:"",phone:"",file:null,jobId:""}),window.scrollTo(0,0)})),C()(f()(t),"addHandler",(function(e){e.preventDefault();var a=new FormData;a.append("careerId",t.state.careerId),a.append("name",t.state.name),a.append("email",t.state.email),a.append("phone",t.state.phone),a.append("file",t.state.file),K().post("/admin/applyForJob",a).catch((function(e){return V.printError(e)})).then((function(e){V.callSwal(e.data.message)})),t.resetData()})),t.state={data:[],careerId:"",active:null,addmodalIsOpen:!1,name:"",email:"",phone:"",file:null,jobId:""},t}return d()(r,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),this.callApi()}},{key:"render",value:function(){var e=this;return n.createElement(n.Fragment,null,n.createElement(w.Z,null),n.createElement("div",{className:"container-fluid dailyRanking"},n.createElement("h2",{className:"heading"},"Work with us"),n.createElement("div",{className:"row"},n.createElement("div",{className:"col-sm-12 career"},this.state.data.filter((function(e){return 1==e.status})).map((function(t,a){return n.createElement("div",{className:"card",key:a},n.createElement("div",null,n.createElement("h3",null,t.role),n.createElement("p",null,n.createElement("strong",null,"Location : ")," ",t.location),n.createElement("ul",null,n.createElement("li",null,n.createElement("strong",null,"qualification : ")," ",t.qualification),n.createElement("li",null,n.createElement("strong",null,"experience : ")," ",t.experience)),n.createElement("p",{className:"jd",onClick:function(){return e.showDisplay(a)}},"Job Description ",n.createElement("img",{src:"/images/icons/arrow-down-red.svg",className:"fsIcon"})),n.createElement("div",{className:e.state.active==a?"show":"hide"},n.createElement("hr",null),n.createElement("p",null,t.description),n.createElement("p",{className:"jd",onClick:function(){return e.hideDisplay()}},"Job Description ",n.createElement("img",{src:"/images/icons/arrow-up-red.svg",className:"fsIcon"})),n.createElement("button",{className:"casleyBtn",onClick:function(){return e.addModalOn(t.id)}},"Apply for the opening"))))}))))),n.createElement(D,null),n.createElement(k,null),n.createElement(O.Z,null),n.createElement(T.Z,{isOpen:this.state.addmodalIsOpen,className:"adminModal"},n.createElement(q,null," Apply for job opening here "),n.createElement("div",{className:"closeModal",onClick:this.resetData},"X"),n.createElement(G,null,n.createElement("form",{encType:"multipart/form-data",onSubmit:this.addHandler},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-sm-4"},n.createElement("label",null,"Name"),n.createElement("input",{name:"name",type:"text",className:"form-control",placeholder:"Name",value:this.state.name,required:!0,onChange:this.onChange})),n.createElement("div",{className:"col-sm-4"},n.createElement("label",null,"Email"),n.createElement("input",{name:"email",type:"email",className:"form-control",placeholder:"Email",value:this.state.email,required:!0,onChange:this.onChange})),n.createElement("div",{className:"col-sm-4"},n.createElement("label",null,"Phone"),n.createElement("input",{name:"phone",type:"tel",className:"form-control",placeholder:"Phone",value:this.state.phone,required:!0,onChange:this.onChange})),n.createElement("div",{className:"col-sm-12"},n.createElement("label",null,"Resume"),n.createElement("input",{type:"file",className:"form-control",required:!0,onChange:this.uploadImage}))),n.createElement("div",{className:"my-div"},n.createElement("button",{className:"casleyBtn",type:"submit"},"Apply For the role",n.createElement("span",null))," ")))))}}]),r}(n.Component);(0,l.render)(n.createElement(U,null),document.getElementById("root"))},5697:(e,t,a)=>{e.exports=a(2703)()},3935:(e,t,a)=>{"use strict";!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=a(4448)},7294:(e,t,a)=>{"use strict";e.exports=a(2408)}},t={};function a(n){if(t[n])return t[n].exports;var l=t[n]={exports:{}};return e[n].call(l.exports,l,l.exports,a),l.exports}a.m=e,a.x=e=>{},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={5567:0},t=[[6475,2244,6737,2036]],n=e=>{},l=(l,r)=>{for(var c,s,[o,i,m,u]=r,d=0,p=[];d<o.length;d++)s=o[d],a.o(e,s)&&e[s]&&p.push(e[s][0]),e[s]=0;for(c in i)a.o(i,c)&&(a.m[c]=i[c]);for(m&&m(a),l&&l(r);p.length;)p.shift()();return u&&t.push.apply(t,u),n()},r=self.webpackChunkreward=self.webpackChunkreward||[];function c(){for(var n,l=0;l<t.length;l++){for(var r=t[l],c=!0,s=1;s<r.length;s++){var o=r[s];0!==e[o]&&(c=!1)}c&&(t.splice(l--,1),n=a(a.s=r[0]))}return 0===t.length&&(a.x(),a.x=e=>{}),n}r.forEach(l.bind(null,0)),r.push=l.bind(null,r.push.bind(r));var s=a.x;a.x=()=>(a.x=s||(e=>{}),(n=c)())})(),a.x()})();