const userNamePopUp = document.querySelector('.popUp.order .form-box .name'),
      userPhonePopUp = document.querySelector('.popUp.order .form-box .phone'),
      submitPopup = document.querySelector('.popUp.order button'),
      popUp = document.querySelector('.popUp.order'),
      popUpClose = document.querySelector('.popUp.order .popUp__close'),
      requestCalls = document.querySelectorAll('.order__btn')




      requestCalls.forEach(call => {
        call.addEventListener('click', () => {
            popUp.classList.remove('d-none')
        })
    })

popUpClose.addEventListener('click', () => {
  popUp.classList.add('d-none')
});

window.addEventListener('click', (e) => {
  if(e.target == popUp) {
    popUp.classList.add('d-none')
  }
})


submitPopup.addEventListener('click', () => {
    checkInputsPopUp();
    let successName = userNamePopUp.parentElement.children[2].classList;
    let successPhone = userPhonePopUp.parentElement.children[2].classList;

    if(successName == 'succes' && successPhone == 'succes') {
        submitPopup.type = 'submit'
    }

})

function checkInputsPopUp() {
    userNamePopUpValue = userNamePopUp.value.trim();
    userPhonePopUpValue = userPhonePopUp.value.trim();

    if(userNamePopUpValue === '' || userNamePopUpValue.length <= 2) {
        userNamePopUp.parentElement.classList.add('error')
      } else {
        userNamePopUp.style.border = '1px solid #1C47B8'
        userNamePopUp.parentElement.classList.remove('error');
        userNamePopUp.parentElement.children[2].classList.add('succes');
      }

      if(userPhonePopUpValue.length < 18) {
        userPhonePopUp.parentElement.classList.add('error')
      } else {
        userPhonePopUp.style.border = '1px solid #1C47B8'
        userPhonePopUp.parentElement.classList.remove('error');
        userPhonePopUp.parentElement.children[2].classList.add('succes');
      }
}
$('#phonePopUp').mask('+7 (999) 999-99-99');
