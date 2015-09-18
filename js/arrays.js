(function (){
    'use strict';

// Arrays
    var array = ['one', 'two', 'three'];

    console.log(array.length);

//MUTATOR methods modify the underlying array
// push
    array.push('four');
    console.log(array);

// unshift
    array.unshift('zero');
    console.log(array);

// pop
    console.log(array.pop());

// shift
    console.log(array.shift());
//    console.log(array.shift());
//    console.log(array.shift());
    
// splice
//    array.splice(0,2)
    array.splice(0, 3, 'a', 'b', 'c');
    console.log(array);

// reverse
    console.log(array.reverse());

// sort
    console.log(array.sort());

// sort uses unicode value by default

    console.log(['a', 'b', 'C'].sort());
    console.log([3, 20, 1000].sort());
    console.log([3, 20, 1000].sort(function(a, b) {
	if (a < b) {
	    return -1;
	}else if (a === b) {
	    return 0;
	} else {
	    return 1;
	}
	   }));


//ACCESSOR METHODS do not modify the underlying array

    console.log(array.join());
    console.log(array.join(''));
    console.log(array.indexOf('b'));
    console.log(array.indexOf('z'));


// ---- more slicing

    console.log(array.slice(1));
    console.log(array.slice(-2));
    console.log(array.slice(0, -1));



//ITERATOR METHODS

// forEach
    array.forEach(function (value, index) {
	console.log('Item at index ' + index + ' has the value ' + value);
    });

// every
    console.log(array.every(function (value) {
	return typeof value === 'string';
    }));

// filter
    console.log(['a', 1, 'b', 2, 'c', 3].filter(function (value) {
	return typeof value !== 'number';
    }));

// map
    console.log(array.map(function (value) {
	return value.toUpperCase();
    }));

// reduce
    console.log([1,2,3].reduce(function (total, value) {
	return total += value;
    }));

// reduce accepts second paramater which is initial value of total
    console.log([1,2,3].reduce(function (total, value) {
	return total += value;
    }, 4 ));
//END
}());

