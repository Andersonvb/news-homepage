const navbarUl = document.querySelector('.navbar__ul');
const navbarIcon = document.querySelector('.navbar__icon');
const navbarCloseIcon = document.querySelector('.navbar__close-icon');

navbarIcon.addEventListener('click', () => {
  navbarUl.classList.add('slide-menu-to-left')
});

navbarCloseIcon.addEventListener('click', () => {
  navbarUl.classList.remove('slide-menu-to-left');
})