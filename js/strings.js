(function () {
    'use strict';

    var testString = 'test string';

    console.log(testString.length);

    console.log(testString.split(' '));

// indexof
    console.log(testString.indexOf('t',1));
// lastindexof
    console.log(testString.lastIndexOf('t'));

// CASE
    console.log(testString.toUpperCase());

// substrings
    console.log(testString.substring(5));
    console.log(testString.substring(0,4));

// slice
    console.log(testString.slice(5));
    console.log(testString.slice(-6));
// slice allows negative numbers
    console.log(testString.slice(2,-2));  // starts from end

    console.log('     test     '.trim());

}());
