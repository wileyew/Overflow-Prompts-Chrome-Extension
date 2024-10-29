document.addEventListener('mouseup', function() {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText.length > 0) {
      chrome.storage.local.set({ selectedText: selectedText }, function() {
        console.log('Selected text saved:', selectedText);
      });
    }
  });
  