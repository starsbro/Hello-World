"use strict";
(function() {
    const buttonEl = document.querySelector(".hamburger-menu");
    const demoEl = document.querySelector('.submenu');

    buttonEl.addEventListener("click", function() {
        demoEl.classList.toggle('open'); // change classname to open/close dropdown menu.
    });
    
})();