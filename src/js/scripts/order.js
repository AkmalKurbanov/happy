$(document).ready(function () {

  $('.settings-credit-js').on('click', function () {
    $('.offer-credit').addClass('open');
    $('body').addClass('no-scroll');
  });
  $(document).on('click', '.close-btn', function () {
    $('.offer-credit').removeClass('open');
  });
});