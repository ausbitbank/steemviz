(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"065a":function(t,e,s){"use strict";var n=s("2732"),a=s.n(n);a.a},1:function(t,e){},2:function(t,e){},2732:function(t,e,s){},3:function(t,e){},4:function(t,e){},5:function(t,e){},6:function(t,e){},"8b24":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"flex flex-center"},[t.banner?s("q-banner",{staticClass:"bg-darkgrey text-white text-center",attrs:{dense:""},scopedSlots:t._u([{key:"avatar",fn:function(){return[s("q-icon",{attrs:{name:"warning",color:"orange"}})]},proxy:!0},{key:"action",fn:function(){return[s("q-btn",{attrs:{flat:"",color:"white",label:"Softfork v0.22.2 Info",icon:"info"},on:{click:function(e){t.info_dialog=!0}}}),s("q-btn",{attrs:{flat:"",color:"white",label:"Manage Witness Votes",icon:"check"},on:{click:function(e){t.voting_dialog=!0}}}),s("q-btn",{attrs:{flat:"",color:"white",label:"Hide",icon:"close"},on:{click:function(e){t.banner=!1}}})]},proxy:!0}],null,!1,1382944771)},[s("span",[t._v("A soft-fork "),s("a",{staticClass:"cleanlink",attrs:{href:"https://steempeak.com/steem/@softfork222/soft-fork-222"}},[t._v("v0.22.2")]),t._v(" has been enabled on the Steem blockchain in order to protect against a potential security threat.")])]):t._e(),t.banner?t._e():s("div",[s("q-btn",{attrs:{flat:"",color:"white",label:"Softfork v0.22.2 Info",icon:"info"},on:{click:function(e){t.info_dialog=!0,t.banner=!0}}}),s("q-btn",{attrs:{flat:"",color:"white",label:"Manage Witness Votes",icon:"check"},on:{click:function(e){t.voting_dialog=!0}}})],1),s("div",[s("q-card")],1),t.username.length>=3?s("div",[s("q-btn",{attrs:{flat:"",icon:"cancel",color:"negative",title:"Log out"},on:{click:function(e){t.username="",t.username_input="",t.account_state_raw=[]}}},[s("span",{staticClass:"text-white"},[t._v(" Viewing as "),s("q-avatar",{attrs:{size:"sm"}},[s("q-img",{attrs:{src:t.avatar(t.username)}})],1),t._v(t._s(t.username))],1)])],1):t._e(),t.witnesses.length>0?s("div",{staticClass:"row items-start justify-center justify-evenly content-start self-stretch col-grow"},t._l(t.witnesses.slice(0,t.show_limit),(function(e,n){return s("span",{key:e.index},[s("q-card",{staticClass:"card",attrs:{dark:"",bordered:"",flat:""}},[s("q-item",[s("q-item-section",{attrs:{avatar:""}},[s("a",{attrs:{href:t.steempeak_profile_link(e.owner),target:"_blank"}},[s("q-avatar",{attrs:{size:"50px"}},[s("q-img",{attrs:{src:t.avatar(e.owner)}})],1)],1)]),s("q-item-section",[s("q-item-label",{staticClass:"text-title text-bold"},[t._v(t._s(e.owner))]),s("q-item-label",{staticClass:"text-title"},["STM1111111111111111111111111111111114T1Anm"===e.signing_key?s("span",{staticClass:"text-bold text-grey"},[t._v("Disabled")]):"0.22.2"===e.running_version?s("span",{staticClass:"text-green text-bold"},[t._v("v"+t._s(e.running_version))]):"0.22.3"===e.running_version?s("span",{staticClass:"text-orange text-bold"},[t._v("v"+t._s(e.running_version))]):s("span",{staticClass:"text-red text-bold"},[t._v("v"+t._s(e.running_version))])]),s("q-item-label",{attrs:{caption:""}},[s("span",{staticClass:"text-subtitle"},[t._v(t._s(t.votes_to_sp(e.votes))+" SP")]),""===t.username||!t.user_votes.includes(e.owner)||"0.22.2"===e.running_version&&"STM1111111111111111111111111111111114T1Anm"!==e.signing_key?""!==t.username&&t.user_votes.includes(e.owner)?s("div",[s("q-icon",{attrs:{name:"check_circle_outline",color:"green"}}),t._v(" Voted")],1):t._e():s("div",[s("q-btn",{attrs:{dense:"",push:"",glossy:"",rounded:"",label:"Unvote",icon:"warning",color:"negative",size:"sm"},on:{click:function(s){return t.vote_witness(e.owner,!1)}}})],1)])],1),s("q-card-actions",{staticClass:"text-bold justify-around text-center q-px-md",attrs:{vertical:""}},[n<=19?s("span",{staticStyle:{color:"gold"}},[t._v("#"+t._s(n+1))]):s("span",[t._v("#"+t._s(n+1))]),s("div",[s("div",[s("q-btn",{attrs:{icon:"search",size:"sm",flat:""},on:{click:function(s){t.username=e.owner,t.username_input=e.owner,t.voting_dialog=!0,t.get_witness_votes(e.owner)}}},[s("q-tooltip",[t._v("\n                View this witnesses witness votes\n              ")])],1)],1),s("q-icon",{attrs:{name:"info",color:"info"}},[s("q-tooltip",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[s("div",[t._v("Missed "),s("span",{staticClass:"text-bold"},[t._v(t._s(e.total_missed))]),t._v(" blocks")]),s("div",[t._v("Last Block "+t._s(e.last_confirmed_block_num))]),s("div",[t._v("Created "+t._s(e.created))]),s("div",[t._v("Account Creation Fee "+t._s(e.props.account_creation_fee))]),s("div",[t._v("Maximum Block Size "+t._s(e.props.maximum_block_size))]),s("div",[t._v("SBD Interest Rate "+t._s(e.props.sbd_interest_rate))]),s("div",[t._v("Account Subsidy Budget "+t._s(e.props.account_subsidy_budget))]),s("div",[t._v("Account Subsidy Decay "+t._s(e.props.account_subsidy_decay))]),s("div",[t._v("SBD Exchange Rate "+t._s(e.sbd_exchange_rate.base)+" : "+t._s(e.sbd_exchange_rate.quote))])])],1)],1)])],1)],1)],1)})),0):t._e(),s("q-dialog",{model:{value:t.voting_dialog,callback:function(e){t.voting_dialog=e},expression:"voting_dialog"}},[s("q-card",[s("q-card-section",[s("div",{staticClass:"text-h6"},[t._v("Manage Witness Votes")])]),s("q-card-section",[t._v("\n        Enter your username so we can see your current witness votes\n        "),s("form",[s("q-input",{attrs:{"bottom-slots":"",clearable:"",label:"Username"},on:{clear:function(e){t.username_input="",t.username="",t.account_state_raw=[]}},scopedSlots:t._u([{key:"after",fn:function(){return[t.username_input.length>2?s("q-btn",{attrs:{type:"submit",dense:"",rounded:"",glossy:"",icon:"search",label:"Check Votes"},on:{click:function(e){t.username=t.username_input,t.get_witness_votes(t.username)}}}):t._e()]},proxy:!0}]),model:{value:t.username_input,callback:function(e){t.username_input=e},expression:"username_input"}})],1)]),t.user_votes&&t.username.length>=3&&""===t.user_proxy?s("q-card-section",[t.username.length>=3?s("q-avatar",{attrs:{size:"sm"}},[s("q-img",{attrs:{src:t.avatar(t.username)}})],1):t._e(),t._v(" "+t._s(t.username)+" votes for "),0===t.user_votes.length?s("span",[t._v("nobody")]):t._e(),t._l(t.user_votes,(function(e){return s("q-chip",{key:e.index,attrs:{removable:"",color:t.witness_colour(e),dense:""},on:{remove:function(s){return t.vote_witness(e,!1)}}},[s("q-avatar",{attrs:{size:"sm"}},[s("q-img",{attrs:{src:t.avatar(e)}})],1),t._v("\n          "+t._s(e)+"\n        ")],1)})),t.user_votes.length>0?s("div",{staticClass:"text-center"},[t._v("Votes Used : "+t._s(t.user_votes.length)+" out of 30")]):t._e()],2):t._e(),t.username.length>3&&t.user_votes.length<=29&&""===t.user_proxy?s("q-card-section",[s("form",[s("q-input",{attrs:{"bottom-slots":"",clearable:"",debounce:"1000",label:"Vote for a witness"},on:{clear:function(e){t.witness_to_vote=""}},scopedSlots:t._u([{key:"after",fn:function(){return[t.witness_to_vote.length>2?s("q-btn",{attrs:{type:"submit",dense:"",rounded:"",glossy:"",color:"positive",icon:"check"},on:{click:function(e){return t.vote_witness(t.witness_to_vote,!0)}}}):t._e()]},proxy:!0}],null,!1,647820844),model:{value:t.witness_to_vote,callback:function(e){t.witness_to_vote=e},expression:"witness_to_vote"}})],1),t.user_votes.includes(t.witness_to_vote)?s("div",[t._v("\n          "+t._s(t.username)+" already votes for "+t._s(t.witness_to_vote)+"\n        ")]):t._e()]):t._e(),""!==t.user_proxy?s("q-card-section",[t._v("\n        "+t._s(this.username)+" set their witness proxy to "+t._s(t.user_proxy)+"\n        "),"ausbitbank"===t.user_proxy?s("div",{staticClass:"text-bold"},[s("q-icon",{attrs:{name:"sentiment_satisfied_alt",color:"green",size:"md"}}),t._v(" Great Choice ! Thank you for your trust\n        ")],1):t._e(),s("div",[t._v("\n          If you'd like to remove your current witness proxy, click the button below.\n          "),s("q-btn",{attrs:{label:"Remove witness proxy",color:"negative",rounded:"",elevated:"",glossy:""},on:{click:function(e){return t.set_witness_proxy("")}}})],1)]):t._e(),this.username.length>=3&&"ausbitbank"!==t.user_proxy&&"ausbitbank"!==this.username?s("q-card-section",[t._v("\n        You can click below to set your witness proxy to ausbitbank, and copy my witness votes.\n        "),s("div",[s("q-btn",{attrs:{label:"Set witness proxy",color:"primary",rounded:"",elevated:"",glossy:""},on:{click:function(e){return t.set_witness_proxy("ausbitbank")}}})],1),s("div",[s("q-avatar",{attrs:{size:"sm"}},[s("q-img",{attrs:{src:t.avatar("ausbitbank")}})],1),t._v(" ausbitbank currently votes for :\n          "),t._l(t.ausbitbank_votes,(function(e){return s("q-chip",{key:e.index,attrs:{clickable:"",color:t.witness_colour(e),dense:""},on:{click:function(s){t.witness_to_vote=e}}},[s("q-avatar",{attrs:{size:"sm"}},[s("q-img",{attrs:{src:t.avatar(e)}})],1),t._v("\n            "+t._s(e)+"\n          ")],1)}))],2)]):t._e()],1)],1),s("q-dialog",{model:{value:t.info_dialog,callback:function(e){t.info_dialog=e},expression:"info_dialog"}},[s("q-card",{staticClass:"q-pa-md q-ma-md text-center"},[s("span",{staticClass:"subtitle"},[t._v("You can find more discussion about SoftFork v0.22.2 in these posts")]),s("div",[s("q-avatar",{attrs:{size:"sm"}},[s("q-img",{attrs:{src:t.avatar("softfork222")}})],1),s("a",{staticClass:"cleanlink",attrs:{href:"https://steempeak.com/steem/@softfork222/soft-fork-222"}},[t._v("Steem Consensus Witness Statement: Code Updated")])],1),s("div",[s("q-avatar",{attrs:{size:"sm"}},[s("q-img",{attrs:{src:t.avatar("pfunk")}})],1),s("a",{staticClass:"cleanlink",attrs:{href:"https://steempeak.com/steem/@pfunk/the-case-for-the-temporary-soft-fork"}},[t._v("The Case For The Temporary Soft For")])],1),s("div",[s("q-avatar",{attrs:{size:"sm"}},[s("q-img",{attrs:{src:t.avatar("emrebeyler")}})],1),s("a",{staticClass:"cleanlink",attrs:{href:"https://steempeak.com/steem/@emrebeyler/thoughts-on-the-soft-fork-v0-22-2"}},[t._v(" Thoughts on the Soft Fork (v0.22.2)")])],1),s("div",[s("q-avatar",{attrs:{size:"sm"}},[s("q-img",{attrs:{src:t.avatar("theycallmedan")}})],1),s("a",{staticClass:"cleanlink",attrs:{href:"https://steempeak.com/hive-100421/@theycallmedan/xgfngynb"}},[t._v(" My thoughts on the Soft Fork v0.22.2")])],1),s("div",[s("q-avatar",{attrs:{size:"sm"}},[s("q-img",{attrs:{src:t.avatar("aggroed")}})],1),s("a",{staticClass:"cleanlink",attrs:{href:"https://steempeak.com/witness/@aggroed/softfork-0-22-2-the-steema-carta"}},[t._v(" Softfork 0.22.2 // The Steema Carta")])],1)]),s("q-card",{staticClass:"q-pa-md q-ma-md text-center"},[s("q-card-section",[s("div",[t._v("Running "),s("span",{staticClass:"text-green text-bold"},[t._v("v0.22.2")]),t._v(" or "),s("span",{staticClass:"text-orange text-bold"},[t._v("v0.22.3")]),t._v(": "),s("span",{staticClass:"text-h6"},[t._v(t._s(t.witnessesProFork.length))])]),t._l(t.witnessesProFork.slice(0,5),(function(e){return s("div",{key:e.index},[s("q-avatar",{attrs:{size:"sm"}},[s("q-img",{attrs:{src:t.avatar(e.owner)}})],1),s("span",{staticClass:"text-bold"},[t._v(t._s(e.owner))]),t._v(" ranked "),s("span",{staticClass:"text-bold"},[t._v(t._s(t.witnesses.indexOf(e)+1))]),t._v(" with "),s("span",{staticClass:"text-bold"},[t._v(t._s(t.votes_to_sp(e.votes)))]),t._v(" SP")],1)}))],2),s("q-separator"),s("q-card-section",[s("div",[t._v("Running "),s("span",{staticClass:"text-red text-bold"},[t._v("v0.22.0")]),t._v(" or "),s("span",{staticClass:"text-red text-bold"},[t._v("v0.22.1")]),t._v(": "),s("span",{staticClass:"text-h6"},[t._v(t._s(t.witnessesAntiFork.length))])]),t._l(t.witnessesAntiFork.slice(0,5),(function(e){return s("div",{key:e.index},[s("q-avatar",{attrs:{size:"sm"}},[s("q-img",{attrs:{src:t.avatar(e.owner)}})],1),s("span",{staticClass:"text-bold"},[t._v(t._s(e.owner))]),t._v(" ranked "),s("span",{staticClass:"text-bold"},[t._v(t._s(t.witnesses.indexOf(e)+1))]),t._v(" with "),s("span",{staticClass:"text-bold"},[t._v(t._s(t.votes_to_sp(e.votes)))]),t._v(" SP")],1)}))],2),s("q-separator"),t.witnessesProFork.length>0?s("q-card-section",[t._v("\n        Ratio of "),s("span",{staticClass:"text-green"},[t._v("For")]),t._v(" : "),s("span",{staticClass:"text-red"},[t._v("Against")]),t._v(" by witnesses\n        "),s("div",{staticClass:"text-center text-h6"},[s("span",{staticClass:"text-green text-bold"},[t._v("1")]),t._v(" : "),s("span",{staticClass:"text-red text-bold"},[t._v(t._s((t.witnessesAntiFork.length/t.witnessesProFork.length).toFixed(4)))])]),t._v("\n        Ratio of "),s("span",{staticClass:"text-green"},[t._v("For")]),t._v(" : "),s("span",{staticClass:"text-red"},[t._v("Against")]),t._v(" by SP\n        "),s("div",{staticClass:"text-center text-h6"},[s("span",{staticClass:"text-green text-bold"},[t._v("1")]),t._v(" : "),s("span",{staticClass:"text-red text-bold"},[t._v(t._s((t.witnessesAntiFork[0].votes/t.witnessesProFork[0].votes).toFixed(4)))])]),s("div",[s("q-avatar",{attrs:{size:"sm"}},[s("q-img",{attrs:{src:t.avatar(t.witnessesAntiFork[0].owner)}})],1),t._v(" "+t._s(t.witnessesAntiFork[0].owner)+" needs "),s("span",{staticClass:"text-bold"},[t._v(t._s(t.votes_to_sp(t.witnessesProFork[19].votes-t.witnessesAntiFork[0].votes)))]),t._v(" SP of votes to reach rank 20")],1),s("div",[s("q-avatar",{attrs:{size:"sm"}},[s("q-img",{attrs:{src:t.avatar(t.witnessesTimFork[0].owner)}})],1),t._v(" "+t._s(t.witnessesTimFork[0].owner)+" needs "),s("span",{staticClass:"text-bold"},[t._v(t._s(t.votes_to_sp(t.witnessesProFork[19].votes-t.witnessesTimFork[0].votes)))]),t._v(" SP of votes to reach rank 20")],1)]):t._e(),s("q-separator"),this.witnessesProFork.length>0?s("q-card-section",[s("q-img",{attrs:{src:t.consensusPieQuickchartio}})],1):t._e()],1)],1),s("q-card",[t.show_more_visible?s("q-btn",{attrs:{label:"Expand view to top 300"},on:{click:function(e){t.show_limit=300,t.show_more_visible=!1}}}):t._e()],1)],1)},a=[],i=(s("a481"),s("6b54"),s("06db"),s("7514"),s("967e")),o=s.n(i),r=(s("96cf"),s("fa84")),c=s.n(r),_=(s("28a5"),s("8b66")),l=s.n(_);l.a.api.setOptions({url:"https://anyx.io"});var u={name:"Witnesses",data:function(){return{witnesses:[],results:{},advanced:!1,show_limit:100,voting_dialog:!1,info_dialog:!1,show_more_visible:!0,username:"",username_input:"",witness_to_vote:"",account_state_raw:[],banner:!0,global_properties:{},consensusPie:null}},computed:{account_state:function(){return this.account_state_raw?this.account_state_raw[0]:[]},user_votes:function(){return this.account_state?this.account_state.witness_votes:[]},user_proxy:function(){return this.account_state&&this.account_state.proxy?this.account_state.proxy:""},ausbitbank_votes:function(){return this.account_state?this.account_state_raw[1].witness_votes:[]},steemPerMvests:function(){return this.global_properties.total_vesting_shares?this.global_properties.total_vesting_fund_steem.split(" ")[0]/(this.global_properties.total_vesting_shares.split(" ")[0]/1e6):509.64516270910906},witnessesProFork:function(){if(this.witnesses.length>100){var t=this.witnesses.filter((function(t){return"0.22.2"===t.running_version||"0.22.3"===t.running_version})).filter((function(t){return"STM1111111111111111111111111111111114T1Anm"!==t.signing_key}));return t}return[]},witnessesAntiFork:function(){if(this.witnesses.length>100){var t=this.witnesses.filter((function(t){return"0.22.0"===t.running_version||"0.22.1"===t.running_version})).filter((function(t){return"STM1111111111111111111111111111111114T1Anm"!==t.signing_key}));return t}return[]},witnessesTimFork:function(){if(this.witnesses.length>100){var t=this.witnesses.filter((function(t){return"0.22.3"===t.running_version})).filter((function(t){return"STM1111111111111111111111111111111114T1Anm"!==t.signing_key}));return t}return[]},consensusPieQuickchartio:function(){return this.witnesses.length>100?"https://quickchart.io/chart?bkg=transparent&c=%7Btype%3A%27pie%27%2Cdata%3A%7Blabels%3A%5B%27For%27%2C%27Against%27%5D%2Cdatasets%3A%5B%7Bdata%3A%5B"+this.votes_to_sp_raw(this.witnessesProFork[0].votes)+"%2C"+this.votes_to_sp_raw(this.witnessesAntiFork[0].votes)+"%5D%2CbackgroundColor%3A%5B%27%234caf50%27%2C%27%23f44336%27%5D%7D%5D%7D%7D":null}},methods:{get_data:function(){var t=this;return c()(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.a.api.getWitnessesByVoteAsync("",300);case 2:t.witnesses=e.sent;case 3:case"end":return e.stop()}}),e)})))()},get_witness_votes:function(t){var e=this;return c()(o.a.mark((function t(){return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.a.api.getAccountsAsync([e.username,"ausbitbank"]);case 2:e.account_state_raw=t.sent;case 3:case"end":return t.stop()}}),t)})))()},vote_witness:function(t,e){window.steem_keychain.requestWitnessVote(this.username,t,e,function(t){this.get_witness_votes(this.username)}.bind(this))},set_witness_proxy:function(t){window.steem_keychain.requestBroadcast(this.username,[["account_witness_proxy",{account:this.username,proxy:t}]],"active",function(t){this.get_witness_votes(this.username)}.bind(this))},avatar:function(t){return"https://steemitimages.com/u/"+t+"/avatar"},steempeak_profile_link:function(t){return"https://steempeak.com/@"+t},votes_to_sp:function(t){return this.numberWithCommas((t*this.steemPerMvests/1e12).toFixed(0))},votes_to_sp_raw:function(t){return(t*this.steemPerMvests/1e12).toFixed(0)},get_global_properties:function(){var t=this;return c()(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:l.a.api.getDynamicGlobalPropertiesAsync().then(function(t,e){e&&console.log(e),this.global_properties=t}.bind(t));case 1:case"end":return e.stop()}}),e)})))()},witness_colour:function(t){return this.witnesses.length>0?"STM1111111111111111111111111111111114T1Anm"===this.witnesses.find((function(e){return e.owner===t})).signing_key?"grey":"0.22.3"===this.witnesses.find((function(e){return e.owner===t})).running_version?"orange":"0.22.2"===this.witnesses.find((function(e){return e.owner===t})).running_version?"green":"red":"primary"},numberWithCommas:function(t){var e=t.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e.join(".")}},mounted:function(){this.get_global_properties(),this.get_data()}},v=u,d=(s("065a"),s("2877")),f=s("eebe"),p=s.n(f),m=s("9989"),h=s("54e1"),g=s("0016"),w=s("9c40"),b=s("f09f"),k=s("cb32"),x=s("068f"),q=s("66e5"),y=s("4074"),C=s("0170"),S=s("4b7e"),F=s("05c0"),A=s("24e8"),P=s("a370"),T=s("27f9"),z=s("b0476"),Q=s("eb85"),B=Object(d["a"])(v,n,a,!1,null,"45d971ca",null);e["default"]=B.exports;p()(B,"components",{QPage:m["a"],QBanner:h["a"],QIcon:g["a"],QBtn:w["a"],QCard:b["a"],QAvatar:k["a"],QImg:x["a"],QItem:q["a"],QItemSection:y["a"],QItemLabel:C["a"],QCardActions:S["a"],QTooltip:F["a"],QDialog:A["a"],QCardSection:P["a"],QInput:T["a"],QChip:z["a"],QSeparator:Q["a"]})}}]);