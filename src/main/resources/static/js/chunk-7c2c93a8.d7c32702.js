(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c2c93a8"],{"432e":function(t,n,a){"use strict";a("8a06")},"8a06":function(t,n,a){},"95db":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("el-card",{attrs:{shadow:"false"}},[a("markdown-render",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"scroll",attrs:{"element-loading-text":"拼命加载中",text:t.md}})],1)},o=[],d=a("f786"),c={name:"API",components:{MarkdownRender:d["a"]},data:function(){return{loading:!0,md:""}},mounted:function(){var t=this,n="https://c.jun6.net/ZFILE/ZFILE API.md";this.$http.get(n,{withCredentials:!1}).then((function(n){t.loading=!1,t.md=n.data})).catch((function(){t.$http.get("common/content",{params:{url:n}}).then((function(n){t.loading=!1,t.md=n.data.data}))}))}},i=c,r=(a("432e"),a("c701")),s=Object(r["a"])(i,e,o,!1,null,"fad21930",null);n["default"]=s.exports}}]);