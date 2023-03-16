const mobileBtn = document.querySelector('#menu');
const closeBtn = document.querySelector('#close-menu');
const mobileMenu = document.querySelector('#mobile-menu');
const openMenu = document.querySelector('body');

mobileBtn.addEventListener('click', function () {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');
  openMenu.classList.toggle('open-menu');
});

closeBtn.addEventListener('click', function () {
  mobileMenu.classList.toggle('flex');
  mobileMenu.classList.toggle('hidden');
  openMenu.classList.toggle('open-menu');
});

const dropdownBtn = document.querySelector('#dropdown');
const dropdownMenu = document.querySelector('#dropdown-menu');

dropdownBtn.addEventListener('click', function () {
  dropdownMenu.classList.toggle('hidden');
  dropdownMenu.classList.toggle('flex');
});

const dropdownBtn1 = document.querySelector('#dropdown-mobile');
const dropdownMenu1 = document.querySelector('#dropdown-menu-mobile');
const rotated = document.getElementById('rotated');


dropdownBtn1.addEventListener('click', function () {
  dropdownMenu1.classList.toggle('hidden');
  dropdownMenu1.classList.toggle('flex');
  rotated.classList.toggle('rotate-180');

 });


