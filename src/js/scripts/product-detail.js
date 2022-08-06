$(document).ready(function () {
  $('.product-detail__description-more').on('click', function () {
    $('#product-desc').addClass('open');
    $('body').addClass('no-scroll');
  });
  $('.product-detail__credit-bank-more').on('click', function () {
    $('#bank-desc').addClass('open');
    $('body').addClass('no-scroll');
  });

  $('.close-btn').on('click', function () {
    $('.product-detail__popup-desc').removeClass('open');
    $('body').removeClass('no-scroll');
  });

  $('.products__item-status').on('mouseover', function () {
    $(this).find('.products__item-status-dropdown').addClass('open');
  });
  $('.products__item-status-dropdown').on('mouseout', function () {
    $(this).removeClass('open');
  });


  (function ($) {
    $('.product-detail .tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

    $('.product-detail .tab ul.tabs li a').click(function (g) {
      var tab = $(this).closest('.tab'),
        index = $(this).closest('li').index();

      tab.find('ul.tabs > li').removeClass('current');
      $(this).closest('li').addClass('current');

      tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
      tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

      g.preventDefault();
    });
  })(jQuery);

});

if (window.matchMedia('(max-width: 575px)').matches) {
  $('.product-detail__col').eq(2).appendTo('.product-detail__col:eq(1) .product-detail__section:eq(1)');
} else {
  $('.product-detail__col .product-detail__col').appendTo('.product-detail__wrap');
}
$(window).on('resize', function () {
  if (window.matchMedia('(max-width: 575px)').matches) {
    $('.product-detail__col').eq(2).appendTo('.product-detail__col:eq(1) .product-detail__section:eq(1)');
  } else {
    $('.product-detail__col .product-detail__col').appendTo('.product-detail__wrap');
  }
});