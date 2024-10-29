document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const issueType = document.getElementById('issueType').value;
    const updatedPrompt = document.getElementById('updatedPrompt').value;
  
    chrome.storage.local.get('selectedText', function(data) {
      const reportData = {
        issueType: issueType,
        selectedText: data.selectedText,
        updatedPrompt: updatedPrompt || 'N/A'
      };
  
      console.log('Report submitted:', reportData);
      alert('Your report has been submitted!');
    });
  });
  