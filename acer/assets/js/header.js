const menu = document.querySelector('.menu'),
      menuBtn = document.querySelector('.menu__btn'),
      cityBtn = document.querySelectorAll('.check-city__btn'),
      thanksPopUp = document.querySelector('.popUp.thanks'),
      thanksPopUpClose = document.querySelector('.popUp.thanks .popUp__close'),
      cityPopUp = document.querySelector('.popUp.city'),
      activeCity = document.querySelectorAll('.header-city__text .city'),
      cityPopUpClose = document.querySelector('.popUp.city .popUp__close'),
      cityPopUpLists = document.querySelectorAll('.popUp.city ul li'),
      body = document.querySelector('body')


menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('btnClick');
    menu.classList.toggle('d-none');
    body.classList.toggle('bodyStopScroll');
});

window.addEventListener('click', (e) => {
    if(e.target == menu) {
        menuBtn.classList.toggle('btnClick');
        menu.classList.toggle('d-none');
        body.classList.toggle('bodyStopScroll');  
    }
});


cityBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        cityPopUp.classList.remove('d-none')
    });
})

cityPopUpClose.addEventListener('click', () => {
    cityPopUp.classList.add('d-none')
  });

  thanksPopUpClose.addEventListener('click', () => {
    thanksPopUp.classList.add('d-none')
  });

  cityPopUpClose.addEventListener('click', () => {
    thanksPopUp.classList.add('d-none')
  });
  
  window.addEventListener('click', (e) => {
    if(e.target == cityPopUp) {
        cityPopUp.classList.add('d-none')
    }
    if(e.target == thanksPopUp) {
        thanksPopUp.classList.add('d-none')
    }
  });

  cityPopUpLists.forEach(city => {
    city.addEventListener('click', () => {
        activeCity.forEach(active => {
            active.textContent = city.textContent;
        })
        cityPopUp.classList.add('d-none')
    })
  })