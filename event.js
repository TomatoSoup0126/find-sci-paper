let domainName = 'se'

function getPaper(query) {
  chrome.storage.sync.get(
    { customDomain: 'se' },
    (items) => {
      if (typeof items.customDomain !== 'undefined') {
        domainName = items.customDomain
      }
    
      let newUrl = `https://sci-hub.${domainName}/${query}`
      chrome.tabs.create({ url: newUrl })
    }
  )
}

chrome.action.onClicked.addListener(function (tab) {
  getPaper(tab.url)
})

chrome.contextMenus.onClicked.addListener(
  (info) => getPaper(info.selectionText)
)

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create(
    {
      id: 'find sci paper',
      title: 'get by doi: %s',
      contexts: ["selection"],
    }
  )
})
