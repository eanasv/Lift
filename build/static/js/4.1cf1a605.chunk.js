(this["webpackJsonpionic-react-conference-app"]=this["webpackJsonpionic-react-conference-app"]||[]).push([[4,19],{153:function(e,t,a){"use strict";var n=a(4),c=a.n(n),s=a(10),r=a(22),l=a(2),o=a(16),i=a(0),u=a.n(i),m=a(27),d=a(43),f=a(5);a(155);var g=a(150),b=a(152),h=a(156),p=a(151);t.a=function(e){var t=Object(i.useState)({search:!0,check:!0,close:!0,home:!0,info:!1}),a=Object(r.a)(t,2),n=a[0],E=a[1],v=d.a.getState().CheckUserStatus.user,k=Object(i.useState)(!1),N=Object(r.a)(k,2),O=N[0],y=N[1],j=Object(i.useState)("Select All"),x=Object(r.a)(j,2),C=x[0],S=x[1],P={name:"back-arrow",slot:"icon-only",zoom:""};Object(i.useEffect)((function(){B(e.action?e.action:"none")}),[]);var A=Object(m.e)(),w=function(t){e.customBack?e.backClick(t):A.goBack()},B=function(e){e&&("search"===e?E({search:!1,check:!0,close:!0,home:!0,info:!0}):"check"===e?E({search:!0,check:!1,close:!0,home:!0,info:!0}):"close"===e?E({search:!0,check:!0,close:!1,home:!0,info:!0}):"home"===e?E({search:!0,check:!0,close:!0,home:!1,info:!0}):"info"===e&&E({search:!0,check:!0,close:!0,home:!0,info:!1}))};function D(){d.a.dispatch({type:f.m}),d.a.dispatch({type:f.w}),d.a.dispatch({type:f.y}),e.locationProps.history.push("/tabs/landing")}var I=function(){var e=Object(s.a)(c.a.mark((function e(t){var a,n,s,r,l,o,i,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.detail.value,n=b.loginAgent+"?agentCode="+a.agentCode+"&agentType="+a.agentType,s={userName:v.userName,userType:"IMPORTER_APP"},e.next=5,Object(p.n)(n,s);case 5:return r=e.sent,l=r.data.data.dataItems[0],e.next=9,r.success;case 9:if(!e.sent){e.next=23;break}return e.next=12,h.a(l.accessToken);case 12:return(o=e.sent)&&d.a.dispatch(o),e.next=16,h.b(l.user.activeCompanyCode);case 16:return(i=e.sent)&&d.a.dispatch(i),e.next=20,h.c(a);case 20:(u=e.sent)&&d.a.dispatch(u),d.a.getState().CheckUserStatus;case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return u.a.createElement(l.r,{style:e.agentHeader?{height:"102px"}:{height:"10%"}},u.a.createElement(l.S,{className:"header"},u.a.createElement("div",{className:"mainContainer",style:e.agentHeader?{}:{paddingBottom:0}},e.checkedProps?u.a.createElement("div",{className:"selectAllBg",hidden:!e.checkedProps.showChecked},u.a.createElement("div",null,u.a.createElement(l.e,{fill:"clear",onClick:function(e){w(e)}},u.a.createElement(g.a,{iconProps:P}))),u.a.createElement("div",{className:"checkBoxContainer"},u.a.createElement(l.l,{className:"checkBox",checked:O,onIonChange:function(t){return function(t){y(t),t?(S("Unselect All"),e.checkedProps.addContainerToCart("","","checked")):(e.checkedProps.addContainerToCart("","","unchecked"),S("Select All"))}(t.detail.checked)}})),u.a.createElement("div",{className:"checkBoxLabelCol"},u.a.createElement(l.y,{className:"checkBoxLabel"},C)," ")):u.a.createElement(u.a.Fragment,null),u.a.createElement("div",{className:"backArrow"},"Home"!=e.label&&n.close?u.a.createElement(l.e,{fill:"clear",onClick:function(e){w(e)}},u.a.createElement(g.a,{iconProps:P})):u.a.createElement(u.a.Fragment,null)),u.a.createElement("div",{className:"header-label"}," ",u.a.createElement(l.P,null,e.label)),u.a.createElement("div",{className:"header-right"},u.a.createElement(l.e,{hidden:n.search,fill:"clear",onClick:e.searchClick},u.a.createElement(l.s,{slot:"icon-only",icon:o.y,style:{minWidth:"30px"}})),u.a.createElement(l.e,{hidden:n.info,fill:"clear",onClick:e.infoClick},u.a.createElement(l.s,{slot:"icon-only",icon:o.q,style:{minWidth:"30px"}})),u.a.createElement(l.e,{hidden:n.check,fill:"clear",onClick:e.checkClick},u.a.createElement(g.a,{iconProps:{name:"Check",slot:"icon-only",zoom:""}})),u.a.createElement(l.e,{hidden:n.home,fill:"clear",onClick:function(e){return D()}},u.a.createElement(g.a,{iconProps:{name:"home-new",slot:"icon-only",zoom:""}})),u.a.createElement(l.e,{hidden:n.close,fill:"clear",onClick:function(e){w(e)}},u.a.createElement(l.s,{slot:"icon-only",icon:o.o})),u.a.createElement(l.e,{hidden:""!==e.action,fill:"clear"},u.a.createElement(l.s,null)))),v.agents&&e.agentHeader&&u.a.createElement(l.S,{className:"agent-code-header"},u.a.createElement(l.I,{value:v.selectedAgent,interface:"popover",onIonChange:function(e){return I(e)},disabled:!e.showAgent||1==v.agents.length,style:e.showAgent?{}:{backgroundColor:"#DDF1FF"},interfaceOptions:{cssClass:"agent-interface"}},v.agents.map((function(e,t){return u.a.createElement(l.J,{value:e,key:t,className:"select-agent-opt"},e.agentCode+"-"+e.agentName)}))),u.a.createElement(l.s,{src:"assets/icon/arrow-down.svg",className:"arrow-down-icon",hidden:!e.showAgent||1==v.agents.length}))))}},154:function(e,t,a){"use strict";a.d(t,"d",(function(){return c})),a.d(t,"e",(function(){return s})),a.d(t,"c",(function(){return r})),a.d(t,"f",(function(){return l})),a.d(t,"h",(function(){return o})),a.d(t,"g",(function(){return i})),a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(44),c=function(e){return null===e&&(e=""),""===e.trim()},s=function(e,t,a){return a&&(t=t.replaceAll(a,"")),new RegExp(n.a[e]).test(t)},r=function(e,t,a){if(!e||!t||!a)return e;for(var n=e.replaceAll(" ","").replaceAll(a,""),c="",s=0,r=0;r<t.length&&s<n.length;r++)t[r]!=a?(c+=n[s],s+=1):c+=a;return c},l=function(e){return new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i).test(e)},o=function(e){return new RegExp("^\\d{8}$").test(e)},i=function(e){return new RegExp("^\\d{9}$").test(e)};function u(e,t){var a=new Date(e);return new Date(a.setMinutes(e.getMinutes()+t))}var m=function(e){var t,a,n=e.split(":");return t=n[0],a=n[1],1e3*(60*t*60+60*a+0)}},155:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){"use strict";var n=a(22),c=a(2),s=a(0),r=a.n(s),l=(a(158),a(154)),o=a(150);t.a=function(e){var t=e.label,a=e.name,i=e.type,u=e.value,m=e.onChange,d=e.required,f=e.errors,g=e.pattern,b=e.datatype,h=e.description,p=e.placeholder,E=e.icon,v=e.onBlur,k=e.readonly,N=e.contactForm,O=e.max,y=Object(s.useState)(!1),j=Object(n.a)(y,2),x=j[0],C=j[1];return r.a.createElement("div",{className:"form-element-group",style:N?{width:"350px",padding:"0"}:{}},r.a.createElement("fieldset",null,r.a.createElement("legend",null,t),"tel"===i?r.a.createElement(c.y,{className:"regularFont-textInput"},"971"):r.a.createElement(r.a.Fragment,null),r.a.createElement(c.w,{name:a,type:i,value:u,spellCheck:!1,autocapitalize:"off",onKeyDown:function(e){return e.key.length>1||(C(!Object(l.e)(b,e.key)),Object(l.e)(b,e.key)?void 0:(e.preventDefault(),!1))},onIonChange:function(e){var t,a=e.target.value;e.target.pattern&&(a=Object(l.c)(a,e.target.pattern,"-")),"email"===e.target.type&&(t=Object(l.f)(a),C(!t)),k||m(e,a,t)},clearInput:!0,required:d,autocomplete:"off",pattern:g,placeholder:p,className:"textInput",onIonBlur:function(e){v&&v(e)},maxlength:O,readonly:k||!1},E&&r.a.createElement(o.a,{iconProps:E}))),r.a.createElement("div",{className:""},f&&r.a.createElement(c.P,{color:"danger",className:"validation-message"},r.a.createElement(c.y,{className:"ion-padding-start validation-message"},f))),x&&h&&r.a.createElement(c.P,{color:"danger",className:"validation-message"},r.a.createElement(c.y,{className:"ion-padding-start validation-message"},h)))}},169:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(63),c=a(62),s=a(45),r=a(64);function l(e){return Object(n.a)(e)||Object(c.a)(e)||Object(s.a)(e)||Object(r.a)()}},176:function(e,t,a){},178:function(e,t,a){},179:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(22),c=a(2),s=a(0),r=a.n(s);a(180);function l(e){var t=Object(s.useState)(!1),a=Object(n.a)(t,2);a[0],a[1];function l(t,a){e.alertProps.alertAction(t,a)}return r.a.createElement(c.a,{id:"alert",isOpen:e.alertProps.isShow,header:e.alertProps.header,message:"<div class='text-style'> "+e.alertProps.icon+"<br/> Are you sure to  "+e.alertProps.content+"<div class='redColor'> "+e.alertProps.message+"</div><div class='row message2-text'>"+e.alertProps.itemName+"</div></div>",inputs:e.alertProps.inputs,buttons:[{text:"Continue",role:"confirm",handler:function(e){console.log("data",e),l(e,!0)}},{text:"Cancel",role:"cancel",handler:function(){l("",!1)}}]})}},180:function(e,t,a){},200:function(e,t,a){"use strict";a.r(t);var n=a(19),c=a(9),s=a(22),r=a(2),l=a(16),o=a(0),i=a.n(o),u=a(159),m=a(154);a(178);t.default=function(){var e=Object(o.useState)({firstName:"",lastName:"",email:"",mobile:"",submitted:!1,valid:!1}),t=Object(s.a)(e,2),a=t[0],d=t[1],f=Object(o.useState)({}),g=Object(s.a)(f,2),b=g[0],h=g[1],p=function(){var e={};console.log("login"),Object(m.d)(a.firstName)&&(e.firstName="First Name is required"),Object(m.d)(a.lastName)&&(e.lastName="Last Name is required"),Object(m.d)(a.email)&&(e.email="Email is required"),console.log(e),h(e)},E=function(e,t){d(Object(c.a)(Object(c.a)({},a),{},Object(n.a)({},e.target.name,t)))};return i.a.createElement(r.B,{id:"profilePage"},i.a.createElement(r.n,null,i.a.createElement("div",{className:"main-container"},i.a.createElement("div",{className:"login-logo"}),i.a.createElement("div",{className:"form-content"},i.a.createElement("div",{className:"login-box-header"}),i.a.createElement("form",{noValidate:!0,onSubmit:p,autoComplete:"off"},i.a.createElement(r.z,{className:"form-section"},i.a.createElement("div",{className:"login-header"},"Profile",i.a.createElement("hr",null)),i.a.createElement(u.a,{name:"firstName",value:a.firstName,label:"First Name",errors:b.firstName,type:"text",required:!0,onChange:E,datatype:"TEXT",placeholder:"First Name"}),i.a.createElement(u.a,{name:"lastName",value:a.lastName,label:"Last Name",errors:b.lastName,type:"text",required:!0,onChange:E,placeholder:"Last Name"}),i.a.createElement(u.a,{name:"email",value:a.email,label:"Email",errors:b.email,type:"email",required:!0,onChange:E,description:"Please enter email",placeholder:"Email"}),i.a.createElement(u.a,{name:"mobile",value:a.mobile,label:"Mobile",errors:b.mobile,type:"text",required:!0,onChange:E,datatype:"TEL_NUM",pattern:"###-##-#######",description:"Tel Format 971-xx-xxxxxxx",placeholder:"Mobile"})),i.a.createElement("div",{className:"button-div"},i.a.createElement("div",{className:"button-holder",onClick:p},i.a.createElement(r.s,{slot:"icon-only",icon:l.d}))))))))}},208:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var n=a(22),c=a(0),s=a.n(c),r=a(2),l=a(27),o=(a(210),a(4)),i=a.n(o),u=a(10),m=a(16),d=a(152),f=a(151),g=(a(212),a(43)),b=a(156);var h=function(){var e=Object(l.e)(),t=g.a.getState().CheckUserStatus.user,a=Object(c.useState)("0"),o=Object(n.a)(a,2),h=o[0],p=o[1],E=Object(c.useState)(!1),v=Object(n.a)(E,2),k=v[0],N=v[1],O=Object(c.useState)(""),y=Object(n.a)(O,2),j=y[0],x=y[1],C=Object(c.useState)([]),S=Object(n.a)(C,2),P=S[0],A=S[1];Object(c.useEffect)((function(){console.log("userDetails",t),Object(f.j)(d.fetchCountsOfUnreadNotificationsUrl).then((function(e){e.success&&p(e.data.data.dataItems[0])}))}),[]),Object(c.useEffect)((function(){if(void 0===t.userType||null===t.agents)console.log(t);else if(t.agents.length>1&&void 0==t.selectedAgent)t.agents.map((function(e,t){return P.push({type:"radio",label:e.agentCode+"-"+e.agentName,value:e})})),A(P),k||(console.log("showModal",k),N(!0)),console.log("yes showmaodal",k);else if(1==t.agents.length){var e=t.agents.find((function(e){return!0})),a=b.c(e);a&&g.a.dispatch(a)}}),[t]);var w=function(){var t=Object(u.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("0"===h){t.next=11;break}return t.next=3,Object(f.k)(d.fetchAllNotificationUrl);case 3:return a=t.sent,t.next=6,a.success;case 6:if(!t.sent){t.next=9;break}p("0"),e.push("/notifications");case 9:t.next=12;break;case 11:e.push("/notifications");case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(i.a.mark((function e(a){var n,c,s,r,l,o,u,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!1),console.log(a),n=d.loginAgent+"?agentCode="+a.agentCode+"&agentType="+a.agentType,c={userName:t.userName,userType:"IMPORTER_APP"},e.next=6,Object(f.n)(n,c);case 6:return s=e.sent,r=s.data.data.dataItems[0],e.next=10,s.success;case 10:if(!e.sent){e.next=25;break}return e.next=13,b.a(r.accessToken);case 13:return(l=e.sent)&&g.a.dispatch(l),e.next=17,b.b(r.user.userType);case 17:return(o=e.sent)&&g.a.dispatch(o),e.next=21,b.c(a);case 21:(u=e.sent)&&g.a.dispatch(u),m=g.a.getState().CheckUserStatus,console.log("*****",m);case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return s.a.createElement(r.B,{className:"landing-Page"},s.a.createElement(r.a,{isOpen:k,onDidDismiss:function(){return!k},header:"Select Agent Code",subHeader:j,backdropDismiss:!1,inputs:P,cssClass:"modal-alert",buttons:[{text:"Continue",role:"confirm",handler:function(e){if(console.log("data",e),void 0===e)return x("Please Choose any to proceed"),!1;B(e)}}]}),s.a.createElement(r.n,null,s.a.createElement("div",{className:"main-container"},s.a.createElement("div",{className:"page-header"},s.a.createElement("div",{className:"page-head-not-button"},s.a.createElement(r.H,{onClick:function(){return w()}},s.a.createElement(r.d,{className:"5+"===h?"not-badge1":"not-badge2",color:"danger"},h),s.a.createElement(r.s,{src:"assets/icon/bell.svg"}))),s.a.createElement("div",{className:"page-head-text"},s.a.createElement("span",{className:"page-header-welcome-name"},"Hello ",s.a.createElement(r.y,null,t.firstName),"!"),s.a.createElement("span",null,"Welcome To Dubai Trade")),s.a.createElement("div",{className:"page-head-button"},s.a.createElement(r.e,{className:"tube-button",onClick:function(){e.push("/quickBook")}},"Quick Book",s.a.createElement(r.s,{slot:"end",icon:m.k})))),s.a.createElement("div",{className:"my-bookings"},s.a.createElement(r.g,{className:"page-card"},s.a.createElement(r.t,{src:"assets/img/home-declaration.png"}),s.a.createElement(r.h,null,s.a.createElement("div",{className:"my-booking-txt"},s.a.createElement("div",{className:"my-booking-txt-inner"},s.a.createElement("span",{className:"header-txt"},"My Booking"),s.a.createElement("span",{className:"sub-txt"},"Select container and book truck")),s.a.createElement("div",{className:"book-button"},s.a.createElement(r.e,{className:"tube-button"},"Book")))))),s.a.createElement("div",{className:"my-bookings"},s.a.createElement(r.g,{className:"page-card ion-text-center"},s.a.createElement(r.t,{src:"assets/img/home-status.png"}),s.a.createElement(r.h,null,s.a.createElement("div",{className:"my-booking-txt"},s.a.createElement("div",{className:"my-booking-txt-inner"},s.a.createElement("span",{className:"header-txt"},"Status"),s.a.createElement("span",{className:"sub-txt"},"Check status of your bookings")),s.a.createElement("div",{className:"book-button"},s.a.createElement(r.e,{className:"tube-button",onClick:function(){return e.push("/tabs/status")}},"Book")))))))))},p=a(209),E=a(200),v=a(17),k=(a(213),a(179));function N(e){var t=Object(l.e)(),a=Object(c.useState)([]),o=Object(n.a)(a,2),h=o[0],p=o[1],E=Object(c.useState)(),N=Object(n.a)(E,2),O=N[0],y=N[1],j=Object(c.useState)(!1),x=Object(n.a)(j,2),C=x[0],S=x[1],P=Object(c.useState)(""),A=Object(n.a)(P,2),w=A[0],B=A[1],D=Object(c.useState)({}),I=Object(n.a)(D,2),T=I[0],H=I[1];g.a.subscribe((function(){y(g.a.getState().CheckUserStatus.user.selectedAgent),p(g.a.getState().Addresses),console.log("calling store")})),Object(c.useEffect)((function(){console.log("addressDB",g.a.getState().Addresses),L(),console.log("add",h)}),[O]);var L=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.j)(d.getAddress);case 2:return t=e.sent,t,e.next=6,null===t||void 0===t?void 0:t.success;case 6:if(!e.sent){e.next=18;break}(a=b.f())&&g.a.dispatch(a),console.log(t.data.addressDtoList.length),t.data.addressDtoList.forEach((function(e){e.dropZone=e.selectedDropZone})),t.data.addressDtoList.disableHrs=t.data.disableHrs,t.data.addressDtoList[0].isSelected=!0,(n=b.e(t.data.addressDtoList))&&g.a.dispatch(n),p(n.payLoad),e.next=19;break;case 18:"168"!=t.data.data.dataItems[0].code&&"No data available."!=t.data.data.dataItems[0].error||((a=b.f())&&g.a.dispatch(a),p([]));case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var U={isShow:C,message:w,alertAction:function(e,t){S(!1),t&&Object(f.l)(d.deleteAddress+e.code).then((function(t){if(t.success){var a=b.g(e.code);a&&g.a.dispatch(a)}}))},item:T,content:"remove contact of"};return s.a.createElement("div",{id:"address-card"},s.a.createElement(k.a,{alertProps:U}),s.a.createElement(r.s,{onClick:function(){return t.push("/addAddress")},icon:m.a,className:"addIcon"}),0===h.length?s.a.createElement(r.g,{className:"card emptyAddressCard"},s.a.createElement(r.h,null,s.a.createElement(r.P,{className:"emptyAddressText"},"Add new address"))):s.a.createElement("div",{className:"cardTopMargin"},h.map((function(e,a){return s.a.createElement("div",{className:"addressCard",key:a},s.a.createElement(r.s,{src:e.isSelected?"/assets/icon/addressBookBlue.svg":"/assets/icon/addressBookGray.svg",className:"contactIcon"}),s.a.createElement(r.g,{className:"card",onClick:function(e){return function(e,t){h.forEach((function(e){e.isSelected=!1})),h[t].isSelected=!0,p(Object(v.a)(h))}(0,a)}},s.a.createElement(r.h,null,s.a.createElement(r.H,null,s.a.createElement(r.m,{size:"10"},s.a.createElement(r.H,null,e.addressNickname),s.a.createElement(r.H,null,e.selectedDropZoneLabel),s.a.createElement(r.H,null,e.dropAddress),s.a.createElement(r.H,null,"Ph: ",e.consigneeContactNumber)),e.isSelected&&s.a.createElement(r.m,null,s.a.createElement(r.H,null,s.a.createElement(r.s,{onClick:function(){return function(e){e.createMode=!1,console.log(e),t.push("/addAddress",e)}(e)},src:"/assets/icon/edit-address.svg",className:"editIcon"})),s.a.createElement(r.H,null,s.a.createElement(r.s,{onClick:function(){return function(e){S(!0),B(e.addressNickname),H(e)}(e)},src:"/assets/icon/delete-address.svg",className:"editIcon"})))))))}))))}var O=a(153);function y(e){return s.a.createElement(r.B,{id:"address-page"},s.a.createElement(O.a,{label:"Addresses",action:"home",locationProps:e,showAgent:!0,agentHeader:!0}),s.a.createElement(r.n,{class:"pageContainer",fullscreen:!0},s.a.createElement(N,{editable:!0})))}function j(e){var t=Object(l.e)();console.log(e.selected);var a=Object(c.useState)(!1),o=Object(n.a)(a,2);o[0],o[1];return s.a.createElement("div",{className:"ion-tabs"},s.a.createElement("div",{className:"menu-button-div"},s.a.createElement("div",{className:"menu-button",onClick:function(a){console.log(a),console.log(e),t.push("/profilemenu",{direction:"none"})}},s.a.createElement("hr",null),s.a.createElement("hr",null),s.a.createElement("hr",null))),s.a.createElement(r.O,{className:"ion-tabs-bar"},s.a.createElement(r.G,null,s.a.createElement(l.a,{exact:!0,path:"/tabs",to:"/tabs/landing"}),s.a.createElement(l.b,{path:"/tabs/landing",render:function(){return s.a.createElement(h,null)},exact:!0}),s.a.createElement(l.b,{path:"/tabs/status",render:function(){return s.a.createElement(p.default,null)},exact:!0}),s.a.createElement(l.b,{path:"/tabs/profile",render:function(){return s.a.createElement(E.default,null)},exact:!0}),s.a.createElement(l.b,{path:"/tabs/addresses",exact:!0,render:function(){return s.a.createElement(y,null)}})),s.a.createElement(r.M,{slot:"bottom"},s.a.createElement(r.N,{tab:"landing",href:"/tabs/landing"},s.a.createElement(r.s,{src:"assets/icon/home-new.svg",className:"button"}),s.a.createElement(r.y,null,"Home")),s.a.createElement(r.N,{tab:"addresses",href:"/tabs/addresses"},s.a.createElement(r.s,{src:"assets/icon/address.svg",className:"button"}),s.a.createElement(r.y,null,"Addresses")),s.a.createElement(r.N,{disabled:!0}),s.a.createElement(r.N,{tab:"status",href:"/tabs/status"},s.a.createElement(r.s,{src:"assets/icon/status.svg",className:"button"}),s.a.createElement(r.y,null,"Status")),s.a.createElement(r.N,{tab:"profile",href:"/tabs/profile"},s.a.createElement(r.s,{src:"assets/icon/profile.svg",className:"button"}),s.a.createElement(r.y,null,"Profile")))))}},209:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return v}));var n=a(4),c=a.n(n),s=a(9),r=a(10),l=a(22),o=a(0),i=a.n(o),u=a(27),m=a(2),d=a(169),f=a(16),g=(a(176),i.a.memo((function(e){var t=Object(o.useState)();Object(d.a)(t);return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.H,{id:"status-card"},i.a.createElement(m.m,{className:"booking-card"},i.a.createElement(m.g,{className:"lightShadow",onClick:e.handleClick},i.a.createElement(m.h,{className:"booking-card-content"},i.a.createElement(m.H,{className:"booking-row"},i.a.createElement(m.m,{size:"8",className:"ion-align-self-center"},i.a.createElement("div",{className:"ion-float-left"},i.a.createElement(m.P,{className:"booking-menu-type"},e.type)," ")),i.a.createElement(m.m,{size:"2",className:"ion-align-self-center"},i.a.createElement("div",{className:"ion-float-right"},i.a.createElement(m.P,{className:"booking-menu-total"},e.total||"00")," ")),i.a.createElement(m.m,{size:"2",className:"ion-align-self-center"},i.a.createElement("div",null,i.a.createElement(m.s,{className:"booking-menu-icon",icon:f.k,slot:"icon-only"})," "))))))))}))),b=a(152),h=a(153),p=a(151),E=a(43);function v(e){var t,a,n;console.log(e);var d=Object(u.e)(),f=Object(o.useState)({}),v=Object(l.a)(f,2),k=v[0],N=v[1],O=Object(o.useState)(),y=Object(l.a)(O,2),j=y[0],x=y[1];E.a.subscribe((function(){x(E.a.getState().CheckUserStatus.user.selectedAgent),console.log("calling store")})),Object(o.useEffect)((function(){C(),console.log("call status",j)}),[j]);var C=function(){var e=Object(r.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.j)(b.fetchRequestStatusCountsUrl);case 2:return t=e.sent,e.next=5,t.success;case 5:if(!e.sent){e.next=10;break}return a=t.data.data.dataItems[0],Object.keys(a).forEach((function(e){a[e]=a[e]<10?"0"+a[e]:a[e]})),e.next=10,N(Object(s.a)(Object(s.a)({},k),{},{result:a}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i.a.createElement(m.B,{id:"status-page"},i.a.createElement(h.a,{label:"Status",action:"search",searchClick:function(){d.push("/search-booking")},showAgent:!0,customBack:!0,backClick:function(){d.push("/tabs/landing")},agentHeader:!0}),i.a.createElement(m.n,{fullscreen:!0,"padding-top":!0,className:"page-content"},i.a.createElement(m.q,{"margin-top":!0},i.a.createElement(g,{type:"All Bookings",total:null===k||void 0===k||null===(t=k.result)||void 0===t?void 0:t.ALL,handleClick:function(){d.push("/bookingDetails/ALL")}}),i.a.createElement(g,{type:"Verify POD's",total:null===(a=k.result)||void 0===a?void 0:a.PODUPL,handleClick:function(){d.push("/bookingDetails/PODUPL")}}),i.a.createElement(g,{type:"Verify Invoices",total:null===(n=k.result)||void 0===n?void 0:n.INVAPPR,handleClick:function(){d.push("/bookingDetails/INVAPPR")}}))))}},210:function(e,t,a){},212:function(e,t,a){},213:function(e,t,a){}}]);
//# sourceMappingURL=4.1cf1a605.chunk.js.map