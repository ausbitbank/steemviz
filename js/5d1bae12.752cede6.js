(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["5d1bae12"],{"1a2e":function(t,n,a){"use strict";var e=a("e839"),c=a.n(e);c.a},"6b31":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("q-page",{attrs:{padding:""}},[a("h3",[t._v("Transaction "+t._s(this.$route.params.txid))])])},c=[];e._withStripped=!0;var o=a("bc3a"),i=a.n(o),s={name:"Transaction",data:function(){return{tx:null}},mounted:function(){var t=this;i.a.post("https://rpc.steemviz.com",'{"jsonrpc":"2.0", "method":"condenser_api.get_transaction", "params":["c2c039dc19e50cc30ba0838e35eb24c45fa89598"], "id":1}').then(function(n){t.tx=n.data,console.log(t.tx)})}},r=s,u=(a("1a2e"),a("2877")),p=Object(u["a"])(r,e,c,!1,null,null,null);p.options.__file="Transaction.vue";n["default"]=p.exports},e839:function(t,n,a){}}]);