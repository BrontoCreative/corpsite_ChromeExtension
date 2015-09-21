var myUrl = urlFinder();

function urlFinder () {
	if ($("#button") == "one") {
		return "http://app.bronto.com";
	}
	else if ($("#button") == "two") {
		return "http://bronto.com/welcomekit";
	} else {
		return "https://server.iad.liveperson.net/hc/77739214/?cmd=file&file=visitorWantsToChat&site=77739214&byhref=1&SESSIONVAR!skill=Lead%20Qualification&imageUrl=https://server.iad.liveperson.nethttps://hosting-source.bronto.com/7894/public/LivePerson/";
	}
}

function awesome() {
  chrome.tabs.create({url: myUrl});
}  

function clickHandler(e) {
  setTimeout(awesome, 1000);
}

function main() {
  // Initialization work goes here.
}

// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', clickHandler);
  main();
});