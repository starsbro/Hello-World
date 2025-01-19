"use strict";
(function() {
    const buttonEl = document.querySelector(".menu__toggle");
    const demoEl = document.querySelector('.submenu');

    buttonEl.addEventListener("click", function() {
        demoEl.classList.toggle('open'); // change classname to open/close dropdown menu.
        //test comment: console.log("Ow! I asked you not to touch!");
    });
})();