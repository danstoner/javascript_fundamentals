// JavaScript Fundamentals Section 3

// this is called an Immediate Function

//if
(function () {
    'use strict';

    if (1 + 1 === 3) {
	console.log ('The expression is true');
    }

    if (true === false) {
	console.log('We will never see this');
    } else {
	console.log('We will always see this');
    }


    var color = 'yellow';
    if (color === 'blue') {
	console.log('It is blue');
    } else if (color === 'green') {
	console.log('It is green');
    } else if (color === 'red') {
	console.log('It is red');
    } else console.log('No Color!');

    if (1) {
	console.log ('We will see this because 1 is a truthy value.');
    }

    var array=['item1'];
    if (array.length){
	console.log(array[0]);
    }

// turnary has 3 operands
    // (condition) ? {execute if true} : {execute if false}
    (true) ? console.log('This one') : console.log('No');


//switch
//  always use the break statement
    var switcher = 'three';
    switch(switcher){
    case 'one':
	console.log('one');
	break;
    case 'two':
	console.log('two');
	break;
    default:
	console.log(switcher);
    }

// loops
//   for and for in
    var anArray = ['item1', 'item2', 'item3'];
    for (var x=0, y = anArray.length; x < y; x+=1 ) {
	console.log(anArray[x]);
    }

    var anObject = {
	prop1: 'property1',
	prop2: 'property2',
	prop3: 'property3'
    };
    for (var prop in anObject) {
	if (anObject.hasOwnProperty(prop)) {
	console.log(anObject[prop]);
	}
    }
//   while loop
    var limit = 0;
    while (limit < 5) {
	if (limit ===3) {
	    break;
	}

	console.log(limit += 1);
    }

//   do while loop, always executed at least once
    var condition = false;
    do {
	console.log('once');
	break;
    } while (condition);

}());






