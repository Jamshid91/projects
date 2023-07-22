const formButtonS = document.querySelectorAll('.form__btn')

formButtonS.forEach(btn => {
  btn.addEventListener('click', () => {
    let inpVal = btn.previousElementSibling.children[0].value.length;
    let error = btn.previousElementSibling.children[2];
    
    if(inpVal < 18 || inpVal == 0) {
      btn.parentElement.classList.add('error');
      error.textContent = 'Некорректный формат номера'
    } else {
      btn.type = 'submit'
      btn.parentElement.classList.remove('error');
      error.textContent = ''
    }
  })
});

$(function () {
    $('.input--tel').mask('+7 (999) 999-99-99');
    
    $('.input--tel').on('focus', function () {
       if ($(this).val().length === 0) {
         $(this).val('+7 (');
       }
    });
  });

  const reviews = new Swiper('.reviews-swiper', {
    watchOverflow: true,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: '.reviews-next',
        prevEl: '.reviews-prev',
      },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
    }
  
  });