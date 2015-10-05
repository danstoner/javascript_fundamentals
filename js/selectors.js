(function() {
    'use strict';

// Browser APIs

// query Selectors should work in browsers IE 8 and above

    var mainHeading = document.querySelector('header:first-child');
    console.log(mainHeading);

    var headers = document.querySelectorAll('h2');
    console.log(headers);


}());