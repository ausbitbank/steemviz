(function(d) {
  var sci, p = d.getElementsByClassName('sc-vote');
  for (var i = 0; i < p.length; i++) {
    var author = p[i].dataset.author;
    var permlink = p[i].dataset.permlink;
    sci = d.createElement('iframe');
    sci.setAttribute('src', 'https://steemconnect.com/embed/vote?author=' + author + '&permlink=' + permlink);
    sci.setAttribute('allowtransparency', 'true');
    sci.setAttribute('frameBorder', '0');
    sci.setAttribute('scrolling', 'no');
    sci.setAttribute('id', 'z');
    sci.setAttribute('style', 'display:inline-block;');
    sci.width = '90';
    sci.height = '20';
    p[i].appendChild(sci);
  }

}(document));
