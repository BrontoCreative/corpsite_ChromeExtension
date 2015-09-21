// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var myUrl = urlFinder();
var buttonPress = buttonSelect ();

function urlFinder () {
	if (buttonPress === "one") {
		return ("http://app.bronto.com");
	}
	else if (buttonPress === "two") {
		return ("http://bronto.com/welcomekit");
	} else  {
		return ("https://server.iad.liveperson.net/hc/77739214/?cmd=file&file=visitorWantsToChat&site=77739214&byhref=1&SESSIONVAR!skill=Lead%20Qualification&imageUrl=https://server.iad.liveperson.nethttps://hosting-source.bronto.com/7894/public/LivePerson/");
	}
}

function buttonSelect () {
$(document).ready(function() {
        $('button').click(function() {
            console.log( $(this).attr("id"));
        });
    });
}


function click(e) {
	    chrome.tabs.create({url: myUrl});
}

document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', click);
  }
});