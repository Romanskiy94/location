'use strict';

const goToAboutButton = document.getElementById('about');

goToAboutButton.onclick = function () {
    location.assign( `${location.origin}${location.pathname ==="/"?"pages/about.html":"/"}`);

};