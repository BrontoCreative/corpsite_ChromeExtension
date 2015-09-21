// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//var myUrl = urlFinder(id);
//var buttonPress = buttonSelect ();

function urlFinder (id) {
	if (id === "one") {
		return ("http://app.bronto.com");
	}
	else if (id === "two") {
		return ("http://bronto.com/welcomekit");
	} else  {
		return ("https://server.iad.liveperson.net/hc/77739214/?cmd=file&file=visitorWantsToChat&site=77739214&byhref=1&SESSIONVAR!skill=Lead%20Qualification&imageUrl=https://server.iad.liveperson.nethttps://hosting-source.bronto.com/7894/public/LivePerson/");
	}
}
//
//function buttonSelect () {
//$(document).ready(function() {
//        $('button').click(function() {
//            return ($(this).attr("id"));
//       });
//   });
//}


function click(e) {
		var myUrl = urlFinder(e.target.id);
	    chrome.tabs.create({url: myUrl});
}

document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', click);
  }
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-30105-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();