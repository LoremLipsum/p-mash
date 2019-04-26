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
