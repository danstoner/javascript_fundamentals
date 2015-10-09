// The Facade Pattern
//  - hide complexity under layer of abstraction (example: jquery)

function addEvent(el, ev, fn) {               // add an event handler
    if (el.addEventListener) {                // check to see if the DOM has this method
        el.addEventListener(ev, fn, false);
    } else if (el.attachEvent) {              // check if legacy browser DOM has this method
        el.attachEvent("on" + ev, fn);
    } else {
        el["on" + ev] = fn;                   // only supports DOM level 0 events
    }
}

function removeEvent(el, ev, fn) {
    if (el.removeEventListener) {
        el.removeEventListener(ev, fn, false);
    } else if (el.detachEvent) {
        el.detachEvent("on" + ev, fn);
    } else {
        el["on" + ev] = null;
    }
}