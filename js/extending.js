(function () {
    'use strict';

    function Shape2d() {
	return {
	    type: this.constructor.name,
	    sides: []
	};
    }

    function Rectangle(width, height) {
	var shape = Shape2d.call(this);

	shape.sides.push(width, height, width, height);
	shape.getArea = function() {
	    return shape.sides[0] * shape.sides[1];
	}
	return shape;
    }

    function Square(sidesLength) {
	return Rectangle.call(this, sidesLength, sidesLength);
    }

    var myRect = new Rectangle(5, 4);
    console.log(myRect.type);
    console.log(myRect.sides.length);   // number of items in array
    console.log(myRect.getArea());

    var mySquare = new Square (5);
    console.log(mySquare.type);
    console.log(mySquare.sides.length);
    console.log(mySquare.getArea());

 // not true inheritance, the shapes are still just objects
    console.log(mySquare instanceof Object);
    
}());