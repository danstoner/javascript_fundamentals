// single line comment

/* This is a multi-line comment.
 * here is more...
 * and more!
*/

console.log('<3');

// alert('Oh noes!');

// variables
// 1. always use "var" keyword when creating variables to prevent creation of global scope variables
// 2. variables declared with no value will get the special value "undefined"

var theMeaningOfLife = 42;

console.log(theMeaningOfLife);


/* javascript Primitives:
 *  number - integers and decimals. outside range = +-Infinity, math on non numbers produces NaN (Not A Number)
 *           use isNan() to check
 *  string - sequence of characters in quotes, concat with + operator
 *  boolean - true or false, truty or falsey (false, 0, '', null, undefined, NaN)
 *  undefined - special
 *  null - special, since variables cannot be destroyed in javascript, the closest thing is setting to null
*/

/* Composite Data Types:
 *  array - 0 based, object with fixed numerical indices
 *  object - key/value pair
 *  
*/

var number = 1;

console.log(number);

var quotes = '"hello"';

console.log(quotes)

var object = {
    myNumber: 10,
    myString: 'woohoo!'
};

console.log(object.MyNumber);
console.log(object['myNumber']);

/* Operators:
 *  + - * /
 *  modulus %
 *  increment ++
 *  decrement --   can be postfix or prefix, subtle difference
*/

/* Assignment:
 *  += addition assignment
 *  -= subtraction assignment
 *  *= /= %=  multiplication, division, and modulus assignment
*/

/* Comparison operators:
 *  ==   equal     1 == true  --> (true)
 *  ===  strict comparison equal    1 === true   --> (false)
 *  !=   not equal
 *  !==  strict not equal comparison
 *  >   >=    greater than, greater than or equal
 *  <   <=    less than, less than or equal
*/

// example in console
// > 1 == '1';
// < true

/* Unary Operators:
> +true
1
> +'2'
2
> +'whoops'
NaN
> -true
-1
> !true
false
> typeof 1
"number"
> typeof 'hello'
"string"
> typeof true
"boolean"
> typeof []
"object"
> typeof null
"object"      // yikes!  
*/

/* Logical Operators:

 *  &&    AND
 *  ||    OR

*/


// Object and functions

function getThingByColor(color){
    var things = {
	red: 'a red thing',
	green: 'a green thing',
	blue: 'a blue thing'
    };
    return things[color] || 'sorry, no thing of that color exists';
}

/* via console...
> getThingByColor('red');
"a red thing"
> getThingByColor('monkey');
"sorry, no thing of that color exists"
*/

// simple function declaration
function myFunction(message) {
    console.log(message);
    return true;
}

// function expression, where function is stored in a variable
//    Without a name, this is an anonymous function
var myOtherFunction = function () {
    console.log('function expression');
}




console.log(hoistedVariable);   // variables available at start of scope as if declared at top (with no value)
var hoistedVariable = 'test';
console.log(hoistedVariable);


// leading parenthesis syntax to cause automatic invocation
(function invokeImmediately() {
    console.log('invoked automatically');
})();

// leading bang syntax for automatic invocation.  any unary operator will trigger this behavior.
!function alsoInvokedAutomatically() {
    console.log('invoked automatically too');
}();

