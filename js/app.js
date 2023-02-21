const burgerMenu = document.querySelector('.burger-menu');
const burgerNavigation = document.querySelector('.nav');
const burgerMenuItems = burgerNavigation.querySelectorAll('a');
const body = document.body;

burgerMenu.addEventListener('click', (e) => {
  burgerNavigation.classList.toggle('nav__active');
  burgerMenu.classList.toggle('burger-menu__active');
  body.classList.toggle('stop-scroll');
  burgerClose();
});

const burgerClose = () => {
  burgerMenuItems.forEach((el) => {
    el.addEventListener('click', (e) => {
      burgerNavigation.classList.remove('nav__active');
      burgerMenu.classList.remove('burger-menu__active');
      body.classList.remove('stop-scroll');
    });
  });
}


const modalButtons = document.querySelectorAll('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const modalCloseButtons = document.querySelectorAll('.close-modal-btn');
const modals = document.querySelectorAll('.modal');

modalButtons.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');
    document.querySelector(`[data-target="${path}"]`).classList.add('modal__active');
    modalOverlay.classList.add('modal-overlay__active');
    body.classList.add('stop-scroll');
    modalClose();
  });
});

const modalClose = () => {
  modalOverlay.addEventListener('click', (e) => {
    if (e.target == modalOverlay) {
      modalOverlay.classList.remove('modal-overlay__active');
      modals.forEach((el) => {
        el.classList.remove('modal__active');
      });
      body.classList.remove('stop-scroll');
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modalOverlay.classList.remove('modal-overlay__active');
      modals.forEach((el) => {
        el.classList.remove('modal__active');
      });
      body.classList.remove('stop-scroll');
    }
  });

  modalCloseButtons.forEach((el) => {
    el.addEventListener('click', (e) => {
      modalOverlay.classList.remove('modal-overlay__active');
      modals.forEach((el) => {
        el.classList.remove('modal__active');
      });
      body.classList.remove('stop-scroll');
    });
  });
}

const signupModal = document.querySelector('.signup-modal');
const authModal = document.querySelector('.auth-modal');
const signupButton = document.querySelector('.signup-btn');
const loginButton = document.querySelector('.login-btn');

signupButton.addEventListener('click', (e) => {
  signupModal.classList.add('modal__active');
  authModal.classList.remove('modal__active');
});

loginButton.addEventListener('click', (e) => {
  authModal.classList.add('modal__active');
  signupModal.classList.remove('modal__active');
})


// const anchors = document.querySellectorAll('a[href*="#"');
// anchors.forEach((el) => {
//   el.addEventListener('click', (e) => {
//     e.preventDefault();
//     const blockID = el.getAttribute('href') 
//     document.querySelector('' + blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     });
//     burgerMenu.classList.remove('burger-menu__active');
//     burgerNavigation.classList.remove('nav__active');
//   });
// });
