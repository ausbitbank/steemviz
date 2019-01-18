const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'steemvizlogo1b6ac.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');
const description = document.createElement('p');
description.innerText = 'Use this tool to discover new users that have put "Australia" in their profile page. Created by @ausbitbank to recruit for #teamaustralia';
app.appendChild(logo);
app.appendChild(description);
app.appendChild(container);

const apiurl = "https://hivemind.steemviz.com/api/v1/accounts/?location__contains=Australia&ordering=-created_at";
function getdata(apiurl) {
  var request = new XMLHttpRequest();
  request.open('GET', apiurl, true);
  request.onload = function () {
  
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    
    if (request.status >= 200 && request.status < 400) {
      data.results.forEach(user => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

  
        const h1 = document.createElement('h1');
        h1.innerHTML = `<a href="https://steemit.com/@${user.name}">${user.name}</a>`;
        const img = document.createElement('img');
        img.src=`${user.profile_image}`;
  
        const p = document.createElement('p');
        p.innerHTML = 
        `<b>Created at :</b> ${user.created_at} <br />
        <b>Display Name:</b> ${user.display_name} <br />
        <b>About:</b> ${user.about} <br />
        <b>Location:</b> ${user.location} <br />
        <b>Website:</b> <a href="${user.website}">${user.website}</a> <br />
        <b>Rep:</b> ${user.reputation} , <b>Followers:</b> ${user.followers} , <b>Following:</b> ${user.following} , <b>Posts:</b> ${user.post_count} <br />
        `;
  
        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(img);
        card.appendChild(p);
      });
      console.log(data.next);
      const nextpage = document.createElement('p');
      nextpage.innerHTML = `<a href="#" id="loadmore" onClick='getdata("${data.next}");return false;'>Load more results</a>`;
      container.append(nextpage);
  
    } else {
      const errorMessage = document.createElement('marquee');
      errorMessage.textContent = `Gah, it's not working!`;
      app.appendChild(errorMessage);
    }
  }
  
  request.send();
}

getdata(apiurl);
