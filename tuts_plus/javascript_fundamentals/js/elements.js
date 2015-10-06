(function () {
    'use strict';

    console.log(document.getElementById('mainHeading'));

    console.log(document.getElementsByClassName('heading'));

    console.log(document.getElementsByTagName('p'));

    var mainHeading = document.getElementById('mainHeading');
    var subHeading = document.getElementsByClassName('heading')[1];

    console.log("1");
    console.log(mainHeading);
    console.log("2");
    console.log(subHeading);

    mainHeading.id = 'firstHeading';
    console.log(mainHeading.id);
    console.log(document.getElementById('firstHeading'));

    console.log(subHeading.className);
    subHeading.classList.add('special');
    subHeading.classList.remove('special');
    console.log(subHeading.classList.contains('special'));  // false
    

    console.log(mainHeading.tagName);
    console.log(mainHeading.nodeType);
    console.log(mainHeading.childNodes[0].nodeType);
    mainHeading.innerHTML = '<span>' + mainHeading.innerHTML + '</span>';
    mainHeading.outerHTML = '<p>' + mainHeading.innerHTML + '</p>';

    subHeading.textContent = 'I love Envato!';

    subHeading.setAttribute('contenteditable',true);
    subHeading.removeAttribute('contenteditable');
    console.log(subHeading.hasAttribute('contenteditable'));

    var heading = document.getElementsByTagName('header')[0];
    console.log(heading.childNodes.length)

    var x, length;
    for (x = 0, length = heading.childNodes.length; x < length; x += 1) {
	if (heading.childNodes[x].nodeType === 1) {
	    console.log('I am a ' + heading.childNodes[x].tagName);
	}
    }

    console.log(heading.children.length);
    
    console.log(heading.children[0].nodeName);
    console.log(heading.firstChild.nodeName);

    console.log(subHeading.parentNode.nodeName);

    console.log(heading.firstChild.nextSibling.nodeName);
    console.log(heading.lastChild.previousSibling.nodeName);

    document.body.appendChild(subHeading);
    document.body.insertBefore(subHeading,heading);

    document.body.removeChild(heading);

    if (document.body.contains(heading)) {
	document.body.removeChild(heading);
    }

    var substitute = document.createElement('i');
    substitute.textContent = 'I have been swapped in';
    document.body.replaceChild(substitute, subHeading);

    
}());