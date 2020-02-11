function getPaper(query) {
  var newUrl = "https://sci-hub.tw/" + query
  chrome.tabs.create({ url: newUrl })
}


chrome.browserAction.onClicked.addListener(function (tab) {
  getPaper(tab.url)
})


chrome.contextMenus.create({
  type: 'normal',
  title: 'get by doi: %s',
  id: 'find sci paper',
  contexts: ["selection"],
  onclick: function (info,tab) {
    getPaper(info.selectionText)
  }
})