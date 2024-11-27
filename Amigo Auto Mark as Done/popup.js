document.getElementById('mark-done').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: clickAllButtons
      });
    });
  });
  
  function clickAllButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      if (button.innerText.includes("Mark as done")) {
        button.click();
      }
    });
  }
  