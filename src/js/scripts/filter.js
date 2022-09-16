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






  $(document).on('click', '.catalog__filter-trigger', function () {
    $('.filter').addClass('open');
    $('body').addClass('no-scroll');
  });
  $(document).on('click', '.close-btn', function () {
    $('.filter, .category-mobile, .price-mobile, .brand-mobile').removeClass('open');
    $('body').removeClass('no-scroll');
  });

  $(document).on('click', '.category-mobile-js', function () {
    $('.category-mobile').addClass('open');
    $('body').addClass('no-scroll');
  });
  $(document).on('click', '.price-mobile-js', function () {
    $('.price-mobile').addClass('open');
    $('body').addClass('no-scroll');
  });
  $(document).on('click', '.brand-mobile-js', function () {
    $('.brand-mobile').addClass('open');
    $('body').addClass('no-scroll');
  });

  $(document).on('click', '.category-mobile .back, .price-mobile .back, .brand-mobile .back', function () {
    $('.category-mobile, .price-mobile, .brand-mobile').removeClass('open');
    $('.filter').addClass('open');
  });




});