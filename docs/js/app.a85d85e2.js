(function(t){function e(e){for(var a,o,i=e[0],l=e[1],c=e[2],f=0,v=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&v.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(v.length)v.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"050c":function(t,e,n){"use strict";var a=n("5fda"),r=n.n(a);r.a},"0ddb":function(t,e,n){"use strict";var a=n("70cc"),r=n.n(a);r.a},"505c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",[t._v("SUDO")]),n("span",{staticClass:"font-weight-light"},[t._v(" RAMEN APP")])]),n("v-spacer"),n("v-btn",{attrs:{text:"",href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank"}},[n("span",{staticClass:"mr-2"},[t._v("Latest Release")])])],1),n("v-content",[n("v-tabs",{attrs:{centered:"true"}},[n("v-tab",{attrs:{to:"/p0"}},[t._v("Input Text")]),n("v-tab",{attrs:{to:"/p1"}},[t._v("Counter")]),n("v-tab",{attrs:{to:"/p2"}},[t._v("Show/Hide")]),n("v-tab",{attrs:{to:"/p3"}},[t._v("Select")])],1),n("v-card",{staticClass:"ma-auto",attrs:{"max-width":"512",outlined:""}},[n("router-view")],1),t._v(">\n  ")],1)],1)},s=[],o={name:"App",data:function(){return{}}},i=o,l=n("2877"),c=n("6544"),u=n.n(c),f=n("7496"),v=n("40dc"),p=n("8336"),d=n("b0af"),h=n("a75b"),m=n("2fa4"),b=n("71a3"),y=n("fe57"),x=n("2a7f"),_=Object(l["a"])(i,r,s,!1,null,null,null),g=_.exports;u()(_,{VApp:f["a"],VAppBar:v["a"],VBtn:p["a"],VCard:d["a"],VContent:h["a"],VSpacer:m["a"],VTab:b["a"],VTabs:y["a"],VToolbarTitle:x["a"]});var w=n("8c4f"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),a("v-flex",{attrs:{"mb-4":""}},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n        Welcome to Vuetify\n      ")]),a("p",{staticClass:"subheading font-weight-regular"},[t._v("\n        For help and collaboration with other Vuetify developers,\n        "),a("br"),t._v("please join our online\n        "),a("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),a("v-flex",{attrs:{"mb-5":"",xs12:""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),a("v-layout",{attrs:{"justify-center":""}},t._l(t.whatsNext,(function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])})),0)],1),a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),a("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,(function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])})),0)],1),a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),a("v-layout",{attrs:{"justify-center":""}},t._l(t.ecosystem,(function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])})),0)],1)],1)],1)},k=[],C={data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},V=C,O=n("a523"),S=n("0e8f"),T=n("adda"),P=n("a722"),E=Object(l["a"])(V,j,k,!1,null,null,null),A=E.exports;u()(E,{VContainer:O["a"],VFlex:S["a"],VImg:T["a"],VLayout:P["a"]});var H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Input Text")]),n("v-text-field",{attrs:{label:"Type here"},model:{value:t.inputText,callback:function(e){t.inputText=e},expression:"inputText"}}),n("p",[t._v("text: "+t._s(t.inputText))])],1)},L=[],W={name:"HelloWorld",data:function(){return{inputText:""}}},$=W,M=(n("b3dd"),n("8654")),I=Object(l["a"])($,H,L,!1,null,"422a35f6",null),B=I.exports;u()(I,{VTextField:M["a"]});var D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Counter")]),t._v("\n  "+t._s(t.count)+"\n  "),n("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"indigo"},on:{click:t.increment}},[n("v-icon",{attrs:{dark:""}},[t._v("mdi-plus")])],1),n("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"indigo"},on:{click:t.decrement}},[n("v-icon",{attrs:{dark:""}},[t._v("mdi-minus")])],1)],1)},F=[],N={name:"HelloWorld",data:function(){return{count:0}},methods:{increment:function(){this.count=this.count+1},decrement:function(){this.count=this.count-1}}},q=N,J=(n("050c"),n("132d")),R=Object(l["a"])(q,D,F,!1,null,"5b4f7976",null),Q=R.exports;u()(R,{VBtn:p["a"],VIcon:J["a"]});var U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Show/Hide")]),n("v-checkbox",{attrs:{label:"Show element"},model:{value:t.seen,callback:function(e){t.seen=e},expression:"seen"}}),t.seen?n("p",[t._v("Now you see me")]):t._e()],1)},z=[],G={name:"HelloWorld",data:function(){return{seen:!1}}},K=G,X=(n("b9d8"),n("ac7c")),Y=Object(l["a"])(K,U,z,!1,null,"8643884e",null),Z=Y.exports;u()(Y,{VCheckbox:X["a"]});var tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Select")]),n("v-select",{attrs:{"item-text":"key","item-value":"value",items:t.itemList,label:"select here","return-object":""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),n("p",[t._v("Selected: "+t._s(t.selected.value))])],1)},et=[],nt={name:"HelloWorld",data:function(){return{selected:"",itemList:[{key:"a",value:"A"},{key:"b",value:"B"},{key:"c",value:"C"},{key:"d",value:"D"}]}}},at=nt,rt=(n("0ddb"),n("b974")),st=Object(l["a"])(at,tt,et,!1,null,"054b8ecb",null),ot=st.exports;u()(st,{VSelect:rt["a"]}),a["a"].use(w["a"]);var it=new w["a"]({routes:[{path:"/",name:"HelloWorld",component:A},{path:"/p0",name:"Page0",component:B},{path:"/p1",name:"Page1",component:Q},{path:"/p2",name:"Show",component:Z},{path:"/p3",name:"Select",component:ot}]}),lt=n("f309");a["a"].use(lt["a"]);var ct=new lt["a"]({icons:{iconfont:"mdi"}});a["a"].config.productionTip=!1,new a["a"]({router:it,vuetify:ct,render:function(t){return t(g)}}).$mount("#app")},"5fda":function(t,e,n){},6200:function(t,e,n){},"70cc":function(t,e,n){},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"},b3dd:function(t,e,n){"use strict";var a=n("6200"),r=n.n(a);r.a},b9d8:function(t,e,n){"use strict";var a=n("505c"),r=n.n(a);r.a}});
//# sourceMappingURL=app.a85d85e2.js.map