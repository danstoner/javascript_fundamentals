(function() {
    'use strict';

    var now = new Date();   // date object
    console.log(now);

    console.log(typeof Date());

    var partyTime = new Date(946684799000);
    console.log(partyTime);

    var dob = new Date('September 9 1978');
    console.log(dob);

    var specialDate = new Date(2002, 2, 9);
    console.log(specialDate);

// Date "getters"
    console.log(specialDate.getDate())
    console.log(specialDate.getMonth())
    console.log(specialDate.getFullYear())
    console.log(specialDate.getDay())   // day of week starts at 0, Sunday

    console.log(specialDate.toString())
    console.log(specialDate.toUTCString())

    console.log(specialDate.toTimeString())
    console.log(specialDate.toISOString())
    
    console.log(specialDate.toLocaleString())
}())