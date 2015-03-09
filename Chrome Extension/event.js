// This function will eventually contain some logic
// for receiving background-color values from the
// current tab.
function getBgColors (tab) {
  // But for now, let's just make sure what we have so
  // far is working as expected.  

chrome.tabs.getSelected(null, function(tab) {
  var myURL = tab.url;
});

  if ("Hello" == "Hello"){
  			chrome.management.launchApp("cocjkfnannnncmdlgmehgaipbojjkdfl", function(){
  			if(chrome.runtime.lastError) console.error(chrome.runtime.lastError);
  			else console.log("App launched");
  		});
  }
 	 alert("Hekki");
}

// When the browser action is clicked, call the
// getBgColors function.
chrome.browserAction.onClicked.addListener(getBgColors);