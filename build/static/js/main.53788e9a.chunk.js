(this["webpackJsonpionic-react-conference-app"]=this["webpackJsonpionic-react-conference-app"]||[]).push([[6],{102:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(34),o=n.n(c),u=n(27),i=n(2),s=n(70),l=(n(92),n(93),n(94),n(95),n(96),n(97),n(69)),d=n(49),f=n(4),m=n.n(f),p=n(10),b=n(32),E=function(e){return{type:"set-conf-loading",isLoading:e}},h=function(e){return{type:"set-conf-data",data:e}},y=n(48),v=function(e){var t=e.setIsLoggedIn,n=e.setUsername,a=Object(r.useContext)(i.E);return Object(r.useEffect)((function(){t(!1),n(void 0),a.push("/tabs/schedule")}),[t,n,a]),null},g=n(16),j=function(){return a.a.createElement(i.B,null,a.a.createElement(i.r,null,a.a.createElement(i.S,null,a.a.createElement(i.Q,null,"CardExamples"))),a.a.createElement(i.n,null,a.a.createElement(i.g,null,a.a.createElement(i.i,null,a.a.createElement(i.j,null,"Card Subtitle"),a.a.createElement(i.k,null,"Card Title")),a.a.createElement(i.h,null,"Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.")),a.a.createElement(i.g,null,a.a.createElement(i.x,null,a.a.createElement(i.s,{icon:g.u,slot:"start"}),a.a.createElement(i.y,null,"ion-item in a card, icon left, button right"),a.a.createElement(i.e,{fill:"outline",slot:"end"},"View")),a.a.createElement(i.h,null,"This is content, without any paragraph or header tags, within an ion-cardContent element.")),a.a.createElement(i.g,null,a.a.createElement(i.x,{href:"#",className:"ion-activated"},a.a.createElement(i.s,{icon:g.E,slot:"start"}),a.a.createElement(i.y,null,"Card Link Item 1 activated")),a.a.createElement(i.x,{href:"#"},a.a.createElement(i.s,{icon:g.F,slot:"start"}),a.a.createElement(i.y,null,"Card Link Item 2")),a.a.createElement(i.x,{className:"ion-activated"},a.a.createElement(i.s,{icon:g.D,slot:"start"}),a.a.createElement(i.y,null,"Card Button Item 1 activated")),a.a.createElement(i.x,null,a.a.createElement(i.s,{icon:g.C,slot:"start"}),a.a.createElement(i.y,null,"Card Button Item 2")))))},O=(n(98),function(e){var t=function(){console.log(e),e.history.goBack()};return a.a.createElement(i.B,{className:"profile-page"},a.a.createElement(i.n,{className:"profile-menu-content"},a.a.createElement("div",{className:"close-icon"},a.a.createElement(i.s,{onClick:function(e){return t()},icon:g.n})),a.a.createElement("div",{className:"menu-links"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(i.s,{onClick:function(e){return t()},icon:g.t})," ","My Profile"),a.a.createElement("li",null," ",a.a.createElement(i.s,{onClick:function(e){return t()},icon:g.e})," ","My Jobs"),a.a.createElement("li",null,a.a.createElement(i.s,{onClick:function(e){return t()},icon:g.B}),"Settings"),a.a.createElement("li",null,a.a.createElement(i.s,{onClick:function(e){return t()},icon:g.p}),"Help & Support"," "),a.a.createElement("li",null,a.a.createElement(i.s,{onClick:function(e){return t()},icon:g.v}),"Logout"))),a.a.createElement("div",{className:"tnc"},"Privacy policy - Terms and Conditions.")))});var _=function(){return a.a.createElement(i.B,null,a.a.createElement(i.n,null,a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(i.F,{routerDirection:"forward",href:"/login"},"Login")),a.a.createElement("li",null,a.a.createElement(i.F,{routerDirection:"forward",href:"/notifications"},"Notifications")),a.a.createElement("li",null,a.a.createElement(i.F,{routerDirection:"forward",href:"/tabs"},"Maintab")),a.a.createElement("li",null,a.a.createElement(i.F,{routerDirection:"forward",href:"/bookTruckTab"},"bookTruckTab")),a.a.createElement("li",null,a.a.createElement(i.F,{routerDirection:"forward",href:"/decl"},"Declaration")),a.a.createElement("li",null,a.a.createElement(i.F,{routerDirection:"forward",href:"/profile"},"Profile")),a.a.createElement("li",null,a.a.createElement(i.F,{routerDirection:"forward",href:"/quickBook"},"QuickBook")))))},L=n(22),T=n(43),A=n(66);function k(){var e=Object(r.useState)(T.a.getState().CheckAccessToken.status),t=Object(L.a)(e,2),n=t[0],c=t[1],o=D();return T.a.subscribe(Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(T.a.getState().ApiRequestState.isLoading);case 1:case"end":return e.stop()}}),e)})))),n?a.a.createElement("div",{className:o.spinnerBg},a.a.createElement(i.K,{color:"light",name:"bubbles"})):a.a.createElement(a.a.Fragment,null)}var D=Object(A.a)({spinnerBg:{zIndex:"999",display:"flex",justifyContent:"center",alignItems:"center",height:"100%",opacity:"0.8",background:"rgba(0, 0, 0, 0.5)",transform:"scale(2)"}}),C=n(46),R=n(44),N=C.b.App;function w(e){var t,n=Object(u.e)();return N.addListener("appStateChange",(function(e){e.isActive?clearTimeout(t):t=setTimeout((function(){n.push("/login")}),R.c)})),a.a.createElement("div",null)}var x=a.a.lazy((function(){return Promise.all([n.e(1),n.e(0),n.e(4)]).then(n.bind(null,208))})),S=a.a.lazy((function(){return Promise.all([n.e(1),n.e(3),n.e(0),n.e(10)]).then(n.bind(null,257))})),I=a.a.lazy((function(){return Promise.all([n.e(1),n.e(3),n.e(0),n.e(11)]).then(n.bind(null,259))})),M=a.a.lazy((function(){return n.e(18).then(n.bind(null,200))})),U=a.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(0),n.e(16)]).then(n.bind(null,258))})),P=a.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(0),n.e(21)]).then(n.bind(null,263))})),Y=a.a.lazy((function(){return Promise.all([n.e(1),n.e(0),n.e(4),n.e(24)]).then(n.bind(null,251))})),B=a.a.lazy((function(){return Promise.all([n.e(1),n.e(0),n.e(19)]).then(n.bind(null,209))})),K=a.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(0),n.e(4),n.e(15)]).then(n.bind(null,260))})),z=a.a.lazy((function(){return Promise.all([n.e(1),n.e(0),n.e(20)]).then(n.bind(null,252))})),F=a.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(0),n.e(14)]).then(n.bind(null,264))})),V=a.a.lazy((function(){return Promise.all([n.e(1),n.e(32),n.e(0),n.e(17)]).then(n.bind(null,261))})),H=a.a.lazy((function(){return Promise.all([n.e(1),n.e(3),n.e(0),n.e(13)]).then(n.bind(null,262))})),J=a.a.lazy((function(){return Promise.all([n.e(1),n.e(3),n.e(0),n.e(12)]).then(n.bind(null,253))})),q=function(){return a.a.createElement(d.b,null,a.a.createElement(G,null))},G=Object(l.a)({mapStateToProps:function(e){return{darkMode:e.user.darkMode,schedule:e.data.schedule}},mapDispatchToProps:{loadConfData:function(){return function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(E(!0)),e.next=3,Object(b.a)();case 3:n=e.sent,t(h(n)),t(E(!1));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},loadUserData:y.a,setIsLoggedIn:y.b,setUsername:y.c},component:function(e){var t=e.darkMode,n=e.schedule,c=e.setIsLoggedIn,o=e.setUsername,l=e.loadConfData,d=e.loadUserData;return Object(r.useEffect)((function(){d(),l()}),[]),0===n.groups.length?a.a.createElement("div",null):a.a.createElement(i.b,{className:"".concat(t?"dark-theme":"")},a.a.createElement(k,null),a.a.createElement(s.a,null,a.a.createElement(w,null),a.a.createElement(i.L,{contentId:"main"},a.a.createElement(i.G,{id:"main"},a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(u.b,{path:"/start",component:x}),a.a.createElement(u.b,{path:"/tabs",component:x}),a.a.createElement(u.b,{path:"/bookTruckTab",component:S}),a.a.createElement(u.b,{path:"/decl",component:I}),a.a.createElement(u.b,{path:"/profile",component:M}),a.a.createElement(u.b,{path:"/confirmDetails",component:z}),a.a.createElement(u.b,{path:"/profilemenu",component:O}),a.a.createElement(u.b,{path:"/quickBook",component:U}),a.a.createElement(u.b,{path:"/login",component:P}),a.a.createElement(u.b,{path:"/ex",component:j}),a.a.createElement(u.b,{path:"/notifications",component:Y}),a.a.createElement(u.b,{path:"tabs/status",component:B}),a.a.createElement(u.b,{path:"/container",component:J}),a.a.createElement(u.b,{path:"/bookingDetails/:status",component:K}),a.a.createElement(u.b,{path:"/containerDetails",component:F}),a.a.createElement(u.b,{path:"/containerCart",component:H}),a.a.createElement(u.b,{path:"/addAddress",component:V}),a.a.createElement(u.b,{path:"/logout",render:function(){return a.a.createElement(v,{setIsLoggedIn:c,setUsername:o})}}),a.a.createElement(u.b,{path:"/",component:_,exact:!0}))))))}});o.a.render(a.a.createElement(q,null),document.getElementById("root"))},32:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return f}));var r=n(4),a=n.n(r),c=n(17),o=n(10),u=n(46).b.Storage,i=function(){var e=Object(o.a)(a.a.mark((function e(){var t,n,r,o,u,i,s,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([fetch("/assets/data/data.json"),fetch("/assets/data/locations.json")]);case 2:return t=e.sent,e.next=5,t[0].json();case 5:return n=e.sent,r=n.schedule[0],o=m(r),u=n.speakers,e.next=11,t[1].json();case 11:return i=e.sent,s=o.reduce((function(e,t){return e.concat(t.tracks)}),[]).filter((function(e,t,n){return n.indexOf(e)===t})).sort(),l={schedule:r,sessions:o,locations:i,speakers:u,allTracks:s,filteredTracks:Object(c.a)(s)},e.abrupt("return",l);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(o.a)(a.a.mark((function e(){var t,n,r,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([u.get({key:"hasLoggedIn"}),u.get({key:"hasSeenTutorial"}),u.get({key:"username"})]);case 2:return t=e.sent,e.next=5,t[0].value;case 5:return e.t0=e.sent,n="true"===e.t0,e.next=9,t[1].value;case 9:return e.t1=e.sent,r="true"===e.t1,e.next=13,t[2].value;case 13:if(e.t2=e.sent,e.t2){e.next=16;break}e.t2=void 0;case 16:return c=e.t2,o={isLoggedin:n,hasSeenTutorial:r,username:c},e.abrupt("return",o);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.set({key:"hasLoggedIn",value:JSON.stringify(t)});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.set({key:"hasSeenTutorial",value:JSON.stringify(t)});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=5;break}return e.next=3,u.remove({key:"username"});case 3:e.next=7;break;case 5:return e.next=7,u.set({key:"username",value:t});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function m(e){var t=[];return e.groups.forEach((function(e){e.sessions.forEach((function(e){return t.push(e)}))})),t}},43:function(e,t,n){"use strict";var r=n(42),a=n(5),c={user:{access_token:"",refresh_token:"",expires_in_second:9e5,created_Time:new Date},status:!1},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.a:return console.log(t.data.access_token),e={user:{access_token:t.data.access_token,refresh_token:t.data.refresh_token,expires_in_second:9e5,created_Time:new Date},status:!0};case a.u:return console.log("accesstoken removed",c),c;default:return e}},u={isLoading:!1,message:""};var i={user:{userName:"",userType:"",selectedAgent:{},userdetails:{lastLoggedIn:"some date"}},status:!1},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.i:return{user:t.payLoad,status:!0};case a.K:return{user:{userName:"",userdetails:{lastLoggedIn:"some date"}},status:!0};case a.c:return e.user.userType=t.payLoad,e;case a.f:return e.user.selectedAgent=t.payLoad,e;case a.D:return{user:{userName:"",userdetails:{lastLoggedIn:"some date"}},status:!1};default:return e}},l=n(17),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.b:return e.length<1?t.payLoad:[].concat(Object(l.a)(e),[t.payLoad]);case a.v:return e.filter((function(e){return e.code!==t.payLoad}));case a.E:var n=Object(l.a)(e);return n.push(t.payLoad),e=t.payLoad,n.pop(),n;case a.s:return[];default:return e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.d:return(n=e=e.concat(t.payLoad.containerList)).selectedNumber=t.payLoad.selectedNumber,n;case a.z:return e.filter((function(e){return e.container_number!==t.payLoad}));case a.A:var n;return(n=e.filter((function(e){return-1===t.payLoad.containerList.indexOf(e)}))).selectedNumber=t.payLoad.selectedNumber,n;case a.G:var r=Object(l.a)(e);return r.map((function(e,n){e.container_number==t.payLoad.container_number?e=t.payLoad:console.log("no")})),r.push(1),r.pop(),r.selectedNumber=t.payLoad.selectedNumber,r;case a.w:return[];default:return e}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.e:return e.concat(t.payLoad),e.concat(t.payLoad);case a.A:return e=e.filter((function(e){return-1===t.payLoad.indexOf(e)}));case a.x:return[];default:return e}},p=new Date,b=""+p.getDate(),E=""+(p.getMonth()+1),h=""+p.getHours(),y=""+p.getMinutes();E.length<2&&(E="0"+E),y.length<2&&(y="0"+y),h.length<2&&(h="0"+h),b.length<2&&(b="0"+b);var v=b+"/"+E+"/"+p.getFullYear()+"  "+h+":"+y,g=p.toISOString(),j=[{refVehicleTypeCode:"",dateAndTime:v,interval:"",samayam:g}],O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.h:return e.concat(t.payLoad),e.concat(t.payLoad);case a.C:var n=Object(l.a)(e);if(n.length>1){n.pop();return n}case a.J:var r=Object(l.a)(e);return r.push(t.payLoad),e=t.payLoad,r.pop(),r;case a.y:return e=[{refVehicleTypeCode:"",dateAndTime:v,interval:"",samayam:g}];case a.I:e=[{refVehicleTypeCode:"",dateAndTime:v,interval:"",samayam:t.payLoad}];default:return e}},_=n(9),L={containerList:[],multiLocAndTime:!1,truckNumber:0,date_time:n(59).f},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.n:return e.containerList=t.payLoad,e.multiLocAndTime=!0,e;case a.o:return e.containerList=t.payLoad,e.multiLocAndTime=!1,e;case a.p:return console.log(t.payLoad),(n=Object(_.a)({},e)).containerList.forEach((function(e,r){n.containerList[r]=Object(_.a)(Object(_.a)({},e),t.payLoad)})),n;case a.r:var n=Object(_.a)({},e);return console.log("%%%%%%",t.payLoad),n.containerList.forEach((function(e,r){e.container_number===t.payLoad.containerNumber&&(n.containerList[r]=Object(_.a)(Object(_.a)({},e),t.payLoad.element))})),console.log("***********",n),n;case a.q:n=Object(_.a)({},e);return console.log(t.payLoad),n=Object(_.a)(Object(_.a)({},n),t.payLoad),console.log(n),n;case a.m:return L;default:return e}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.g:return e.concat(t.payLoad),console.log(t.payLoad),e.concat(t.payLoad);case a.F:var n=Object(l.a)(e);return n.map((function(e,r){e.referenceNumber===t.payLoad.referenceNumber&&(n[r]=t.payLoad)})),n;case a.H:var r=Object(l.a)(e);return r.map((function(e,n){e.referenceNumber===t.payLoad.boeNumber&&e.containerList.map((function(n,r){n.container_number===t.payLoad.container_number?e=t.payLoad:console.log("no")}))})),r.push(1),r.pop(),r;case a.t:return[];default:return e}},k={cartNumber:0},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.L:var n=e;return n.cartNumber=t.payLoad,n;case a.B:default:return e}},C=Object(r.b)({CheckAccessToken:o,ApiRequestState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.k:return{isLoading:!0,message:""};case a.l:return{isLoading:!1,message:""};case a.j:return console.log("API_REQUEST_FAILURE"),{isLoading:!1,message:t.payLoad};default:return e}},CheckUserStatus:s,Addresses:d,ContainerCart:f,DeclarationCart:m,Trucks:O,TruckBook:T,Cart:A,VariableValues:D}),R=n(72),N=Object(r.c)(C,Object(r.a)(R.a));t.a=N},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return u}));var r={TEXT:"^[A-Za-z0-9 ]+$",NUM:"^\\d+$",NUM_DEC:"^\\d*\\.\\d+$",ALPHA_NUM:"/^[a-zA-Z0-9 ]*$/",TEL_NUM:"^\\d+$"},a="http://www.dubaitrade.ae/en/terms-conditions",c=18e5,o=5,u=[{label:"No Interval",value:"00:00"},{label:"30 Min",value:"00:30"},{label:"1 Hr",value:"01:00"},{label:"2 Hr",value:"02:00"},{label:"3 Hr",value:"03:00"},{label:"4 Hr",value:"04:00"}]},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return d}));var r=n(4),a=n.n(r),c=n(10),o=n(32),u=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(i(!0)),e.next=3,Object(o.b)();case 3:n=e.sent,t(s(n)),t(i(!1));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},i=function(e){return{type:"set-user-loading",isLoading:e}},s=function(e){return{type:"set-user-data",data:e}},l=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.d)(e);case 2:return t.abrupt("return",{type:"set-is-loggedin",loggedIn:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.e)(e);case 2:return t.abrupt("return",{type:"set-username",username:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},49:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(22),a=n(0),c=n.n(a);var o=n(17),u=n(9);var i={data:{schedule:{groups:[]},sessions:[],speakers:[],favorites:[],locations:[],allTracks:[],filteredTracks:[],mapCenterId:0,loading:!1,menuEnabled:!0},user:{hasSeenTutorial:!1,darkMode:!1,isLoggedin:!1,loading:!1}},s=function(e){return function(t,n){var r={};return Object.keys(e).forEach((function(a){var c=e[a](t[a],n);r[a]=c||t[a]})),r}}({data:function(e,t){switch(t.type){case"set-conf-loading":return Object(u.a)(Object(u.a)({},e),{},{loading:t.isLoading});case"set-conf-data":return Object(u.a)(Object(u.a)({},e),t.data);case"add-favorite":return Object(u.a)(Object(u.a)({},e),{},{favorites:[].concat(Object(o.a)(e.favorites),[t.sessionId])});case"remove-favorite":return Object(u.a)(Object(u.a)({},e),{},{favorites:Object(o.a)(e.favorites.filter((function(e){return e!==t.sessionId})))});case"update-filtered-tracks":return Object(u.a)(Object(u.a)({},e),{},{filteredTracks:t.filteredTracks});case"set-search-text":return Object(u.a)(Object(u.a)({},e),{},{searchText:t.searchText});case"set-menu-enabled":return Object(u.a)(Object(u.a)({},e),{},{menuEnabled:t.menuEnabled})}},user:function(e,t){switch(t.type){case"set-user-loading":return Object(u.a)(Object(u.a)({},e),{},{loading:t.isLoading});case"set-user-data":return Object(u.a)(Object(u.a)({},e),t.data);case"set-username":return Object(u.a)(Object(u.a)({},e),{},{username:t.username});case"set-has-seen-tutorial":return Object(u.a)(Object(u.a)({},e),{},{hasSeenTutorial:t.hasSeenTutorial});case"set-dark-mode":return Object(u.a)(Object(u.a)({},e),{},{darkMode:t.darkMode});case"set-is-loggedin":return Object(u.a)(Object(u.a)({},e),{},{isLoggedin:t.loggedIn})}}}),l=Object(a.createContext)({state:i,dispatch:function(){}}),d=function(e){var t=Object(a.useReducer)(s,i),n=Object(r.a)(t,2),o=n[0],u=n[1];return c.a.createElement(l.Provider,{value:{state:o,dispatch:u}},e.children)}},5:function(e,t,n){"use strict";n.d(t,"k",(function(){return r})),n.d(t,"l",(function(){return a})),n.d(t,"j",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"u",(function(){return u})),n.d(t,"i",(function(){return i})),n.d(t,"K",(function(){return s})),n.d(t,"D",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"f",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"v",(function(){return p})),n.d(t,"E",(function(){return b})),n.d(t,"s",(function(){return E})),n.d(t,"d",(function(){return h})),n.d(t,"z",(function(){return y})),n.d(t,"G",(function(){return v})),n.d(t,"w",(function(){return g})),n.d(t,"e",(function(){return j})),n.d(t,"A",(function(){return O})),n.d(t,"x",(function(){return _})),n.d(t,"h",(function(){return L})),n.d(t,"C",(function(){return T})),n.d(t,"J",(function(){return A})),n.d(t,"y",(function(){return k})),n.d(t,"I",(function(){return D})),n.d(t,"n",(function(){return C})),n.d(t,"p",(function(){return R})),n.d(t,"o",(function(){return N})),n.d(t,"r",(function(){return w})),n.d(t,"m",(function(){return x})),n.d(t,"q",(function(){return S})),n.d(t,"g",(function(){return I})),n.d(t,"B",(function(){return M})),n.d(t,"H",(function(){return U})),n.d(t,"F",(function(){return P})),n.d(t,"L",(function(){return Y})),n.d(t,"t",(function(){return B}));var r="API_REQUEST_STARTED",a="API_REQUEST_SUCCESS",c="API_REQUEST_FAILURE",o="ADD_ACCESS_TOKEN",u="REMOVE_ACCESS_TOKEN",i="ADD_USER",s="UPDATE_USER",l="REMOVE_USER",d="ADD_AGENTTYPE",f="ADD_SELECTED_AGENT",m="ADD_ADDRESS",p="REMOVE_ADDRESS",b="UPDATE_ADDRESS",E="CLEAR_ALL_ADDRESS",h="ADD_CONTAINER_CART",y="REMOVE_CONTAINER_CART",v="UPDATE_CONTAINER_CART",g="REMOVE_ALL_CONTAINERS",j="ADD_DECLARATION_CART",O="REMOVE_DECLARATION_CART",_="REMOVE_ALL_DECLARATIONS",L="ADD_TRUCK",T="REMOVE_TRUCK",A="UPDATE_TRUCK",k="REMOVE_ALL_TRUCK",D="UPDATE_SAMAYAM_TRUCK",C="BOOK_TRUCK_MULTILOCATION",R="BOOK_TRUCK_UPDATE_ADDRESS",N="BOOK_TRUCK_SINGLE_LOCATION",w="BOOK_TRUCK_UPDATE_OTHER_DATA",x="BOOK_TRUCK_CLEAR",S="BOOK_TRUCK_UPDATE_COMMON_DATA",I="ADD_TO_CART",M="REMOVE_FROM_CART",U="UPDATE_CONTAINER_IN_CART",P="UPDATE_BOE_IN_CART",Y="UPDATE_VARIABLE",B="CLEAR_CART"},59:function(e,t,n){"use strict";n.d(t,"f",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(33),a=n.n(r),c=n(44),o=a()().format("YYYY-MM-DD hh:mm"),u=a()().format("YYYY-MM-DD"),i=(a()().subtract(1,"days").format("MM/DD/YYYY"),a()().add(2,"years").format("YYYY-MM-DD")),s=a()().subtract(2,"years").format("YYYY-MM-DD"),l=function(){for(var e=[],t=c.e,n=0;n<t;n++)e.push({label:n+1,value:n+1});return e},d=function(e){return console.log(e),a()(e).format("YYYY-MM-DD hh:mm")}},69:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),a=n.n(r),c=n(49);function o(e){var t=e.mapStateToProps,n=void 0===t?function(){return{}}:t,o=e.mapDispatchToProps,u=void 0===o?{}:o,i=e.component;return a.a.memo((function(e){var t=Object(r.useContext)(c.a),o=Object(r.useMemo)((function(){var e={};return Object.keys(u).forEach((function(n){var r=u[n];e[n]=function(){var e=r.apply(void 0,arguments);if("object"===typeof e)t.dispatch(e);else{var n=e(t.dispatch);"object"===typeof n&&n.then&&n.then((function(e){e&&e.type&&t.dispatch(e)}))}}})),e}),[u]),s=Object(r.useMemo)((function(){return Object.assign({},e,n(t.state,e),o)}),[e,t.state]);return a.a.createElement(i,s)}))}},77:function(e,t,n){e.exports=n(102)},82:function(e,t,n){var r={"./ion-action-sheet.entry.js":[104,22],"./ion-alert.entry.js":[105,23],"./ion-app_8.entry.js":[106,25],"./ion-avatar_3.entry.js":[107,36],"./ion-back-button.entry.js":[108,37],"./ion-backdrop.entry.js":[109,62],"./ion-button_2.entry.js":[110,38],"./ion-card_5.entry.js":[111,39],"./ion-checkbox.entry.js":[112,40],"./ion-chip.entry.js":[113,41],"./ion-col_3.entry.js":[114,63],"./ion-datetime_3.entry.js":[115,28],"./ion-fab_3.entry.js":[116,42],"./ion-img.entry.js":[117,64],"./ion-infinite-scroll_2.entry.js":[118,65],"./ion-input.entry.js":[119,43],"./ion-item-option_3.entry.js":[120,44],"./ion-item_8.entry.js":[121,45],"./ion-loading.entry.js":[122,46],"./ion-menu_3.entry.js":[123,47],"./ion-modal.entry.js":[124,26],"./ion-nav_2.entry.js":[125,33],"./ion-popover.entry.js":[126,27],"./ion-progress-bar.entry.js":[127,48],"./ion-radio_2.entry.js":[128,49],"./ion-range.entry.js":[129,50],"./ion-refresher_2.entry.js":[130,29],"./ion-reorder_2.entry.js":[131,35],"./ion-ripple-effect.entry.js":[132,66],"./ion-route_4.entry.js":[133,51],"./ion-searchbar.entry.js":[134,52],"./ion-segment_2.entry.js":[135,53],"./ion-select_3.entry.js":[136,54],"./ion-slide_2.entry.js":[137,67],"./ion-spinner.entry.js":[138,31],"./ion-split-pane.entry.js":[139,68],"./ion-tab-bar_2.entry.js":[140,55],"./ion-tab_2.entry.js":[141,34],"./ion-text.entry.js":[142,56],"./ion-textarea.entry.js":[143,57],"./ion-toast.entry.js":[144,58],"./ion-toggle.entry.js":[145,30],"./ion-virtual-scroll.entry.js":[146,69]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=82,e.exports=a},84:function(e,t,n){var r={"./ion-icon.entry.js":[147,76]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=84,e.exports=a},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){}},[[77,8,9]]]);
//# sourceMappingURL=main.53788e9a.chunk.js.map