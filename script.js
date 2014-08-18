// Function to tag the url with proxy tag.
var updateURL = function(oldUrl) {
  var proxyTag = "http://queens.ezp1.qub.ac.uk/login?url="; // QUB's proxy tag.
  var newUrl = proxyTag + oldUrl; // Prefixing the proxy tag to the old url
  return newUrl; // Return the tagged url
};

// Changing the url in the current tab.
var addProxy = function() {
  // Get the current window.
  chrome.windows.getCurrent(function(currentWindow) {

    // Get the current tab in current window.
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

      // Create an alias.
      var tab = tabs[0];

      // Tagging the url from the current tab with the proxy tag.
      var URL = updateURL(tab.url);

      // Change the url to the tagged url and reloads the page.
     chrome.tabs.update(tab.id, {url: URL});
    });
  });
}

// Chrome listener. The script is run when the button is pressed.
chrome.browserAction.onClicked.addListener(function() {
  addProxy();
});