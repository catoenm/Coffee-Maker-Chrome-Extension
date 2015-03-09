checkCoffee(document.URL);


function checkCoffee(){
	if (document.URL.indexOf("make%20coffee") > -1){
		var yesOrNo = prompt("Enter your cell phone number if you want to brew coffee");
		if (yesOrNo.length == 10) {
    		alert("Making Coffee");
    		chrome.extension.sendMessage("mdgbofblhialfcmglmflnhgbfeppkggc", { launch: true });

		}
		else
			alert("Invalid Phone Number")
	}
}