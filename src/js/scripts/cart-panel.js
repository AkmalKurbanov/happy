$(document).ready(function () {
  $('.cart-js').on('click', function (e) {
    $('div').removeClass('mm-page mm-slideout');
    e.preventDefault();
    $('#basket-panel').addClass('open');
    $('body').addClass('layer no-scroll');
  });
  $('.close-btn').on('click', function () {
    $('#basket-panel').removeClass('open');
    $('body').removeClass('layer no-scroll');
  });

  $(document).on('change', ".cart__points-swich input", function () {
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
    $(document).on('keyup', '.activation input', function () {
      if ($(this).val() != '') {
        $(this).parent().addClass('active');
      } else {
        $(this).parent().removeClass('active');
      }
    });
  });


  $(document).on('mouseover', '.cart__total-info', function () {
    $(this).parent().find('.cart__total-info-dropdown').addClass('open');
  });
  $(document).on('mouseout', '.cart__total-info-dropdown', function () {
    $(this).removeClass('open');
  });


});