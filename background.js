let phishingUrls = new Set();

fetch(chrome.runtime.getURL('urls.txt'))
  .then(response => response.text())
  .then(data => {
    data.split('\n').forEach(url => {
      const hostname = url.trim().replace(/^www\./, ''); 
      phishingUrls.add(hostname.toLowerCase()); 
    });
  })
  .catch(error => console.error("Failed to load phishing URLs:", error));

function showPhishingNotification() {
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'icons/icon.png',
    title: 'Phishing Site Detected',
    message: 'This site has been flagged as a phishing site. Access is not recommended.',
    priority: 2
  });
}

function checkPhishingStatus(tabId, url) {
  try {
    const currentUrl = new URL(url).hostname.toLowerCase().replace(/^www\./, '');
    if (phishingUrls.has(currentUrl)) {
      chrome.action.setPopup({ tabId: tabId, popup: "popup.html" });
      chrome.action.setBadgeText({ tabId: tabId, text: "⚠️" }); 
      chrome.action.setBadgeBackgroundColor({ color: "red" });   
      chrome.storage.local.set({ isPhishing: true });
      
      
      showPhishingNotification();
    } else {
      chrome.action.setBadgeText({ tabId: tabId, text: "✅" }); 
      chrome.action.setBadgeBackgroundColor({ color: "green" });    
      chrome.storage.local.set({ isPhishing: false });
    }
  } catch (error) {
    console.error("Error processing tab URL:", error);
    chrome.action.setBadgeText({ tabId: tabId, text: "" });
    chrome.storage.local.set({ isPhishing: false });
  }
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  chrome.storage.local.get(['isActive'], (result) => {
    if (result.isActive !== false) { // Default to active
      if (changeInfo.status === 'complete' && tab.active) {
        checkPhishingStatus(tabId, tab.url);
      }
    }
  });
});

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.storage.local.get(['isActive'], (result) => {
    if (result.isActive !== false) { // Default to active
      chrome.tabs.get(activeInfo.tabId, (tab) => {
        if (tab && tab.url) {
          checkPhishingStatus(activeInfo.tabId, tab.url);
        }
      });
    }
  });
});
