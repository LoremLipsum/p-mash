$(document).ready(function (){
  var btn = $('.intro__btn-down');
  var content = $('.problems');

    btn.click(function (){
      $('html, body').animate({
        scrollTop: content.offset().top
      }, 500);
    });
});
