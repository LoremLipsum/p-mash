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
