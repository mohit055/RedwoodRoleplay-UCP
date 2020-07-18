let getSignUp = document.querySelector(".sign-up")
let getModalBg = document.querySelector(".modal-bg")
let getModalClose = document.querySelector(".modal-close")

getSignUp.addEventListener('click', function() {
    getModalBg.classList.add('modal-active');
})
getModalClose.addEventListener('click', function() {
    getModalBg.classList.remove('modal-active');
})


