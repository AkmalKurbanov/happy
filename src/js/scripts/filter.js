$(document).ready(function () {
  $('.catalog__trigger-dropdown').on('click', function () {
    $(this).parent().find('ul').slideToggle();
  });
  if (window.matchMedia('(max-width: 767px)').matches) {
    $('.catalog__control-item-selected').on('click', function () {
      $(this).parent().find('.catalog__control-item-list').addClass('open');
    });
    $('.catalog__control-item').on('click', function () {
      let val = $(this).attr('data-val');
      console.log(val);
      $(this).parent().parent().find('.catalog__control-item-selected div').attr('data-val', val);
      $(this).parent().parent().find('.catalog__control-item-selected div').text(val);
    });
    $('.catalog__control-item').on('click', function () {
      $('.catalog__control-item-list').removeClass('open');
    });

  } else {
    $(this).parent().find('.catalog__control-item-list').removeClass('open');
  }
  if (window.matchMedia('(max-width: 575px)').matches) {
    $('.catalog__col:first').remove();
  }

  $('.catalog__filter-trigger').on('click', function () {
    $('.filter').addClass('open');
    $('body').addClass('no-scroll');
  });
  $('.close-btn').on('click', function () {
    $('.filter, .category-mobile, .price-mobile, .brand-mobile').removeClass('open');
    $('body').removeClass('no-scroll');
  });

  $('.category-mobile-js').on('click', function () {
    $('.category-mobile').addClass('open');
    $('body').addClass('no-scroll');
  });
  $('.price-mobile-js').on('click', function () {
    $('.price-mobile').addClass('open');
    $('body').addClass('no-scroll');
  });
  $('.brand-mobile-js').on('click', function () {
    $('.brand-mobile').addClass('open');
    $('body').addClass('no-scroll');
  });

  $('.category-mobile .back, .price-mobile .back, .brand-mobile .back').on('click', function () {
    $('.category-mobile, .price-mobile, .brand-mobile').removeClass('open');
    $('.filter').addClass('open');
  });




});