  var $easyzoom = $('.easyzoom').easyZoom();

  var api1 = $easyzoom.filter('.easyzoom--with-thumbnails').data('easyZoom');

  $('.product-detail__thumb a').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    $('.product-detail__thumb a').not(this).removeClass('active');
    $(this).addClass('active');

    api1.swap($this.data('standard'), $this.attr('href'));

    let src = $('.product-detail__gallery-main-img .standart').attr('src');
    $('.product-detail__popup-img .product-detail__gallery-main-img .standart').attr('src', src);

  });


  $('.standart').on('click', function () {
    $('.product-detail__popup-img').addClass('open');
    $('body').addClass('no-scroll');
  });

  $(document).on("click", ".mobile-trigger-easyzoom", function () {
    $('.product-detail__popup-img').addClass('open');
    $('body').addClass('no-scroll');
  });

  $('.close-btn').on('click', function () {
    $('.product-detail__popup-img').removeClass('open');
  });





  if (window.matchMedia('(max-width: 575px)').matches) {
    $('.product-detail__gallery-main-img').append('<div class="mobile-trigger-easyzoom"></div>');
  } else {
    $('.mobile-trigger-easyzoom').remove();
  }



  $(window).on('resize', function () {
    if (window.matchMedia('(max-width: 575px)').matches) {
      $('.product-detail__gallery-main-img').append('<div class="mobile-trigger-easyzoom"></div>');
    } else {
      $('.mobile-trigger-easyzoom').remove();
    }

  });