function save_options() {
  let domain = document.getElementById('domainName').value
  
  chrome.storage.sync.set(
    { customDomain: domain },
    () => {
      let status = document.getElementById('status')
      status.textContent = 'Options saved.'
      setTimeout(() => status.textContent = '', 1000)
    }
  )
}

function restore_options() {
  chrome.storage.sync.get(
    { customDomain: 'tw' },
    (items) => document.getElementById('domainName').value = items.customDomain
  )
}

document.addEventListener('DOMContentLoaded', restore_options)
document.getElementById('save').addEventListener('click', save_options)
