function getTabId() { ... }
function getTitle() { return document.title; }

chrome.scripting
    .executeScript({
      target : {tabId : getTabId()},
      func : getTitle,
    })
    .then(() => console.log("injected a function")); 


