$(window).on('load', function () {
  $('#preloader').addClass('close');
  setTimeout(function () {
    $('#preloader').remove();
  }, 2000);
});

