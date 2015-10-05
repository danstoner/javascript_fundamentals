(function() {
    'use strict';

    // xhr = xml http request

    var xhr = new XMLHttpRequest();
    console.log(xhr);

    xhr.open('GET', searchquery);
    xhr.send();

// ....
}());