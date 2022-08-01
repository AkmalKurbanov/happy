$(document).ready(function () {
  $('.cart-js').on('click', function (e) {
    $('.wrapper').removeClass('mm-page mm-slideout');
    e.preventDefault();
    $('#basket-panel').addClass('open');
    $('body').addClass('layer no-scroll');
  });
  $('.close-btn').on('click', function () {
    $('#basket-panel').removeClass('open');
    $('body').removeClass('layer no-scroll');
  });
  $(".cart__points-swich input").on('change', function () {
    if (this.checked) {
      $('.points-input').show();
    } else {
      $('.points-input').hide();
    }
  });
  if ($('.cart__points-swich input').is(':checked')) {
    $('.points-input').show();
  }

  $(function () {
    $('.activation input').on('keyup', function () {
      if ($(this).val() != '') {
        $(this).parent().addClass('active');
      } else {
        $(this).parent().removeClass('active');
      }
    });
  });


  $('.cart__total-info').on('mouseover', function () {
    $(this).parent().find('.cart__total-info-dropdown').addClass('open');
  });
  $('.cart__total-info-dropdown').on('mouseout', function () {
    $(this).removeClass('open');
  });
  $('')


});