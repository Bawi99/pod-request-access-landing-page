'use strict';

document.addEventListener('DOMContentLoaded', () => {

  const email = document.getElementById('email');
  const error = document.querySelector('.error');

  document.getElementById('login').onsubmit = (event) => {
    let isInvalid = true;
    let errorMsg = '';
    const emailRegex = /^([a-zA-Z0-9._-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,4})$/;
    const emailValue = email.value.trim();
    if (!emailValue) {
      errorMsg = 'Oops! Please add your email';
    } else if (!emailRegex.test(emailValue)) {
      errorMsg = 'Oops! Please check your email';
    } else {
      isInvalid = false;
      error.textContent = '';
    }
    email.value = emailValue;

    if (isInvalid) {
      event.preventDefault();
      error.classList.add('popUp');
      error.textContent = errorMsg;
      email.focus();
      email.select();
    }
  };

  document.getElementById('email').onchange = () => {
    error.classList.remove('popUp');
  };
});