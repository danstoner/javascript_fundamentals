(function() {
    'use strict';

    var myObject = {};

    console.log(myObject.constructor);

    console.log(myObject.hasOwnProperty('constructor'));  // false because constructor is inherited, not defined within myObject

    myObject.testProperty = 'test';
    console.log(myObject.hasOwnProperty('testProperty'));


    console.log(myObject.propertyIsEnumerable('constructor'));
    console.log(myObject.propertyIsEnumerable('testProperty'));

    console.log(myObject.toString());
    // [object Object]
    // which means the object is of type "object" and extends the "Object" constructor.
    
    console.log(['test','something'].toString());

    console.log(Object.prototype.toString.call([]));


    
}());