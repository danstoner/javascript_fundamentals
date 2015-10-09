// the AMD Format  (Asynchronous Module Definition)
// - used by "script loaders" e.g. require.js

require(["lesson09_module"], function (dom) {
    var el = dom.create("div");
    var el2 = dom.create("div");

    console.log(el.id);
    console.log(el2.id);

});
