chrome.browserAction.onClicked.addListener(function (tab) {
  var newUrl = "https://sci-hub.tw/" + tab.url;
  chrome.tabs.create({ url: newUrl });
});

