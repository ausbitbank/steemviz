var vests_to_sp = 0.0004980499016859; // Tmp

// Establish canvas, logo, description, searchform
const app = document.getElementById('root');
const logo = document.createElement('img');logo.src = 'steemvizlogo1b6ac.png';
const loader = document.createElement('img');loader.setAttribute('id','loader');loader.src = 'loader.gif';
const container = document.createElement('div');container.setAttribute('class', 'container');
const description = document.createElement('p');description.setAttribute('class','description');
description.innerHTML = 'Use this tool to search steem accounts. Created by <a href="https://steemconnect.com/sign/account-witness-vote?witness=ausbitbank&approve=1">@ausbitbank</a> to recruit for <a href="https://steemit.com/@teamaustralia">@teamaustralia</a>, using <a href="https://steemit.com/utopian-io/@emrebeyler/tower-a-rest-api-implementation-on-the-top-of-hivemind">Tower API</a>, <a href="http://github.com/steemit/hivemind/">Hivemind</a> and <a href="https://github.com/ausbitbank/steemviz/blob/master/aussiesearch.js">Vanilla JS</a>.';
const selectform = document.createElement('p');
selectform.innerHTML = '<form onsubmit="return false;" id="searchform">Location contains: <input type="text" id="location" name="Location" value=""> Name contains: <input type="text" id="name" name="name" value=""> About (exact): <input type="text" id="about" name="about" value=""> Sort By <select id="sortby"><option value="created_at">created_at</option><option value="proxy_weight">proxy_weight</option><option value="vote_weight">vote_weight</option><option value="active_at">active_at</option><option value="followers">Followers</option><option value="following">Following</option><option value="reputation" selected="selected">Reputation</option><option value="post_count">Posts</option></select><select id="direction"><option value="">Ascending</option><option value="-" selected="selected">Descending</option><input type="button" class="submitform" value="Search"><input type="button" class="clearresults" value="Clear">'
app.appendChild(logo);app.appendChild(description);app.appendChild(selectform);app.appendChild(container);

// Sanitize user input
var clean = function (str) {	var temp = document.createElement('div');temp.textContent = str;return temp.innerHTML; };
var nicenumber = function (number) {var temp = parseInt(number,10);return temp.toFixed(0); };

// Get data from tower api
function getdata(apiurl) {
  app.appendChild(loader);
  var request = new XMLHttpRequest();
  request.open('GET', apiurl, true);
  request.onload = function () { 
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      document.getElementById('loader').remove();
      data.results.forEach(user => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        const h1 = document.createElement('h1');
        h1.innerHTML = `<a href="https://steemit.com/@${clean(user.name)}">@${clean(user.name)}</a>`;
        const img = document.createElement('img');
        img.src=`https://steemitimages.com/u/${user.name}/avatar`;
        const p = document.createElement('p');
        var user = prepare_profile_data(user);
        var profile_text = '';
        for (var key in user) {
          var value = user[key];
          if (key == 'website') {profile_text+=`<b>${key}:</b> <a href="${value}">${value}</a><br />`; continue;}
          if (key == 'name') {continue;}
          if (key == 'apps' && value.length==0) {continue;}
          profile_text+=`<b>${key}:</b> ${value}<br />`;
        }
        p.innerHTML = profile_text;

        container.appendChild(card);card.appendChild(h1);card.appendChild(img);card.appendChild(p);
      });
      if (data.next) {const nextpage = document.createElement('div');nextpage.setAttribute('class','card'); nextpage.setAttribute('id','loadmore');nextpage.innerHTML = `<h1 onClick='getdata("${data.next}");loadmore.remove();return false;'>Load more results</h1><center><b>${data.count} results total</b></center>`;container.append(nextpage);}
    } else {
      document.getElementById('loader').remove();
      const errorMessage = document.createElement('marquee');
      errorMessage.textContent = `Api server isn't responding !`;
      app.appendChild(errorMessage);
    }
  }
  
  request.send();
}

