(this["webpackJsonpionic-react-conference-app"]=this["webpackJsonpionic-react-conference-app"]||[]).push([[20],{154:function(e,a,t){"use strict";t.d(a,"d",(function(){return r})),t.d(a,"e",(function(){return l})),t.d(a,"c",(function(){return c})),t.d(a,"f",(function(){return i})),t.d(a,"h",(function(){return o})),t.d(a,"g",(function(){return m})),t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return u}));var n=t(44),r=function(e){return null===e&&(e=""),""===e.trim()},l=function(e,a,t){return t&&(a=a.replaceAll(t,"")),new RegExp(n.a[e]).test(a)},c=function(e,a,t){if(!e||!a||!t)return e;for(var n=e.replaceAll(" ","").replaceAll(t,""),r="",l=0,c=0;c<a.length&&l<n.length;c++)a[c]!=t?(r+=n[l],l+=1):r+=t;return r},i=function(e){return new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i).test(e)},o=function(e){return new RegExp("^\\d{8}$").test(e)},m=function(e){return new RegExp("^\\d{9}$").test(e)};function s(e,a){var t=new Date(e);return new Date(t.setMinutes(e.getMinutes()+a))}var u=function(e){var a,t,n=e.split(":");return a=n[0],t=n[1],1e3*(60*a*60+60*t+0)}},158:function(e,a,t){},159:function(e,a,t){"use strict";var n=t(22),r=t(2),l=t(0),c=t.n(l),i=(t(158),t(154)),o=t(150);a.a=function(e){var a=e.label,t=e.name,m=e.type,s=e.value,u=e.onChange,d=e.required,p=e.errors,b=e.pattern,f=e.datatype,g=e.description,N=e.placeholder,E=e.icon,v=e.onBlur,x=e.readonly,h=e.contactForm,y=e.max,j=Object(l.useState)(!1),O=Object(n.a)(j,2),w=O[0],q=O[1];return c.a.createElement("div",{className:"form-element-group",style:h?{width:"350px",padding:"0"}:{}},c.a.createElement("fieldset",null,c.a.createElement("legend",null,a),"tel"===m?c.a.createElement(r.y,{className:"regularFont-textInput"},"971"):c.a.createElement(c.a.Fragment,null),c.a.createElement(r.w,{name:t,type:m,value:s,spellCheck:!1,autocapitalize:"off",onKeyDown:function(e){return e.key.length>1||(q(!Object(i.e)(f,e.key)),Object(i.e)(f,e.key)?void 0:(e.preventDefault(),!1))},onIonChange:function(e){var a,t=e.target.value;e.target.pattern&&(t=Object(i.c)(t,e.target.pattern,"-")),"email"===e.target.type&&(a=Object(i.f)(t),q(!a)),x||u(e,t,a)},clearInput:!0,required:d,autocomplete:"off",pattern:b,placeholder:N,className:"textInput",onIonBlur:function(e){v&&v(e)},maxlength:y,readonly:x||!1},E&&c.a.createElement(o.a,{iconProps:E}))),c.a.createElement("div",{className:""},p&&c.a.createElement(r.P,{color:"danger",className:"validation-message"},c.a.createElement(r.y,{className:"ion-padding-start validation-message"},p))),w&&g&&c.a.createElement(r.P,{color:"danger",className:"validation-message"},c.a.createElement(r.y,{className:"ion-padding-start validation-message"},g)))}},232:function(e,a,t){},252:function(e,a,t){"use strict";t.r(a);var n=t(19),r=t(9),l=t(4),c=t.n(l),i=t(10),o=t(22),m=t(2),s=t(16),u=t(0),d=t.n(u),p=t(159),b=t(151),f=t(154),g=t(152);t(232);a.default=function(e){var a=Object(u.useState)(e.location.state),t=Object(o.a)(a,2),l=t[0],N=t[1],E=Object(u.useState)(),v=Object(o.a)(E,2),x=(v[0],v[1]),h=Object(u.useState)({}),y=Object(o.a)(h,2),j=y[0],O=y[1],w=function(){var a=Object(i.a)(c.a.mark((function a(){var t,n;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t={},Object(f.d)(l.firstName)&&(t.firstName="First Name is required"),Object(f.d)(l.lastName)&&(t.lastName="Last Name is required"),Object(f.d)(l.email)&&(t.email="Email is required"),Object(f.d)(l.mobileNumber)&&(t.mobileNumber="Mobile number is required"),Object(f.d)(l.landLineNumber)&&(t.landLineNumber="Phone number is required"),!(l.firstName&&l.lastName&&l.email&&l.mobileNumber&&l.landLineNumber)){a.next=12;break}return l.confirmDetails=!0,a.next=10,Object(b.a)(g.confirmDetailUrl,l);case 10:(n=a.sent)&&n.success?e.history.push("/tabs/",{direction:"none"}):t.errorGeneral=n.data.message||"Error occured";case 12:O(t);case 13:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),q=function(e,a,t){x(t),N(Object(r.a)(Object(r.a)({},l),{},Object(n.a)({},e.target.name,a))),O(Object(r.a)(Object(r.a)({},j),{},Object(n.a)({},e.target.name,"")))};return d.a.createElement(m.B,{id:"profilePage"},d.a.createElement(m.n,null,d.a.createElement("div",{className:"main-container"},d.a.createElement("div",{className:"login-logo"},d.a.createElement("img",{src:"assets/img/dubai_trade_logo.png",alt:"Ionic logo"})),d.a.createElement("div",{className:"form-content"},d.a.createElement("div",{className:"login-box-header"}),d.a.createElement("form",{noValidate:!0,onSubmit:w,autoComplete:"off"},d.a.createElement(m.z,{className:"form-section"},d.a.createElement("div",{className:"welcome-note"},"Dear ",l.userName,",",d.a.createElement("br",null),"Welcome to DT Trucking.",d.a.createElement("br",null),d.a.createElement("br",null),"Kindly confirm your contact details in order to proceed with booking."),d.a.createElement(p.a,{name:"firstName",value:l.firstName,label:"First Name",errors:j.firstName,type:"text",required:!0,onChange:q,datatype:"TEXT",placeholder:"First Name"}),d.a.createElement(p.a,{name:"lastName",value:l.lastName,label:"Last Name",errors:j.lastName,type:"text",required:!0,onChange:q,placeholder:"Last Name"}),d.a.createElement(p.a,{name:"email",value:l.email,label:"Email",errors:j.email,type:"email",required:!0,onChange:q,description:"Email Format abc@xyz.com",placeholder:"Email"}),d.a.createElement(p.a,{name:"mobileNumber",value:l.mobileNumber,label:"Mobile",errors:j.mobileNumber,type:"text",required:!0,onChange:q,datatype:"TEL_NUM",pattern:"###-##-#######",description:"Tel Format 971-xx-xxxxxxx",placeholder:"Mobile"}),d.a.createElement(p.a,{name:"landLineNumber",value:l.landLineNumber,label:"Phone",errors:j.landLineNumber,type:"text",required:!0,onChange:q,datatype:"TEL_NUM",pattern:"###-##-#######",description:"Tel Format 971-xx-xxxxxxx",placeholder:"Phone"})),d.a.createElement("div",{className:""},j.errorGeneral&&d.a.createElement(m.P,{color:"danger",className:"validation-message genralError"},d.a.createElement(m.y,{className:"ion-padding-start"},j.errorGeneral))),d.a.createElement("div",{className:"button-div"},d.a.createElement("div",{className:"button-holder",onClick:w},d.a.createElement(m.s,{slot:"icon-only",icon:s.d}))))))))}}}]);
//# sourceMappingURL=20.b1d3a254.chunk.js.map