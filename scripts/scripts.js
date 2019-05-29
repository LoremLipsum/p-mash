'use strict';

(function() {
  var btn = document.querySelector('.js-aside-nav-button');

  if(btn) {
    btn.addEventListener('click', function(e) {
      e.currentTarget.parentNode.classList.toggle('active');
    });
  }

})();

(function($) {
	'use strict';
	$(function() {

    var btn = $('.js-button-down');
    var content = $('.js-down');

    btn.click(function (){
      $('html, body').animate({
        scrollTop: content.offset().top
      }, 500);
    });

  });
})(jQuery);

'use strict';

(function() {
  var btn = document.querySelector('.js-catalog-nav-button');

  if(btn) {
    btn.addEventListener('click', function(e) {
      e.currentTarget.parentNode.classList.toggle('active');
    });
  }

})();

(function($) {
	'use strict';
	$(function() {

    var btnsFooter = $('.js-footer-nav-dropdown-button');
    var btnsMainNav = $('.js-main-nav-dropdown-button');
    var btn;

    var initDropdown = function() {
      if ($(window).outerWidth() < 620) {
        btnsFooter.on('click', function(e){
          e.preventDefault();
          btn = $(this);
          btnsFooter.not(btn).parents('.js-footer-nav-dropdown').removeClass('active');
          btn.parents('.js-footer-nav-dropdown').toggleClass('active');
        });
      }

      if ($(window).outerWidth() < 1220) {
        btnsMainNav.on('click', function(e){
          e.preventDefault();
          btn = $(this);
          btnsMainNav.not(btn).parents('.js-main-nav-dropdown').removeClass('active');
          btn.parents('.js-main-nav-dropdown').toggleClass('active');
        });
      }
    }

    initDropdown();

    $(window).resize(function() {
      initDropdown();
    });

	});
})(jQuery);

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

(function($) {
	'use strict';
	$(function() {

    var headerTop = $('.js-header-top');
    var header = $('.js-header');
    var SCROLL_HEIGHT = 200;
    var lastScrollTop = 0;

    var initScroll = function () {
      if ($(window).outerWidth() < 1220) {
        $(window).scroll(function(e){
          var st = $(this).scrollTop();
          if (st > lastScrollTop || st < SCROLL_HEIGHT) {
            headerTop.removeClass('active');
          } else  {
            headerTop.addClass('active');
          }
          lastScrollTop = st;
        });
      }

      if ($(window).outerWidth() > 1219) {
        $(window).scroll(function(e){
          var st = $(this).scrollTop();
          if (st > lastScrollTop || st < SCROLL_HEIGHT) {
            header.removeClass('active');
          } else  {
            header.addClass('active');
          }
          lastScrollTop = st;
        });
      }
    }

    initScroll();

    $(window).resize(function() {
      initScroll();
    });

  });
})(jQuery);

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

'use strict';

(function() {

  var map = document.querySelector('#map');

  if(map) {
    ymaps.ready(function () {
      var map = new ymaps.Map('map', {
        center: [55.694429, 37.874302],
        zoom: 18,
        scrollZoom: false,
        controls: []
      }, {
        searchControlProvider: 'yandex#search'
      }),
      Placemark = new ymaps.Placemark([55.694429, 37.874302], {
        balloonContent: '140060, Московская обл., Люберецкий р-н., ул. Ленина, 52'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'assets/images/pin-icon.png',
        iconImageSize: [30, 40],
        iconImageOffset: [-15, -50],
      });

      map.geoObjects.add(Placemark);
      map.behaviors.disable('scrollZoom');
      map.controls.add('zoomControl');
      var roadcontrolState = map.controls.get('zoomControl').state.get('size');
      map.controls.get('zoomControl').options.set('size', 'small');
    });
  }

})();

'use strict';

