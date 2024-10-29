chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: 'reportIssue',
      title: 'Report Issue with Selected Text',
      contexts: ['selection']
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'reportIssue') {
      chrome.storage.local.set({ selectedText: info.selectionText }, function() {
        chrome.action.openPopup();
      });
    }
  });
  