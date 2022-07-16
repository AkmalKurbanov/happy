$(document).ready(function () {
  $('.catalog-trigger-js').on('click', function () {
    $('.catalog-menu').addClass('open');
    $('body').addClass('no-scroll layer');
  });
  $('.catalog-menu__close').on('click', function () {
    $('.catalog-menu').removeClass('open');
    $('body').removeClass('no-scroll layer');
  });
  jQuery(function ($) {
    $(document).mouseup(function (e) {
      var div = $(".catalog-menu");
      if (!div.is(e.target) &&
        div.has(e.target).length === 0) {
        div.removeClass('open');
        $('body').removeClass('no-scroll layer');
      }
    });
  });
});