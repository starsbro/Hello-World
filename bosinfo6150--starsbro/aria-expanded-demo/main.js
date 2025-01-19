"use strict";

(function() {

  const state = {
    openNavTopic: null,  // This holds node references, not ideal
  };                     // Challenge! Instead have some identifier like id or a dataset property

  const bodyEl = document.querySelector('body');
  bodyEl.addEventListener('click', (e) => { // using 'body' to catch all "click off" events
    if (e.target.classList.contains('menu__topic')){
      if (state.openNavTopic === e.target) {
        state.openNavTopic = null;
      } else {
        state.openNavTopic = e.target;
      }
      render();
    } else {
      state.openNavTopic = null;
      render();
    }
  });

  function render() {
    // Loop over .menu__items since each .menu__topic and .submenu are in them
    document.querySelectorAll('.menu__item').forEach( menuItemEl => {
      const topicEl = menuItemEl.querySelector('.menu__topic');
      const submenuEl = menuItemEl.querySelector('.submenu');

      if(state.openNavTopic === topicEl) {
        submenuEl.classList.add('submenu--open'); // Challenge: Can you use avoid adding/removing a class at all?
        topicEl.setAttribute('aria-expanded', 'true');
      } else {
        submenuEl.classList.remove('submenu--open');
        topicEl.setAttribute('aria-expanded', 'false');
      }
    });
  }

})();
