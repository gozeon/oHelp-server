(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2389e3"],{ffc0:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",[a("el-row",{attrs:{type:"flex",justify:"end"}},[a("router-link",{attrs:{to:{path:"/order/order-create"},tag:"span"}},[a("el-button",{staticStyle:{width:"90px"},attrs:{icon:"el-icon-plus",type:"primary",size:"small"}},[t._v("新建")])],1)],1),a("el-form",{ref:"searchFormRef",attrs:{model:t.searchForm,rules:{},size:"mini",inline:""}},[a("el-form-item",{attrs:{label:"ID",prop:"id"}},[a("el-input",{attrs:{placeholder:"ID"},model:{value:t.searchForm.id,callback:function(e){t.$set(t.searchForm,"id",e)},expression:"searchForm.id"}})],1),a("el-form-item",{attrs:{label:"标签",prop:"tag"}},[a("el-input",{attrs:{placeholder:"标签"},model:{value:t.searchForm.tag,callback:function(e){t.$set(t.searchForm,"tag",e)},expression:"searchForm.tag"}})],1),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-select",{attrs:{placeholder:"状态"},model:{value:t.searchForm.status,callback:function(e){t.$set(t.searchForm,"status",e)},expression:"searchForm.status"}},t._l(t.statusOptions,(function(t,e){return a("el-option",{key:e,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.handerSearch}},[t._v("查询")]),a("el-button",{on:{click:t.handerReset}},[t._v("重置")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"tableEl",staticStyle:{width:"100%"},attrs:{data:t.tableData,height:"634px","header-cell-style":{background:"var(--N4)"},border:""},on:{"header-dragend":function(e){return t.$refs.tableEl.doLayout()}}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"title",label:"标题"}}),a("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:e.row.status?"success":"danger",effect:"dark"}},[t._v(t._s(e.row.status?"开启":"关闭"))])]}}])}),a("el-table-column",{attrs:{prop:"tags",label:"标签"}}),a("el-table-column",{attrs:{prop:"create_user",label:"创建人"}}),a("el-table-column",{attrs:{prop:"created_at",label:"创建时间",formatter:t.timeFormater}}),a("el-table-column",{attrs:{prop:"updated_at",label:"修改时间",formatter:t.timeFormater}}),a("el-table-column",{attrs:{prop:"id",fixed:"right",label:"操作",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{staticStyle:{"margin-right":"10px"},attrs:{to:{path:"/order/order-info/"+e.row.id},tag:"span"}},[a("el-button",{attrs:{type:"text",size:"small"}},[t._v("详情")])],1),e.row.status?a("el-popconfirm",{attrs:{title:"确定关闭该项?"},on:{confirm:function(a){return t.updateStatus({id:e.row.id,status:!1,successMessage:"关闭成功",source:e.row})}}},[a("el-button",{staticStyle:{color:"#f56c6c"},attrs:{slot:"reference",type:"text",size:"small"},slot:"reference"},[t._v("关闭")])],1):a("el-popconfirm",{attrs:{title:"确定重新开启该项?"},on:{confirm:function(a){return t.updateStatus({id:e.row.id,status:!0,successMessage:"开启成功",source:e.row})}}},[a("el-button",{attrs:{slot:"reference",type:"text",size:"small"},slot:"reference"},[t._v("开启")])],1)]}}])})],1),a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[10,20,50,100],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next",total:t.pageTotal},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},s=[],l=a("5530"),o=a("b166"),n=a("e3ee"),i={data:function(){return{statusOptions:[{label:"开启",value:1},{label:"关闭",value:0}],searchForm:{},loading:!1,pageTotal:0,pageSize:10,currentPage:1,tableData:[]}},computed:{},mounted:function(){this.loadData()},methods:{timeFormater:function(t,e,a,r){return a?Object(o["a"])(Object(n["a"])(a),"yyyy-MM-dd HH:mm:ss"):a},handerSearch:function(){this.currentPage=1,this.loadData()},handerReset:function(){this.$refs.searchFormRef.resetFields(),this.currentPage=1,this.loadData()},handleSizeChange:function(t){this.pageSize=t,this.loadData()},handleCurrentChange:function(t){this.currentPage=t,this.loadData()},updateStatus:function(t){var e=this,a=t.id,r=t.status,s=t.successMessage,o=t.source;this.axios.put("/order/status/".concat(a),Object(l["a"])(Object(l["a"])({},o),{},{status:r})).then((function(t){var a=t.data,r=a.status,l=a.msg;0!==r?e.$message.error(l||"系统错误，请重试"):(e.$message.success(s||"操作成功"),e.loadData())}))},loadData:function(){var t=this;this.loading=!0,this.axios.get("/order/",{params:Object(l["a"])({page:this.currentPage,size:this.pageSize},this.searchForm)}).then((function(e){var a=e.data,r=(a.status,a.msg,a.data);t.loading=!1,t.pageTotal=r.total,t.tableData=r.list}))}}},c=i,u=a("2877"),d=Object(u["a"])(c,r,s,!1,null,"bf94f16e",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d2389e3.47c66bc4.js.map