'use strict';

(function() {
  var btn = document.querySelector('.js-aside-nav-button');

  if(btn) {
    btn.addEventListener('click', function(e) {
      e.currentTarget.parentNode.classList.toggle('active');
    });
  }

})();

$(document).ready(function (){
  var btn = $('.js-button-down');
  var content = $('.js-down');

  btn.click(function (){
    $('html, body').animate({
      scrollTop: content.offset().top
    }, 500);
  });
});

'use strict';

(function() {
  var btn = document.querySelector('.js-catalog-nav-button');

  if(btn) {
    btn.addEventListener('click', function(e) {
      e.currentTarget.parentNode.classList.toggle('active');
    });
  }

})();

'use strict';

(function() {
  var inputsTel = document.querySelectorAll('input[type="tel"]');
  var textareas = document.querySelectorAll('textarea');

  for (var i = 0; i < inputsTel.length; i += 1) {
    var maskTel = new IMask(
      inputsTel[i], {
        mask: '+{7}(000)000-00-00',
      }
    );
  }

  for (var i = 0; i < textareas.length; i += 1) {
    textareas[i].innerHTML = textareas[i].innerHTML.trim();
  }

})();

$(document).ready(function (){
  var header = $('.js-top-header');
  var SCROLL_HEIGHT = 200;

  $(window).scroll(function(){
    if ( $(this).scrollTop() > SCROLL_HEIGHT ){
      header.addClass('active');
    } else if($(this).scrollTop() <= SCROLL_HEIGHT && header.hasClass('active')) {
      header.removeClass('active');
    }
  });
});

objectFitImages();
svg4everybody();
picturefill();
// new WOW().init();

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

(function($) {
	'use strict';
	$(function() {

    var btns = $('.js-show-more-button');
    var items = '.js-show-more-item-2:nth-child(n+3)';

    if (btns) {
      btns.on('click', function(e){
        e.preventDefault();
        $(this).parents('.js-show-more').find(items).toggleClass('active');
      });
    }

	});
})(jQuery);

(function($) {
	'use strict';
	$(function() {

    $('.js-catalog-slider').slick({
      arrows: true,
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: true,
			autoplaySpeed: 5000,
      infinite: true,
       adaptiveHeight: true,
      prevArrow: '<button class="control control--prev" type="button" tabindex="0" aria-lable="Назад"></button>',
      nextArrow: '<button class="control control--next" type="button" tabindex="0" aria-lable="Вперёд"></button>',
      responsive: [
        {
          breakpoint: 1220,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 920,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    });

    $('.js-slider-brends').slick({
      arrows: true,
      dots: false,
      slidesToShow: 8,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
      prevArrow: '<button class="control control--prev" type="button" tabindex="0" aria-lable="Назад"><svg class="control__icon" width="30" height="20"><use xlink:href="assets/images/sprites/sprite.svg#arrow"></use></svg></button>',
      nextArrow: '<button class="control control--next" type="button" tabindex="0" aria-lable="Вперёд"><svg class="control__icon" width="30" height="20"><use xlink:href="assets/images/sprites/sprite.svg#arrow"></use></svg></button>',
      responsive: [
        {
          breakpoint: 1220,
          settings: {
            slidesToShow: 7,
          }
        },
        {
          breakpoint: 1020,
          settings: {
            slidesToShow: 6,
          }
        },
        {
          breakpoint: 920,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 820,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    });

	});
})(jQuery);

'use strict';

(function() {

  var tabs = document.querySelector('.js-tabs');

  if(tabs) {
    var btns = tabs.querySelectorAll('.js-tabs-button');
    var contents = tabs.querySelectorAll('.js-tabs-content');

    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function (e) {
        e.preventDefault();
        var tab = e.currentTarget;
        var atr = tab.getAttribute('data-tab');

        for (var j = 0; j < contents.length; j++) {
          contents[j].classList.remove('active');
        };

        for (var j = 0; j < btns.length; j++) {
          btns[j].parentNode.classList.remove('active');
        };

        tab.parentNode.classList.add('active');
        document.querySelector("." + atr).classList.add('active');
      });
    }
  }

})();
