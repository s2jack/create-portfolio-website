/* ---------------- contact form variables ----------------*/

const form = document.querySelector('.contact-form');
const emailRegex = /^([a-z|\d])+@+([a-z]){2,}\.+([a-z)]{2,})/;
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name');
const msgInput = document.getElementById('message');
const emailErrorMessage = document.querySelector('.email-error');
const formErrorMessage = document.querySelector('.form-error');
const nameErrorMessage = document.querySelector('.name-error');
const messageErrorMessage = document.querySelector('.message-error');

/* ---------- Contact Form -------------- */

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (nameInput.value !== null && msgInput.value !== null && emailRegex.test(emailInput.value)) {
    form.submit();
    formErrorMessage.textContent = 'Succesfully sent';
    formErrorMessage.style.color = 'green';
    emailErrorMessage.style.display = 'none';
    nameErrorMessage.style.display = 'none';
    messageErrorMessage.style.display = 'none';
  } else {
    formErrorMessage.textContent = 'the form was not sent';

    if (!emailInput.value) {
      emailErrorMessage.textContent = 'email is required';
      emailErrorMessage.style.display = 'block';
    } else if (!emailRegex.test(emailInput.value)) {
      emailErrorMessage.textContent = 'the email input should follow this format : xyz@exe.com';
      emailErrorMessage.style.display = 'block';
    } else {
      emailErrorMessage.textContent = '';
      emailErrorMessage.style.display = 'none';
    }

    if (!nameInput.value) {
      nameErrorMessage.textContent = 'the name is required';
      nameErrorMessage.style.display = 'block';
    } else {
      nameErrorMessage.textContent = '';
      nameErrorMessage.style.display = 'none';
    }

    if (!msgInput.value) {
      messageErrorMessage.textContent = 'the message input is empty';
      messageErrorMessage.style.display = 'block';
    } else {
      messageErrorMessage.textContent = '';
      messageErrorMessage.style.display = 'none';
    }
  }
});