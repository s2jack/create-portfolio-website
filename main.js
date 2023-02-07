/* eslint-disable linebreak-style */

const hamimage = document.querySelector('#menubutton');
const shape01 = document.querySelector('#shape01');
const mobileMenu = document.querySelector('#mobile_menu');
const homeSec = document.querySelector('#home_sec');
const crossImg = document.querySelector('#close_icon');
const mobMenuItems = document.querySelectorAll('.mob_menu_item');

const menuOpen = () => {
  hamimage.style.display = 'none';
  shape01.style.display = 'none';
  mobileMenu.style.display = 'flex';
  homeSec.style.visibility = 'hidden';
};

const menuClose = () => {
  hamimage.style.display = 'flex';
  shape01.style.display = 'flex';
  mobileMenu.style.display = 'none';
  homeSec.style.visibility = 'visible';
};

hamimage.addEventListener('click', menuOpen);
crossImg.addEventListener('click', menuClose);
mobMenuItems.forEach((item) => {
  item.addEventListener('click', menuClose);
});
