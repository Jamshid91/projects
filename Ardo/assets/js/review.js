$(function () {
    $('.input--tel').mask('+7 (999) 999-99-99');
    
    $('.input--tel').on('focus', function () {
       if ($(this).val().length === 0) {
         $(this).val('+7 (');
       }
    });
  });