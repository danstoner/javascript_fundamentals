(function() {
    'use strict';

    function loadPage(xhr, urlToLoad){
	xhr.onload = function (){
	    var response = xhr.responseText;
	    parseAndInsertPage(response);

	    window.history.pushState({pagecontent: response}, 'JavaScript Fundamentals', urlToLoad);
	}
	  
	xhr.open('GET', urlToLoad, true);

// this generates an error:
// XMLHttpRequest cannot load file:///home/dstoner/git/javascript_fundamentals/examples.html. Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https, chrome-extension-resource.
	xhr.send();

    }

    function parseAndInsertPage(pageString) {
	var bodyTemp = pageStrip.split('<head>')[1] || pageString,
	body = bodyTemp.split('</html>')[0] || pageString;
	document.body.outerHTML = body;
    }


    document.addEventListener('click', function(e) {
	if (e.target.nodeName === 'A'){
	    e.preventDefault();
	   
	    var xhr = new XMLHttpRequest,
	    newURL = e.target.href;

	    loadPage(xhr, newURL);
	    window.history.pushState({pageContent: document.body.outerHTML}, 'JavaScript fundamentals', document.location.href);
	}

    });

    window.addEventListener('popstate', function(e) {
	if (e.state && typeof e.state.pageContent === 'string') {
	    parseAndInsertPage(e.state.pageContent);
	}
    });

}());