$(document).ready(function () {
  $('.basket-js').on('click', function (e) {
    $('.wrapper').removeClass('mm-page mm-slideout');
    e.preventDefault();
    $('#basket-panel').addClass('open');
    $('body').addClass('layer no-scroll');
  });
  $('.close-btn').on('click', function () {
    $('#basket-panel').removeClass('open');
    $('body').removeClass('layer no-scroll');
  });

});