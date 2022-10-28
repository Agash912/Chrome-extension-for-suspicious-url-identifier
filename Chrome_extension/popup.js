function transfer() {
  var tablink;
  chrome.tabs.getSelected(null, function (tab) {
    const original_url = tab.url
    tablink = tab.url;
    if (tablink.length > 30) {
      tablink = tablink.slice(0, 30) + ' ...';
    }
    $('#site').text(tablink);

    var xhr = new XMLHttpRequest();
    params = 'url=' + original_url;
    var markup = JSON.stringify({"url" : original_url})
    xhr.open('POST', 'http://ec2-54-238-244-171.ap-northeast-1.compute.amazonaws.com:8000/predict', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = () => {
      $('#div1').text(xhr.responseText);
      return xhr.responseText;
    };
    xhr.send(markup);
  });
}

$(document).ready(function () {
  $('button').click(function () {
    var val = transfer();
  });
});

chrome.tabs.getSelected(null, function (tab) {
  var tablink = tab.url;
  if (tablink.length > 30) {
    tablink = tablink.slice(0, 30) + ' ....';
  }
  $('#site').text(tablink + '\n\n');
});
