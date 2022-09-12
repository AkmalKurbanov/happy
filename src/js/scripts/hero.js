$(document).ready(function () {
  var swiper = new Swiper(".hero-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    allowTouchMove: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});