$(document).ready(function () {
  (function ($) {
    $('.profile .tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

    $('.profile .tab ul.tabs li a').click(function (g) {
      var tab = $(this).closest('.tab'),
        index = $(this).closest('li').index();

      tab.find('ul.tabs > li').removeClass('current');
      $(this).closest('li').addClass('current');

      tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').fadeOut();
      tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').fadeIn();


    });
  })(jQuery);


  $('.delete-order-btn').on('click', function () {
    $('.delete-order').addClass('open');
    $('body').addClass('no-scroll');
  });

  $(function () {
    $('.show-pass').on('click', function () {
      $(this).parent().find('input').focus();
      $(this).parent().find('input').attr('type', 'text');
      $(this).hide();
      $(this).next().show();
    });
    $('.hide-pass').on('click', function () {
      $(this).parent().find('input').focus();
      $(this).parent().find('input').attr('type', 'password');
      $(this).hide();
      $(this).prev().show();
    });
  });

  if (window.matchMedia('(max-width: 575px)').matches) {
    $('.profile .tabs li').removeClass('current');
    $('.profile .tabs li').removeClass('current');
    $('.profile .tabs li a').on('click', function () {
      $('.profile .profile__col:first-child').hide();
      $('.profile .profile__wrap').prev().hide();
    });
    $('.back').on('click', function () {
      $('.profile .profile__col:first-child').show();
      $('.profile .profile__wrap').prev().show();
      $('.profile .tabs_item').hide();
    });
  }

  $('.back--back').on('click', function () {
    window.location.href = 'profile.html#orders';
  })


  if (window.location.href.indexOf("#orders") > -1) {
    $("#orders-js").trigger("click");
  }


});