function prepare_profile_data(data){
  var profile = {};
  if (data.display_name) { profile.display_name = clean(data.display_name); }
  if (data.about) { profile.about = clean(data.about); }
  if (data.location){ profile.location = clean(data.location); }
  profile.created_at = data.created_at;
  profile.active_at = data.active_at;
  profile.name = clean(data.name);
  profile.reputation = data.reputation;
  profile.followers = data.followers;
  profile.following = data.following;
  profile.post_count = data.post_count;
  profile.proxy_weight = "~ "+(nicenumber(vests_to_sp*data.proxy_weight))+" SP";
  profile.vote_weight = "~ "+(nicenumber(vests_to_sp*data.vote_weight))+" SP";
   
  if (data.website) { profile.website = clean(data.website); }

  if (data.raw_json) {
    var rawjson = JSON.parse(data.raw_json);
    if (rawjson.witness_votes.length>0) { 
      profile.witness_votes=[];
      for (var witness in rawjson.witness_votes){profile.witness_votes.push(`<a href="https://steemit.com/@${clean(rawjson.witness_votes[witness])}">${clean(rawjson.witness_votes[witness])}</a>`);}
      profile.witness_votes = profile.witness_votes.join(', ');
    }
    if (rawjson.recovery_account) { profile.recovery_account = `<a href="https://steemit.com/@${clean(rawjson.recovery_account)}">${clean(rawjson.recovery_account)}</a>`; }
    if (rawjson.sbd_balance) { profile.sbd_balance = clean(rawjson.sbd_balance); }
    if (rawjson.balance) { profile.steem_balance = clean(rawjson.balance); }
    if (rawjson.posting.account_auths){
      var authorised_apps = [];
      for (var app in rawjson.posting.account_auths){authorised_apps.push(rawjson.posting.account_auths[app][0]);}
      for (var app in rawjson.active.account_auths){authorised_apps.push(rawjson.posting.account_auths[app][0]);}
    }
    if (authorised_apps) {
      profile.apps=[];
      for (var app in authorised_apps){
        switch(authorised_apps[app]){
          case 'steemauto': profile.apps.push(`<a href="https://steemauto.com">steemauto</a>`); break;
          case 'steempeak.app': profile.apps.push(`<a href="https://steempeak.com/@${profile.name}">steempeak</a>`); break;
          case 'busy.app' : profile.apps.push(`<a href="https://busy.org/${profile.name}">busy</a>`);break;
          case 'peakmonsters.app' : profile.apps.push(`<a href="https://monsters.steempeak.com/@${profile.name}">peakmonsters</a>`);break;
          case 'dtube.app' : profile.apps.push(`<a href="https://d.tube/@${profile.name}">dtube</a>`);break;
          case 'partiko-steemcon' : profile.apps.push(`<a href="https://partiko.app/@${profile.name}">partiko</a>`);break;
          case 'steemhunt.com' : profile.apps.push(`<a href="https://steemhunt.com/@${profile.name}">steemhunt</a>`);break;
          default : profile.apps.push(`<a href="https://steemd.com/@${authorised_apps[app]}">${authorised_apps[app]}</a>`);break;
        }
      }
      if (profile.apps.length>0) {profile.apps = profile.apps.join(' , ');}
    }
    
  }
  return profile;
}

function getapiurl(){
  formlocation = document.getElementById('location').value; sortby = document.getElementById('sortby').value; direction = document.getElementById('direction').value; formname = document.getElementById('name').value; formabout = document.getElementById('about').value;
  const apiurl = `https://hivemind.steemviz.com/api/v1/accounts/?about=${formabout}&name__contains=${formname}&location__contains=${formlocation}&ordering=${direction}${sortby}`;
  getdata(apiurl);
}

// Event listeners
document.querySelector(".submitform").addEventListener("click", function(e){  getapiurl();  e.preventDefault();})
document.querySelector(".clearresults").addEventListener("click", function(e){  container.innerHTML='';})
