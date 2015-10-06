(function() {
    'use strict';

//never pass a string! bad idea
//    setTimeout('console.log("bad!")',1000);

    function log(message) {
	console.log(message);
    }

    setTimeout(log, 1000);

// function expression
    setTimeout(function () {
	log ('woo');
    }, 1000);

    console.log("are we still executing here?");

//    setInterval
    function pulse() {
	console.log('boom, boom');
	counter += 1;

	if (counter === 5) {
	    clearInterval(interval);
	}

    }
    var interval = setInterval(pulse,1000);
    var counter = 0;

}());