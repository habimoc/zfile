(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cebbe"],{"615b":function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-card",{attrs:{shadow:"false"}},[t("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",attrs:{id:"siteForm","element-loading-text":"保存中...",model:e.form,"label-width":"auto","status-icon":!0}},[t("el-form-item",{staticClass:"box animate__animated animate__fadeInUp",attrs:{label:"页面布局"}},[t("el-radio",{attrs:{label:"full"},model:{value:e.form.layout,callback:function(a){e.$set(e.form,"layout",a)},expression:"form.layout"}},[e._v("全屏")]),t("el-radio",{attrs:{label:"center"},model:{value:e.form.layout,callback:function(a){e.$set(e.form,"layout",a)},expression:"form.layout"}},[e._v("居中")])],1),t("el-form-item",{staticClass:"box animate__animated animate__fadeInUp",attrs:{label:"列表尺寸"}},[t("el-radio",{attrs:{label:"medium"},model:{value:e.form.tableSize,callback:function(a){e.$set(e.form,"tableSize",a)},expression:"form.tableSize"}},[e._v("大")]),t("el-radio",{attrs:{label:"small"},model:{value:e.form.tableSize,callback:function(a){e.$set(e.form,"tableSize",a)},expression:"form.tableSize"}},[e._v("中")]),t("el-radio",{attrs:{label:"mini"},model:{value:e.form.tableSize,callback:function(a){e.$set(e.form,"tableSize",a)},expression:"form.tableSize"}},[e._v("小")])],1),t("el-form-item",{staticClass:"box animate__animated animate__fadeInUp",attrs:{label:"显示操作按钮"}},[t("el-switch",{model:{value:e.form.showOperator,callback:function(a){e.$set(e.form,"showOperator",a)},expression:"form.showOperator"}}),t("span",{staticClass:"zfile-word-aux"},[e._v("显示下载和复制按钮, 在移动端只显示下载")])],1),t("el-form-item",{staticClass:"box animate__animated animate__fadeInUp",attrs:{label:"显示文档区"}},[t("el-switch",{model:{value:e.form.showDocument,callback:function(a){e.$set(e.form,"showDocument",a)},expression:"form.showDocument"}}),t("span",{staticClass:"zfile-word-aux"},[e._v("在文件列表下，显示当前文件夹中 readme.md 的内容")])],1),t("el-form-item",{staticClass:"box animate__animated animate__fadeInUp",attrs:{label:"显示公告"}},[t("el-switch",{model:{value:e.form.showAnnouncement,callback:function(a){e.$set(e.form,"showAnnouncement",a)},expression:"form.showAnnouncement"}}),t("span",{staticClass:"zfile-word-aux"},[e._v("网站顶部，显示公告内容")])],1),t("el-form-item",{staticClass:"box animate__animated animate__fadeInUp",attrs:{label:"公告内容"}},[t("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入公告内容"},model:{value:e.form.announcement,callback:function(a){e.$set(e.form,"announcement",a)},expression:"form.announcement"}})],1),t("el-form-item",{staticClass:"box animate__animated animate__fadeInUp",attrs:{label:"自定义 CSS"}},[t("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入自定义 CSS 内容"},model:{value:e.form.customCss,callback:function(a){e.$set(e.form,"customCss",a)},expression:"form.customCss"}})],1),t("el-form-item",{staticClass:"box animate__animated animate__fadeInUp",attrs:{label:"自定义 JS"}},[t("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入自定义 JS 内容"},model:{value:e.form.customJs,callback:function(a){e.$set(e.form,"customJs",a)},expression:"form.customJs"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary",round:""},on:{click:function(a){return e.submitForm("form")}}},[e._v("保存设置")])],1)],1)],1)},n=[],s=t("fed1"),l=t.n(s),i={name:"ViewSetting",data:function(){return{form:{layout:"",tableSize:"",showOperator:!1,showDocument:!1,showAnnouncement:!1,announcement:"",customCss:"",customJs:""},loading:!1}},methods:{submitForm:function(e){var a=this;this.$refs[e].validate((function(e){if(!e)return!1;a.loading=!0,a.$http.post("admin/config",l.a.stringify(a.form)).then((function(e){a.loading=!1,0===e.data.code&&a.$message({message:"保存成功",type:"success"})}))}))}},mounted:function(){var e=this;this.$http.get("admin/config").then((function(a){e.form=a.data.data}))}},m=i,r=t("c701"),c=Object(r["a"])(m,o,n,!1,null,"1667d649",null);a["default"]=c.exports}}]);