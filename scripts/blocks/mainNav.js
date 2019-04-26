'use strict';

(function() {

  var dialog = document.querySelector('.js-main-nav');
  // var btnToggle = document.querySelector('.js-toggle-nav');
  var btnOpen = document.querySelector('.js-open-nav');
  var btnClose = document.querySelector('.js-close-nav');
  var overlay = document.querySelector('.js-main-nav-overlay');
  var ESC = 27;

  var open = function() {
    dialog.classList.add('active');
    overlay.classList.add('active');
  };

  // var toggle = function() {
  //   dialog.classList.toggle('active');
  //   btnToggle.classList.toggle('active');
  //   overlay.classList.toggle('active');
  // };

  var close = function() {
    dialog.classList.remove('active');
    overlay.classList.remove('active');
    // btnToggle.classList.remove('active');
  }

  var onOpenClick = function(e) {
    e.preventDefault();
    open();
  };

  var onToggleClick = function(e) {
    e.preventDefault();
    toggle();
  };

  var onCloseClick = function(e) {
    e.preventDefault();
    close();
  };

  var onEscKeyup = function(e) {
    if (e.keyCode === ESC) {
      e.preventDefault();
      close();
    }
  };

  // btnToggle.addEventListener('click', onToggleClick);
  btnOpen.addEventListener('click', onOpenClick);
  overlay.addEventListener('click', onCloseClick);
  btnClose.addEventListener('click', onCloseClick);
  document.addEventListener('keyup', onEscKeyup);

})();
