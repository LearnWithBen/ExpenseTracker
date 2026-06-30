const menuBtn = document.querySelector('.js-menu-btn');
const closeNav = document.querySelector('.js-close-nav-btn');
const leftNav = document.querySelector('.js-left-nav');

menuBtn.addEventListener('click', () => {
  leftNav.classList.replace('close-side-nav', 'open-side-nav');
});
closeNav.addEventListener('click', () => {
  leftNav.classList.replace('open-side-nav', 'close-side-nav');
});