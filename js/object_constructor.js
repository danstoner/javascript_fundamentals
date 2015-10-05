(function() {
    'use strict';

    var newObject = {};

    Object.prototype.mySpecialProperty = 'special!';
    console.log(newObject.mySpecialProperty);

    var newArray = [1, 2, 3];
    // only add a method to the prototype if it doesn't already exist
    if (!Array.prototype.first) {
	Array.prototype.first = function () { return this[0]};
    }

    console.log(newArray.first());

    newObject.prop1 = 'prop1';
    Object.keys(newObject).forEach(function (item){
	console.log(newObject[item]);
    });

    Object.freeze(newObject);

    if (!Object.isFrozen(newObject)) {
	newObject.prop1 = 'updated prop!';
    }
    // there is no unFreeze method!



    var unFrozenObj = {};
    Object.keys(newObject).forEach(function(item){
	unFrozenObj[item]=item;
    });
    console.log('-------');
    console.log(unFrozenObj.prop1);

    Object.seal(unFrozenObj);
    unFrozenObj.prop1 = 'woohoo';
    console.log(unFrozenObj.prop1);

    if (!Object.isSealed(unFrozenObj)){
	delete unFrozenObj.prop1;
    }

    // also preventExtensions, isExtensible


    // section 7.2
    

    // custom Objects
    // essentially javascript "class" capability
    var Person = function (name) {
	this.name = name;
    }

    Person.prototype = {
	greet: function() {
	    return this.name;
	}
    }

    var fred = new Person('Fred');
    console.log(fred.greet());
    console.log(fred);

    console.log(fred.mySpecialProperty);

    // alternative using create method
    var bob = Object.create(Person.prototype, {
	name: {writable: true, value: 'Bob'}
    });
    Object.defineProperty(bob, 'job', {
	value: 'Developer',
	writable: true,
	configurable: true,
	enumberable: true
    });

    Object.defineProperties(bob, {
	heightInCm: {
	    value: 183
	},
	weightInKg: {
	    value: 75
	}
    });
    console.log(bob.greet());
    console.log(bob.job);
    console.log(bob);

    
}());