$(window).on('load', function () {
  $('#preloader').addClass('close');
  setTimeout(function () {
    $('#preloader').remove();
  }, 2000);
});

lottie.loadAnimation({
  container: document.querySelector('#preloader'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://assets9.lottiefiles.com/packages/lf20_pa2kzq5x.json'
});