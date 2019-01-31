var route=function(){"use strict";var e=function(u){u=u||{};var o={},l=Array.prototype.slice;Object.defineProperties(u,{on:{value:function(e,t){if(typeof t=="function"){(o[e]=o[e]||[]).push(t)}return u},enumerable:false,writable:false,configurable:false},off:{value:function(e,t){if(e=="*"&&!t){o={}}else{if(t){var n=o[e];for(var r=0,i;i=n&&n[r];++r){if(i==t){n.splice(r--,1)}}}else{delete o[e]}}return u},enumerable:false,writable:false,configurable:false},one:{value:function(e,t){function n(){u.off(e,n);t.apply(u,arguments)}return u.on(e,n)},enumerable:false,writable:false,configurable:false},trigger:{value:function(e){var t=arguments;var n=arguments.length-1,r=new Array(n),i,a,f;for(f=0;f<n;f++){r[f]=t[f+1]}i=l.call(o[e]||[],0);for(f=0;a=i[f];++f){a.apply(u,r)}if(o["*"]&&e!="*"){u.trigger.apply(u,["*",e].concat(r))}return u},enumerable:false,writable:false,configurable:false}});return u};var r=/^.+?\/\/+[^/]+/,t="EventListener",n="remove"+t,i="add"+t,a="hasAttribute",f="popstate",u="hashchange",o="trigger",l=3,s=typeof window!="undefined"&&window,c=typeof document!="undefined"&&document,h=s&&history,p=s&&(h.location||s.location),d=P.prototype,v=c&&c.ontouchstart?"touchstart":"click",m=e();var b=false,g=false,y,w,$,_,A=[],S=0;function x(e){return e.split(/[/?#]/)}function K(e,t){var n=t.replace(/\?/g,"\\?").replace(/\*/g,"([^/?#]+?)").replace(/\.\./,".*");var r=new RegExp("^"+n+"$");var i=e.match(r);if(i){return i.slice(1)}}function N(e,t){var n;return function(){clearTimeout(n);n=setTimeout(e,t)}}function O(e){y=N(q,1);s[i](f,y);s[i](u,y);c[i](v,B);if(e){q(true)}}function P(){this.$=[];e(this);m.on("stop",this.s.bind(this));m.on("emit",this.e.bind(this))}function T(e){return e.replace(/^\/|\/$/,"")}function E(e){return typeof e=="string"}function j(e){return(e||p.href).replace(r,"")}function k(e){var t=L._.base;return t[0]==="#"?(e||p.href||"").split(t)[1]||"":(p?j(e):e||"").replace(t,"")}function q(t){var e=S===0;if(l<=S){return}S++;A.push(function(){var e=k();if(t||e!==w){m[o]("emit",e);w=e}});if(e){var n;while(n=A.shift()){n()}S=0}}function B(e){if(e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented){return}var t=e.target;while(t&&t.nodeName!=="A"){t=t.parentNode}if(!t||t.nodeName!=="A"||t[a]("download")||!t[a]("href")||t.target&&t.target!=="_self"||t.href.indexOf(p.href.match(r)[0])===-1){return}var n=L._.base;if(t.href!==p.href&&(t.href.split("#")[0]===p.href.split("#")[0]||n[0]!=="#"&&j(t.href).indexOf(n)!==0||n[0]==="#"&&t.href.split(n)[0]!==p.href.split(n)[0]||!D(k(t.href),t.title||c.title))){return}e.preventDefault()}function D(e,t,n){if(!h){return m[o]("emit",k(e))}e=L._.base+T(e);t=t||c.title;n?h.replaceState(null,t,e):h.pushState(null,t,e);c.title=t;g=false;q();return g}d.m=function(e,t,n){if(E(e)&&(!t||E(t))){D(e,t,n||false)}else if(t){this.r(e,t)}else{this.r("@",e)}};d.s=function(){this.off("*");this.$=[]};d.e=function(n){this.$.concat("@").some(function(e){var t=(e==="@"?$:_)(T(n),T(e));if(typeof t!="undefined"){this[o].apply(null,[e].concat(t));return g=true}},this)};d.r=function(e,t){if(e!=="@"){e="/"+T(e);this.$.push(e)}this.on(e,t)};var F=new P;var L=F.m.bind(F);L._={base:null,getPathFromBase:k};L.create=function(){var e=new P;var t=e.m.bind(e);t.stop=e.s.bind(e);return t};L.base=function(e){L._.base=e||"#";w=k()};L.exec=function(){q(true)};L.parser=function(e,t){if(!e&&!t){$=x;_=K}if(e){$=e}if(t){_=t}};L.query=function(){var r={};var e=p.href||w;e.replace(/[?&](.+?)=([^&]*)/g,function(e,t,n){r[t]=n});return r};L.stop=function(){if(b){if(s){s[n](f,y);s[n](u,y);c[n](v,B)}m[o]("stop");b=false}};L.start=function(e){if(!b){if(s){if(document.readyState==="interactive"||document.readyState==="complete"){O(e)}else{document.onreadystatechange=function(){if(document.readyState==="interactive"){setTimeout(function(){O(e)},1)}}}}b=true}};L.base();L.parser();return L}();
route.base('#!');
route('@*',function(account) {profile_page(account);})
route('@*/followers',function(account) {profile_page_followers(account);})
route('@*/following',function(account) {profile_page_following(account);})
route('@*/*',function(account, permlink) {post_page(account,permlink);})
route('about',function() {about_page();})
route('settings',function() {settings_page();})
route('recent-posts',function() {recent_posts_page();})
route('search-accounts',function() {search_accounts_page();})
route('tag/*',function(tag) {search_tags_page(tag);})
route('tag/*/@*',function(tag,account) {search_tags_page(tag,account);})
route('state', function(){state_page();})
route(function() {front_page();})

var nicenumber = function (number) {var temp = parseInt(number,10);return temp.toFixed(0); };

var md = new Remarkable({
    html: true,
    xhtmlOut: true,
    linkify: true,
    typographer: false
});
var clean = function (str) {return(md.render(filterXSS(str)))};

// Config options
var apiserver = "https://hivemind.steemviz.com";
var rpcserver = "https://rpc.steemviz.com";
var vests_to_sp = 0.0004980499016859; // Rate on 20-01-2019 , saving extra api call

function profile_page(account) {
    tower_account_lookup(account);
}

function profile_page_followers(account){
    app.innerHTML='<div id="results" class="container"></div>';
    get_followers(account);
}

function profile_page_following(account){
    app.innerHTML='<div id="results" class="container"></div>';
    get_following(account);
}

function post_page(account,permlink){
    app.innerHTML = 'loading post : @'+account+'/'+permlink;
    tower_post_lookup(account,permlink);
}

function about_page(){
    app.innerHTML = '<h1>About Steemviz</h1>\n';
}

function front_page(){    
    app.innerHTML = `<h1>Front Page</h1>\n
    <ul>
    <li><a href="#!/recent-posts">Recent Posts from all users</a></li>
    <li><a href="#!/search-accounts">Search Accounts</a></li>
    <li><a href="#!/@ausbitbank">@ausbitbank</a></li>
    <li><a href="#!/@ausbitbank/following">@ausbitbank following</a></li>
    <li><a href="#!/@ausbitbank/followers">@ausbitbank followers</a></li>
    <li><a href="#!/@jesta/the-recent-controversy-between-steemit-inc-and-the-community-the-premine-control-and-where-it-leads-this-blockchain">@jesta/the-recent-controversy-between-steemit-inc-and-the-community-the-premine-control-and-where-it-leads-this-blockchain</a></li>
    <li><a href="#!/@thedarkoverlord/9-11-papers-megaleak-layer-2-checkpoint-08-cyber-cash-for-cyber-cache">@thedarkoverlord/9-11-papers-megaleak-layer-2-checkpoint-08-cyber-cash-for-cyber-cache</a></li>
    <li><a href="#" onClick="check_steem_keychain();">Check steem keychain</a></li>
    <li><a href="#" onClick="handshake_steem_keychain();">Handshake steem keychain</a></li>
    </ul>`;
    //check_steem_keychain();
    //get_state();
}

function state_page(){
    get_state();
}

function settings_page(){
    app.innerHTML = '<h1>Settings</h1>\n';
}

function recent_posts_page(){
    app.innerHTML = '<h1>Recent Posts</h1>\n<div id="results" class="container"></div>';
    tower_account_recent_posts_search('','');
}

function search_accounts_page(){
    app.innerHTML = `<h1>Search Accounts</h1>\n
    <div class="center"><form onsubmit="return false;" id="searchform">Location contains: <input type="text" id="location" name="Location" value=""> Name contains: <input type="text" id="name" name="name" value=""> About (exact): <input type="text" id="about" name="about" value=""> <br />Sort By <select id="sortby"><option value="created_at">created_at</option><option value="proxy_weight">proxy_weight</option><option value="vote_weight">vote_weight</option><option value="active_at">active_at</option><option value="followers">Followers</option><option value="following">Following</option><option value="reputation">Reputation</option><option value="post_count">Posts</option></select><select id="direction"><option value="">Ascending</option><option value="-" selected="selected">Descending</option><input type="button" onClick="search_accounts_form_submit();" value="Search"><input type="button" onClick="document.getElementById('results').innerHTML='';document.getElementById('search-status').innerHTML='';" class="clearresults" value="Clear"></form></div><br /><hr><div id="search-status" class="center"></div><br ><div id="results" class="container"></div>    `;
}

function search_tags_page(tag,account){
    app.innerHTML = `Searching Tag ${tag} , Account ${account} :<br /><div class="container"><div id="results"></div></div>`;
    tower_search_posts(tag,account);
}

function tower_account_search(about,name,location,direction,sortby){
    const apiurl = `/api/v1/accounts/?about=${about}&name__contains=${name}&location__contains=${location}&ordering=${direction}${sortby}`;
    get_tower_data(apiurl,'account-search-results');
}

function tower_search_posts(tag,account) {
    const apiurl = `/api/v1/posts/?category=${tag}&author=${account}`;
    get_tower_data(apiurl,'post-search-results');
}

function tower_account_recent_posts_search(author,nextapiurl){
    if (nextapiurl!==''){get_tower_data(nextapiurl,'recent_posts');}
    if (author!='' && nextapiurl==''){get_tower_data(`/api/v1/post_cache/?limit=50&author=${author}`,'recent_posts');}
    if (author=='' && nextapiurl==''){get_tower_data(`/api/v1/post_cache/?limit=50`,'recent_posts');}
}

function render_comment(comment,responsetype,responseto) {
    if (responsetype=='steemd') {
        var rendered_comment = `<div class="card comment"><div class="comment_meta"><i class="fas fa-user"></i> <a href="#!/@${comment.author}">${comment.author}</a> replied to <i class="far fa-comment-dots"></i> <a href="#!/@${comment.author}/${comment.permlink}">${comment.permlink.substring(0,30)}</a><br /><i class="far fa-clock"></i> ${timeSince(new Date(comment.created))} <i class="fas fa-thumbs-up"></i> ${comment.net_votes} <i class="far fa-comments"></i> <a href="#!/@${comment.author}/${comment.permlink}">${comment.children}</a></div><div class="comment_body">${clean(comment.body)}</div></div>`;
        document.getElementById('comments').innerHTML += rendered_comment;
    } else {
        if (comment.body!=comment.preview) {viewfullcomment = `<p><a href="#!/@${comment.author}/${comment.permlink}"><i class="fas fa-comment"></i> View full comment</a></p>`} else {viewfullcomment ='';}
        var rendered_comment = `<div class="card comment"><div class="comment_meta"><i class="fas fa-user"></i> <a href="#!/@${comment.author}">${comment.author}</a> replied to <i class="far fa-comment-dots"></i> <a href="#!/@${comment.author}/${comment.permlink}">${comment.permlink.substring(0,30)}</a><br /><i class="far fa-clock"></i> ${timeSince(new Date(comment.created_at))} <i class="fas fa-thumbs-up"></i> ${comment.up_votes} <i class="fas fa-thumbs-down"></i> ${comment.total_votes-comment.up_votes} <i class="far fa-comments"></i> <a href="#!/@${comment.author}/${comment.permlink}">${comment.children}</a></div><div class="comment_body">${clean(comment.preview)} ${viewfullcomment}</div></div>`;
        document.getElementById('results').innerHTML += rendered_comment;
    }
    
    
}

function render_post_preview(post){
    //console.log(post);
    if (post.body!=post.preview) {viewfullpost = `<p><a href="#!/@${post.author}/${post.permlink}"><i class="fas fa-comment"></i> View full post</a></p>`} else {viewfullpost ='';}
    var rendered_post = `<div class="card"><div class="post_meta"><i class="fas fa-user"></i> <a href="#!/@${post.author}">${post.author}</a> posted <i class="fas fa-link"></i> <a href="#!/@${post.author}/${post.permlink}">${post.title}</a> <br /><i class="far fa-clock"></i> ${timeSince(new Date(post.created_at))} <i class="fas fa-thumbs-up"></i> ${post.up_votes} <i class="fas fa-thumbs-down"></i> ${post.total_votes-post.up_votes} <i class="far fa-comments"></i> <a href="#!/@${post.author}/${post.permlink}">${post.children}</a></div><div class="post_preview_body">${clean(post.preview)} ${viewfullpost}</div></div>`;
    document.getElementById('results').innerHTML += rendered_post;
}

function render_account_search_results(data){
    //console.log(data);
    document.getElementById('search-status').innerHTML = `Found ${data.count} results`;
    data.results.forEach(user => { prepare_profile_data(user,'multi'); });
    
    if (data.next){document.getElementById('results').innerHTML+=`<div class="card" id="loadmore"><h2 onClick="get_tower_data('${data.next}','account-search-results');"> <i class="fa fa-arrow-circle-down fa-lg""></i> Load more posts : ${data.count} total</h2></div>`;}
}

function render_post_search_results(data){
    document.getElementById('results').innerHTML+= `Found ${data.count} results <br />`;
    data.results.forEach(post => {
        //console.log(post);
        if (post.depth)
        document.getElementById('results').innerHTML+=`<p>${post.author} posted <a href="#!/@${post.author}/${post.permlink}">${post.permlink}</a> in category ${post.category} on ${post.created_at}</p> `;

    })
    if (data.next){document.getElementById('results').innerHTML+=`<div class="card" id="loadmore"><h2 onClick="get_tower_data('${data.next}','post-search-results');"> <i class="fa fa-arrow-circle-down fa-lg""></i> Load more posts : ${data.count} total</h2></div>`;}
}



function render_account_card(user){
    var profile_text = '';
    for (var key in user) {
      var value = user[key];
      if (key == 'website') {profile_text+=`<b>${key}:</b> <a href="${value}">${value}</a><br />`; continue;}
      if (key == 'name') {continue;}
      if (key == 'raw_json') {continue;}
      if (key == 'following') {profile_text+=`<b>${key}</b>: <a href="#!/@${user.name}/following">${value}</a><br />`;continue;}
      if (key == 'followers') {profile_text+=`<b>${key}</b>: <a href="#!/@${user.name}/followers">${value}</a><br />`;continue;}
      if (key == 'apps' && value.length==0) {continue;}
      profile_text+=`<b>${key}:</b> ${value}<br />`;
    }
    const card = `
    <div class="card">
    <h1><a href="#!/@${user.name}">@${user.name}</a></h1>
    <img src="https://steemitimages.com/u/${user.name}/avatar">
    <p>${profile_text}</p>
    </div>`;
    
    document.getElementById('results').innerHTML+=card;
}

function render_followers(followers){
    var results='';
    document.getElementById('results').innerHTML = `<h1>${followers.length} Followers :</h1><br />`;
    for (var i=0, len=followers.length;i<len;i++){
        results+=`<div class="card profile_badge"><a href="#!/@${followers[i]}"><h1>${followers[i]}</h1><img class="lozad" data-src="https://steemitimages.com/u/${followers[i]}/avatar" class="avatar"></a></div>`;
    }
    document.getElementById('results').innerHTML+=results;
    observer.observe();
}

function render_following(follows){
    var results='';
    document.getElementById('results').innerHTML = `<h1>${follows.length} Follows :</h1><br />`;
    console.log('test');
    for (var i=0, len=follows.length;i<len;i++){
        results+=`<div class="card profile_badge"><a href="#!/@${follows[i]}"><h1>${follows[i]}</h1><img class="lozad" data-src="https://steemitimages.com/u/${follows[i]}/avatar" class="avatar"></a></div>`;
    }
    document.getElementById('results').innerHTML+=results;
    observer.observe();
}

function tower_post_lookup(author,permlink){
    const apiurl = `/api/v1/post_cache/?author=${author}&permlink=${permlink}`;
    get_tower_data(apiurl,'singlepost');
}

function tower_post_lookup_id(id){
    const apiurl = `/api/v1/post_cache/?id=${id}`;
    get_tower_data(apiurl,'singlepost');
}


function tower_get_nested_replies(permlink){

}

function tower_account_lookup(account){
    get_tower_data(`/api/v1/accounts/${account}/`,'account');
}

function account_profile(user){
    profile_text=`<div class="profile_badge center"><a href="#!/@${user.name}"><img src="https://steemitimages.com/u/${user.name}/avatar" class="avatar grow"><br /><h2>@${user.name}</h2></a></div>`;
    for (var key in user) {
        var value = user[key];
        if (key == 'name') {continue;}
        if (key == 'website') {profile_text+=`<b>${key}:</b> <a href="${value}">${value}</a><br />`; continue;}
        if (key == 'apps' && value.length==0) {continue;}
        if (key == 'following') {profile_text+=`<b>${key}</b>: <a href="#!/@${user.name}/following">${value}</a><br />`;continue;}
        if (key == 'followers') {profile_text+=`<b>${key}</b>: <a href="#!/@${user.name}/followers">${value}</a><br />`;continue;}
        profile_text+=`<b>${key}:</b> ${value}<br />`;
    }
    app.innerHTML='<div class="center profile_badge">'+profile_text+'</div>';
    app.innerHTML+='<h1>Recent activity</h1>\n<div id="results" class="container"></div>'
    tower_account_recent_posts_search(user.name,'');
}

function recent_posts(data){
    for (key in data.results){
        if (data.results[key].post.parent!==null){
            render_comment(data.results[key]);
        } else {render_post_preview(data.results[key]);
        }
    }
    if (data.next){
        app.innerHTML+=`<div class="card" id="loadmore"><h2 onClick="tower_account_recent_posts_search('','${data.next}');"> <i class="fa fa-arrow-circle-down fa-lg""></i> Load more posts : ${data.count} total</h2></div>`;
    }
}

function view_single_post(data){
    if (data.json) {
        json = JSON.parse(data.json);
        if (json.tags) {
            data.tags='';
            for (tag in json.tags){
                data.tags += `<span class="tag is-info"><a href="#!/tag/${json.tags[tag]}/@${data.author}">${json.tags[tag]}</a></span> `;
            }
        }
    }
    if (data.raw_json){
        json = JSON.parse(data.raw_json);
        var link_root_article='';
        if (json.root_author && json.root_permlink && json.root_title && json.root_permlink!=data.permlink) {
            link_root_article = `<b>View the root post:</b> <i class="fas fa-link"></i> <a href="#!/@${json.root_author}/${json.root_permlink}">${json.root_title}</a><br />`;
        }
    }
    //console.log(data);
    app.innerHTML=`
    ${link_root_article}
    <h1>${clean(data.title)}</h1>
    <div class="post_content">${clean(data.body)}</div>
    <hr>
    <div class="post_footer">
    <p><i class="fas fa-user"></i> Posted by <a href="#!/@${data.author}">${data.author}</a> <i class="fas fa-star"></i> ${data.author_rep} <i class="far fa-clock"></i> ${timeSince(new Date(data.created_at))} <i class="fas fa-thumbs-up"></i> ${data.up_votes} <i class="fas fa-thumbs-down"></i> ${data.total_votes-data.up_votes} <i class="far fa-comments"></i> ${data.children} <i class="fas fa-tags"></i> ${data.tags} </p>
    
    </div>
    <div id="comments" class="container"></div>
    `;
    get_steemd_content_replies(data.author,data.permlink);
}

function prepare_profile_data(data,returntype){
    var profile = {};
    if (data.display_name) { profile.display_name = data.display_name; }
    if (data.about) { profile.about = data.about; }
    if (data.location){ profile.location = data.location; }
    profile.created_at = data.created_at;
    profile.active_at = data.active_at;
    profile.name = data.name;
    profile.reputation = data.reputation;
    profile.followers = data.followers;
    profile.following = data.following;
    profile.post_count = data.post_count;
    profile.proxy_weight = "~ "+(nicenumber(vests_to_sp*data.proxy_weight))+" SP";
    profile.vote_weight = "~ "+(nicenumber(vests_to_sp*data.vote_weight))+" SP";
    if (data.website) { profile.website = data.website; }
    if (data.raw_json) {
      var rawjson = JSON.parse(data.raw_json);
      if (rawjson.witness_votes.length>0) { 
        profile.witness_votes=[];
        for (var witness in rawjson.witness_votes){profile.witness_votes.push(`<a href="#!/@${rawjson.witness_votes[witness]}">${rawjson.witness_votes[witness]}</a>`);}
        profile.witness_votes = profile.witness_votes.join(', ');
      }
      if (rawjson.recovery_account) { profile.recovery_account = `<a href="#!/@${rawjson.recovery_account}">${rawjson.recovery_account}</a>`; }
      if (rawjson.sbd_balance) { profile.sbd_balance = rawjson.sbd_balance; }
      if (rawjson.balance) { profile.steem_balance = rawjson.balance; }
      if (rawjson.posting.account_auths){
        var authorised_apps = [];
        for (var key in rawjson.posting.account_auths){authorised_apps.push(rawjson.posting.account_auths[key][0]);}
        for (var key2 in rawjson.active.account_auths){authorised_apps.push(rawjson.posting.account_auths[key2][0]);}
      }
      if (authorised_apps) {
        profile.apps=[];
        for (var appkey in authorised_apps){
          switch(authorised_apps[appkey]){
            case 'steemauto': profile.apps.push(`<a href="https://steemauto.com">steemauto</a>`);break;
            case 'steempeak.app': profile.apps.push(`<a href="https://steempeak.com/@${profile.name}">steempeak</a>`);break;
            case 'busy.app' : profile.apps.push(`<a href="https://busy.org/@${profile.name}">busy</a>`);break;
            case 'peakmonsters.app' : profile.apps.push(`<a href="https://monsters.steempeak.com/@${profile.name}">peakmonsters</a>`);break;
            case 'dtube.app' : profile.apps.push(`<a href="https://d.tube/@${profile.name}">dtube</a>`);break;
            case 'partiko-steemcon' : profile.apps.push(`<a href="https://partiko.app/@${profile.name}">partiko</a>`);break;
            case 'steemhunt.com' : profile.apps.push(`<a href="https://steemhunt.com/@${profile.name}">steemhunt</a>`);break;
            case 'esteemapp' : profile.apps.push(`<a href="https://esteem.app">esteem</a>`);break;
            case 'dclick.app' : profile.apps.push(`<a href="https://dclick.io">dclick</a>`);break;
            case 'steemgg.app' : profile.apps.push(`<a href="https://steemgg.com">steemgg</a>`);break;
            case 'steem-plus-app' : profile.apps.push(`<a href="https://steemplus.app/">steemplus</a>`);break;
            case 'utopian.app' : profile.apps.push(`<a href="https://utopian.io/">utopian</a>`);break;
            case 'fundition.app' : profile.apps.push(`<a href="https://fundition.io/#!/@${profile.name}">fundition</a>`);break;
            case 'dpoll.xyz' : profile.apps.push(`<a href="https://dpoll.xyz/user/@${profile.name}">dpoll.xyz</a>`);break;
            case 'actifit.app' : profile.apps.push(`<a href="http://actifit.io/">actifit</a>`);break;
            default : profile.apps.push(`<a href="https://steemd.com/@${authorised_apps[appkey]}">${authorised_apps[appkey]}</a>`);break;
          }
        }
        if (profile.apps.length>0) {profile.apps = profile.apps.join(' , ');}
      }
      
    }
    if (returntype == 'multi') {
        render_account_card(profile);
    } else {
        account_profile(profile);
    }
}

function get_tower_data(apiurl,return_to) {
    var request = new XMLHttpRequest();
    if (apiurl.startsWith('https')==true) {var fullapiurl = apiurl;document.getElementById('loadmore').remove();} else {var fullapiurl = apiserver+apiurl;}
    spinner('Loading '+fullapiurl);    
    request.open('GET', fullapiurl, true);
    request.onload = function () { 
      var data = JSON.parse(this.response);
      if (request.status >= 200 && request.status < 400) {
        spinner();
        switch(return_to){
            case 'account': prepare_profile_data(data,'single');break;
            case 'singlepost': view_single_post(data.results[0]);break;
            case 'recent_posts': recent_posts(data);break;
            case 'account-search-results': render_account_search_results(data);break;
            case 'post-search-results': render_post_search_results(data);break;
            case 'followers': render_followers(data['followers']);break;
            case 'following': render_following(data['following']);break;
            case 'muting': render_muting(data);break;
            case 'muted': render_muted(data);break;
            case 'state': get_state(data);break;
            default: console.log(data);
        }

      } else {
        spinner();
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Tower Api server isn't responding !`;
        app.appendChild(errorMessage);
        return false;
      }
    }
    request.send();
  }

function search_accounts_form_submit(){
    tower_account_search(document.getElementById('about').value,document.getElementById('name').value,document.getElementById('location').value,document.getElementById('direction').value,document.getElementById('sortby').value);
}

function get_steemd_content_replies(author,permlink,return_to) {
    var request = new XMLHttpRequest();
    spinner();
    request.open('POST',rpcserver,true);
    request.onload = function() {
        spinner();
        var data = JSON.parse(this.responseText);
        data = data.result;
        for (comment in data) {
            render_comment(data[comment],'steemd',data[comment].permlink);
        }
    }
    request.send(`{"jsonrpc":"2.0", "method":"condenser_api.get_content_replies", "params":["${author}", "${permlink}"], "id":1}`);
}

function spinner(message){
    if (document.getElementById('spinner')){
        document.getElementById('spinner').remove();       
    } else {
        app.innerHTML+=`<div id="spinner"><i class="fas fa-refresh fa-spin fa-9x fa-w-16 center"> ${message}</i></div>`;
    }
}

function get_followers(account) {
    get_tower_data(`/api/v1/accounts/${account}/followers/`,'followers');
}

function get_following(account) {
    get_tower_data(`/api/v1/accounts/${account}/following/`,'following');  
}

function get_muters(account) {
    get_tower_data(`/api/v1/accounts/${account}/muters/`,'muters'); 
}

function get_muting(account) {
    get_tower_data(`/api/v1/accounts/${account}/muting/`,'muting');
}



function get_state(state){
    if (state){
        console.log(state);
        steemviz['state'] = state;
        console.log(window.steemviz['state']);
    } else {
        get_tower_data('/api/v1/state/','state');
    }
}



function timeSince(timeStamp) {
    var now = new Date(),
        secondsPast = (now.getTime() - timeStamp.getTime() ) / 1000;
    if(secondsPast < 60){        return parseInt(secondsPast) + 's';    }
    if(secondsPast < 3600){        return parseInt(secondsPast/60) + 'm';    }
    if(secondsPast <= 86400){        return parseInt(secondsPast/3600) + 'h';    }
    if(secondsPast > 86400){
          day = timeStamp.getDate();
          month = timeStamp.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ","");
          year = timeStamp.getFullYear() == now.getFullYear() ? "" :  " "+timeStamp.getFullYear();
          return day + " " + month + year;
    }
}

function check_steem_keychain(){if(window.steem_keychain) {console.log('Steem Keychain extension installed...');return true;} else {console.log('Steem Keychain extension not installed...');return false;}}
function handshake_steem_keychain(){
    if (check_steem_keychain){
        steem_keychain.requestHandshake(function() {console.log('Handshake received!'); });
    }

}

// Establish canvas
const app = document.getElementById('root');
const container = document.createElement('div');
var steemviz = [];
container.setAttribute('class', 'container');
app.appendChild(container);

// Header bounce setup
const header = document.querySelector('.header');
const pageWrap = document.querySelector('.wrapper');
var lastScrollTop = 0;

function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

function onScroll() {
  let currScrollTop = pageWrap.scrollTop;
  let isScrollingDown = currScrollTop > lastScrollTop;
  let isHeaderVisible = currScrollTop < header.height;

  header.classList.toggle('is-hidden', isScrollingDown && !isHeaderVisible);
  lastScrollTop = currScrollTop;
}
// Event listeners
pageWrap.addEventListener('scroll', debounce(onScroll, 16));


// Initialize routing
route.start(true);
const observer = lozad();
observer.observe();

