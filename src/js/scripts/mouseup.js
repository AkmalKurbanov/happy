$(document).ready(function () {
  jQuery(function ($) {
    $(document).mouseup(function (e) {
      var div = $(".catalog-menu, .product-detail__popup, .product-detail__popup-desc, .product-detail__popup-img, .slide-panel, .offer-credit, .delete-order__window, .auth, .filter");
      if (!div.is(e.target) &&
        div.has(e.target).length === 0) {
        div.removeClass('open');
        $('body').removeClass('no-scroll layer');
      }
    });
  });




  jQuery(function ($) {
    $(document).mouseup(function (e) {
      var div = $(".toggle-fade, .header__nav-trigger");
      if (!div.is(e.target) &&
        div.has(e.target).length === 0) {
        div.removeClass('open');
      }
    });
  });

  jQuery(function ($) {
    $(document).mouseup(function (e) {
      var div = $(".products__item-status-dropdown");
      if (!div.is(e.target) &&
        div.has(e.target).length === 0) {
        div.removeClass('open');
      }
    });
  });
  jQuery(function ($) {
    $(document).mouseup(function (e) {
      var div = $(".slide-panel");
      if (!div.is(e.target) &&
        div.has(e.target).length === 0) {
        div.removeClass('open');
      }
    });
  });
  jQuery(function ($) {
    $(document).mouseup(function (e) {
      var div = $(".cart__total-info-dropdown");
      if (!div.is(e.target) &&
        div.has(e.target).length === 0) {
        div.removeClass('open');
      }
    });
  });
  jQuery(function ($) {
    $(document).mouseup(function (e) {
      var div = $(".select__dropdown");
      if (!div.is(e.target) &&
        div.has(e.target).length === 0) {
        div.removeClass('open');
      }
    });
  });

  jQuery(function ($) {
    $(document).mouseup(function (e) {
      var div = $(".delete-order__window");
      if (!div.is(e.target) &&
        div.has(e.target).length === 0) {
        $('.delete-order').removeClass('open');
      }
    });
  });

  jQuery(function ($) {
    $(document).mouseup(function (e) {
      var div = $(".catalog__control-item-list");
      if (!div.is(e.target) &&
        div.has(e.target).length === 0) {
        div.removeClass('open');
      }
    });
  });




});