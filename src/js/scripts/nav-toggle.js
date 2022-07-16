$(document).ready(function () {
  $('.header__nav-trigger').on('click', function () {
    $('.toggle-fade').toggleClass('open');
  });


  jQuery(function ($) {
    $(document).mouseup(function (e) {
      var div = $(".toggle-fade, .header__nav-trigger");
      if (!div.is(e.target) &&
        div.has(e.target).length === 0) {
        div.removeClass('open');
      }
    });
  });
});