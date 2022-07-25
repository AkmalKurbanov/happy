$(document).ready(function () {
  $('.products__item, .product-detail__price-block').each(function (index) {
    let price = Number($.trim($(this).find('.actual-price').attr('data-val')));
    let percent = Number($.trim($(this).find('.discount span').attr('data-val')));
    let percentSum = (price * percent / 100);
    let totalPrice = (price - percentSum).toFixed();
    $(this).find('.actual-price span').html(totalPrice);
  });
  $('.add-to-basket').on('click', function () {
    $(this).next().find('.counter').val() + 1;
    $(this).parent().find(".count-plus").trigger("click");
  });
  $(document).on('click', '.count-plus', function () {
    $(this).prev().find('.counter').val(+$(this).prev().find('.counter').val() + 1);
    if ($(this).prev().find('.counter').val() >= 2) {
      $(this).parent().find('.count-minus').show();
      $(this).parent().find('.products__item-counter-trash').hide();
    }
  });
  $(document).on('click', '.count-minus', function () {
    if ($(this).next().find('.counter').val() <= 2) {
      $(this).prev().show();
      $(this).hide();
      $(this).next().find('.counter').val(+$(this).next().find('.counter').val() - 1);
    } else if ($(this).next().find('.counter').val() >= 2) {
      $(this).next().find('.counter').val(+$(this).next().find('.counter').val() - 1);
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



});