const dropdownBtn = document.querySelector('#dropdown');
const dropdownMenu = document.querySelector('#dropdown-menu');

dropdownBtn.addEventListener('click', function () {
  dropdownMenu.classList.toggle('hidden');
  dropdownMenu.classList.toggle('flex');
});

//list of categories
const sapCon = document.getElementById('sap-consulting');
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

  sapConBlock.classList.remove('hidden');
  sapClientsBlock.classList.add('flex');
  independentBlock.classList.add('hidden');
  sapClientsBlock.classList.add('hidden');
});

independent.addEventListener('click', () => {
  sapClients.classList.remove('bg-brightBlue');
  sapCon.classList.remove('bg-brightBlue');
  independent.classList.add('bg-brightBlue');

  independentBlock.classList.remove('hidden');
  independentBlock.classList.add('flex');
  sapConBlock.classList.add('hidden');
  sapClientsBlock.classList.add('hidden');
});

sapClients.addEventListener('click', () => {
  sapClients.classList.add('bg-brightBlue');
  sapCon.classList.remove('bg-brightBlue');
  independent.classList.remove('bg-brightBlue');

  sapClientsBlock.classList.remove('hidden');
  sapClientsBlock.classList.add('flex');
  sapConBlock.classList.add('hidden');
  independentBlock.classList.add('hidden');
});