(function() {

  var modals = document.querySelectorAll('.js-modal');

  if (modals.length) {
    var btnsClose = document.querySelectorAll('.js-modal-close');
    var overlays = document.querySelectorAll('.js-modal-overlay');

    var btnsCallback = document.querySelectorAll('.js-callback-button');
    var callback = document.querySelector('.js-modal-callback');
    var ESC = 27;

    var close = function() {
      for (var i = 0; i < modals.length; i += 1) {
        modals[i].classList.remove('active');
      }
    }

    // Закрывает модальное окно по клику на крестик
    for (var i = 0; i < btnsClose.length; i += 1) {
      btnsClose[i].addEventListener('click', function(e) {
        e.preventDefault();
        e.currentTarget.parentNode.parentNode.classList.remove('active');
      });
    }

    // Закрывает модальное окно по клику на оверлей
    for (var i = 0; i < overlays.length; i += 1) {
      overlays[i].addEventListener('click', function(e) {
        e.preventDefault();
        e.currentTarget.parentNode.classList.remove('active');
      });
    }

    var onEscKeyup = function(e) {
      if (e.keyCode === ESC) {
        e.preventDefault();
        close();
      }
    };

    document.addEventListener('keyup', onEscKeyup);

    for (var i = 0; i < btnsCallback.length; i += 1) {
      btnsCallback[i].addEventListener('click', function(e) {
        e.preventDefault();
        callback.classList.add('active');
      });
    }
  }

})();

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

(function($) {
	'use strict';
	$(function() {

    var btns = $('.js-show-button');
    var WIDTH = 880;

    if (btns.length) {
      var items = '.js-show-item';

      var show = function (className) {
        btns.on('click', function(e){
          e.preventDefault();
          $(this).parents(className).toggleClass('active');
          var text = $(this).text() === 'Скрыть' ? 'Смотреть больше' : 'Скрыть';
          $(this).text(text);
        });
      }

      var screenWidth = $(window).outerWidth();
      var catalogNav = $('.js-catalog-nav');


      if (catalogNav) {
        var showCatalogNav = function() {
          if (screenWidth < WIDTH && !catalogNav.hasClass('js-show-3-items')) {
            catalogNav.addClass('js-show-3-items');
            show('.js-catalog-nav');
          } else {
            catalogNav.removeClass('js-show-3-items');
          }
        }

        showCatalogNav();

        $(window).resize(function() {
          showCatalogNav();
        });
      }
    }

	})
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
      prevArrow: '<button class="control control--medium control--bg-gray control--prev" type="button" tabindex="0" aria-label="Назад"></button>',
      nextArrow: '<button class="control control--medium control--bg-gray control--next" type="button" tabindex="0" aria-label="Вперёд"></button>',
      responsive: [
        {
          breakpoint: 1220,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 2,
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

  var tabs = document.querySelectorAll('.js-tabs');
  var tabsSmall= document.querySelectorAll('.js-tabs-small');

  var switchTabs = function (item, btns, contents, classContents) {
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
        item.querySelector('.' + classContents + '.' + atr).classList.add('active');
      });
    }
  };

  var initTabs = function () {
    if(tabs) {
      for (var i = 0; i < tabs.length; i += 1) {
        var btnsTabs = tabs[i].querySelectorAll('.js-tabs-button');
        var contentsTabs = tabs[i].querySelectorAll('.js-tabs-content');
        switchTabs(tabs[i], btnsTabs, contentsTabs, 'js-tabs-content');
      }
    }
  }

  initTabs();

  // табы на мобильной версии
  var initTabsSmall = function() {
    if(parseInt(window.innerWidth, 10) < 920) {
      if(tabsSmall) {

        for (var i = 0; i < tabsSmall.length; i += 1) {
          var btnsTabsSmall = tabsSmall[i].querySelectorAll('.js-tabs-button');
          var contentTabsSmall = tabsSmall[i].querySelectorAll('.js-tabs-small-content');
          switchTabs(tabsSmall[i], btnsTabsSmall, contentTabsSmall, 'js-tabs-small-content');
        }
      }
    }
  };

  initTabsSmall();

  window.addEventListener('resize', function() {
    initTabsSmall();
  });

})();
