(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-plugin-verticalnav"],{"159a":function(t,i,a){var s=a("24fb");i=s(!1),i.push([t.i,'.fixed[data-v-42a92448]{position:fixed;z-index:99}.VerticalNav.nav[data-v-42a92448]{width:%?200?%;white-space:normal}.VerticalNav.nav .cu-item[data-v-42a92448]{width:100%;text-align:center;background-color:#fff;margin:0;border:none;height:50px;position:relative}.VerticalNav.nav .cu-item.cur[data-v-42a92448]{background-color:#f1f1f1}.VerticalNav.nav .cu-item.cur[data-v-42a92448]::after{content:"";width:%?8?%;height:%?30?%;border-radius:%?10?% 0 0 %?10?%;position:absolute;background-color:currentColor;top:0;right:%?0?%;bottom:0;margin:auto}.VerticalBox[data-v-42a92448]{display:flex}.VerticalMain[data-v-42a92448]{background-color:#f1f1f1;flex:1}',""]),t.exports=i},"1e53":function(t,i,a){"use strict";a.r(i);var s=a("e9c3"),e=a("56c7");for(var n in e)"default"!==n&&function(t){a.d(i,t,(function(){return e[t]}))}(n);a("bce2");var c,l=a("f0c5"),u=Object(l["a"])(e["default"],s["b"],s["c"],!1,null,"42a92448",null,!1,s["a"],c);i["default"]=u.exports},"4d98":function(t,i,a){var s=a("159a");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var e=a("4f06").default;e("7d67b642",s,!0,{sourceMap:!1,shadowMode:!1})},"56c7":function(t,i,a){"use strict";a.r(i);var s=a("a776"),e=a.n(s);for(var n in s)"default"!==n&&function(t){a.d(i,t,(function(){return s[t]}))}(n);i["default"]=e.a},a776:function(t,i,a){"use strict";a("ac1f"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s={data:function(){return{list:[],tabCur:0,mainCur:0,verticalNavTop:0,load:!0}},onLoad:function(){uni.showLoading({title:"加载中...",mask:!0});for(var t=[{}],i=0;i<26;i++)t[i]={},t[i].name=String.fromCharCode(65+i),t[i].id=i;this.list=t,this.listCur=t[0]},onReady:function(){uni.hideLoading()},methods:{TabSelect:function(t){this.tabCur=t.currentTarget.dataset.id,this.mainCur=t.currentTarget.dataset.id,this.verticalNavTop=50*(t.currentTarget.dataset.id-1)},VerticalMain:function(t){var i=this,a=0;if(this.load){for(var s=function(t){var s=uni.createSelectorQuery().select("#main-"+i.list[t].id);s.fields({size:!0},(function(s){i.list[t].top=a,a+=s.height,i.list[t].bottom=a})).exec()},e=0;e<this.list.length;e++)s(e);this.load=!1}for(var n=t.detail.scrollTop+10,c=0;c<this.list.length;c++)if(n>this.list[c].top&&n<this.list[c].bottom)return this.verticalNavTop=50*(this.list[c].id-1),this.tabCur=this.list[c].id,console.log(n),!1}}};i.default=s},bce2:function(t,i,a){"use strict";var s=a("4d98"),e=a.n(s);e.a},e9c3:function(t,i,a){"use strict";var s;a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){return s}));var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[a("v-uni-view",{staticClass:"fixed"},[a("cu-custom",{attrs:{isBack:!0,bgColor:"bg-shadeTop text-white"}},[a("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),a("template",{attrs:{slot:"content"},slot:"content"},[t._v("垂直导航")])],2)],1),a("v-uni-swiper",{staticClass:"screen-swiper round-dot",attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:"5000",duration:"500"}},t._l(4,(function(t,i){return a("v-uni-swiper-item",{key:i},[a("v-uni-image",{attrs:{src:"https://ossweb-img.qq.com/images/lol/web201310/skin/big3900"+i+".jpg",mode:"aspectFill"}})],1)})),1),a("v-uni-view",{staticClass:"VerticalBox"},[a("v-uni-scroll-view",{staticClass:"VerticalNav nav",staticStyle:{height:"calc(100vh - 375upx)"},attrs:{"scroll-y":!0,"scroll-with-animation":!0,"scroll-top":t.verticalNavTop}},t._l(t.list,(function(i,s){return a("v-uni-view",{key:s,staticClass:"cu-item",class:s==t.tabCur?"text-green cur":"",attrs:{"data-id":s},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.TabSelect.apply(void 0,arguments)}}},[t._v("Tab-"+t._s(i.name))])})),1),a("v-uni-scroll-view",{staticClass:"VerticalMain",staticStyle:{height:"calc(100vh - 375upx)"},attrs:{"scroll-y":!0,"scroll-with-animation":!0,"scroll-into-view":"main-"+t.mainCur},on:{scroll:function(i){arguments[0]=i=t.$handleEvent(i),t.VerticalMain.apply(void 0,arguments)}}},t._l(t.list,(function(i,s){return a("v-uni-view",{key:s,staticClass:"padding-top padding-lr",attrs:{id:"main-"+s}},[a("v-uni-view",{staticClass:"cu-bar solid-bottom bg-white"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-title text-green"}),t._v("Tab-"+t._s(i.name))],1)],1),a("v-uni-view",{staticClass:"cu-list menu-avatar"},[a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"}}),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"text-grey"},[t._v("凯尔")]),a("v-uni-view",{staticClass:"text-gray text-sm flex"},[a("v-uni-text",{staticClass:"text-cut"},[a("v-uni-text",{staticClass:"cuIcon-infofill text-red  margin-right-xs"}),t._v("我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。")],1)],1)],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("v-uni-view",{staticClass:"cu-tag round bg-grey sm"},[t._v("5")])],1)],1),a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png)"}},[a("v-uni-view",{staticClass:"cu-tag badge"},[t._v("99+")])],1),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"text-grey"},[a("v-uni-text",{staticClass:"text-cut"},[t._v("瓦洛兰之盾-塔里克")]),a("v-uni-view",{staticClass:"cu-tag round bg-orange sm"},[t._v("战士")])],1),a("v-uni-view",{staticClass:"text-gray text-sm flex"},[a("v-uni-text",{staticClass:"text-cut"},[t._v("塔里克是保护者星灵，用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。塔里克由于渎职而被放逐，离开了祖国德玛西亚，前去攀登巨神峰寻找救赎，但他找到的却是来自星界的更高层的召唤。现在的塔里克与古代巨神族的神力相融合，以瓦洛兰之盾的身份，永不疲倦地警惕着阴险狡诈的虚空腐化之力。")])],1)],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("v-uni-view",{staticClass:"cuIcon-notice_forbid_fill text-gray"})],1)],1),a("v-uni-view",{staticClass:"cu-item "},[a("v-uni-view",{staticClass:"cu-avatar radius lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png)"}}),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"text-pink"},[a("v-uni-text",{staticClass:"text-cut"},[t._v("莫甘娜")])],1),a("v-uni-view",{staticClass:"text-gray text-sm flex"},[a("v-uni-text",{staticClass:"text-cut"},[t._v("凯尔，你被自己的光芒变的盲目！")])],1)],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("v-uni-view",{staticClass:"cu-tag round bg-red sm"},[t._v("5")])],1)],1),a("v-uni-view",{staticClass:"cu-item grayscale"},[a("v-uni-view",{staticClass:"cu-avatar radius lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg)"}}),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",[a("v-uni-text",{staticClass:"text-cut"},[t._v("伊泽瑞尔")]),a("v-uni-view",{staticClass:"cu-tag round bg-orange sm"},[t._v("断开连接...")])],1),a("v-uni-view",{staticClass:"text-gray text-sm flex"},[a("v-uni-text",{staticClass:"text-cut"},[t._v("等我回来一个打十个")])],1)],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("v-uni-view",{staticClass:"cu-tag round bg-red sm"},[t._v("5")])],1)],1),a("v-uni-view",{staticClass:"cu-item cur"},[a("v-uni-view",{staticClass:"cu-avatar radius lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg)"}},[a("v-uni-view",{staticClass:"cu-tag badge"})],1),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",[a("v-uni-text",{staticClass:"text-cut"},[t._v("瓦罗兰大陆-睡衣守护者-新手保护营")]),a("v-uni-view",{staticClass:"cu-tag round bg-orange sm"},[t._v("6人")])],1),a("v-uni-view",{staticClass:"text-gray text-sm flex"},[a("v-uni-text",{staticClass:"text-cut"},[t._v("伊泽瑞尔："),a("v-uni-text",{staticClass:"cuIcon-locationfill text-orange margin-right-xs"}),t._v("传送中...")],1)],1)],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("v-uni-view",{staticClass:"cuIcon-notice_forbid_fill text-gray"})],1)],1)],1)],1)})),1)],1)],1)},n=[]}}]);