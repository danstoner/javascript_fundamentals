(function() {
    'use strict';

    function Order() {
	var total = 0;

	// we are return a function here
	return function addProduct(price){
	    var salesTax = price * 0.17,
	    fee = price * 0.05;

	    total += price + salesTax + fee;

	    return total;
	};
    }

    var myOrder = new Order();

    console.log(myOrder(100));   // the closure is the myOrder variable
    console.log(myOrder(150));   // the inner function remembers all of the variable in scope when the function was defined
// results:
//   122
//   305

}());