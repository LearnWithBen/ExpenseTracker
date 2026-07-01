const menuBtn = document.querySelector('.js-menu-btn');
const closeNav = document.querySelector('.js-close-nav-btn');
const leftNav = document.querySelector('.js-left-nav');
const loginForm = document.querySelector('.login-active');
const signupForm = document.querySelector('.signup-close');
const signupBtn = document.querySelector('.js-signup-btn');
const signupNextBtn = document.querySelector('.js-next-btn');
const signupPreviousBtn = document.querySelector('.js-previous-btn');
let signupStep;
const step1 = document.querySelector('.step1-close');
const step2 = document.querySelector('.step2-close');

menuBtn.addEventListener('click', () => {
  leftNav.classList.replace('close-side-nav', 'open-side-nav');
});
closeNav.addEventListener('click', () => {
  leftNav.classList.replace('open-side-nav', 'close-side-nav');
});
signupBtn.addEventListener('click', () => {
  loginForm.classList.replace('login-active', 'login-close');
  signupForm.classList.replace('signup-close', 'signup-active');

  if (signupForm.className === 'signup-active') {
    step1.classList.replace('step1-close', 'step1-active');
    signupStep = 'step1';
  }
});
signupNextBtn.addEventListener('click', () => {
  if (signupStep === 'step1') {
    step1.classList.replace('step1-active', 'step1-close');
    step2.classList.replace('step2-close', 'step2-active');
    signupStep = 'step2';
  }
})
signupPreviousBtn.addEventListener('click', () => {
  if (signupStep === 'step2') {
    step2.classList.replace('step2-active', 'step2-close');
    step1.classList.replace('step1-close', 'step1-active');
    signupStep = 'step1';
  } else if (signupStep === 'step1') {
    step1.classList.replace('step1-active', 'step1-close');
    signupStep = '';
    signupForm.classList.replace('signup-active', 'signup-close');
    loginForm.classList.replace('login-close', 'login-active');
  }
})