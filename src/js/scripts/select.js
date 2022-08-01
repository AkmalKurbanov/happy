$(document).ready(function () {

  $('.select').on('click', function () {
    $(this).find('.select__dropdown').toggleClass('open');
  });
  $('.select__option').on('click', function () {
    let optionVal = $(this).attr('data-val');
    $(this).parent().parent().find('.select__selected').attr('data-val', optionVal);
    $(this).parent().parent().find('.select__selected').html(optionVal);
  });


});