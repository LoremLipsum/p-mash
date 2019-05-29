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
