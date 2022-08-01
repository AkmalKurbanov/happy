$(document).ready(function () {

  $('.settings-credit-js').on('click', function () {
    $('.offer-credit').addClass('open');
    $('body').addClass('no-scroll');
  });
  $('.close-btn').on('click', function () {
    $('.offer-credit').removeClass('open');
  });
});