exports.ids=[6],exports.modules={58:function(t,n,o){var content=o(71);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=o(3).default;t.exports.__inject__=function(t){r("38d6a724",content,!0,t)}},70:function(t,n,o){"use strict";o.r(n);var r=o(58),d=o.n(r);for(var e in r)"default"!==e&&function(t){o.d(n,t,(function(){return r[t]}))}(e);n.default=d.a},71:function(t,n,o){(n=o(2)(!1)).push([t.i,".rain[data-v-7457547d]{width:100vw;height:100vh;overflow:hidden;position:relative}.rain .logo[data-v-7457547d]{font-size:30px}.rain .logo[data-v-7457547d],.rain .logo-img[data-v-7457547d]{color:#fff;position:fixed;bottom:20px;left:30px;z-index:9999;cursor:pointer}.rain .logo-img[data-v-7457547d]{width:80px;height:34px}.rain .logo-img img[data-v-7457547d]{width:100%}.rain .rain-bg[data-v-7457547d]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.rain .words[data-v-7457547d]{position:fixed;top:80px;right:80px}.rain .option[data-v-7457547d]{width:416px;height:70px;position:fixed;bottom:0;right:0;text-align:center}.rain .option li[data-v-7457547d]{list-style-type:none;cursor:pointer}.rain .option li[data-v-7457547d],.rain .option li span[data-v-7457547d]{display:inline-block}@media screen and (max-width:480px){.rain .rain-bg[data-v-7457547d]{position:absolute;left:60%;top:50%}.rain .rain-bg[data-v-7457547d],.rain .words[data-v-7457547d]{transform:translate(-50%,-50%)}.rain .words[data-v-7457547d]{top:30%;left:50%;right:auto}.rain .option[data-v-7457547d]{width:auto;right:20px}.rain .option li[data-v-7457547d]{width:60px;overflow:hidden}.rain .option li span[data-v-7457547d]{display:flex;justify-content:center}.rain .logo[data-v-7457547d]{left:20px}}",""]),t.exports=n},88:function(t,n,o){"use strict";o.r(n);var r={data:()=>({rainIcon:[{on:"/image/rain/rain_on.png",off:"/image/rain/rain_off.png",music:"/image/rain/thunder.mp3",active:!1},{on:"/image/rain/rain2_on.png",off:"/image/rain/rain2_off.png",music:"/image/rain/loudThunder.mp3",active:!1},{on:"/image/rain/rain3_on.png",off:"/image/rain/rain3_off.png",music:"/image/rain/rain.mp3",active:!1}],loading:!0,img:null}),head:()=>({title:"Rainy Day",meta:[{hid:"description",name:"description",content:"下雨了，打湿心扉的，不是突如其来的雨点，是人情冷暖。一辆黑色的轿车，嘎然而止，一声亲切的呼唤，上车吧！"}]}),mounted(){let img=new Image;img.src="/image/rain/rain-bg.gif",img.onload=()=>{this.loading=!1,this.img=img.src},this.$nextTick(()=>{this.music(0,!1)})},methods:{toIndex(){this.$router.push("/")},music(t,n){this.$set(this.rainIcon[t],"active",!n);let o=document.getElementsByClassName("music");n?o[t].pause():o[t].play()}}},d=o(1);var component=Object(d.a)(r,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"rain"},[t._ssrNode('<div class="logo-img" data-v-7457547d><img src="/image/logo/logo1.png" data-v-7457547d></div> <img'+t._ssrAttr("src",t.img)+' draggable="false" class="rain-bg" data-v-7457547d> <img src="/image/rain/words.png" draggable="false" class="words" data-v-7457547d> <ul class="option" data-v-7457547d>'+t._ssrList(t.rainIcon,(function(n,o){return"<li data-v-7457547d><span data-v-7457547d>"+(n.active?"<img"+t._ssrAttr("src",n.on)+' draggable="false" data-v-7457547d>':"<img"+t._ssrAttr("src",n.off)+' draggable="false" data-v-7457547d>')+'</span> <audio loop="loop" preload="auto" class="music" data-v-7457547d><source type="audio/mpeg"'+t._ssrAttr("src",n.music)+" data-v-7457547d></audio></li>"}))+"</ul> "),t.loading?o("Loading"):t._e()],2)}),[],!1,(function(t){var n=o(70);n.__inject__&&n.__inject__(t)}),"7457547d","ef3de750");n.default=component.exports}};