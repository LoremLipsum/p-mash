'use strict';

(function() {

  var header = document.querySelector('.header');
  var btnSm = header.querySelector('.js-search-sm-open');
  var fieldSm = header.querySelector('.js-search-sm');
  var btnLg = header.querySelector('.js-search-lg-open');
  var fieldLg = header.querySelector('.js-search-lg');
  var btnsSubmit = header.querySelectorAll('.js-search-submit');

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


  for (var i = 0; i < btnsSubmit.length; i += 1) {
    btnsSubmit[i].addEventListener('click', function(e) {
      e.preventDefault();
      e.currentTarget.parentNode.parentNode.classList.remove('active');
    });
  }

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
