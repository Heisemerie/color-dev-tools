async function sayHello() {
  // call chrome tab api for active tab
  let [tab] = await chrome.tabs.query({ active: true });

  // call chrome script api
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      alert("Hello!");
    },
  });
}

// references the popup (not webpage) DOM
document.getElementById("alert").addEventListener("click", sayHello);
