// Define the phishing URLs set
const phishingUrls = new Set();

// Function to fetch phishing URLs from GitHub
async function updatePhishingList() {
  const url = 'https://raw.githubusercontent.com/mitchellkrogza/Phishing.Database/master/phishing-domains-ACTIVE.txt';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch phishing URL list: ${response.status}`);
    }
    const data = await response.text();
    phishingUrls.clear();
    data.split('\n').forEach((line) => {
      const hostname = line.trim().replace(/^www\./, '');
      if (hostname) {
        phishingUrls.add(hostname.toLowerCase());
      }
    });
    console.log("Phishing URLs list updated successfully.");
    
    // Cache the phishing URLs locally
    chrome.storage.local.set({ phishingUrls: Array.from(phishingUrls) });
  } catch (error) {
    console.error("Error updating phishing URLs:", error);

    // Load cached URLs if fetching failed
    chrome.storage.local.get('phishingUrls', (result) => {
      if (result.phishingUrls) {
        phishingUrls.clear();
        result.phishingUrls.forEach((url) => phishingUrls.add(url));
        console.log("Loaded phishing URLs from cache.");
      }
    });
  }
}

// Initial list update and interval-based refreshing
updatePhishingList();
setInterval(updatePhishingList, 30 * 60 * 1000); // Update every 30 minutes

// Function to show phishing notification
function showPhishingNotification() {
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'icons/icon.png',
    title: 'Phishing Site Detected',
    message: 'This site has been flagged as a phishing site. Access is not recommended.',
    priority: 2
  });
}

// Function to check if the current URL is a phishing site
function checkPhishingStatus(tabId, url) {
  try {
    const currentUrl = new URL(url).hostname.toLowerCase().replace(/^www\./, '');
    if (phishingUrls.has(currentUrl)) {
      markPhishing(tabId);
    } else {
      markSafe(tabId);
    }
  } catch (error) {
    console.error("Error processing tab URL:", error);
    markUnknown(tabId);
  }
}

// Helper functions to mark tab status
function markPhishing(tabId) {
  chrome.action.setPopup({ tabId: tabId, popup: "popup.html" });
  chrome.action.setBadgeText({ tabId: tabId, text: "⚠️" });
  chrome.action.setBadgeBackgroundColor({ color: "red" });
  chrome.storage.local.set({ isPhishing: true });
  showPhishingNotification();
}

function markSafe(tabId) {
  chrome.action.setBadgeText({ tabId: tabId, text: "✅" });
  chrome.action.setBadgeBackgroundColor({ color: "green" });
  chrome.storage.local.set({ isPhishing: false });
}

function markUnknown(tabId) {
  chrome.action.setBadgeText({ tabId: tabId, text: "" });
  chrome.storage.local.set({ isPhishing: false });
}

// Listeners for tab updates
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
