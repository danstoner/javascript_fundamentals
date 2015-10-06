(function() {
    'use strict';

    var pattern = /@/;
    console.log(pattern.test('me@somewhere.com'));  // true

    var letters = /^[A-Z]+$/;
    console.log(letters.test('R2-D2'));   // false

    var alphaNumeric = /^[a-zA-Z0-9]+$/;
    console.log(alphaNumeric.test('as11X'));   // true

    // var numberFormat = /^[0-9]{3}-[0-9]{6}-[0-9]{3}$/;
    // console.log(numberFormat.test('123-123456-123'));     // true

    // var numberFormat = /^[0-9]{3}-[0-9]{3,6}-[0-9]{3}$/;
    // console.log(numberFormat.test('123-12345-123'));      // true
    
    // var numberFormat = /^[0-9]{3}\*[0-9]{3,6}\*[0-9]{3}$/;
    // console.log(numberFormat.test('123*12345*123'));     // true

    var numberFormat = /^\d{3}\*\d{3,6}\*\d{3}$/;
    console.log(numberFormat.test('123*12345*123'));    // true

    var noSpecialCharacters = /^\w+$/;    // no special characters
    console.log(noSpecialCharacters.test('abc*123'));   // false


    // pipe is OR

    // var url = /^http|https/;
    // console.log(url.test('http://google.com'));   // true

    var url = /^http(s?):/;     // ? is 0 or 1 occurrences
    console.log(url.test('httpx://google.com'));   // false
    console.log(url.test('https://google.com'));   // true


    // replace method

    var camelCased = 'CamelCasedString';
    console.log(camelCased.replace(/([A-Z])/g, '_$1').toLowerCase());    // _camel_cased_string


    var url2 = /^http(?:s?):/;     // ?: means non-capturing parenthesis, matches won't go into $1, $2, ...

    var script = /java(?=script)/i;   // only if java is directly followed by script, case insensitive
    console.log(script.test('Java'));     // false

    var script2 = /java(?!script)/i;   // negative match
    console.log(script2.test('Java'));     // true


    // match method

    var lettersAndNumbers = /\d/;   // only match digits
    console.log('a5b4c3d3w1'.match(lettersAndNumbers));    // ["5", index: 1, input: "a5b4c3d3w1"]

    var lettersAndNumbers2 = /\d/g;   // only match digits with global
    console.log('a5b4c3d3w1'.match(lettersAndNumbers2));  // ["5", "4", "3", "3", "1"]

}());