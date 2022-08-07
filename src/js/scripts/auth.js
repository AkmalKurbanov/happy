$(document).ready(function () {
  (function ($) {
    $('.auth .tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

    $('.auth .tab ul.tabs li a').click(function (g) {
      var tab = $(this).closest('.tab'),
        index = $(this).closest('li').index();

      tab.find('ul.tabs > li').removeClass('current');
      $(this).closest('li').addClass('current');

      tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').hide();
      tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').show();


    });
  })(jQuery);

  $('.log-in').on('click', function () {
    $('.auth').addClass('open');
    $('body').addClass('no-scroll');
  });
  $('.close-btn').on('click', function () {
    $('.auth').removeClass('open');
  });

  $('.close-btn').on('click', function () {
    $('.forgot').removeClass('open');
  })
  $('.close-btn').on('click', function () {
    $('.confirm').removeClass('open');
  })
  $('.close-btn').on('click', function () {
    $('.password').removeClass('open');
  })


});