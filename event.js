let domainName = 'se'

function getPaper(query) {
  chrome.storage.sync.get({
    coustomDomain: 'se',
  }, function (items) {
    if (typeof items.coustomDomain !== 'undefined') {
      domainName = items.coustomDomain
    }
   
    let newUrl = `https://sci-hub.${domainName}/${query}`
    chrome.tabs.create({ url: newUrl })
  })
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
