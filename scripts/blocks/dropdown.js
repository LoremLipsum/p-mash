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
