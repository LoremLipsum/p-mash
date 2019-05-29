'use strict';

(function() {

  var header = document.querySelector('.header');
  var btnSm = header.querySelector('.js-search-sm-open');
  var fieldSm = header.querySelector('.js-search-sm');
  var btnLg = header.querySelector('.js-search-lg-open');
  var fieldLg = header.querySelector('.js-search-lg');
  var btnSubmitSm = fieldSm.querySelector('.js-search-submit');
  var btnSubmitLg = fieldLg.querySelector('.js-search-submit');
  var btnCLose = fieldSm.querySelector('.js-close-search');

  var ESC = 27;

  var open = function(item) {
    item.classList.add('active');
  }

  var close = function(item) {
    item.classList.remove('active');
  }

  btnSm.addEventListener('click', function(e) {
    e.preventDefault();
    open(fieldSm);
  });

  btnLg.addEventListener('click', function(e) {
    e.preventDefault();
    open(fieldLg);
  });

  btnSubmitSm.addEventListener('click', function(e) {
    e.preventDefault();
    close(fieldSm);
  });

  btnCLose.addEventListener('click', function(e) {
    e.preventDefault();
    close(fieldSm);
  });

  btnSubmitLg.addEventListener('click', function(e) {
    e.preventDefault();
    close(fieldLg);
  });

  var onEscKeyup = function(e) {
    if (e.keyCode === ESC) {
      e.preventDefault();
      if (fieldSm.classList.contains('active')) {
        close(fieldSm);
      }
      if (fieldLg.classList.contains('active')) {
        close(fieldLg);
      }
    }
  };

  document.addEventListener('keyup', onEscKeyup);

})();
