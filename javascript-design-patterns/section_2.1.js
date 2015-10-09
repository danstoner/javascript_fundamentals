var obj = {};   // the curly braces are an object literal

// 4 ways to create properties

obj.firstName = "Jeremy";
obj["lastName"] = "McPeak";

var firstName = obj["firstName"];
var lastname = obj.lastName;


Object.defineProperty(obj, "country", {
    value: "USA"
});


Object.defineProperties(obj, {
    twitter: {
	value: "jwmcpeak"
    },
    email: {
	value: "jwmcpeak@wdonline.com"
    }
});



// if know the values, better to just create the object with the values.

var obj2 = {
    firstName: "Jeremy",
    lastname: "McPeak"
};

