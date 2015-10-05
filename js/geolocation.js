(function() {
    'use strict';

// geolocation api part of nagitator object

    function onPositionReceived(position){
	console.log(position);
    }
    if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(onPositionReceived);
    }

// seems flimsy.  location information denied, have to manage via browser settings, was unable to add permission 
// for location.

}());