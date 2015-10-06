(function () {
    'use strict';

    // self-invoking named anonymous function
    // module is named "utils"
    var utils = (function utils() {
	// this is the protected function
	function trimExtension(filename) {
	    return filename.toLowerCase().replace(/\.{1}[a-z]+/, '');
	}

	function trimExtensions(filenames) {
	    var trimmed = [];
	    filenames.forEach(function (item) {
		trimmed.push(trimExtension(item));
	    });
	    return trimmed;
	}

	function trimFileExtension() {
	    return (typeof arguments[0] === 'string' ?
		    trimExtension(arguments[0]) : trimExtensions(arguments[0]));
	}



	return {
	    // this is the public function
	    trimFileExtension: trimFileExtension
	}
    }());

    var aFileName = 'somefile.js';
    console.log(utils.trimFileExtension(aFileName));

    console.log(utils.trimFileExtension(['somefile.css', 'anotherfile.html']));
		 
}());