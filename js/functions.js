(function (){
    'use strict';

    function testFunction(arg1, arg2) {
	return arg1 + arg2;
    }

    console.log(testFunction.length);  // number of arguments the function accepts



// call, apply, bind   methods

    var person = {
	name: 'Dan',
	job: 'Developer'
    }

    function introduce() {
	console.log('Hey! My name is ' +this.name + ', and I\'m a '+ this.job);
    }

//    introduce();   // the "this" object is not specified

    introduce.call(person);  // person becomes the "this" object with the .call method

    

    function introduce_modified(inductee) {
	console.log('Hey ' + inductee + '! My name is ' + this.name + ', and I\'m a '+ this.job);
    }

// call method
    introduce_modified.call(person, 'Bob');

// apply method
    function chat(respondent, subject){
	console.log('So ' + respondent + ', what about the ' + subject + ' huh? Pretty good for a ' + 
		    this.job + ' like me right?');
    }

    function engage(mode, object, args) {
	mode.apply(object,args);

    }

    engage(introduce_modified, person, ['Fred']);

    engage(chat, person, ['Al', 'new IDE']);

    function addToCart(fee,price) {
	if (!this.total) {
	    this.total = 0;
	}
	this.total += price += fee ||0;
	return this.name + '\'s cart total is $' + this.total;
    }

    var dansCart = addToCart.bind(person, 1);
    console.log(dansCart(50));
    console.log(dansCart(100));


    var bob = {
	name: 'Bob'
    };
    var bobsCart = addToCart.bind(bob, 5);
    console.log(bobsCart(50));
    console.log(bobsCart(100));

}());
