(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{240:function(t,e,n){var content=n(252);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("02bb111c",content,!0,{sourceMap:!1})},251:function(t,e,n){"use strict";var o=n(240);n.n(o).a},252:function(t,e,n){(e=n(14)(!1)).push([t.i,"header[data-v-91f1346a]{position:fixed}.container[data-v-91f1346a]{min-height:100vh;background:#eef5ff}.content[data-v-91f1346a]{width:700px;margin:auto;padding:90px 0 50px}.content .item[data-v-91f1346a]{margin-bottom:30px;background:#fff;padding:30px 30px 20px;border-radius:6px;transition:all .3s}.content .item[data-v-91f1346a]:hover{box-shadow:0 1px 8px rgba(0,132,255,.3)}.content .item .text[data-v-91f1346a]{color:#333}.content .item .text[data-v-91f1346a] .hljs-right{text-align:right}.content .item .time[data-v-91f1346a]{font-size:13px;text-align:right;margin-top:14px;color:#888}@media screen and (max-width:700px){.content[data-v-91f1346a]{width:100%;padding:80px 20px 20px}}@media screen and (max-width:500px){.content[data-v-91f1346a]{width:100%;padding:70px 20px 10px}.content .item[data-v-91f1346a]{padding:20px;margin-bottom:18px}}",""]),t.exports=e},278:function(t,e,n){"use strict";n.r(e);n(33);var o=n(5),r=n(31),d={data:function(){return{music:"https://image.raindays.cn/Myself-Resources/music/jingxin.mp3",refresh:!0,loadingType:"more"}},head:function(){return{title:"一封信 | ".concat(this.info.web_name)}},mounted:function(){var t=this;this.info.bg.bg_letter&&(this.music=this.info.bg.bg_letter,this.refresh=!1,this.$nextTick((function(){return t.refresh=!0}))),this.data.totalPage>1&&window.addEventListener("scroll",this.load),this.data.page==this.data.totalPage&&(this.loadingType="nomore")},destroyed:function(){this.$load("none"),window.removeEventListener("scroll",this.load)},methods:{load:function(){var t=this,data=this.$load("envelope");"object"===Object(r.a)(data)&&(this.loadingType="loading"),data&&data.then((function(e){if(1===e.status){var n=e.body;t.data.data=t.data.data.concat(n.data),n.page==n.totalPage?(t.loadingType="nomore",window.removeEventListener("scroll",t.load)):t.loadingType="more",t.$setScroll(".bottom-loading")}else t.loadingType="more"})).catch((function(e){t.loadingType="nomore"}))}},computed:{info:function(){return this.$store.state.data}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("envelope");case 2:return n=e.sent,data=n.data,e.abrupt("return",{data:1===data.status?data.body:""});case 5:case"end":return e.stop()}}),e)})))()}},c=(n(251),n(6)),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.refresh?n("Header",{attrs:{music:t.music,title:"好好学习, 天天向上!"}}):t._e(),t._v(" "),n("section",{staticClass:"content"},[t.data.data&&0!=t.data.data.length?[t._l(t.data.data,(function(e,o){return n("div",{key:o,staticClass:"item"},[n("div",{staticClass:"text",domProps:{innerHTML:t._s(e.contentHtml)}}),t._v(" "),n("div",{staticClass:"time"},[t._v(t._s(e.time))])])})),t._v(" "),n("LoadMore",{attrs:{loadingType:t.loadingType}})]:n("div",[t._v("\n            空无一物，就像你我一样。\n        ")])],2)],1)}),[],!1,null,"91f1346a",null);e.default=component.exports}}]);