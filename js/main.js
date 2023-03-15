const mobileBtn = document.querySelector('#menu');
const mobileMenu = document.querySelector('#mobile-menu');

mobileBtn.addEventListener('click', function () {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');
});

const dropdownBtn = document.querySelector('#dropdown');
const dropdownMenu = document.querySelector('#dropdown-menu');

dropdownBtn.addEventListener('click', function () {
  dropdownMenu.classList.toggle('hidden');
  dropdownMenu.classList.toggle('flex');
});

const dropdownBtn1 = document.querySelector('#dropdown-mobile');
const dropdownMenu1 = document.querySelector('#dropdown-menu-mobile');

dropdownBtn1.addEventListener('click', function () {
  dropdownMenu1.classList.toggle('hidden');
  dropdownMenu1.classList.toggle('flex');
});

//list of categories
const sapCon = document.getElementById('sapconsulting');
const independent = document.getElementById('independent');
const sapClients = document.getElementById('sap-clients');

//block of text for each category
const sapConBlock = document.getElementById('sap-consulting-block');
const independentBlock = document.getElementById('independent-block');
const sapClientsBlock = document.getElementById('sap-clients-block');


sapCon.addEventListener('click', (e) => {
  sapClients.classList.remove('bg-brightBlue');
  sapCon.classList.add('bg-brightBlue');
  independent.classList.remove('bg-brightBlue');

  sapConBlock.classList.remove('md:hidden');
  sapClientsBlock.classList.add('flex');
  independentBlock.classList.add('hidden');
  sapClientsBlock.classList.add('hidden');
});

independent.addEventListener('click', () => {
  sapClients.classList.remove('bg-brightBlue');
  sapCon.classList.remove('bg-brightBlue');
  independent.classList.add('bg-brightBlue');

  independentBlock.classList.remove('md:hidden');
  independentBlock.classList.add('flex');
  sapConBlock.classList.add('hidden');
  sapClientsBlock.classList.add('hidden');
});

sapClients.addEventListener('click', () => {
  sapClients.classList.add('bg-brightBlue');
  sapCon.classList.remove('bg-brightBlue');
  independent.classList.remove('bg-brightBlue');

  sapClientsBlock.classList.remove('md:hidden');
  sapClientsBlock.classList.add('flex');
  sapConBlock.classList.add('hidden');
  independentBlock.classList.add('hidden');
});

