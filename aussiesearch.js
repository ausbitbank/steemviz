const app = document.getElementById('root');
const logo = document.createElement('img');logo.src = 'steemvizlogo1b6ac.png';
const loader = document.createElement('img');loader.setAttribute('id','loader');loader.src = 'loader.gif';
const container = document.createElement('div');container.setAttribute('class', 'container');
const description = document.createElement('p');description.setAttribute('class','description');
description.innerText = 'Use this tool to discover new users based on the location set in their profile. Created by @ausbitbank to recruit for #teamaustralia';
const selectform = document.createElement('p');
selectform.innerHTML = '<form onsubmit="return false;" id="searchform">Search by Location: <input type="text" id="location" name="Location" value="Australia"> Sort By <select id="sortby"><option value="created_at">Creation Date</option><option value="followers">Followers</option><option value="following">Following</option><option value="reputation">Reputation</option><option value="Posts">Posts</option></select><select id="direction"><option value="">Ascending</option><option value="-" selected="selected">Descending</option><input type="button" class="submitform" value="Search"><input type="button" class="clearresults" value="Clear">'
app.appendChild(logo);app.appendChild(description);app.appendChild(selectform);app.appendChild(container);
var clean = function (str) {	var temp = document.createElement('div');temp.textContent = str;return temp.innerHTML; };

function getdata(apiurl) {
  app.appendChild(loader);
  var request = new XMLHttpRequest();
  request.open('GET', apiurl, true);
  request.onload = function () { 
    var data = JSON.parse(this.response);
    console.log(data);
    if (request.status >= 200 && request.status < 400) {
      document.getElementById('loader').remove();
      data.results.forEach(user => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        const h1 = document.createElement('h1');
        h1.innerHTML = `<a href="https://steemit.com/@${clean(user.name)}">${clean(user.name)}</a>`;
        const img = document.createElement('img');
        img.src=`https://steemitimages.com/u/${user.name}/avatar`;
        const p = document.createElement('p');
        p.innerHTML = `<b>Created at :</b> ${clean(user.created_at)} <br />
        <b>Display Name:</b> ${clean(user.display_name)} <br />
        <b>About:</b> ${clean(user.about)} <br />
        <b>Location:</b> ${clean(user.location)} <br />
        <b>Website:</b> <a href="${clean(user.website)}">${clean(user.website)}</a> <br />
        <b>Rep:</b> ${clean(user.reputation)} , <b>Followers:</b> ${clean(user.followers)} , <b>Following:</b> ${clean(user.following)} , <b>Posts:</b> ${clean(user.post_count)} <br />`;
        container.appendChild(card);card.appendChild(h1);card.appendChild(img);card.appendChild(p);
      });
      if (data.next) {const nextpage = document.createElement('div');nextpage.setAttribute('class','card'); nextpage.setAttribute('id','loadmore');nextpage.innerHTML = `<h1 onClick='getdata("${data.next}");loadmore.remove();return false;'>Load 20 more results</h1><p>${data.count} results total</p>`;container.append(nextpage);}
    } else {
      document.getElementById('loader').remove();
      const errorMessage = document.createElement('marquee');
      errorMessage.textContent = `Api server isn't responding !`;
      app.appendChild(errorMessage);
    }
  }
  
  request.send();
}

document.querySelector(".submitform").addEventListener("click", function(e){  getapiurl();  e.preventDefault();})
document.querySelector(".clearresults").addEventListener("click", function(e){  container.innerHTML='';})

function getapiurl(){
  formlocation = document.getElementById('location').value;
  sortby = document.getElementById('sortby').value;
  direction = document.getElementById('direction').value;
  const apiurl = `https://hivemind.steemviz.com/api/v1/accounts/?location__contains=${formlocation}&ordering=${direction}${sortby}`;
  console.log(apiurl);
  getdata(apiurl);
}
