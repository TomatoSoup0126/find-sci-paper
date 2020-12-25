function save_options() {
  let domain = document.getElementById('domainName').value
  
  chrome.storage.sync.set({
    coustomDomain: domain,
  }, function () {
    let status = document.getElementById('status')
    status.textContent = 'Options saved.'
    setTimeout(function () {
      status.textContent = ''
    }, 1000)
  })
}


function restore_options() {
  chrome.storage.sync.get({
    coustomDomain: 'tw',
  }, function (items) {
      document.getElementById('domainName').value = items.coustomDomain
  })
}

document.addEventListener('DOMContentLoaded', restore_options)
document.getElementById('save').addEventListener('click', save_options)
