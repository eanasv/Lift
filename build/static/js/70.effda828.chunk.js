(this["webpackJsonpionic-react-conference-app"]=this["webpackJsonpionic-react-conference-app"]||[]).push([[70],{245:function(e,n,t){"use strict";t.r(n),t.d(n,"KEYBOARD_DID_CLOSE",(function(){return r})),t.d(n,"KEYBOARD_DID_OPEN",(function(){return i})),t.d(n,"copyVisualViewport",(function(){return D})),t.d(n,"keyboardDidClose",(function(){return g})),t.d(n,"keyboardDidOpen",(function(){return p})),t.d(n,"keyboardDidResize",(function(){return b})),t.d(n,"resetKeyboardAssist",(function(){return c})),t.d(n,"setKeyboardClose",(function(){return h})),t.d(n,"setKeyboardOpen",(function(){return f})),t.d(n,"startKeyboardAssist",(function(){return d})),t.d(n,"trackViewportChanges",(function(){return y}));var i="ionKeyboardDidShow",r="ionKeyboardDidHide",o={},u={},a=!1,c=function(){o={},u={},a=!1},d=function(e){s(e),e.visualViewport&&(u=D(e.visualViewport),e.visualViewport.onresize=function(){y(e),p()||b(e)?f(e):g(e)&&h(e)})},s=function(e){e.addEventListener("keyboardDidShow",(function(n){return f(e,n)})),e.addEventListener("keyboardDidHide",(function(){return h(e)}))},f=function(e,n){w(e,n),a=!0},h=function(e){v(e),a=!1},p=function(){var e=(o.height-u.height)*u.scale;return!a&&o.width===u.width&&e>150},b=function(e){return a&&!g(e)},g=function(e){return a&&u.height===e.innerHeight},w=function(e,n){var t=n?n.keyboardHeight:e.innerHeight-u.height,r=new CustomEvent(i,{detail:{keyboardHeight:t}});e.dispatchEvent(r)},v=function(e){var n=new CustomEvent(r);e.dispatchEvent(n)},y=function(e){o=Object.assign({},u),u=D(e.visualViewport)},D=function(e){return{width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale}}}}]);
//# sourceMappingURL=70.effda828.chunk.js.map