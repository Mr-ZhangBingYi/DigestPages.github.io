(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-basics-MedicalScience"],{"408c":function(t,a,e){"use strict";e.r(a);var n=e("80bb"),r=e.n(n);for(var c in n)"default"!==c&&function(t){e.d(a,t,(function(){return n[t]}))}(c);a["default"]=r.a},"40ac":function(t,a,e){"use strict";e.r(a);var n=e("8518"),r=e("408c");for(var c in r)"default"!==c&&function(t){e.d(a,t,(function(){return r[t]}))}(c);e("b819");var u,i=e("f0c5"),o=Object(i["a"])(r["default"],n["b"],n["c"],!1,null,"a7e6cee8",null,!1,n["a"],u);a["default"]=o.exports},"5b74":function(t,a,e){var n=e("7404");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=e("4f06").default;r("3df7b250",n,!0,{sourceMap:!1,shadowMode:!1})},7404:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".books[data-v-a7e6cee8]{width:28%;height:%?250?%;margin:%?30?% 2.5%;padding:0 %?20?%;background-color:#faebd7;text-align:center;line-height:%?250?%}.book[data-v-a7e6cee8]{margin-top:%?50?%;display:flex;\n\t/* 自动换行 */flex-wrap:wrap \n\t/* border: 1px solid black; */}.cu-item[data-v-a7e6cee8]{width:43%;text-align:center}uni-page-body[data-v-a7e6cee8]{padding-top:%?45?%}",""]),t.exports=a},"80bb":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{CustomBar:this.CustomBar,TabCur:0,tabNav:["素问","灵枢"],conduct:[{name:"黄帝内经",url:""},{name:"本草纲目",url:""},{name:"",url:""},{name:"",url:""},{name:"",url:""}],macroscopic:[{name:"",url:""},{name:"",url:""},{name:"",url:""},{name:"",url:""},{name:"",url:""}]}},methods:{tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1)}}};a.default=n},8518:function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return r})),e.d(a,"c",(function(){return c})),e.d(a,"a",(function(){return n}));var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[e("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),e("template",{attrs:{slot:"content"},slot:"content"},[t._v("医学")])],2),e("v-uni-scroll-view",{staticClass:"bg-white nav text-center fixed",style:[{top:t.CustomBar+"px"}],attrs:{"scroll-x":!0}},t._l(t.tabNav,(function(a,n){return e("v-uni-view",{key:n,staticClass:"cu-item",class:n==t.TabCur?"text-blue cur":"",attrs:{"data-id":n},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabSelect.apply(void 0,arguments)}}},[t._v(t._s(t.tabNav[n]))])})),1),0==t.TabCur?[e("v-uni-view",{staticClass:"book"},t._l(t.conduct,(function(a){return e("v-uni-view",{key:a.conduct,staticClass:"books"},[e("v-uni-navigator",{attrs:{url:a.url}},[t._v(t._s(a.name))])],1)})),1)]:t._e(),1==t.TabCur?[e("v-uni-view",{staticClass:"book"},t._l(t.macroscopic,(function(a){return e("v-uni-view",{key:a.macroscopic,staticClass:"books"},[e("v-uni-navigator",{attrs:{url:a.url}},[t._v(t._s(a.name))])],1)})),1)]:t._e()],2)},c=[]},b819:function(t,a,e){"use strict";var n=e("5b74"),r=e.n(n);r.a}}]);