$(document).ready(function () {
  $('.catalog-trigger-js').on('click', function () {
    $('.mm-btn--prev.mm-navbar__btn').html('<span>Вернуться назад</span>');
  });
  new Mmenu("#catalog-menu", {

    navbars: [{
      content: ["title", "prev", "close"],

    }, ],
    navbar: {
      title: "Каталог"
    },
    "offCanvas": {
      "position": "left-front"
    },
    "theme": "white-contrast"
  }, {
    language: "ru"
  });
});