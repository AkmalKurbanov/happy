$(document).ready(function () {
  $('.add-to-basket').on('click', function () {
    $(this).next().find('.counter').val() + 1;
    $(this).parent().find(".count-plus").trigger("click");
  });
  $(document).on('click', '.products__item .count-plus, .product-detail .count-plus', function () {
    $(this).prev().find('.counter').val(+$(this).prev().find('.counter').val() + 1);
    if ($(this).prev().find('.counter').val() >= 2) {
      $(this).parent().find('.count-minus').show();
      $(this).parent().find('.products__item-counter-trash').hide();
    }
  });
  $(document).on('click', '.products__item .count-minus, .product-detail .count-minus', function () {
    if ($(this).next().find('.counter').val() <= 2) {
      $(this).prev().show();
      $(this).hide();
      $(this).next().find('.counter').val(+$(this).next().find('.counter').val() - 1);
    } else if ($(this).next().find('.counter').val() >= 2) {
      $(this).next().find('.counter').val(+$(this).next().find('.counter').val() - 1);
    }
  });
  // $(document).on('click', '.slide-panel .count-plus', function () {
  //   $(this).prev().find('.counter').val(+$(this).prev().find('.counter').val() + 1);
  //   if ($(this).prev().find('.counter').val() == 2) {
  //     $(this).parent().find('.count-minus').css('pointer-events', 'inherit');
  //   }
  // });
  // $(document).on('click', '.slide-panel .count-minus', function () {
  //   $(this).next().find('.counter').val(+$(this).next().find('.counter').val() - 1);

  //   if ($(this).next().find('.counter').val() == 1) {
  //     $(this).css('pointer-events', 'none');
  //   }
  // });



  $('.cart .cart__item').each(function (index) {
    if ($(this).find('.counter').val() == 1) {
      $(this).find('.count-minus').css('pointer-events', 'none');
    }
  });


  $('.add-to-basket').on('click', function () {
    $(this).hide();
    $(this).next('.products__item-counter').addClass('open');
  });

  $('.products__item-counter-trash').on('click', function () {
    $(this).parent().find(".count-minus").trigger("click");
    $(this).parent().parent().find(".add-to-basket").show();
    $(this).parent().removeClass('open');
  });


  var swiper = new Swiper(".products-js", {
    allowTouchMove: false,
    breakpoints: {
      "0": {
        slidesPerView: 2,
        spaceBetween: 8,
        allowTouchMove: true,
      },
      "580": {
        slidesPerView: 3,
        spaceBetween: 8,
      },
      "768": {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      "1200": {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    }
  });





  $(document).on('click', '.cart__item .count-plus', function () {
    $(this).prev().find('.counter').val(+$(this).prev().find('.counter').val() + 1);
    $(this).parent().find('.count-minus').css('pointer-events', 'inherit');
  });
  $(document).on('click', '.cart__item .count-minus', function () {
    $(this).next().find('.counter').val(+$(this).next().find('.counter').val() - 1);
    if ($(this).next().find('.counter').val() < 2) {
      $(this).css('pointer-events', 'none');
    }
  });



});