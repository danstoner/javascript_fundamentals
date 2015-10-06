(function() {
    'use strict';

// Local Storage is persistent accross browser sessions

// Session Storage

    console.log(window.sessionStorage);
    window.sessionStorage.setItem('testItem', true);
  // all types are flattened automatically via toString behind the scenes
    window.sessionStorage.setItem('testItem2',['test1', 'test2']);
    window.sessionStorage.setItem('testItem3', {prop1: 'ooops'});  // objects
    
// put an object in storage
// serialize to string / JSON to represent objects properly
    window.sessionStorage.setItem('testItem4', JSON.stringify({prop1: 'oops'}));
// get an object back out of storage
    console.log(JSON.parse(window.sessionStorage.getItem('testItem4')));
    
    function readStorageKeys() {
	var x, length;
	for (x = 0, length = window.sessionStorage.length; x < length; x += 1) {
	    console.log(window.sessionStorage.key(x));
	}

    }
    readStorageKeys();

    window.sessionStorage.removeItem('testItem4');
    window.sessionStorage.clear();
}());