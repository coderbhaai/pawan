(()=>{var e={9669:(e,t,a)=>{e.exports=a(1609)},3630:(e,t,a)=>{"use strict";var n=a(7294),r=a(3935),l=a(4575),i=a.n(l),c=a(3913),s=a.n(c),o=a(1506),m=a.n(o),u=a(2205),d=a.n(u),f=a(8585),h=a.n(f),v=a(9754),p=a.n(v),E=a(9713),g=a.n(E),y=a(3362),b=a(7757),x=a.n(b),w=a(8926),N=a.n(w);const S=function(e){d()(l,e);var t,a,r=(t=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=p()(t);if(a){var r=p()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return h()(this,e)});function l(e){var t;return i()(this,l),t=r.call(this,e),g()(m()(t),"callApi",N()(x().mark((function e(){var a,n;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/admin/footerData");case 2:return a=e.sent,e.next=5,a.json();case 5:if(n=e.sent,200===a.status){e.next=8;break}throw Error(n.message);case 8:t.setState({store:n.store,coupon:n.coupon,deal:n.deal});case 9:case"end":return e.stop()}}),e)})))),t.state={store:[],coupon:[],deal:[]},t}return s()(l,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),this.callApi()}},{key:"render",value:function(){return n.createElement("footer",null,n.createElement("div",{className:"container-fluid py-3"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-sm-3"},n.createElement("h3",null,"Stores"),n.createElement("ul",null,this.state.store.map((function(e,t){return n.createElement("li",{key:t},n.createElement("a",{href:e.url},e.name))})))),n.createElement("div",{className:"col-sm-3"},n.createElement("h3",null,"Coupons"),n.createElement("ul",null,this.state.coupon.map((function(e,t){return n.createElement("li",{key:t},n.createElement("a",{href:e.url},e.title))})))),n.createElement("div",{className:"col-sm-3"},n.createElement("h3",null,"Deals"),n.createElement("ul",null,this.state.deal.map((function(e,t){return n.createElement("li",{key:t},n.createElement("a",{href:e.url},e.title))})))),n.createElement("div",{className:"col-sm-3"},n.createElement("h3",null,"Important Links"),n.createElement("ul",null,n.createElement("li",null,n.createElement("a",{href:"/"},"Home")),n.createElement("li",null,n.createElement("a",{href:"/blog"},"Blog")),n.createElement("li",null,n.createElement("a",{href:"/shop"},"Shop")),n.createElement("li",null,n.createElement("a",{href:"/faq"},"FAQ")),n.createElement("li",null,n.createElement("a",{href:"/about-us"},"About Us")),n.createElement("li",null,n.createElement("a",{href:"/contact-us"},"Contact Us")))))),n.createElement("div",{className:"social"},n.createElement("div",{className:"social-container"},n.createElement("ul",{className:"social-icons"},n.createElement("li",null,n.createElement("a",{href:"#"},n.createElement("img",{src:"/images/icons/facebook-white.svg",className:"first"}),n.createElement("img",{src:"/images/icons/facebook.svg",className:"second"}))),n.createElement("li",null,n.createElement("a",{href:"#"},n.createElement("img",{src:"/images/icons/linkedin-white.svg",className:"first"}),n.createElement("img",{src:"/images/icons/linkedin.svg",className:"second"}))),n.createElement("li",null,n.createElement("a",{href:"#"},n.createElement("img",{src:"/images/icons/twitter-white.svg",className:"first"}),n.createElement("img",{src:"/images/icons/twitter.svg",className:"second"}))),n.createElement("li",null,n.createElement("a",{href:"#"},n.createElement("img",{src:"/images/icons/instagram-white.svg",className:"first"}),n.createElement("img",{src:"/images/icons/instagram.svg",className:"second"}))),n.createElement("li",null,n.createElement("a",{href:"#"},n.createElement("img",{src:"/images/icons/whatsapp-white.svg",className:"first"}),n.createElement("img",{src:"/images/icons/whatsapp-button.svg",className:"second"}))))),n.createElement("span",null,"Copyrights 2021, Casley India Pvt.Ltd."),n.createElement("span",null,"Email: hello@rewardeagle.com")))}}]),l}(n.Component);const k=function(e){d()(l,e);var t,a,r=(t=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=p()(t);if(a){var r=p()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return h()(this,e)});function l(e){var t;return i()(this,l),(t=r.call(this,e)).state={active:"",user:[]},t}return s()(l,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),"undefined"!=typeof Storage&&this.setState({user:JSON.parse(localStorage.getItem("user"))||[]}),this.setState({active:window.location.pathname}),"/admin/admin"===window.location.pathname&&this.setState({active:"/admin/users"}),"/admin/addBlog"===window.location.pathname&&this.setState({active:"/admin/blogs"}),"updateBlog"===window.location.pathname.split("/")[2]&&this.setState({active:"/admin/blogs"}),"/admin/createStore"===window.location.pathname&&this.setState({active:"/admin/adminStore"}),"updateStore"===window.location.pathname.split("/")[2]&&this.setState({active:"/admin/adminStore"})}},{key:"render",value:function(){var e=this;return n.createElement("div",{className:"col-sm-2 adminSidebar"},this.state.user.role?n.createElement("ul",null,"Admin"===this.state.user.role?[{url:"/admin/users",text:"Users",active:"/admin/users"},{url:"/admin/basics",text:"Basics",active:"/admin/basics"},{url:"/admin/meta",text:"Meta",active:"/admin/meta"},{url:"/admin/blogs",text:"Blogs",active:"/admin/blogs"},{url:"/admin/blogmeta",text:"Blog Meta",active:"/admin/blogmeta"},{url:"/admin/comments",text:"Comments",active:"/admin/comments"},{url:"/admin/contacts",text:"Contact",active:"/admin/contacts"},{url:"/admin/adminStore",text:"adminStore",active:"/admin/adminStore"},{url:"/admin/adminCategory",text:"adminCategory",active:"/admin/adminCategory"},{url:"/admin/adminCoupon",text:"adminCoupon",active:"/admin/adminCoupon"},{url:"/admin/adminDeal",text:"adminDeal",active:"/admin/adminDeal"},{url:"/admin/adminCashback",text:"adminCashback",active:"/admin/adminCashback"},{url:"/admin/leaderboard",text:"leaderboard",active:"/admin/leaderboard"},{url:"/admin/advertisement",text:"Advertisement",active:"/admin/advertisement"},{url:"/admin/questionBank",text:"QuestionBank",active:"/admin/questionBank"},{url:"/admin/survey",text:"Survey",active:"/admin/survey"},{url:"/admin/survey-response",text:"Survey Response",active:"/admin/survey-response"},{url:"/admin/cashback",text:"Cashback",active:"/admin/cashback"},{url:"/admin/career",text:"Career",active:"/admin/career"},{url:"/admin/job-applications",text:"Resume",active:"/admin/job-applications"}].map((function(t,a){return n.createElement("li",{key:a},n.createElement("a",{href:t.url,className:e.state.active===t.active?"active":null},t.text))})):"User"===this.state.user.role?[{url:"/user/refer-and-earn",text:"Refer & Earn",active:"/user/refer-and-earn"},{url:"/user/your-surveys",text:"Your Surveys",active:"/user/your-surveys"},{url:"/user/cashback-history",text:"Cashback History",active:"/user/cashback-history"}].map((function(t,a){return n.createElement("li",{key:a},n.createElement("a",{href:t.url,className:e.state.active===t.active?"active":null},t.text))})):null):null)}}]),l}(n.Component);a(5813);const C=function(e){d()(l,e);var t,a,r=(t=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=p()(t);if(a){var r=p()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return h()(this,e)});function l(e){var t;return i()(this,l),t=r.call(this,e),g()(m()(t),"uploadImage",(function(e){t.setState({image:e.target.files[0]})})),t.state={loading:!1,phone:"",image:null,oldImage:""},t}return s()(l,[{key:"render",value:function(){return n.createElement(n.Fragment,null,n.createElement(y.Z,null),this.state.loading?n.createElement("div",{className:"loading"},n.createElement("img",{src:"/images/icons/loading.gif"})):n.createElement("div",{className:"container-fluid admin"},n.createElement("div",{className:"row"},n.createElement(k,null),n.createElement("div",{className:"col-sm-10"},n.createElement("h2",{className:"heading"},"My Profile"),n.createElement("form",{encType:"multipart/form-data",onSubmit:this.addHandler},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-sm-4"},n.createElement("label",null,"Phone"),n.createElement("input",{className:"form-control",type:"text",placeholder:"Your Phone",name:"phone",required:!0,value:this.state.phone,onChange:this.onChange})),n.createElement("div",{className:"col-sm-4"},n.createElement("label",null,"Profile Pic"),n.createElement("input",{name:"name",type:"file",className:"form-control",required:!0,onChange:this.uploadImage}))),n.createElement("div",null,n.createElement("button",{className:"casleyBtn",type:"submit"},"Create Profile")))))),n.createElement(S,null))}}]),l}(n.Component);(0,r.render)(n.createElement(C,null),document.getElementById("root"))},7294:(e,t,a)=>{"use strict";e.exports=a(2408)}},t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,a),r.exports}a.m=e,a.x=e=>{},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={4669:0},t=[[3630,2244,6737,3935]],n=e=>{},r=(r,l)=>{for(var i,c,[s,o,m,u]=l,d=0,f=[];d<s.length;d++)c=s[d],a.o(e,c)&&e[c]&&f.push(e[c][0]),e[c]=0;for(i in o)a.o(o,i)&&(a.m[i]=o[i]);for(m&&m(a),r&&r(l);f.length;)f.shift()();return u&&t.push.apply(t,u),n()},l=self.webpackChunkreward=self.webpackChunkreward||[];function i(){for(var n,r=0;r<t.length;r++){for(var l=t[r],i=!0,c=1;c<l.length;c++){var s=l[c];0!==e[s]&&(i=!1)}i&&(t.splice(r--,1),n=a(a.s=l[0]))}return 0===t.length&&(a.x(),a.x=e=>{}),n}l.forEach(r.bind(null,0)),l.push=r.bind(null,l.push.bind(l));var c=a.x;a.x=()=>(a.x=c||(e=>{}),(n=i)())})(),a.x()})();